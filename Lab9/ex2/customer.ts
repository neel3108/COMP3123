class Customer {
    firstname : String;
    lastname : String;

    public greeter(){
        console.log(`Hello ${this.firstname} ${this.lastname}`)
    }
}

let c = new Customer();
 c.firstname = "Neel";
 c.lastname = "Patel";
 c.greeter();  