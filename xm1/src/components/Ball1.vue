<template>
<div id="big">
     <div id="topp">
        <div class="container">
              <div class="cube cube--1">
                 <div class="side side--back">
                     <div class="side__inner"></div>
                 </div>
                 <div class="side side--left">
                     <div class="side__inner"></div>
                 </div>
                 <div class="side side--right">
                     <div class="side__inner"></div>
                 </div>
                 <div class="side side--top">
                     <div class="side__inner"></div>
                 </div>
                 <div class="side side--bottom">
                     <div class="side__inner"></div>
                 </div>
                 <div class="side side--front">
                     <div class="side__inner"></div>
                 </div>
               </div>
           <div class="cube cube--2">
              <div class="side side--back">
                  <div class="side__inner"></div>
              </div>
              <div class="side side--left">
                  <div class="side__inner"></div>
              </div>
              <div class="side side--right">
                  <div class="side__inner"></div>
              </div>
              <div class="side side--top">
                  <div class="side__inner"></div>
              </div>
              <div class="side side--bottom">
                  <div class="side__inner"></div>
              </div>
              <div class="side side--front">
                  <div class="side__inner"></div>
              </div>
           </div>
           <div class="cube cube--3">
               <div class="side side--back">
                   <div class="side__inner"></div>
               </div>
               <div class="side side--left">
                   <div class="side__inner"></div>
               </div>
               <div class="side side--right">
                   <div class="side__inner"></div>
               </div>
               <div class="side side--top">
                   <div class="side__inner"></div>
               </div>
               <div class="side side--bottom">
                   <div class="side__inner"></div>
               </div>
               <div class="side side--front">
                   <div class="side__inner"></div>
               </div>
           </div>
        </div>
        <i class="aa" @click="fn()">匹配  (请双击)</i>
     </div>
      <div> <audio :src="'static/img/mathing.mp3'" autoplay loop id="music"></audio></div>
        <p class="e">
           <i class="ww" v-show="show">连接中</i>
           <img v-show="show" src="static/img/jz.gif" alt="">
        </p>
     </div>
    
</template>

<script>
export default {
    name:"Ball1",
    data(){
        return {
            show:false
        }
    },
     methods:{
        fn(){
          this.show = true
              const TIME_COUNT =2;
              if(!this.timer){
                  this.count = TIME_COUNT;
                  this.show = false;
                  this.timer = setInterval(()=>{
                       if(this.count > 0 && this.count <= TIME_COUNT){
                           this.count--;
                       }else{
                           this.show = true;
                           clearInterval(this.timer);
                           this.timer = null;
                           //跳转的页面写在此处
                           this.$router.push({
                               path: '/Liaotian/'
                           });
                       }
                     },1000)
              }
        }
      }
}
</script>

<style scoped>
.aa{
      font-size:22px;
      position: absolute;
      bottom:200px;
      left:150px;
      color: rgb(250, 186, 186);
}
.e{
    color: #0CC0BF;

}
.ww{
    font-size: 18px;
    position: absolute;
    bottom: 120px;
    left: 70px;
}

.e>img{
    width: 230px;
    height:100px;
    position: absolute;
    bottom:85px;
    left: 130px;
}
*{
   /*  margin-top: -500px; */
    margin: 0;
    padding: 0;
 
}
#big{
   
      width: 100%;
      height: 670px;
    background-color: #3B2D47;
}

.container {
    position: absolute;
    top: 160px;
    left: 140px;
    width: 10em;
    height: 10em;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-animation: rotate 12s infinite linear;
    animation: rotate 12s infinite linear;
}

.cube {
    position: absolute;
    width: 10em;
    height: 10em;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.cube--2 {
    -webkit-transform: rotateX(45deg) rotateY(45deg);
    transform: rotateX(45deg) rotateY(45deg);
}

.cube--3 {
    -webkit-transform: rotateX(45deg) rotateZ(45deg);
    transform: rotateX(45deg) rotateZ(45deg);
}

.side {
    position: absolute;
    width: 10em;
    height: 10em;
    border: 1px dotted #4f8180;
    border-radius: 50%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.side::before,
.side::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    box-sizing: border-box;
    border-radius: inherit;
    border: 5px solid #4f7a7a;
    opacity: .4;
    box-shadow: inset 0 0 8em, 0 0 8em;
}

.side::before {
    width: 2.5em;
    height: 2.5em;
    color: #0DD4D2;
}

.side--back {
    -webkit-transform: translateZ(-5em) rotateY(180deg);
    transform: translateZ(-5em) rotateY(180deg);
}

.side--left {
    -webkit-transform: translateX(-5em) rotateY(-90deg);
    transform: translateX(-5em) rotateY(-90deg);
}

.side--right {
    -webkit-transform: translateX(5em) rotateY(90deg);
    transform: translateX(5em) rotateY(90deg);
}

.side--top {
    -webkit-transform: translateY(-5em) rotateX(90deg);
    transform: translateY(-5em) rotateX(90deg);
}

.side--bottom {
    -webkit-transform: translateY(5em) rotateX(-90deg);
    transform: translateY(5em) rotateX(-90deg);
}

.side--front {
    -webkit-transform: translateZ(5em);
    transform: translateZ(5em);
}

.side__inner {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 5em;
    height: 5em;
    margin: auto;
    border-radius: inherit;
    border: 1px solid #0DD4D2;
    /*   box-shadow: inset 0 0 2em; */
    color: #0DD4D2;
    -webkit-transform: translateZ(2em);
    transform: translateZ(2em);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.side__inner::before,
.side__inner::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    box-sizing: border-box;
    border-radius: inherit;
    border: 6px solid #0DD4D2;
    box-shadow: inset 0 0 2em, 0 0 2em;
}

.side__inner::after {
    width: 1.5em;
    height: 1.5em;
    -webkit-transform: translateZ(4em);
    transform: translateZ(4em);
    color: #0DD4D2;
}

@-webkit-keyframes rotate {
    100% {
        -webkit-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
        transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
    }
}

@keyframes rotate {
    100% {
        -webkit-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
        transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
    }
}
/* BODY { 
   display: -webkit-box; 
   display: -ms-flexbox; 
   display: flex; 
   -webkit-box-pack: center; 
   -ms-flex-pack: center; 
   justify-content: center; 
   -webkit-box-align: center; 
   -ms-flex-align: center; 
   align-items: center; 
} */
</style>