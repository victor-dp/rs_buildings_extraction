(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},3512:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HomeMap",{staticClass:"homeMap"})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",width:"100%"}},[n("div",{ref:"basicMapbox",style:t.mapSize}),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl tdtIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_uncombine",attrs:{title:"点击切换底图"},on:{click:t.changeRSMap}},[t._v(" "+t._s(t.rsMap)+" ")])]),n("div",{staticClass:"buildIcon"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isShowBUIA,expression:"isShowBUIA"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.isShowBUIA)?t._i(t.isShowBUIA,null)>-1:t.isShowBUIA},on:{change:function(e){var n=t.isShowBUIA,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&(t.isShowBUIA=n.concat([i])):o>-1&&(t.isShowBUIA=n.slice(0,o).concat(n.slice(o+1)))}else t.isShowBUIA=r}}}),n("label",[t._v("天地图建筑物")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl xunlianIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"训练"},on:{click:t.trainBtn}},[t._v(" 训练 ")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl yuceIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"预测"},on:{click:t.predictBtn}},[t._v(" 预测 ")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl qingkongIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash",attrs:{title:"清空"},on:{click:t.clearBtn}},[t._v(" 清空 ")])]),n("div",{staticClass:"msg"},[t._v(t._s(t.msg))]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl logIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_uncombine",attrs:{title:"日志"},on:{click:t.checkLogBtn}},[t._v(" 日志 ")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl logClearIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash",attrs:{title:"清空"},on:{click:t.clearLogBtn}},[t._v(" 清空 ")])])])},s=[],c=(n("4160"),n("a15b"),n("d81d"),n("b680"),n("159b"),n("96cf"),n("89ba")),l=n("e192"),u=n.n(l),d=n("5a74"),p=n.n(d),h=(n("ac6d"),n("b106")),g=n.n(h),m=(n("bdd0"),n("6ee6")),f=n.n(m),b=n("bc3a"),v=n.n(b),w={name:"HelloWorld",props:{mapWidth:{type:String},mapHeight:{type:String}},data:function(){return{draw:null,map:null,feature:null,msg:"请选择左侧相应的工具执行训练或预测！",isShowBUIA:!0,rsMap:"天地图"}},computed:{mapSize:function(){var t={width:this.mapWidth,height:this.mapHeight};return t}},watch:{feature:function(t,e){if("train"!==t)if("predict"!==t)if(t&&t.features&&0!==t.features.length){var n=t.features[0];"train"===e?this.train(n):"predict"===e&&this.predict(n)}else this.msg="图形未绘制成功！";else this.msg="正在绘制待预测的区域";else this.msg="正在绘制待训练的区域"},isShowBUIA:function(t){if(t)this.addBUIA();else{var e={type:"FeatureCollection",features:[]},n=this.map.getSource("tempbuild");n&&n.setData(e)}}},methods:{initMap:function(){var t=this;u.a.accessToken="pk.eyJ1Ijoid3VjYW5nZW8iLCJhIjoiY2oxNGQ1ZDdsMDA0djJxbzdzdGU4NWpqMiJ9.iaTLldYv7GNfxWhN42h__g";var e=new u.a.Map({container:this.$refs.basicMapbox,style:CONFIG.HOST+"/style.json",center:[118.12,24.48],zoom:16}),n=new p.a({defaultLanguage:"zh"});e.addControl(n);var a=new u.a.NavigationControl;e.addControl(a,"top-left");var r=new u.a.ScaleControl({maxWidth:80,unit:"imperial"});e.addControl(r),r.setUnit("metric"),e.addControl(new u.a.FullscreenControl),e.addControl(new u.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}));var i=f.a.modes;i.draw_rectangle=g.a;var o=new f.a({modes:i});e.addControl(o),e.on("draw.create",(function(e){t.feature=e})),this.draw=o,this.map=e;var s=this;this.map.on("moveend",Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.addBUIA();case 1:case"end":return t.stop()}}),t)})))),this.addBUIA()},addBUIA:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.map.getBounds(),n=[e._sw.lng,e._sw.lat,e._ne.lng,e._ne.lat],a=n.join(","),t.next=5,v()({method:"get",url:CONFIG.SERVER+"/v1/geojson",params:{extent:a}});case 5:r=t.sent,i=r.data,r.data&&this.isShowBUIA||(i={type:"FeatureCollection",features:[]}),o=this.map.getSource("tempbuild"),o?o.setData(i):(this.map.addSource("tempbuild",{type:"geojson",data:i}),this.map.addLayer(CONFIG.BUILDING_STYLE));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),trainBtn:function(){this.clearBtn(),this.feature="train",this.draw.changeMode("draw_rectangle")},predictBtn:function(){this.clearBtn(),this.feature="predict",this.draw.changeMode("draw_rectangle")},clearBtn:function(){this.draw.deleteAll()},changeRSMap:function(){if("天地图"===this.rsMap){var t=this.map.getStyle();t.sources["raster-tiles"]=CONFIG.GOOGLE_TILE,this.map.setStyle(t),this.rsMap="谷歌"}else if("谷歌"===this.rsMap){var e=this.map.getStyle();e.sources["raster-tiles"]=CONFIG.TDT_TILE,this.map.setStyle(e),this.rsMap="天地图"}},checkLogBtn:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=CONFIG.SERVER+"/v1/tools/log",window.open(e,"_blank");case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),clearLogBtn:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=CONFIG.SERVER+"/v1/tools/log/clear",t.next=3,v.a.get(e).catch((function(){a.msg="clear log faild!"}));case 3:n=t.sent,n&&n.data&&(this.msg="clear log success");case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),train:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,i,o,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.getExtentStr(e),this.msg=n,a=0,r=setInterval((function(){a+=.1,s.msg="training...,it spends ".concat(a.toFixed(2)," seconds")}),100),t.next=6,v.a.get(CONFIG.SERVER+"/v1/train",{params:{extent:n,map:"tdt"}}).catch((function(t){clearInterval(r),s.msg="training faild, please check log in backend！"+JSON.stringify(t)}));case 6:i=t.sent,r&&clearInterval(r),i&&i.data&&(o=i.data,1===o.code?this.msg="training finished，it spends ".concat(a.toFixed(2)," seconds！"):this.msg=o.msg);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),predict:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,i,o,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.getExtentStr(e),this.msg=n,a=0,r=setInterval((function(){a+=.1,s.msg="predicting，it spends".concat(a.toFixed(2)," seconds！")}),100),t.next=6,v.a.get(CONFIG.SERVER+"/v1/predict",{params:{extent:n,map:"tdt"}}).catch((function(t){clearInterval(r),s.msg="predicting faild, please check log in backend！"+JSON.stringify(t)}));case 6:if(i=t.sent,r&&clearInterval(r),!i||!i.data){t.next=17;break}if(o=i.data,0!==o.code){t.next=15;break}return this.msg=o.msg,t.abrupt("return");case 15:this.msg="predicting finished，it spends".concat(a.toFixed(2)," seconds！"),this.draw.add(o.data);case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getExtentStr:function(t){if(t&&t.geometry&&t.geometry.coordinates&&1==t.geometry.coordinates.length&&5==t.geometry.coordinates[0].length){var e=t.geometry.coordinates[0],n=180,a=180,r=-180,i=-180;e.forEach((function(t){t[0]>r&&(r=t[0]),t[0]<n&&(n=t[0]),t[1]>i&&(i=t[1]),t[1]<a&&(a=t[1])}));var o=[n,a,r,i].join(",");return o}this.msg="绘制的图形不是四边形！"}},mounted:function(){this.initMap()}},x=w,y=(n("d9c3"),n("2877")),_=Object(y["a"])(x,o,s,!1,null,"693ec376",null),I=_.exports,S={name:"app",components:{HomeMap:I}},C=S,O=(n("034f"),Object(y["a"])(C,r,i,!1,null,null,null)),k=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,n){},d9c3:function(t,e,n){"use strict";var a=n("3512"),r=n.n(a);r.a}});
//# sourceMappingURL=app.8bf85688.js.map
