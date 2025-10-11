import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:slug' element={<ProjectDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:slug' element={<BlogDetail />} />
      </Routes>
    </div>
  )
}

export default App