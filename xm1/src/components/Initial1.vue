<template>
       <div id="app">
         <div id="top">
                <router-link :to="'/First'">
                    <img class="imgss" :src="'/static/img/logocopy.png'"/>
                </router-link>
                 
                 <video width="100%" height="800px" :src="'/static/img/soul.mp4'" muted loop autoplay></video>
         </div>
         <div id="tops">
             <p><img :src="'/static/img/slogan.png/'"/></p>
             <p class="pp">治愈聊天，有趣温暖真实表达</p>
        </div>
        <div id="imgs">
             <router-link :to="'/Reg'"><span>注册</span></router-link>
             <router-link :to="'/Log'"><span>登录</span></router-link>
        </div>
       </div>
</template>

<script>
export default {
    name:"Initial",
}
</script>

<style scoped>
     * {
            margin: 0;
            padding: 0;
        }
        #app{
            height: 400px;
            /* background: red; */
        }
        
        /* #top { */
            /* width: 100%; */
            /*  height: 800px; */
            /*   background-color: aqua; */
        /* } */
        
        video {
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -999;
        }
        
        a {
            text-decoration: none;
        }
        
        span {
            width: 100px;
            height: 50px;
            /*  background-color: black; */
            background-color: gainsboro;
            opacity: .5;
            display: inline-block;
            border-radius: 10%;
            padding-right: 10px;
            margin-right: 20px;
            text-align: center;
            line-height: 50px;
            font-size: 18px;
            color: black;
        }
        
        #imgs {
            width: 267px;
            height: 55px;
            position: fixed;
            top: 444px;
            left: 88px;
            /* background-color: red; */
        }
        
        img {
            width: 380px;
            height: 80px;
        }
        
        #tops {
            width:100%;
            height: 140px;
            margin-top: 220px;
            margin-left: 20px;
        }
        
        .imgss {
            width: 100px;
            height: 50px;
            position: fixed;
            top: 20px;
            left: 18px;
        }
        
        .pp {
            font-size: 15px;
            color: #fff;
            line-height: 12px;
            letter-spacing: 8px;
            text-align: center;
            margin-top: 20px;
        }
</style>