import React from 'react'
import './About.css'
// @ts-ignore
import NavBarComponent from 'NavBarComponent/NavBarComponent'
import profile from '../assets/profile.png'

function About() {
  return (
    <div>
      <NavBarComponent />
      <section className="about">
        <img src={profile} />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </section>
    </div>
  )
}

export default About