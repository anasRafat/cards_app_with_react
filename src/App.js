import React , {Component} from 'react';
import './App.css';
import Home from './pages/Home';
import Add from './pages/Add';
import Update from './pages/Update';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div className="container">
      <Router>
      
      <div className="App">
      </div>
      <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/Home' element={< Home />}></Route>
                <Route exact path='/Update/:id' element={< Update />}></Route>
                <Route exact path='/add' element={< Add />}></Route>
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;
