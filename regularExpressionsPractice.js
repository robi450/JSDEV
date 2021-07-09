//Regular expressions practice
// this is a regular expression
// regular expressions are case sensitive
var re = new RegExp("j.*t");//one way of doing it(this is the pattern we are trying to match)
console.log(re);

//another way of doing it( the * means 0 or more of the percieved)
var re = /j.*t/; // another pattern(match any pattern that starst with j, ends with t, and has 0 or more characters in between)
console.log(re); // the dot means any character

// how to use regular expressions object
console.log(re.test("JavaScript"));

//match() returns an array of matches
//search() returns the position of the first match
//replace () allows you to substitue matched text with another string
//split () 

// using match
var s = new String('HelloJavaScriptWorld');
console.log(s.match(/a/));
console.log(s.match(/S/));
console.log(s.match(/W/));

// passing global modifier
console.log(s.match(/l/g)); //g is the global modifier

// using search()
console.log(s.search(/j.*a/i));// i for case sensitive

// replace
console.log(s.replace(/[A-Z]/g, ''));

//split()
var csv = 'one, two, three, four';
console.log(csv.split(','));

//Unit testing practice - A way of making sure our code 
// works the way we expected to do.
// unit testing makes the process of testing a specific unit
// we may want to write a test to check a specific function
// works as intended. unit test runs at compile time
// Unit testing improves code quality
// we use a unit test library. There are many options. We see those in client side JS

// example;
// Define a suite of tests
//Var myTests = function() {

//});
//within that function, create subfunctions that represent individual
// tests

/*var myTests = function(){
    function testSomething(){

    }
});*/
// in most libraries, we begin the unit test functions with the word 'test')

// using assertion
var myTests = function() {
    function testOneEqualsOne(){
        assertEqual(1,1);
    }
}



