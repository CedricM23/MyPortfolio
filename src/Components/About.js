import React from 'react'
import githublogo from '../Images/githublogo.png'

function About() {
  return (
    <>
        <div className='About-Section'>
            <img src={githublogo} className='About-Section-Image' style={{width: '300px'}} alt='user'/>
            <section className='About-Section-Text'>
                <p>I am a lifelong learner and Software Engineer with foundations in front-end development, programming,
                and version control. Seeking to leverage coding skills and technical expertise in a collaborative
                development environment to create impactful and complex front-end HTML and CSS code with cms
                integration.</p>
            </section>
        </div>
   </>
  )
}

export default About
