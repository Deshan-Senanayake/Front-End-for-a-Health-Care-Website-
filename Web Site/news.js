function validateForm() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
	var funame = document.getElementById("funame").value;
    
     if (fname == "" || funame == ""){
		 alert("Name must be filled out");
    return false;
  }
		 
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
     
    alert("Dear " + fname + ", you have successfully subscribed for a personalized newsletter.");
    
    // You can add code here to submit the form data to a server
    
    return true;
  }
   