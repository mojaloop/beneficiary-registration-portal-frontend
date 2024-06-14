import TokenRegistrationPageModel from "./TokenRegistrationPageModel";
import {Selector} from "testcafe";

const page = new TokenRegistrationPageModel();
const payeeIdTypeOption = page.paymentTypeDropdown.find("option");

fixture `Test Payment Token Registration`
    .page `http://localhost:3007/`;

// Tests
test("Test selecting payment id type should pass if correct option is chosen", async t => {
    await t
        .click(page.paymentTypeDropdown)
        .click(payeeIdTypeOption.withText("MSISDN"))
        .expect(page.paymentTypeDropdown.value).eql("MSISDN");
});

test("Typing data into the payeeId field", async t => {
    await t
        .typeText(page.payeeId,"8394U3434")
        .expect(page.payeeId.value).eql("8394U3434");
});

test("Pressing the submit button", async t => {
    await t
        .click(page.paymentTypeDropdown)
        .click(payeeIdTypeOption.withText("MSISDN"))
        .typeText(page.payeeId,"8394U3434")
        .click(page.registerButton)
        .wait(1000)
        .expect(Selector("#errorDiv").exists).eql(true);
});