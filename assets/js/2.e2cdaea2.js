(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{51:function(t,e,n){},52:function(t,e,n){"use strict";var a=n(51);n.n(a).a},53:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var a=n(5),s=n(2);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:()=>({rawPopupConfig:{message:"發現新内容可用",buttonText:"刷新"},updateEvent:null}),created(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"發現新内容可用",buttonText:"刷新"}&&(this.rawPopupConfig=o)},computed:{popupConfig(){return Object(s.h)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(52),n(0)),i=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=i.exports},55:function(t,e,n){"use strict";var a=n(53);n.n(a).a},56:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(54).default}},s=(n(55),n(0)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.enabled,s=e.reload,o=e.message,u=e.buttonText;return a?n("div",{staticClass:"my-sw-update-popup"},[t._v("\n    "+t._s(o)+"\n    "),n("br"),n("button",{on:{click:s}},[t._v(t._s(u))]),n("br")]):t._e()}}],null,!0)})}),[],!1,null,null,null);e.default=o.exports}}]);