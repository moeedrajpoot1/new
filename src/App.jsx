import Navbar from './components/navbar/Navbar';
import './app.scss'
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import  Coursor from './components/cursor/Coursor'
const App = () => {
  return <div>
  <Coursor/>
<section    id='Homepage'><Navbar/>

<Hero/>
</section>
<section id='Services'><Parallax type="Services"  /></section>
<section><Services/></section>
<section id='Portfolio' ><Parallax  type="Portfolio" /></section>
<section><Portfolio/></section>
<br></br>
<section id='ck' >


</section>


<section id='bk' >


</section>

<section id='dk' >


</section>

<section>
  <Contact/>
</section>




  </div>;
};

export default App;
