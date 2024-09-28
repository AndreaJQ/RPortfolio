import './css/style.css';
import './css/flexbox.css';
import Header from './components/Header.js'
import About1 from './components/About1.js';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Hobbies from './components/Hobbies';
import Formation from './components/Formation';
import Footer from './components/Footer';
/*import Projects from './components/Projects';*/
import ProjectsList from './components/ProjectsList.js';
/*import HobbiesList from './components/HobbiesList';*/




function App() {
  return (
    <div className="App">
   
      <Header/>
      <About1/>
      <Skills/>
      <Tools/>
      <Formation/>
   
      <ProjectsList/>
      <Hobbies/>
      <Footer/>
    </div>
  );
}

export default App;
