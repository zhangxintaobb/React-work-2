(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),l=a(1),o=a(2),i=a(4),m=a(3),u=a(5),p=a(6);function h(){return c.a.createElement("div",{className:"header"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}),c.a.createElement("div",{style:{float:"right"}},c.a.createElement(p.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(p.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(p.b,{to:"api"},"API"),c.a.createElement(p.b,{to:"about"},"\u5173\u4e8e"),c.a.createElement(p.b,{to:"/login"},"\u767b\u5f55"))))}var d=a(12),E=(a(8),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"right-head"},c.a.createElement("div",{className:"right-head-inner"},c.a.createElement("p",null,"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),c.a.createElement("span",null,"\u60a8\u53ef\u4ee5 \u767b\u5f55 \u6216 \u6ce8\u518c , \u4e5f\u53ef\u4ee5"),c.a.createElement("a",{href:""},c.a.createElement("span",{className:"right-head-span"},"\u901a\u8fc7 GitHub \u767b\u5f55")))))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Right-Adver"},c.a.createElement("a",{href:"https://www.aliyun.com/product/nodejs?ref=cnode",className:"adver-a"},c.a.createElement("img",{src:"//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"})),c.a.createElement("div",{className:"sep10"}),c.a.createElement("a",{href:"https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs",className:"adver-a"},c.a.createElement("img",{src:"//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"})),c.a.createElement("div",{className:"sep10"}),c.a.createElement("a",{href:"https://www.qiniu.com/events/cdn-package?code=cnode",className:"adver-a"},c.a.createElement("img",{src:"//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"})),c.a.createElement("div",{className:"sep10"})))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"topic1"},c.a.createElement("div",{className:"topic1-header"},c.a.createElement("span",null,"\u65e0\u4eba\u56de\u590d\u7684\u8bdd\u9898")),c.a.createElement("div",{className:"topic1-inner"},c.a.createElement("ul",null,c.a.createElement("li",null,"\u4e00\u79cd\u652f\u6301\u63d2\u4ef6\u5f0f\u5f00\u53d1\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5f00\u53d1\u6a21\u5f0f"),c.a.createElement("li",null,"\u8bf7\u95ee\u7f13\u5b58\u7684\u5185\u5b58\u6a21\u578b\u662f\u4ec0\u4e48\u5462"),c.a.createElement("li",null,"Hackers\u5468\u520a\u7b2c\u5341\u671f\uff082019-11-03\uff09"),c.a.createElement("li",null,"\u5199\u4e86\u4e2a\u5728\u6d4b\u8bd5\u4e2d\uff0c\u63a7\u5236\u51fd\u6570\u65e5\u5fd7\u6253\u5370\u7684npm\u5305..."),c.a.createElement("li",null,"libuv\u7684\u5b9a\u65f6\u5668\u539f\u7406\u6e90\u7801\u89e3\u6790")))))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={todos:[1,2,3,4,5,6,7,8,9,10]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"pagin"},this.state.todos.map((function(t){return c.a.createElement("li",{key:t},c.a.createElement(p.c,{to:e.props.path+t},t))}))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topic/"+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"render",value:function(){return console.log(this.state.data),c.a.createElement("div",{className:"infor",dangerouslySetInnerHTML:{__html:this.state.data.content}})}}]),t}(n.Component),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page=1").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log(e.match.params.id),e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){console.log(this.state.data);this.props.match.url;return c.a.createElement("div",null,this.state.data.map((function(e){return c.a.createElement("div",{className:"inner",key:e.id},c.a.createElement("a",{className:"user_avatar"},c.a.createElement("img",{src:e.author.avatar_url,title:e.author.loginname})),c.a.createElement("span",{className:"reply-count"},c.a.createElement("span",{className:"reply"},e.reply_count),c.a.createElement("span",{className:"count"},"/"),c.a.createElement("span",{className:"count"},e.visit_count)),c.a.createElement("a",{className:"pull-right",href:"https://cnodejs.org/topic/"+e.id},c.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/5507021?v=4&s=120"}),c.a.createElement("span",null,"3 \u5929\u524d")),!0===e.top?c.a.createElement("span",{className:"put_top"},"\u7f6e\u9876"):"ask"===e.tab?c.a.createElement("span",{className:"put_ask"},"\u95ee\u7b54"):c.a.createElement("span",{className:"put_share"},"\u5206\u4eab"),c.a.createElement(p.b,{className:"topic_title",to:"/home/infor/"+e.id},e.title))})),c.a.createElement(f,{path:"/home/all/"}))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=share&&page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log(e.match.params.id),e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=share&&page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.data.map((function(e){return c.a.createElement("div",{className:"inner",key:e.id},c.a.createElement("a",{className:"user_avatar"},c.a.createElement("img",{src:e.author.avatar_url,title:e.author.loginname})),c.a.createElement("span",{className:"reply-count"},c.a.createElement("span",{className:"reply"},e.reply_count),c.a.createElement("span",{className:"count"},"/"),c.a.createElement("span",{className:"count"},e.visit_count)),c.a.createElement("a",{className:"pull-right",href:"https://cnodejs.org/topic/"+e.id},c.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/5507021?v=4&s=120"}),c.a.createElement("span",null,"3 \u5929\u524d")),c.a.createElement("span",{className:"put_share"},"\u5206\u4eab"),c.a.createElement(p.b,{className:"topic_title",to:"/home/infor/"+e.id},e.title))})),c.a.createElement(f,{path:"/home/share/"}))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=good&&page=1").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log(e.match.params.id),e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=good&&page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.data.map((function(e){return c.a.createElement("div",{className:"inner",key:e.id},c.a.createElement("a",{className:"user_avatar"},c.a.createElement("img",{src:e.author.avatar_url,title:e.author.loginname})),c.a.createElement("span",{className:"reply-count"},c.a.createElement("span",{className:"reply"},e.reply_count),c.a.createElement("span",{className:"count"},"/"),c.a.createElement("span",{className:"count"},e.visit_count)),c.a.createElement("a",{className:"pull-right",href:"https://cnodejs.org/topic/"+e.id},c.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/5507021?v=4&s=120"}),c.a.createElement("span",null,"3 \u5929\u524d")),c.a.createElement("span",{className:"put_top"},"\u7cbe\u534e"),c.a.createElement(p.b,{className:"topic_title",to:"/home/infor/"+e.id},e.title))})),c.a.createElement(f,{path:"/home/jinghua/"}))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=ask&&page=1").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log(e.match.params.id),e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=ask&&page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.data.map((function(e){return c.a.createElement("div",{className:"inner",key:e.id},c.a.createElement("a",{className:"user_avatar"},c.a.createElement("img",{src:e.author.avatar_url,title:e.author.loginname})),c.a.createElement("span",{className:"reply-count"},c.a.createElement("span",{className:"reply"},e.reply_count),c.a.createElement("span",{className:"count"},"/"),c.a.createElement("span",{className:"count"},e.visit_count)),c.a.createElement("a",{className:"pull-right",href:"https://cnodejs.org/topic/"+e.id},c.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/5507021?v=4&s=120"}),c.a.createElement("span",null,"3 \u5929\u524d")),c.a.createElement("span",{className:"put_ask"},"\u95ee\u7b54"),c.a.createElement(p.b,{className:"topic_title",to:"/home/infor/"+e.id},e.title))})),c.a.createElement(f,{path:"/home/question/"}))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=job&&page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log(e.match.params.id),e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=job&&page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.data.map((function(e){return c.a.createElement("div",{className:"inner",key:e.id},c.a.createElement("a",{className:"user_avatar"},c.a.createElement("img",{src:e.author.avatar_url,title:e.author.loginname})),c.a.createElement("span",{className:"reply-count"},c.a.createElement("span",{className:"reply"},e.reply_count),c.a.createElement("span",{className:"count"},"/"),c.a.createElement("span",{className:"count"},e.visit_count)),c.a.createElement("a",{className:"pull-right",href:"https://cnodejs.org/topic/"+e.id},c.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/5507021?v=4&s=120"}),c.a.createElement("span",null,"3 \u5929\u524d")),c.a.createElement("span",{className:"put_share"},"\u62db\u8058"),c.a.createElement(p.b,{className:"topic_title",to:"/home/infor/"+e.id},e.title))})),c.a.createElement(f,{path:"/home/job/"}))}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"\u5ba2\u6237\u7aef\u6d4b\u8bd5"))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.url;return c.a.createElement("div",null,c.a.createElement("div",{className:"home"},c.a.createElement(p.b,{className:"home-title",to:"".concat(e,"/all")},"\u5168\u90e8"),c.a.createElement(p.b,{className:"home-title",to:"".concat(e,"/jinghua")},"\u7cbe\u534e"),c.a.createElement(p.b,{className:"home-title",to:"".concat(e,"/share")},"\u5206\u4eab"),c.a.createElement(p.b,{className:"home-title",to:"".concat(e,"/question")},"\u95ee\u7b54"),c.a.createElement(p.b,{className:"home-title",to:"".concat(e,"/job")},"\u62db\u8058"),c.a.createElement(p.b,{className:"home-title",to:"".concat(e,"/text")},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),c.a.createElement("div",null,c.a.createElement(d.a,{exact:!0,path:e+"/all",component:g}),c.a.createElement(d.a,{path:"/home/all/:id",component:g}),c.a.createElement(d.a,{exact:!0,path:e+"/share",component:N}),c.a.createElement(d.a,{path:"/home/share/:id",component:N}),c.a.createElement(d.a,{exact:!0,path:e+"/jinghua",component:O}),c.a.createElement(d.a,{path:"/home/jinghua/:id",component:O}),c.a.createElement(d.a,{exact:!0,path:e+"/question",component:y}),c.a.createElement(d.a,{path:"/home/question/:id",component:y}),c.a.createElement(d.a,{exact:!0,path:e+"/job",component:k}),c.a.createElement(d.a,{path:"/home/job/:id",component:k}),c.a.createElement(d.a,{exact:!0,path:e+"/text",component:_}),c.a.createElement(d.a,{path:"/home/infor/:id",component:j})))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"API")}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Start")}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"About")}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"login-header"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"\u4e3b\u9875"),c.a.createElement("span",null,"/")),c.a.createElement("li",{className:"login-active"},"\u767b\u5f55"))),c.a.createElement("div",{className:"login-inner"},c.a.createElement("div",{className:"control-group"},c.a.createElement("label",{className:"control-label",for:"name"},"\u7528\u6237\u540d"),c.a.createElement("div",{className:"controls"},c.a.createElement("input",{className:"input-xlarge",type:"text",name:"name",id:"name"}))),c.a.createElement("div",{className:"control-group"},c.a.createElement("label",{className:"control-label",for:"name"},"\u5bc6 \xa0 \u7801"),c.a.createElement("div",{className:"controls"},c.a.createElement("input",{className:"input-xlarge",type:"text",name:"pwd",id:"pwd"}))),c.a.createElement(p.b,{to:"/home/all"},c.a.createElement("input",{className:"login-submit",value:"                    \u767b\u5f55"}))))}}]),t}(n.Component),q=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(h,null)),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"left"},c.a.createElement(d.a,{path:"/home",component:C}),c.a.createElement(d.a,{path:"/start",component:w}),c.a.createElement(d.a,{path:"/api",component:S}),c.a.createElement(d.a,{path:"/about",component:x}),c.a.createElement(d.a,{path:"/login",component:D})),c.a.createElement("div",{className:"right"},c.a.createElement(E,null),c.a.createElement(v,null),c.a.createElement(b,null))))}}]),t}(n.Component);s.a.render(c.a.createElement(q,null),document.getElementById("root"))},8:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.0eb5b37e.chunk.js.map