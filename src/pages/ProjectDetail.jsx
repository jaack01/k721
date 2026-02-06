import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { projectsData } from '../data/project-data'
import Footer from '../components/common/Footer'

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.slug === slug)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  useEffect(() => {
    if (!project) {
      navigate('/projects')
    }
  }, [project, navigate])

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.fade-in-section', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.content-wrapper',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.gallery-image', {
      opacity: 0,
      scale: 0.95,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.gallery-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.related-card', {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.related-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  if (!project) {
    return null
  }

  const relatedProjects = projectsData
    .filter(p => p.slug !== slug)
    .slice(0, 3)

  const nextGalleryImage = () => {
    setActiveGalleryIndex(prev =>
      prev < project.galleryImages.length - 1 ? prev + 1 : 0
    )
  }

  const prevGalleryImage = () => {
    setActiveGalleryIndex(prev =>
      prev > 0 ? prev - 1 : project.galleryImages.length - 1
    )
  }

  return (
    <>
      <div className='lg:p-4 p-3 pb-12 lg:pb-24'>
        <div className='pt-24 md:pt-32 lg:pt-40'>
          <div className='mb-6 md:mb-8'>
            <Link
              to='/projects'
              className='inline-flex items-center text-sm md:text-base hover:opacity-70 transition-opacity'
            >
              <span className='mr-2'>&larr;</span> Retour aux projets
            </Link>
          </div>

          <div className='mb-8 md:mb-12'>
            <div className='flex flex-wrap items-center gap-4 mb-4 text-sm md:text-base opacity-70'>
              <span className='uppercase tracking-wider'>{project.category}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
              <span>&bull;</span>
              <span>{project.client}</span>
            </div>
            <h1 className='font-[font2] text-[12vw] md:text-[8vw] lg:text-[6vw] uppercase leading-tight mb-4'>
              {project.title}
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl max-w-4xl opacity-80'>
              {project.description}
            </p>

            {project.services && (
              <div className='flex flex-wrap gap-2 mt-6'>
                {project.services.map((service, i) => (
                  <span key={i} className='font-[font1] text-xs uppercase tracking-[0.15em] px-4 py-2 border border-current/20 rounded-full'>
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className='w-full aspect-video lg:aspect-[21/9] rounded-lg lg:rounded-[40px] overflow-hidden mb-12 md:mb-16 lg:mb-24'>
            <img
              src={project.featuredImage}
              alt={project.title}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='content-wrapper grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-24'>
            <div className='lg:col-span-4'>
              <div className='fade-in-section mb-8 lg:mb-12'>
                <h3 className='text-sm uppercase tracking-wider opacity-60 mb-2'>Client</h3>
                <p className='text-xl md:text-2xl font-[font1]'>{project.client}</p>
              </div>

              <div className='fade-in-section mb-8 lg:mb-12'>
                <h3 className='text-sm uppercase tracking-wider opacity-60 mb-2'>Industrie</h3>
                <p className='text-xl md:text-2xl font-[font1]'>{project.industry}</p>
              </div>

              <div className='fade-in-section mb-8 lg:mb-12'>
                <h3 className='text-sm uppercase tracking-wider opacity-60 mb-2'>Duree</h3>
                <p className='text-xl md:text-2xl font-[font1]'>{project.duration}</p>
              </div>

              <div className='fade-in-section mb-8 lg:mb-12'>
                <h3 className='text-sm uppercase tracking-wider opacity-60 mb-2'>Equipe</h3>
                <p className='text-xl md:text-2xl font-[font1]'>{project.team}</p>
              </div>

              {project.projectUrl && (
                <div className='fade-in-section'>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-flex items-center justify-center px-6 py-3 border-2 border-current rounded-full uppercase text-sm md:text-base font-[font1] hover:bg-black hover:text-white transition-colors duration-300'
                  >
                    Visiter le site &rarr;
                  </a>
                </div>
              )}
            </div>

            <div className='lg:col-span-8'>
              <div className='fade-in-section mb-12'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-[font1] uppercase mb-6'>Le Defi</h2>
                <p className='text-base md:text-lg leading-relaxed opacity-80'>
                  {project.challenge}
                </p>
              </div>

              <div className='fade-in-section mb-12'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-[font1] uppercase mb-6'>La Solution</h2>
                <p className='text-base md:text-lg leading-relaxed opacity-80'>
                  {project.solution}
                </p>
              </div>

              <div className='fade-in-section'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-[font1] uppercase mb-8'>Resultats</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {project.results.map((result, index) => (
                    <div key={index} className='p-6 rounded-lg border border-current/20'>
                      <div className='text-4xl md:text-5xl font-[font1] mb-2'>{result.value}</div>
                      <div className='text-lg md:text-xl font-[font1] mb-2'>{result.metric}</div>
                      <div className='text-sm opacity-70'>{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='fade-in-section mb-12 md:mb-16 lg:mb-24'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-[font1] uppercase mb-8'>Technologies</h2>
            <div className='flex flex-wrap gap-3 md:gap-4'>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='px-4 md:px-6 py-2 md:py-3 border-2 border-current rounded-full text-sm md:text-base font-[font1] uppercase'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='gallery-section mb-12 md:mb-16 lg:mb-24'>
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-[font1] uppercase'>Galerie</h2>
              <div className='flex gap-3'>
                <button
                  onClick={prevGalleryImage}
                  className='w-12 h-12 border border-current/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer'
                  aria-label='Previous image'
                >
                  &larr;
                </button>
                <button
                  onClick={nextGalleryImage}
                  className='w-12 h-12 border border-current/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer'
                  aria-label='Next image'
                >
                  &rarr;
                </button>
              </div>
            </div>

            <div className='relative overflow-hidden rounded-lg lg:rounded-[40px] aspect-video mb-4'>
              <img
                src={project.galleryImages[activeGalleryIndex]}
                alt={`${project.title} gallery ${activeGalleryIndex + 1}`}
                className='w-full h-full object-cover transition-opacity duration-500'
              />
            </div>

            <div className='flex gap-2'>
              {project.galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGalleryIndex(index)}
                  className={`h-1 flex-1 rounded-full transition-colors cursor-pointer ${
                    index === activeGalleryIndex ? 'bg-black' : 'bg-black/15'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className='fade-in-section mb-12 md:mb-16 lg:mb-24'>
              <div className='bg-black text-white rounded-lg lg:rounded-[40px] p-8 md:p-12 lg:p-16'>
                <div className='max-w-4xl'>
                  <p className='text-2xl md:text-3xl lg:text-4xl font-[font1] mb-8 leading-relaxed'>
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className='flex items-center gap-4'>
                    <img
                      src={project.testimonial.image}
                      alt={project.testimonial.author}
                      className='w-16 h-16 rounded-full object-cover'
                    />
                    <div>
                      <div className='font-[font1] text-lg md:text-xl'>{project.testimonial.author}</div>
                      <div className='opacity-70'>{project.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='related-section bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-20'>
        <div className='max-w-[1400px] mx-auto'>
          <h2 className='font-[font2] text-3xl md:text-4xl lg:text-5xl uppercase mb-16'>Projets connexes</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8'>
            {relatedProjects.map((rp) => (
              <Link
                key={rp.id}
                to={`/projects/${rp.slug}`}
                className='related-card group block'
              >
                <div className='aspect-[4/3] overflow-hidden mb-4 rounded-lg'>
                  <img
                    src={rp.featuredImage}
                    alt={rp.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                    loading="lazy"
                  />
                </div>
                <h3 className='font-[font2] text-xl md:text-2xl uppercase mb-2 group-hover:text-[#D3FD50] transition-colors duration-300'>
                  {rp.title}
                </h3>
                <p className='font-[font1] text-sm text-white/50'>
                  {rp.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProjectDetail
