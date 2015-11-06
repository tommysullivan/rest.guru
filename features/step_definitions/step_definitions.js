module.exports = function() {

  this.Given(/^there are (.*) enterprises$/, function (numEnterprises, callback) {
    // Write code here that turns the phrase above into concrete actions

    callback.pending();
  });

  this.Given(/^(.*) devices have been invited$/, function (numInvitedDevices, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^they each have a CSV containing (.*) email addresses$/, function (numEmails, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there are (.*) L(\d+)E hosts in the testing environment$/, function (arg1, numL4EHosts, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there are (.*) Storm nodes in the testing environment$/, function (numStormNodes, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there are (.*) Kafka nodes in the testing environment$/, function (numKafkaNodes, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^the connection speed is (.*)$/, function (uploadBitsPerSecond, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^each enterprise initiates the CSV upload simultaneously$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the UI does not give a "([^"]*)" dialogue box$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^the UI gives feedback within (.*) seconds$/, function (initialResponseSeconds, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^(.*) percent of invites are sent to SendGrid within (.*) seconds$/, function (percentile, acceptableLatency, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^a link to a detailed report of latencies between the Browser, BorderPatrol, Keymaster, L(\d+)E, SQL, Kafka, Storm and SendGrid appears in test run output$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there are (.*) enterprises$/, function (numEnts, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there are (.*) enterprises with (.*) devices set up that are not involved in the test$/, function (x, y, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^they each have a MobileIron instance containing (.*) devices$/, function (numDevices, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^there are (.*) Evergreen hosts in the testing environment$/, function (numEvergreenHosts, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^the connection speed between MDM and Evergreen is (.*)$/, function (uploadBitsPerSecond, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^the polling interval if set to (.*) seconds$/, function (pollingInterval, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I tag (.*) devices for enrollment$/, function (numTags, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^(.*) percent of invites are sent to SendGrid within (.*) seconds$/, function (percentile, acceptableLatency, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
}