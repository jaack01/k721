import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    return (
        <>
            <Link to={`/blogs/${props.slug1}`} className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full block'>
                <img className='h-full w-full object-cover' src={props.image1} alt={props.title1 || ""} />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <div className='text-center px-8'>
                        <h2 className='uppercase text-4xl lg:text-5xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full mb-4'>Lire l'article</h2>
                        <p className='text-white text-lg font-[font1] max-w-md mx-auto'>{props.excerpt1}</p>
                    </div>
                </div>
            </Link>
            <Link to={`/blogs/${props.slug2}`} className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full block'>
                <img className='h-full w-full object-cover' src={props.image2} alt={props.title2 || ""} />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <div className='text-center px-8'>
                        <h2 className='uppercase text-4xl lg:text-5xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full mb-4'>Lire l'article</h2>
                        <p className='text-white text-lg font-[font1] max-w-md mx-auto'>{props.excerpt2}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogCard
