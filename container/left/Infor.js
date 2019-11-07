import React, { Component } from 'react'
import "../../index.css"
export default class Infor extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let path = this.props.match.params.id
        fetch('https://cnodejs.org/api/v1/topic/'+path)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            this.setState({
                data:res.data
            })
        })
    }

    // componentDidUpdate(prevProps,prevState){
    //     if(prevProps.location.search !== this.props.location.search){
    //         let path = this.props.match.params.id
    //         fetch( 'https://cnodejs.org/api/v1/topic/'+path)
    //             .then((res)=>res.json())
    //             .then((res)=>{
    //                 this.setState({data:res.data});
    //                 console.log('更新后',res.data)
    //             })
    //     }
        
    // }
    render() {
        console.log(this.state.data)
        return (
            <div className="infor"  dangerouslySetInnerHTML = {{ __html:this.state.data.content }}>
            </div>
            
        )
    }
}
