<template>
  <div>
  <h1>Sales Product({{ inCartSum }}개) - {{ totalPrice }}원</h1>
  <br>

  <product-list :chips-data="chips" @sale_product="sale_product"></product-list> <!--태그에서는 camel Case를 사용하지 않는다. - 자동으로 변환 오류남.-->
  <p><strong>구입목록</strong></p></br>
  <!-- <sale-list :chips-data="chips" :sale-data="sales" @delete_product="delete_product"></sale-list> -->
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'

export default {
  data() {
    return {
      chips:[
        {
          img:`mango.jpg`,
          title:`자연그대로 망고칩`,
          desc:`단맛이 그대로 살아있는 망고칩입니다.`,
          price: 2500
        },
        {
          img:`apple.jpg`,
          title:`천연 오가닉 사과칩`,
          desc:`깨끗한 재료를 엄선하여 자연을 그대로 담았습니다.`,
          price: 2000
        },
        {
          img:`jujube.jpg`,
          title:`아이깨끗 대추칩`,
          desc:`새콤함이 살아있는 반건조 대추그대로.`,
          price: 3000
        }
      ],
      sales:[],
      totalPrice: 0,
      inCartSum: 0,
    }
  },
            // 지역 컴포넌트
  components: {
    ProductList, SaleList}, // 키값과 변수명이 같다면 하나만 써도 된다. -> camelcase인 productList를 product-list로 자동 변환해줌. 
  methods: {
    sale_product(index) {
      this.sales.push(this.chips[index]);
      this.totalPrice += this.chips[index].price;
      this.inCartSum++;
    },
    delete_product(index) {
      this.totalPrice -= this.sales[index].price;
      this.sales.splice(index,1)
      this.inCartSum--;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {margin:0; padding:0}
        li {list-style: none;}
        body {padding:30px;}
        .list {margin:20px 0; display:flex;}
        .list > li {margin:5px; width:200px; border:1px solid gray; padding:10px;}
        .list > li > * {display:block}
        .list > li > img {width:200px; margin-bottom:20px;}
        .list > li > strong {font-size:20px; color:#666; margin-bottom:10px}
        .list > li > span{margin-bottom:10px;}
</style>
