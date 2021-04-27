import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Admin from '../backend/Admin'
import Navbar from './Navbar/Navbar'
import NavbarMobile from './Navbar/NavbarMobile'
import Home from './Home/Home'
import Filial from './Filial/Filial'
import About from './About/About'
import Contact from './Contact/Contact'
import Tuzilma from './Tuzilma/Tuzilma'
import Arm1 from './Tuzilma/ARM/Arm1'
import Kafedra from './Tuzilma/Kafedralar/Kafedra'
import Umumtalim from './Tuzilma/Kafedralar/Umumtalim/Umumtalim'
import Jangovor from './Tuzilma/Kafedralar/Jangovor/Jangovor'
import Bolimlar from './Tuzilma/Bolimlar/Bolimlar'
import Kadrlar from './Tuzilma/Bolimlar/Kadrlar/Kadrlar'


function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <NavbarMobile />
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
                    <Route path='/tuzilma'>
                        <Tuzilma />
                    </Route>
                    <Route path='/kafedralar'>
                        <Kafedra />
                    </Route>
                    <Route path='/u-fanlar-kafedrasi'>
                        <Umumtalim />
                    </Route>
                    <Route path='/kjt-fanlar-kafedrasi'>
                        <Jangovor />
                    </Route>
                    <Route path='/bolimlar'>
                        <Bolimlar />
                    </Route>
                    <Route path='/kadrlar-bolimi'>
                        <Kadrlar />
                    </Route>
                    <Route path='/axborot-resurs-markazi'>
                        <Arm1 />
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
