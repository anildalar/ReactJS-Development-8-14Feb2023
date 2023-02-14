

class A{
    //1. Properties/Variable
    name; // This is only decleration
    surname=''; // THis is decleration and initialization
    address='neemuch';// THis is decleration and initialization
    state;

    //2. Constructor
    constructor(){
        // The role of constructor is to initilize the properties
        //this.member
        this.name = 'Anil';
        this.surname="Dollor";
        this.fatherName='Ramesh';
    }

    //3. Methods
    showName(){
        console.log(this.name+this.surname+this.address+this.fatherName); // this is an internal object
    }

    setState(data){
        this.state = data;
    }

    showState(){
        console.log(this.state)
    }

}


class B extends A{
    //1 Properties
    friends1; // This is only decleration
    friends2=''; // THis is decleration and initialization

    //2. Constructor
    constructor(frnd3){ //frnd3 is formal argument
        super();
        this.friends1='Rakesh';
        this.friends2='Dev';
        this.friends3=frnd3;
    }


    //3. Methods
    listMyFriends(){
        console.log(this.friends1);
        console.log(this.friends2);
        console.log(this.friends3);
    }


}

let obj2 = new B('Pushpendra');

obj2.listMyFriends();
obj2.showName();

obj2.setState({
    name:"Anil",
    surname:"Sharma"
});

obj2.showState();

// Lets create the class Object
// let object = new ClassName();



// this obj is an external object
// object.member
//obj.showName() // . is member selection operator
