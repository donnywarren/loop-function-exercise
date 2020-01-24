# Functions, Functions, Functions!

![Functions, Functions, Functions](https://media.giphy.com/media/toXKzaJP3WIgM/giphy.gif)

## Learning Objectives

We want you to flex your functions muscles! For tonight's HW, you will practice the following:
 - Defining a function
 - Understanding the difference between parameters and arguments
 - Understanding scope as it relates to functions
 - Manipulating various data types within a function
 
## Setup

1. Fork this repo into your account.
1. Once the forking is complete, **clone** the repo onto your computer.
1. From the command-line: 
    - `cd` into the newly created directory
    - `npm i` <br>(This is important😤! Otherwise you won't have the automated tests and necessary tools!).
1. Open `funcs.js` 
    - We should all be using VSCode. In the command-line run `code .` 
    
Each function and its behavior are described below <br>

All the function names are already inside the file; you just need to implement the function by adding code inside each one.<br>

The functions MUST pass the automated tests <br>

**To check your functions, run `npm t` in the terminal**

 
## Do the Exercise !

Here is some information/tips for the functions you will be creating:

`maxOfTwoNumbers`
> Write a function that takes two numbers and returns the max of the two numbers

`isCharacterVowel`
> Write a function that takes a character and returns **true** if it's a vowel. Otherwise, it should return **false** <br>
> **HINT:** This may be a perfect time to use a `switch` statement, or an `if` `else` statement, or both 🤷

`meanCharacter`
> Write a function that takes a 'villain' and a 'movie'. The function should return the string: <br><br>
>"{villain} is the meanest character in {movie}"<br><br>
> **EXAMPLE:** "Joker is the meanest character in Batman"<br>
> **HINT:** You will need string interpolation for this function. For a recap of this, look through [EJS CH.1](http://eloquentjavascript.net/01_values.html)


>**NOTE:** The test for this function has some hard coded values that may not sync with your villains and movies. If you see them, do not feel the need to use those villains/movies. It just means your function was not written correctly.

`tempConverter`
> Write a function that takes the temperature in Fahrenheit, converts it to Celsius, and returns the value.<br>
> **HINT:** Celsius = 5/9 (Fahrenheit-32)

`perfectSquares`
> Write a function that returns an array of the perfect squares from 1-100 (inclusive)<br>

## Workflow

After each completed function, you should `git add .` and then `git commit -m` with a message so that we can see your progress.

Make sure to `git push origin master` when your all done.

## BONUS!!

`countDown`
> Write a function that will print the values from n down to 0<br>

`findBigString`
> Write a function that takes an array of strings and returns the longest string in the array.

## Completion

Make all the test pass by completing the functions (`npm t` should show all green checks)
