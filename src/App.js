import './App.css';
import SideBar from './components/SideBar.js';
import Chat from './components/Chat.js';
import Login from './components/Login.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { useStateValue } from './StateProvider.js';


function App() {

  const [{user}, dispatch] = useStateValue();

  

  return (
    <div className="App">

      {
        !user ? (
          <Login/>
        ) : (
          <div className='app__body'>
            <Router>
            <SideBar/>
              <Routes>
                <Route path='/rooms/:roomId' element={<Chat/>}/>
              </Routes>
            </Router>
        
          </div>
        )
      }


    </div>
  );
}

export default App;



