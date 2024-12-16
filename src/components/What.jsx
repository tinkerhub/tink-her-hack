import React from 'react'
import image from '../assets/Frame2.png'
import imagepaper from '../assets/papertear.png'
import yellow from '../assets/yellowimg.png'
import white from '../assets/whiteimg.png'

function What() {
  return (
    <div style={{fontFamily:'CabinetGrotesk',fontSize:'20px'}}>
      <div style={{width:'100%',height:'1000px',backgroundColor:'black',display:'flex',flexDirection:'column',textAlign:'center',color:'white',}}>
        <div style={{position:'relative',zIndex:''}}>
        <img src={image} alt="" style={{width:'100%',height:'800px'}}/>
        </div>
       <div style={{position:'absolute',zIndex:'1',width:'200px',height:'100px',marginLeft:'650px',marginTop:'150px',color:'white',}}>
        <p style={{fontFamily:'CoveredByYourGrace',fontSize:'60px'}}>What is </p>
      <p style={{fontSize:'35px',marginTop:'-70px'}}>  tink-her-hack?</p>
       </div>
       <div style={{position:'absolute',zIndex:'1',width:'700px',height:'300px',marginLeft:'400px',marginTop:'350px',color:'white'}}>
        <p>An overnight hackethon where 4000 women across Kerala stay up all night to build their first tech projects.No coding experience needed-if you are curious about technology,this is your starting point.We bring the hackethon closer to you through 50+ venues across kerala,so you can join a venue near your home and spend one exciting night turning your ideas into real projects .With mentors to guide you and other women building alongside you,it's safe space to start your tech journey.</p>
       </div>

       <div style={{width:'100%',height:'500px',position:'absolute',zIndex:'2',marginTop:'600px',fontFamily:'CabinetGrotesk'}}>
        <img src={imagepaper} alt='' style={{width:'100%',height:'500px'}}/>
        <div style={{width:'500px',display:'flex',marginLeft:'500px'}}>
        <p style={{color:'black',marginTop:'-280px',fontSize:'25px',fontWeight:'bold'}}>Who says hackathons happen only in big cities? Join us at a venue near you, as 4000 women across Kerala prove that innovation can happen anywhere. Your hometown is your tech hub.</p>
        </div>
       
        
        </div>

      </div>
    
       <div style={{display:'flex',marginTop:'40px'}}>
         <div style={{width:'50%',height:'700px',backgroundColor:'#FCD600',color:'black',}}>
          <div style={{width:'500px',height:'700px',display:'flex',flexDirection:'column',marginLeft:'100px',marginTop:'100px',gap:'40px'}}>
          <h2>2022-'23</h2>
          <p style={{fontSize:''}}>What started as Kerala's first women-only overnight hackathon with 500 curious minds turned into something bigger.<span style={{fontWeight:'bold'}}> Five venues</span>  lit up as women proved they could build technology, many writing their first lines of code.etown is your tech hub</p>
          <img src={yellow} alt='' />
          </div>
         

         </div>
         <div style={{width:'50%',height:'700px',backgroundColor:'white',color:'black'}}>
         <div style={{width:'500px',height:'700px',display:'flex',flexDirection:'column',marginLeft:'150px',marginTop:'100px',gap:'40px'}}>
          <h2>2023-’24</h2>
          <p style={{fontSize:''}}>The spark became a movement. 1,200 women across <span style={{fontWeight:'bold'}}> 28 venues</span>   built 300 projects in a single night. From college students to working professionals, they showed up, stayed up, and built up. Some landed tech roles, others started ventures, but all of them proved - women belong in tech.</p>
          <img src={white} alt='' />
          </div>

         </div>
       </div>
    </div>
  )
}

export default What