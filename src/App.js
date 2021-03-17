import Navbar from './components/Navbar/Navbar.component';
import Header from './components/Header/Header.component'; 
import Project from './components/Project/project.component';
import BlogSection from './components/BlogSection/blogsection.component';


function App() {
  return (
    <div className="text-center bg-blue-100">
      <Navbar />
      <Header />
      <Project />
      <BlogSection />
    </div>
  );
}

export default App;
