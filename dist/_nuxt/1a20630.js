(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{584:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{search:"",page:1,pageCount:0,itemsPerPage:10,headers:[{text:"#",align:"left",value:"id"},{text:"First",align:"left",value:"first"},{text:"Last",align:"left",value:"last"},{text:"Handle",align:"left",value:"handle"}],table:[{id:1,first:"Mark",last:"Otto",handle:"@mdo"},{id:2,first:"Jacob",last:"Thornton",handle:"@fat"},{id:3,first:"Larry",last:"the Bird",handle:"@twitter"}]}}},r=l(79),c=l(99),o=l.n(c),d=l(580),h=l(579),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h5",{staticClass:"font-weight-bold mb-8"},[t._v("Table")]),t._v(" "),l("div",{staticClass:"card card-custom"},[l("div",{staticClass:"card-header"},[l("div",{staticClass:"d-flex bd-highlight"},[t._m(0),t._v(" "),l("div",{staticClass:"p-2 bd-highlight"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])])]),t._v(" "),l("div",{staticClass:"card-body"},[l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.table,search:t.search,page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}}}),t._v(" "),l("div",{staticClass:"text-center pt-2"},[l("v-pagination",{attrs:{length:t.pageCount,color:"teal"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-2 flex-grow-1 bd-highlight"},[l("h5",[t._v("DataTable")])])}],!1,null,null,null);e.default=component.exports;o()(component,{VDataTable:d.a,VPagination:h.a})}}]);