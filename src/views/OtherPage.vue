<template>
    <div class=" ml-3 h-96 mb-96">
        {{ $route.meta.text }}
        <div :ref="'playvideo'"
             class="inline-block">
            <div class="relative">
                <div @mouseenter="mouseoverPlay()"
                     class="z-10 h-full">
                    <img class="w-80 z-10"
                         :class="play ? 'opacity-0': 'opacity-1'"
                         src="img/providers/girl1.jpg"
                         alt="">
                </div>
                <!-- <canvas width="634"
                        height="264"></canvas> -->
                <video :muted="!audioOpen"
                       :autoplay="play"
                       class="absolute top-0 left-0 bg-black h-full"
                       :class="play?'block':'hidden'"
                       loop
                       controls
                       playsinline
                       id="myVideo">
                    <source :src="require('../assets/video/video1.mp4')"
                            type="video/mp4">
                </video>
            </div>
            <button ref="playVideo"
                    class="blue-btn text-sm mr-3"
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
            // 判斷是否播放影片中
            play: false,
            // 判斷是否有開啟聲音
            audioOpen: false,
            // 判斷是否觸發滾動播放影片
            isScroll: false
        };
    },
    methods: {
        // 點擊按鈕播放或關閉
        playVideo() {
            this.play = !this.play;
            if (this.play) {
                this.$refs.playvideo.querySelector("#myVideo").play();
            } else {
                this.$refs.playvideo.querySelector("#myVideo").pause();
            }
        },
        // 判斷是否開啟聲音
        openAudio() {
            this.audioOpen = !this.audioOpen;
        },
        // 滑入時播放影片
        mouseoverPlay($event) {
            this.play = true;
            this.$refs.playvideo.querySelector("#myVideo").play();
            this.$refs.playvideo.querySelector("#myVideo").addEventListener("mouseleave", (event) => {
                this.play = false;
                this.$refs.playvideo.querySelector("#myVideo").pause();
            });
        },
        // 滾動時播放影片
        windoScrollPlay() {
            window.addEventListener("scroll", () => {
                this.isScroll = window.scrollY > this.$refs.playvideo.offsetTop - this.$refs.playvideo.offsetTop / 2;
                if (this.isScroll) {
                    this.play = true;
                    this.$refs.playvideo.querySelector("#myVideo").play();
                } else {
                    this.play = false;
                    this.$refs.playvideo.querySelector("#myVideo").pause();
                }
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            // // 手機版看console用
            // var vConsole = new window.VConsole();
            if (this.isMobile) {
                this.windoScrollPlay();
            }
        });
    }
};
</script>