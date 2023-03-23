abstract class Takephoto{
    filter:string;
    caneraMode:string;
  
    abstract getSepia():void;
    getReelTime():number{
        return 8
    }
}

class SnapChat extends Takephoto{

constructor(cm:string,fl:string){
    super();
        this.caneraMode=cm;
        this.filter=fl;
    }
    getSepia(): void {
        console.log("sepia");
        
    }
}

const jhon = new SnapChat("test","test");
jhon.getReelTime()


