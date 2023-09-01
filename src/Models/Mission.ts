class Mission{
   id:string;
   name: string;
   description:string;
   members:string[];
    launchDate:string;

   constructor(
   id:string,
    name:string,
    desc:string,
    members:string[],
     launchDate:string
    ){
         this.id = id
        this.name = name
        this.description = desc
        this.members = members
         this.launchDate = launchDate
   }
}

export {Mission}
