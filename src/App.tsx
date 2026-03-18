import React from 'react'

// Global styles
import './styles/global.scss'

// Layout
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

// Sections
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Services from './components/sections/Services/Services'
import Skills from './components/sections/Skills/Skills'
import Experience from './components/sections/Experience/Experience'
import Projects from './components/sections/Projects/Projects'
import Blog from './components/sections/Blog/Blog'
import Contact from './components/sections/Contact/Contact'

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero
        name="Anibal"
        lastName="Ledesma"
        occupation="Front End Developer"
        description="Hábil para trabajar en ambientes desafiantes y competitivos. Persona responsable y adaptable, rápida absorción de las nuevas tecnologías. Asociación y trabajo en equipo."
        photo="https://scontent.fbog2-3.fna.fbcdn.net/v/t1.0-9/33516574_445271872580085_3127037534983421952_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeGRZY0cNwDsXgtB7lSo_FqcolcJCI2ICFmiVwkIjYgIWW4KOekpR5_x_qbSeewZric&_nc_ohc=BPJsrpbE-aMAX8zeU7e&_nc_ht=scontent.fbog2-3.fna&oh=72f878f9bac672e042050a546910274d&oe=5EF5932B"
        faceUrl="https://www.facebook.com/aledesmadev/"
        inUrl="https://www.linkedin.com/in/afledesma/"
      />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </>
)

export default App
