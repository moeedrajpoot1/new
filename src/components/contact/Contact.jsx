import './contact.scss'
import { motion} from "framer-motion"





const Contact = () => {
  return (
    <motion.div className='contact'    >
      <motion.div  className='textContainer'>

<motion.h1 >Lets's Work Together</motion.h1>
<motion.div   className='item'>
<h2>Mail</h2>
<span>moeedrajpoot1@gmail.com</span>

</motion.div>
<motion.div   className='item'>
<h2>Address</h2>
<span>punjab.pk</span>

</motion.div>
<motion.div   className='item'>
<h2>Phone</h2>
<span>+92090078601</span>

</motion.div>


      </motion.div>

      <div className='formContainer'>
   
<form>
<input type='text' placeholder='Name' />
<input type='email' placeholder='Email' />
<textarea  rows={8}  placeholder='Message'   />

<button>Submit</button>
</form>



      </div>



    </motion.div>
  )
}

export default Contact
