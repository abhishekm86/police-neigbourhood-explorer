import React, { Component } from 'react';
import './AppHeader.scss';
import mainlogo from '../../assets/images/main-logo.svg';
class AppHeader extends Component{
	render(){
		return (
			<header className="AppHeader">
		        <div className="App__container flexbox flex-ai-center">
		          	<h1 className="AppHeader__logo">
			            <a className="App__texthide" href='#home'>
			              Police Neighbourhood Explorer
			              <img src={mainlogo} alt='Police Neighbourhood Explorer' />
			            </a>
	          		</h1>
	        	</div>
	      	</header>
		);
	}
}
export default AppHeader;