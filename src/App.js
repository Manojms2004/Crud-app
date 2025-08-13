import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Students from './Components/Students';
import StudentAdd from './Components/StudentAdd';


function App() {

  return (
    <>
      <Router>
         <Routes>
             <Route path='/' element={<Navbar/>}> 
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Course' element={<Courses/>}/>
                <Route path='/Students' element={<Students/>}/>
             </Route>
             <Route path='/studentAdd' element={<StudentAdd/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
