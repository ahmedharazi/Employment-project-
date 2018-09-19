// START CODING BELOW!!

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfdEGmZ90fflq0JCVQciVbCztFjkASUkE",
    authDomain: "employee-data-6f2b7.firebaseapp.com",
    databaseURL: "https://employee-data-6f2b7.firebaseio.com",
    projectId: "employee-data-6f2b7",
    storageBucket: "employee-data-6f2b7.appspot.com",
    messagingSenderId: "641863849634"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var name = "";
var role = "";
var date = "";
var monthly = "";
var total = "";
var worked = "";

$("#add-employee").on("click", function(){
      event.preventDefault();

      name = $("#employee-name").val().trim();
      role = $("#role").val().trim();
      date = $("#start-date").val().trim();
      monthly = $("#monthly-rate").val().trim();

      database.ref().push({
          name: name,
          role: role,
          date: date,
          monthly: monthly,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

     database.ref().on("child_added", function(childSnapshot){
         console.log(childSnapshot.val().name);
         console.log(childSnapshot.val().role);
         console.log(childSnapshot.val().date);
         console.log(childSnapshot.val().monthly);

         var newtr = $("<tr>");
         var nametd = $("<td>").text(childSnapshot.val().name);
         var roletd = $("<td>").text(childSnapshot.val().role);
         var datetd = $("<td>").text(moment(childSnapshot.val().date).format("MMM Do YYYY"));
         var workedtd = $("<td>").text(moment(childSnapshot.val().date).diff(moment(), "months") * -1);
         var monthlytd = $("<td>").text(childSnapshot.val().monthly);

         newtr.append(nametd);
         newtr.append(roletd);
         newtr.append(datetd);
         newtr.append(workedtd);
         newtr.append(monthlytd);

         $(".table tbody").append(newtr);


    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
