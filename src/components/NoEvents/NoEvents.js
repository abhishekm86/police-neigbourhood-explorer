import React, { Component } from 'react';
import imgNoEvent from '../../assets/images/no-events.png';
import './NoEvents.scss';
class NoEvents extends Component{
	render(){
		const { force, nbd } = this.props;
		return (
			<div className='NoEvents flexbox flex-d-column flex-ai-center'>
				<img width='280' className='m-b-35' src={imgNoEvent} alt="No Events found" />
				<h4 className='NoEvents__title m-b-30'>No events found {!!nbd ? 'in '+nbd : null} from {force}</h4>
				<p>We were not able to find any events matching your criteria.</p>
				<p>Try changing your search inputs to get more results.</p>
			</div>
		);
	}
}
export default NoEvents;