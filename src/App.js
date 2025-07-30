import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Courses from './Components/Courses';


function App() {

  return (
    <>
      <Router>
         <Routes>
             <Route path='/' element={<Navbar/>}> 
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Course' element={<Courses/>}/>
             </Route>
         </Routes>
      </Router>
    </>
  );
}

export default App;
