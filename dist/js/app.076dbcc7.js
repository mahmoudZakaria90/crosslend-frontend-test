(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01e0":function(t,e,a){},2523:function(t,e,a){},"257f":function(t,e,a){},2948:function(t,e,a){},"376b":function(t,e,a){},"3c44":function(t,e,a){},"3db0":function(t,e,a){"use strict";var n=a("2948"),r=a.n(n);r.a},"3f55":function(t,e,a){"use strict";var n=a("01e0"),r=a.n(n);r.a},"439a":function(t,e,a){t.exports=a.p+"img/company.9434c994.svg"},"556c":function(t,e,a){"use strict";var n=a("db81"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"container"},[a("h1",{staticClass:"app-title"},[t._v("Documents")]),a("button",{staticClass:"filter-by-btn",on:{click:t.filterBy}},[t._v("Filter by")]),a("div",{staticClass:"row"},[a("div",{ref:"filter",staticClass:"col filter"},[a("FilterForm")],1),a("div",{staticClass:"col documents"},[a("Documents")],1)])]),a("Footer")],1)},s=[],i=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"header-left"},[a("img",{attrs:{src:t.logo,alt:"Company-logo"}})]),a("div",{ref:"headerRight",staticClass:"header-right"},[t._m(0),a("div",{staticClass:"header-user"},[a("div",{staticClass:"header-user-pic"},[a("img",{attrs:{src:t.avatar,alt:"User avatar"}})]),a("div",{staticClass:"header-user-name"},[a("p",[t._v(t._s(t.user.firstName))]),a("p",[t._v(t._s(t.user.lastName))])])])]),a("button",{staticClass:"header-bars-btn",on:{click:t.openMenu}},[a("FontAwesomeIcon",{attrs:{icon:["fas","bars"]}})],1),t.error?a("p",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e()])}),o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("Home")])]),a("li",[a("a",{staticClass:"active",attrs:{href:""}},[t._v("Documents")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Contact")])])])])}],c=(a("d3b7"),a("96cf"),a("1da1")),l=a("439a"),u=a.n(l),d=a("9b01"),f=a.n(d),m={name:"Header",data:function(){return{user:{firstName:null,lastName:null},avatar:f.a,logo:u.a,error:null}},methods:{openMenu:function(){this.$refs.headerRight&&this.$refs.headerRight.classList.toggle("is-shown-sm")}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="https://frontend.apply.crosslend.dev/user/info.json",e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,s=r.body.User.profile,i=s.firstName,o=s.lastName,t.user.firstName=i,t.user.lastName=o,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),t.error=e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))()}},p=m,h=(a("b179"),a("2877")),g=Object(h["a"])(p,i,o,!1,null,"6e836fd6",null),v=g.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("ul",{staticClass:"footer-links"},[a("li",{staticClass:"footer-copyright"},[a("p",[a("span",[t._v("© Copyrights")]),a("span",[t._v("All rights reserved")])])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Imprint")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Terms of use")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Privacy policy")])])])])}],D={},_=D,w=(a("3f55"),Object(h["a"])(_,b,A,!1,null,"359cff24",null)),C=w.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Wrapper",{staticClass:"documents-wrapper",scopedSlots:t._u([t.documents.length?{key:"header",fn:function(){return[a("h2",{staticClass:"wrapper-title documents-title",attrs:{id:"sort_by_name",role:"button"},on:{click:t.sortByName}},[t._v(" Document name "),"documentName"===t.sortedBy?a("FontAwesomeIcon",{attrs:{icon:["fas",t.nameSortToggle?"caret-up":"caret-down"]}}):t._e()],1),a("h2",{staticClass:"wrapper-title documents-title",attrs:{role:"button"},on:{click:t.sortByDate}},[t._v(" Date "),"date"===t.sortedBy?a("FontAwesomeIcon",{attrs:{icon:["fas",t.dateSortToggle?"caret-down":"caret-up"]}}):t._e()],1)]},proxy:!0}:null,t.documents.length?{key:"content",fn:function(){return[t._l(t.documents,(function(t,e){var n=t.name,r=t.date;return a("DocumentItem",{key:e,attrs:{name:n,date:r}})})),a("Pagination",{attrs:{totalPages:Math.round(t.documentsLength/t.pageSize),documentsLength:t.documentsLength}})]},proxy:!0}:null],null,!0)},[t.responseError?a("p",{staticClass:"error"},[t._v(t._s(t.responseError.message))]):t._e(),t.documents.length?t._e():a("p",{staticClass:"no-docs-text"},[t._v("No documents to fetch.")])])],1)},S=[],E=(a("fb6a"),a("b0c0"),a("a9e3"),a("ac1f"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"document-item"},[a("div",{staticClass:"document-item-name"},[t._v(t._s(t.name))]),a("div",{staticClass:"document-item-date"},[t._v(t._s(t.formattedDate))])])}),y=[],T=(a("a15b"),{name:"DocumentItem",props:{name:String,date:String},computed:{formattedDate:function(){return this.date.split("T")[0].split("-").reverse().join("-")}}}),j=T,k=(a("687b"),Object(h["a"])(j,E,y,!1,null,"05f9d48c",null)),O=k.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrapper-header"},[t._t("header")],2),t._t("content"),t._t("default")],2)},N=[],B={},I=B,U=(a("3db0"),Object(h["a"])(I,x,N,!1,null,"ff16e07a",null)),M=U.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination-group"},[a("button",{staticClass:"pagination-btn",attrs:{disabled:1===t.currentPage},on:{click:t.firstPage}},[a("FontAwesomeIcon",{attrs:{icon:["fas","angle-double-left"]}})],1),a("button",{staticClass:"pagination-btn",attrs:{disabled:1===this.currentPage},on:{click:t.prevPage}},[a("FontAwesomeIcon",{attrs:{icon:["fas","angle-left"]}})],1),a("span",{staticClass:"pagination-status"},[t._v(t._s(t.currentPage)+" of "+t._s(t.finalTotalPages))]),a("button",{staticClass:"pagination-btn",attrs:{disabled:t.currentPage===t.finalTotalPages},on:{click:t.nextPage}},[a("FontAwesomeIcon",{attrs:{icon:["fas","angle-right"]}})],1),a("button",{staticClass:"pagination-btn",attrs:{disabled:t.currentPage===t.finalTotalPages},on:{click:t.lastPage}},[a("FontAwesomeIcon",{attrs:{icon:["fas","angle-double-right"]}})],1)])])},z=[],Q=new n["a"],V={name:"Pagination",props:{totalPages:Number,documentsLength:Number},data:function(){return{currentPage:1,sliceStart:0,sliceEnd:Number("6")}},computed:{finalTotalPages:function(){return this.totalPages<1?1:this.totalPages}},methods:{firstPage:function(){this.currentPage=1,this.sliceStart=0,this.sliceEnd=Number("6"),Q.$emit("updatingPages",{start:this.sliceStart,end:this.sliceEnd})},nextPage:function(){var t="6";this.currentPage<this.totalPages&&(this.currentPage=this.currentPage+1,this.sliceStart=this.sliceStart+Number(t),this.sliceEnd=this.sliceEnd+Number(t),Q.$emit("updatingPages",{start:this.sliceStart,end:this.sliceEnd}))},prevPage:function(){var t="6";this.currentPage>1&&(this.currentPage=this.currentPage-1,this.sliceStart=this.sliceStart-Number(t),this.sliceEnd=this.sliceEnd-Number(t),Q.$emit("updatingPages",{start:this.sliceStart,end:this.sliceEnd}))},lastPage:function(){var t="6";this.currentPage=this.totalPages,this.sliceStart=this.documentsLength-Number(t),this.sliceEnd=this.documentsLength,Q.$emit("updatingPages",{start:this.sliceStart,end:void 0})}}},L=V,q=(a("626e"),Object(h["a"])(L,F,z,!1,null,"05ba3d5e",null)),R=q.exports,G={name:"Documents",components:{DocumentItem:O,Wrapper:M,Pagination:R},data:function(){return{documents:[],documentsLength:null,sortedBy:"date",dateSortToggle:!1,nameSortToggle:!1,pageSize:Number("6"),responseError:null}},methods:{sortByDate:function(){var t=this;this.nameSortToggle=!1,this.dateSortToggle?this.dateSortToggle=!1:this.dateSortToggle=!0,this.documents.sort((function(e,a){var n=e.name,r=e.date,s=a.name,i=a.date,o=new Date(r.split("T")[0]).getTime(),c=new Date(i.split("T")[0]).getTime();return o===c?n.localeCompare(s):t.dateSortToggle?c-o:o-c})),this.sortedBy="date"},sortByName:function(){var t=this;this.dateSortToggle=!1,this.nameSortToggle?this.nameSortToggle=!1:this.nameSortToggle=!0,this.documents.sort((function(e,a){var n=e.name,r=e.date,s=a.name,i=a.date,o=new Date(r.split("T")[0]).getTime(),c=new Date(i.split("T")[0]).getTime();return n===s?c-o:t.nameSortToggle?n.localeCompare(s):s.localeCompare(n)})),this.sortedBy="documentName"},updateDocuments:function(t,e,a){this.documents=t.slice(e,a),this.dateSortToggle=!1,this.sortByDate()}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,i,o,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=/\.pdf$|\.docx$/,n=Object({NODE_ENV:"production",VUE_APP_DOCUMENTS_ENDPOINT:"https://frontend.apply.crosslend.dev/documents.json",VUE_APP_USER_INFO:"https://frontend.apply.crosslend.dev/user/info.json",VUE_APP_DOCUMENTS_SIZE:"6",BASE_URL:"/"}),r=n.VUE_APP_DOCUMENTS_ENDPOINT,s=n.VUE_APP_DOCUMENTS_SIZE,e.prev=2,e.next=5,fetch(r);case 5:return i=e.sent,e.next=8,i.json();case 8:o=e.sent,c=o.documents,l=c.filter((function(t){var e=t.name;return a.test(e)})),t.documentsLength=l.length,t.updateDocuments(l,0,s),Q.$on("updatingPages",(function(e){var a=e.start,n=e.end;t.updateDocuments(l,a,n)})),Q.$on("filter",(function(e){var a=e.startTimestamp,n=e.endTimestamp,r=c.filter((function(t){var e=t.date,r=new Date(e.split("T")[0]).getTime();return r>=a&&r<=n}));t.documentsLength=r.length,t.updateDocuments(r,0,s)})),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](2),t.responseError=e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))()}},J=G,W=(a("556c"),Object(h["a"])(J,P,S,!1,null,"771ad25f",null)),$=W.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Wrapper",{scopedSlots:t._u([{key:"header",fn:function(){return[a("h2",{staticClass:"wrapper-title"},[t._v("Filter")]),a("button",{staticClass:"filter-form-close",on:{click:t.handleClose}},[a("FontAwesomeIcon",{attrs:{icon:["fas","times"]}})],1)]},proxy:!0},{key:"content",fn:function(){return[a("form",{staticClass:"filter-form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("DatePicker",{attrs:{id:"start_date",openDate:new Date("October, 2017"),placeholder:"From",required:!0},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),a("DatePicker",{attrs:{id:"end_date",placeholder:"To",openDate:new Date(t.startDate),disabled:!t.startDate,disabledDates:{to:new Date(t.startDate)}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),a("button",{staticClass:"filter-form-btn",attrs:{type:"submit",disabled:!t.startDate}},[t._v("Apply filters")]),a("button",{staticClass:"filter-form-btn filter-form-clear",attrs:{type:"reset",disabled:!t.startDate},on:{click:t.handleClear}},[t._v("Clear filters")])],1)]},proxy:!0}])})},K=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-date-wrap"},[a("FontAwesomeIcon",{staticClass:"filter-date-icon",attrs:{icon:["far","calendar"]}}),a("Datepicker",{staticClass:"filter-date-picker",attrs:{placeholder:t.placeholder,format:"dd-MM-yyyy","open-date":t.openDate,disabled:t.disabled,"disabled-dates":t.disabledDates,required:t.required},model:{value:t.injectedVal,callback:function(e){t.injectedVal=e},expression:"injectedVal"}},[t._v("From")]),a("FontAwesomeIcon",{staticClass:"filter-date-icon filter-date-chevron",attrs:{icon:["fas","chevron-down"]}})],1)},X=[],Y=a("fa33"),tt={name:"DatePicker",components:{Datepicker:Y["a"]},props:{disabled:Boolean,disabledDates:Object,placeholder:String,required:Boolean,openDate:Date},data:function(){return{injectedVal:this.value}},watch:{injectedVal:function(){this.$emit("input",this.injectedVal)}},mounted:function(){var t=this;Q.$on("reset",(function(){return t.injectedVal=null}))}},et=tt,at=(a("a724"),Object(h["a"])(et,Z,X,!1,null,"bed44644",null)),nt=at.exports,rt={name:"FilterForm",components:{DatePicker:nt,Wrapper:M},props:["filterRef"],data:function(){return{startDate:null,endDate:null}},methods:{handleSubmit:function(){var t=new Date(this.startDate),e=this.endDate?new Date(this.endDate):Date.now();t.setHours(0,-t.getTimezoneOffset(),0,0),this.endDate&&e.setHours(0,-e.getTimezoneOffset(),0,0);var a=t.toISOString(),n=this.endDate?e.toISOString():e,r=new Date(a).getTime(),s=new Date(n).getTime();Q.$emit("filter",{startTimestamp:r,endTimestamp:s})},handleClear:function(){Q.$emit("reset")},handleClose:function(){this.$parent.$refs.filter.classList.remove("is-shown-sm")}}},st=rt,it=(a("f1bc"),Object(h["a"])(st,H,K,!1,null,"63639dec",null)),ot=it.exports,ct={name:"App",components:{Header:v,Documents:$,FilterForm:ot,Footer:C},methods:{filterBy:function(){this.$refs.filter&&this.$refs.filter.classList.add("is-shown-sm")}}},lt=ct,ut=(a("85b9"),Object(h["a"])(lt,r,s,!1,null,"a38d8400",null)),dt=ut.exports,ft=(a("f5df1"),a("6aaa"),a("ecee")),mt=a("c074"),pt=a("b702"),ht=a("ad3d");ft["c"].add(mt["g"],mt["f"],mt["d"],mt["c"],mt["b"],mt["a"],pt["a"],mt["h"],mt["i"],mt["e"]),n["a"].component("FontAwesomeIcon",ht["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(dt)}}).$mount("#app")},"5bc3":function(t,e,a){},"626e":function(t,e,a){"use strict";var n=a("5bc3"),r=a.n(n);r.a},"687b":function(t,e,a){"use strict";var n=a("2523"),r=a.n(n);r.a},"6aaa":function(t,e,a){},"85b9":function(t,e,a){"use strict";var n=a("257f"),r=a.n(n);r.a},"9b01":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAE6klEQVRYCa1XSUukSRANy7WqxF3RQlRcaEG01fHidpkG+y/YJ8ENZQ59GK/DMPeeQ58UN/Bk/wXBGb3oyQ1FHfUgilSr47ihVeU+7yWVH+lnlW2VJmRlfpEZ8V5GRmZGxUiEZWxsLNPn81U6HA7Pw8ODh+oxMTHe+/t7r8vlWmlra/svEpMxL5k8OjqafXNz0wGQTwB7h+oHuAM1KUggANk9vp2oGyA3Hh8fP9Le3v7vj+w/S2B4eDjj9vb2M4z0AUBg3HV3dyexsbGC1UpSksKXq6srgVcEcwXgrD7MJfaXuLi4r52dncfhiIQlMDQ09BPAJmAsCcbcNE7QsrIyKS4ulvT0dElISFB24R05Pz+XnZ0d2djYkLOzMwEwt+YSXguA8Meurq75UCRCEgD4zwD/i6tmIThB6+vrJTU1NZQdS+b3+2Vubk5WV1dJQFUswIeFdHR3d3+zJgY7TwgMDg62gvW4CV5VVSUNDQ3KvXYD4b6Xl5dldnbW0uGWwBMf4Im/TR2H+UG3A3zEBC8tLZXGxkbLkDn/uT5JV1dXK+9xHm3Sq8Qw9SwCDDjuOSa6OIGM3W63WrkmZCq+pF9XVyc5OTmCRanpQRITxNL6FgFGOwNOD4CMlJeXS3JyshZF3DIQKysrLQI0QAxiaWOKAM85BH2Mdj1AZQbea0tBQYHyJD3KEsToC2KKIsBLxnSzdn9aWtpr8cXpdKojq7eBBolFTPYVAQy2oq/2nkISoCJuM36+unAbtQeCxlzA/MS+g3c7GJWbKJxsesQci6YfyhZk74jt4MOCD79pmAq8XhmIb1F4OdlJEFM9aujkASTWBEKkyuXlpVxcXJjiqPq8pk9PT58QgDHAODwOEPCgJtqt0wO7u7t2ccTfBwcH6p3gomyFb4zniVRPosL6+jqjVYuialdWVuwBqOxg0arlm+5FvbJbJ4GjoyNZWlqyD734e3NzU72QfL7tBZjMIbwk8B2DIaONigsLC0JDkRav1yszMzOh9l6bwkm89zqYRoGEU0vNVrtpenpaeQIK5nDY/tbWlkxMTKiTpG2EmOwkttqI/v7+Jbj8fYhJSgSC6j73eDzCV45tYuLjuGXOsL+/r/KA7e1ttfJnwGlvube3930cEQDORKEM1boNKWfR4Gz39vaErk1JSZGMjAz1UBGER/bk5ERlQiTCQjm3MAwJJijjnKcIMIG8vr7+zT6Zxph2FRYWSnZ2tjqWh4eHCuz4+HGaR10+YFlZWVJSUqLI8BjzEqLcLFwM7I5QZmVEAwMDf4DVrxh061UzGamtrZXMzEylzxggAXqBBAKBgPIQt4MPV15enuTm5lpvCPNEZkZra2tqC2GfHmGe+GdPT8/vNGpRA8uvWPEvkLk5sampSSoqKhSw/qGcAKwvKdwq2snPz5epqSkdlAFiaX3rImLqjD37yNU3Nzc/AdcK0bRFRUXS0tLCWPMRw0zTLQI0zNQZ7D7Y9ywaULtO8EHqCJeeP5rPzHhxcfES3niTMj8//8BU/xHIjz6YvU5OTh4h0C6iZUFd2rBnwia2dQpMoe4ze8W+fUYw9tXU1DC6n9wTeq7Z4gHzwYO8lL4g4qP7a2Ya1H9OcXZbcX2Wo/UjmFjUdYjE5Qr1DneJE0nGP2i/vcmfU5OE7uu/5zjPeajq7zm2iC/qd97tkf49/x/z+PK9DNpJPQAAAABJRU5ErkJggg=="},a724:function(t,e,a){"use strict";var n=a("376b"),r=a.n(n);r.a},b179:function(t,e,a){"use strict";var n=a("3c44"),r=a.n(n);r.a},db81:function(t,e,a){},f1bc:function(t,e,a){"use strict";var n=a("fbb4"),r=a.n(n);r.a},fbb4:function(t,e,a){}});
//# sourceMappingURL=app.076dbcc7.js.map