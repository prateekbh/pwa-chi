(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{E0vE:function(){},Gxso:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var r=n("gDde"),o=n("Y+fs"),c=n("x9vV"),s=n.n(c),u=(n("E0vE"),n("NWYn")),l=n.n(u);t.default=Object(o.b)(e=>({reducer:e.reducer}))(class extends r.Component{constructor(...e){super(...e),i(this,"state",{time:Date.now(),count:10}),i(this,"updateTime",()=>{this.setState({time:Date.now()})}),i(this,"increment",()=>{this.setState({count:this.state.count+1})})}componentDidMount(){}componentWillUnmount(){clearInterval(this.timer)}render({user:e},{time:t}){return Object(r.h)("div",{class:l.a.profile},Object(r.h)("h1",null,"Profile: ",e),Object(r.h)("p",null,"This is the user profile for a user named ",e,"."),Object(r.h)("div",null,"Current time: ",new Date(t).toLocaleString()),Object(r.h)("p",null,Object(r.h)(s.a,{raised:!0,ripple:!0,onClick:this.increment},"Click Me")," ","Clicked ",this.props.reducer.count," times."))}})},NWYn:function(e){e.exports={profile:"profile__t2Dqz"}}}]);
//# sourceMappingURL=route-profile.chunk.ad3e8.esm.js.map