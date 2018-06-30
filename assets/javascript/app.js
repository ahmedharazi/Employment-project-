// START CODING BELOW!!

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCdn5NUnDX9-HQGir0lKw8EFvzsOanEexU",
    authDomain: "class-project-7a450.firebaseapp.com",
    databaseURL: "https://class-project-7a450.firebaseio.com",
    projectId: "class-project-7a450",
    storageBucket: "",
    messagingSenderId: "713188156272"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Capture Button Click
$("#add-user").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.

    var name = $("#name-term").val().trim();
    var role = $("#role-term").val().trim();
    var StartDate = $("#start-date").val().trim();
    var MonthlyRate = $("#monthly-rate").val().trim();

    // Initial Values
    var newEmp = {
        name : name,
        role : role,
        StartDate : StartDate,
        MonthlyRate : MonthlyRate,
        //rate : empRate
    };

    database.ref().push(newEmp);

    console.log(newEmp.name);
    console.log(newEmp.role);
    console.log(newEmp.start);
    console.log(newEmp.rate);

    alert("Employee successfully added");

    // Clears all of the text-boxes
    $("#add-user").val("");
    $("#role-term").val("");
    $("#start-date").val("");
    $("#monthly-rate").val("")
});

// Firebase watcher + initial loader HINT: .on("value")

database.ref().on("child_added", function (snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().StartDate);
    console.log(snapshot.val().MonthlyRate);

    // Change the HTML to reflect
    var empName = snapshot.val().name;
    var empRole = snapshot.val().role;
    var empStart = snapshot.val().startDate;
    var empRate = snapshot.val().MonthlyRate;
    // Prettify the employee start
    //var randomDate = "02/23/1999";
    //var randomFormat = "MM/DD/YYYY";
    //var convertedDate = moment(randomDate, randomFormat);
    //var newDate = moment("02/14/2001", randomFormat);

    var empStartDate = moment.unix(empStart).format("MM/DD/YYYY");

    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var empMonthlyRate = moment().diff(moment(empStartDate, "X"), "months");
    //console.log(empMonths);

    // Calculate the total billed rate
    var empBilled = empMonthlyRate * empRate;
    //console.log(empBilled);


    var newRow = $("<tr>").append(
        $("<td>").text(empName),
        $("<td>").text(empRole),
        $("<td>").text(empStartDate),
        $("<td>").text(empMonthlyRate),
        $("<td>").text(empRate),
        $("<td>").text(empBilled)
    );
    // Append the new row to the table
    $("#add-employee-row > tbody").append(newRow);
});
