# Cypress Page Object Model (POM) Framework

This project is built using Page Object Model (POM) using Cypress . It also supports allure reporting and visual testing .


## Setup
* Clone this repository/download the project  
* Navigate to the cloned folder/downloaded folder  
* Install node and npm using  
* Install the dependencies with respect to this project by `npm install`  
example: npm install cypress --save-dev   
npm i cypress-plugin-snapshots -S  // reference: https://github.com/meinaart/cypress-plugin-snapshots  


## To Run the tests

To make the command line run options easier, added common run options as scripts in `package.json` file.

For a simple run of all the feature files in normal mode without any video recording, try
```
npm run test
```
For a simple run of all the feature files in normal mode with video recording, try
```
npm run test:video
```
To run the tests with specific spec file, try
```
npm run test -- --spec <Path to the spec file>
```

To Run through thests using Visual UI

```
npx cypress open 
```

### Headless

To run the tests in headless mode,
```
npm run test -- --headless
```
To run the tests in headed mode,
```
npm run test -- --headed
```

# Workaround for timeout:  
Log error: Cypress verification timed out. ,Command timed out after 30000 milliseconds: increase the time out from 30000 to 100000 in verify.js file inside \nodemodules\cypress\lib\tasks
![alt text](https://github.com/oletishiva/cypressDemo/blob/main/image.png)



## Supports
* Allure reporting
* Integration with Jenkins Integration
* Run Via CLI command
* Headless run
* Failed Screenshots
* Retries of failed tests 

# How to configure Allure Reports

download allure framework as zip file and add path to the user environment variable  
https://github.com/allure-framework/allure2  
Configure allure report settings with cypress  
npm i -D @shelex/cypress-allure-plugin  
Add Allure plugin to cypress plugins. To do that add the following code snippet of allurewriter inside the plugins/index.js file.  

const allureWriter = require('@shelex/cypress-allure-plugin/writer');  
module.exports = (on, config) => {  
  allureWriter(on, config);  
  return config;  
  }  

Then register the command of allure plugin with cypress/support/index.js file  
import '@shelex/cypress-allure-plugin';  


Add below to the cypress.json file
1.  
"projectId": "ProjectName",  
  "reporter": "cypress-multi-reporters",  
  "reporterOptions": {  
    "configFile": "cypress/support/cypress-multi-reporters.json"  
  },
2.  
"env":{  
 "allureResultsPath": "allure-results",  
    "allure": true  
}  

3. Create cypress-multi-reporter.json file add following line to this file  
{  
    "reporterEnabled": "@mochajs/json-file-reporter, mochawesome"  
}  


# How to see allure report  
1. Go to the project folder generate allure report using the below command  
allure generate --clean  
allure open --> It will open the report the in browser  
![alt text](https://github.com/oletishiva/cypressDemo/blob/main/allureserverstart.png)

## Jenkins Integration

In Jenkins pipeline, try to add the following snippet to execute the tests,
```
pipeline {
    agent { docker { image 'cypress/browsers' } }
    stages {
        stage('build') {
            steps {
                sh 'cd project/'
                sh 'npm install'
                sh 'npm run test' # or custom methods
            }
        }
    }
}
```



## Test Cases Breakdown

### Step 1: Adding locators as Key and Value Pairs to the project 

1. Add locator methods inside the `locators` folder structure. Locators are declared in namespaces as key & value failres.so that we can use them in pages to define the reusable methods.Name the page files Ends with `<spec_name>Loc.js` so that we wont get confused with the file functionality.

```
export default{
    txt_email:'input[name="email"]',
    txt_password:'input[name="password"]',
    btn_login:'[data-cy="auth__login__email__button"]'
  

}

```

### Adding locator methods and page methods to the project

1. Add locator methods to get the locator based on get or contains ,page specific methods inside the `pages` folder structure. Pages are declared in namespaces so that we can directly call them within the tests without any declarations. Name the page files ends with `<spec_name>Page.js` so that we wont get confused with the file functionality.

```
export default{

    getTxt_email:function(){
       return cy.get(loginPageLoc.txt_email)
    },
    getTxt_password:function(){
        return cy.get(loginPageLoc.txt_password)
     },
     getBtn_login:function(){
        return cy.get(loginPageLoc.btn_login)
     },
	 }

```

2. For each page add make sure a locator page is added and included within the page file. We need to declare the locator identifiers within the locator file and then need to use that in pages.

```
import loginPageLoc from "../locators/loginPageLoc";
```

### new spec file Creation in the project

1. Spec files are created by default cypress standard and we could use all the hooks and definitions that are supported by cypress.

2. Hooks are added Globally within the `support/hooks.js` which is included in the `support/index.js` file. 
