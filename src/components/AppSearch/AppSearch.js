import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import DataFilters from '../../components/DataFilters/DataFilters';
import FilterControls from '../../components/FilterControls/FilterControls';
import './AppSearch.scss';
class AppSearch extends Component{
	constructor( props ){
		super( props );
		this.state = {
			filterVisible: false
		};
		this.toggleDataFilters = this.toggleDataFilters.bind(this);
    	this.hideDataFilters = this.hideDataFilters.bind(this);
	}
	toggleDataFilters ( ) {
		this.setState( (cst) => ({
			filterVisible: !cst.filterVisible
		}));
	}
	hideDataFilters( ) {
		this.setState({
			filterVisible: false
		});
	}
	render(){
		const { setEventsData, getEventsData, togglePreloader, typeFilters, setForceChoice, setNBDChoice, setApplyFilters, resetFilters, filterApplied, filters } = this.props;
		const { filterVisible } = this.state;
		const eventsData = getEventsData();
		const backupEventsData = getEventsData(true);
		return (
			<section className='AppSearch'>
		        <div className="App__container flexbox flex-ai-center">
		          	<SearchForm
		          		setEventsData = { setEventsData }
			          	tagline = 'Discover events near you...'
			            togglePreloader = { togglePreloader }
			            setForceChoice = { setForceChoice }
						setNBDChoice = { setNBDChoice }
						resetFilters = { resetFilters }
		          	/>
		          	{
			            ( (!!eventsData && eventsData.length > 0) || (!!backupEventsData && backupEventsData.length > 0)) ?
			            	<React.Fragment>
			            		<FilterControls
			            			filterApplied = { filterApplied }
			            			visible = { filterVisible }
			            			openFilterHandler ={ this.toggleDataFilters }
			            			resetFilters = { resetFilters }
		            			/>
			            		<DataFilters 
			            			hideDataFilters={ this.hideDataFilters } 
			            			togglePreloader = { togglePreloader } 
			            			setApplyFilters = {setApplyFilters} 
			            			typeFilters = { typeFilters } 
			            			closeFilterHandler = { this.hideDataFilters } 
			            			isOpen = { filterVisible }
			            			filters = { filters } />
			            	</React.Fragment>
		            	: null
		          	}
		        </div>
		      </section>
		);
	}
}
export default AppSearch;