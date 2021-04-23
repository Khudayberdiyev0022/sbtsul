import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Admin from '../backend/Admin'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Filial from './Filial/Filial'
import About from './About/About'
import Contact from './Contact/Contact'


function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/admin'>
                        <Admin />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/filial'>
                        <Filial />
                    </Route>
                    <Route path='/bizhaqimizda'>
                        <About />
                    </Route>
                    <Route path='/aloqa'>
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App
