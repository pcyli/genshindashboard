(this.webpackJsonpgenshindashboard2=this.webpackJsonpgenshindashboard2||[]).push([[0],{18:function(e){e.exports=JSON.parse('["GS6ACJ775KNV","SBNBUK67M37Z","GENSHINGIFT"]')},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(17),s=a.n(c),i=(a(24),a(2)),o=a(5),u=a(4),l=a(3),d=a(7),f=a(0),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"convertURISafe",value:function(e){return escape(e.replace(/["']/g,"").split(" ").join("_"))}},{key:"createEntityImage",value:function(e,t,a){var r=Array.isArray(t)?t.join(" "):t;return Object(f.jsx)("div",{className:r,children:Object(f.jsx)("img",{src:e,alt:a})})}},{key:"render",value:function(){var e=this.props,t=e.imageSrc,a=e.classNames,r=e.entityName;return this.createEntityImage(t,a,r)}}]),a}(n.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"createMaterialURL",value:function(e){var t=e["5starname"]||e["4starname"];return t||(t=e.name),"img/items/Item_".concat(this.convertURISafe(t),".png")}},{key:"render",value:function(){var e=this.props,t=e.material,a=e.classNames,r=[];return a&&(r=Array.isArray(a)?a:[a]),this.createEntityImage(this.createMaterialURL(t),["MaterialImage"].concat(Object(d.a)(r)),t.name)}}]),a}(h),p=a(6),m=a.n(p),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).createResetInfo=function(){var t=e.props;if(t.day===t.config.resetDay)return Object(f.jsx)("div",{className:"Reset",children:"Reset Day!"})},e}return Object(o.a)(a,[{key:"getQueryHandler",value:function(e){switch(e){case"talent":return m.a.talentmaterialtypes;case"weapon":return m.a.weaponmaterialtypes;default:throw new Error("getQueryHandler: No type specified")}}},{key:"render",value:function(){var e=this,t=this.props.day,a=function(a){var r=e.getQueryHandler(a),n=r(t,{matchCategories:!0}),c=[];return n.forEach((function(e){var t=r(e);c.push(Object(f.jsx)(j,{material:t},t.name))})),c};return Object(f.jsxs)("div",{className:"CalendarTop",children:[Object(f.jsx)("div",{className:"day",children:t}),Object(f.jsx)("div",{className:"container",children:a("talent")}),Object(f.jsx)("div",{className:"container",children:a("weapon")}),this.createResetInfo()]})}}]),a}(n.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).createTransformerImage=function(){var t=e.props;if(t.day===t.userConfig.transformerDay)return Object(f.jsx)(j,{material:{name:"Parametric Transformer"},classNames:"transformer"})},e.createSpiralAbyssImage=function(){var t=e.props,a=t.date,r=t.config.spiralAbyssResetDays,n=a.getDate();if(r.includes(n))return Object(f.jsx)(h,{imageSrc:"img/domains/spiral_abyss.png",classNames:"SpiralAbyss",entityName:"SpiralAbyss"})},e.createCharacterImage=function(){var t,a=e.props,r=a.day,n=a.userConfig,c=e.getQueryHandler("talent")(r,{matchCategories:!0}).map((function(t){return e.getQueryHandler("character")(t,{matchCategories:!0})})),s=(t=[]).concat.apply(t,Object(d.a)(c)),i=[];return n.trackedCharacters.forEach((function(t){if(s.includes(t)){var a=e.getQueryHandler("character")(t),r=e.getQueryHandler("talent")(a.talentmaterialtype);i.push(Object(f.jsxs)("div",{className:"CharacterIcon",children:[Object(f.jsx)("img",{src:a.images.icon,alt:t}),Object(f.jsx)(j,{material:r},r.name)]},"calBotCharIcon".concat(t)))}})),i},e}return Object(o.a)(a,[{key:"getQueryHandler",value:function(e){switch(e){case"talent":return m.a.talentmaterialtypes;case"character":return m.a.characters;default:throw new Error("getQueryHandler: No type specified")}}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"CalendarBottom",children:[this.createTransformerImage(),this.createSpiralAbyssImage(),this.createCharacterImage()]})}}]),a}(n.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.date,a=e.config,r=e.userConfig,n=a.calendarDays[t.getDay()];return Object(f.jsxs)("div",{className:["CalendarItem",n].join(" "),children:[Object(f.jsx)("div",{className:"frame",children:" "}),Object(f.jsx)(b,{day:n,config:a}),Object(f.jsx)(g,{day:n,date:t,config:a,userConfig:r})]})}}]),a}(n.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).generateCalendarItems=function(){var t=e.props,a=t.displayOrder,r=t.config,n=t.userConfig,c=[];return a.forEach((function(e){c.push(Object(f.jsx)(v,{date:e,config:r,userConfig:n},e.getDay()))})),c},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Calendar",children:this.generateCalendarItems()})}}]),a}(n.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).toggleOpen=function(){r.setState({showSubLevel:!r.state.showSubLevel})},r.createMenu=function(e,t){var a=r.state.showSubLevel&&Object(f.jsx)("div",{className:"subLevel",children:t});return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"topLevel",onClick:r.toggleOpen,children:e}),a]})},r.state={showSubLevel:!0},r}return a}(n.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).toggleCharacterTracking=function(t){var a,r=e.props.stateManager,n=r.getUserConfig().trackedCharacters;n.includes(t)?(a=Object(d.a)(n),e.removeFromArray(a,t)):a=[].concat(Object(d.a)(n),[t]),r.updateUserConfig({trackedCharacters:a})},e.generateCharacterItems=function(){var t=e.getQueryHandler("character")("names",{matchCategories:!0}),a=e.props.stateManager.getUserConfig().trackedCharacters,r=[];return e.removeFromArray(t,"Aether"),e.removeFromArray(t,"Lumine"),t.forEach((function(t){var n=a.includes(t);r.push(Object(f.jsxs)("div",{className:"characterTracker ".concat(n&&"selected"),onClick:function(){e.toggleCharacterTracking(t)},children:[n&&Object(f.jsx)("div",{className:"primogem"}),t]},t))})),r},e}return Object(o.a)(a,[{key:"removeFromArray",value:function(e,t){e.splice(e.indexOf(t),1)}},{key:"getQueryHandler",value:function(e){switch(e){case"talent":return m.a.talentmaterialtypes;case"character":return m.a.characters;default:throw new Error("getQueryHandler: No type specified")}}},{key:"render",value:function(){return this.createMenu("Character Tracker",this.generateCharacterItems())}}]),a}(O),x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).createTransformerDayItems=function(){var t=e.props,a=t.calendarDays,r=t.stateManager,n=[],c=r.getUserConfig().transformerDay;return a.forEach((function(e){var t=c===e;n.push(Object(f.jsxs)("div",{className:"transformerDay ".concat(t&&"selected"),onClick:function(){return r.updateUserConfig({transformerDay:e})},children:[t&&Object(f.jsx)("div",{className:"primogem"}),e]},"transformer".concat(e)))})),n},e}return Object(o.a)(a,[{key:"render",value:function(){return this.createMenu("Set Transformer",this.createTransformerDayItems())}}]),a}(O),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.handler;return Object(f.jsx)("div",{className:"topLevel",onClick:a,children:t})}}]),a}(n.a.Component),w=a(18),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).copyToClipboard=function(e){e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},e.generateCodeItems=function(t){var a=[];return t.forEach((function(t){a.push(Object(f.jsx)("input",{className:"code",onClick:function(t){return e.copyToClipboard(t.target)},value:t},t))})),a},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.url;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{text:"Codes",handler:function(){window.open(e)}}),Object(f.jsx)("div",{className:"subLevel",children:this.generateCodeItems(w)})]})}}]),a}(n.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.config,t=e.calendarDays,a=e.checkInURL,r=e.codesURL,n=e.webEventURL,c=e.buildsURL,s=this.props.stateManager;return Object(f.jsxs)("div",{className:"Sidebar",children:[Object(f.jsx)(N,{text:"Check In",handler:function(){window.open(a)}}),Object(f.jsx)(N,{text:"Web Event",handler:function(){window.open(n)}}),Object(f.jsx)(k,{url:r}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(x,{stateManager:s,calendarDays:t}),Object(f.jsx)(C,{stateManager:s}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(N,{text:"Build",handler:function(){window.open(c)}}),Object(f.jsx)(N,{text:"Calculator"})]})}}]),a}(n.a.Component),I=a(19),D=a(12),L=a(9);function A(){var e=L.defaultState,t=function(){var t=JSON.parse(localStorage.getItem("config"));return t||e},a=Object(r.useState)(t()),n=Object(I.a)(a,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){var e;e=c,localStorage.setItem("config",JSON.stringify(e))}),[c]),{getUserConfig:function(){return c},loadUserConfig:t,updateUserConfig:function(e){var t=Object(D.a)(Object(D.a)({},c),e);s(t)}}}a(42),a(43);function U(){for(var e=function(e,t){var a=new Date(e.valueOf());return a.setDate(a.getDate()+t),a},t=new Date,a=[],r=0;r<7;++r)a.push(e(t,r));var n=A(),c=n.getUserConfig();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(y,{displayOrder:a,userConfig:c,config:L}),Object(f.jsx)(S,{userConfig:c,config:L,stateManager:n})]})}var R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root")),R()},9:function(e){e.exports=JSON.parse('{"calendarDays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"checkInURL":"https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=en-us","codesURL":"https://genshin.mihoyo.com/m/en/gift","webEventURL":"https://webstatic-sea.mihoyo.com/ys/event/answer-question/index.html?activity_no=d2a9f2f0b4f242aa&lang=en&device_type=pc&ext=%7b%22loc%22%3a%7b%22x%22%3a1572.389892578125%2c%22y%22%3a253.2342529296875%2c%22z%22%3a-1629.1458740234375%7d%2c%22platform%22%3a%22WinST%22%7d&game_version=OSRELWin1.4.0_R2381708_S2452521_D2437269#/","buildsURL":"https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/pubhtml?gid=654398186#","spiralAbyssResetDays":[1,16],"resetDay":"Sunday","defaultState":{"trackedCharacters":[" "],"transformerDay":""}}')}},[[44,1,2]]]);
//# sourceMappingURL=main.a937a3e1.chunk.js.map