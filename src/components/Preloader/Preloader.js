import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './Preloader.scss';
import SiteIcon from '../../SiteIcon';
class Preloader extends Component{
	getPreloaderImage(){
    	return <svg width='100px' xmlns='http://www.w3.org/2000/svg'x='0'y='0'version='1.1'viewBox='0 0 100 100'xmlSpace='preserve'> <circle cx='50'cy='50'r='47'fill='none'stroke='#fff'strokeDasharray='14.2472,14.2472'strokeMiterlimit='15'strokeWidth='6'transform='rotate(16.742 50 50)'> <animateTransform attributeName='transform'attributeType='XML'dur='5s'from='0 50 50'repeatCount='indefinite'to='360 50 50'type='rotate'/> </circle> <circle cx='50'cy='50'r='39'fill='none'stroke='#fff'strokeDasharray='10,10'strokeMiterlimit='10'transform='rotate(-16.742 50 50)'> <animateTransform attributeName='transform'attributeType='XML'dur='5s'from='0 50 50'repeatCount='indefinite'to='-360 50 50'type='rotate'/> </circle> </svg>
    }
	render(){
		const { preloading, message } = this.props;
		return(
			<div className={ !!preloading ? "Preloader": "Preloader App__hidden"}>
				<span className="Preloader__icon">
					{ this.getPreloaderImage() }
					{ SiteIcon('50px') }
					<span className="Preloader__msg">{ReactHtmlParser(message)}</span>
				</span>
			</div>
		);
	}
}
export default Preloader;