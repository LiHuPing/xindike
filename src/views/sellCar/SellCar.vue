<template>
  <div>
    <Head/>
    <img src="./images/banner.png" alt>
    <div class="content">
      <!-- 流程 -->
      <div class="process">
        <div class="process-info"></div>
      </div>
      <form>
        <input type="phone" placeholder="请输入手机号">
        <button>预约卖车</button>
      </form>
      <div class="btn">
        <router-link to="/carValuation">爱车评估</router-link>
      </div>
    </div>
    <div class="question">
      <h2>常见问题</h2>
      <p>common problems</p>
      <hr>
    </div>
    <div class="control">
      <p class="issue-title">
        <span class="span-icon"></span>进口车提车落户流程?
      </p>
      <div class="single">
        <p>
          一.购买平行进口车要确定好车型，然后咨询当地车管所工作人员或者黄牛问是否可以上牌，一般情况下黄牛或者上牌人员都清楚。
          <br>
          <br>二.手续齐全了上牌首先去交购置税，扫描电子信息出来整车信息然后按当地税收标准收税，然后带着完税证明去上牌大厅办理检测手续，拍照，检测环保，拓车架号。 完成后交给工作人员录入大绿本，等待选号就可以了！
          <br>
          <br>三.注意事项
          <br>1.平行进口车大多会改装或者贴膜，个别地区是不给上牌的，所以要咨询当地上牌人员
          <br>2.改装轮毂尺寸要问商家更改一致性信息，费用不高。
          <br>3.右门下方一般有铭牌，但区域要求不统一，所以铭牌也不统一，如果出现铭牌与车信息不符千万不要着急，问商家或者黄牛都可以解决。费用不会超过100元。
        </p>
      </div>
      <div class="line dis-none"></div>
      <p class="issue-title">
        <span class="span-icon active"></span>进口车提车落户流程?
      </p>
      <div class="single dis-none">
        <p>统一，所以铭牌也不统一，如果出现铭牌与车信息不符千万不要着急，问商家或者黄牛都可以解决。费用不会超过100元。</p>
        <p>统一，所以铭牌也不统一，如果出现铭牌与车信息不符千万不要着急，问商家或者黄牛都可以解决。费用不会超过100元。</p>
        <p>统一，所以铭牌也不统一，如果出现铭牌与车信息不符千万不要着急，问商家或者黄牛都可以解决。费用不会超过100元。</p>
      </div>
      <div class="line"></div>
      <p class="issue-title">
        <span class="span-icon active"></span>进口车提车落户流程?
      </p>
    </div>
  </div>
</template>
<script>
import Head from "../../components/head/Head.vue";
import "./sellCar.less";
export default {
  name: "SellCar",
  components: {
    Head
  }
};
</script>

