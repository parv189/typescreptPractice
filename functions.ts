function add(num:number){
    return num+5;
}
console.log(add(4));


//declaration part
function getupper(some:string){
return some.toUpperCase();
}
console.log(getupper("hello typescript"));


function getinfo(name:string,age:number,isadult:boolean){
    return "name is : "+name+", age is : "+age+" and is he adult : "+isadult;
}
console.log(getinfo("parv",21,true));


function getinfo2(name:string,age:number, isadult:boolean=true){
    return "name is : "+name+", age is : "+age+" and is he adult : "+isadult;
}
console.log(getinfo2("parv",21,false));


let heros =["thor","spiderman","ironman"]
heros.map((hero:string) => {
console.log(`hero is ${hero}`) ;
})

//return part
function getdata(name:string,num:number):void{
    console.log(name+num);
}getdata("parv",6);

function getdata2(name:string):string{
    return name.trim()
};
console.log(getdata2("   parv"));


//errors handle
function error(ermassage:string):void{
    console.log(ermassage);
}error("error 502");

function handleerror(ermassage:string):never{
    throw new Error(ermassage)
}handleerror("new error 445");



export{}