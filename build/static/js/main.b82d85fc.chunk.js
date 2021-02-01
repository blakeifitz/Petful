(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/rescueLanding.159bd276.jpg"},22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),l=n.n(o),c=n(12),i=(n(27),n(1)),u=n(6),s=n(7),p=n(9),m=n(8),h=n(20),d=n.n(h),f=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"landing"},r.a.createElement("h2",null,"This is Petful, a first come first serve animal rescue."),r.a.createElement("div",{className:"landing-body"},r.a.createElement("img",{src:d.a,alt:"cat and dog on bike"}),r.a.createElement("h3",null,"The Process:"),r.a.createElement("p",null,"If you'd like to adopt you must join our queue. You can watch in real time as pets are being adopted."),r.a.createElement("p",null,"When you join the adoption waiting list, you'll wait until you are at the top."," "),r.a.createElement("p",null,"Once it's your turn to pick, you will to get choose to adopt either a cat or a dog. You must adopt the dog or cat that has been there the longest."),r.a.createElement("button",{onClick:function(){return e.props.history.push("/pets")}},"Click here to start")))}}]),n}(a.Component),E=n(16),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,this.props.pet.name,", ",this.props.pet.gender,", "," ",this.props.pet.age),r.a.createElement("figure",null,r.a.createElement("img",{src:this.props.pet.imageURL,alt:"pet"}),r.a.createElement("figcaption",null,"Breed: ",this.props.pet.breed)),r.a.createElement("h4",null,"Reason for Adoption:"),r.a.createElement("p",null,this.props.pet.story))}}]),n}(a.Component);v.defaultProps={pet:{}};var b=v,y="https://calm-journey-12433.herokuapp.com/api",j=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=e.target.name.value;e.target.reset(),fetch("".concat(y,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:n})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(){t.props.updateState(n)}))}},{key:"renderWaitList",value:function(){return this.props.people.map((function(e,t){return 0===t?r.a.createElement("li",{key:t},r.a.createElement("b",null,e)):r.a.createElement("li",{key:t},e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Waiting List:"),r.a.createElement("ol",null,this.renderWaitList()),r.a.createElement("legend",null,r.a.createElement("b",null,"Add your name")),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"group"},r.a.createElement("label",{htmlFor:"name"},"Name: "),r.a.createElement("input",{type:"text",id:"name"})," ",r.a.createElement("button",{type:"submit"},"Submit"))))}}]),n}(a.Component),g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={pets:[],people:[],user:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.updateState(),this.adoptInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateState",value:function(){var e=this;Promise.all([fetch("".concat(y,"/people"),{method:"GET",headers:{"content-type":"application/json"}}),fetch("".concat(y,"/pets"),{method:"GET",headers:{"content-type":"application/json"}})]).then((function(e){var t=Object(E.a)(e,2),n=t[0],a=t[1];return n.ok?a.ok?Promise.all([n.json(),a.json()]):a.json().then((function(e){return Promise.reject(e)})):n.json().then((function(e){return Promise.reject(e)}))})).then((function(t){var n=Object(E.a)(t,2),a=n[0],r=n[1];e.setState({people:a,pets:r}),e.checkLine()})).catch((function(e){console.error({error:e})}))}},{key:"deletePet",value:function(e){var t=this;e?this.adoptInterval():e=Math.random()>=.5?"cats":"dogs",fetch("".concat(y,"/pets/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(){t.updateState()})).catch((function(e){console.error({error:e})}))}},{key:"handleSubmit",value:function(e){this.setState({user:e}),this.updateState()}},{key:"adoptInterval",value:function(){var e=this;this.interval=setInterval((function(){e.deletePet()}),3e3)}},{key:"checkLine",value:function(){this.state.people[0]===this.state.user&&(clearInterval(this.interval),console.log("FRONT OF THE LINE"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"pet-list"},r.a.createElement("h2",null,"Our Current Pets"),r.a.createElement(b,{type:"cat",pet:this.state.pets.cat}),r.a.createElement(b,{type:"dog",pet:this.state.pets.dog})),this.state.people[0]===this.state.user?r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.deletePet("cats")}},"Adopt Cat")," ",r.a.createElement("button",{onClick:function(){return e.deletePet("dogs")}},"Adopt dog")):r.a.createElement(j,{people:this.state.people,updateState:function(t){return e.handleSubmit(t)}}))}}]),n}(a.Component);n(28);var k=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(c.b,{to:"/"},r.a.createElement("h1",null,"Petful"))),r.a.createElement("main",null,r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{path:"/pets",component:g})))};l.a.render(r.a.createElement(c.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b82d85fc.chunk.js.map