var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstname + " " + this.lastname);
    };
    return Customer;
}());
var c = new Customer();
c.firstname = "Neel";
c.lastname = "Patel";
c.greeter();
