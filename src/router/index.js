import Vue from 'vue'
import Router from 'vue-router'
import Author from '@/components/Author'
import Authors from '@/components/Authors'
import Blog from '@/components/Blog'
import Hello from '@/components/Hello'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
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
    },
    {
      path: '/posts',
      name: 'Post',
      component: Post
    }
  ]
})
