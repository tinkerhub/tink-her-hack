import React from 'react';
import image from '../assets/Frame2.png';
import image1 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import imageone from '../assets/imageone.png'
import imagetwo from '../assets/imagetwo.png'
import imagethree from '../assets/imagethree.png'
import imagefour from '../assets/imagefour.png'


function Five() {
  return (
    <div style={{ width: '100%', height: '850px', backgroundImage:`url(${image})`,color:'white'}}>
     
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent:'center'
        
        }}
      >
        <div
          style={{
            width:'600px',height:'400px',fontSize:'25px',marginTop:'30px'
             
          }}
        >
         <h2>Breaking entry barriers</h2>
         <p>Bringing tech opportunities to local communities,creating safe spaces for first-time builders,removing travel and accessibility concerns, and providing guided first exposure to technology come together to empower individuals and foster innovation</p>
        </div>
        <div
          style={{
           width:'600px',height:'400px',marginTop:'30px',marginLeft:'30px',
            position:'relative'
          }}
        >
          <img src={imagetwo} alt='' style={{position:'absolute',zIndex:'1',marginTop:'200px',marginLeft:'-20px'}}/>
          <img src={image1} alt='' style={{width:'500px',height:'300px',position:'relative'}}/>
          <img src={imageone} alt='' style={{position:'absolute',zIndex:'1',marginLeft:'-80px',marginTop:'-20px'}}/>
        </div>
       
        <div
          style={{
           width:'600px',height:'300px'
           ,position:'relative',display:'flex'
          }}
        >
          <img src={imagethree} alt=''style={{position:'absolute',zIndex:'1',marginLeft:'400px',marginTop:'-50px'}}/>
        
          <img src={imagefour} alt='' style={{position:'absolute',zIndex:'1',marginTop:'200px',marginLeft:'-40px'}}/>
          <img src={image3} alt='' style={{width:'500px',height:'300px',position:'relative'}}/>
        </div>
        <div
          style={{
          width:'600px',height:'300px',fontSize:'25px',marginTop:'30px'
          }}
        >
          <h2>the power of numbers</h2>
          <p>
            4,000 women building together creates momentum,80 venues provide local support systems,peer learning boosts confidence ,and visible role models emerge in every community to inspire empower others
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Five;
