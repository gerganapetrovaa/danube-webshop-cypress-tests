Feature: Genre's count
    I want to see how much items are in each genre

    Scenario Outline: Verifying the <name> genre contains <count> items

        Given I sign up to the site
        When I go to the "<name>" genre
        Then I should see <count> books

        Examples:
            | name              | count |
            | Crime & Thrillers | 3     |
            | Novels & Stories  | 16    |
            | Erotic Novels     | 1     |
            | Sci-Fi            | 3     |
            | Fantasy           | 2     |
            | Horror            | 4     |



