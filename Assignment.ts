// Q. No. 1  

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personal_message:string=("Hello Donald, would you like to learn Javascript today?");

console.log("Personal message",personal_message);


// Q. No. 2
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personal_name:string="Haris";
let lowerCase = personal_name.toLowerCase();
console.log("Lower case name ",lowerCase);
let upperCase = personal_name.toUpperCase();
console.log("Upper case name",upperCase);
let arry:string[]=personal_name.split("");
let titleCaseName:string=" ";
for(let i=0; i<arry.length; i++)
{
    titleCaseName=titleCaseName+arry[i].charAt(0).toUpperCase()+arry[i].slice(1).toLowerCase()+ " ";
}
console.log("Title Case Name", titleCaseName);


//  Q.No. 4  
// famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:?
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log('Albert Einstein once said,"A person who never made a mistake never tried anything new"');

let famous_Qout:string='Albert Einstein';
let message:string =' ${famous_Qout} said,"A person who never made a mistake never tried anything new."'

console.log(`${famous_Qout} said,A person who never made a mistake never tried anything new`)


// Q.NO.6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let nam:string="\t Haris \n"
console.log("Some Whitespace name", nam);
console.log(nam.trim())


// Q:No 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results

let addition:number=4+4;
console.log("Addition Number",addition)
let Subtraction:number=16-8;
console.log("Subtraction Number",Subtraction)
let multiplication:number=4*2;
console.log("Multiplication Number",multiplication)
let divison:number=64/8;
console.log("Divison Number",divison)



// Q:No 8  
// You should create four lines that look like this:
//       console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line. 


for(let i=0; i<4; i++)
{
    console.log(5+3)
}



// Q:No 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message

let favorite_number:number=569480;

let num1=`favorite number:${favorite_number}`;

console.log(num1);



// Q:No 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

var Name="Haris";
var date="05-09-2023";
console.log(`name ${Name}:Date ${date}`);



// Q:No 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let array:string []= ["Haris","Hamdan","Shani","Salman"]
for (let i=0; i<array.length; i++)
{
    console.log(array[i]);
}
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])


//  Q:No 12
//  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name

let sani:string []=["Haris","Hamdan","Shani","Salman"]
for (let i=0; i<sani.length; i++)
{
    console.log(`hello ${sani[i]} i hope you are doing well`);
}


// Q:NO 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransportation:string[]=["suzuki","Sharade"]
for (let i=0; i<favoriteTransportation.length; i++)
{
    console.log(`I would like to own a ${favoriteTransportation[i]}`)
}



// Q:NO 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[]=["Haris","Hamdan","Shani","Salman"]

guestList.forEach((invitaion)=>{
  console.log(`Mr. ${invitaion} i would like to invite you to attend the dinner which for the old friend `)
})


// Q:NO 15
// changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


let GuestList:string[]= ["Haris","Hamdan","Shani","Salman"]
console.log(GuestList)

let PersonNotCome:string[]=["Anees"]
console.log("Person not to come" , PersonNotCome);


GuestList.splice(3,1,"Hameed")
console.log("Modify Name",GuestList);


for(let i=0; i<GuestList.length; i++)
{
    console.log(`Mr.${GuestList[i]} I am very gald you to invite on my dinner`)
}




// Q:NO 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list


let GuestList1:string[]=["Haris","Hamdan","Shani","Salman"]
console.log("Guest List",GuestList1);
GuestList.unshift("Tariq");
GuestList.splice(GuestList1.length/2,0,"Mani")
GuestList.push("Shanza")
GuestList.forEach((invitation)=>(
    console.log(`Mr.${invitation} i am gald to invite you on dinner`)
))
console.log(GuestList1);



// Q:NO 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed


let favoriteLocation:string[]=["Iran","Bhutan","pakistan","Iceland","Europe"]
console.log("Original order")
console.log(favoriteLocation);

console.log("\n  Alphabetical order")
favoriteLocation.sort()
console.log(favoriteLocation);


console.log("Original order")
console.log(favoriteLocation)
console.log("\n Reverse Alphabetical order")
favoriteLocation.sort().reverse()
console.log(favoriteLocation);


