import React from 'react'

type TBtnProps = {
    btnCallback : (e?:any)=>void
    title : string
    fullWidth? : boolean
    disabled ?:boolean
}

export const Button = ({btnCallback, title = "Submit", fullWidth=false , disabled=false}:TBtnProps) => {
  return (
    <button onClick={()=>btnCallback()} className={`${fullWidth?'bigBtn' :''}`} disabled={disabled}>
        {title}
    </button>
  )
}

export default Button
