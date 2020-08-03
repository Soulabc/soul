<template>
    <div class="box">
        <div class="head">
            <span><router-link :to="'/My/'"><img :src="'/static/img/agwas.jpg'"/></router-link></span>
            <div class="nav">
                <div v-for="(type,index) in types" :key="index" >
                    <router-link :to="'/Second/TypeList/'+type">{{type}}</router-link>
                </div>
            </div>
            <p><router-link :to="'/ccc/'"><i class="el-icon-service"></i></router-link></p>
        </div>
           <div class="sou">
               <input type="text" name="" placeholder="大家都在搜： 哈哈哈" value="">
           </div>
        <div> 
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:"Type",
    data(){
        return {
            types:['关注','推荐','最新']
        }
    },
    created(){
        this.$router.push('/Second/TypeList/'+this.types[0]);
    } 
}
</script>

<style scoped>
.sou input{
    width: 350px;
    margin: 20px 15px;
    margin-bottom:5px;
    background: rgb(247, 244, 244);
    height: 30px;
    border-radius: 30px;
    padding-left: 30px;
    outline: none
}
*{
    margin: 0;padding: 0;
}
a{
    text-decoration: none;
    color: black;
}
.head{
   /* position: absolute; */
   width:100%;
   /* background: red; */
   height: 80px;
   display: flex;
   justify-content: space-around;
   border-bottom: 1px solid rgb(212, 203, 203);
   /* padding-bottom: 20px; */
   
}
.head span{
    margin-top: 15px;
}
.head span img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.head p{
    margin-top:20px;
    font-size: 25px;
}
.box .nav{
    height:35px;
    display: flex;
    justify-content: start;
    /* align-items: center; */
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    margin: 20px 20px;
}
/* .box .nav:hover{font-size: 25px;color: red;} */
.box .nav div{
    width:80px;
    height: 100%;
    /* border:1px solid red; */
}


</style>