class User {
    constructor(
        public email:string,
        public name:string,
        private city:string = "ahmedabad",
        protected count = 1
        ){
    }
    private deletetockn(){
        console.log("tocken has been deleted");
        
    }
    get getappleEmail():string{
        return `apple${this.email}`
    }
    get courcecount():number{
        return this.count
    }
    set courcecount(coursenum){
        if(coursenum<1){
            throw new Error ("course count should more then 1")
        }
        this.count = coursenum;
    }

}
class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        this.count = 4
    }
} 
const parv = new User("p@p.com","parv");
parv.name

