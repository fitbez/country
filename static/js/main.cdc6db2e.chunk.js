(this["webpackJsonpworld-countries"]=this["webpackJsonpworld-countries"]||[]).push([[0],{14:function(e,a,t){e.exports=t(38)},19:function(e,a,t){},20:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),o=(t(19),t(2)),i=(t(20),t(13)),s=t.n(i),m=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),m=i[0],u=i[1],p=m.toUpperCase(),E=t.filter((function(e){return e.name.toUpperCase().indexOf(p)>-1}));return Object(n.useEffect)((function(){s.a.get("https://restcountries.eu/rest/v2/all").then((function(e){c(e.data)}))}),[]),console.log(E),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"search"},"Search country: ",l.a.createElement("input",{onChange:function(e){u(e.target.value)},type:"text"})),l.a.createElement("div",{className:"show-countries"},E.length>=250?l.a.createElement("p",null,"Please enter a country to know about...."):E.length>=20?l.a.createElement("p",null,"Too many matches, specify another filter"):1===E.length?E.map((function(e){var a=parseInt(e.population).toLocaleString();return l.a.createElement("div",{key:e.name},l.a.createElement("div",{className:"country-header",key:e.name},l.a.createElement("h2",null,e.name),l.a.createElement("div",{className:"flag-image"},l.a.createElement("img",{src:e.flag,alt:"flag"}))),l.a.createElement("div",{className:"country-info"},l.a.createElement("div",null,l.a.createElement("p",null,"Capital:"," ",l.a.createElement("span",{className:"capital"},e.capital)," "),l.a.createElement("p",null,"Population: ",l.a.createElement("span",{className:"population"},a)," ")),l.a.createElement("div",{className:"language"},l.a.createElement("h3",null,"Languages"),l.a.createElement("div",null,e.languages.map((function(e){return l.a.createElement("li",{key:e.name},e.name)}))))))})):E.map((function(e){return m.length?l.a.createElement("div",{className:"country-list",key:e.name},l.a.createElement("span",{onClick:function(){return u(e.name)}},e.name)):l.a.createElement("div",null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.cdc6db2e.chunk.js.map