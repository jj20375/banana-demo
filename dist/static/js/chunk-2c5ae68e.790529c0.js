(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5ae68e"],{4520:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-5xl ml-3"},[e._v(" "+e._s(e.$route.meta.text)+" "),a("div",{ref:"playvideo",staticClass:"inline-block"},[a("div",{staticClass:"relative"},[a("div",{staticClass:"z-10",on:{mouseenter:function(t){return e.mouseoverPlay(t)}}},[a("img",{staticClass:"w-80",class:e.play?"opacity-0":"opacity-1",attrs:{src:"img/providers/girl1.jpg",alt:""}})]),a("video",{staticClass:"absolute top-0 left-0 bg-black h-full",class:e.play?"block":"hidden",attrs:{loop:"",id:"myVideo"},domProps:{muted:!e.audioOpen}},[a("source",{attrs:{src:i("84c6"),type:"video/mp4"}})])]),a("button",{staticClass:"blue-btn mr-3",on:{click:function(t){return e.playVideo()}}},[e._v(e._s(e.play?"pause":"play"))]),a("button",{staticClass:"red-btn",on:{click:function(t){return e.openAudio()}}},[e._v(e._s(e.audioOpen?"cancel audio":"open audio"))])])])},o=[],s={data:function(){return{play:!1,audioOpen:!1}},methods:{playVideo:function(){this.play=!this.play,this.play?this.$refs.playvideo.querySelector("#myVideo").play():this.$refs.playvideo.querySelector("#myVideo").pause()},openAudio:function(){this.audioOpen=!this.audioOpen},mouseoverPlay:function(e){var t=this;this.play=!0,this.$refs.playvideo.querySelector("#myVideo").play(),this.$refs.playvideo.querySelector("#myVideo").addEventListener("mouseleave",(function(e){t.play=!1,t.$refs.playvideo.querySelector("#myVideo").pause()}))},mouseleavePause:function(){this.play=!1,this.$refs.playvideo.querySelector("#myVideo").pause()}}},l=s,n=i("2877"),u=Object(n["a"])(l,a,o,!1,null,null,null);t["default"]=u.exports},"84c6":function(e,t,i){e.exports=i.p+"static/media/video1.8316a96b.mp4"}}]);
//# sourceMappingURL=chunk-2c5ae68e.790529c0.js.map