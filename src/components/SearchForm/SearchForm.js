import React, { Component } from 'react';
import UserSelect from '../UserSelect/UserSelect';
import './SearchForm.scss';
class SearchForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			frmForce: '',
			frmNBD: '',
			dataForce: '',
			dataNBD: ''
		}
		this.updateSelection = this.updateSelection.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	getHRText(needle, haystack){
		const filtered =  haystack.filter((n)=>{
			if( needle === n.id )
				return true
			return false
		});
		if(filtered.length > 0){
			return filtered[0].name;
		}
		return false;
	}
	getDataFromAPI ( url, cb_success, cb_failure ) {
		fetch( url )
			.then( resp => resp.json() )
			.then( resp => {
				if(typeof cb_success === 'function')
					cb_success( resp );
				else
					return resp;
			});
	}
	apiEndpoints = {
		primary: '//data.police.uk/api',
		forces: '/forces',
		neighbourhoods: '/{force}/neighbourhoods',
		events: '/{force}/{nbd}/events'
	};
	componentDidMount() {
		this.populateForcesData()
	}
	populateForcesData () {
		this.getDataFromAPI (
			this.apiEndpoints.primary + this.apiEndpoints.forces,
			resp => {
				this.setState({
					dataForce: resp
				}, function () {
					this.props.togglePreloader(false);
				})
			}
		);
	}
	getNBDData( ) {
	    this.props.togglePreloader(true);
	    this.getDataFromAPI (
          this.apiEndpoints.primary + this.apiEndpoints.neighbourhoods.replace(/{force}/, this.state.frmForce ),
          resp => {
            this.setState({
            	dataNBD:resp
            }, function(){
            	this.props.togglePreloader(false);
            });
          }
        );
  	}
	updateSelection( selection ){
		if(typeof selection['frmForce'] !== 'undefined') {
			this.setState( {
				frmNBD: '',
				frmForce: selection['frmForce']
			}, function(){
				this.props.setForceChoice(this.getHRText(this.state.frmForce, this.state.dataForce))
				this.getNBDData()
			});
		} else {
			this.setState(selection, function(){
				this.props.setNBDChoice(this.getHRText(this.state.frmNBD, this.state.dataNBD))
			});
		}
	}
	handleSubmit ( evt ) {
		evt.preventDefault();
		const {frmForce, frmNBD} = this.state;
		if(frmForce.length > 0 && frmNBD.length > 0){
			this.props.togglePreloader(true);
			this.getDataFromAPI(
        		this.apiEndpoints.primary + this.apiEndpoints.events.replace(/{force}/, frmForce).replace(/{nbd}/, frmNBD),
        		(resp) => {
        			this.props.setEventsData(resp, () => {
        				this.props.togglePreloader(false);
        			});
        		});
		}
	}
	render(){
		const {
			tagline
		} = this.props;

		return (
			<form onSubmit={ this.handleSubmit } className="SearchForm">
	            <p className="tagline">{tagline}</p>
	            <div className="flex">
	              <UserSelect
	                placeholder='Please select a force...'
	                name = 'frmForce'
	                updateSelection = {this.updateSelection}
	                data = { this.state.dataForce }
	                dataKeyName = 'id'
	                dataValueName = 'name'
	                emptyMessage = 'Getting forces data...' />
	              <UserSelect
	                placeholder='Please select a neighbourhood...'
	                name = 'frmNBD'
	                updateSelection = {this.updateSelection}
	                data = { this.state.dataNBD }
	                dataKeyName = 'id'
	                dataValueName = 'name'
	                emptyMessage = 'Select a force to continue' />
	              <button className="App__btn" type="submit">Search</button>
	            </div>
          	</form>
		);
	}
}
export default SearchForm;