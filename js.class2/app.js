function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function() {
    return new Date().getFullYear() - this.birthYear;
}

const matt = new Person("Matthew", 1980);

matt.calcAge = function() {
    return new Date().getFullYear() - this.birthYear;
}

console.log(matt.calcAge());
const mark = new Person("Mark", 1979);
console.log(mark.calcAge())