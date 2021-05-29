<template>
    <div class="text-5xl ml-3">
        {{ $route.meta.text }}
        <div ref="playvideo"
             class="inline-block">
            <div class="relative">

                <div @mouseenter="mouseoverPlay($event)"
                     class="z-10">

                    <img class="w-80"
                         :class="play ? 'opacity-0': 'opacity-1'"
                         src="img/providers/girl1.jpg"
                         alt="">
                </div>

                <video :muted="!audioOpen"
                       class="absolute top-0 left-0 bg-black h-full"
                       :class="play? 'block':'hidden'"
                       loop
                       id="myVideo">
                    <source :src="require('../assets/video/video1.mp4')"
                            type="video/mp4">
                </video>
            </div>
            <button class="blue-btn mr-3"
                    @click="playVideo()">{{!play ? 'play' : 'pause'}}</button>
            <button class="red-btn"
                    @click="openAudio()">{{!audioOpen ? 'open audio' : 'cancel audio'}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            play: false,
            audioOpen: false
        };
    },
    methods: {
        playVideo() {
            this.play = !this.play;
            if (this.play) {
                this.$refs.playvideo.querySelector("#myVideo").play();
            } else {
                this.$refs.playvideo.querySelector("#myVideo").pause();
            }
        },
        openAudio() {
            this.audioOpen = !this.audioOpen;
        },
        mouseoverPlay($event) {
            // this.$refs.playvideo.addEventListener(
            //     "mouseenter",
            //     function (event) {
            //         this.play = true;
            //         // highlight the mouseenter target
            //         console.log(event.target);
            //          this.$refs.playvideo.querySelector("#myVideo").play();
            //         // reset the color after a short delay
            //         // setTimeout(function () {
            //         //     event.target.pause();
            //         // }, 500);
            //     },
            //     false
            // );
            
            this.play = true;
            this.$refs.playvideo.querySelector("#myVideo").play();
            this.$refs.playvideo.querySelector("#myVideo").addEventListener("mouseleave", (event)=> {
                this.play = false;
              this.$refs.playvideo.querySelector("#myVideo").pause();  
            })
            //  $event.addEventListener(
            //     "mouseleave",
            //     function (event) {
            //         this.play = false;
            //         // highlight the mouseenter target
            //         console.log(event.target.div);
            //         this.$refs.playvideo.querySelector("#myVideo").pause();
            //         // reset the color after a short delay
            //         // setTimeout(function () {
            //         //     event.target.pause();
            //         // }, 500);
            //     },
            //     false
            // );
            // if (val) {
            //
            // } else {
            //     setTimeout(() => {
            //         this.$refs.playvideo.querySelector("#myVideo").pause();
            //     }, 2000);
            // }
        },
        mouseleavePause() {
            this.play = false;
            this.$refs.playvideo.querySelector("#myVideo").pause();
        }
    }
};
</script>