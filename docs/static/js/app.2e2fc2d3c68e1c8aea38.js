webpackJsonp([1],{"+Gxq":function(t,n,r){"use strict";var e=r("fnDg").a,i=r("VU/8")(e,null,!1,function(t){r("4veK")},null,null);n.a=i.exports},"30nN":function(t,n){},"4veK":function(t,n){},"9M+g":function(t,n){},"HUt/":function(t,n,r){"use strict";var e=r("qRo1").a,i=r("VU/8")(e,null,!1,function(t){r("n9mN")},null,null);n.a=i.exports},JCpY:function(t,n,r){"use strict";var e=r("rKsW").a,i=r("VU/8")(e,null,!1,function(t){r("xBwK")},null,null);n.a=i.exports},JDVb:function(t,n,r){"use strict";var e=r("9NuQ").a,i=r("VU/8")(e,null,!1,function(t){r("Y9O/")},null,null);n.a=i.exports},Jmt5:function(t,n){},Li6z:function(t,n){},NHnr:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r("7+uW"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]},a=r("VU/8")({name:"app"},i,!1,function(t){r("Li6z")},null,null).exports,o=r("/ocq"),s=r("lHA8"),u=r.n(s),c=r("mvHQ"),l=r.n(c),d=r("QT2L"),f={data:function(){var t=new Date;return{msg:"hello",dotsVertical:8,dotsHorizontal:28,startingPoint:{x:0,y:0},top:!1,colours:[0],year:t.getFullYear(),month:t.getMonth()+1}},computed:{gridWidth:function(){return this.dotsHorizontal-1},gridHeight:function(){return 8},grid:function(){return this.initGrid(this.gridHeight,this.gridWidth)},squareSize:function(){return this.canvasWidth/(this.dotsHorizontal+1)},canvasWidth:function(){return document.documentElement.clientWidth},canvasHeight:function(){return this.squareSize*(this.dotsVertical+1)},numDays:function(){return new Date(this.year,this.month,0).getDate()}},mixins:[r.n(d).a],methods:{findStartingPoint:function(t){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(0==t[n][r])return{x:r,y:n}},shapeFitsGrid:function(t,n){for(var r=0;r<t.length;r++){var e=t[r];if(!n[this.startingPoint.y+e[1]])return!1;if(0!=n[this.startingPoint.y+e[1]][this.startingPoint.x+e[0]])return!1}return!0},emptyGrid:function(t,n){for(var r=[],e=0;e<t;e++){r[e]=[];for(var i=0;i<n;i++)r[e][i]=0}return r},tempGrid:function(t,n,r){var e=this,i=this.clone(t);return n.forEach(function(t){i[e.startingPoint.y+t[1]][e.startingPoint.x+t[0]]=r}),i},initGrid:function(t,n){for(var r=this.emptyGrid(t,n),e=1;e<=this.numDays;e++){this.startingPoint=this.findStartingPoint(r),this.colours[e]=this.getRandomColor();for(var i=0,a=!1;!a&&i<500;){i++;var o=this.randomShape(),s=this.clone(this.startingPoint);if(this.shapeFitsGrid(o,r)||(this.startingPoint.x--,this.shapeFitsGrid(o,r))){var u=this.tempGrid(r,o,e);this.checkValidPlacement(u)&&(r=u,a=!0),this.startingPoint=s}else this.startingPoint=s}}return r},clone:function(t){return JSON.parse(l()(t))},getRandomColor:function(){var t=Math.round,n=Math.random;return"rgba("+t(255*n())+","+t(255*n())+","+t(255*n())+",0.5)"},checkValidPlacement:function(t){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++){if(!(0!=t[n][r]||void 0!=t[n-1]&&0==t[n-1][r]||void 0!=t[n]&&0==t[n][r-1]||void 0!=t[n]&&0==t[n][r+1]||void 0!=t[n+1]&&0==t[n+1][r]))return!1;if(!(!(r<t[n].length-1&&0==t[n][r]&&0==t[n][r+1])||void 0!=t[n-1]&&0==t[n-1][r]||void 0!=t[n-1]&&0==t[n-1][r+1]||void 0!=t[n]&&0==t[n][r-1]||void 0!=t[n]&&0==t[n][r+2]||void 0!=t[n+1]&&0==t[n+1][r]||void 0!=t[n+1]&&0==t[n+1][r+1]))return!1;if(!(!(n<t.length-1&&0==t[n][r]&&0==t[n+1][r])||void 0!=t[n-1]&&0==t[n-1][r]||void 0!=t[n+2]&&0==t[n+2][r]||void 0!=t[n]&&0==t[n][r-1]||void 0!=t[n]&&0==t[n][r+1]||void 0!=t[n+1]&&0==t[n+1][r-1]||void 0!=t[n+1]&&0==t[n+1][r+1]))return!1}return!0}},directives:{draw:function(t,n,r){var e=r.context,i=t.getContext("2d");i.clearRect(0,0,e.canvasWidth,e.canvasHeight),i.fillStyle="grey";for(var a=0;a<e.dotsHorizontal;a++){i.beginPath();for(var o=(a+1)*e.squareSize,s=0;s<e.dotsVertical;s++){var c=(s+1)*e.squareSize;i.arc(o,c,.5,0,2*Math.PI,!0)}i.fill()}i.strokeStyle="black",i.textBaseline="top";for(var l=new u.a,d=0;d<e.grid.length;d++){c=e.top?(d+1)*e.squareSize:e.canvasHeight-(d+2)*e.squareSize;for(var f=0;f<e.grid[d].length;f++){o=(f+1)*e.squareSize;var h=e.grid[d][f];0!=e.grid[d][f]&&(i.fillStyle=e.colours[h],i.beginPath(),i.rect(o,c,e.squareSize,e.squareSize),i.fill(),l.has(h)||(i.font=3*e.squareSize/5+"px Georgia",i.fillText(h,o+4,c),l.add(h)))}}}}},h={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"hello"},[r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{variant:"info",type:"dark"}},[r("b-navbar-brand",{attrs:{href:"#"}},[t._v("BujoTetris")])],1),t._v(" "),r("canvas",{directives:[{name:"draw",rawName:"v-draw",value:t.msg,expression:"msg"}],attrs:{id:"canvas",width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("b-form",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"dotsInputGroup",label:"Horizontal dots in journal:","label-for":"dotsInput"}},[r("b-form-select",{staticClass:"mb-3",attrs:{id:"dotsInput"},model:{value:t.dotsHorizontal,callback:function(n){t.dotsHorizontal=t._n(n)},expression:"dotsHorizontal"}},t._l(35,function(n){return r("option",{style:{display:n>=25?"list-style":"none"},domProps:{value:n}},[t._v("\n                                            "+t._s(n)+"\n                                        ")])}))],1)],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{label:"Orientation:","label-for":"orientationInput"}},[r("b-form-radio-group",{attrs:{id:"orientationInput",options:[{text:"Top",value:!0},{text:"Bottom",value:!1}],name:"radiosMd"},model:{value:t.top,callback:function(n){t.top=n},expression:"top"}})],1)],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"monthInputGroup",label:"Month: "+t.numDays+" days","label-for":"monthInput"}},[r("b-form-select",{staticClass:"mb-3",attrs:{id:"monthInput"},model:{value:t.month,callback:function(n){t.month=t._n(n)},expression:"month"}},t._l(12,function(n){return r("option",{domProps:{value:n}},[t._v(t._s(n))])}))],1)],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"yearInputGroup",label:"Year:","label-for":"yearInput"}},[r("b-form-select",{staticClass:"mb-3",attrs:{id:"yearInput"},model:{value:t.year,callback:function(n){t.year=t._n(n)},expression:"year"}},t._l(4,function(n){return r("option",[t._v(t._s(t.year+n-2))])}))],1)],1)])])],1)])])],1)])},staticRenderFns:[]},v=r("VU/8")(f,h,!1,function(t){r("30nN")},"data-v-d9e3082a",null).exports;e.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"HelloWorld",component:v}]}),m=(r("Jmt5"),r("9M+g"),r("e6fC"));e.a.use(m.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:p,template:"<App/>",components:{App:a}})},QT2L:function(t,n){t.exports={methods:{square:function(t){switch(t){case 0:case 180:case 90:case 270:return[[0,0],[1,0],[0,1],[1,1]]}},l:function(t){switch(t){case 0:return[[0,0],[0,1],[0,2],[1,2]];case 90:return[[0,0],[1,0],[2,0],[0,1]];case 180:return[[0,0],[1,0],[1,1],[1,2]];case 270:return[[0,1],[1,1],[2,1],[2,0]]}},line:function(t){switch(t){case 0:return[[0,0],[0,1],[0,2],[0,3]];case 90:return[[0,0],[1,0],[2,0],[3,0]];case 180:return[[0,0],[0,1],[0,2],[0,3]];case 270:return[[0,0],[1,0],[2,0],[3,0]]}},j:function(t){switch(t){case 0:return[[1,0],[1,1],[1,2],[0,2]];case 90:return[[2,1],[1,1],[0,1],[0,0]];case 180:return[[0,2],[0,1],[0,0],[1,0]];case 270:return[[0,0],[1,0],[2,0],[2,1]]}},s:function(t){switch(t){case 0:return[[0,0],[0,1],[1,1],[1,2]];case 90:return[[2,0],[1,0],[1,1],[0,1]];case 180:return[[0,0],[0,1],[1,1],[1,2]];case 270:return[[2,0],[1,0],[1,1],[0,1]]}},t:function(t){switch(t){case 0:return[[1,0],[0,1],[1,1],[2,1]];case 90:return[[1,1],[0,0],[0,1],[0,2]];case 180:return[[1,1],[0,0],[1,0],[2,0]];case 270:return[[0,1],[1,0],[1,1],[1,2]]}},z:function(t){switch(t){case 0:return[[0,0],[1,0],[1,1],[2,1]];case 90:return[[1,0],[1,1],[0,1],[0,2]];case 180:return[[0,0],[1,0],[1,1],[2,1]];case 270:return[[1,0],[1,1],[0,1],[0,2]]}},randomShape:function(){var t=this.getRandomInt(1,8),n=this.getRandomInt(0,4),r=[0,90,180,270];switch(t){case 1:return this.square(r[n]);case 2:return this.l(r[n]);case 3:return this.line(r[n]);case 4:return this.j(r[n]);case 5:return this.s(r[n]);case 6:return this.t(r[n]);case 7:return this.z(r[n])}},getRandomInt:function(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t))+t}}}},"Y9O/":function(t,n){},dW2o:function(t,n){},n9mN:function(t,n){},r15W:function(t,n,r){"use strict";var e=r("E9Zr").a,i=r("VU/8")(e,null,!1,function(t){r("dW2o")},null,null);n.a=i.exports},xBwK:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.2e2fc2d3c68e1c8aea38.js.map