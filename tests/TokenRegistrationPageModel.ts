import { Selector } from 'testcafe';

class TokenRegistrationPageModel {
    paymentTypeDropdown: Selector;
    payeeId: Selector
    registerButton: Selector;

    constructor() {
        this.paymentTypeDropdown = Selector("#paymentType");
        this.payeeId = Selector("#payeeId");
        this.registerButton = Selector("#submitButton");
    }

}

export default TokenRegistrationPageModel