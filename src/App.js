
import './App.css';
import FrontendMain from './Components/FrontendMain/FrontendMain';
import FrontendProjects from './Components/FrontendProjects/FrontendProjects';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <div className="headerSeparator" id="frontendMentor"></div>
      <FrontendMain></FrontendMain>
      <FrontendProjects></FrontendProjects>
    </div>
  );
}

export default App;
