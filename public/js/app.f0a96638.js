(function(t){function e(e){for(var i,o,a=e[0],c=e[1],u=e[2],d=0,p=[];d<a.length;d++)o=a[d],s[o]&&p.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"24b9":function(t,e,n){},"53f8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("notifications",{attrs:{group:"notifications",position:"top left"}}),n("VueLoading",{attrs:{active:t.visible,"can-cancel":!0,"is-full-page":!0,loader:"dots"},on:{"update:active":function(e){t.visible=e}}}),n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Classifica")]),n("router-link",{attrs:{to:"/points"}},[t._v("Points")])],1),n("router-view")],1)},r=[],o=n("faa1"),a=new o["EventEmitter"],c=n("9062"),u=n.n(c),l={name:"app",components:{VueLoading:u.a},data:function(){return{}},created:function(){a.on("notify-error-rest",this.notifyErrorRestHandler)},methods:{notifyErrorRestHandler:function(t){this.$notify(t)}},computed:{visible:function(){return this.$store.getters.getVisible}}},d=l,p=(n("dda2"),n("2877")),f=Object(p["a"])(d,s,r,!1,null,null,null),m=f.exports,v=n("9f7b"),h=n.n(v),g=n("7bb1"),b=n("ee98"),E=n.n(b),_=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"holder"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addItem(e)}}},[n("transition",{attrs:{name:"alert-in","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"}},[t.errors.has("skill")?n("p",{staticClass:"alert"},[t._v(t._s(t.errors.first("skill")))]):t._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.skill,expression:"skill"},{name:"validate",rawName:"v-validate",value:"min:5",expression:"'min:5'"}],attrs:{type:"text",placeholder:"Enter an user name here...",name:"skill"},domProps:{value:t.skill},on:{input:function(e){e.target.composing||(t.skill=e.target.value)}}})],1),n("ul",[n("transition-group",{attrs:{name:"list","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},t._l(t.orderedUsers,function(e,i){return n("li",{key:i},[e.isEditing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}):n("span",[t._v(t._s(i+1)+" . "+t._s(e.name)+" : "+t._s(e.points))]),n("button",{staticClass:"btn",on:{click:function(n){return t.deleteItem(e.id)}}},[t._v(" Delete ")]),e.isEditing?n("button",{staticClass:"btn",on:{click:function(n){return t.renameItem(e)}}},[t._v(" Update ")]):n("button",{staticClass:"btn",on:{click:function(n){return t.editItem(e)}}},[t._v(" Rename ")])])}),0)],1),!t.users.users.length>0?n("p",[t._v("Add some users. :(")]):t._e()])])},y=[],w=(n("55dd"),n("cebc")),j=n("2f62"),k={name:"Skills",data:function(){return{skill:""}},computed:Object(w["a"])({},Object(j["b"])(["users"]),{orderedUsers:function(){return this.users.users.sort(function(t,e){return t.points<=e.points})}}),mounted:function(){this.$store.dispatch("getUsers")},methods:{deleteItem:function(t){this.$store.dispatch("deleteUser",t)},editItem:function(t){t.isEditing=!0},renameItem:function(t){this.$store.dispatch("updateUser",t)},addItem:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$store.dispatch("addUser",t.skill):t.$notify({group:"notifications",title:"Warning",text:"Not valid input",type:"warn"})})}}},U=k,x=(n("e7ad"),Object(p["a"])(U,O,y,!1,null,"b3bfc6cc",null)),$=x.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("b-form-select",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},t._l(t.users.users,function(e,i){return n("option",{key:"names"+i,domProps:{value:e.name}},[t._v(t._s(e.name))])}),0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.points,expression:"points"}],attrs:{type:"number",placeholder:"Points"},domProps:{value:t.points},on:{input:function(e){e.target.composing||(t.points=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("button",{staticClass:"btn",on:{click:t.sendTransition}},[t._v(" SEND ")])],1),n("ul",[n("transition-group",{attrs:{name:"list","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},t._l(t.transictions.transictions,function(e,i){return n("li",{key:"transaction"+i},[n("span",[t._v(t._s(e.name)+" - "+t._s(e.description)+" : "+t._s(e.points))])])}),0)],1)])},P=[],I=(n("7f7f"),{name:"Points",data:function(){return{description:"",points:"",name:""}},computed:Object(w["a"])({},Object(j["b"])(["transictions","users"])),mounted:function(){this.$store.dispatch("getUsers"),this.$store.dispatch("getTransictions")},methods:{sendTransition:function(){this.$store.dispatch("addTransiction",{name:this.name,description:this.description,points:this.points}),this.$store.dispatch("getTransictions")}}}),S=I,C=(n("8336"),Object(p["a"])(S,T,P,!1,null,"12ec8706",null)),R=C.exports;i["default"].use(_["a"]);var D=new _["a"]({routes:[{path:"/",name:"skills",component:$},{path:"/points",name:"points",component:R}]}),N=(n("ac6a"),n("795b")),L=n.n(N),A=n("d225"),M=n("bd86"),V=function t(){Object(A["a"])(this,t)};Object(M["a"])(V,"BASEURL","https://test-rest-api-mdinocera.herokuapp.com/api/");var B=n("bc3a"),H=n.n(B),J=n("a7fe"),X=n.n(J);i["default"].use(X.a,H.a);var W=H.a.create({baseURL:V.BASEURL});W.interceptors.response.use(function(t){return t},function(t){return a.emit("notify-error-rest",{group:"notifications",title:void 0!=t.response?"CODE:"+t.response.statusText+" - "+t.response.statusText:"ERROR",text:void 0!=t.response?t.response.data.message:t.message+" for rest call at url: "+(void 0!=t.response?t.response.config.url:t.config.url),type:"error"}),L.a.reject(t)});var q=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(A["a"])(this,t),Object(M["a"])(this,"name",""),Object(M["a"])(this,"id",0),Object(M["a"])(this,"points",0),Object(M["a"])(this,"isEditing",!1),this.name=e.name?e.name:"",this.id=e.id?e.id:0,this.points=e.points?e.points:0},z={state:{users:[]},getters:{getUsers:function(t){return t.users}},mutations:{setUsers:function(t,e){return t.users=e}},actions:{getUsers:function(t){t.commit("loadingEvent",!0),W.get("users").then(function(e){var n=[];e.data.forEach(function(t){return n.push(new q(t))}),t.commit("setUsers",n)}).then(function(){return t.commit("loadingEvent",!1)})},deleteUser:function(t,e){t.commit("loadingEvent",!0),W.delete("user/"+e).then(function(e){var n=[];e.data.forEach(function(t){return n.push(new q(t))}),t.commit("setUsers",n)}).then(function(){return t.commit("loadingEvent",!1)})},updateUser:function(t,e){t.commit("loadingEvent",!0),W.put("user/"+e.id,{name:e.name}).then(function(e){var n=[];e.data.forEach(function(t){return n.push(new q(t))}),t.commit("setUsers",n)}).then(function(){return t.commit("loadingEvent",!1)})},addUser:function(t,e){t.commit("loadingEvent",!0),W.post("user",{name:e}).then(function(e){var n=[];e.data.forEach(function(t){return n.push(new q(t))}),t.commit("setUsers",n)}).then(function(){return t.commit("loadingEvent",!1)})}}},F=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(A["a"])(this,t),Object(M["a"])(this,"name",""),Object(M["a"])(this,"points",0),Object(M["a"])(this,"description",""),this.name=e.name?e.name:"",this.description=e.description?e.description:"",this.points=e.points?e.points:0},G={state:{transictions:[]},getters:{getTransictions:function(t){return t.transictions}},mutations:{setTransictions:function(t,e){return t.transictions=e}},actions:{getTransictions:function(t){t.commit("loadingEvent",!0),W.get("transitions").then(function(e){var n=[];e.data.forEach(function(t){return n.push(new F(t))}),t.commit("setTransictions",n)}).then(function(){return t.commit("loadingEvent",!1)})},addTransiction:function(t,e){t.commit("loadingEvent",!0),W.post("user/points",e).then(function(e){var n=[];e.data.forEach(function(t){return n.push(new F(t))}),t.dispatch("getTransictions")}).then(function(){return t.commit("loadingEvent",!1)})}}};i["default"].use(j["a"]);var K=new j["a"].Store({state:{visible:!1},getters:{getVisible:function(t){return t.visible}},actions:{loadingEvent:function(t,e){return t.commit("loadingEvent",e)}},mutations:{loadingEvent:function(t,e){return t.visible=e}},modules:{users:z,transictions:G}});n("f9e3"),n("2dd8");i["default"].use(h.a),i["default"].use(g["a"]),i["default"].use(E.a),i["default"].config.productionTip=!1,new i["default"]({router:D,store:K,render:function(t){return t(m)}}).$mount("#app")},7059:function(t,e,n){},8336:function(t,e,n){"use strict";var i=n("7059"),s=n.n(i);s.a},dda2:function(t,e,n){"use strict";var i=n("53f8"),s=n.n(i);s.a},e7ad:function(t,e,n){"use strict";var i=n("24b9"),s=n.n(i);s.a}});
//# sourceMappingURL=app.f0a96638.js.map