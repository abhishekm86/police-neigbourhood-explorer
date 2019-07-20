import React, { Component } from 'react';
import Moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import './EventCard.scss';
class EventCard extends Component{
	static defaultProps = {
		title: 'Event Title',
		description: 'Event description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero a risus tempus accumsan. Interdum et malesuada fames ac.',
		address: 'Event address',
		type: 'Event type',
		start_date: 'Event Start Date',
		end_date: 'Event End Date'
	};
	getLocationIcon( width, height ){
		return (
			<svg width = {(!!width)?width:null} height = {(!!height)?height:null} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73">
		      <path d="M95.35 50.645c0 13.98-11.389 25.322-25.438 25.322-14.051 0-25.438-11.342-25.438-25.322 0-13.984 11.389-25.322 25.438-25.322C83.964 25.322 95.35 36.66 95.35 50.645m26.393 0C121.743 22.674 98.966 0 70.866 0 42.768 0 19.989 22.674 19.989 50.645c0 12.298 4.408 23.574 11.733 32.345l39.188 56.283 39.761-57.104a50.048 50.048 0 003.916-5.625l.402-.574h-.066a50.245 50.245 0 006.82-25.325" />
		    </svg>
		);
	}
	render(){
		const { title, description, address, type, start_date, end_date, index } = this.props;
		return (
			<div className={ ( (index + 1) % 4 === 0 ) ? "EventCard" : "EventCard m-r-30"}>
				<p className="EventCard__tag">{type}</p>
				<h3 className="EventCard__title">{title}</h3>
				<p className="EventCard__location">
					<span className="EventCard__locationicon">{this.getLocationIcon(false, 14)}</span>
					{address}
				</p>
				<div className="EventCard__desc">{ReactHtmlParser(description)}</div>
				<div className="flexbox flex-d-column">
					<p className="EventCard__date start flexbox flex-d-column">
						<span className="EventCard__datelabel">Starts At</span>
						<span className="datedata">{ Moment(start_date).format('dddd, Do MMMM, YYYY hh:mmA' ) }</span>
					</p>
					<p className="EventCard__date end flexbox flex-d-column">
						<span className="EventCard__datelabel">Ends At</span>
						<span className="datedata">{ Moment(end_date).format('dddd, Do MMMM, YYYY hh:mmA' ) }</span>
					</p>
				</div>
			</div>
		);
	}
}
export default EventCard;