Feature: Book's total number and total books rated with one star
    I want to see the total number of books and number of books rated with one star

    Scenario: Verifying the total number of books

        When I get all books
        Then I should see a total of 30 books

