webpackJsonp([0],{"4gDj":function(t,n){},C2Us:function(t,n){},GtRF:function(t,n){t.exports='{"html":"<h1 id=\\"this-is-a-sample-post\\">This is a sample post</h1>\\n<p>This is the post body in <strong>Markdown</strong></p>\\n<h1 id=\\"some-title-here\\">Some title here</h1>\\n<p>I do not know why I want to build this...</p>\\n","meta":{"title":"First post","author":"Harrison","created_at":"2017-12-10","descriptions":"This is a first trial using vue, markdown, yaml","tags":"helloworld, markdown"}}'},I5mP:function(t,n){},JPM5:function(t,n,e){function i(t){return e(r(t))}function r(t){var n=a[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var a={"./0.md":"GtRF"};i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="JPM5"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]},a=e("VU/8")({name:"app"},r,!1,function(t){e("I5mP")},null,null).exports,s=e("/ocq"),o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.authorName))]),t._v(" "),e("span",[t._v(t._s(t.descriptions))]),t._v(" "),e("p"),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1)]),t._v(" "),e("img",{attrs:{src:"https://media.giphy.com/media/EbBSfrxBz4MNO/giphy.gif",alt:""}})])},staticRenderFns:[]},c=e("VU/8")({name:"Landing",data:function(){return{authorName:"Harrison Ng",descriptions:"I make 🐞, and sometimes, I accidentally fix some"}}},o,!1,function(t){e("C2Us")},"data-v-4fe0a2b1",null).exports,u={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("router-link",{attrs:{id:"back",to:"/"}},[t._v("Back")]),t._v(" "),i("img",{attrs:{id:"avatar",src:e("lS+k")}}),t._v(" "),i("h1",[t._v(t._s(t.title))]),t._v(" "),i("span",[t._v(t._s(t.descriptions))]),t._v(" "),i("ul",t._l(t.links,function(n){return i("li",[i("a",{attrs:{href:n.href,id:n.name,target:"blank"}},[t._v(t._s(n.name))])])}))],1)},staticRenderFns:[]},l=e("VU/8")({name:"About",data:function(){return{title:"Entomologist",descriptions:"Specialised in 🐞",links:[{name:"Github",href:"http://github.com/harrisong"},{name:"Linkedin",href:"https://www.linkedin.com/in/harrison-ng-85958542/"}]}}},u,!1,function(t){e("WUGf")},"data-v-529d978e",null).exports,d=function(t){return t.keys().map(t)}(e("JPM5")).map(function(t){return JSON.parse(t)}),p={name:"Blog",data:function(){return{title:"Blog",descriptions:"I hightly doubt I will post any updates here 🌬️",posts:d}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-link",{attrs:{id:"back",to:"/"}},[t._v("Back")]),t._v(" "),e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",[t._v(t._s(t.descriptions))]),t._v(" "),e("ul",{staticClass:"container"},t._l(t.posts,function(n,i){return e("li",{staticClass:"post"},[e("div",{staticClass:"postMeta"},[e("h3",[e("router-link",{attrs:{to:"/blog/"+i}},[t._v(t._s(n.meta.title))])],1),t._v(" "),e("div",{staticClass:"date"},[t._v(t._s(n.meta.created_at))])]),t._v(" "),e("div",{staticClass:"body",domProps:{innerHTML:t._s(n.meta.descriptions)}})])}))],1)},staticRenderFns:[]},v=e("VU/8")(p,m,!1,function(t){e("qMez")},"data-v-1f4447cc",null).exports,h=function(t){return t.keys().map(t)}(e("JPM5")).map(function(t){return JSON.parse(t)}),_={name:"Blog",data:function(){return{}},computed:{content:function(){var t=this.$route.params.id.toString();return h[t].html}}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("router-link",{attrs:{id:"back",to:"/blog"}},[this._v("Back")]),this._v(" "),n("div",{domProps:{innerHTML:this._s(this.content)}})],1)},staticRenderFns:[]},g=e("VU/8")(_,f,!1,function(t){e("4gDj")},"data-v-6a9d04cf",null).exports;i.a.use(s.a);var k=new s.a({routes:[{path:"/",name:"Landing",component:c},{path:"/about",name:"About",component:l},{path:"/blog/:id",component:g},{path:"/blog",name:"Blog",component:v}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:k,template:"<App/>",components:{App:a}})},WUGf:function(t,n){},"lS+k":function(t,n,e){t.exports=e.p+"static/img/avatar.0e02172.jpg"},qMez:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.4398dafc2616b14e7d67.js.map