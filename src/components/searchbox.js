import React from 'react';
import "./searchbox.css"



const Searchbox=({onclickchange,onsubmit})=> {
  
   return(

   	 <div className="tc pa3 color" >
   		<div className="centre">
   		 <input type="text" onChange={onclickchange} />
   		 <button onClick={onsubmit}className="grow">Detect</button>
   		</div>
    
    </div>
   
   );
  
}

export default Searchbox;