import api from "../Utils/api";
import { IMissionInterface } from "../types/Mission";

type apiMiddleWareProps = {
    action:{
        type:string
    },
    successCallback : (response:any)=>void,
    errorCallback :(error:any)=>void,
    mission?:IMissionInterface
}

const apiMiddleware = async ({action, successCallback, errorCallback,mission}:apiMiddleWareProps) => {
    // Check if the action needs to make an API request
    if (action.type === 'FETCH_MISSIONS') {
      try {
        
        const response = await api.get('/missions')
        
        //call the success callback with data
        successCallback(response);
      } catch (error) {
        // Call the error callback with the error
        errorCallback(error);
      }
    }

    else if(action.type === 'ADD_MISSION'){
        try{
            const response = await api.post('/missions', mission)
            successCallback(response)
        } catch(error){
            errorCallback(error)
        }
    }

    else if(action.type === 'DELETE_MISSION'){
        try{
            const response = await api.delete(`/missions/${mission?.id}`)
            successCallback(response)
        } catch(error){
            errorCallback(error)
        }
    }

    else{
        return
    }

  };
  
  export default apiMiddleware;


  //in utils, put the error callback and successCallback!
