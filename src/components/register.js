import React,{Component} from 'react';








class Register extends Component{

   constructor(props){
   	super(props);
   	this.state={
   		registeredemail:'',
   		registeredpass:'',
   		registeredname:'',
   		   	}
   		   }


 registername=(event)=>{
 	this.setState({registeredname:event.target.value})
 };
 registeremail=(event)=>{
 	this.setState({registeredemail:event.target.value})
 };
 registerpass=(event)=>{
 	this.setState({registeredpass:event.target.value})
 };

 savedata=()=>{
 	fetch('http://localhost:8080/register',{
   		   		method:'post',
   		   		headers:{'Content-Type':'application/json'},
   		   		body:JSON.stringify({
   		   			email:this.state.registeredemail,
   		   			password:this.state.registeredpass,name:this.state.registeredname}),})
 					.then(response=>response.json())
 					.then(user=>{if(user.id){
 						this.props.loaduser(user);
 						this.props.routechange('home');
   		   		 	 }else{document.querySelector('#res').innerHTML="wrong submission";}});
 }
  render(){
   return(
 <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
	<div>
    	<main className="pa4 black-80">
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Register</legend>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Name</label>
		        <input 
		        className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
		        type="text"
		        onChange={this.registername}
		         name="name" 
		          id="name"/>
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
		         type="email"
		         onChange={this.registeremail}
		          name="email-address" 
		           id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
		         type="password"
		         onChange={this.registerpass}
		          name="password" 
		           id="password"/>
		      </div>
	
		    </fieldset>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib tc" 
		      onClick={this.savedata} 
		       value="Register"
		       type='submit'/>
		    </div>

		    <p id="res"></p>
		    
		  </div>
		</main>
   </div>
</article>
   )
  }
}

export default Register;