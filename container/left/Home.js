import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import '../../index.css'
import All from './All'
import Share from './Share'
import Jinghua from './Jinghua'
import Question from './Qusetion'
import Infor from './Infor';
import Job from './Job'
import Text from './Text'
export default class Home extends Component {
    render() {
        let {url} = this.props.match
        // console.log(this.props)
        return (
            <div>
                <div className="home">
                    <Link className="home-title" to={`${url}/all`}>全部</Link>
                    <Link className="home-title" to={`${url}/jinghua`}>精华</Link>
                    <Link className="home-title" to={`${url}/share`}>分享</Link>
                    <Link className="home-title" to={`${url}/question`}>问答</Link>
                    <Link className="home-title" to={`${url}/job`}>招聘</Link>
                    <Link className="home-title" to={`${url}/text`}>客户端测试</Link>
                </div>
                <div>
                    <Route exact path={url+'/all'} component={All}/>
                    <Route path='/home/all/:id' component={All}/>
                    <Route exact path={url+'/share'} component={Share}/>
                    <Route path='/home/share/:id' component={Share}/>
                    <Route exact path={url+'/jinghua'} component={Jinghua}/>
                    <Route path='/home/jinghua/:id' component={Jinghua}/>
                    <Route exact path={url+'/question'} component={Question}/>                    
                    <Route path='/home/question/:id' component={Question}/>
                    <Route exact path={url+'/job'} component={Job}/>                    
                    <Route path='/home/job/:id' component={Job}/>
                    <Route exact path={url+'/text'} component={Text}/>      
                    <Route path='/home/infor/:id' component={Infor} />                    
                </div>
            </div>
        )
    }
}