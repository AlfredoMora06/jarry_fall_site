import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'

import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"
import { getProjects } from '../store/features/projectsSlice'
import ProjectBody from '../components/sections/ProjectBody'
import Discover from './BeeSafe/Discover'
import Define from './BeeSafe/Define'
import BeeSafeDevelop from './BeeSafe/BeeSafeDevelop'
import BackToTop from './BeeSafe/BackToTop'
import DiscoverSecond from './BeeSafe/DiscoverSecond'



export default function SingleProject():JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()
  const projects = useSelector(getProjects)
  const project = projects.find((p: any) => p.title === location.state.title)
  const topRef = useRef<any>()
  

  React.useEffect(() => {
    if (location.state == null) {
      navigate(`/0/projects`)
      window.scrollTo(0, 0)
    }
  }, [location.state, navigate])

  return location.state && project ? (
    <>
      <div style={{ backgroundColor: "#FFFFFF", paddingBottom: 50 }} ref={topRef}>
        <Navbar dark={false} />
        <ProjectBody 
          projectTitle={project.title} 
          imageSrc={project.image}
          projectLength={project.projectLength}
          projectGoal={project.goal}
          roles={project.roles}
          tools={project.tools}
        />
      </div>
      <Discover />
      <Define />
      <BeeSafeDevelop />
      <DiscoverSecond />
      <BackToTop topRef={topRef}/>
      <Footer />
    </>
  ) : <></>
}
