(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),s=t.n(l),c=(t(14),t(15),t(4)),i=t.n(c),o=t(7),m=t(2),u=t(3),d=function(e){var a=e.filters;return r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Hoteles"),r.a.createElement("h2",{className:"subtitle"},"desde el ",r.a.createElement("strong",null,a.dateFrom.toLocaleDateString())," hasta el ",r.a.createElement("strong",null,a.dateTo.toLocaleDateString()),a.country&&"Todos los pa\xedses"!==a.country?" en ".concat(a.country):"",a.price&&"Cualquier precio"!==a.price?" por  ".concat(a.price):"",a.rooms&&"Cualquier tama\xf1o"!==a.rooms?" de hasta ".concat(a.rooms," habitaciones"):""))))},f=t(1),v=function(e){var a=e.date,t=e.icon,l=e.onDateChange,s=e.name,c=Object(n.useState)([]),i=Object(u.a)(c,2),o=i[0],m=i[1];return Object(n.useEffect)(function(){var e=""+(a.getMonth()+1),t=""+a.getDate(),n=a.getFullYear();e.length<2&&(e="0"+e),t.length<2&&(t="0"+t);var r=[n,e,t].join("-");m(r)},[a]),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"date",value:o,onChange:l,name:s}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-".concat(t)}))))},g=function(e){var a=e.icon,t=e.options,n=e.selected,l=e.onOptionsChange,s=e.name;return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("div",{className:"select",style:{width:"100%"}},r.a.createElement("select",{style:{width:"100%"},value:n,onChange:l,name:s},t.map(function(e){return r.a.createElement("option",{key:e.name+e.value,value:e.value},e.name)}))),r.a.createElement("div",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-".concat(a)}))))},E=function(e){var a=function(a){var t=e.filters,n=e.onFilterChange,r=new Date(a.target.value+"T01:00:00");if("dateFrom"===a.target.name&&t.dateTo>r)n(Object(m.a)({},t,Object(f.a)({},a.target.name,r)));else if("dateTo"===a.target.name&&t.dateFrom>r){var l;n(Object(m.a)({},t,(l={},Object(f.a)(l,a.target.name,r),Object(f.a)(l,"dateFrom",r),l)))}else if("dateTo"===a.target.name){n(Object(m.a)({},t,Object(f.a)({},a.target.name,r)))}},t=function(a){var t=e.filters;(0,e.onFilterChange)(Object(m.a)({},t,Object(f.a)({},a.target.name,a.target.value)))},n=e.filters,l=n.dateFrom,s=n.dateTo,c=n.country,i=n.price,o=n.rooms;return r.a.createElement("nav",{className:"navbar is-info",style:{justifyContent:"center"}},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(v,{date:l,icon:"sign-in-alt",onDateChange:a,name:"dateFrom"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(v,{date:s,icon:"sign-out-alt",onDateChange:a,name:"dateTo"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{options:[{value:void 0,name:"Todos los pa\xedses"},{value:"Argentina",name:"Argentina"},{value:"Brasil",name:"Brasil"},{value:"Chile",name:"Chile"},{value:"Uruguay",name:"Uruguay"}],selected:c,icon:"globe",onOptionsChange:t,name:"country"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{options:[{value:void 0,name:"Cualquier precio"},{value:1,name:"$"},{value:2,name:"$$"},{value:3,name:"$$$"},{value:4,name:"$$$$"}],selected:i,icon:"dollar-sign",onOptionsChange:t,name:"price"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{options:[{value:void 0,name:"Cualquier tama\xf1o"},{value:10,name:"Hotel peque\xf1o"},{value:20,name:"Hotel mediano"},{value:40,name:"Hotel grande"}],selected:o,icon:"bed",onOptionsChange:t,name:"rooms"})))},p=function(e){var a=e.data,t=a.name,n=a.photo,l=a.description,s=a.rooms,c=a.country,i=a.city,o=a.price;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Sainte Jeanne Boutique & Spa"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},t),r.a.createElement("p",null,l),r.a.createElement("div",{className:"field is-grouped is-grouped-multiline",style:{marginTop:"1em"}},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-medium is-info"},r.a.createElement("i",{className:"fas fa-map-marker"})),r.a.createElement("span",{className:"tag is-medium"},i,", ",c))),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-medium is-info"},r.a.createElement("i",{className:"fas fa-bed"})),r.a.createElement("span",{className:"tag is-medium"},s," Habitaciones"))),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags"},r.a.createElement("span",{className:"tag is-medium is-info"},r.a.createElement("i",{className:"fas fa-dollar-sign",style:{margin:"0 .125em"}}),r.a.createElement("i",{className:"fas fa-dollar-sign",style:o>1?{margin:"0 .125em"}:{margin:"0 .125em",opacity:".25"}}),r.a.createElement("i",{className:"fas fa-dollar-sign",style:o>2?{margin:"0 .125em"}:{margin:"0 .125em",opacity:".25"}}),r.a.createElement("i",{className:"fas fa-dollar-sign",style:o>3?{margin:"0 .125em"}:{margin:"0 .125em",opacity:".25"}})))))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("a",{href:"https://www.google.com",className:"card-footer-item has-background-primary has-text-white has-text-weight-bold"},"Reservar")))},N=function(e){var a=e.hotels,t=e.loading;return r.a.createElement("div",null,t?r.a.createElement("a",{className:"button loading is-large is-loading"},"loading"):null,r.a.createElement("section",{className:"section",style:{marginTop:"3em"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-multiline"},a?a.map(function(e){return r.a.createElement("div",{className:"column is-one-third",key:e.name+e.city},r.a.createElement(p,{data:e}))}):r.a.createElement("article",{className:"message is-warning"},r.a.createElement("div",{className:"message-body"},"No se han encontrado hoteles que coincidan con los par\xe1metros de b\xfasqueda."))))))},h=(t(17),function(){var e=Object(n.useReducer)(function(e,a){return Object(m.a)({},e,a)},{filters:{dateFrom:new Date,dateTo:new Date((new Date).valueOf()+864e5),country:void 0,price:void 0,rooms:void 0},hotels:[],loading:!0,filteredHotels:[]}),a=Object(u.a)(e,2),t=a[0],l=a[1],s=t.filters,c=t.hotels,f=t.loading,v=t.filteredHotels,g=function(){var e=Object(o.a)(i.a.mark(function e(){var a,t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,console.log(t),l({hotels:t,loading:!1,filteredHotels:t}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){g()},[]);return Object(n.useEffect)(function(){var e=c.filter(function(e){return e.country===s.country||void 0===s.country||"Todos los pa\xedses"===s.country}).filter(function(e){return e.price==s.price||void 0===s.price||"Cualquier precio"===s.price}).filter(function(e){return s.rooms-10<=e.rooms&&e.rooms<=s.rooms||void 0===s.rooms||"Cualquier tama\xf1o"===s.rooms}).filter(function(e){return e.availabilityFrom<=s.dateFrom&&e.availabilityTo>=s.dateTo});l({filteredHotels:e})},[s]),r.a.createElement("div",null,r.a.createElement(d,{filters:s}),r.a.createElement(E,{filters:s,onFilterChange:function(e){l({filters:e})}}),r.a.createElement(N,{hotels:v,loading:f}))});s.a.render(r.a.createElement(h,null),document.querySelector("#root"))},8:function(e,a,t){e.exports=t(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.990603b5.chunk.js.map