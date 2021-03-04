(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{19:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var n=r(2),s=r(14),a=r.n(s),c=r(5),i=r(6),o=r(8),u=r(7),l=r(34),h=r(35),j=r(36),d=(r(19),r(0)),b=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h3",{className:"header-title",children:Object(d.jsx)("a",{href:"google.com",children:"Game of Thrones DB"})}),Object(d.jsxs)("ul",{className:"header-list",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"google.com",children:"Characters"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"google.com",children:"Houses"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"google.com",children:"Books"})})]})]})},p=r(3),f=r.n(p),m=r(9),O=function(){function e(){var t=this;Object(c.a)(this,e),this._transformCharacter=function(e){return{name:t.isSet(e.name),gender:t.isSet(e.gender),born:t.isSet(e.born),died:t.isSet(e.died),culture:t.isSet(e.culture)}},this._transformHouse=function(e){return{name:t.isSet(e.name),region:t.isSet(e.region),words:t.isSet(e.words),titles:t.isSet(e.titles),overlord:t.isSet(e.overlord),ancestralWeapons:t.isSet(e.ancestralWeapons)}},this._transformBook=function(e){return{name:t.isSet(e.name),numberOfPages:t.isSet(e.numberOfPages),publisher:t.isSet(e.publisher),released:t.isSet(e.released)}},this._apiBase="https://www.anapioficeandfire.com/api"}return Object(i.a)(e,[{key:"getResource",value:function(){var e=Object(m.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllCharacters",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters?page=5&pageSize=10");case 2:return t=e.sent,e.abrupt("return",t.map(this._transformCharacter));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCharacter",value:function(){var e=Object(m.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters/".concat(t));case 2:return r=e.sent,e.abrupt("return",this._transformCharacter(r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllHouses",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/houses/");case 2:return t=e.sent,e.abrupt("return",t.map(this._transformHouses));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHouse",value:function(){var e=Object(m.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/houses/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",this.map(r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllBooks",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/books/");case 2:return t=e.sent,e.abrupt("return",t.map(this._transformBooks));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBook",value:function(){var e=Object(m.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/books/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",this.map(r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isSet",value:function(e){return e||"no data!"}}]),e}(),x=(r(22),function(){return Object(d.jsx)("div",{className:"loadingio-spinner-spin-7a5z4meq86b",children:Object(d.jsxs)("div",{className:"ldio-az7fcjxuvd",children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})})]})})}),v=(r(23),r.p+"static/media/logo192.b285dc75.png"),g=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:v,alt:"Error"}),Object(d.jsx)("span",{children:"Something goes wrong!!"})]})},w=(r(24),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).gotService=new O,e.state={char:{},loading:!0,error:!1},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updateCharacter=function(){var t=Math.floor(140*Math.random()+25);e.gotService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){console.log("mounting"),this.updateCharacter(),this.timerId=setInterval(this.updateCharacter,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.char,r=e.loading,n=e.error,s=n?Object(d.jsx)(g,{}):null,a=r?Object(d.jsx)(x,{}):null,c=r||n?null:Object(d.jsx)(y,{char:t});return Object(d.jsxs)("div",{className:"random-block rounded",children:[s,a,c]})}}]),r}(n.Component)),y=function(e){var t=e.char,r=t.name,n=t.gender,s=t.born,a=t.died,c=t.culture;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h4",{children:["RandomChar: ",r]}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Gender: "}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Born: "}),Object(d.jsx)("span",{children:s})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Died: "}),Object(d.jsx)("span",{children:a})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Culture: "}),Object(d.jsx)("span",{children:c})]})]})]})},C=w,k=(r(25),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).gotService=new O,e.state={charList:null},e.renderItems=function(t){return t.map((function(t,r){return Object(d.jsx)("li",{className:"list-group-item",onClick:function(){return e.props.onCharSelected(r)},children:t.name},r)}))},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.gotService.getAllCharacters().then((function(t){e.setState({charList:t})}))}},{key:"render",value:function(){var e=this.state.charList;if(!e)return Object(d.jsx)(x,{});var t=this.renderItems(e);return Object(d.jsx)("ul",{className:"item-list list-group",children:t})}}]),r}(n.Component)),S=(r(26),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).gotService=new O,e.state={char:null},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.updateCharacter()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateCharacter()}},{key:"updateCharacter",value:function(){var e=this,t=this.props.charId;t&&this.gotService.getCharacter(t).then((function(t){e.setState({char:t})}))}},{key:"render",value:function(){if(!this.state.char)return Object(d.jsx)("span",{className:"select-error",children:"Please, select a character"});var e=this.state.char,t=e.name,r=e.gender,n=e.born,s=e.died,a=e.culture;return Object(d.jsxs)("div",{className:"person-details rounded",children:[Object(d.jsx)("h4",{children:t}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Gender"}),Object(d.jsx)("span",{children:r})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Born"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Died"}),Object(d.jsx)("span",{children:s})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"term",children:"Culture"}),Object(d.jsx)("span",{children:a})]})]})]})}}]),r}(n.Component)),N=(r(27),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={showRandomChar:!0,selectedChar:130,error:!1},e.toggleRandomChar=function(){e.setState((function(e){return{showRandomChar:!e.showRandomChar}}))},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(i.a)(r,[{key:"render",value:function(){if(this.state.error)return Object(d.jsx)(g,{});var e=this.state.showRandomChar?Object(d.jsx)(C,{}):null;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{children:Object(d.jsx)(b,{})}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(h.a,{children:Object(d.jsxs)(j.a,{lg:{size:5,offset:0},children:[e,Object(d.jsx)("button",{className:"toggle-btn",onClick:this.toggleRandomChar,children:"Toggle random character"})]})}),Object(d.jsxs)(h.a,{children:[Object(d.jsx)(j.a,{md:"6",children:Object(d.jsx)(k,{onCharSelected:this.onCharSelected})}),Object(d.jsx)(j.a,{md:"6",children:Object(d.jsx)(S,{charId:this.state.selectedChar})})]})]})]})}}]),r}(n.Component));r(30),r(31);a.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4ddf89a6.chunk.js.map