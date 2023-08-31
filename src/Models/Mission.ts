class Mission{
   name: string;
   description:string
   members:string[]
    launchDate:string

   constructor(
    name:string,
    desc:string,
    members:string[],
     launchDate:string
    ){
        this.name = name
        this.description = desc
        this.members = members
         this.launchDate = launchDate
   }
}

export {Mission}
