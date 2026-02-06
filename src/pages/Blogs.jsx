import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { blogPosts } from '../data/blog-data'
import Footer from '../components/common/Footer'

const categories = ['All', 'Design', 'Development', 'Accessibility']

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts
    return blogPosts.filter(post => post.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  useGSAP(() => {
    gsap.from('.blog-hero', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <>
      <div className='bg-white min-h-screen'>
        <div className='max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-24'>
          <div className='blog-hero mb-16 md:mb-24'>
            <h1 className='font-[font2] text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-black mb-8'>
              Blogue
            </h1>
            <p className='font-[font1] text-lg text-black/60 max-w-2xl'>
              Insights and perspectives on design, development, and digital experiences.
            </p>
          </div>

          <div className='flex flex-wrap gap-3 mb-16 md:mb-20'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`font-[font1] text-sm uppercase tracking-[0.15em] px-5 py-2.5 border transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black/60 border-black/20 hover:border-black hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className='space-y-24'>
            {filteredPosts.length === 0 ? (
              <div className='text-center py-24'>
                <p className='font-[font1] text-lg text-black/40'>No articles found in this category.</p>
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blogs/${post.slug}`}
                  className='block group'
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-6 lg:col-span-7' : 'lg:col-span-7'}`}>
                      <div className='overflow-hidden'>
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className='w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700'
                        />
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:col-span-5 lg:row-start-1' : 'lg:col-span-5'}`}>
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
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs
