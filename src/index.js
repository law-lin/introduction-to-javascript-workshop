// Level 1

/*
    Comments
    ========
    Let's start with comments. This is a comment. Comments are notes that people
    can read and computers will ignore.
    They will help us to guide you through the JavaScript introduction
    journey.
    A comment can either be a single line comment, or a multi line comment block
*/

// Single line comments look like this. Just add // to the left of your comment.

/*
    Multi-line comments look like this.
    When you are writing actual code, put it outside these comment blocks,
    so the computer doesn't ignore them.
*/

/*
    Displaying text
    ===============
    Let's start with getting your code on the screen.
    There are a few ways you can do it and we will look into a few of them:
    alert('Hello World!');
        This line of code will pop-up a small window in your browser with the
        text 'Hello World!' in it, when you refresh the opened page.
    console.log('Hello World!');
        This line of code will print 'Hello World!' to the browser's console.
    P.S.: To see the browser's console you can right click on the window of your
    browser (Chrome, Firefox, Opera etc) and select 'Inspect' or 'Inspect element'.
    After that a console will appear on the bottom or right side of the page.
    More info in the file `Readme.md`
*/

// TODO: Now it's your turn! Try to create an alert with any phrase you want.

// TODO: Once the alert works for you, comment it out (put '//' on the line
//       where your code is and save the changes). After you refresh the page,
//       it should not pop-up anymore.

// TODO: Shall we try to console.log a message to the browser?
//       Send any message you want.

// TIP: Shortcut to refresh a browser is 'CMD + R' on Mac and 'CTRL + R' on
//      Windows.

// TIP: Shortcut to save changes to file is 'CMD + S' on Mac and 'CTRL + S' on
//      Windows.

/*
    Variables
    =========
    A variable is a place to store information. To create (also called declare)
    a variable use the keyword 'let', as follows:
    let variableName;
    So, we created a variable named variableName, but it has no information or
    value inside. It is `undefined`.
    If we print the variable to the console we can see that.
    console.log("variableName is " + variableName);
    The result will be "variableName is undefined".
    To give our variable a value (assign a value) use the '=' sign:
    variableName = 'Hello world!';
    We also can create and give value to a variable in one step (initialize it):
    let newVariable = 1;
    As you can notice, we can give different types of values to our variables -
    Strings, Numbers, Booleans etc.
    Strings - a set of characters, word(s), or phrases that we wrap in quotes,
              like 'hello world!'. This can be anything, including numbers.
    Numbers - either integer or floating point (decimal). Not wrapped in quotes.
    Boolean - it represents logical values - true or false.
    P.S. You may see code that uses the keyword 'var' instead of 'let'.
    This is an older keyword that also creates variables, but with different
    rules about where that variable is available ("scope"). For now, consider
    'let' and 'var' as essentially equivalent, but use 'let' because it is less
    prone to programming mistakes.
*/

// TODO: Now create two undefined variables named numberOne and numberTwo.

/*
    You can use the name of your variables to represent what information
    that they have inside.
    Example:
    let hello = 'Hello World';
    alert(hello);
    This will pop-up an alert box with the string 'Hello World!'
*/

// TODO: Create 2 new variables, 1 with your name and the 2nd with your age,
//       give them appropriate names and display them with an alert pop-up box.

// TIP: to display both variables at the same time,
//      you can join them with the '+' sign.

/*
    Constants
    =========
    A constant is just like a variable, but it must be given a value when it is
    declared (created), and that value can never change. In other words, a
    constant always contains the same information.
    To declare (create) a constant, we use the keyword 'const'.
    Example:
    const earthRadiusKm = 6371;
    Assigning a new value to the constant will cause an error, we can not do:
    earthRadiusKm = 6400;
    The name of constants can also be used to represent the information they
    contain, in the same way as variables.
*/

// TODO: Create a constant, and display it an alert pop-up box.

// TODO: Try to assign a new value to your constant to see what happens.

// TIP: Don't forget to comment out alerts if you don't want them to pop-up
//      every time.

