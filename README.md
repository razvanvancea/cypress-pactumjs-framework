Very simple framework skeleton that uses Cypress for Web tests and PactumJS for API tests.

Prerequisites:
NodeJS installed on local machine
Chrome browser

Setup (one time action):

Open up the CLI and run 'npm install'

How to run?
Open up the CLI and run the following

For api tests
npm run test-api

For web tests
npm run test-web


== Test results ==
both web and API tests shows by default the results in CLI

API tests report will be generated as HTML file in the results/mochawesome.html file (feel free to open it in browser)

WEB tests can be configured with multiple reporters (including HTML as well)

There are lots of NPM packages that we import into the project (e.g. faker for random data generation, dotenv for dynamic URLs) + design patterns like page object model and many more.
