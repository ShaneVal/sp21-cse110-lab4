# Part 1. Intro to Javascript 

### Part 1a. A Quick Intro...
1. Line 9 displays "values added: 20".
2. Line 13 displays "final result: 20".
3. Line 9 displays "values added: 20".
4. Line 13 will return a ReferenceError because the result variable is only visible wihtin the block scope of the if statement using the let declaration, any reference to result outside of this code block will not be defined.
5. Line 9 will not display anything because Line 7 is trying to update an assignment to a constant variable which isn't allowed using the const declaration; this will return a TypeError.
6. Line 13 will return a ReferenceError, this is because a const declaration has the same scope as the let keyword so the result variable is only defined within the code block of the if statement. Though this line will never be reached because of the error in Line 9.

### Part 1b. A Little More of a Challenge...
1. Line 12 will display "3" since i is a gloabl variable in this case so it is still visible after the for loop.
2. Line 13 will display "150" because disountedPrice was defined using the var declartion within the function scope meaning it can be accessed within the function it's defined in. Since discountedPrice is within the for loop it will have the updated value of the last element in prices after the operation of the right=hand sie of the assignment has been performed.  
3. Line 14 will display "150" for the same reason as aboive but the operation performed on the right-hand side of the assignment of finalPrice will evaluate and update finalPrice to 150 since the operation is being performed on the last element of prices.
4. The function will return a list of discounted prices from the prices list that was passed into the argument of the function. In this case it will return "[50, 100, 150]" based off the arguments that were passed in.
5. Line 12 will return a ReferenceError because the variable i was decalred using the let keyword so i is only visible within the block scope of the for loop and any reference outside of that i will not be defined. 
6. Line 13 will return a ReferenceError for the same reason as the above question. The discountedPrice variable is only visible within the block scope of the for loop and any reference to the variable outside of that scope will not be defined.  
7. Line 14 will return "150" because finalPrice was declared using the let keyword within the function scope and since the for loop is within that scope it was defined in, the variable is still defined and can be used. 
8. This function will return a list of discounted prices form the prices list that was passed into the argument of this function. In this case,  "[50, 100, 150]" will be returned. It is able to do this because discounted was a defined  using the let declaration and all operations performed on this variable is still within the function scope it was defined in. 
9. Line 11 will return a ReferenceError becuase the variable i was declared using the let keyword and is only visible within the block scope of the for loop. Since Line 11 is trying to displpay the variable i outside of that block scope, it will not be defined. 
10. Line 12 will display "3" because the length variable was defined using the const declaration and since no operation is being performed that is trying to reassign the variable, it will return the length of the prices list.
11. This function will return a list of discounted prices. It is able to so becausse the variable is not really reassigning itself in each iteration of the for loop, it's just adding to a list that the constant points to. So we should expect to have this function return the correct list of discounted prices, in this case being "[50, 100, 150]." 
#### Data Types
12. notations:
    - A. student.name
    - B. student['Grad Year']
    - C. student.greeting();
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]
#### Basic Operators & Type Conversion
13. Arithmetic:
    - A. Outputs '32' since integers map to thier exact string representation; it acts like a string concatenation because 3 is of type String.
    - B. Outputs 1 since the mathetmatical operation of - was used a numeric conversion happened automatically.
    - C. Outputs 3 since a mathematical operation is being used, null will map to 0.
    - D. Outputs '3null' since the + operator is being used on a variable of type String, it willbe treated as concatenation. 
    - E. Outputs 4 since a mathematical operation is being used on a Number type, true will map to 1 and addition will performed. 
    - F. Outputs 0 since a amthemitcal operation is being used the false and null variables are converted to their numeric representation of 0 before the addition is performed.
    - G. Outputs '3undefined' since the + operator is being used with a vriable of type String, it will be trated as concatneation so undefined will be converted to type String. 
    - H. Outputs NaN because a mathematical expression is being used so Numeric conversions of both variables occur automatically, but the numeric representation of undefined is mapped to Nan; hence the output. 
14. Comparison:
    - A. Outputs true since when comparing values of different types, JavaScript converts the values to numbers. So in this case 2 is greater than 1.
    - B. Outputs false since when comparing values of type string, JavaScript uses lexicographical order and compares the first character of both strings. Since 2 > 1 in lexicographical order, it will return false.
    - C. Outputs true since were comparing values of different type '2' becomes the number 2 which is exactly equal to what it's being compared to. 
    - D. Outputs false since the strict equality operator is being used and it always considers operands of different types and a string of 2 is not exactly equal to number 2.
    - E. Outputs false since boolens map to its respective numeric representation. In this case, since 1 is not exactly equal to 2 in this particular equality test it will evaluate to false. 
    - F. Outputs true since in an explicit Boolean conversion any value that is not empty becomes true. Since both are exactly equal in the comparison, this will evaluate to true. 
15. The equality operator (==) is different from the strict equality operator (===) because the equality operator will convert and compare operands of differnt types, whereas the strict equality operator will always treat operands of different types to be what they are.
#### Loops
16. See part1b-question16.js file
#### Functions
17. The expected restult should be "[2, 4, 6]". The modifyArray function takes in two parameters, an array of three integers and a fucntion called doSomething which is beings used as a callback. In the modifyArray funciton, it iterates through every element in array that was passed in and before a value is pushed into the newArr to be returned the doSomething fuunciton is being called back to take the element of the array and doubles it.
#### setInterval(), setTimeout(), clearTimeout()
18. See part1b-question18.js file
19. The code will ouput "1422". 142 will be printed automatically and will wait a second before printing the last 2.