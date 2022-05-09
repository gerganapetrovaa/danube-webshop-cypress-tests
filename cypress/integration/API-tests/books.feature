Feature: Book's total number
    I want to see the total number of all books and total number of books with rating one

    Scenario: Verifying the total number of books

        When I get all books
        Then I should see a total of 30 books

    Scenario: Verifying the total number of books with one star rating

        When I get all books
        Then I should see a total of 2 books with one star rating
