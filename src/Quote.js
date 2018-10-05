class Quote {
    get clientID() {
        return this._clientID;
    }

    set clientID(value) {
        this._clientID = value;
    }

    get gallonsRequested() {
        return this._gallonsRequested;
    }

    set gallonsRequested(value) {
        this._gallonsRequested = value;
    }

    get deliveryDate() {
        return this._deliveryDate;
    }

    set deliveryDate(value) {
        this._deliveryDate = value;
    }

    get deliveryLocation() {
        return this._deliveryLocation;
    }

    set deliveryLocation(value) {
        this._deliveryLocation = value;
    }

    get deliveryContactName() {
        return this._deliveryContactName;
    }

    set deliveryContactName(value) {
        this._deliveryContactName = value;
    }

    get deliveryContactEmail() {
        return this._deliveryContactEmail;
    }

    set deliveryContactEmail(value) {
        this._deliveryContactEmail = value;
    }

    get suggestedPrice() {
        return this._suggestedPrice;
    }

    set suggestedPrice(value) {
        this._suggestedPrice = value;
    }

    get totalAmountDue() {
        return this._totalAmountDue;
    }

    set totalAmountDue(value) {
        this._totalAmountDue = value;
    }
    _clientID;
    _gallonsRequested;
    _deliveryDate;
    _deliveryLocation;
    _deliveryContactName;
    _deliveryContactEmail;
    _suggestedPrice;
    _totalAmountDue;
}