console.log("Original order")
console.log(favoriteLocation);


favoriteLocation.reverse()
console.log("Reverse Order",favoriteLocation);


favoriteLocation.sort()
console.log("Original Order",favoriteLocation);


favoriteLocation.reverse()
console.log(favoriteLocation)



// Q:NO 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let DinnerGuestList:string[]=["Haris","Hamdan","Shani","Salman"]
console.log("No of Guest is invited:",DinnerGuestList.length)



// Q:No 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


let country:string[]=["pakistan","SA","UK","US","Saudia"]
for(let i=0; i<country.length; i++)
{
    console.log("Country Name list",country[i])
}




// Q:No 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


let motorcycle={band:"honda",modelType:"CD 70", year:"2023"}
console.log(motorcycle)
let identification=[{Name:"Haris",city:"sahiwal",Province:"punjab",phone:"03038087611"},
{Name:"Hamdan",city:"sahiwal",Province:"punjab",phone:"03455689611"},
{Name:"Sani",city:"sahiwal",Province:"punjab",phone:"095764456"}
]
console.log(identification)


// Q:NO 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program


let intentionError:string[]=["Haris","Hamdan","Shani","Salman"]
console.log(`intention Error: ${intentionError[3]}`)
console.log(`intention Error: ${intentionError[5]}`)



// Q:No: 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False



let car1:string='subaru';
console.log("is car=='subaru'? is | predict is ture")
console.log(car1=='subaru');
console.log("is car=='honda'? | predict is false")
console.log(car1=='honda');

console.log("is car==='subaru'? | my predict is true")
console.log(car1==='subaru');
console.log("is car==='honda'?| predict is false")
console.log(car1==='subaru');

console.log(" is car !== subaru ?| predict is false")
console.log(car1=='subaru');
console.log("is car !==subaru ? | predict is true")
console.log(car1=='subaru')


// Q:NO 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color="orange";
if (alien_color=='orange')
{
    console.log("The player just earned 5 point")
}
else
{
    console.log("That fails will have no output")
}


//Q:NO 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.


let alienColor:string="pink";
if (alienColor=='pink')
{
    console.log("The player just earned 5 point")
}
else
{
    console.log("The player just earned 10 points")
}


// Q:No :27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien


let alien_Color:string='yellow';

if (alien_Color=='black')
{
    console.log("The player earned 5 points")
}
else if (alien_Color=='pink')
{
    console.log("The player earned 10 points")
}
else if (alien_Color=='red')
{
    console.log("The player earned 15 points")
}
else
{
    console.log("Blank")
}


// Q:No 28
// tages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.


let age:number=80;
if(age>0 && age<2)
{
    console.log("The person is Hamdan")
}
else if (age>=2 && age<4)
{
    console.log("The person is toddler")
}
else if (age<=4 && age<13)
{
    console.log("The person is kid")
}
else if (age<=13 && age<20)
{
    console.log("The person is teenager")
}
else if (age<=20 && age<65)
{
    console.log("The person is adult")
}
else if (age>=65)
{
    console.log("The person is elder")
}
else
{
console.log("Error")
}




// Q:No 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas



let fruits:string[]=["grapes","apple","mango","dates","watermelon"]
let favorite_fruits:string[]=["watermelon","apple","mango"]
for (let i=0; i<fruits.length; i++)
{
    if(fruits.includes(favorite_fruits[i]))
    {
        console.log(`you are like ${favorite_fruits[i]}`)
    }
}



// Q:NO 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.



let helloAdmin:string[]=["admin","IT professional","coordinator","sale exacutive","Accountant"]
let helloPerson:string[]=["admin"]
for (let i=0; i<helloAdmin.length; i++)
{
    if (helloAdmin.includes(helloPerson[i]))
    {
        console.log(`Hello: ${helloPerson[i]} would you like to see a status report`)
    }
        else
        {
            console.log(`hello:${helloAdmin[i]} thank you for logging in again`)
        }

    }



// Q:NO 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available


