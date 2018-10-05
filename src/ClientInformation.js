class ClientInformation {
    get clientID() {
        return this._clientID;
    }

    set clientID(value) {
        this._clientID = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
    _clientID;
    _name;
    _address;
    _phone;
    _email;
}