interface Musician {
    name: string;
    instrument: string;
    play(action: string): string

}
class band implements Musician {
    constructor(
        public name: string,
        public instrument: string
    ) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const a = new band("Raju", "guitar");
//console.log(a.play("strums"));

var array:{Name:string,Age:number,Email:string,Mobile:number}[] = [];
class info {
    //array:{Name:string,Email:string}[]
    constructor(
        public name: string,
        public age: number,
        public email: string,
        private mobile: number,
        //public array:string[] = []
    ) {}
    public calling(){
        if (this.age > 30) {
            console.log("you have called",this.name);
            return this.store();    
        }
        else{
            return `Enter Valid Number`
        }
    }
    public store(){
        //console.log("your Stored data: ");
        array.push({Name:this.name,Age:this.age,Email:this.email,Mobile:this.mobile})
    }
}

let arr:any []=[
    new info("Parv", 90, "abc@3.com", 123456787),
    new info("Parv", 34, "abc@3.com", 123456787),
    new info("Parv", 2, "abc@3.com", 123456787),
    new info("Parv", 22, "abc@3.com", 123456787),
    new info("Parv", 54, "abc@3.com", 123456787),
    new info("Parv", 22, "abc@3.com", 123456787),
    new info("Parv", 11, "abc@3.com", 123456787),
    new info("Parv", 7, "abc@3.com", 123456787),
    new info("Parv", 45, "abc@3.com", 123456787),
    new info("4t34te", 30, "abc@3.com", 123456787)
]
for(let i=0 ; i<arr.length ; i++){
    arr[i].calling();
}
console.log(array);








