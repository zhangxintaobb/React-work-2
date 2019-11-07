import React, { Component } from 'react'
import "../../index.css"
export default class Adver extends Component {
    render() {
        return (
            <div>
                <div className="Right-Adver">
                    <a href="https://www.aliyun.com/product/nodejs?ref=cnode" className="adver-a">
                        <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" />
                    </a>
                    <div className="sep10"></div>
                    <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs" className="adver-a">
                        <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" />
                    </a>
                    <div className="sep10"></div>
                    <a href="https://www.qiniu.com/events/cdn-package?code=cnode" className="adver-a">
                        <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" />
                    </a>
                    <div className="sep10"></div>
                </div>    
            </div>
        )
    }
}
