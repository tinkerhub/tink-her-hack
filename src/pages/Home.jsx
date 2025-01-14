import React from 'react'
import Hero from '../components/Hero'
import What from '../components/What'
import Previous from '../components/Previous'
import Five from '../components/Five'
import Impact from '../components/Impact'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'

function Home() {
  return (
    <div style={{margin:'0'}} >
       <Hero/>
       <What />
       <Previous/>
       <Five/>
       <Impact/>
       <Testimonials/>
       <Partners/>
     

    </div>
  )
}

export default Home