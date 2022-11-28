# UI Test with Playwright for Behavio project

Find information above for running tests
### Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/).
    * The project is written using v16.14.2 version of Node.js and v1.27.1 version of Playwright
    
2. Project Dependencies
    * `cd` to root directory of the project
    * Install Node modules using:
    
      ```
      npm install
      ```

### Running Tests

* Run all tests in headless mode using:
  ```
    Dev environment: npm run test-dev
    Stage environment: npm run test-stage
    Prod environment: npm run test-prod
  ```

* Run all tests in headed mode using:
  ```
    Dev environment: npm run test-dev-headed
    Stage environment: npm run test-stage-headed
    Prod environment: npm run test-prod-headed
  ```
* Run tests individually in headless mode using:
  ```
    Dev environment: npm run test-dev-individually <path to test file>
    Stage environment: npm run test-stage-individually <path to test file>
    Prod environment: npm run test-prod-individually <path to test file>
  ```

* Run tests individually in headed mode using:
  ```
    Dev environment: npm run test-dev-individually-headed <path to test file>
    Stage environment: npm run test-stage-individually-headed <path to test file>
    Prod environment: npm run test-prod-individually-headed <path to test file>
  ```
  
### Generating and opening reports

* Generate allure reports:
  ```
  npx allure generate allure-results -o allure-report --clean
  ```
  
* Open allure reports:
  ```
  npx allure open allure-report
  ```
