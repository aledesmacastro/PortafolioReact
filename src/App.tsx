import React from 'react'
import profilePhoto from './assets/images/profile.jpg'

// Global styles
import './styles/global.scss'

// Providers
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'

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
  <ThemeProvider>
    <LangProvider>
      <Header />
      <main>
        <Hero
          name="Anibal"
          lastName="Ledesma Castro"
          photo={profilePhoto}
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
    </LangProvider>
  </ThemeProvider>
)

export default App
