import React from 'react';



const Navigation=({routechange,isSigned,route})=> {
  
   

      if(!isSigned && route==='signin'||route==='register'|| route==='signout'){
      	return(
      <nav style={{ cursor:'pointer', display:'flex',justifyContent:'flex-end',padding:'10px',textDecoration:'underline' }} className="f3 clr-black" >
         <p className="pa2"onClick={()=>routechange('signin')}>Sign In</p>
         <p className="pa2"onClick={()=>routechange('register')}>Register</p>
      </nav>)
  }else{
  	return(
      <nav style={{ cursor:'pointer', display:'flex',justifyContent:'flex-end',padding:'10px',textDecoration:'underline' }} className="f3 black" >
         <p className="pa2"onClick={()=>routechange('signoff')}>Sign Out</p>
      </nav>)

  }
}
export default Navigation;
