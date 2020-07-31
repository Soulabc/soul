import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Reg from '../layout/Reg'
import Myfooter from "../layout/Myfooter"
import First from "../layout/First"
import Match from "../layout/Match"
import Initial from "../layout/Initial"
import Second from "../layout/Second"
import TypeList from "../components/TypeList"
import Liaotian from "../layout/Liaotian"
import My from "../layout/My"
import axios from "axios"
import Reg1 from "../layout/Reg1"
import Login from "../layout/Login"
import Registered from "../layout/Registered"
import Vuex from 'vuex'

Vue.use(Router);  

export default new Router({
  routes: [
    {
      path: '/Myfooter',
      name: 'Myfooter',
      component: Myfooter
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Match',
      name: 'Match',
      component: Match
    },
    {
      path: '/',
      name: 'Initial',
      component: Initial
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second,
      meta:{
        requiresAuth:true
      },    
      children:[
        // 子一级：子级组件是展示在父级组件里面的router-view
        {
          path:'TypeList/:type', //匹配的是 /ShuJia/TypeList
          name:'TypeList',
          component:TypeList,
          props:true
        }        
      ]
    },
    {
      path: '/Liaotian',
      name: 'Liaotian',
      component: Liaotian
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Reg1',
      name: 'Reg1',
      component: Reg1
    },
    {
      path: '/Login',
      name: 'Login',
      component:Login 
    },
    {
      path: '/Registered',
      name: 'Registered',
      component: Registered
    },
  ]
})


