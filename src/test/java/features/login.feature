Feature: Application Login

#without examples keyword
Scenario: Home page default login
Given User is in banking landing page
When User login into application username with "jin" and password with "4321"
Then Home page is populated
And Cards are displayed "true"

#with examples keyword
Scenario Outline: Home page default login
Given User is in banking landing page
When User login into application username with "<username>" and password with "<password>"
Then Home page is populated
And Cards are displayed "false"

Examples:
      |username|password|
      |john|1234|
      
