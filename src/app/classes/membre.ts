import { specialite } from "../categories/specialite";


export class Membre {
    static nextId = 5;
    constructor(public id:number,public nom:string,public specialite:specialite,public numtel:number, public username_mb:string, public password_mb:string)
    {
        this.id = Membre.nextId++;
    }
}
