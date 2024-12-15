import React from 'react';
import image from '../assets/Frame1.jpg';
import image2 from '../assets/heroimg.png';
import image3 from '../assets/count.png';

function Hero() {
  return (
    <div style={{}}>
      <div
        style={{
          width: '100%',
          height: '700px',
          backgroundColor: 'black',
          position: 'relative',
          margin:'0'
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
           <h1 style={{ fontFamily: 'Cabinet Grotesk',fontSize:'20px'}}>Dec 21 - Dec 30</h1>
           <button style={{width:'150px',height:'30px',borderRadius:'20px',backgroundColor:'#ED444B',color:'white',marginTop:'10px',border:'none'}}>APPLY NOW</button>
        </div>
        <div style={{display:'flex',position:'absolute',zIndex:'1',color:'white',flexDirection:'column',marginLeft:'490px',fontSize:'30px',textAlign:'center',marginTop:'200px',fontFamily: 'Cabinet Grotesk'}}>
          <h1>TINK-HER-HACK 3.0</h1><br/>
          <p>kerala's Largest Hackathon for Girls</p>
        </div>
        <div style={{width:'300px',height:'100px',position:'absolute',zIndex:'1',marginLeft:'420px',marginTop:'200px'}}>
        <img src={image3} alt="" style={{marginTop:'140px',marginLeft:'20px'}}/>
        <div style={{display:'flex',gap:'40px',fontFamily:'Covered By Your Grace',fontSize:'30px',position:'absolute',zIndex:'1',marginTop:'-140px',marginLeft:'250px',color:'white'}}>
          <p>4000 <br/> girls</p>
          <p>2 <br/> night</p>
        </div>

        </div>
        <div style={{width:'1000px',height:'500px',position:'absolute',zIndex:'1'}}>
        <img src={image2} alt="" style={{marginTop:'330px',width:'1650px',marginLeft:'-70px'}}/>

        </div>
       
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            position: 'relative',
          }}
        >
          <img
            src={image}
            alt=""
            style={{ width: '100%', height: '700px', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
