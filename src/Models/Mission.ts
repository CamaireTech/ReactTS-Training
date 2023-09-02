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

   
    public get getId () :string{
      return this.id
   }

   public get getName ():string{
      return this.name
   }

   public get getDescription ():string {
      return this.description
   }
   
   public get getMembers() : string[] {
      return this.members
   }

   ///SEtters
   public set setId (id:string){
      this.id = id
   }

   public set setName (name:string){
      this.name = name
   }

   public set setDescription (desc:string) {
      this.description = desc
   }
   
   public set setMembers(membs:string[]) {
      this.members = membs
   }

}

export {Mission}
