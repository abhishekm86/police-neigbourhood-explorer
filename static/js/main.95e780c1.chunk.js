(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/main-logo.f62d0a75.svg"},35:function(e,t,a){e.exports=a.p+"static/media/no-events.6db902d3.png"},37:function(e,t,a){e.exports=a(90)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},63:function(e,t){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(33),l=a.n(s),i=a(36),o=a(2),c=a(3),d=a(5),p=a(4),u=a(1),h=a(6),f=a(7),m=a.n(f),E=a(8),g=a.n(E);a(43);var v=function(e){return n.a.createElement("svg",{width:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115 70"},n.a.createElement("g",{className:"containerBody"},n.a.createElement("g",{className:"sampleIconBox"},n.a.createElement("path",{fill:"#ffffd9",className:"0",d:"M23.34-14.1q0 3.06-2.18 5.28-2.21 2.18-5.27 2.18V0q5.84 0 9.95-4.15 4.15-4.11 4.15-9.95 0-5.87-4.15-9.98-4.11-4.15-9.95-4.15-5.87 0-9.98 4.15-4.15 4.11-4.15 9.98v34.03H8.4V-14.1q0-3.09 2.18-5.31 2.22-2.18 5.31-2.18 3.06 0 5.27 2.18 2.18 2.22 2.18 5.31zM40.15 0v-14.13q0-3.06 2.18-5.28 2.21-2.18 5.31-2.18 3.06 0 5.27 2.18 2.18 2.22 2.18 5.28V0h6.64v-14.13q0-5.84-4.14-9.95-4.12-4.15-9.95-4.15-5.87 0-9.99 4.15-4.15 4.11-4.15 9.95V0h6.65zm39.23-28.23q-5.87 0-9.98 4.15-4.15 4.11-4.15 9.95 0 5.62 3.87 9.7 3.86 4.08 9.42 4.39V0h.84v-6.64q-3.09 0-5.31-2.18-2.18-2.22-2.18-5.31 0-3.06 2.18-5.28 2.22-2.18 5.31-2.18 4.61 0 6.68 4.15h-5.87v6.65h13.29v-3.34q0-5.84-4.15-9.95-4.11-4.15-9.95-4.15z",transform:"translate(10 40)"}))))},y=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getPreloaderImage",value:function(){return n.a.createElement("svg",{width:"6vw",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",version:"1.1",viewBox:"0 0 100 100",xmlSpace:"preserve"}," ",n.a.createElement("circle",{cx:"50",cy:"50",r:"47",fill:"none",stroke:"#fff",strokeDasharray:"14.2472,14.2472",strokeMiterlimit:"15",strokeWidth:"6",transform:"rotate(16.742 50 50)"}," ",n.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"5s",from:"0 50 50",repeatCount:"indefinite",to:"360 50 50",type:"rotate"})," ")," ",n.a.createElement("circle",{cx:"50",cy:"50",r:"39",fill:"none",stroke:"#fff",strokeDasharray:"10,10",strokeMiterlimit:"10",transform:"rotate(-16.742 50 50)"}," ",n.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"5s",from:"0 50 50",repeatCount:"indefinite",to:"-360 50 50",type:"rotate"})," ")," ")}},{key:"render",value:function(){var e=this.props.preloading;return n.a.createElement("div",{className:e?"Preloader":"Preloader App__hidden"},n.a.createElement("span",{className:"Preloader__icon"},this.getPreloaderImage(),v("3vw")))}}]),t}(r.Component),b=(a(44),a(34)),D=a.n(b),F=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"AppHeader"},n.a.createElement("div",{className:"App__container flexbox flex-ai-center"},n.a.createElement("h1",{className:"AppHeader__logo"},n.a.createElement("a",{className:"App__texthide",href:"#home"},"Police Neighbourhood Explorer",n.a.createElement("img",{src:D.a,alt:"Police Neighbourhood Explorer"})))))}}]),t}(r.Component),N=a(11),_=(a(45),a(13)),O=a.n(_),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(N.a)({},e.name,""),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value),function(){try{this.props.updateSelection(this.state)}catch(e){console.error("Error caught udpating parent selections: ",e)}})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.placeholder,r=e.data,s=e.dataKeyName,l=e.dataValueName,i=e.emptyMessage,o=e.selection,c=r&&r.length>0?n.a.createElement("option",{value:"",disabled:"disabled"},a):null;return n.a.createElement("select",{value:o,name:t,id:t,onChange:this.handleChange,className:"UserSelect",disabled:!(r&&r.length>0)},c,r&&r.length>0?r.map(function(e){return n.a.createElement("option",{key:e[s],value:e[s]},O()(e[l]))}):n.a.createElement("option",{value:""}," ",i," "))}}]),t}(r.Component),j=(a(17),a(18),a(81),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).apiEndpoints={primary:"//data.police.uk/api",forces:"/forces",neighbourhoods:"/{force}/neighbourhoods",events:"/{force}/{nbd}/events"},a.state={frmForce:"",frmNBD:"",dataForce:"",dataNBD:""},a.updateSelection=a.updateSelection.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getHRText",value:function(e,t){try{var a=t.filter(function(t){return e===t.id});return a.length>0&&a[0].name}catch(r){return console.error("Error caught getting human readable text: ",r),!1}}},{key:"getDataFromAPI",value:function(e,t,a){fetch(e).then(function(e){return e.json()}).then(function(e){if("function"!==typeof t)return e;try{t(e)}catch(a){console.error("Error caught processing API data: ",a,t)}},function(e){if("function"!==typeof a)return e;try{a(e)}catch(t){console.error("Error caught handling API error: ",t,a)}})}},{key:"componentDidMount",value:function(){try{this.populateForcesData()}catch(e){console.error("Error caught running post mount: ",e)}}},{key:"populateForcesData",value:function(){var e=this;try{this.getDataFromAPI(this.apiEndpoints.primary+this.apiEndpoints.forces,function(t){e.setState({dataForce:t},function(){this.props.togglePreloader(!1)})},function(t){console.error(t),new g.a({text:"Error getting force list!<br/>Please check your internet connection or try again in sometime...",type:"error"}).show(),e.props.togglePreloader(!1)})}catch(t){console.error("Error caught getting forces list: ",t),this.props.togglePreloader(!1)}}},{key:"getNBDData",value:function(){var e=this;try{this.props.togglePreloader(!0),this.getDataFromAPI(this.apiEndpoints.primary+this.apiEndpoints.neighbourhoods.replace(/{force}/,this.state.frmForce),function(t){e.setState({dataNBD:t},function(){this.props.togglePreloader(!1)})},function(t){console.error(t),new g.a({text:"Error getting list of neighbourhoods!<br/>Please check your internet connection or try again in sometime...",type:"error"}).show(),e.props.togglePreloader(!1)})}catch(t){console.error("Error caught getting neighbourhoods list: ",t),this.props.togglePreloader(!1)}}},{key:"updateSelection",value:function(e){"undefined"!==typeof e&&"undefined"!==typeof e.frmForce?this.setState({frmNBD:"",frmForce:e.frmForce},function(){this.getNBDData()}):this.setState(e)}},{key:"handleSubmit",value:function(e){var t=this;try{e.preventDefault();var a=this.state,r=a.frmForce,n=a.frmNBD;r.length>0&&n.length>0&&(this.props.togglePreloader(!0),this.props.resetFilters(),this.props.hideDataFilters(),this.getDataFromAPI(this.apiEndpoints.primary+this.apiEndpoints.events.replace(/{force}/,r).replace(/{nbd}/,n),function(e){t.props.setEventsData(e,function(){t.props.setForceChoice(t.getHRText(t.state.frmForce,t.state.dataForce)),t.props.setNBDChoice(t.getHRText(t.state.frmNBD,t.state.dataNBD)),t.props.togglePreloader(!1)})},function(e){console.error(e),new g.a({text:"Error getting events!<br/>Please check your internet connection or try again in sometime...",type:"error"}).show(),t.props.togglePreloader(!1)}))}catch(s){console.error("Error caught in events search",s)}}},{key:"render",value:function(){var e=this.props.tagline,t=this.state,a=t.frmForce,r=t.frmNBD;return n.a.createElement("form",{onSubmit:this.handleSubmit,className:"SearchForm"},n.a.createElement("p",{className:"tagline"},e),n.a.createElement("div",{className:"flexbox"},n.a.createElement(S,{placeholder:"Please select a force...",selection:a,name:"frmForce",updateSelection:this.updateSelection,data:this.state.dataForce,dataKeyName:"id",dataValueName:"name",emptyMessage:"Getting forces data..."}),n.a.createElement(S,{placeholder:"Please select a neighbourhood...",selection:r,name:"frmNBD",updateSelection:this.updateSelection,data:this.state.dataNBD,dataKeyName:"id",dataValueName:"name",emptyMessage:"Select a force to continue"}),n.a.createElement("button",{className:"App__btn App__btn--primary",type:"submit"},"Search")))}}]),t}(r.Component)),x=(a(82),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={filterByType:e.filters.filterByType?e.filters.filterByType:"",filterByDate:e.filters.filterByDate?e.filters.filterByDate:"",filterStartDate:e.filters.filterStartDate?e.filters.filterStartDate:"",filterEndDate:e.filters.filterEndDate?e.filters.filterEndDate:"",errorStartDate:!1,errorEndDate:!1,errorIncorrectEndDate:!1},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.applyFilters=a.applyFilters.bind(Object(u.a)(a)),a.resetFilterSelections=a.resetFilterSelections.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){"undefined"!==typeof e&&("filterStartDate"===e.target.name&&e.target.value.length>0&&this.setState({errorStartDate:!1}),"filterEndDate"===e.target.name&&e.target.value.length>0&&this.setState({errorEndDate:!1}),this.setState(Object(N.a)({},e.target.name,e.target.value)))}},{key:"resetFilterSelections",value:function(e){try{e.preventDefault();var t=this.props.filters;this.setState({filterByType:t.filterByType?t.filterByType:"",filterByDate:t.filterByDate?t.filterByDate:"",filterStartDate:t.filterStartDate?t.filterStartDate:"",filterEndDate:t.filterEndDate?t.filterEndDate:"",errorStartDate:!1,errorEndDate:!1,errorIncorrectEndDate:!1}),this.props.closeFilterHandler()}catch(a){console.error("Error caught resetting filters selections: ",a)}}},{key:"applyFilters",value:function(e){var t=this;try{e.preventDefault();var a=this.state,r=a.filterByDate,n=a.filterEndDate,s=a.filterStartDate;"custom"===r&&(0===s.length||0===n.length||m()(n).diff(m()(s),"days")<0)?(0===s.length?this.setState({errorStartDate:!0}):this.setState({errorStartDate:!1}),0===n.length?this.setState({errorEndDate:!0}):this.setState({errorEndDate:!1}),m()(n).diff(m()(s),"days")<0&&this.setState({errorIncorrectEndDate:!0})):(this.setState({errorStartDate:!1,errorEndDate:!1,errorIncorrectEndDate:!1}),this.props.togglePreloader(!0),this.props.setApplyFilters(this.state,function(){t.props.togglePreloader(!1),t.props.hideDataFilters()}))}catch(l){console.error("Error caught applying filters in datafilters: ",l)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.isOpen,r=t.typeFilters,s=this.state,l=s.errorStartDate,i=s.errorEndDate,o=s.errorIncorrectEndDate;return n.a.createElement("section",{className:a?"DataFilters":"DataFilters App__hidden"},n.a.createElement("div",{className:"App__container"},n.a.createElement("div",{className:"flexbox"},n.a.createElement("div",{className:"DataFilters__filters m-r-30"},n.a.createElement("h3",{className:"DataFilters__title m-b-15"},"Event Type"),r&&r.length>0?n.a.createElement("ul",{className:"DataFilters__choices"},r.map(function(t,a){return n.a.createElement("li",{key:a+t,className:"m-b-15"},n.a.createElement("label",null,n.a.createElement("input",{className:"m-r-5",type:"radio",name:"filterByType",value:t,checked:e.state.filterByType===t,onChange:e.handleChange})," ",t))})):null),n.a.createElement("div",{className:"DataFilters__filters"},n.a.createElement("h3",{className:"DataFilters__title m-b-15"},"When"),n.a.createElement("ul",{className:"DataFilters__choices"},n.a.createElement("li",{className:"m-b-15"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"filterByDate",value:"today",onChange:this.handleChange,checked:"today"===this.state.filterByDate})," Today")),n.a.createElement("li",{className:"m-b-15"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"filterByDate",value:"week",onChange:this.handleChange,checked:"week"===this.state.filterByDate})," Next 7 Days")),n.a.createElement("li",{className:"m-b-15"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"filterByDate",value:"fortnight",onChange:this.handleChange,checked:"fortnight"===this.state.filterByDate})," Next 15 Days")),n.a.createElement("li",{className:"m-b-15"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"filterByDate",value:"month",onChange:this.handleChange,checked:"month"===this.state.filterByDate})," Next 30 Days")),n.a.createElement("li",{className:"m-b-15"},n.a.createElement("label",{className:"m-b-15"},n.a.createElement("input",{type:"radio",name:"filterByDate",value:"custom",onChange:this.handleChange,checked:"custom"===this.state.filterByDate})," Custom Date Range"),n.a.createElement("div",{className:"custom"!==this.state.filterByDate?"DataFilters__datewrap App__hidden flexbox flex-d-column p-l-25":"DataFilters__datewrap flexbox flex-d-column p-l-25"},n.a.createElement("label",{className:"flexbox m-b-10"},n.a.createElement("span",{className:"DataFilters__datewraplabel m-r-5"},"Start Date: "),n.a.createElement("input",{type:"date",name:"filterStartDate",placeholder:"Choose a start date",value:this.state.filterStartDate,onChange:this.handleChange})),l?n.a.createElement("span",{className:"App__errormsg"},"Please choose a start date!"):null,n.a.createElement("label",{className:"flexbox m-b-10"},n.a.createElement("span",{className:"DataFilters__datewraplabel m-r-5"},"End Date: "),n.a.createElement("input",{type:"date",name:"filterEndDate",placeholder:"Choose an end date",value:this.state.filterEndDate,onChange:this.handleChange})),i?n.a.createElement("span",{className:"App__errormsg"},"Please choose an end date!"):null,o?n.a.createElement("span",{className:"App__errormsg"},"End date cannot be before the start date!"):null))))),n.a.createElement("hr",{className:"m-t-15 m-b-30"}),n.a.createElement("button",{className:"App__btn App__btn--primary",type:"Submit",onClick:this.applyFilters},"Apply Filters"),n.a.createElement("button",{onClick:this.resetFilterSelections,className:"App__btn"},"Close")))}}]),t}(r.Component)),C=(a(83),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).resetFilters=a.resetFilters.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"resetFilters",value:function(){try{new g.a({timeout:3e3,text:"Filters have been reset!",type:"success"}).show(),this.props.resetFilters()}catch(e){console.error("Error caught resetting filters: ",e)}}},{key:"render",value:function(){var e=this.props,t=e.visible,a=e.openFilterHandler,r=e.filterApplied;return n.a.createElement("section",{className:"FilterControls flexbox"},n.a.createElement("button",{onClick:a,className:t?"flexbox App__btn App__btn--active":"flexbox App__btn"},n.a.createElement("span",{className:"App__btnicon"},n.a.createElement("svg",{height:"16",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}," ",n.a.createElement("path",{d:"M8,12.14V2H6V12.14a4,4,0,0,0,0,7.72V30H8V19.86a4,4,0,0,0,0-7.72ZM7,18a2,2,0,1,1,2-2A2,2,0,0,1,7,18Z"})," ",n.a.createElement("path",{d:"M17,20.14V2H15V20.14a4,4,0,0,0,0,7.72V30h2V27.86a4,4,0,0,0,0-7.72ZM16,26a2,2,0,1,1,2-2A2,2,0,0,1,16,26Z"})," ",n.a.createElement("path",{d:"M29,8a4,4,0,0,0-3-3.86V2H24V4.14a4,4,0,0,0,0,7.72V30h2V11.86A4,4,0,0,0,29,8Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,25,10Z"})," ")),"Filters"),r?n.a.createElement("button",{onClick:this.resetFilters,className:"App__btn flexbox"},"Reset Filters"):null)}}]),t}(r.Component)),k=(a(84),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={filterVisible:!1},a.toggleDataFilters=a.toggleDataFilters.bind(Object(u.a)(a)),a.hideDataFilters=a.hideDataFilters.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggleDataFilters",value:function(){this.setState(function(e){return{filterVisible:!e.filterVisible}})}},{key:"hideDataFilters",value:function(){this.setState({filterVisible:!1})}},{key:"render",value:function(){var e=this.props,t=e.setEventsData,a=e.getEventsData,r=e.togglePreloader,s=e.typeFilters,l=e.setForceChoice,i=e.setNBDChoice,o=e.setApplyFilters,c=e.resetFilters,d=e.filterApplied,p=e.filters,u=this.state.filterVisible,h=a(),f=a(!0);return n.a.createElement("section",{className:"AppSearch"},n.a.createElement("div",{className:"App__container flexbox flex-ai-center"},n.a.createElement(j,{setEventsData:t,tagline:"Discover events near you...",togglePreloader:r,setForceChoice:l,setNBDChoice:i,resetFilters:c,hideDataFilters:this.hideDataFilters}),h&&h.length>0||f&&f.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(C,{filterApplied:d,visible:u,openFilterHandler:this.toggleDataFilters,resetFilters:c}),n.a.createElement(x,{hideDataFilters:this.hideDataFilters,togglePreloader:r,setApplyFilters:o,typeFilters:s,closeFilterHandler:this.hideDataFilters,isOpen:u,filters:p})):null))}}]),t}(r.Component)),B=(a(85),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getLocationIcon",value:function(e,t){return n.a.createElement("svg",{width:e||null,height:t||null,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 141.73 141.73"},n.a.createElement("path",{d:"M95.35 50.645c0 13.98-11.389 25.322-25.438 25.322-14.051 0-25.438-11.342-25.438-25.322 0-13.984 11.389-25.322 25.438-25.322C83.964 25.322 95.35 36.66 95.35 50.645m26.393 0C121.743 22.674 98.966 0 70.866 0 42.768 0 19.989 22.674 19.989 50.645c0 12.298 4.408 23.574 11.733 32.345l39.188 56.283 39.761-57.104a50.048 50.048 0 003.916-5.625l.402-.574h-.066a50.245 50.245 0 006.82-25.325"}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,r=e.address,s=e.type,l=e.start_date,i=e.end_date;return n.a.createElement("div",{className:"EventCard"},n.a.createElement("p",{className:"EventCard__tag"},s),n.a.createElement("h3",{className:"EventCard__title"},t),n.a.createElement("p",{className:"EventCard__location"},n.a.createElement("span",{className:"EventCard__locationicon"},this.getLocationIcon(!1,14)),r),n.a.createElement("div",{className:"EventCard__desc"},O()(a)),n.a.createElement("div",{className:"flexbox flex-d-column"},n.a.createElement("p",{className:"EventCard__date start flexbox flex-d-column"},n.a.createElement("span",{className:"EventCard__datelabel"},"Starts At"),n.a.createElement("span",{className:"datedata"},m()(l).format("dddd, Do MMMM, YYYY hh:mmA"))),n.a.createElement("p",{className:"EventCard__date end flexbox flex-d-column"},n.a.createElement("span",{className:"EventCard__datelabel"},"Ends At"),n.a.createElement("span",{className:"datedata"},m()(i).format("dddd, Do MMMM, YYYY hh:mmA")))))}}]),t}(r.Component));B.defaultProps={title:"Event Title",description:"Event description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero a risus tempus accumsan. Interdum et malesuada fames ac.",address:"Event address",type:"Event type",start_date:"Event Start Date",end_date:"Event End Date"};var A=B,w=a(35),P=a.n(w),V=(a(86),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.force,a=e.nbd;return n.a.createElement("div",{className:"NoEvents flexbox flex-d-column flex-ai-center"},n.a.createElement("img",{width:"280",className:"m-b-35",src:P.a,alt:"No Events found"}),n.a.createElement("h4",{className:"NoEvents__title m-b-30"},"No events found ",a?"in "+a:null," from ",t),n.a.createElement("p",null,"We were not able to find any events matching your criteria."),n.a.createElement("p",null,"Try changing your search inputs to get more results."))}}]),t}(r.Component)),M=(a(87),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.eventsData,a=e.selectedForce,r=e.selectedNBD,s=t.length,l=s>0?n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"EventsList__title m-b-30"},"Showing ",n.a.createElement("b",null,s)," event",1===s?"":"s"," in ",n.a.createElement("b",null,r)," from ",n.a.createElement("b",null,a)),n.a.createElement("div",{className:"EventsList__cardscontainer flexbox flex-wrap"},t.map(function(e,t){return n.a.createElement(A,Object.assign({index:t,key:t+e.title.replace(/\s/g,"-")},e))}))):n.a.createElement(V,{force:a,nbd:r});return n.a.createElement("main",{className:"EventsList"},n.a.createElement("div",{className:"App__container"},l))}}]),t}(r.Component)),T=(a(88),a(89),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={filters:"",preloading:!0,dataEvents:!1,preFilterDataEvents:!1,eventTypes:"",selectedForce:"",selectedNBD:"",filterApplied:!1,init:!1},a.togglePreloader=a.togglePreloader.bind(Object(u.a)(a)),a.setEventsData=a.setEventsData.bind(Object(u.a)(a)),a.getEventsData=a.getEventsData.bind(Object(u.a)(a)),a.setForceChoice=a.setForceChoice.bind(Object(u.a)(a)),a.setNBDChoice=a.setNBDChoice.bind(Object(u.a)(a)),a.setApplyFilters=a.setApplyFilters.bind(Object(u.a)(a)),a.resetFilters=a.resetFilters.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"togglePreloader",value:function(e){"undefined"!==typeof e&&this.setState({preloading:e})}},{key:"setForceChoice",value:function(e){"undefined"!==typeof e&&this.setState({selectedForce:e})}},{key:"setNBDChoice",value:function(e){"undefined"!==typeof e&&this.setState({selectedNBD:e})}},{key:"setEventsData",value:function(e,t){"undefined"!==typeof e&&this.setState({dataEvents:e,init:!0},function(){this.setState(function(e){return{eventTypes:Object(i.a)(new Set(e.dataEvents.map(function(e){return e.type})))}}),"undefined"!==typeof t&&t()})}},{key:"getEventsData",value:function(e){return e?this.state.preFilterDataEvents:this.state.dataEvents}},{key:"filterDataByDate",value:function(e){console.info("Filtering events by",e);var t="today"===e?0:"week"===e?8:"fortnight"===e?16:"month"===e&&31;if(t||0===t)this.setState(function(e){return{dataEvents:e.dataEvents.filter(function(e){return m()(e.start_date).diff(m()(),"days")<t}),filterApplied:!0}});else if("custom"===e){var a=this.state.filters,r=a.filterStartDate,n=a.filterEndDate;this.setState(function(e){return{dataEvents:e.dataEvents.filter(function(e){return m()(e.start_date).diff(m()(r),"days")>-1&&m()(n).diff(m()(e.start_date),"days")>-1}),filterApplied:!0}})}}},{key:"filterDataByEvent",value:function(e,t){"undefined"!==typeof e&&(console.info("Filtering events by",e),this.setState(function(t){return{dataEvents:t.dataEvents.filter(function(t){return t.type===e}),filterApplied:!0}},function(){"undefined"!==typeof t&&t()}))}},{key:"backupEventsData",value:function(e){this.state.preFilterDataEvents?this.setState(function(e){return{dataEvents:e.preFilterDataEvents}},function(){"undefined"!==typeof e&&e()}):"undefined"!==typeof e&&e()}},{key:"setApplyFilters",value:function(e,t){var a=this;if("undefined"!==typeof e)try{JSON.stringify(this.state.filters)!==JSON.stringify(e)&&this.backupEventsData(function(){a.setState(function(t){return{preFilterDataEvents:t.dataEvents,filters:e}},function(){var e=a.state.filters,t=e.filterByDate,r=e.filterByType;"undefined"!==t&&"undefined"!==r&&t.length>0&&r.length>0?a.filterDataByDate(t,a.filterDataByEvent(r)):"undefined"!==t&&t.length>0?a.filterDataByDate(t):"undefined"!==r&&r.length>0&&a.filterDataByEvent(r),new g.a({timeout:3e3,text:"Selected Filters applied successfully!",type:"success"}).show()})})}catch(r){console.error("Error caught applying filters: ",r)}"undefined"!==typeof t&&t()}},{key:"resetFilters",value:function(e){this.setState(function(e){return{dataEvents:e.preFilterDataEvents,preFilterDataEvents:!1,filters:"",filterApplied:!1}})}},{key:"render",value:function(){var e=this.state,t=e.dataEvents,a=e.preloading,r=e.eventTypes,s=e.selectedForce,l=e.selectedNBD,i=e.filterApplied,o=e.filters,c=e.init;return n.a.createElement("div",{className:c?"App instantiated":"App uninstantiated"},n.a.createElement(y,{preloading:a}),n.a.createElement(F,null),n.a.createElement(k,{typeFilters:r,setEventsData:this.setEventsData,togglePreloader:this.togglePreloader,setForceChoice:this.setForceChoice,setNBDChoice:this.setNBDChoice,getEventsData:this.getEventsData,setApplyFilters:this.setApplyFilters,resetFilters:this.resetFilters,filterApplied:i,filters:o}),t?n.a.createElement(M,{eventsData:t,selectedForce:s,selectedNBD:l}):null)}}]),t}(r.Component));l.a.render(n.a.createElement(T,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.95e780c1.chunk.js.map