(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HomeMap",{staticClass:"homeMap"})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",width:"100%"}},[n("div",{ref:"basicMapbox",style:t.mapSize}),n("div",{staticClass:"buildIcon"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isShowBUIA,expression:"isShowBUIA"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.isShowBUIA)?t._i(t.isShowBUIA,null)>-1:t.isShowBUIA},on:{change:function(e){var n=t.isShowBUIA,r=e.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);r.checked?o<0&&(t.isShowBUIA=n.concat([i])):o>-1&&(t.isShowBUIA=n.slice(0,o).concat(n.slice(o+1)))}else t.isShowBUIA=a}}}),n("label",[t._v("天地图建筑物")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl xunlianIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"训练"},on:{click:t.trainBtn}},[t._v(" 训练 ")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl yuceIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"预测"},on:{click:t.predictBtn}},[t._v(" 预测 ")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl qingkongIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash",attrs:{title:"清空"},on:{click:t.clearBtn}},[t._v(" 清空 ")])]),n("div",{staticClass:"msg"},[t._v(t._s(t.msg))])])},s=[],c=(n("4160"),n("a15b"),n("d81d"),n("159b"),n("96cf"),n("89ba")),u=n("e192"),l=n.n(u),d=n("5a74"),p=n.n(d),h=(n("ac6d"),n("b106")),f=n.n(h),m=(n("bdd0"),n("6ee6")),g=n.n(m),b=n("bc3a"),v=n.n(b),w={name:"HelloWorld",props:{mapWidth:{type:String},mapHeight:{type:String}},data:function(){return{draw:null,map:null,feature:null,msg:"请选择左侧相应的工具执行训练或预测！",isShowBUIA:!0}},computed:{mapSize:function(){var t={width:this.mapWidth,height:this.mapHeight};return t}},watch:{feature:function(t,e){if("train"!==t)if("predict"!==t)if(t&&t.features&&0!==t.features.length){var n=t.features[0];"train"===e?this.train(n):"predict"===e&&this.predict(n)}else this.msg="图形未绘制成功！";else this.msg="正在绘制待预测的区域";else this.msg="正在绘制待训练的区域"},isShowBUIA:function(t){if(t)this.addBUIA();else{var e={type:"FeatureCollection",features:[]},n=this.map.getSource("tempbuild");n&&n.setData(e)}}},methods:{initMap:function(){var t=this;l.a.accessToken="pk.eyJ1Ijoid3VjYW5nZW8iLCJhIjoiY2oxNGQ1ZDdsMDA0djJxbzdzdGU4NWpqMiJ9.iaTLldYv7GNfxWhN42h__g";var e=new l.a.Map({container:this.$refs.basicMapbox,style:CONFIG.HOST+"/style.json",center:[116.295,39.945],zoom:16}),n=new p.a({defaultLanguage:"zh"});e.addControl(n);var r=new l.a.NavigationControl;e.addControl(r,"top-left");var a=new l.a.ScaleControl({maxWidth:80,unit:"imperial"});e.addControl(a),a.setUnit("metric"),e.addControl(new l.a.FullscreenControl),e.addControl(new l.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}));var i=g.a.modes;i.draw_rectangle=f.a;var o=new g.a({modes:i});e.addControl(o),e.on("draw.create",(function(e){t.feature=e})),this.draw=o,this.map=e;var s=this;this.map.on("moveend",Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.addBUIA();case 1:case"end":return t.stop()}}),t)})))),this.addBUIA()},addBUIA:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.map.getBounds(),n=[e._sw.lng,e._sw.lat,e._ne.lng,e._ne.lat],r=n.join(","),t.next=5,v()({method:"get",url:CONFIG.SERVER+"/v1/geojson",params:{extent:r}});case 5:a=t.sent,i=a.data,a.data&&this.isShowBUIA||(i={type:"FeatureCollection",features:[]}),o=this.map.getSource("tempbuild"),o?o.setData(i):(this.map.addSource("tempbuild",{type:"geojson",data:i}),this.map.addLayer(CONFIG.BUILDING_STYLE));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),trainBtn:function(){this.clearBtn(),this.feature="train",this.draw.changeMode("draw_rectangle")},predictBtn:function(){this.clearBtn(),this.feature="predict",this.draw.changeMode("draw_rectangle")},clearBtn:function(){this.draw.deleteAll()},train:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.getExtentStr(e),this.msg=n,t.next=4,v()({method:"get",url:CONFIG.HOST+"/v1/train",params:{extent:n,map:"tdt"}});case 4:this.msg="正在训练中，请再系统后台查看进度...";case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),predict:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.getExtentStr(e),this.msg=n,this.msg="正在预测中，请稍后...",t.next=5,v()({method:"get",url:CONFIG.HOST+"/v1/predict",params:{extent:n,map:"tdt"}});case 5:if(r=t.sent,200==r.status&&r.data){t.next=9;break}return this.msg="预测失败！，status code:"+r.status,t.abrupt("return");case 9:if(a=r.data,0!==a.code){t.next=13;break}return this.msg=a.msg,t.abrupt("return");case 13:this.draw.add(a.data);case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getExtentStr:function(t){if(t&&t.geometry&&t.geometry.coordinates&&1==t.geometry.coordinates.length&&5==t.geometry.coordinates[0].length){var e=t.geometry.coordinates[0],n=180,r=180,a=-180,i=-180;e.forEach((function(t){t[0]>a&&(a=t[0]),t[0]<n&&(n=t[0]),t[1]>i&&(i=t[1]),t[1]<r&&(r=t[1])}));var o=[n,r,a,i].join(",");return o}this.msg="绘制的图形不是四边形！"}},mounted:function(){this.initMap()}},x=w,y=(n("63ff"),n("2877")),S=Object(y["a"])(x,o,s,!1,null,"e8bccd52",null),_=S.exports,I={name:"app",components:{HomeMap:_}},C=I,B=(n("034f"),Object(y["a"])(C,a,i,!1,null,null,null)),O=B.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"63ff":function(t,e,n){"use strict";var r=n("a489"),a=n.n(r);a.a},"85ec":function(t,e,n){},a489:function(t,e,n){}});
//# sourceMappingURL=app.afe8f27a.js.map