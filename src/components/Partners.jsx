import React from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import five from '../assets/5.png'
import six from '../assets/6.png'

function Partners() {
  return (
    <div style={{width:'100%',height:'500px',backgroundColor:'white'}}>      
      <div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
        <h1 style={{fontFamily:'CoveredByYourGrace'}}>Our Partners So Far</h1>
        </div>
       
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'1000px',height:'600px',flexWrap:'wrap'}}>
          <div style={{display:'flex',width:'800px',height:'600px',marginLeft:'100px'}}>
            <img src={one} alt="" style={{width:'100px',height:'60px',marginLeft:'100px',marginTop:'50px'}}/>
            <img src={two} alt="" style={{width:'100px',height:'60px',marginLeft:'100px',marginTop:'50px'}}/>
            <img src={three} alt="" style={{width:'100px',height:'60px',marginLeft:'100px',marginTop:'50px'}}/>
            <img src={four} alt="" style={{width:'100px',height:'60px',marginLeft:'100px',marginTop:'50px'}}/>
            <img src={five} alt="" style={{width:'100px',height:'60px',marginLeft:'100px',marginTop:'50px'}}/>
            <img src={six} alt="" style={{width:'100px',height:'60px',marginLeft:'100px',marginTop:'50px'}}/>
         
          </div>
         

        </div>
        
      </div>
    </div>
  )
}

export default Partners