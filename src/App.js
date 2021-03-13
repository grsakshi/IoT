import Navbar from './components/Navbar/Navbar.component';
import Header from './components/Header/Header.component'; 
import Project from './components/Project/project.component';
import BlogSection from './components/BlogSection/blogsection.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Project />
      <BlogSection />
    </div>
  );
}

export default App;
