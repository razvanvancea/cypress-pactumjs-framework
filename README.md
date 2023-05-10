## Simple framework skeleton that uses **Cypress** for Web tests and **PactumJS** for API tests.

## Prerequisites

NodeJS [SETUP Tutorial](https://youtu.be/j8HZpFjPPVU)

Git [SETUP Tutorial](https://www.youtube.com/watch?v=0XJMg1ZMSEo)

Visual Studio Code (IDE) [Download here](https://code.visualstudio.com/download)

Google Chrome Browser [Download here](https://www.google.com/chrome)

## Setup (one time action)

Open up the CLI and run

```sh
npm install
```

## How to run the tests?

Open up the CLI and run the following

For api tests

```sh
npm run test-api
```

For web tests

```sh
npm run test-web
```

## Test results

Both web and API tests show by default the real-time execution results in CLI

API tests report will also be generated as HTML file in the results/mochawesome.html file (feel free to open it in browser)

WEB tests can be configured with multiple reporters (including HTML as well)

There are lots of NPM packages that we import into the project (e.g. faker for random data generation, dotenv for dynamic URLs) + design patterns like page object model and many more.
