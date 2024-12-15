import React from 'react'
import imageb from '../assets/imageb.png'

function Testimonials() {
  return (
    <div>
      <div style={{width:'100%',height:'600px',backgroundColor:'#3670FF',display:'flex',flexWrap:'wrap',color:'white',justifyContent:'space-evenly'}}>
        <div className='left' style={{width:'500px',display:'block',height:'600px',fontSize:'20px',marginTop:'40px'}}>
          <h1 style={{}}>testimonials</h1>
          <br/>
          <div style={{marginTop:'30px'}}>
          <p>"All I knew was a little of Python and an amnition to learn something new by the end of the hackathon.I was amazed at what I did .Looking forward to building more and attending more hackathons"</p>
          <h3>Ancy</h3>
          <p>Biomedical Student ,LBS</p>

          </div>
          
          <div style={{marginTop:'60px'}}>
          <p>"I learnt a new tech over a night,that's something I never thought I could do,even in my wildest dreams"</p>
          <h3>Khadeeja</h3>
          <p>LBS Institute Of Technology for Women</p>
          </div>

         
        
        </div>
        <div className='right' style={{width:'500px',height:'600px'}}>
        <img src={imageb} alt='' style={{width:'500px',height:'600px'}}/>
        </div>

      </div>
    </div>
  )
}

export default Testimonials