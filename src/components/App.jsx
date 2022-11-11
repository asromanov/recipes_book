import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth';
// import Eat from './Eat';
import Header from './Header';
import Main from './Main';
// import Recipe from './Recipe';
import Reg from './Reg';

function App({ user }) {
    return (
      <>
      <Header user={user} />
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            <Routes>
              <Route path="/reg" element={<Reg />} />
              <Route path="/reg/auth" element={<Auth />} />
              {/* <Route path="/eat" element={<Eat />} /> */}
              <Route path="/" element={<Main user={user}/>} />
              {/* <Route path="/myrecipe" element={<List/>} />
              <Route path="/recipe/:id" element={<Card />} /> */}
            </Routes>
          </div>
  
        </div>
        
      </>
  
    );
  }
  
  export default App;
