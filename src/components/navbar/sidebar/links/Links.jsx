import {motion}from "framer-motion"

const Links = () => {

const variants={
open:{
  transition:{
    staggerChildren:0.1
  }
},
closed:{
transition:{
  staggerChildren:0.05,
  staggerChildren: -1,
}



}



}



const itemvariants={
  open:{
   y:0,
   opacity:1,
  },
  closed:{
 y:50,
  opacity:0,
   }
  }



    const items =["Homepage","Services","Portfolio","About","Contact"]
   
  return (
    <motion.div className="links"   variants={variants}>
      {items.map(item=>(
<motion.a href={`#${item}`} key={item} variants={itemvariants}  whileHover={{scale:1.1}} whileTap={{scale:0.95}} >{item}</motion.a>
      ))}




    </motion.div>
  )
}

export default Links
