import React, { Component } from 'react';
import UserSelect from '../UserSelect/UserSelect';
import Noty from 'noty';
import 'noty/src/noty.scss';
import 'noty/src/themes/mint.scss';
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
				}, error =>{
					if(typeof cb_failure === 'function')
						cb_failure( error );
					else
						return error;
				}
			);
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
			},
			error => {
				console.log(error);
				new Noty({
				    text: 'Error getting force list!<br/>Please check your internet connection or try again in sometime...',
				    type: 'error',
				}).show();
				this.props.togglePreloader(false);
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
          },
          error => {
          	console.log(error);
			new Noty({
			    text: 'Error getting list of neighbourhoods!<br/>Please check your internet connection or try again in sometime...',
			    type: 'error',
			}).show();
          	this.props.togglePreloader(false);
          }
        );
  	}
	updateSelection( selection ){
		if(typeof selection['frmForce'] !== 'undefined') {
			this.setState( {
				frmNBD: '',
				frmForce: selection['frmForce']
			}, function(){
				this.getNBDData()
			});
		} else {
			this.setState(selection);
		}
	}
	handleSubmit ( evt ) {
		evt.preventDefault();
		const {frmForce, frmNBD} = this.state;
		if(frmForce.length > 0 && frmNBD.length > 0){
			this.props.togglePreloader(true);
			this.props.resetFilters();
			this.props.hideDataFilters();
			this.getDataFromAPI(
        		this.apiEndpoints.primary + this.apiEndpoints.events.replace(/{force}/, frmForce).replace(/{nbd}/, frmNBD),
        		(resp) => {
        			this.props.setEventsData(resp, () => {        				
						this.props.setForceChoice(this.getHRText(this.state.frmForce, this.state.dataForce))
						this.props.setNBDChoice(this.getHRText(this.state.frmNBD, this.state.dataNBD))
        				this.props.togglePreloader(false);
        				/*this.setState({
        					frmForce:'',
							frmNBD:''
        				});*/
        			});
        		},
        		error => {
		          	console.log(error);
					new Noty({
					    text: 'Error getting events!<br/>Please check your internet connection or try again in sometime...',
					    type: 'error',
					}).show();
		          	this.props.togglePreloader(false);
		          }
    		);
		}
	}
	render(){
		const {tagline } = this.props;
		const {frmForce, frmNBD} = this.state;
		return (
			<form onSubmit={ this.handleSubmit } className="SearchForm">
	            <p className="tagline">{tagline}</p>
	            <div className="flexbox">
	              <UserSelect
	                placeholder='Please select a force...'
	                selection ={frmForce}
	                name = 'frmForce'
	                updateSelection = {this.updateSelection}
	                data = { this.state.dataForce }
	                dataKeyName = 'id'
	                dataValueName = 'name'
	                emptyMessage = 'Getting forces data...' />
	              <UserSelect
	                placeholder='Please select a neighbourhood...'
	                selection ={frmNBD}
	                name = 'frmNBD'
	                updateSelection = {this.updateSelection}
	                data = { this.state.dataNBD }
	                dataKeyName = 'id'
	                dataValueName = 'name'
	                emptyMessage = 'Select a force to continue' />
	              <button className="App__btn App__btn--primary" type="submit">Search</button>
	            </div>
          	</form>
		);
	}
}
export default SearchForm;