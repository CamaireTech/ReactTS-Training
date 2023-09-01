export interface IMissionInterface {
    id:string
    name:string
    description : string
    launchDate: string
    members : string[]
}

export type MissionContextType = {
    missions : IMissionInterface[],
    saveMission(mission:IMissionInterface) : void,
    deleteMission(id:string) : void
}
