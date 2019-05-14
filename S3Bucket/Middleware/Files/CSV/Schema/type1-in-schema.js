let _firstname;
let _lastName;
let _dob;

class inSchema {
    constructor(firstname, lastname, dob) {
        _firstname = firstname;
        _lastName = lastname;
        _dob = dob;
    }
    
    get firstname() { return _firstname; }
    get lastname() { return _lastName; }
    get dob() { return _dob; }
}


module.exports = inSchema;