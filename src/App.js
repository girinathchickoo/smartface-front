import React,{Component} from 'react';
import './components/App.css';
import Navigation from './components/navigation';
import Logo from './components/logo';
import Tachyons from 'tachyons';
import Searchbox  from './components/searchbox';
import Imagefield  from './components/imagefield';
import Signin  from './components/signin';
import Register  from './components/register';
import Rank  from './components/rank';

import Particles from 'react-particles-js';
import logo from'./logo.png';
const particle={particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
 const Clarifai = require('clarifai');

const initialstate={
			input:'',
			imageurl:'',
			route:'signin',
			issign:false,
			user:{
				name:'',
				email:'',
				id:'',
				entries:0,

			},
			box:''

		}
class App extends  Component {
	constructor(){
		super();
		this.state=initialstate;
	}
 	 onChangeInput=(event)=>{
	 	     this.setState({input:event.target.value})

	 };



	 userset=(u)=>{
	 	
	 	this.setState({user:{
	 		name:u.name,
	 		email:u.email,
	 		id:u.id,
	 		entries:u.entries
	 	}})
	 	
	 };

	 

	 loadbox=(bax)=>{
		var image=document.getElementById('image')
		var width=Number(image.width);
		var height=Number(image.height);
		const box={
			 leftCol: bax.left_col * width,
     		 topRow: bax.top_row * height,
     		 rightCol: width - (bax.right_col * width),
     		 bottomRow: height - (bax.bottom_row * height)
		}
	 	return(box)
	 };
	 boundingbox=(box)=>{
	 	this.setState({box:box})
	 	


	 }

       

	 onSubmit=()=>{
	 		this.setState({imageurl:this.state.input});
              fetch('http://localhost:8080/imageurl', {
	            method: 'post',
	            headers: {'Content-Type': 'application/json'},
	            body: JSON.stringify({
	              input:this.state.input
	            })
	          }).then(response=>response.json())
	          .then(res=>{
	          	console.log(res)
				if (res) {
					this.boundingbox(this.loadbox(res))
	          fetch('http://localhost:8080/image', {
		            method: 'put',
		            headers: {'Content-Type': 'application/json'},
		            body: JSON.stringify({
		            id: this.state.user.id
	            })
	          }).then(response => response.json())
	          	.then(count=>this.setState(Object.assign(this.state.user,({entries:count}))))
	          	.catch(err=>console.log('no entry'))}})

	      
			
			
            
           
            .catch(err=>console.log(err))
            

		
         }
  
routechange=(route)=>{
	 	
	
	this.setState({route:route})
	if(route === 'signoff'){
		this.setState(initialstate)
	}else if(route==='home'){
		this.setState({issign:true})
	}
	
	
        				
			
        };
	 
	render(){
	   return (
	    <div className="tc f3">
	    	<Particles className='particle'
          params={particle}
        />
	    	<Navigation routechange={this.routechange}
	    	 isSigned={this.state.issign } 
	    	 route={this.state.route}
	    	 />
	    	{this.state.route==='signin'||this.state.route==='signout'
	    	?
	    		<Signin routechange={this.routechange} loaduser={this.userset}/>
	    	:
	    	(this.state.route==='register'?
	    		<Register routechange={this.routechange} loaduser={this.userset}/>
	    	:
	    

	    	<div>
	 
	    		    	<Logo />
	    		    	<Rank users={this.state.user}/>
		    	{'Detects the face in a picture, Give it a try!!'}
		  		<Searchbox onclickchange={this.onChangeInput}
		  		onsubmit={this.onSubmit}/>
		  		<Imagefield imagelink={this.state.imageurl} box={this.state.box}/>
		  	</div>)}
	    </div>
	  )};
}
export default App;