/*
    Maths - Arithmetic Operators
    ============================
    There are a bunch of different 'operators' in programming. Let's have a look
    through arithmetical operators now. JavaScript includes several standard
    arithmetical operators (+, -, /, *) that you can use to do maths with your
    numbers.
    Example:
    const sumOfNumbers = 1 + 3;
    console.log(sumOfNumbers);
    This will print the number 4 in our console.
    TIP: Note how we didn't put 1 and 3 in quotes, because they are numbers.
*/

// TODO: Create 3 variables:
//
// * 1st variable named ten with value 10
// * 2nd variable named three with value 3
// * And finally 3rd variable named multipleOfNumbers that will be equal to
// 1st variable multiplied by the 2nd variable.

// TODO: And in the end display the value of multipleOfNumbers.

/*
    Functions
    =========
    A function is a set of instructions that performs the same task every time
    we call it. It takes input in the form of 'arguments', calculates a result
    based on the input and returns the result as output.
    To create a function use the following format:
    function functionName(argumentName) {
        return argumentName * 2;
    };
    This function will take one 'argument' and 'return' the argument multiplied
    by 2. An argument works like a variable, if something is passed to the
    function the argument contains that value, and if nothing is passed then
    the argument is undefined.
    Our function won't actually run unless we 'call' it.
    To 'call' the function we write:
    functionName(10);
    This will call our function with the argument 10. And our function
    will return 20. To see what our function returns we can console.log it,
    for example:
    console.log(functionName(10));
    This takes the result of our function and sends it to console.log.
    TIP: The keyword 'return' is used to define the return value, we can do
         things before the line with 'return' on it,
         but after we 'return' the function ends.
    TIP: We can accept multiple arguments by separating them with a comma:
         function functionName(argument1, argument2) {}
*/

// TODO: It's your turn to create a function.

// Create a function called 'add'.
// Tell it to accept two arguments (number1 and number2)
//  - To pass multiple arguments into function we separate them with a comma.
// Tell it to return a sum of number1 and number2.
// Call the function passing numbers 2 and 3 as arguments.
//  - To see the result you can console.log it.

// TODO: Great, you made it! Now let's create another function named 'subtract',
//       Tell it to accept 2 arguments, number1 and number2, and subtract
//       number2 from number1 then return that value.
// Call it with the numbers 5 and 1 and console.log the result.

// P.S.: Do you know that instead of numbers you can create variables that store
// those numbers and pass them as an arguments to your function? Try it out!

// P.P.S.: Leave the functions as they are, don't comment them out,
//        we will use them again.

/*
    If-Else Statements
    ==================
    What if we want our program to make a decision about which function it
    should run? This is when we use conditions! If you have a TV you can
    watch it in the evening. If not, you might do something else.
    It's the same with code. You can give an 'if' condition to a machine to
    make a decision about what part of the code to run.
    Structure:
    if (condition) {
        do this
    } else {
        do something else
    }
    We need condition to either be true or false, so if we have something like
    a number we need to compare it to something.
    Example:
    const number = 7;
    if (number >= 7) {
        console.log('Our number is bigger than or equal to 7');
    } else {
        console.log('Our number is smaller than 7');
    }
*/

/*
    Comparison Operators
    ====================
    Earlier we introduced JavaScript's arithmetic operators. Now comes time to
    introduce you to the next set of operators. 'Comparison operators' are used
    to compare values (>, <, <=, >=, ===, !==). Most of them you know from math
    classes in school, some of them can be new for you:
    '===' checks equality, results in true if two values are equal.
    '!==' checks inequality, results in true if two values are not equal.
    TIP: Don't mix up '=' and '===' as they have different meanings.
         '=' means Assign
         '===' means Is it equal
         There are also '==' and '!=' operators, which are very similar to '==='
         and '!==', but with a slightly different meaning that is more prone to
         programming errors, so you should always use '===' and '!=='.
    The result of a comparison operator is a boolean value (true or false).
    For example:
    3 < 4 is true.
    1 + 1 === 3 is false.
*/

// TODO: So now we have 2 functions from the previous task - add and subtract.
//       Let's tell the machine to decide which to run depending on the
//       arithmetical operator (+,-,/, * etc).
//
//       If the operator is '+', we should use the add function,
//       else we should use the subtract function.
//
// Step 1 - Create a variable called operator and let it be equal to '+'.
// Step 2 - Create 2 variables with any 2 numbers.
// Step 3 - Create an if/else statement based on what operator we have.
//
// If we have an operator equal to '+', we call the add function with our numbers,
// else we call the subtract function with our numbers.
//
// Don't forget to console.log it to see the result.

