// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing convert function with several sets of inputs', function (assert) {
    assert.strictEqual(convert(1), 'Testing with valid inputs');
    assert.equal(App.calculateArea(-5, -5), 1, 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');
    assert.equal(App.calculateArea(500, 500), 10000, 'Tested with two large positive numbers. Any arguments greater than 100 will be set to 100.');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { App.calculateArea(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { App.calculateArea("Christine","Christine"); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});





