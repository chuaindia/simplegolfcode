# Golf Code

In the game of [golf](https://en.wikipedia.org/wiki/Golf) each hole has a `par` meaning the average number of `strokes` a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.

Write a function that will be passed `par` and `strokes` arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

<table class='table table-striped'><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` and `strokes` will always be numeric and positive.

Submit a pull request to the main branch with your solution. Do not modify the tests. Once you have created a PR with passing tests, then you have successfully completed the exercise.
