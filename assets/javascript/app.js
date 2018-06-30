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
         
             // Initial Values
             var name = "";
             var role = "";
             var StartDate= 0;
             var MonthlyRate = 0;
            
         
             // Capture Button Click
    $("#add-user").on("click", function(event) {
                // Don't refresh the page!
                event.preventDefault();

            // YOUR TASK!!!
            // Code in the logic for storing and retrieving the most recent user.
            // Don't forget to provide initial data to your Firebase database.
          firebase.initializeApp(config);
            name = $("#name-term").val().trim();
            role = $("#role-term").val().trim();
            StartDate = $("#start-date").val().trim();
            MonthlyRate = $("#monthly-rate").val().trim();
      
      database.ref().push({
            name: name,
            role: role,
            StartDate: StartDate,
            MonthlyRate: MonthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
          });
    
        });
    
        // Firebase watcher + initial loader HINT: .on("value")
        
    database.ref().on("child_added", function(snapshot) {
        
                // Log everything that's coming out of snapshot
            console.log(snapshot.val());
            console.log(snapshot.val().name);
            console.log(snapshot.val().role);
            console.log(snapshot.val().StartDate);
            console.log(snapshot.val().MonthlyRate);
      
            // Change the HTML to reflect
            $("#name-term").text(snapshot.val().name);
            $("#role-term").text(snapshot.val().email);
            $("#start-date").text(snapshot.val().age);
            $("#monthly-rate").text(snapshot.val().MonthlyRate);
      
            // Handle the errors
    }, function(errorObject) {
                console.log("Errors handled: " + errorObject.code);
            });

            database.ref().orderByChild("dataAdded").limitToLast