class Customer {
    private firstname : string;
    private lastname : string;
   
    constructor(firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greeter = function(){
        console.log(`Hello  ${this.firstname} ${this.lastname}`)
    }
}

let customer = new Customer("FP", "Jones");
customer.greeter();
