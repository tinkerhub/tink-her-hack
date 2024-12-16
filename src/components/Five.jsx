import React from 'react';
import image from '../assets/Frame2.png';
import image1 from '../assets/power.jpg'
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
            width:'500px',height:'400px',fontSize:'25px',marginTop:'80px'
             
          }}
        >
         <h2 style={{fontFamily:'CoveredByYourGrace'}}>Breaking entry barriers</h2>
         <ul style={{ fontFamily: 'CabinetGrotesk',marginTop:'10px'}}>
           <li>Brings tech opportunities to local communities</li>
           <li>Creates safe spaces for first-time builders
           </li>
           <li>Removes travel and accessibility concerns
           </li>
           <li>Provides guided first exposure to technology</li>

         </ul>
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
          <h2 style={{fontFamily:'CoveredByYourGrace'}}>The power of numbers</h2>

         <ul style={{ fontFamily: 'CabinetGrotesk',marginTop:'10px'}}>
           <li>4000 women building together creates momentum</li>
           <li>80 venues means local support systems

           </li>
           <li>Peer learning boosts confidence

           </li>
           <li>Creates visible role models in every community</li>

         </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Five;
