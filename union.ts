let some:string|number = 55;
some = "A6y0";
console.log(some);


type user = {
    name:string,
    num:number,
    id:number
};
type admin = {
    adminName:string,
    email:String,
    id:string
};

let parv:user|admin = {name:"parv",num:5,id:56 };
parv={adminName:"parv",email:"p@67.cpn",id:"hgk"}
console.log(parv);


function getid(id:number|string ){
return`id is ${id}`
}
console.log(getid(6))

const arr:(string|number)[] = [44,"hiii",129, "fine"];
console.log(arr);


function getid2(id:number|string ){

    if(typeof id === "string"){
        return id.toUpperCase()
    }
     return id+2
    
    }
    console.log(getid2("parv"));


let pi:3.14=3.14;

let seatAllotment:"aisle"|"middle"|"window";
seatAllotment = "aisle";
//seatAllotment = "crew"    it will throw error

    export{}