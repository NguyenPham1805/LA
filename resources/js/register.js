var loginName = document.getElementById('login_name')
var checkLoginName = document.getElementById('check_login_name')
var password = document.getElementById('login_password')
var checkPassword = document.getElementById('check_login_password')
var rePassword = document.getElementById('re_password')
var CheckrePassword = document.getElementById('check_re_password')
var lastName = document.getElementById('last_name')
var check_last_name = document.getElementById('check_last_name')
var firstName = document.getElementById('first_name')
var check_first_name = document.getElementById('check_first_name')
var email = document.getElementById('email')
var check_email = document.getElementById('check_email')
var phone = document.getElementById('phone_number')
var check_phone_number = document.getElementById('check_phone_number')
var check = document.getElementsByClassName('check')

function checkRegisterLoginName() {
    if (loginName.value.length > 2 && isNaN(parseFloat(loginName.value)) && !isFinite(loginName.value)) {
        checkLoginName.innerHTML = "Valid"
        checkLoginName.style.color = "#59d33a"
        $('#check_login_name').addClass('valid-feedback')
    } else {
        checkLoginName.innerHTML = "Name must more than 2 character and not number!"
        $('#check_login_name').addClass('invalid-feedback')
        checkLoginName.style.color = "#d33a3a"
    }
}

function checkLoginPassword() {
    
    var strongRegex = 
    
    if (strongRegex.test(password.value)) {
        checkPassword.innerHTML = "Valid"
        $('#check_login_password').addClass('valid-feedback')
        checkPassword.style.color = "#59d33a"
    } else {
        checkPassword.innerHTML = "Password must more than 6 character, and contain special keyword!"
        $('#check_login_password').addClass('invalid-feedback')
        checkPassword.style.color = "#d33a3a"
    }
}

function checkRePassword() {
    if (rePassword.value === password.value) {
        CheckrePassword.innerHTML = "Valid"
        $('#check_re_password').addClass('valid-feedback')
        CheckrePassword.style.color = "#59d33a"
    } else {
        CheckrePassword.innerHTML = "Re-enter the password that does not match the password!"
        $('#check_re_password').addClass('invalid-feedback')
        CheckrePassword.style.color = "#d33a3a"
    }
}

function checkLastName() {
    if (lastName.value.length > 2 && isNaN(parseFloat(lastName.value)) && !isFinite(lastName.value)) {
        check_last_name.innerHTML = "Valid"
        check_last_name.style.color = "#59d33a"
        $('#check_last_name').addClass('valid-feedback')
    } else {
        check_last_name.innerHTML = "Name must more than 2 character and not number!"
        $('#check_last_name').addClass('invalid-feedback')
        check_last_name.style.color = "#d33a3a"
    }
}

function checkFirstName() {
    if (firstName.value.length > 2 && isNaN(parseFloat(firstName.value)) && !isFinite(firstName.value)) {
        check_first_name.innerHTML = "Valid"
        check_first_name.style.color = "#59d33a"
        $('#check_first_name').addClass('valid-feedback')
    } else {
        check_first_name.innerHTML = "Name must more than 2 character and not number!"
        $('#check_first_name').addClass('invalid-feedback')
        check_first_name.style.color = "#d33a3a"
    }
}

function checkEmail() {
    const re = /\S+@\S+\.\S+/
    if (re.test(email.value) === true) {
        check_email.innerHTML = "Valid"
        $('#check_email').addClass('valid-feedback')
        check_email.style.color = "#59d33a"
    } else {
        check_email.innerHTML = "Email invalid!"
        $('#check_email').addClass('invalid-feedback')
        check_email.style.color = "#d33a3a"
    }
}

function checkPhoneNumber() {
    if (phone.value.length > 9 && phone.value.length < 12 && !isNaN(parseInt(phone.value))) {
        check_phone_number.innerHTML = "Valid"
        $('#check_phone_number').addClass('valid-feedback')
        check_phone_number.style.color = "#59d33a"
    } else {
        check_phone_number.innerHTML = "Phone number must 10 or 11 number and not is character!"
        $('#check_phone_number').addClass('invalid-feedback')
        check_phone_number.style.color = "#d33a3a"
    }
}

function register() {
    if (checkRegister()) {
        if($('#ckeck-box').prop("checked") == true)
            alert("Register success")
        else
            alert("Please agree own term!")
    }
    else
        alert("Must you field valid and full info!")
}

function reset() {
    loginName.value = ""
    password.value = ""
    lastName.value = ""
    firstName.value = ""
    email.value = ""
    phone.value = ""
}

function checkRegister() {
    if (loginName.value === "" && loginName.value.length > 2 && isNaN(parseFloat(loginName.value)) && !isFinite(loginName.value))
        return false
    else if (password.value === "" && rePassword.value === password.value)
        return false
    else if (lastName.value === "" && lastName.value.length > 2 && isNaN(parseFloat(lastName.value)) && !isFinite(lastName.value))
        return false
    else if (firstName.value === "" && firstName.value.length > 2 && isNaN(parseFloat(firstName.value)) && !isFinite(firstName.value))
        return false
    else if (email.value === "" && re.test(email.value) === true)
        return false
    else if (phone.value === "" && phone.value.length > 9 && phone.value.length < 12 && !isNaN(parseInt(phone.value)))
        return false
    return true
}