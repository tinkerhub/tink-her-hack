import React from 'react'
import backimg from '../assets/Frame4.png'

function Impact() {
  return (
    <div style={{marginTop:'-50px',width:'100%',height:'850px'}}>
      <div style={{backgroundImage:`url(${backimg})`,width:'100%',height:'850px',color:'white'}}>
      
        <div style={{width:'100%',height:'100px',fontSize:'50px',display:'flex',justifyContent:'center'}}>
          <p style={{marginTop:'50px',fontFamily:'Covered By Your Grace',color:'#FCD600'}}>proven impact</p>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'70px', fontFamily: 'Cabinet Grotesk'}}>
          <div style={{width:'400px',height:'200px',display:'flex',flexDirection:'column',textAlign:'center',fontSize:'22px',margin:'20px'}}>
            <h1>90% </h1>
            <p>
              Participants seeked mentorship.This is evidence that mentorship.This is evidence that mentorship is a huge need.Consider scalable solutions that TinkerHub can provide to solve this need.
            </p>
            
          </div>
          <div style={{width:'400px',height:'200px',display:'flex',flexDirection:'column',textAlign:'center',fontSize:'22px',margin:'20px'}}>
            <h1>40% + </h1>
            <p>
            Participants reported that they came across 3+ New Technology tools during Hackathon.
            </p>
            
          </div>
        
          <div style={{width:'400px',height:'200px',display:'flex',flexDirection:'column',textAlign:'center',fontSize:'22px',margin:'20px'}}>
            <h1>34% </h1>
            <p>
              Participants reported a significant boost in confidence regarding their technical skills after the hackathon.
            </p>
            
          </div>
          <div style={{width:'400px',height:'200px',display:'flex',flexDirection:'column',textAlign:'center',fontSize:'22px',margin:'20px'}}>
            <h1>71% + </h1>
            <p>
              Women participated in a Hackathon for the first time.
            </p>
            
          </div>
          <div style={{width:'400px',height:'200px',display:'flex',flexDirection:'column',textAlign:'center',fontSize:'22px',margin:'20px'}}>
            <h1>90% </h1>
            <p>
              Participants learned at least one new tech tool during the Hackathon.
            </p>
            
          </div>

        </div>
        <div style={{width:'100%',height:'80px',fontSize:'20px',display:'flex',justifyContent:'center', fontFamily: 'Cabinet Grotesk'}}>
          <p>*From MnE survey across 1104 participants</p>
        </div>

          
        </div>
       
      </div>

  )
}

export default Impact