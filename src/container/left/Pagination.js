import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import "../../index.css"
export default class Pagination extends Component {
    constructor(){
        super();
        this.state={
            todos:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="inner">
                 <ul className="pagin">{
                    this.state.todos.map((item)=>(
                        <li key={item}>
                            <NavLink  to={this.props.path+item}>{item}</NavLink>
                        </li>
                    ))
                }</ul>
            </div>
        )
    }
}
