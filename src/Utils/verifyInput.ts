import { toast } from "react-toastify"

export const checkFields = (data:any[]):boolean =>{
    let isValid = true
    data.forEach((data:{name:string,data:any})=>{
        if(data.data === null || data.data === undefined || data.data.length === 0 || !data.data){
            toast.error(`THe field ${data.name} is required`, {
                position: toast.POSITION.TOP_CENTER
              });
              isValid = false;
        }
    })

    if(isValid){
        return true
    }{
        return false
    }
}
