Feature: Validate the Practice Automation Site for login functionality

    Scenario: Login with Valid Credentials
        Given Visit Practice Automation site for login
        When Enter the Username and Password
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
        Then Click on Submit button
        And Validate the Dashborad Text


    Scenario Outline: Login with Valid Credentials with multiple users
        Given Visit Practice Automation site for login
        When Enter the "<Username>" and "<Password>"
        Then Click on Submit button
        And Validate the Dashborad Text "<Username>"


        Examples:
            | Username          | Password  |
            | Komal06@test.com  | Komal06$  |
            | Snehal06@test.com | Komal06$ |
            | Saba06@test.com   | Komal06$ |