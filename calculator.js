var calculator = {
    'num1': parseInt(prompt("Enter first number")),
    'num2': parseInt(prompt("enter second number")),
    'res': 0,
    'sum': function() {
        this.res = this.num1 + this.num2;
        return this.res;
    },
    'mul': function() {
    this.res = this.num1 * this.num2;
    return this.res;
    },
    'div': function() {
        this.res = this.num1 / this.num2;
        return this.res;
    },
    'sub': function() {
        this.res = this.num1 - this.num2;
        return this.res;
    },
}
var sumation = calculator.sum();
console.log(sumation)
var subtraction = calculator.sub();
console.log(subtraction)
var multiplication= calculator.mul();
console.log(multiplication)
var division = calculator.div();
console.log(division)