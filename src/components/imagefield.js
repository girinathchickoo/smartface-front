import React from 'react';
import "./imagefield.css"




const Imagefield=({imagelink,box})=> {
  
   return(
   	
   	<div className='flex'>
   	<div className='absolute center'>
   		<img id='image' className="center" alt=""src={imagelink} width='500' height='auto'/>
   		  <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
   		  </div>
   	</div>  
   	</div>
  
   	
   	
   );
  
}

export default Imagefield;