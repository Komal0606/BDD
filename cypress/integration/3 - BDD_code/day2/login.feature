Feature: Login to url

Scenario: Login to Practice Test Automation website
Given Visit Practice Test Automation site
And Enter Username 
And Enter Password
Then Click on Login Button
And Validate the Dashboard

Scenario: Login to Practice Test Automation website with Invalid credentials
Given Visit Practice Test Automation site
And Enter Invalid Username 
And Enter Invalid Password
And Validate the error msg

Scenario: Login to Orange HRM website
Given Visit Orange HRM site
And Type Username
And Type Password
Then Click on Button Login
And Validate Dashboard

Scenario: Login to Orange HRM website with Invalid Credential
Given Visit Orange HRM site
And Type Invalid Username
And Type Invalid Password
Then Click on Button Login
Then Validate Error message


