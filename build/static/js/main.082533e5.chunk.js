(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},35:function(e,t,a){e.exports=a(83)},40:function(e,t,a){},42:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),s=a.n(i),r=(a(40),a(9)),l=a(14),c=a(11),p=a(15),u=a(12),g=a(13),d=a(32),m=a.n(d),h=(a(42),a(22)),f=a(10),v=a(8),b=a(21),w=a.n(b),C={position:"absolute",width:"100%",height:"100%",left:"0px",top:"0px"},y={"background-color":"#ffffff",position:"absolute",width:"8%",height:"8%",left:"0px",top:"0px"},k=(o.a.Component,function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).loadMap=function(){if(a.props&&a.props.google){var e=a.props.google,t=e.maps,n=a.refs.map,o=s.a.findDOMNode(n),i=a.props.zoom,r=a.state.currentLocation,l=r.lat,c=r.lng,p=new t.LatLng(l,c),u=Object.assign({},{center:p,zoom:i});a.map=new t.Map(o,u),a.state.directionsDisplay.setMap(a.map);var g=document.getElementById("pac-input"),d=new e.maps.places.SearchBox(g);a.map.controls[e.maps.ControlPosition.TOP_LEFT].push(g);var m=[];d.addListener("places_changed",function(){var t=this,a=d.getPlaces();0!=a.length&&(m.forEach(function(e){e.setMap(null)}),m=[],a.forEach(function(a){if(a.geometry){var n={url:a.icon,size:e.maps.Size(71,71),origin:e.maps.Point(0,0),anchor:e.maps.Point(17,34),scaledSize:e.maps.Size(25,25)};m.push(new e.maps.Marker({map:t,icon:n,title:a.name,position:a.geometry.location})),console.log(a.name);var o=new Promise(function(e,t){e({lat:a.geometry.location.lat(),lng:a.geometry.location.lng()})});o.then(function(e){!function(e){console.log("value:"),console.log(e),console.log(t.state),console.log("state"),t.setState({destination:e})}(e)})}else console.log("Returned place contains no geometry")}))}),console.log(a.state),a.displayRoute(a.state.destination)}};var n=a.props.initialCenter,o=n.lat,i=n.lng,l=new a.props.google.maps.DirectionsService,u=new a.props.google.maps.DirectionsRenderer,g=new a.props.google.maps.places.SearchBox(document.getElementById("pac-input"));return a.state={currentLocation:{lat:o,lng:i},destination:{lat:37.868112,lng:-122.255033},directionsService:l,directionsDisplay:u,searchBox:g},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var a=t.coords;e.setState({currentLocation:{lat:a.latitude,lng:a.longitude}}),e.loadMap()})}},{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"displayRoute",value:function(e){var t=this;this.state.directionsService.route({origin:new this.props.google.maps.LatLng(this.state.currentLocation.lat,this.state.currentLocation.lng),destination:new this.props.google.maps.LatLng(e.lat,e.lng),travelMode:this.props.google.maps.TravelMode.WALKING},function(e,a){"OK"===a?(console.log(t.state.currentLocation),t.state.directionsDisplay.setDirections(e)):window.alert("Directions request failed due to: "+a)})}},{key:"recenterMap",value:function(){var e=this.map,t=this.state.currentLocation,a=this.props.google.maps;if(e){var n=new a.LatLng(t.lat,t.lng);e.panTo(n)}}},{key:"renderChildren",value:function(){var e=this,t=this.props.children;if(t)return o.a.Children.map(t,function(t){if(t)return o.a.cloneElement(t,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})})}},{key:"render",value:function(){var e=Object.assign({},C),t=Object.assign({},y);return o.a.createElement("div",null,o.a.createElement("div",{style:t},o.a.createElement("input",{id:"pac-input",class:"controls",type:"text",placeholder:"Search box"})),o.a.createElement("div",{id:"map",style:e,ref:"map"},"Loading map..."),this.renderChildren())}}]),t}(o.a.Component)),E=k;k.defaultProps={zoom:14,initialCenter:{lat:37.871295,lng:-122.260314},centerAroundCurrentLocation:!0,visible:!0};var L=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){!0===a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,{centerAroundCurrentLocation:!0,google:this.props.google}))}}]),t}(n.Component),O=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyDfaCamdV4CSw1jBTG8NZeem0YG6kguM3s"})(L),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).submitClicked=function(){alert("submit clicked!"),console.log(a.state),w.a.post("/signup",{email:a.state.username,password:a.state.password,firstName:a.state.first,lastName:a.state.last}).then(function(e){console.log(e.data)})},a.loginClicked=function(){},a.state={username:"u",password:"p",first:"f",last:"l"},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.submitClicked=a.submitClicked.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){switch(e.target.id){case"username":this.setState({username:e.target.value});break;case"password":this.setState({password:e.target.value});break;case"first":this.setState({first:e.target.value});break;case"last":this.setState({last:e.target.value})}console.log(e.target.id)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,null,o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("label",null," Username:",o.a.createElement("input",{type:"text",id:"username",username:this.state.username,onChange:this.handleChange})),o.a.createElement("label",null," Password:",o.a.createElement("input",{type:"text",id:"password",password:this.state.password,onChange:this.handleChange})),o.a.createElement("label",null," First:",o.a.createElement("input",{type:"text",id:"first",first:this.state.first,onChange:this.handleChange})),o.a.createElement("label",null," Last:",o.a.createElement("input",{type:"text",id:"last",last:this.state.last,onChange:this.handleChange})),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",username:"Submit",onClick:this.submitClicked}),o.a.createElement(h.b,{to:"/Map"},o.a.createElement("button",{username:"login",id:"loginbutton",onClick:this.loginClicked},"LOGIN")),o.a.createElement(f.a,{path:"/Map/",component:O}))))}}]),t}(n.Component);j.defaultProps={value:"",username:"username",password:"password"};var M=j;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.082533e5.chunk.js.map