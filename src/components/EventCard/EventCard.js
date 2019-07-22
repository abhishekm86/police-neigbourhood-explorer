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
			<svg width = {(!!width)?width:'16'} height = {(!!height)?height:'16'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73">
		      <path d="M95.35 50.645c0 13.98-11.389 25.322-25.438 25.322-14.051 0-25.438-11.342-25.438-25.322 0-13.984 11.389-25.322 25.438-25.322C83.964 25.322 95.35 36.66 95.35 50.645m26.393 0C121.743 22.674 98.966 0 70.866 0 42.768 0 19.989 22.674 19.989 50.645c0 12.298 4.408 23.574 11.733 32.345l39.188 56.283 39.761-57.104a50.048 50.048 0 003.916-5.625l.402-.574h-.066a50.245 50.245 0 006.82-25.325" />
		    </svg>
		);
	}
	getCalendarIcon( width, height ){
		return (
			<svg width = {(!!width)?width:'16'} height = {(!!height)?height:'16'} viewBox="0 0 16 16" version="1.1">
				<path d="M14.5,3.80960471 C14.5,3.3885806 14.16527,3.04761905 13.753683,3.04761905 C13.75,3.4684731 13.4171014,3.80952381 13,3.80952381 C12.5857864,3.80952381 12.25,3.47145398 12.25,3.04776572 L10.75,3.04761905 C10.75,3.4684731 10.4171014,3.80952381 10,3.80952381 C9.58578644,3.80952381 9.25,3.47145398 9.25,3.04776572 L7.75,3.04761905 C7.75,3.4684731 7.41710138,3.80952381 7,3.80952381 C6.58578644,3.80952381 6.25,3.47145398 6.25,3.04776572 L4.75,3.04761905 C4.75,3.4684731 4.41710138,3.80952381 4,3.80952381 C3.58578644,3.80952381 3.25,3.47145398 3.25,3.04776572 C2.83429619,3.04761905 2.5,3.38814731 2.5,3.80960471 L2.5,5.33333333 L14.5,5.33333333 L14.5,3.80960471 Z M2.5,6.85714286 L2.5,13.7142048 C2.5,14.1352289 2.83472997,14.4761905 3.24631697,14.4761905 L13.753683,14.4761905 C14.1657038,14.4761905 14.5,14.1356622 14.5,13.7142048 L14.5,6.85714286 L2.5,6.85714286 Z M16,3.80960471 L16,13.7142048 C16,14.9763117 14.9950464,16 13.753683,16 L3.24631697,16 C2.00539581,16 1,14.975887 1,13.7142048 L1,3.80960471 C1,2.54749779 2.00495356,1.52380952 3.24631697,1.52380952 L3.25,0.761758089 C3.25,0.341050713 3.58289862,0 4,0 C4.41421356,0 4.75,0.338069825 4.75,0.761758089 L4.75,1.52380952 L6.25,1.52380952 L6.25,0.761758089 C6.25,0.341050713 6.58289862,0 7,0 C7.41421356,0 7.75,0.338069825 7.75,0.761758089 L7.75,1.52380952 L9.25,1.52380952 L9.25,0.761758089 C9.25,0.341050713 9.58289862,0 10,0 C10.4142136,0 10.75,0.338069825 10.75,0.761758089 L10.75,1.52380952 L12.25,1.52380952 L12.25,0.761758089 C12.25,0.341050713 12.5828986,0 13,0 C13.4142136,0 13.75,0.338069825 13.75,0.761758089 L13.75,1.52380952 C14.9946042,1.52380952 16,2.54792253 16,3.80960471 Z"></path>
			</svg>
		);
	}
	render(){
		const { title, description, address, type, start_date, end_date } = this.props;
		return (
			<div className="EventCard flexbox flex-d-column">
				{
					(!!type && type.length > 0) ?
						<p className="EventCard__tag">{type}</p>
					: null
				}
				<div className="EventCard__sectiontop">
					<h3 className="EventCard__title">{title}</h3>
					{
						(!!address && address.length > 0) ?
						<p className="EventCard__location flexbox flex-d-row">
							<span className="EventCard__locationicon">{this.getLocationIcon(false, 14)}</span>
							{ ReactHtmlParser(address) }</p>
						: null
					}
					{
						(!!description && description.length > 0) ?
							<div className="EventCard__desc">{ReactHtmlParser(description)}</div>
						: null
					}
				</div>
				<div className="EventCard__sectionbottom">
					<div className="flexbox flex-d-column">
						{
							(!!start_date && start_date.length > 0) ?
								<p className="EventCard__date start flexbox flex-d-column">
									<span className="EventCard__datelabel flexbox flex-d-row">
										<span className="EventCard__dateicon">{this.getCalendarIcon(false, 14)}</span>Starts At
									</span>
									<span className="EventCard__datedata">{ Moment(start_date).format('dddd, Do MMMM, YYYY' ) } at { Moment(start_date).format('hh:mmA' ) }</span>
								</p>
							: null
						}
						{
							(!!end_date && end_date.length > 0) ?
								<p className="EventCard__date end flexbox flex-d-column">
									<span className="EventCard__datelabel flexbox flex-d-row">
										<span className="EventCard__dateicon">{this.getCalendarIcon(false, 14)}</span>Ends At
									</span>
									<span className="EventCard__datedata">{ Moment(end_date).format('dddd, Do MMMM, YYYY' ) } at { Moment(start_date).format('hh:mmA' ) }</span>
								</p>
							: null
						}
					</div>
				</div>
			</div>
		);
	}
}
export default EventCard;