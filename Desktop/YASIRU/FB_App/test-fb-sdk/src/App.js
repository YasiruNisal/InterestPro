import React from "react";
import Home from './Pages/Home'
import InterestExplorer from './Pages/InterestExplorer'
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
   <Router>
       <main>
           <Navbar/>
           <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/interestexplorer' exact component={InterestExplorer}/>
           </Switch>
       </main>
   </Router>
  );
}

export default App;
