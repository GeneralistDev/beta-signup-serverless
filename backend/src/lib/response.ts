'use strict';

import 'source-map-support'

// This is to ensure you don't get CORS errors in the browser
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
};

const common = (statusCode: number, body?: any, error?: any) => {
    return {
        statusCode: statusCode,
        headers: headers,
        body: JSON.stringify({
            data: body,
            error: error,
        }),
    };
};

export const Response = {
    ok: (body: any) => {
        return common(200, body);
    },
    badRequest: (body:any, error: any) => {
        return common(400, body, error);
    },
    internalServerError: () => {
        return common(500);
    },
};;