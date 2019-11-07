import React, { Component } from 'react'
import "../../index.css"
export default class Head extends Component {
    render() {
        return (
            <div>
                <div className="right-head">
                    <div className="right-head-inner">
                        <p>CNode：Node.js专业中文社区</p>
                        <span>您可以 登录 或 注册 , 也可以</span>
                        <a href="">
                            <span className="right-head-span">    
                                通过 GitHub 登录
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
