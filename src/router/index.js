import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home'
import About from '../views/About'
import Message from '../views/Message'
import News from '../views/News'
import MessageDetial from '../views/MessageDetial'
import NewsDetial from '../views/NewsDetial'
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            // path:'/home/message/info:msgId',
                            path:'/home/message/info',
                            component:MessageDetial,
                            props(route){
                                return{
                                    msgId:route.params.msgId,
                                    msgContent:route.query.msgContent
                                }
                            },
                            name:'msgInfo',
                        }
                    ]
                },
                {
                    path:'/home/news',
                    component:News,
                    children:[
                        {
                            // path:'/home/news/info:newsId',
                            path:'/home/news/info:newsId',
                            component:NewsDetial,
                            props(route){
                                return{
                                    newsId:route.params.newsId,
                                    newsContent:route.query.newsContent
                                }
                            },
                            name:'newsInfo'
                        }
                    ]
                }
            ]
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home/message'
        }
    ]
})