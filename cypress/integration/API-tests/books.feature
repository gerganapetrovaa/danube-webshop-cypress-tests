Feature: Book's total number
    I want to see the total number of books

    Scenario: Verifying the total number of books

        When I get all books
        Then I should see a total of 30 books

