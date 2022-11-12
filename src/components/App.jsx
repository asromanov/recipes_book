import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Favourite from './Favourite';
// import Eat from './Eat';
import Header from './Header';
import Main from './Main';
// import Recipe from './Recipe';
import Reg from './Reg';

function App({ user, myRecipe }) {
    return (
      <>
      <Header user={user} />
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            <Routes>
              <Route path="/reg" element={<Reg />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={<Main user={user} />} />
              <Route path="/fav" element={<Favourite myRecipe={myRecipe} />} />
              {/* <Route path="/recipe/:id" element={<Card />} /> */}
            </Routes>
          </div>
  
        </div>
        
      </>
  
    );
  }
  
  export default App;
