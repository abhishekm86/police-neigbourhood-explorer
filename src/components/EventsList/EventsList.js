import React, { Component } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import NoEvents from '../../components/NoEvents/NoEvents';
import './EventsList.scss';
class EventsList extends Component{
	render(){
		const { eventsData, selectedForce, selectedNBD } =  this.props;
		const dataLength = eventsData.length;
		const listing = (()=>{
			if( dataLength > 0 ) {
				return (
					<React.Fragment>
						<h4 className='EventsList__title m-b-30'>Showing <b>{dataLength}</b> event{dataLength===1?'':'s'} in <b>{selectedNBD}</b> from <b>{selectedForce}</b></h4>
						<div className='EventsList__cardscontainer flexbox flex-wrap'>
							{
								eventsData.map( ( event, index ) =>  <EventCard index={index} key={index + event.title.replace(/\s/g, '-')} { ...event } /> )
							}
						</div>
					</React.Fragment>
				);
			} else{
				return <NoEvents force={selectedForce} nbd={selectedNBD} />
			}
		})();
		return(
			<main className='EventsList'>
				<div className="App__container">{ listing }</div>
			</main>
		)
	}
}
export default EventsList;