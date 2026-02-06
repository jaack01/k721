import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavbarColorContext } from '../../context/NavContext'
import { projectsData } from '../../data/project-data'
import MontrealClock from '../common/MontrealClock'

const QuickNav = () => {
  const [visible, setVisible] = useState(false)
  const [navColor] = useContext(NavbarColorContext)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <div
      className={`hidden lg:flex fixed top-0 left-0 right-0 z-40 items-center justify-between px-6 py-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ backgroundColor: navColor === 'white' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.95)' }}
    >
      <div className='flex items-center gap-8'>
        <Link
          to='/projects'
          className={`group relative font-[font1] text-sm uppercase tracking-[0.15em] py-2 px-3 overflow-hidden ${
            navColor === 'white' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
          } transition-colors`}
        >
          <span className='relative z-10'>Work ({projectsData.length})</span>
          <div className={`absolute inset-0 bg-[#D3FD50] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
          <span className='absolute inset-0 flex items-center justify-center font-[font1] text-sm uppercase tracking-[0.15em] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'>
            Work ({projectsData.length})
          </span>
          {isActive('/projects') && (
            <div className='absolute bottom-0 left-3 right-3 h-px bg-[#D3FD50]'></div>
          )}
        </Link>
        <Link
          to='/agence'
          className={`group relative font-[font1] text-sm uppercase tracking-[0.15em] py-2 px-3 overflow-hidden ${
            navColor === 'white' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
          } transition-colors`}
        >
          <span className='relative z-10'>Agency</span>
          <div className={`absolute inset-0 bg-[#D3FD50] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
          <span className='absolute inset-0 flex items-center justify-center font-[font1] text-sm uppercase tracking-[0.15em] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'>
            Agency
          </span>
          {isActive('/agence') && (
            <div className='absolute bottom-0 left-3 right-3 h-px bg-[#D3FD50]'></div>
          )}
        </Link>
        <Link
          to='/contact'
          className={`group relative font-[font1] text-sm uppercase tracking-[0.15em] py-2 px-3 overflow-hidden ${
            navColor === 'white' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
          } transition-colors`}
        >
          <span className='relative z-10'>Contact</span>
          <div className={`absolute inset-0 bg-[#D3FD50] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
          <span className='absolute inset-0 flex items-center justify-center font-[font1] text-sm uppercase tracking-[0.15em] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'>
            Contact
          </span>
          {isActive('/contact') && (
            <div className='absolute bottom-0 left-3 right-3 h-px bg-[#D3FD50]'></div>
          )}
        </Link>
        <Link
          to='/blogs'
          className={`group relative font-[font1] text-sm uppercase tracking-[0.15em] py-2 px-3 overflow-hidden ${
            navColor === 'white' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
          } transition-colors`}
        >
          <span className='relative z-10'>Blog</span>
          <div className={`absolute inset-0 bg-[#D3FD50] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
          <span className='absolute inset-0 flex items-center justify-center font-[font1] text-sm uppercase tracking-[0.15em] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'>
            Blog
          </span>
          {isActive('/blogs') && (
            <div className='absolute bottom-0 left-3 right-3 h-px bg-[#D3FD50]'></div>
          )}
        </Link>
      </div>
      <div className={navColor === 'white' ? 'text-white/40' : 'text-black/40'}>
        <MontrealClock />
      </div>
    </div>
  )
}

export default QuickNav
