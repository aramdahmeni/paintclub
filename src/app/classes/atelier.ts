export class Atelier {
    static nextId: number;
    static notdone=false;
    constructor(public id:number,public nom:string,public description:string,public date:string,public image:string,public lieu:string, public done:boolean){
        this.id = Atelier.nextId++;
        this.done=Atelier.notdone
    }
}
