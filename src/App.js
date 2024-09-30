import './css/style.css';
import './css/flexbox.css';
import Header from './components/Header.js'
import About1 from './components/About1.js';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import ProjectsList from './components/ProjectsList.js';
import ToolsList from './components/ToolsList.js';
import FormationList from './components/FormationList.js';
import Projects from './components/Projects.js';
/*import HobbiesList from './components/HobbiesList';*/




function App() {
  return (
    <div className="App">
      <Header/>
      <About1/>
      <Skills/>
      <ToolsList/>
      <FormationList/>
      <ProjectsList/>
  
      <Hobbies/>
      <Footer/>
    </div>
  );
}

export default App;
