import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import CV from './pages/CV'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Research from './pages/Research'
import ResearchDetail from './pages/ResearchDetail'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    // 路由变化时滚动到顶部
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="research" element={<Research />} />
        <Route path="research/:id" element={<ResearchDetail />} />
        {/* <Route path="gallery" element={<Gallery />} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Route>
    </Routes>
  )
}

export default App