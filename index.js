
// # JavaScript template strings class work
//
// ### Exercise 1:
// Create a template string and assign it to the variable ```my_template_string```.
//
//     The template string should contain the following data only:
//
//     ```
// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.
// ```
//
// Create the variables ```my_name```, ```my_id```, and ```my_address``` and set their values to ```Kevin```, ```2112```, and ```Memphis, TN```.
//
//     Use the template string you created and assigned to the variable ```my_template_string``` to log the formatted output to the console.
//
//     Sample Output:
//     ```
// My name is Kevin.
// My id is 2112.
// My address is Memphis, TN.

var myName = "Rachel"
var myID = "50052"
var myAddress = "8603 Deerfield"

var my_template_string = (`My name is ${myName}.
    My ID is ${myID}.
    My address is ${myAddress}.`);

console.log(my_template_string);




// ### Exercise 2:
//
// Create a new template string
//
//     ```
// var contestant = "1_M_l337!";
// var score = "9001";
// ```
//
// and use the provided variables to print
//     ```
// Congratulations 1_M_l337! !!, your score is 9001.
// ```
var contestant = "1_M1337";
var score = "9001";
var newTemplate = (`Congrats ${contestant}! Your score is ${score}`);

alert(newTemplate);


// ### Exercise 3:
//
// Using the provided Object literal, create a template string  and iterate through the Parents
// and Children and print them in a format sililar to the following:
//     ```
//
//     	SCHOOL PARENT LISTING
//
//
// Parent's Name: Mr. Bill
// Children:
// Sluggo
// Spot
// Linda
//
// Parent's Name: J. Page
// Children:
// Mick
// Robert
// John
// Kenny
//
// Parent's Name: Randolh H.
// Children:
// Biffy
// Carl Jr.
// ```
// Use the Object literal data below. You will need to iterate through each object and print it out with a template.
//
//     ### Challenge
// Put all the printing logic in a separate function and call the function for each Parent so they and their Children print.
// */
let parents =
    [
        {
            name: "Mr. Bill",
            children: ["Sluggo", "Spot", "Linda"]
        },
        {
            name: "Nancy R.",
            children: ["Stan"]
        },
        {
            name: "J. Page",
            children: ["Mick", "Robert", "John", "Kenny"]
        },
        {
            name: "Randolh H.",
            children: ["Biffy", "Carl Jr."]
        }
    ];



parents.forEach(logger);

function logger(element) {
        console.log(` Parent's Name: ${element.name}
Children:${element.children}`);

}