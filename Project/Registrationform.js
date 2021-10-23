function submit() {
    console.log('submit')

    var fullname = document.getElementById('name').value;
    npattern = /^[a-zA-Z ]+$/;
    if (fullname == "") {
        alert("Enter the Full name")
    } else if (npattern.test(fullname)) {
        alert("your name is  :" + fullname)
    } else {
        alert("Enter valid name")
    }

    var UserName = document.getElementById('uname').value;
    upattern = /^[a-zA-Z0-9]+$/;
    if (UserName == "") {
        alert("Enter the user name")
    } else if (upattern.test(UserName)) {
        alert("Username is :" + UserName)
    } else {
        alert("Enter the valid username")
    }

    var email = document.getElementById('email').value;
    epattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email == "") {
        alert("Enter the email")
    } else if (epattern.test(email)) {
        alert("Your email is :" + email)
    } else {
        alert("Enter the valid email")
    }

    var phoneno = document.getElementById('phoneno').value;
    ppattern = /^\d{10}$/;
    if (phoneno == "") {
        alert("Enter the phone number")
    } else if (ppattern.test(phoneno)) {
        alert("Your phone no is :" + phoneno)
    } else {
        alert("Enter valid phone no")
    }

    var password = document.getElementById('password').value;
    spattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password == "") {
        alert("Enter the password")
    } else if (spattern.test(password)) {
        alert("Your password is : " + password)
    } else {
        alert("Enter valid password")
    }

    var gender;
    if(document.getElementById('r1').checked)
    {
        gender=document.getElementById('r1').value;
    }else if(document.getElementById("r2").checked){
        gender = document.getElementById("r2").value;
    }else if(document.getElementById("r3").checked)
    {
        gender=document.getElementById("r3").value
    }
    console.log(gender)

    fetch('http://localhost:8080/api/registrationForm/saveRegistration', {
        method: 'POST',
        body: JSON.stringify({
            confirmPassword: document.getElementById("confirmp").value,
            email: document.getElementById("email").value,
            fullName: document.getElementById("name").value,
            gender: gender,
            password: document.getElementById("password").value,
            phoneNumber: document.getElementById("phoneno").value,
            userName: document.getElementById("uname").value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

} 