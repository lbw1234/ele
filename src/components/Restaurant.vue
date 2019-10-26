<template>
    <article class="restaurants">
        <section class="container" v-for="(ele,idx) in list" :key='idx'>
            <div class="shopInfo">
                <img :src="ele.restaurant.image_path" alt="">
                <div class="index_main">
                    <section class="index_line1">
                        <p class="shop_name">
                            <span>品牌</span>
                            <span v-text="ele.restaurant.name"></span>
                        </p>
                    </section>
                    <section class="index_line2">
                        <span>
                            <img src="../assets/images/star.svg" alt="">
                        </span>
                        <span v-text="ele.restaurant.rating"></span>
                        <span>月售</span>
                        <span v-text="ele.restaurant.recent_order_num"></span>
                        <span>单</span>
                    </section>
                    <section class="index_line3">
                        <div class="index_money">
                            <span>￥</span>
                            <span v-text='ele.restaurant.float_minimum_order_amount'></span>
                            <span>起送</span>
                            <span>|</span>
                            <span>配送费￥</span>
                            <span v-text="ele.restaurant.float_delivery_fee"></span>
                        </div>
                        <div class="index_distance">
                            <span v-text="ele.restaurant.distance"></span>
                            <span>m</span>
                            <span>|</span>
                            <span v-text="ele.restaurant.order_lead_time"></span>
                            <span>分钟</span>
                        </div>
                    </section>
                </div>
            </div>
            <div class="activityWrap">
                <section class="index_line4">
                    <div class="tag_line">
                        <span>汉堡薯条</span>
                        <span>品质联盟</span>
                    </div>
                    <div class="index_activitys">
                        <section class="activity_line1">
                            <p class="activity_a">
                                <span v-text="ele.restaurant.activities[0].icon_name"></span>
                                <span v-text="ele.restaurant.activities[0].description"></span>
                            </p>
                            <span>5个活动</span>
                        </section>
                        <p class="activity_line2">
                            <span v-text="ele.restaurant.activities[1].icon_name"></span>
                            <span v-text="ele.restaurant.activities[1].description"></span>
                        </p>
                    </div>
                </section>
            </div>
        </section>
    </article>
</template>

<script>

    import axios from 'axios'

    export default {
        data: function () {
            return {
                list: []
            }
        },
        mounted() {
            this.getRestaurants();
            // this.getSrc();
        },
        methods: {
            // 获取饿了么的餐馆列表
            getRestaurants() {
                var that = this
                let url = 'http://localhost:8080/restapi/shopping/v3/restaurants?latitude=22.625609&longitude=113.837925&offset=0&limit=15&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'
                axios({
                    url: url,
                    method: 'GET'
                }).then(res => {
                    console.log('餐馆列表', res.data.items)
                    that.list = res.data.items
                    console.log(that.list)
                    this.getSrc()
                })
            },
            getSrc: function () {
                console.log(this.list.length)
                // var that=this
                for (let i = 0; i < this.list.length; i++) {
                    let str = this.list[i].restaurant.image_path;
                    console.log(str)
                    this.list[i].restaurant.image_path = "https://cube.elemecdn.com/" + str.substr(0, 1) + "/" + str.substr(1, 2) + "/" + str.substr(3) + "." + str.substr(32) + "?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed";
                    console.log(this.list[i].restaurant.image_path)
                }

            }
        }
    }

</script>

<style>
    .container {
        width: 10rem;
        height: 4.255319rem;
        /* background: turquoise; */
    }

    .shopInfo {
        width: 10rem;
        height: 2.1rem;
        display: flex;
    }

    .shopInfo>img {
        width: 1.7rem;
        height: 1.7rem;
        align-self: center;
        margin-left: 0.3rem;
        border: 1px solid #888;
    }

    .index_main {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .index_line1 {
        display: flex;
        flex-direction: column;
    }

    .shop_name {
        display: flex;
    }

    .shop_name>span:nth-child(1) {
        font-size: .340426rem;
        display: block;
        width: .723404rem;
        height: .446809rem;
        background: #ffea19;
        align-self: center;
        margin-left: 0.2rem;
    }

    .shop_name>span:nth-child(2) {
        font-size: .446809rem;
        font-weight: bold;
        margin-left: 0.2rem;
    }

    .index_line2 {
        display: flex;
        text-align: center;
    }

    .index_line2>span:nth-child(1) {
        display: block;
        width: 1.446809rem;
        height: .255319rem;
        align-self: center;
        margin-left: 0.2rem;
    }

    .index_line2 span {
        font-size: .255319rem;
    }

    .index_line2>span:nth-child(2) {
        margin-left: 0.2rem;
    }

    .index_line2>span:nth-child(3) {
        margin-left: 0.2rem;
    }

    .index_line3 {
        font-size: .255319rem;
        display: flex;
        justify-content: space-between;
    }

    .index_money>span:nth-child(1) {
        margin-left: 0.2rem;
    }

    .index_money>span:nth-child(4) {
        margin-left: 0.1rem;
    }

    .index_money>span:nth-child(5) {
        margin-left: 0.1rem;
    }

    .index_distance>span:nth-child(3) {
        margin-left: 0.1rem;
    }

    .index_distance>span:nth-child(4) {
        margin-left: 0.1rem;
    }


    .activityWrap {
        width: 10rem;
        height: 2.1rem;
        margin-left: 2.32766rem;
        font-size: .255319rem;
    }
    .index_line4{
        display: flex;
        flex-direction: column;
    }

    .tag_line {
        display: flex;
    }

    .tag_line>span {
        display: block;
        width: 1.276596rem;
        height: .340426rem;
        border: .5px solid #ccc;
        text-align: center;
    }

    .index_activitys {
        height: 1.06383rem;
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .activity_a>span:nth-child(1) {
        display: inline-block;
        width: .297872rem;
        height: .297872rem;
        background: #70bc46;
        line-height: .297872rem;
    }

    .activity_a>span:nth-child(2) {
        margin-left: 0.1rem;
    }

    .activity_line1 {
        display: flex;
        justify-content: space-between;
    }

    .activity_line1>span {
        margin-right: 2.6rem;
    }


    .activity_line2>span:nth-child(1) {
        display: inline-block;
        width: .297872rem;
        height: .297872rem;
        background: #f07373;
        line-height: .297872rem;
    }

    .activity_line2>span:nth-child(2) {
        margin-left: 0.1rem;
    }
</style>