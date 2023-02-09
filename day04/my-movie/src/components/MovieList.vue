<template>
<div class="movie">
  <ol class="list">
      <li v-for="(movie, i) in movies">
          <a href="">
            <h4 class="hide">{{ movie.name }}</h4>
            <span :class="['hide', 'rate', 'rate' + movie.rate[0]]">{{ movie.rate[1] }}</span>
            <strong class="rank">{{ i + 1 }}</strong>
            <img class="poster" :src="movie.src" :alt="movie.name"/>
            <!-- 예매순 -->
            <span class="desc" v-if="nowState==='예매순'">
              <i class="reserve title">예매율</i>
              <em class="reserve data">{{ movie.ticketing }}</em>
            </span>
            <!-- 평점순  -->
            <span class="desc" v-else-if="nowState==='평점순'">
                <i class="star"><b :style=" 'width:' + (movie.score * 10) +'%'"></b></i>
                <em class="score">{{ movie.score }}</em>
            </span>
            <!-- 개봉일순 -->
            <span class="desc" v-else-if="nowState==='개봉일순'">
              <em class="open data"> {{ movie.openDate }} <b>개봉</b></em>
            </span>
            <!-- 주말관객순 -->
            <span class="desc" v-else-if="nowState==='주말관객순'">
              <i class="week title">주말관객</i>
              <em class="week data">{{ movie.week }} 명</em>
            </span>
            <!-- 판매율순 -->
            <span class="desc" v-else-if="nowState==='다운로드순'">
              <i class="sale title">판매율</i>
                <em class="sale data">{{ movie.sale }} %</em>
            </span>
          </a>
      </li>
    </ol>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['movies', 'nowState']

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

/* reset */
body {
	font:normal 12px Arial, sans-serif;
	line-height:1.3;
	color:#666666;
	background-color:#fff;
	margin:0;
	padding:0;
}
h1, h2, h3, h4, h5, h6 {font-size:1em;}
h1, h2, h3, h4, h5, h6, div, p, dl, dt, dd, ul, ol, li, form, fieldset, blockquote, address, table, thead, tbody, tfoot, tr, td, caption {
	margin:0;
	padding:0;
}
li {list-style:none;}
a {text-decoration:none; color:white}

/* movie */
body {background-color:#242424; }
.movie {width:590px; margin:30px auto 0; padding:10px; background-color:#242424; overflow:hidden;}
.movie > ol > li {float:left; width:125px; height:204px; margin:10px; box-shadow:0 0 10px rgba(0,0,0, 0.4); border:1px solid rgba(255,255,255,0.2)}
.movie > ol > li a {display: block; position: relative;}
.movie > ol > li .hide {font-size:0}
.movie > ol > li .rank {
    position: absolute;
    top:5px;
    left:5px;
    font-size:24px; 
    font-style: italic; 
    color:white;
    text-shadow:0 0 10px black;
}
.movie > ol > li .rate{
    position: absolute;
    top:5px;
    right:5px;
    content:''; 
    width:25px;
    height:25px; 
    display:block; 
    background-image: url('../assets/images/icon_rate.png');
    background-repeat: no-repeat;
}
.movie > ol > li .rate15 {background-position:0 -60px;}
.movie > ol > li .rate12 {background-position:0 -30px;}
.movie > ol > li .rate00 {background-position:0 0;}
.movie > ol > li .rate19 {background-position:0 -120px;}
.movie > ol > li .rate20 {background-position:0 -90px;}
.movie > ol > li .poster {display: block;}
.movie > ol > li .desc {position:relative; background-color:black; display:block; height:25px;}
.movie > ol > li i {float:left; margin:5px 0 0 10px; font-style:normal}
.movie > ol > li em {float:right; margin:5px 10px 0 0; font-weight:bold; font-style:normal}
.movie > ol > li i.star {
    width:71px; 
    height:14px; 
    background:url('../assets/images/icon_star.png') no-repeat 0 0/71px auto;
}
.movie > ol > li i.star > b {
    display:block; 
    width:0; 
    height:100%;
    background:url('../assets/images/icon_star.png') no-repeat 0 -15px/71px auto;
}
.movie > ol > li i.reserv_title {font-weight: bold;}
.movie > ol > li em.reserv_num {color:red}
.movie > ol > li i.open_title {position:absolute; right:35px; font-weight: bold; color:red}
.movie > ol > li em.open_num {font-weight: bold;}
.movie > ol > li i.week_title {font-weight: bold;}
.movie > ol > li em.week_num {color:red}
.movie > ol > li i.sale_title {font-weight: bold;}
.movie > ol > li em.sale_num {color:red}

.movie > .tab {text-align:center; font-size:16px}
.movie > .tab > li {display:inline-block; margin:0 20px;}
.movie > .tab > li.on a {color:red}
</style>