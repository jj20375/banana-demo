(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5ae68e"],{4520:function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("div",{staticClass:" ml-3 h-96 mb-96"},[e._v(" "+e._s(e.$route.meta.text)+" "),i("div",{ref:"playvideo",staticClass:"inline-block"},[i("div",{staticClass:"relative"},[i("div",{staticClass:"z-10",on:{mouseenter:function(o){return e.mouseoverPlay(o)}}},[i("img",{staticClass:"w-80",class:e.play?"opacity-0":"opacity-1",attrs:{src:"img/providers/girl1.jpg",alt:""}})]),i("video",{staticClass:"absolute top-0 left-0 bg-black h-full",class:e.play?"block":"hidden",attrs:{loop:"",id:"myVideo"},domProps:{muted:!e.audioOpen}},[i("source",{attrs:{src:t("84c6"),type:"video/mp4"}})])]),i("button",{staticClass:"blue-btn text-sm mr-3",on:{click:function(o){return e.playVideo()}}},[e._v(e._s(e.play?"pause":"play"))]),i("button",{staticClass:"red-btn",on:{click:function(o){return e.openAudio()}}},[e._v(e._s(e.audioOpen?"cancel audio":"open audio"))])])])},s=[],a={data:function(){return{play:!1,audioOpen:!1,isScroll:!1}},methods:{playVideo:function(){this.play=!this.play,this.play?this.$refs.playvideo.querySelector("#myVideo").play():this.$refs.playvideo.querySelector("#myVideo").pause()},openAudio:function(){this.audioOpen=!this.audioOpen},mouseoverPlay:function(e){var o=this;this.play=!0,this.$refs.playvideo.querySelector("#myVideo").play(),this.$refs.playvideo.querySelector("#myVideo").addEventListener("mouseleave",(function(e){o.play=!1,o.$refs.playvideo.querySelector("#myVideo").pause()}))},mouseleavePause:function(){this.play=!1,this.$refs.playvideo.querySelector("#myVideo").pause()}},mounted:function(){var e=this;this.$nextTick((function(){new window.VConsole;window.addEventListener("scroll",(function(){e.isScroll=window.scrollY>e.$refs.playvideo.offsetTop,e.isScroll?(e.play=!0,e.$refs.playvideo.querySelector("#myVideo").play(),console.log("is play now")):(e.play=!1,e.$refs.playvideo.querySelector("#myVideo").pause(),console.log("is pause now"))}))}))}},l=a,n=t("2877"),r=Object(n["a"])(l,i,s,!1,null,null,null);o["default"]=r.exports},"84c6":function(e,o,t){e.exports=t.p+"static/media/video1.8316a96b.mp4"}}]);
//# sourceMappingURL=chunk-2c5ae68e.337a54f0.js.map