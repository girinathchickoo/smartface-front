import React,{Component} from 'react';




class Signin extends Component{

   constructor(props){
   	super(props);
   	this.state={
   		signinemail:'',
   		signinpass:'',
   		
   		   	}
   		   }
   		
   		   setemail=(event)=>{
   		   	this.setState({signinemail:event.target.value})
   		   	
   		   };
   		
   		    setpass=(event)=>{
   		    	this.setState({signinpass:event.target.value})
   		   	 	
   		

   		   };
   		
   		   SigninCheck=(event)=>{

   		   	fetch('http://localhost:8080/signin',{
   		   		method:'post',
   		   		headers:{'Content-Type':'application/json'},
   		   		body:JSON.stringify({
   		   			email:this.state.signinemail,
   		   			password:this.state.signinpass}),
   		   		 	}).then(response=>response.json()).then(user=>{if(user.id){
   		   		 			this.props.loaduser(user);
   		   		 			this.props.routechange('home');
   		   		 		}else{

   		   		 			document.querySelector('#res').innerHTML="account does'nt exists";
   		   		 		}
   		   		 	})};
	render(){
  
   		return(

 <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
	<div>
    	<main className="pa4 black-80">
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input 
		          
		          className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
		          type="email"
		          
		          name="email-address"
		          id="email-address"
		          onChange={this.setemail} />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input
		         className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
		          type="password" 
		   			name="current-password" 
		   			
		           id="current-password"
		           onChange={this.setpass}/>
		      </div>
	
		    </fieldset>
		    <div className="">
		      <input

		       className="b near-black ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4  dib tc " 
		      onClick={this.SigninCheck}
		      value="Sign in"
		      type="submit"/>
		    </div>
		    <div className="lh-copy mt3">
		      <p className="f6 link dim black db" 
		      onClick={()=>this.props.routechange('register')}>Sign up</p>
		      
		    </div>
		    <p id="res"></p>
		  </div>
		</main>
   </div>
</article>
   )
  }
}

export default Signin;

