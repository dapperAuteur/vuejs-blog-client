import Vue from 'vue'
import Router from 'vue-router'
import Author from '@/components/Author'
import Blog from '@/components/Blog'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/authors',
      name: 'Author',
      component: Author
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
