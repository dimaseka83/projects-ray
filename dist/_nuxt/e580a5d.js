(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{534:function(t,e,n){"use strict";n.r(e);n(44);var c={data:function(){return{step:1,snackbar:!1,text:"",timeout:1e3}},props:{source:String},layout:"authentication",methods:{login:function(){var t=this;this.snackbar=!0,this.text="Logged in successfully",setTimeout((function(){t.$router.push("/")}),1e3)},signup:function(){var t=this;this.snackbar=!0,this.text="Signed up successfully",setTimeout((function(){t.step--}),1e3)},forgotpassword:function(){var t=this;this.snackbar=!0,this.text="Send Reset Link Successfully",setTimeout((function(){t.step=1}),1e3)}}},r=n(81),o=n(101),l=n.n(o),v=n(147),d=n(209),m=n(186),x=n(524),_=n(467),f=n(526),k=n(208),C=n(525),w=n(518),h=n(448),y=n(527),S=n(528),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("v-card",{staticClass:"elevation-12"},[n("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-window-item",{attrs:{value:1}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticClass:"mt-12"},[n("h1",{staticClass:"text-center display-2 teal--text text--accent-3"},[t._v("Sign in to Account")]),t._v(" "),n("div",{staticClass:"text-center mt-4"},[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"primary"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n                        mdi-facebook\n                      ")])],1),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"red"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n                        mdi-google-plus\n                      ")])],1),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"primary"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n                        mdi-linkedin\n                      ")])],1)],1),t._v(" "),n("h4",{staticClass:"text-center mt-4"},[t._v("Ensure your email for registration")]),t._v(" "),n("v-form",[n("v-text-field",{attrs:{label:"Email",name:"Email","prepend-icon":"mdi-email",type:"text",color:"teal accent-3"}}),t._v(" "),n("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",color:"teal accent-3"}})],1),t._v(" "),n("h5",{staticClass:"text-center mt-4"},[t._v("Forgot your password ? "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.step+=2}}},[t._v("\n                      Click Here")])],1)],1),t._v(" "),n("div",{staticClass:"text-center m-3"},[n("v-btn",{attrs:{rounded:"",color:"teal accent-3",dark:""},on:{click:t.login}},[t._v("SIGN IN")])],1)],1),t._v(" "),n("v-col",{staticClass:"teal accent-3",attrs:{cols:"12",md:"4"}},[n("v-card-text",{staticClass:"white--text mt-12"},[n("h1",{staticClass:"text-center display-1"},[t._v("Hello, Friend!")]),t._v(" "),n("h5",{staticClass:"text-center"},[t._v("Enter your personal details and start journay with us")])]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(e){t.step++}}},[t._v("SIGN UP")])],1)],1)],1)],1),t._v(" "),n("v-window-item",{attrs:{value:2}},[n("v-row",{staticClass:"fill-height"},[n("v-col",{staticClass:"teal accent-3",attrs:{cols:"12",md:"4"}},[n("v-card-text",{staticClass:"white--text mt-12"},[n("h1",{staticClass:"text-center display-1"},[t._v("Welcome Back!")]),t._v(" "),n("h5",{staticClass:"text-center"},[t._v("To Keep connected with us please login with your personnel info")])]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(e){t.step--}}},[t._v("Sign in")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticClass:"mt-12"},[n("h1",{staticClass:"text-center display-2 teal--text text--accent-3"},[t._v("Create Account")]),t._v(" "),n("div",{staticClass:"text-center mt-4"},[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"primary"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n                        mdi-facebook\n                      ")])],1),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"red"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n                        mdi-google-plus\n                      ")])],1),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"primary"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n                        mdi-linkedin\n                      ")])],1)],1),t._v(" "),n("h4",{staticClass:"text-center mt-4"},[t._v("Ensure your email for registration")]),t._v(" "),n("v-form",[n("v-text-field",{attrs:{label:"Name",name:"Name","prepend-icon":"mdi-account",type:"text",color:"teal accent-3"}}),t._v(" "),n("v-text-field",{attrs:{label:"Email",name:"Email","prepend-icon":"mdi-email",type:"text",color:"teal accent-3"}}),t._v(" "),n("v-text-field",{attrs:{id:"password",label:"Password",name:"","prepend-icon":"mdi-lock",type:"password",color:"teal accent-3"}})],1)],1),t._v(" "),n("div",{staticClass:"text-center m-5"},[n("v-btn",{attrs:{rounded:"",color:"teal accent-3",dark:""},on:{click:t.signup}},[t._v("SIGN UP")])],1)],1)],1)],1),t._v(" "),n("v-window-item",{attrs:{value:3}},[n("v-row",{staticClass:"fill-height"},[n("v-col",{staticClass:"teal accent-3",attrs:{cols:"12",md:"4"}},[n("v-card-text",{staticClass:"white--text mt-12"},[n("h1",{staticClass:"text-center display-1"},[t._v("Welcome Back!")]),t._v(" "),n("h5",{staticClass:"text-center"},[t._v("To Keep connected with us please login with your personnel info")])]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(e){t.step--}}},[t._v("Sign in")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticClass:"mt-12"},[n("h5",{staticClass:"text-center display-1 teal--text text--accent-3"},[t._v("Did you forgot your password")]),t._v(" "),n("p",{staticClass:"text-center mt-4"},[t._v("Enter your email address you're using for your account bellow and we\n                    will send you a password reset link")]),t._v(" "),n("v-form",[n("v-text-field",{attrs:{label:"Email",name:"Email","prepend-icon":"mdi-email",type:"text",color:"teal accent-3"}})],1)],1),t._v(" "),n("div",{staticClass:"text-center m-5"},[n("v-btn",{attrs:{rounded:"",color:"teal accent-3",dark:""},on:{click:t.forgotpassword}},[t._v("Register Reset Link")])],1)],1)],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var c=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",c,!1),[t._v("\n              Close\n            ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.text)+"\n\n          ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardText:m.b,VCol:x.a,VContainer:_.a,VForm:f.a,VIcon:k.a,VRow:C.a,VSnackbar:w.a,VTextField:h.a,VWindow:y.a,VWindowItem:S.a})}}]);