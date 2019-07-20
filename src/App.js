import React, { Component } from 'react';
import 'reset-css';
import './App.scss';
import Preloader from './components/Preloader/Preloader';
import AppHeader from './components/AppHeader/AppHeader';
import AppSearch from './components/AppSearch/AppSearch';
import EventsList from './components/EventsList/EventsList';
import Moment from 'moment';
class App extends Component{
  constructor( props ){
    super(props);
    this.state = {
      filters:'',
      preloading: true,
      dataEvents: false,
      preFilterDataEvents: false,
      eventTypes: '',
      selectedForce: '',
      selectedNBD: '',
      filterApplied: false
    };
    this.togglePreloader = this.togglePreloader.bind(this);
    this.setEventsData = this.setEventsData.bind(this);
    this.getEventsData = this.getEventsData.bind(this);
    this.setForceChoice = this.setForceChoice.bind(this);
    this.setNBDChoice = this.setNBDChoice.bind(this);
    this.setApplyFilters = this.setApplyFilters.bind(this);
  }
  apiEndpoints = {
    primary: '//data.police.uk/api',
    forces: '/forces',
    neighbourhoods: '/{force}/neighbourhoods',
    events: '/{force}/{nbd}/events'
  };
  dayDataFilters = {
    'today':( function(t) {
      var _this = t;
      return function(){
        _this.setState((cst)=>( {
          dataEvents: cst.dataEvents.filter( (evt) =>{
            if( Moment(evt.start_date).diff(Moment(), 'days') === 0 )
              return true;
            else
              return false;
          } )
        }));
      }
    })(this),
    'week':(function(t){
      var _this = t;
      return function(){
        _this.setState((cst)=>( {
          dataEvents: cst.dataEvents.filter( (evt) =>{
            if( Moment(evt.start_date).diff(Moment(), 'days') < 8 )
              return true;
            else
              return false;
          } )
        }));
      }
    })(this),
    'fortnight':(function(t){
      var _this = t;
      return function(){
        _this.setState((cst)=>( {
          dataEvents: cst.dataEvents.filter( (evt) =>{
            if( Moment(evt.start_date).diff(Moment(), 'days') < 16 )
              return true;
            else
              return false;
          } )
        }));
      }
    })(this),
    'month':(function(t){
      var _this = t;
      return function(){
        _this.setState((cst)=>( {
          dataEvents: cst.dataEvents.filter( (evt) =>{
            if( Moment(evt.start_date).diff(Moment(), 'days') < 31 )
              return true;
            else
              return false;
          } )
        }));
      }
    })(this),
    'custom':(function(){
      return function(){
        console.log("Filtering by custom")
      }
    })()
  };
  getNewState( cst, root, key, value ) {
    let clonedState = JSON.parse( JSON.stringify( cst[ root ] ) );
    clonedState[key] = value;
    return clonedState;
  }
  togglePreloader( st ){
    this.setState({
      preloading: st
    })
  };
  setForceChoice( selection ){
    this.setState({
      selectedForce: selection
    });
  }
  setNBDChoice( selection ){
    this.setState({
      selectedNBD: selection
    });
  }
  setEventsData ( data, cb ) {
    this.setState({
      dataEvents: data
    }, function(){
      this.setState(
        ( cst ) => ( {
          eventTypes: [ ...new Set(cst.dataEvents.map( evt => evt.type ))]
        } )
      );
      if(typeof cb !== 'undefined')
        cb();
    });
  }
  getEventsData () {
    return this.state.dataEvents;
  }
  filterDataByEvent( evt ) {
    console.log('Filtering data by ', evt);
  }
  setApplyFilters ( filters, cb ) {
    if(! ( JSON.stringify(this.state.filters) === JSON.stringify(filters) ) ){
      if(!!this.state.preFilterDataEvents){
        this.setState((cst)=>({
          dataEvents: cst.preFilterDataEvents
        }), function(){
          this.setState((cst)=>({
            preFilterDataEvents: cst.dataEvents,
            filters: filters
          }), () => {
            const {filterByDate, filterByType } = this.state.filters;
            if( filterByDate !== 'undefined' && filterByType !== 'undefined' && filterByDate.length > 0 && filterByType.length > 0 ) {
              console.log("Both are set!")
            } else if(filterByDate !== 'undefined' && filterByDate.length > 0){
              if( typeof this.dayDataFilters[filterByDate]!== 'undefined' )
                this.dayDataFilters[filterByDate]();
            } else if( filterByType !== 'undefined' && filterByType.length > 0 ) {
              console.log("Event related set!")
              this.filterDataByEvent( filterByType );
            }
          });
        })  
      } else{
        this.setState((cst)=>({
          preFilterDataEvents: cst.dataEvents,
          filters: filters
        }), () => {
          const {filterByDate, filterByType } = this.state.filters;
          if( filterByDate !== 'undefined' && filterByType !== 'undefined' && filterByDate.length > 0 && filterByType.length > 0 ) {
            console.log("Both are set!")
          } else if(filterByDate !== 'undefined' && filterByDate.length > 0){
            if( typeof this.dayDataFilters[filterByDate]!== 'undefined' )
              this.dayDataFilters[filterByDate]();
          } else if( filterByType !== 'undefined' && filterByType.length > 0 ) {
            console.log("Event related set!")
            this.filterDataByEvent( filterByType );
          }
        });
      }
      
    }
    if(typeof cb !== 'undefined')
        cb();
  }
  render(){
    const { dataEvents, preloading, eventTypes, selectedForce, selectedNBD } = this.state;
    return (
    <div className={ (!!dataEvents) ? 'App instantiated' : 'App uninstantiated'} >
      <Preloader preloading = { preloading } />
      <AppHeader />
      <AppSearch
        typeFilters = { eventTypes }
        setEventsData = { this.setEventsData }
        togglePreloader = { this.togglePreloader }
        setForceChoice = { this.setForceChoice }
        setNBDChoice = { this.setNBDChoice }
        getEventsData = { this.getEventsData }
        setApplyFilters = { this.setApplyFilters }
      />
      {
        (!!dataEvents) ?
          <EventsList
            eventsData = { dataEvents }
            selectedForce = { selectedForce }
            selectedNBD = { selectedNBD }
          />
        : null
      }
    </div>
    );
  }
}
export default App;