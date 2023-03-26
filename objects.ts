const user ={
    name:"parv",
    num:10,
    isactive:true
}

function info({name:string,num:number,isactive:boolean}):{name:string,num:number,isactive:boolean}{
return{name:"parv",num:5,isactive:true}
}
console.log(info({name:"x",num:5,isactive:false}));

type user = {
    name:string,
    num:number,
    isactive:boolean
}

function data(user:user):user{
    return {name:"",num:5,isactive:false}
}
console.log({name:"parv",num:3,isactive:true});



type details ={
    readonly _id:number,
    name:string,
    num:number,
    email:string,
    extra?:string
}
type activity = {
    isactive:boolean
}

let user1:details ={
_id:10001,
name:"shukesh",
num:345,
email:"sk567@kmail.dev",
}

type newdetails = details & activity;
let user2:newdetails ={
    _id:10001,
    name:"shukesh",
    num:345,
    email:"sk567@kmail.dev",
    isactive:true
    }
console.log(user2);
``

export{}