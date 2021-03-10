import Navbar from './components/Navbar/Navbar.component';
import Header from './components/Header/Header.component'; 
import Project from './components/Projects/projects.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Project />
    </div>
  );
}

export default App;
