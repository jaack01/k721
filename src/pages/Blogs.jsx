import { useGSAP } from '@gsap/react'
import BlogCard from '../components/blogs/BlogCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { blogPosts } from '../data/blog-data'
import Footer from '../components/common/Footer'

const Blogs = () => {
  const blogPairs = []
  for (let i = 0; i < blogPosts.length; i += 2) {
    blogPairs.push({
      blog1: blogPosts[i],
      blog2: blogPosts[i + 1] || null
    })
  }

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.blog-hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.blog-container',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <>
      <div className='lg:p-4 p-2 mb-[100vh]'>
        <div className='pt-[45vh]'>
          <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Blogs</h2>
        </div>
        <div className='lg:mt-20 blog-container'>
          {blogPairs.map(function (pair, idx) {
            return (
              <div key={idx} className='blog-hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
                <BlogCard
                  image1={pair.blog1?.featuredImage}
                  image2={pair.blog2?.featuredImage}
                  title1={pair.blog1?.title}
                  title2={pair.blog2?.title}
                  excerpt1={pair.blog1?.excerpt}
                  excerpt2={pair.blog2?.excerpt}
                />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs
