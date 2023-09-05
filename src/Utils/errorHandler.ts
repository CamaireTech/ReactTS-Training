import { toast } from "react-toastify"

export const loadMissionsError = (data:any) =>{
  toast.error("Error while Fetching mission", {
      position: toast.POSITION.TOP_CENTER
    });

    return
}

export const addMissionError = (data:any) =>{
    toast.error("Error while inserting Mission", {
        position: toast.POSITION.TOP_CENTER
      });

      return
}

export const deleteMissionError = (data:any) =>{
    toast.error("Error while Deleting Mission", {
        position: toast.POSITION.TOP_CENTER
      });

      return
}
