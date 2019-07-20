import React, { Component } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import NoEvents from '../../components/NoEvents/NoEvents';
import './EventsList.scss';
class EventsList extends Component{
	
	render(){
		const { eventsData, selectedForce, selectedNBD } =  this.props;
		const dataLength = eventsData.length;
		const listing = (function(_this){
			if( dataLength > 0 ) {
				return (
					<React.Fragment>
						<h4 className='EventsList__title m-b-30'>Showing <b>{dataLength}</b> event{dataLength===1?'':'s'} in <b>{selectedNBD}</b> from <b>{selectedForce}</b></h4>
						{
							eventsData.map( ( event, index ) =>  <EventCard index={index} key={index + event.title.replace(/\s/g, '-')} { ...event } /> )
						}
					</React.Fragment>
				);
			} else{
				return <NoEvents force={selectedForce} nbd={selectedNBD} />
			}
		})(this);
		return(
			<main className='EventsList'>
				<div className="App__container flexbox flex-wrap">{ listing }</div>
			</main>
		)
	}
}
export default EventsList;