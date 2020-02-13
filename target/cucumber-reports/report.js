$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#without examples keyword"
    }
  ],
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in banking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into application username with \"jin\" and password with \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_in_banking_landing_page()"
});
formatter.result({
  "duration": 216701200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 43
    },
    {
      "val": "4321",
      "offset": 67
    }
  ],
  "location": "stepDefination.user_login_into_application_username_with_something_and_password_with_something(String,String)"
});
formatter.result({
  "duration": 3564900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 145900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_are_displayed_something(String)"
});
formatter.result({
  "duration": 205700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "#with examples keyword"
    }
  ],
  "line": 11,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is in banking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application username with \"\u003cusername\u003e\" and password with \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "john",
        "1234"
      ],
      "line": 19,
      "id": "application-login;home-page-default-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is in banking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application username with \"john\" and password with \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_in_banking_landing_page()"
});
formatter.result({
  "duration": 158300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 43
    },
    {
      "val": "1234",
      "offset": 68
    }
  ],
  "location": "stepDefination.user_login_into_application_username_with_something_and_password_with_something(String,String)"
});
formatter.result({
  "duration": 234900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_are_displayed_something(String)"
});
formatter.result({
  "duration": 162100,
  "status": "passed"
});
});