// TODO: Change your operator to '-', and check that it calls the
//       subtract function instead.

/*
    If - Else if - Else
    ===================
    Hmm, but what if we have 4 arithmetical operations in our calculator? Well,
    we can use an if - else if - else structure.
    Example:
    const number = 7;
    if (number > 7) {
        console.log('Our number is bigger then 7');
    } else if (number < 7) {
        console.log('Our number is smaller then 7');
    } else {
        console.log('Our number is equal to 7');
    }
    TIP: We can use any number of 'else if' statements in a row.
         The first one which is true is the only one which happens.
*/

// TODO: Let's create 2 more functions and name them 'divide' and 'multiply'.

// TODO: Then let's extend our 'if else' check that we already created by adding
//       'else if' operator is equal to '+' - call 'add' function,
//       'else if' operator is equal to '/' - call 'divide' function,
//       'else if' operator is equal to '*' - call 'multiply' function
//       else console.log - "Sorry, we don't know this operator".
//       (Copy it to here and comment out the first version)

/*
    Boolean Operators
    =================
    Putting an exclamation (!) before a Boolean variable gives
    the opposite value. The ! is called a "not" operator when
    used this way.
    The result of a comparison is a Boolean value, we can save it to a variable
    const bool = (1 < 2);
    Then we can check if 'bool' is true or false by using console.log
    console.log(bool); // This will return true
    console.log(!bool); // "not true", therefore returns false
    console.log(bool); // The original value isn't affected, still returns true
    We can also assign a Boolean value straight to a variable with the keywords
    true and false:
    const aLie = false;
    let previousStatement = true;
*/

// TODO: Try inverting a true or false value and print the result to the console

// Level 2

/*
    Introduction
    ============
    Welcome to level 2! It is time to interact with HTML.
    Hyper Text Markup Language (HTML) files are the backbone of the internet.
    Every website you visit is loaded first as an HTML file.
    We won't talk too much about HTML today. What you need to know is that HTML
    files function as a sort of skeleton for your page. Our index.html file
    combines all the files from this project together so that you can open them
    in your web browser.
    This project has a file called index.html. At the bottom of index.html you
    will see the following tag:
    <script src="js/level1.js"></script>
    That is how you have been running the level1.js file in a browser. Now change
    level1.js to point to this file — level2.js.
    Now you are ready to start!
*/

/*
    Arrays
    ======
    An array is an ordered list of values. It can keep any number of values
    inside. And also any type of values — Numbers, Strings, Objects, even
    other Arrays.
    Example:
    let animals = ['cat', 'dog', 'horse'];
    let randomThings = [2, 'book', 'today is Saturday', 10];
    let numbers = [1, 2, 8, 19];
*/

// TODO: Create your own array, named favouriteFood, and write in a couple of
//       things you like.

/*
    Array Length
    ============
    We can easily check how many items we have in our array with a property:
    '.length'
    Example:
    let randomThings = [2, 'book', 'today is Saturday', 10];
    console.log(randomThings.length); // We will get 4.
*/

// TODO: Check how many values you have in your array favouriteFood.
//       console.log the result.

/*
    Array Usage
    ===========
    It's useful to keep all of these values in one place. But what if we want
    to use only 1 item from the array?
    We can get them out using 'bracket notation'. Thanks to a guy named Edsger
    Dijkstra*, array indices start counting from 0. The usage looks like this.
    Example:
    let randomThings = [2, 'book', 'today is Saturday', 10];
    let firstItem = randomThings[0];
    let secondItem = randomThings[1]; and so on
    * https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TODO: Get the third element from your array favouriteFood and console.log it.

/*
    Changing Values in Arrays
    =========================
    We also can replace values inside of the arrays by assigning a new value to
    a specific index.
    Example:
    let animals = ['cat', 'dog', 'horse'];
    // let's replace 'dog' with 'fish'
    animals[1] = 'fish';
    // now our animals array will be ['cat', 'fish', 'horse']
*/

// TODO: Take your array favouriteFood and replace the first value
//       with anything else.

