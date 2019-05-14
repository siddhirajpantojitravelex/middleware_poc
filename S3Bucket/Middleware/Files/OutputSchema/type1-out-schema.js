let _indexNumber, _fullName, _age, _dob;

class outSchema {
    constructor(indexNumber, fullName, age, dob) {
        _indexNumber = indexNumber;
        _fullName = fullName;
        _age = age;
        _dob = dob;
    }

    get indexNumber()   { return _indexNumber; }
    get fullName()      { return _fullName; }
    get age()           { return _age; }
    get dob()           { return _dob; }

    getArray() { 
        return [_indexNumber, _fullName, _age, _dob]
    }
    // set indexNumber(value) { return _indexNumber = value; }
    // set fullName(value) { return _fullName = value; }
    // set age(value) { return _age = value; }
    // set dob(value) { return _dob = value; }
}

module.exports = outSchema;