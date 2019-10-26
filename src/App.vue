<template>
  <div id="app" class="app">
    <div class="header">
      <div class="header_top">
        <span></span>
        <span>深圳西部硅谷</span>
        <span></span>
      </div>
      <div class="header_bot">
        <input type="text" placeholder="搜索饿了么商家、商品名称">
      </div>
    </div>
    <div class="content">
      <div class="banner">
        <Banner></Banner>
      </div>
      <div class="advert">
        <div class="advert_left">
          <span>品质套餐</span>
          <span>搭配齐全吃得好</span>
          <span>
            <a href="https://h5.ele.me/ranking/#type=quality_meal&activity_id=1&title=%E5%93%81%E8%B4%A8%E5%A5%97%E9%A4%90&navType=0&geohash=ws0bwqynr90x&spm=a2ogi.13147251.03.0">立即抢购 ></a>
          </span>
        </div>
        <img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
          alt="tupian" class="advert_img">
      </div>
      <div class="recommend">
        <div class="recommend_con">
          <span>—</span>
          <span>推荐商家</span>
          <span>—</span>
        </div>
      </div>
      <div class="screen">
        <div class="screen_one">
          <span>综合排序</span>
          <span></span>
        </div>
        <div class="screen_two">
          <span>距离最近</span>
        </div>
        <div class="screen_three">
          <span>品质联盟</span>
        </div>
        <div class="screen_four">
          <span>筛选</span>
          <span></span>
        </div>
      </div>
      <div class="shopList">
        <Restaurant></Restaurant>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom_main">
        <span>
          <img src="./assets/images/main2.png" alt="">
        </span>
        <span>首页</span>
      </div>
      <div class="bottom_find">
        <span>
          <img src="./assets/images/find1.png" alt="">
        </span>
        <span>发现</span>
      </div>
      <div class="bottom_menu">
        <span>
          <img src="./assets/images/menu1.png" alt="">
        </span>
        <span>订单</span>
      </div>
      <div class="bottom_self">
        <span>
          <img src="./assets/images/self1.png" alt="">
        </span>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Restaurant from './components/Restaurant.vue'
  import Banner from './components/Banner.vue'

  export default {
    name: 'app',
    components: {
      Restaurant,
      Banner
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
  }

  .app {
    width: 10rem;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }

  .header {
    width: 10rem;
    height: 2.56rem;
    background: #2782f9;
  }

  .header_top {
    width: 10rem;
    height: 1.28rem;
    margin-left: 0.4rem;
  }

  .header_top>span:nth-child(1) {
    float: left;
    display: inline-block;
    width: 0.6rem;
    height: 1.28rem;
    line-height: 1.28rem;
    background: url("./assets/images/address.png") no-repeat;
    background-position-y: 0.36rem;
  }

  .header_top>span:nth-child(2) {
    float: left;
    display: inline-block;
    font-size: 0.4rem;
    font-weight: bold;
    color: #fff;
    line-height: 1.28rem;
  }

  .header_top>span:nth-child(3) {
    float: left;
    display: inline-block;
    width: 0.6rem;
    height: 1.28rem;
    line-height: 1.28rem;
    background: url("./assets/images/pull.png") no-repeat;
    background-position: 0.1rem 0.4rem;
  }

  .header_bot {
    width: 10rem;
    height: 1.28rem;
  }

  .header_bot>input {
    display: block;
    margin-left: 0.4rem;
    width: 9.2rem;
    height: 1rem;
    text-align: center;
    border: none;
    background: #fff url("./assets/images/search.png") no-repeat;
    background-position: 1.8rem 0.22rem
  }

  .content {
    width: 10rem;
    flex: 1;
    margin-bottom: 1.319149rem;
    overflow: auto;
  }

  .content .banner {
    width: 10rem;
    height: 4.7rem;
  }




  .content .advert {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 9.2rem;
    height: 2.9rem;
    background: #f6f6f6;
  }

  .advert_left {
    width: 5rem;
    height: 2rem;
    align-self: center;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .advert_left>span:nth-child(1) {
    font-size: .468085rem;
  }

  .advert_left>span:nth-child(2) {
    font-size: .382979rem;
    color: #777;
  }

  .advert_left>span:nth-child(3) {
    font-size: .340426rem;
  }

  .advert_left>span:nth-child(3) a {
    text-decoration: none;
    color: #c3a28a;
  }

  .advert_img {
    display: block;
    float: right;
    line-height: 2.9rem;
    width: 3.829787rem;
    height: 2.9rem;
  }






  .content .recommend {
    width: 10rem;
    height: 1.06383rem;
    text-align: center;
  }

  .recommend_con {
    width: 3rem;
    height: 1.06383rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .recommend_con>span:nth-child(1) {
    font-size: .404255rem;
    align-self: center;
  }

  .recommend_con>span:nth-child(2) {
    font-size: .404255rem;
    align-self: center;
  }

  .recommend_con>span:nth-child(3) {
    font-size: .404255rem;
    align-self: center;
  }






  .content .screen {
    width: 10rem;
    height: 1.276596rem;
    display: flex;
    font-size: .382979rem;
    justify-content: space-between;
    text-align: center;
    color: #666;
  }

  .screen_one {
    width: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .screen_one>span:nth-child(1) {
    line-height: 100%;
    align-self: center;
  }


  .screen_two {
    width: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .screen_two>span:nth-child(1) {
    line-height: 100%;
    align-self: center;
  }


  .screen_three {
    width: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .screen_three>span:nth-child(1) {
    line-height: 100%;
    align-self: center;
  }


  .screen_four {
    width: 2.5rem;
    display: flex;
    justify-content: center;
  }

  .screen_four>span:nth-child(1) {
    line-height: 100%;
    align-self: center;
  }






  .content .shopList {
    width: 10rem;
    height: 100%;
  }

  .bottom {
    position: fixed;
    bottom: 0;
    width: 10rem;
    height: 1.319149rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    box-shadow: -0.021277rem 0 .042553rem 0 #888;
  }

  .bottom_main {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.2rem;
    text-align: center;
  }

  .bottom_main>span:nth-child(1) {
    height: .553191rem;
  }

  .bottom_main>span:nth-child(2) {
    font-size: .297872rem;
    color: #1296db;
  }



  .bottom_find {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.2rem;
    text-align: center;
  }

  .bottom_find>span:nth-child(1) {
    height: .553191rem;
  }

  .bottom_find>span:nth-child(2) {
    font-size: .297872rem;
    color: #888;
  }



  .bottom_menu {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    height: 1.2rem;
  }

  .bottom_menu>span:nth-child(1) {
    height: .553191rem;
  }

  .bottom_menu>span:nth-child(2) {
    font-size: .297872rem;
    color: #888;
  }




  .bottom_self {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.2rem;
    text-align: center;
  }

  .bottom_self>span:nth-child(1) {
    height: .553191rem;
  }

  .bottom_self>span:nth-child(2) {
    font-size: .297872rem;
    color: #888;
  }
</style>