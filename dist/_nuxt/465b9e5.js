(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{547:function(t,e,r){"use strict";(function(t){r(43),r(550);var l=r(551),n=r.n(l);r(552);e.a={components:{Dropzone:n.a},data:function(){return{select:[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3",value:"3"}],linkDropzone:{url:"https://httpbin.org/post",thumbnailWidth:200,addRemoveLinks:!0,dictDefaultMessage:"<i class='fa fa-cloud-upload'></i> UPLOAD ME"},date:null,menu:!1,date2:null,menu2:!1}},computed:{options:function(){return this.select.map((function(t){return{label:t.text,value:t.value}}))}},mounted:function(){t("#select2").select2({});this.$refs.el.dropzone}}}).call(this,r(543))},615:function(t,e,r){"use strict";r.r(e);var l=r(547).a,n=r(79),o=r(98),c=r.n(o),v=r(536),m=r(514),d=r(516),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h5",{staticClass:"font-weight-bold mb-8"},[t._v("Forms")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 overflowAuto"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"form-group mb-5"},[t._m(2),t._v(" "),r("select",{staticClass:"form-control",attrs:{name:""}},t._l(t.select,(function(e,l){return r("option",{key:l,domProps:{value:e.value}},[t._v(t._s(e.text))])})),0)]),t._v(" "),r("div",{staticClass:"form-group mb-5"},[t._m(3),t._v(" "),r("select",{staticClass:"form-control",attrs:{multiple:"",name:"",id:""}},t._l(t.select,(function(e,l){return r("option",{key:l,domProps:{value:e.value}},[t._v(t._s(e.text))])})),0)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("div",{staticClass:"form-group mb-5"},[t._m(7),t._v(" "),r("select",{staticClass:"form-control",attrs:{name:""}},t._l(t.select,(function(e,l){return r("option",{key:l,domProps:{value:e.value}},[t._v(t._s(e.text))])})),0)]),t._v(" "),r("div",{staticClass:"form-group mb-5"},[t._m(8),t._v(" "),r("select",{staticClass:"form-control",attrs:{multiple:"",name:"",id:""}},t._l(t.select,(function(e,l){return r("option",{key:l,domProps:{value:e.value}},[t._v(t._s(e.text))])})),0)]),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),r("div",{staticClass:"col-6"},[r("div",{staticClass:"card mb-5"},[t._m(11),t._v(" "),r("form",{attrs:{action:""}},[r("div",{staticClass:"card-body mx-5"},[r("div",{staticClass:"form-group mb-5"},[r("label",{attrs:{for:""}},[t._v("Example Select2")]),t._v(" "),r("select",{staticClass:"form-control",attrs:{name:"",id:"select2"}},t._l(t.select,(function(e,l){return r("option",{key:l,domProps:{value:e.value}},[t._v(t._s(e.text))])})),0)]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Example File Upload Dropzone")]),t._v(" "),r("dropzone",{ref:"el",attrs:{id:"foo",options:t.linkDropzone}})],1),t._v(" "),t._m(12)])])]),t._v(" "),r("div",{staticClass:"card card-custom"},[t._m(13),t._v(" "),r("form",{attrs:{action:""}},[r("div",{staticClass:"card-body mx-5"},[r("div",{staticClass:"form-group"},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"max-width":"290",transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,n=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Date Picker","prepend-icon":"mdi-calendar",readonly:"",clearable:""},on:{"click:clear":function(e){t.date=null}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",n,!1),l))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":""},on:{change:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),r("div",{staticClass:"form-group"},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"max-width":"290",transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,n=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Date Range Picker","prepend-icon":"mdi-calendar",readonly:"",clearable:""},on:{"click:clear":function(e){t.date=null}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},"v-text-field",n,!1),l))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),r("v-date-picker",{attrs:{range:"","no-title":""},on:{change:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1)])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group mb-5"},[r("label",{attrs:{for:""}},[t._v("Email address "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter email"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group mb-5"},[r("label",{attrs:{for:""}},[t._v("Password "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:""}},[t._v("Example select "),r("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:""}},[t._v("Example select "),r("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group mb-1"},[r("label",{attrs:{for:""}},[t._v("Example textarea")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{rows:"3"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group mb-5"},[r("label",{attrs:{for:""}},[t._v("Email address "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter email"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group mb-5"},[r("label",{attrs:{for:""}},[t._v("Password "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:""}},[t._v("Example select "),r("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:""}},[t._v("Example select "),r("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group mb-5"},[r("label",{attrs:{for:""}},[t._v("Example textarea")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{rows:"3"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-teal mr-2 text-white",attrs:{type:"reset"}},[t._v("Submit")]),t._v(" "),r("button",{staticClass:"btn btn-secondary text-white",attrs:{type:"reset"}},[t._v("Cancel")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h4",{staticClass:"card-title"},[t._v("Input Custom")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Example File Upload Dropzone")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h4",{staticClass:"card-title"},[t._v("Input Custom")])])}],!1,null,null,null);e.default=component.exports;c()(component,{VDatePicker:v.a,VMenu:m.a,VTextField:d.a})}}]);