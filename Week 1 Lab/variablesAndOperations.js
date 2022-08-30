//create a variable to hold the quantity of available plane seats left on a flight
let availableSeats = 4;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 124.37;

//create a variable to hold a person's middle initial
let middleInitial = "M";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;
let isColdOutside = false;

//create a variable to hold a customer's first name
let customerFirstName = "Joshua";

//create a variable to hold a street address
let streetAddress = "1829 J. St"

//print all variables to the console
console.log(availableSeats, costOfGroceries, middleInitial, isColdOutside, isHotOutside, customerFirstName, streetAddress,);




//a customer booked 2 plane seats, remove 2 seats from the available seats variable
 availableSeats = availableSeats - 2;

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries + 2.15;


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "D";
console.log(middleInitial);


//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = false;


//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let customerFullName = `${customerFirstName} ${middleInitial} Huckstep`;


//print a line to the console that introduces the customer and says they live at the address variable
console.log(`Hello ${customerFullName}, your address is ${streetAddress}.`);