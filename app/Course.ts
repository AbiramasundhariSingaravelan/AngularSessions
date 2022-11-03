export class Course
{
    id:number;
    cname:string;
    desc:string;
    price:number;
    constructor(id:number,cname:string,desc:string,price:number)
    {
        this.id=id;
        this.cname=cname;
        this.desc=desc;
        this.price=price;
    }
}