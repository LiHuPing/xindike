<template>
  <div class="main">
    <Head/>

    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="./images/banner1.png" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./images/banner1.png" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./images/banner1.png" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div class="box dis-flex">
      <div>
        <router-link to="/buyCar">我要买车</router-link>
      </div>
      <div class="sell">
        <router-link to="/sellCar">我要卖车</router-link>
      </div>
    </div>
    <div class="catalogue">
      <ul>
        <li>10万以下</li>
        <li>10万以下</li>
        <li>10万以下</li>
        <li>10万以下</li>
        <li>10万以下</li>
      </ul>
      <ul class="center">
        <li>紧凑型车</li>
        <li>中型车</li>
        <li>中型车</li>
        <li>SUV</li>
        <li class="more">
          <img src="./images/more+.png" alt>
        </li>
      </ul>
      <ul>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
      </ul>
      <ul class="list-img">
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li>
          <img src="./images/奥迪.png" alt>
        </li>
        <li class="more">
          <div></div>
        </li>
      </ul>
    </div>
    <div class="bgc-030">
      <div class="types">
        <div class="title">
          <i></i>优选车型
          <a href="javascript:;" class="pull-right"></a>
        </div>
        <div class="wrap">
          <div>
            <ul>
              <li>
                <div>
                  <img src="./images/tupian.png" alt>
                  <h3 class="ellipsis">2016款 保时捷718 Ca2016款</h3>
                  <p>
                    ￥65.8
                    <span>万</span>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src="./images/tupian.png" alt>
                  <h3 class="ellipsis">2016款 保时捷718 Ca2016款</h3>
                  <p>
                    ￥65.8
                    <span>万</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="text-center">
                  <img src="./images/tupian.png" alt>
                  <h3 class="ellipsis">2016款 保时捷718 Ca2016款</h3>
                  <p>
                    ￥65.8
                    <span>万</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row dis-flex">
          <div>
            <p>牌证服务</p>
          </div>
          <div>
            <p>评估检测</p>
          </div>
          <div>
            <p>售后服务</p>
          </div>
          <div>
            <p>金融服务</p>
          </div>
        </div>
      </div>
      <p class="examine">所有车辆均通过我们严格的安全检查</p>

      <div class="select dis-flex">
        <div :class="{'s-left':active}" @click="switcher">董事长致辞</div>
        <div :class="{'s-left':!active}" @click="switcher">公司理念</div>
      </div>

      <div class="info" v-show="active">
        <div class="pull-left">
          <img src="./images/董事长.png" alt>
        </div>
        <dl class="pull-right">
          <dt>
            鑫迪克
            <span>董事长</span>
          </dt>
          <dd>简介：注册号：****所在地：四川省注册资本：100万元人民币法定代表：钟科志企业类型：有限责任公司（自然人投资或控股）登记状态：存续登记机关：成都市高新工商局注册地址：成都高新区九兴大道12号1楼6号</dd>
        </dl>
        <a href="javascript:;"></a>
      </div>
      <div class="info" v-show="!active">
        <div class="pull-left">
          <img src="./images/董事长.png" alt>
        </div>
        <dl class="pull-right">
          <dt>
            鑫迪克
            <span>总经理</span>
          </dt>
          <dd>简介：注册号：****所在地：四川省注册资本：100万元人民币法定代表：钟科志企业类型：有限责任公司（自然人投资或控股）登记状态：存续登记机关：成都市高新工商局注册地址：成都高新区九兴大道12号1楼6号</dd>
        </dl>
        <a href="javascript:;"></a>
      </div>
      <div>
        <img src="./images/发展历程.png" alt>
      </div>
      {/* 隐藏 */ }
      <div class="fold"></div>
      <div>
        <div class="title">
          <i class="news"></i>新闻资讯
          <a href="javascript:;" class="pull-right"></a>
        </div>
        <div class="container">
          <!-- 轮播 -->
          <div class="newsDetail">
            <div>
              04-10
              <span>2019</span>
            </div>
            <h3>起步价上百元 “最贵网约车”你会去坐吗？</h3>
            <p class="e">车价动辄五六十万，打车起步价就要上百元。滴滴豪华车业务上线，司机都是千里挑一，服务更像...</p>
          </div>
        </div>
      </div>
      <div>
        <div class="title">
          <i class="cooperate"></i>合作伙伴
          <a href class="pull-right toTop"></a>
        </div>
        <div class="companys">
          <div class="item">
            <img src="./images/3.png" alt>
          </div>
          <div class="item">
            <img src="./images/3.png" alt>
          </div>
          <div class="item">
            <img src="./images/3.png" alt>
          </div>
          <div class="item">
            <img src="./images/3.png" alt>
          </div>
          <div class="item">
            <img src="./images/3.png" alt>
          </div>
          <div class="item">
            <img src="./images/3.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "../../components/head/Head.vue";
import "./main.less";
export default {
  data() {
    return {
      active: true
    };
  },

  methods: {
    switcher() {
      this.active = !this.active;
    }
  },
  name: "Main",
  components: {
    Head
  }
};
</script>
<style lang="less">
</style>
