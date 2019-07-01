function birthday(dob) {
    var today = new Date()
    var birthDate = new Date(dob)
    var age = today.getFullYear() - birthDate.getFullYear()
    var month = today.getMonth() - birthDate.getMonth()
        // var day = today.getDay() - birthDate.getDay()

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;

}

alert(`your age is ${birthday("8/01/1998")} year(s) `)