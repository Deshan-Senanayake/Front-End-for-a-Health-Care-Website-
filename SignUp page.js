   
        document.getElementById('signupForm').addEventListener('submit', function(event) {
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var age = document.getElementById('age').value;
            var email = document.getElementById('email').value;
            var username = document.getElementById('username').value;
            var pw = document.getElementById('pw').value;

            if (firstName.trim() === '') {
                alert('Please fill in the required field "First Name"');
                event.preventDefault(); // Prevent form submission
            } else if (lastName.trim() === '') {
                alert('Please fill in the required field "Last Name"');
                event.preventDefault();
            } else if (age.trim() === '') {
                alert('Please fill in the required field "Age"');
                event.preventDefault();
            } else if (email.trim() === '') {
                alert('Please fill in the required field "Email"');
                event.preventDefault();
            } else if (username.trim() === '') {
                alert('Please fill in the required field "User Name"');
                event.preventDefault();
            } else if (pw.trim() === '') {
                alert('Please fill in the required field "Password"');
                event.preventDefault();
            } else {
                alert(`Dear ${firstName}, thank you for signing up with us. The recommended results will be shown in a while.`);
                
            }
        });

        function showPW() {
            var x = document.getElementById("pw");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }


        
