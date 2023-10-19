import './App.css';
import Login from './Login/Login';
import Register from './Login/Register';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';
import Videos from './Videospages/videos';
import Users from './UserGroups/userGroups';
import Games from './Gaming/Gaming';







function App() {
  return (
  
    <>
    {/* <Home/> */}
    <Routes>

      <Route  excat path='' element={<Home/>}></Route>
      <Route  exact path='/video' element={<Videos/>}></Route>
      <Route  exact path='/group' element={<Users/>}></Route>
      <Route  exact path='/gameslevels' element={<Games/>}></Route>
      <Route  exact path='/login' element={<Login/>}></Route>
      <Route  exact path='/register' element={<Register/>}></Route>
      

    </Routes>

    
    
    

    </>
  );
}

export default App;
