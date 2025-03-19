var person = {
    firstName: 'Jon',
    lastName: 'Palushi',
    age: 16,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());  

var phone = {
    model: 'Iphone', 
    space: 128,
    color: 'White',

    phone: function() {
        return this.model + ' ' + this.color
    }
};

console.log(phone.phone())