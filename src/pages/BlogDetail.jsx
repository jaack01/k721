import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog-data'
import Footer from '../components/common/Footer'

const BlogDetail = () => {
  const { slug } = useParams()
  const blog = blogPosts.find(post => post.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!blog) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='font-[font2] text-4xl mb-4 text-white'>Blog Not Found</h1>
          <Link to='/blogs' className='text-[#D3FD50] underline font-[font1]'>Back to Blogs</Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className='bg-black min-h-screen text-white'>
      <div className='max-w-5xl mx-auto px-4 lg:px-8 pt-32 pb-20'>
        <div className='mb-12'>
          <Link
            to='/blogs'
            className='inline-flex items-center text-white hover:text-[#D3FD50] transition-colors font-[font1] text-sm uppercase tracking-wide mb-8'
          >
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
            Back to Blogs
          </Link>

          <div className='mb-8'>
            <span className='inline-block bg-[#D3FD50] text-black px-6 py-2 font-[font1] text-sm uppercase tracking-wider mb-6'>
              {blog.category}
            </span>
          </div>

          <h1 className='font-[font2] text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 text-white'>
            {blog.title}
          </h1>

          <div className='flex items-center gap-6 mb-12 pt-8 border-t border-white/10'>
            <img
              src={blog.authorImage}
              alt={blog.author}
              className='w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover'
            />
            <div>
              <p className='font-[font2] text-xl text-white mb-1'>{blog.author}</p>
              <div className='flex items-center gap-4 text-sm font-[font1] text-white/60'>
                <span>{formatDate(blog.publishedDate)}</span>
                <span>•</span>
                <span>{blog.readTime} read</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-16'>
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className='w-full h-[400px] lg:h-[600px] object-cover'
          />
        </div>

        <article className='max-w-3xl'>
          {blog.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2
                    key={index}
                    className='font-[font2] text-3xl lg:text-4xl text-white mt-16 mb-8 leading-tight'
                  >
                    {block.text}
                  </h2>
                )
              case 'paragraph':
                return (
                  <p
                    key={index}
                    className='font-[font1] text-base lg:text-lg text-white/80 leading-relaxed mb-8'
                  >
                    {block.text}
                  </p>
                )
              case 'quote':
                return (
                  <blockquote
                    key={index}
                    className='border-l-4 border-[#D3FD50] pl-8 py-6 my-12'
                  >
                    <p className='font-[font2] text-2xl lg:text-3xl text-white italic leading-relaxed'>
                      {block.text}
                    </p>
                  </blockquote>
                )
              default:
                return null
            }
          })}
        </article>

        <div className='mt-24 pt-16 border-t border-white/10'>
          <h3 className='font-[font2] text-3xl lg:text-4xl mb-12 text-white'>More Articles</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
            {blogPosts
              .filter(post => post.id !== blog.id)
              .slice(0, 2)
              .map(post => (
                <Link
                  key={post.id}
                  to={`/blogs/${post.slug}`}
                  className='group block'
                >
                  <div className='mb-6 overflow-hidden'>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700'
                    />
                  </div>
                  <p className='text-sm font-[font1] text-[#D3FD50] mb-3 uppercase tracking-wider'>
                    {post.category}
                  </p>
                  <h4 className='font-[font2] text-2xl text-white group-hover:text-[#D3FD50] transition-colors leading-tight'>
                    {post.title}
                  </h4>
                  <p className='font-[font1] text-white/60 mt-3 text-sm'>
                    {post.readTime} read
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogDetail
