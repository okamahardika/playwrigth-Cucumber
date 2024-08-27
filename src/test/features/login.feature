Feature: Login

    Feature Description : Login

Background:  
    Given user access dashboard 'localhost//:8080'

Scenario: User login with valid credential
    When user input org ID 'orgId'
    * user input Email 'example@gmail.com'
    * user input Password 'example_password'
    * user click login button
    Then user should can login and see overview page

Scenario Outline: User login with invalid credential Email
    When user input org ID 'orgId'
    * user input Email "<email>"
    * user input Password "<password>"
    * user click login button
    Then email should showing error 'Please enter a valid email address.'

Examples:
    |       email       |       password        |
    |hdhajdjhjsahjdj    |   example_password    |
    |                   |    example_password   |

Scenario: user login with space only orgID
    When user input org ID '           '
    * user input Email 'example@gmail.com'
    * user input Password 'example_password'
    * user click login button
    Then organisation ID should showing error 'Please enter a valid organisation identification'