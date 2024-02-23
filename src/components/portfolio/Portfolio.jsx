import { useRef } from "react"
import "./portfolio.scss"
import {motion ,useScroll,useSpring, useTransform} from 'framer-motion'


const items=[
{
id:1,
title:"Beauty Beast",
img:"https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=600",
desc:"Web development encompasses designing, coding, and maintaining websites, ensuring functionality, user experience, and responsiveness for optimal online performance."


},
{
    id:2,
    title:"React Project",
    img:"https://images.pexels.com/photos/216581/pexels-photo-216581.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Web development encompasses designing, coding, and maintaining websites, ensuring functionality, user experience, and responsiveness for optimal online performance."
    
    
    },
    {
        id:3,
        title:"Tailwind Project",
        img:"https://images.pexels.com/photos/7662056/pexels-photo-7662056.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Web development encompasses designing, coding, and maintaining websites, ensuring functionality, user experience, and responsiveness for optimal online performance."
        
        
        },
        {
            id:4,
            title:"Next Js",
            img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc:"Web development encompasses designing, coding, and maintaining websites, ensuring functionality, user experience, and responsiveness for optimal online performance."
            
            
            }





];

const Single=({item})=>{

const ref=useRef();
const {scrollYProgress} = useScroll({
    target:ref,
  
});

const y = useTransform(scrollYProgress,[0,1],[-350,350]);

return (
<section >
<div  className="container">
<div className="wrapper">
<div className="imageContainer" ref={ref}>
<img src={item.img} alt=""/></div>
<motion.div className="textContainer" style={{y}}>
<h2  >{item.title}</h2>
<p>{item.desc}</p>
<button>See Demo</button>


</motion.div>

</div>

</div>




</section>




)


}


const Portfolio = () => {


    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});


    const scaleX= useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
        })



  return (
    <div className="portfolio" ref={ref}>
<div className="progress">
<h1>Featured Works</h1>
<motion.div style={{scaleX}} className="progressBar"></motion.div>

</div>


{items.map(item=>(

<Single item={item} key={item.id}/>

))}

      
    </div>
  )
}

export default Portfolio
