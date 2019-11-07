import React, { Component } from 'react'
import "../../index.css"
import {Link} from "react-router-dom"
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-header">
                    <ul>
                        <li>
                            <a href="/">主页</a>
                            <span>/</span>
                        </li>
                        <li className="login-active">登录</li>
                    </ul>
                </div>
                <div className="login-inner">
                    <div className="control-group">
                        <label className='control-label' for="name">用户名</label>
                        <div className="controls">
                            <input className="input-xlarge" type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div className="control-group">
                        <label className='control-label' for="name">密 &nbsp; 码</label>
                        <div className="controls">
                            <input className="input-xlarge" type="text" name="pwd" id="pwd" />
                        </div>
                    </div>
                    <Link to="/home/all">
                        <input  className="login-submit" value="                    登录" />
                    </Link>     
                </div>
            </div>
        )
    }
}
