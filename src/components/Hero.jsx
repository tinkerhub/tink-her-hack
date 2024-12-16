import React from 'react';
import image from '../assets/Frame1.jpg';
import image2 from '../assets/heroimg.png';
import image3 from '../assets/count.png';
import badge from '../assets/badge.png';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <div style={{}}>
      <div
        style={{
          width: '100%',
          height: '800px',
          backgroundColor: 'black',
          position: 'relative',
          margin:'0',
          backgroundImage: `url(${image})`
        
        }}
      >
        <div
          style={{
            width: '250px',
            height: '130px',
            backgroundColor: '#FCD600',
            position: 'absolute',
            zIndex:'1',
            marginLeft:'80px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            borderRadius:'20px',
            marginTop:'-15px'
          
          }}
        >
           <h1 style={{ fontFamily: 'Cabinet Grotesk',fontSize:'15px'}}>Registrations from Jan 5th</h1>
           <button style={{width:'150px',height:'30px',borderRadius:'20px',backgroundColor:'#ED444B',color:'white',marginTop:'10px',border:'none'}}>APPLY NOW</button>
        </div>
        <div style={{display:'flex',position:'absolute',zIndex:'1',color:'white',flexDirection:'column',marginLeft:'490px',fontSize:'30px',textAlign:'center',marginTop:'200px',fontFamily: 'Cabinet Grotesk'}}>
          <img src={logo} alt="" style={{width:'130px',height:'50px',marginTop:'-90px',marginLeft:'210px'}}/>
          <h1>TINK-HER-HACK 3.0</h1><br/>
          <p style={{marginTop:'-40px',fontSize:'25px'}}>Kerala's Largest Hackathon for Girls</p>
        </div>
        <div style={{width:'300px',height:'100px',position:'absolute',zIndex:'1',marginLeft:'420px',marginTop:'200px'}}>
        <img src={image3} alt="" style={{marginTop:'140px',marginLeft:'20px'}}/>
        <div style={{display:'flex',width:'200px',fontFamily:'Covered By Your Grace',fontSize:'30px',position:'absolute',zIndex:'1',marginTop:'-160px',marginLeft:'250px',color:'white',textAlign:'center'}}>
          <p>4000  girls <br/> 2 night of making</p>
        
        </div>
        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
         
        <img src={badge} alt="" style={{width:'300px',height:'300px',marginLeft:'-450px',marginTop:'-200px'}}/>
          <img src={image2} alt="" style={{width:'1520px',marginTop:'-250px',marginLeft:'-420px'}}/>
        </div>

        </div>
    
       
   
      </div>
    </div>
  );
}

export default Hero;