let current_user:string[]=["Haris","Hamdan","Shani","Salman"]
let new_user:string[]=["Shareef","Kashif","Azeem","Faheem"]
for (let i = 0 ; i <new_user.length; i++ )
{
if (new_user.includes(current_user[i]))
{
    console.log(`The person will need to enter a new username`)
}
else{
    console.log(`The username is available`)
}
}


// Q:NO 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line



let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of num)
 {
  let ordinal_num = "";

  if (number === 1) 
  {
    ordinal_num = "st";
  } 
  else if (number === 2) 
  {
    ordinal_num = "nd";
  } 
  else if (number === 3)
   {
    ordinal_num = "rd";
  }
   else 
   {
    ordinal_num = "th";
  }

  console.log(`${number}${ordinal_num}`);
}


// Q:NO 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.



let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];


console.log("My favorite pizzas are:",favoritePizzas);

for (let pizza of favoritePizzas)
 {
  console.log(`\n I like ${pizza} pizza.`);
}

console.log("\nI really love pizza!");



// Q:NO 35
// Think of at least three different animals that have a
//  common characteristic. Store the names of these animals in a list, and 
//  then use a for loop to print out the name of each animal. • Modify your 
//  program to print a statement about each animal, such as A dog would make a 
//  great pet. • Add a line at the end of your program stating what these animals have
//   in common. You could print a sentence such 
// as Any of these animals would make a great pet in typescript




let animal:string[]=["Horse","Cat","Dog"];
for (let i=0; i<animal.length; i++)
{
    console.log(animal[i])
}
    animal.forEach((pet)=>{
        console.log(`A ${pet} would make a great pet`);
    });

    console.log("\n Any of these animals would make a great pet")




// Q:NO 36

// T-Shirt: Write a function called make_shirt() that accepts a size and
// the text of a message that should be printed on the shirt. The function should print 
// a sentence summarizing the size of the 
// shirt and the message printed on it. Call the function



function T_Shirt(Size:string ,message:string)
{
    console.log(`Your Shirt is ${Size} : Printed message on shirt is ${message}`)
}
T_Shirt("Small","pakistan");



// Q:NO 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and
//  a shirt of any size with a different message


function shirt(size:string="large", message:string="T20 Worldcup 2023")
{
console.log(`you order ${size} shirt, message on shirt is ${message}`)
}

shirt()
shirt("medium")
shirt("small","typecript is difficult language")



// Q:NO 38
// Write a function called describe_city() that accepts the name of a city and its country. The function 
// should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
// for the country a default value. Call your function 
// for three different cities, at least
//  one of which is not in the default country



function cityCountry(city:string , country:string="unknown")
{
    console.log(`${city} is in ${country }`)
}
cityCountry("sahiwal","Pakistan")
cityCountry("Multan","Pakistan")
cityCountry("Hambantuta, Sri Lanka");




// Q:NO 39
// Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and
//  print the value that’s returned



function city_Country(city:string, country:string)
{
    return `${city},${country}`;
}

let a = city_Country("sahiwal","Pakistan")
let b= city_Country("London","Uk")
let c= city_Country("Mascat","Oman")

console.log(a)
console.log(b)
console.log(c)



// Q:NO 41
// Make a array of magician’s names. Pass the array to a function 
// called show_magicians(), 
// which prints the name of each magician in the array.



function magician(magician_show:string[]=["Haris","Hamdan","Shani","Salman"]) {
    console.log("Magician Name")
    for (let i=0; i<magician_show.length; i++)
    {

        console.log(magician_show[i])
    }
  
}
magician();

// Q:NO 44
// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one 
// parameter that collects as many items as the function call provides, and it should print a 
// summary of the sandwich that is being ordered. Call the function three times, using a different
//  number of arguments each time.


function sandwich(...item:string[]):void
{
    console.log("following items of sadwich");
    for (let item1 of item)
    {
        console.log(`${item1}`);
    }
     console.log("Enjoy your sandwich!");
}
sandwich("Ham", "Cheese", "Lettuce", "Tomato");
sandwich("Omani", "Mozrella");
sandwich("Fresh Salad");