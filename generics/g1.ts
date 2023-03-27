//take and return same value, which is define  in the type

function x <T>(any:T):T{
    return any;
}

const y = <T,>(any:T[]):T => {                        //<T,>   this is not ordinery tag
    return any[1]
}

interface str {
    name:string,
    password:string
}
var xoxo:str = {name:"fds",password:"wte"}
function a<T,U extends str>(val1:T,val2:U):object{
return {
    val1,
    val2
}
}

class entry <T extends str>{
public seating:T[] = []
addobj(user:T){
this.seating.push(user)
return this.seating
}
}
const u1 = new entry()
const a1 = u1.addobj({name:'parv',password:"ytrewd"})
console.log(a1);
