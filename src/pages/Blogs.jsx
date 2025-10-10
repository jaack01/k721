import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog-data'
import Footer from '../components/common/Footer'

const Blogs = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <>
      <div className='bg-white min-h-screen'>
        <div className='max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-24'>
          <div className='mb-24'>
            <h1 className='font-[font2] text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-black mb-8'>
              Blogue
            </h1>
            <p className='font-[font1] text-lg text-black/60 max-w-2xl'>
              Insights and perspectives on design, development, and digital experiences.
            </p>
          </div>

          <div className='space-y-24'>
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.slug}`}
                className='block group'
              >
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
                  <div className='lg:col-span-7'>
                    <div className='overflow-hidden'>
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className='w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700'
                      />
                    </div>
                  </div>

                  <div className='lg:col-span-5'>
                    <p className='text-xs font-[font1] text-black/60 mb-4 uppercase tracking-[0.2em]'>
                      {formatDate(post.publishedDate)}
                    </p>
                    <h2 className='font-[font2] text-3xl md:text-4xl lg:text-5xl text-black leading-[1.2] mb-4 group-hover:opacity-60 transition-opacity'>
                      {post.title}
                    </h2>
                    <p className='font-[font1] text-base text-black/70 leading-[1.7] mb-6'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center gap-4'>
                      <span className='inline-block text-black font-[font1] text-xs uppercase tracking-[0.2em] border border-black px-4 py-2'>
                        [{post.category}]
                      </span>
                      <span className='text-xs font-[font1] text-black/60'>
                        {post.readTime} read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs
