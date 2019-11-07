import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Head,Adver,Top } from './container/right/index'
import Home from './container/left/Home'
import Api from './container/left/Api'
import Start from './container/left/Start'
import About from './container/left/About'
// import Infor from './container/Infor'
import Login from "./container/left/Login"
export default class APP extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className="content">
                    <div className='left'>
                        <Route path='/home' component={Home} /> 
                        <Route path='/start' component={Start} />
                        <Route path='/api' component={Api} />
                        <Route path='/about' component={About} />
                        {/* <Route path='/infor' component={Infor} /> */}
                        <Route path='/login' component={Login} />
                    </div>
                    <div className='right'>
                        <Head />
                        <Adver /> 
                        <Top />
                    </div>                    
                </div>
            </Router>
        )
    }
}
