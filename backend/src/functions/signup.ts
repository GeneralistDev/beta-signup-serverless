'use strict';
import 'source-map-support/register'
import { NewSignup } from '../types/NewSignup';
import { Response } from '../lib/response';
import * as AWS from 'aws-sdk';

const docClient: AWS.DynamoDB.Types.DocumentClient = new AWS.DynamoDB.DocumentClient();

export const handler = async (event, context, callback) => {
    try {
        const body = JSON.parse(event.body);
        const newSignup: NewSignup = new NewSignup(
            body.email, 
            body.firstname, 
            body.lastname, 
            body.subscribe
        );

        const fetchParams = {
            TableName: process.env['SIGNUPS_TABLE'],
            Key: {
                email: newSignup.email,
            },
        };

        const existingUser = await docClient.get(fetchParams).promise();

        console.log('existingUser', existingUser.Item);

        if (existingUser.Item) {
            callback(null, Response.badRequest('You have already registered', null));
        } else {
            const params = {
                TableName: process.env['SIGNUPS_TABLE'],
                Item: newSignup.dto(),
                ConditionExpression: 'attribute_not_exists(email)'
            };
    
            const result = await docClient.put(params).promise();
    
            callback(null, Response.ok(newSignup.dto()));
        }
    } catch (e) {
        console.log('Something failed');
        console.log(e);
        callback(null, Response.badRequest('Something went wrong', e));
    }
};