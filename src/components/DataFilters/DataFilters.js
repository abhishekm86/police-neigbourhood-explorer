import React, { Component } from 'react';
import './DataFilters.scss';
class DataFilters extends Component{
	constructor( props ){
		super(props);
		this.state = {
			filterByType: '',
			filterByDate: '',
			filterStartDate: '',
			filterEndDate: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.applyFilters = this.applyFilters.bind(this);
	}
	handleChange( evt ){
		this.setState({
			[evt.target.name] : evt.target.value
		});
	}
	applyFilters( evt ) {
		evt.preventDefault();
		this.props.togglePreloader(true);
		this.props.setApplyFilters( this.state, ()=>{
			this.props.togglePreloader(false);
			this.props.hideDataFilters();
		} );
	}
	render(){
		const { closeFilterHandler, isOpen, typeFilters } = this.props;
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
														<input 
															className='m-r-5' 
															type="radio" 
															name="filterByType" 
															value={ type } 
															checked= { this.state.filterByType === type}
															onChange = { this.handleChange }
														/> {type}
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
										<input 
											type="radio" 
											name="filterByDate" 
											value='today' 
											onChange = { this.handleChange }
										/> Today
									</label>
								</li>
								<li className='m-b-15'>
									<label>
										<input 
											type="radio" 
											name="filterByDate" 
											value='week' 
											onChange = { this.handleChange }
										/> Next 7 Days
									</label>
								</li>
								<li className='m-b-15'>
									<label>
										<input 
											type="radio" 
											name="filterByDate" 
											value='fortnight'
											onChange = { this.handleChange } 
										/> Next 15 Days
									</label>
								</li>
								<li className='m-b-15'>
									<label>
										<input 
											type="radio" 
											name="filterByDate" 
											value='month'
											onChange = { this.handleChange } 
										/> Next 30 Days
									</label>
								</li>
								<li className='m-b-15'>
									<label className='m-b-15'>
										<input 
											type="radio" 
											name="filterByDate" 
											value='custom' 
											onChange = { this.handleChange }
										/> Custom Date Range
									</label>
									<div className={ this.state.filterByDate !== 'custom' ? "DataFilters__datewrap App__hidden flexbox flex-d-column p-l-25" : "DataFilters__datewrap flexbox flex-d-column p-l-25" } >
										<label className="flexbox m-b-10">
											<span className="DataFilters__datewraplabel m-r-5">Start Date: </span>
											<input 
												type="date" 
												name="filterStartDate" 
												placeholder="Choose a start date"
												onChange = { this.handleChange }
											 />
										</label>
										<label className="flexbox m-b-10">
											<span className="DataFilters__datewraplabel m-r-5">End Date: </span>
											<input 
												type="date" 
												name="filterEndDate" 
												placeholder="Choose an end date" 
												onChange = { this.handleChange }
											/>
										</label>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<hr className='m-t-15 m-b-30' />
					<button 
						className="App__btn DataFilters__btn--submit" 
						type="Submit"
						onClick = {this.applyFilters}
					>Apply Filters</button>
					<button onClick={ closeFilterHandler } className="App__btn">Close</button>
				</div>
			</section>
		);
	}
}
export default DataFilters;