// TODO: console.log the whole array to check.

// TIP: Don't forget, index positions start from 0!

/*
    Array.push()
    ============
    If you want to add new values to an existing array you can use the method
    '.push()'. Push will add a new value to the end of the array.
    Example:
    let animals = ['cat', 'dog', 'horse'];
    animals.push('rabbit');
    // animals will be ['cat', 'dog', 'horse','rabbit']
*/

// TODO: Let's extend your list of favouriteFood and add one more value to it.

// TODO: console.log the whole array to check.

/*
    Note about constant Arrays
    ==========================
    An array is what is known as a "reference type".  What this means is that
    even if an array is declared (created) using 'const', the values *inside* that
    array can still be changed; only the array itself cannot be overwritten.
    Example:
    const animals = ['cat', 'dog', 'horse'];
    // These are both legal, and works the same way as when animals is a variable:
    animals[1] = 'fish';
    animals.push('rabbit');
    // This is illegal, and will return an error the same as changing any constant:
    animals = [ 'mouse', 'elephant' ];
 */

// TODO: Try creating an array as a constant and modifying the values in it.

// TODO: See what happens if you add something with .push(), change something
//       with bracket notation (array[1]) and
//       assigning a new whole new array to the constant

/*
    Loops
    =====
    People have always been lazy, but sometimes it moves progress forward! We
    don't like to repeat the same boring actions again and again, so we look
    for ways to avoid it.
    Programming is the same. For example, if I want to print 'JavaScript is
    awesome!' 10 times, what are my options? Of course, I can type ten lines of
    code repeating the same instruction, but I can also tell the computer to
    repeat it instead of me writing it 10 times!
    For this we have loops.
    Each loop should have three main things:
    - a starting point
    - a condition (finishing point)
    - a counter (a step)
    If you miss one of these, you can get into an infinite loop!
    Let's look into different looping structures.
*/

/*
    While Loops
    ===========
    'While' loop will do an action forever until some condition is met.
    Example:
    // starting point
    let number = 0;
    while (number < 10) {
      // 'less than 10' is a condition (finishing point)
      console.log('JavaScript is awesome!');
      number = number + 1;
      // + 1 is a counter/size of the step
    }
*/

// TODO: Using a 'while loop', tell your computer to log the numbers from
//       ten to one.

/*
    For Loops
    =========
    For loops are very similar to the 'while loop'. In a for loop, you
    declare a counter in the statement.
    Example:
    let i;
    for (i = 0; i <= 5; i = i + 1) {  // (starting point; condition; step)
      console.log('Purr');
    }
*/

// TODO: Log every 3rd number from three to 22 using a 'for loop'.

/*
    Iterating Through Arrays
    ========================
    Now we know about loops, I want to use each value from my animal list
    and express my love for each. How shall I do it?
    We can use a 'for loop' to iterate through our array and get each value
    from it.
    Note: i++ is another way of writing i = i + 1.
    Example:
    const animals = ['cats', 'dogs', 'horses'];
    for(let i = 0; i < animals.length; i++){
        console.log('I love ' + animals[i]);
    }
*/

// TODO: Try it out with your favouriteFood array.

/*
    Loops and Logic
    ===============
    Let's bring loops together with the if/else statements we learned in
    level 1, and make something interesting.
    Let's count from 10 to 0 and log all the numbers. But, when we get to the
    middle (5) print 'Woohoo, we are in the middle!'.
    Example:
    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('WooHoo, we are in the middle!');
        } else {
            console.log(i);
        }
    }
*/

// TODO: Time has come for a classic exercise — 'FizzBuzz'.

// Count from 1 to 50 and print the numbers out:
//
// * If a number is a multiple of three, print 'Fizz'.
// * If it's a multiple of 5, print 'Buzz'.
// * If it's a multiple of 3 and 5, print 'FizzBuzz'.
// * For everything else, print the number itself.

// P.S. You may wish to use arithmetic operator remainder (%):
// It calculates the remainder when dividing.
//
// 10 % 3 = 1 — in 10 we have 3*3 + 1
// 16 % 4 = 0 — in 16 we have 4*4
// 19 % 4 = 3 — in 19 we have 4*4 + 3 etc
