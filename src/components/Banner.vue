<template>
    <div id="banner">
        <div class="swiper-container">
            <!-- 轮播图片区域 -->
            <div class="swiper-wrapper">
                <!-- 图片插槽 -->
                <div class="swiper-slide">
                    <div class="slide_one">
                        <div class="pic-box" v-for="(ele,idx) in list" :key="idx">
                            <img class="pic" :src="ele.img_src" alt="">
                            <span class="text" v-text="ele.title"></span>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide_two">
                        <div class="pic-box" v-for="(ele,idx) in list" :key="idx">
                            <img class="pic" :src="ele.img_src" alt="">
                            <span class="text" v-text="ele.title"></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

        </div>
    </div>

</template>

<script>
    // 引入外部swiper的css和js文件.
    import Swiper from "../../node_modules/swiper/js/swiper.min.js";
    import "../../node_modules/swiper/css/swiper.min.css";
    export default {
        // 生命周期函数:当页面挂载完成后执行.
        mounted: function () {
            this.mySwiper();
        },
        data: function () {
            return {
                list: [{
                        "img_src": "https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "美食"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "大牌惠吃"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "商超便利"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "水果"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "医药健康"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "浪漫鲜花"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "跑腿代购"
                    }, {
                        "img_src": "https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "汉堡披萨"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "厨房生鲜"
                    },
                    {
                        "img_src": "https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",
                        title: "甜品饮品"
                    }
                ]
            }
        },
        methods: {
            // 初始化Swipe
            mySwiper: function () {
                new Swiper('.swiper-container', {
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 10rem;
        height: 4.72rem;
    }

    .swiper-slide {
        width: 10rem;
        height: 4.72rem;
    }

    .slide_one {
        width: 10rem;
        height: 4.72rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .slide_two {
        width: 10rem;
        height: 4.72rem;
        display: flex;
        flex-wrap: wrap;
    }

    .pic-box {
        width: 2rem;
        height: 1.706667rem;
        margin-top: .293333rem;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pic-box .pic {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
    }

    .pic-box .text {
        font-size: 12px;
        color: gray;
    }
</style>