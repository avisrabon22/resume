import Education from './Components/Education';
import Experience from './Components/Experienc';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import WebLinks from './Components/Weblink';



function App() {
  return (
<>
<div className="container mx-auto">
      <Header />
      <Skills />
      <Projects/>
      <Experience />
      <Education />
      <WebLinks />
</div>
</>
  );
};

export default App
