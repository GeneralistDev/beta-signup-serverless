'use strict';

class NewSignup {
    email: String;
    firstname: String;
    lastname: String;
    subscribe: Boolean;
    createdTimestamp: Date;

    constructor(email: String, firstname: String, lastname: String, subscribe: Boolean) {
        this.createdTimestamp = new Date();
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.subscribe = subscribe;
    }

    dto() {
        return {
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
            subscribe: this.subscribe,
            createdTimestamp: this.createdTimestamp.toISOString(),
        };
    }
};

export { NewSignup as NewSignup };