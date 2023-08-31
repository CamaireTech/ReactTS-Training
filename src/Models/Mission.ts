class Mission{
   name: string;
   description:string
   members:string[]
//    launchDate:Date

   constructor(
    name:string,
    desc:string,
    members:string[],
    // launchDate:Date
    ){
        this.name = name
        this.description = desc
        this.members = members
        // this.launchDate = launchDate
   }
}

export {Mission}
