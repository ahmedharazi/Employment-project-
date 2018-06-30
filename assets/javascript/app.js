<script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>
        <script>
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
             var email = "";
             var age = 0;
             var comment = "";
         
             // Capture Button Click
    $("#add-user").on("click", function(event) {
                // Don't refresh the page!
                event.preventDefault();

            // YOUR TASK!!!
            // Code in the logic for storing and retrieving the most recent user.
            // Don't forget to provide initial data to your Firebase database.
            name = $("#name-input").val().trim();
            email = $("#email-input").val().trim();
            age = $("#age-input").val().trim();
            comment = $("#comment-input").val().trim();
      
      database.ref().set({
                name: name,
            email: email,
            age: age,
            comment: comment
          });
    
        });
    
        // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

                // Log everything that's coming out of snapshot
                console.log(snapshot.val());
            console.log(snapshot.val().name);
            console.log(snapshot.val().email);
            console.log(snapshot.val().age);
            console.log(snapshot.val().comment);
      
            // Change the HTML to reflect
            $("#name-display").text(snapshot.val().name);
            $("#email-display").text(snapshot.val().email);
            $("#age-display").text(snapshot.val().age);
            $("#comment-display").text(snapshot.val().comment);
      
            // Handle the errors
    }, function(errorObject) {
                console.log("Errors handled: " + errorObject.code);
            });