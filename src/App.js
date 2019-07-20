import React, { Component } from 'react';
import Moment from 'moment';
import Preloader from './components/Preloader/Preloader';
import AppHeader from './components/AppHeader/AppHeader';
import AppSearch from './components/AppSearch/AppSearch';
import EventsList from './components/EventsList/EventsList';
import 'reset-css';
import './App.scss';
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
      filterApplied: false,
      init: false
    };
    this.togglePreloader = this.togglePreloader.bind(this);
    this.setEventsData = this.setEventsData.bind(this);
    this.getEventsData = this.getEventsData.bind(this);
    this.setForceChoice = this.setForceChoice.bind(this);
    this.setNBDChoice = this.setNBDChoice.bind(this);
    this.setApplyFilters = this.setApplyFilters.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }
  apiEndpoints = {
    primary: '//data.police.uk/api',
    forces: '/forces',
    neighbourhoods: '/{force}/neighbourhoods',
    events: '/{force}/{nbd}/events'
  };
  /*getNewState( cst, root, key, value ) {
    let clonedState = JSON.parse( JSON.stringify( cst[ root ] ) );
    clonedState[key] = value;
    return clonedState;
  }*/
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
      dataEvents: data,
      init: true
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
  getEventsData ( returnBackup ) {
    return returnBackup ? this.state.preFilterDataEvents : this.state.dataEvents;
  }
  filterDataByDate( choice ) {
    console.log("filtering by", choice);
    const diff =  (choice === 'today') ? 0
                : (choice === 'week') ? 8
                : (choice === 'fortnight') ? 16
                : (choice === 'month') ? 31
                : false
    if( !!diff || diff === 0 ) {
      this.setState( (cst)=>(
        {
          dataEvents: cst.dataEvents.filter( (evt) => {
            if( Moment(evt.start_date).diff(Moment(), 'days') < diff )
              return true;
            else
              return false;
          }),
          filterApplied: true
        }
      ));
    } else if( choice === 'custom' ){
      const { filterStartDate, filterEndDate } = this.state.filters;
      this.setState( (cst)=>(
        {
          dataEvents: cst.dataEvents.filter( (evt) => {
            if( Moment(evt.start_date).diff(Moment(filterStartDate), 'days') > -1 && Moment(filterEndDate).diff(Moment(evt.start_date), 'days') > -1 )
              return true;
            else
              return false;
          }),
          filterApplied: true
        }
      ));
    }
  }
  filterDataByEvent ( choice, cb ) {
    console.log("filtering by", choice);
    this.setState( (cst)=>(
      {
        dataEvents: cst.dataEvents.filter( (evt) => {
          if( evt.type === choice )
            return true;
          else
            return false;
        }),
        filterApplied: true
      }
    ), function(){
      if(typeof cb !== 'undefined')
        cb();
    });
  }
  backupEventsData( cb ){
    if(!!this.state.preFilterDataEvents){
        this.setState((cst)=>({
          dataEvents: cst.preFilterDataEvents
        }), function(){
          if(typeof cb !== 'undefined')
            cb();
        })
      } else {
        if(typeof cb !== 'undefined')
          cb();
      }
  }
  setApplyFilters ( filters, cb ) {
    if(! ( JSON.stringify(this.state.filters) === JSON.stringify(filters) ) ){
      this.backupEventsData( () => {
        this.setState((cst)=>({
          preFilterDataEvents: cst.dataEvents,
          filters: filters
        }), () => {
          const {filterByDate, filterByType } = this.state.filters;
          if( filterByDate !== 'undefined' && filterByType !== 'undefined' && filterByDate.length > 0 && filterByType.length > 0 ) {
            this.filterDataByDate( filterByDate, this.filterDataByEvent( filterByType ));
          } else if(filterByDate !== 'undefined' && filterByDate.length > 0){
            this.filterDataByDate(filterByDate);
          } else if( filterByType !== 'undefined' && filterByType.length > 0 ) {
            this.filterDataByEvent( filterByType );
          }
        });
      } );
    }
    if(typeof cb !== 'undefined')
        cb();
  }
  resetFilters ( cb ){
    this.setState(
      (cst) => ({
        dataEvents: cst.preFilterDataEvents,
        preFilterDataEvents: false,
        filters:'',
        filterApplied: false
      })
    )
  }
  render(){
    const {
      dataEvents,
      preloading,
      eventTypes,
      selectedForce,
      selectedNBD,
      filterApplied,
      filters,
      init } = this.state;
    return (
    <div className={ init ? 'App instantiated' : 'App uninstantiated'} >
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
        resetFilters = {this.resetFilters}
        filterApplied = { filterApplied }
        filters = { filters }
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