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
      <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='font-[font2] text-4xl mb-4'>Blog Not Found</h1>
          <Link to='/blogs' className='text-black underline font-[font1]'>Back to Blogs</Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className='bg-white min-h-screen'>
      <div className='max-w-[900px] mx-auto px-6 lg:px-12 pt-40 pb-24'>
        <div className='mb-16'>
          <div className='mb-6'>
            <span className='inline-block text-black font-[font1] text-xs uppercase tracking-[0.2em] border border-black px-4 py-2'>
              [{blog.category}]
            </span>
          </div>

          <h1 className='font-[font2] text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-12 text-black'>
            {blog.title}
          </h1>

          <div className='flex items-center gap-4 mb-16'>
            <img
              src={blog.authorImage}
              alt={blog.author}
              className='w-12 h-12 rounded-full object-cover'
            />
            <div>
              <p className='font-[font1] text-sm text-black'>{blog.author}</p>
              <div className='flex items-center gap-3 text-xs font-[font1] text-black/60'>
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
            className='w-full aspect-video object-cover'
          />
        </div>

        <article className='max-w-[650px] mx-auto'>
          {blog.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2
                    key={index}
                    className='font-[font2] text-3xl lg:text-4xl text-black mt-16 mb-6 leading-[1.2]'
                  >
                    {block.text}
                  </h2>
                )
              case 'paragraph':
                return (
                  <p
                    key={index}
                    className='font-[font1] text-[17px] lg:text-[18px] text-black leading-[1.7] mb-6'
                  >
                    {block.text}
                  </p>
                )
              case 'quote':
                return (
                  <blockquote
                    key={index}
                    className='border-l-[3px] border-[#D3FD50] pl-8 py-2 my-12'
                  >
                    <p className='font-[font1] text-xl lg:text-2xl text-black leading-[1.5]'>
                      {block.text}
                    </p>
                  </blockquote>
                )
              default:
                return null
            }
          })}
        </article>

        <div className='mt-32 pt-12'>
          <Link
            to='/blogs'
            className='inline-block text-black font-[font1] text-sm uppercase tracking-[0.2em] border border-black px-8 py-4 hover:bg-[#D3FD50] hover:border-[#D3FD50] transition-colors duration-300'
          >
            Back to All Articles
          </Link>
        </div>

        <div className='mt-32 pt-16 border-t border-black/10'>
          <h3 className='font-[font2] text-3xl lg:text-5xl mb-16 text-black'>More Articles</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16'>
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
                      className='w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700'
                    />
                  </div>
                  <p className='text-xs font-[font1] text-black/60 mb-3 uppercase tracking-[0.2em]'>
                    {formatDate(post.publishedDate)}
                  </p>
                  <h4 className='font-[font2] text-2xl lg:text-3xl text-black group-hover:opacity-60 transition-opacity leading-[1.2]'>
                    {post.title}
                  </h4>
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
