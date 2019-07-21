import React, { Component } from 'react';
import Moment from 'moment';
import './DataFilters.scss';
class DataFilters extends Component{
	constructor( props ){
		super(props);
		this.state = {
			filterByType: (props.filters.filterByType) ? props.filters.filterByType : '',
			filterByDate: (props.filters.filterByDate) ? props.filters.filterByDate : '',
			filterStartDate: (props.filters.filterStartDate) ? props.filters.filterStartDate : '',
			filterEndDate: (props.filters.filterEndDate) ? props.filters.filterEndDate : '',
			errorStartDate: false,
			errorEndDate: false,
			errorIncorrectEndDate: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.applyFilters = this.applyFilters.bind(this);
		this.resetFilterSelections = this.resetFilterSelections.bind(this);
	}
	handleChange( evt ){
		if(typeof evt !== 'undefined'){
			if( evt.target.name === 'filterStartDate' && evt.target.value.length > 0 )
				this.setState({errorStartDate: false});
			if( evt.target.name === 'filterEndDate' && evt.target.value.length > 0 ) {
				this.setState({errorEndDate: false});
			}
			this.setState({
				[evt.target.name] : evt.target.value
			});
		}
	}
	componentDidUpdate(){
		if(!!!this.props.filters && !this.props.isOpen){
			if(!!this.state.filterByType || !!this.state.filterByDate || !!this.state.filterStartDate || !!this.state.filterEndDate)
				this.resetFilterSelections();
		}
	}
	resetFilterSelections( evt ){
		try{
			if(!!evt)
				evt.preventDefault();
			const { filters } = this.props;
			this.setState({
				filterByType: (filters.filterByType) ? filters.filterByType : '',
				filterByDate: (filters.filterByDate) ? filters.filterByDate : '',
				filterStartDate: (filters.filterStartDate) ? filters.filterStartDate : '',
				filterEndDate: (filters.filterEndDate) ? filters.filterEndDate : '',
				errorStartDate: false,
				errorEndDate: false,
				errorIncorrectEndDate: false
			})
			this.props.closeFilterHandler();
		} catch (ex) {
			console.error("Error caught resetting filters selections: ", ex);
		}
	}
	applyFilters( evt ) {
		try{
			evt.preventDefault();
			const { filterByDate, filterEndDate, filterStartDate } = this.state;
			if( ( filterByDate === 'custom' ) && ( filterStartDate.length === 0 || filterEndDate.length === 0 || Moment(filterEndDate).diff(Moment(filterStartDate), 'days') < 0) ) {
				if( filterStartDate.length === 0 )
					this.setState({errorStartDate : true})
				else
					this.setState({errorStartDate : false});
				if( filterEndDate.length === 0 )
					this.setState({errorEndDate : true});
				else
					this.setState({errorEndDate : false});
				if( Moment(filterEndDate).diff(Moment(filterStartDate), 'days') < 0 ){
					this.setState({errorIncorrectEndDate: true});
				}
			} else {
				this.setState({
					errorStartDate : false,
					errorEndDate: false,
					errorIncorrectEndDate: false
				});
				this.props.togglePreloader(true);
				this.props.setApplyFilters( this.state, ()=>{
					this.props.togglePreloader(false);
					this.props.hideDataFilters();
				} );
			}
		} catch (ex) {
			console.error("Error caught applying filters in datafilters: ", ex);
		}
	}
	render(){
		const { isOpen, typeFilters } = this.props;
		const { errorStartDate, errorEndDate, errorIncorrectEndDate } = this.state;
		return (
			<section className= { !isOpen ? 'DataFilters App__hidden' : 'DataFilters' } >
				<div className="App__container">
					<div className="flexbox">
						<div className="DataFilters__filters m-r-30">
							<h3 className="DataFilters__title m-b-15">Event Type</h3>
							{
								( !!typeFilters && typeFilters.length > 0 ) ?
									<ul className="DataFilters__choices">
										{
											typeFilters.map( (type, index) =>
												<li key={index+type} className='m-b-15'>
													<label>
														<input className='m-r-5' type="radio" name="filterByType" value={ type } checked= { this.state.filterByType === type} onChange = { this.handleChange } /> { type }
													</label>
												</li>
											)
										}
									</ul>
								: null
							}
						</div>
						<div className="DataFilters__filters">
							<h3 className="DataFilters__title m-b-15">When</h3>
							<ul className="DataFilters__choices">
								<li className='m-b-15'>
									<label>
										<input type="radio" name="filterByDate" value='today' onChange = { this.handleChange } checked= { this.state.filterByDate === 'today' } /> Today
									</label>
								</li>
								<li className='m-b-15'>
									<label>
										<input type="radio" name="filterByDate" value='week' onChange = { this.handleChange } checked= { this.state.filterByDate === 'week' } /> Next 7 Days
									</label>
								</li>
								<li className='m-b-15'>
									<label>
										<input type="radio" name="filterByDate" value='fortnight' onChange = { this.handleChange } checked= { this.state.filterByDate === 'fortnight' } /> Next 15 Days
									</label>
								</li>
								<li className='m-b-15'>
									<label>
										<input type="radio" name="filterByDate" value='month' onChange = { this.handleChange } checked= { this.state.filterByDate === 'month' } /> Next 30 Days
									</label>
								</li>
								<li className='m-b-15'>
									<label className='m-b-15'>
										<input type="radio" name="filterByDate" value='custom' onChange = { this.handleChange } checked= { this.state.filterByDate === 'custom' } /> Custom Date Range
									</label>
									<div className={ this.state.filterByDate !== 'custom' ? "DataFilters__datewrap App__hidden flexbox flex-d-column p-l-25" : "DataFilters__datewrap flexbox flex-d-column p-l-25" } >
										<label className="flexbox m-b-10">
											<span className="DataFilters__datewraplabel m-r-5">Start Date: </span>
											<input type="date" name="filterStartDate" placeholder="Choose a start date" value={this.state.filterStartDate} onChange = { this.handleChange } />
										</label>
										{ errorStartDate ? <span className="App__errormsg">Please choose a start date!</span> : null }
										<label className="flexbox m-b-10">
											<span className="DataFilters__datewraplabel m-r-5">End Date: </span>
											<input type="date" name="filterEndDate" placeholder="Choose an end date" value={this.state.filterEndDate} onChange = { this.handleChange } />
										</label>
										{ errorEndDate ? <span className="App__errormsg">Please choose an end date!</span> : null }
										{ errorIncorrectEndDate ? <span className="App__errormsg">End date cannot be before the start date!</span> : null }
									</div>
								</li>
							</ul>
						</div>
					</div>
					<hr className='m-t-15 m-b-30' />
					<button className="App__btn App__btn--primary" type="Submit" onClick = {this.applyFilters} >Apply Filters</button>
					<button onClick={ this.resetFilterSelections } className="App__btn">Close</button>
				</div>
			</section>
		);
	}
}
export default DataFilters;