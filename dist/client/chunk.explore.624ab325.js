webpackJsonp([0,3],{194:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(200),l=a(u),r=n(14),i=a(r),o=n(15),f=a(o),s=n(16),c=a(s),d=n(18),p=a(d),h=n(17),_=a(h),v=n(4),m=a(v),y=n(265),b=a(y),C=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).call(this))}return(0,_.default)(t,e),(0,c.default)(t,[{key:"handleFetch",value:function(){var e=this.props.actions;e.fetchUserInfo()}},{key:"handleClear",value:function(){var e=this.props.actions;e.clearUserInfo()}},{key:"render",value:function(){var e=this.props.userInfo;return m.default.createElement("section",{className:b.default.sectionMain},"Explore",m.default.createElement("a",{href:"javascript:void(0)",className:b.default.btn,onClick:this.handleFetch.bind(this)},"Fetch Data"),m.default.createElement("a",{href:"javascript:void(0)",className:b.default.btn,onClick:this.handleClear.bind(this)},"Clear"),m.default.createElement("br",null),m.default.createElement("span",{className:b.default.info},e&&(0,l.default)(e)))}}]),t}(v.Component);t.default=C,e.exports=t.default},195:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(14),l=a(u),r=n(15),i=a(r),o=n(16),f=a(o),s=n(18),c=a(s),d=n(17),p=a(d),h=n(4),_=a(h),v=n(194),m=a(v),y=n(264),b=a(y),C=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,l.default)(t)).call(this))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.userInfo,n=e.actions;return _.default.createElement("div",{className:b.default.app},_.default.createElement(m.default,{userInfo:t,actions:n}))}}]),t}(h.Component);t.default=C,e.exports=t.default},200:function(e,t,n){e.exports={default:n(211),__esModule:!0}},211:function(e,t,n){var a=n(7),u=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return u.stringify.apply(u,arguments)}},264:function(e,t){e.exports={app:"_1BetFU0o"}},265:function(e,t){e.exports={"section-main":"_36JBC5pg",sectionMain:"_36JBC5pg",btn:"_1RyjkEih",info:"_1DbZn_H7"}}});