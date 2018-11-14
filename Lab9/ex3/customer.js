var Customer = /** @class */ (function () {
    function Customer(firstname, lastname) {
        this.greeter = function () {
            console.log("Hello  " + this.firstname + " " + this.lastname);
        };
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Customer;
}());
var customer = new Customer("FP", "Jones");
customer.greeter();
