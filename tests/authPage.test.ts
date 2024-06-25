import {ClientFunction, RequestLogger, t} from 'testcafe';

const logger = RequestLogger("http://localhost:3007/");

fixture `Test E signet redirect`
    .page `http://localhost:3007/auth`
    .requestHooks(logger);


// Tests
test.skipJsErrors(true)("Test redirect to esignet VID verification page", async t => {
    const getLocation = ClientFunction(() => document.location.href);

    await t.expect(getLocation()).contains('esignet.collab.mosip.net');
});