import TokenRegistrationPageModel from "./TokenRegistrationPageModel";
import {RequestLogger, RequestMock, Selector} from "testcafe";

// Arrange
const logger = RequestLogger("http://localhost:3007/");
const mock = RequestMock()
    .onRequestTo(`http://3.254.52.179:8080/getUserInfo`)
    .respond({
        name: "John Okonkwo",
        tokenData: {
            token: "123456"
        }
    }, 200, { 'access-control-allow-origin': '*','access-control-allow-headers':'*' })

const page = new TokenRegistrationPageModel();
const payeeIdTypeOption = page.paymentTypeDropdown.find("option");

fixture `Test Payment Token Registration`
    .page `http://localhost:3007/?nonce=ere973eieljznge2311&state=eree2311#eyJ0cmFuc2FjdGlvbklkIjoiWljpbXX0=&code=123456`
    .requestHooks([mock, logger])

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

test.skipJsErrors(true)("Pressing the submit button", async t => {
    await t
        .click(page.paymentTypeDropdown)
        .click(payeeIdTypeOption.withText("MSISDN"))
        .typeText(page.payeeId,"8394U3434")
        .click(page.registerButton)
        .wait(1000)
        .expect(Selector("#tokenDataDiv").exists).eql(true);
});