(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},35:function(e,t,a){e.exports=a(83)},40:function(e,t,a){},42:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),i=a.n(s),r=(a(40),a(10)),l=a(14),c=a(12),p=a(15),u=a(13),d=a(6),g=a(32),m=a.n(g),h=(a(42),a(22)),f=a(11),v=a(9),b=a(18),w=a.n(b),y={position:"absolute",width:"100%",height:"100%",left:"0px",top:"0px"},C={"background-color":"#ffffff",position:"absolute",width:"8%",height:"8%",left:"0px",top:"0px"},k={position:"absolute",zIndex:1,width:"8%",height:"8%"},E=(o.a.Component,function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).getBuddy=function(){w.a.post("/findBuddy",{}).then(function(e){console.log("buddy name: "+e.data)})},a.pushWaypoint=function(e,t){a.state.waypoints.push({location:{lat:e,lng:t},stopover:!0})},a.loadMap=function(){if(a.props&&a.props.google){var e=a.props.google,t=e.maps,n=a.refs.map,o=i.a.findDOMNode(n),s=a.props.zoom,r=a.state.currentLocation,l=r.lat,c=r.lng,p=new t.LatLng(l,c),u=Object.assign({},{center:p,zoom:s});a.map=new t.Map(o,u),a.state.directionsDisplay.setMap(a.map);var g=document.getElementById("pac-input"),m=new e.maps.places.SearchBox(g);a.map.controls[e.maps.ControlPosition.TOP_LEFT].push(g);var h=[];m.addListener("places_changed",function(){var t=m.getPlaces();0!=t.length&&(h.forEach(function(e){e.setMap(null)}),h=[],t.forEach(function(t){if(t.geometry){var n={url:t.icon,size:e.maps.Size(71,71),origin:e.maps.Point(0,0),anchor:e.maps.Point(17,34),scaledSize:e.maps.Size(25,25)};h.push(new e.maps.Marker({map:Object(d.a)(Object(d.a)(a)),icon:n,title:t.name,position:t.geometry.location}));var o=new Promise(function(e,a){e({lat:t.geometry.location.lat(),lng:t.geometry.location.lng()})});o.then(function(e){!function(e){console.log("value:"),console.log(e),console.log(a.state),console.log("state"),a.setState(function(t){return{destination:e}},function(){console.log("STATE"),console.log(a.state),w.a.post("/coordinates",{startLat:a.state.currentLocation.lat,startLong:a.state.currentLocation.lng,destLat:a.state.destination.lat,destLong:a.state.destination.lng}).then(function(e){console.log(e.data)}),a.loadMap()})}(e)})}else console.log("Returned place contains no geometry")}))}),console.log(a.state),a.displayRoute(a.state.destination)}};var n=a.props.initialCenter,o=n.lat,s=n.lng,l=new a.props.google.maps.DirectionsService,u=new a.props.google.maps.DirectionsRenderer,g=new a.props.google.maps.places.SearchBox(document.getElementById("pac-input"));return a.state={currentLocation:{lat:o,lng:s},destination:{lat:37.868112,lng:-122.255033},waypoints:[],directionsService:l,directionsDisplay:u,searchBox:g},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var a=t.coords;e.setState({currentLocation:{lat:a.latitude,lng:a.longitude}}),e.loadMap()})}},{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"displayRoute",value:function(e){var t=this;this.state.directionsService.route({origin:new this.props.google.maps.LatLng(this.state.currentLocation.lat,this.state.currentLocation.lng),destination:new this.props.google.maps.LatLng(e.lat,e.lng),waypoints:this.state.waypoints,travelMode:this.props.google.maps.TravelMode.WALKING},function(e,a){"OK"===a?(console.log(t.state.currentLocation),t.state.directionsDisplay.setDirections(e)):window.alert("Directions request failed due to: "+a)})}},{key:"recenterMap",value:function(){var e=this.map,t=this.state.currentLocation,a=this.props.google.maps;if(e){var n=new a.LatLng(t.lat,t.lng);e.panTo(n)}}},{key:"renderChildren",value:function(){var e=this,t=this.props.children;if(console.log("children: "+t),t)return o.a.Children.map(t,function(t){if(t)return o.a.cloneElement(t,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})})}},{key:"render",value:function(){var e=Object.assign({},y),t=Object.assign({},C),a=Object.assign({},k);return o.a.createElement("div",null,o.a.createElement("div",{style:t},o.a.createElement("input",{id:"pac-input",class:"controls",type:"text",placeholder:"Search box"})),o.a.createElement("div",{style:a},o.a.createElement("button",{id:"search-button",onClick:this.getBuddy},"Find Buddy!")),o.a.createElement("div",{id:"map",style:e,ref:"map"},"Loading map..."))}}]),t}(o.a.Component)),L=E;E.defaultProps={zoom:14,initialCenter:{lat:37.871295,lng:-122.260314},centerAroundCurrentLocation:!0,visible:!0};var O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){!0===a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(L,{centerAroundCurrentLocation:!0,google:this.props.google}))}}]),t}(n.Component),j=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyDfaCamdV4CSw1jBTG8NZeem0YG6kguM3s"})(O),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).submitClicked=function(){alert("submit clicked!"),console.log(a.state),w.a.post("/signup",{email:a.state.username,password:a.state.password,firstName:a.state.first,lastName:a.state.last}).then(function(e){console.log(e.data)})},a.loginClicked=function(){a.setState({loginSuccess:!0})},a.state={username:"u",password:"p",first:"f",last:"l",loginSuccess:!1},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.submitClicked=a.submitClicked.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){switch(e.target.id){case"username":this.setState({username:e.target.value});break;case"password":this.setState({password:e.target.value});break;case"first":this.setState({first:e.target.value});break;case"last":this.setState({last:e.target.value})}console.log(e.target.id)}},{key:"render",value:function(){return!0===this.state.loginSuccess?o.a.createElement(h.a,null,o.a.createElement(h.b,{to:"/Map"}),o.a.createElement(f.a,{path:"/Map/",component:j})):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("label",null," Username:",o.a.createElement("input",{type:"text",id:"username",username:this.state.username,onChange:this.handleChange})),o.a.createElement("label",null," Password:",o.a.createElement("input",{type:"text",id:"password",password:this.state.password,onChange:this.handleChange})),o.a.createElement("label",null," First:",o.a.createElement("input",{type:"text",id:"first",first:this.state.first,onChange:this.handleChange})),o.a.createElement("label",null," Last:",o.a.createElement("input",{type:"text",id:"last",last:this.state.last,onChange:this.handleChange})),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",username:"Submit",onClick:this.submitClicked}),o.a.createElement("button",{username:"login",id:"loginbutton",onClick:this.loginClicked},"LOGIN")))}}]),t}(n.Component);S.defaultProps={value:"",username:"username",password:"password"};var M=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.dcfc96cb.chunk.js.map