(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6889341e"],{"1bee":function(t,s,n){},"2ddc":function(t,s,n){"use strict";var e=n("9534"),o=n.n(e);o.a},"335c":function(t,s,n){},"37d4":function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(s){t.$set(t.loginForm,"username",s)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(s){t.capsTooltip=s},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},on:{blur:function(s){t.capsTooltip=!1}},nativeOn:{keyup:[function(s){return t.checkCapslock(s)},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.handleLogin(s)}]},model:{value:t.loginForm.password,callback:function(s){t.$set(t.loginForm,"password",s)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),t.handleLogin(s)}}},[t._v(t._s(t.$t("login.logIn")))]),n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"tips"},[n("span",[t._v(t._s(t.$t("login.username"))+" : admin")]),n("span",[t._v(t._s(t.$t("login.password"))+" : 111111")])])])],1),n("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog},on:{"update:visible":function(s){t.showDialog=s}}},[t._v(" "+t._s(t.$t("login.thirdpartyTips"))+" "),n("br"),n("br"),n("br"),n("social-sign")],1)],1)},o=[],i=n("61f7"),a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(s){return t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信 ")]),n("div",{staticClass:"sign-btn",on:{click:function(s){return t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ ")])])},r=[],l={name:"SocialSignin",methods:{wechatHandleClick:function(){alert("ok")},tencentHandleClick:function(){alert("ok")}}},c=l,p=(n("2ddc"),n("2877")),u=Object(p["a"])(c,a,r,!1,null,"2bfc97d6",null),d=u.exports,g={name:"Login",metaInfo:{title:"project1",titleTemplate:"%s - Yay!",htmlAttrs:{lang:"en",amp:!0}},components:{SocialSign:d},data:function(){var t=this,s=function(s,n,e){Object(i["b"])(n,t)?e():e(new Error("Please enter the correct user name"))},n=function(t,s,n){s.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:s}],password:[{required:!0,trigger:"blur",validator:n}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=t.shiftKey,n=t.key;n&&1===n.length&&(this.capsTooltip=!!(s&&n>="a"&&n<="z"||!s&&n>="A"&&n<="Z")),"CapsLock"===n&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;t.$router.push({path:t.redirect||"/editor/flowlist"})}))}}},f=g,m=(n("d13d"),n("f887"),Object(p["a"])(f,e,o,!1,null,"4fac7603",null)),h=m.exports,v=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title"))+" project2")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(s){t.$set(t.loginForm,"username",s)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(s){t.capsTooltip=s},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},on:{blur:function(s){t.capsTooltip=!1}},nativeOn:{keyup:[function(s){return t.checkCapslock(s)},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.handleLogin(s)}]},model:{value:t.loginForm.password,callback:function(s){t.$set(t.loginForm,"password",s)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),t.handleLogin(s)}}},[t._v(t._s(t.$t("login.logIn")))]),n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"tips"},[n("span",[t._v(t._s(t.$t("login.username"))+" : admin")]),n("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"18px"}},[t._v(t._s(t.$t("login.username"))+" : editor")]),n("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),n("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(s){t.showDialog=!0}}},[t._v(t._s(t.$t("login.thirdparty")))])],1)],1),n("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog},on:{"update:visible":function(s){t.showDialog=s}}},[t._v(" "+t._s(t.$t("login.thirdpartyTips"))+" "),n("br"),n("br"),n("br"),n("social-sign")],1)],1)},w=[],y=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(s){return t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信 ")]),n("div",{staticClass:"sign-btn",on:{click:function(s){return t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ ")])])},k=[],b={name:"SocialSignin",methods:{wechatHandleClick:function(){alert("ok")},tencentHandleClick:function(){alert("ok")}}},C=b,_=(n("a461"),Object(p["a"])(C,y,k,!1,null,"3cd9c297",null)),$=_.exports,T={name:"Login",metaInfo:{title:"project2",titleTemplate:"%s - Yay!",htmlAttrs:{lang:"en",amp:!0}},components:{SocialSign:$},data:function(){var t=this,s=function(s,n,e){Object(i["b"])(n,t)?e():e(new Error("Please enter the correct user name"))},n=function(t,s,n){s.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:s}],password:[{required:!0,trigger:"blur",validator:n}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=t.shiftKey,n=t.key;n&&1===n.length&&(this.capsTooltip=!!(s&&n>="a"&&n<="z"||!s&&n>="A"&&n<="Z")),"CapsLock"===n&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;t.$router.push({path:t.redirect||"/dashboard"})}))}}},F=T,x=(n("ea9e"),n("8146"),Object(p["a"])(F,v,w,!1,null,"6381205a",null)),O=x.exports,q=function(t){switch(t){case"project1":return h;case"project2":return O;default:return h}};s["default"]=q(Object({NODE_ENV:"production",BASE_URL:""}).BASE_PROJECT)},"61f7":function(t,s,n){"use strict";function e(t){return/^(https?:|mailto:|tel:)/.test(t)}function o(t){var s=["admin","editor"];return s.indexOf(t.trim())>=0}n.d(s,"a",(function(){return e})),n.d(s,"b",(function(){return o}))},8146:function(t,s,n){"use strict";var e=n("335c"),o=n.n(e);o.a},9534:function(t,s,n){},a015:function(t,s,n){},a461:function(t,s,n){"use strict";var e=n("d331"),o=n.n(e);o.a},d13d:function(t,s,n){"use strict";var e=n("ff69"),o=n.n(e);o.a},d331:function(t,s,n){},ea9e:function(t,s,n){"use strict";var e=n("a015"),o=n.n(e);o.a},f887:function(t,s,n){"use strict";var e=n("1bee"),o=n.n(e);o.a},ff69:function(t,s,n){}}]);