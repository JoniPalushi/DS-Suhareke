const person = {
    firstName: 'Jon',
    lastName: 'Palushi',
    age: 16,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());  // Output will be "John Doe"
