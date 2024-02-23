import {motion} from 'framer-motion'
const ToggleButton = ({setOpen}) => {

 

    
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>
 
 <svg width="23" height="23" viewBox="0 0 23 23">
      <path d="M2 4h19M2 11h19M2 18h19" strokeWidth="3" stroke="black" strokeLinecap="round" />
    </svg>





    </button>
  )
}

export default ToggleButton
