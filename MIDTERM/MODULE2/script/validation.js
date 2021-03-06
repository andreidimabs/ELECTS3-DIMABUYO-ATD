function validate(){

    if(document.myForm.id.value=="" || isNaN(
        document.myForm.id.value) ||
        document.myForm.id.value.length !=6){
            document.getElementById("IDErr").innerHTML="A Student Number consists of 6 numbers";
            document.myForm.id.focus();
            return false;
        }
    
    if(document.myForm.name.value =="") {
        document.getElementById("nameErr").innerHTML="Please enter your Full Name";
        document.myForm.name.focus();
        return false;
    }

    if(document.myForm.gender.value == "-1"){
        document.getElementById("genderErr").innerHTML="Please choose your gender";
        return false;
    }
    
    if(document.myForm.address.value =="") {
        document.getElementById("addErr").innerHTML="Please enter your Complete Address";
          document.myForm.address.focus();
          return false;
    } 

    if(document.myForm.zipcode.value=="" || isNaN(
        document.myForm.zipcode.value) ||
        document.myForm.zipcode.value.length !=4){
            document.getElementById("zipErr").innerHTML="A Zip code consists of 4 digits";
            document.myForm.zipcode.focus();
            return false;
        }
    
    if(document.myForm.Email.value == "") {
        document.getElementById("emailErr").innerHTML="Please enter your E-mail";
        document.myForm.Email.focus()
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.Email.value) == false) {
            document.getElementById("emailErr").innerHTML="Please use a valid e-mail";
            document.myForm.Email.focus();
            return false;
        }
    }

    if(document.myForm.schoolyear.value =="-1") {
        document.getElementById("syErr").innerHTML="Please enter the School Year";
        document.myForm.schoolyear.focus();
          return false;
    } 
    
    if(document.myForm.semester.value == ""){
        document.getElementById("semErr").innerHTML="Please choose your Semester";
        return false;
    }

    if(document.myForm.course.value == "-1"){
        document.getElementById("courseErr").innerHTML="Please choose your Course";
        return false;
    }

    if(document.myForm.yearlevel.value == ""){
        document.getElementById("ylErr").innerHTML="Please choose your Year Level";
        return false;
    }

    if(document.myForm.section.value == "") {
        document.getElementById("sectErr").innerHTML="Please enter your Section";
        document.myForm.section.focus();
        return false;
    } 

    if (document.myForm.units.value == ""){
            document.getElementById("unitErr").innerHTML="Enter the total number of units you have";
            document.myForm.units.focus();
            return false;
        } 
        else {
            var num = document.myForm.units.value;
            if(isNaN(num)){
            alert("Enter proper numeric values");
            return false;
            }
        }


 
}