import { toast } from "react-toastify";

export const addMissionSucces = (data:any) =>{
    toast.success("Mission added Sucesfully", {
        position: toast.POSITION.TOP_CENTER
      });

      return 
}

export const deleteMissionSucces = (data:any) =>{
  console.log("LOLL")
    toast.success("Mission sucessfully deleted !", {
        position: toast.POSITION.TOP_CENTER
      });

      return
}
