(this.webpackJsonpgenshindashboard2=this.webpackJsonpgenshindashboard2||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"rarity":{"1":"onestar","2":"twostar","3":"threestar","4":"fourstar","5":"fivestar"}}')},19:function(e){e.exports=JSON.parse('["WTNTBYSZJNRD","8A6ABHTH2N9Z","UTNBBGSZ3NQM","SBNBUK67M37Z","GS6ACJ775KNV","GENSHINGIFT"]')},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),c=a(17),s=a.n(c),i=(a(25),a(1)),o=a(2),u=a(4),l=a(3),d=a(7),f=a(0),j=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"convertURISafe",value:function(e){return escape(e.replace(/["']/g,"").split(" ").join("_"))}},{key:"createEntityImage",value:function(e,t,a){var r=Array.isArray(t)?t.join(" "):t;return Object(f.jsx)("div",{className:r,children:Object(f.jsx)("img",{src:e,alt:a})})}},{key:"render",value:function(){var e=this.props,t=e.imageSrc,a=e.classNames,r=e.entityName;return this.createEntityImage(t,a,r)}}]),a}(n.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"createMaterialURL",value:function(e){var t=e["5starname"]||e["4starname"];return t||(t=e.name),"img/items/Item_".concat(this.convertURISafe(t),".png")}},{key:"render",value:function(){var e=this.props,t=e.material,a=e.classNames,r=[];return a&&(r=Array.isArray(a)?a:[a]),this.createEntityImage(this.createMaterialURL(t),["MaterialImage"].concat(Object(d.a)(r)),t.name)}}]),a}(j),p=a(6),g=a.n(p),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).createResetInfo=function(){var t=e.props;if(t.day===t.config.resetDay)return Object(f.jsx)("div",{className:"Reset",children:"Incoming Reset Day!"})},e.createMaterialImages=function(t,a){var r=e.getQueryHandler(t),n=r(a,{matchCategories:!0}),c=[];return n.forEach((function(e){var t=r(e);c.push(Object(f.jsx)(h,{material:t},t.name))})),c},e}return Object(o.a)(a,[{key:"getQueryHandler",value:function(e){switch(e){case"talent":return g.a.talentmaterialtypes;case"weapon":return g.a.weaponmaterialtypes;case"rarity":return g.a.rarity;default:throw new Error("getQueryHandler: No type specified")}}},{key:"render",value:function(){var e=this.props.day;return Object(f.jsxs)("div",{className:"CalendarTop",children:[Object(f.jsx)("div",{className:"day",children:e}),Object(f.jsx)("div",{className:"container",children:this.createMaterialImages("talent",e)}),Object(f.jsx)("div",{className:"container",children:this.createMaterialImages("weapon",e)}),this.createResetInfo()]})}}]),a}(n.a.Component),b=a(18),v=function e(){var t=this;Object(i.a)(this,e),this.getQueryHandler=function(e){switch(e){case"talent":return g.a.talentmaterialtypes;case"character":return g.a.characters;case"weapon":return g.a.weapons;case"material":return g.a.weaponmaterialtypes;case"rarity":return g.a.rarity;default:throw new Error("getQueryHandler: No type specified")}},this.convertQuery=function(e,a){try{return t.config[e][a]}catch(r){return a}},this.getData=function(e,a,r){var n;switch(r){case"all":n={matchCategories:!0}}return t.getQueryHandler(e)(a,n)},this.getRarityData=function(e){return t.getData("rarity",t.convertQuery("rarity",e))},this.getRarityImage=function(e){return t.getRarityData(e).image},this.config=b},y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).createTransformerImage=function(){var e=r.props;if(e.day===e.userConfig.transformerDay)return Object(f.jsx)(h,{material:{name:"Parametric Transformer"},classNames:"transformer"})},r.createSpiralAbyssImage=function(){var e=r.props,t=e.date,a=e.config.spiralAbyssResetDays,n=t.getDate();if(a.includes(n))return Object(f.jsx)(j,{imageSrc:"img/domains/spiral_abyss.png",classNames:"SpiralAbyss",entityName:"SpiralAbyss"})},r.createEntityImage=function(e){var t,a=r.props,n=a.day,c=a.userConfig,s={character:{material:"talent",propName:"talentmaterialtype"},weapon:{material:"material",propName:"weaponmaterialtype"}},i=r.integrator.getData(s[e].material,n,"all").map((function(t){return r.integrator.getData(e,t,"all")})),o=(t=[]).concat.apply(t,Object(d.a)(i)),u=[];return c[e],c[e].forEach((function(t){if(o.includes(t)){var a=r.integrator.getData(e,t),n=r.integrator.getData(s[e].material,a[s[e].propName]);u.push(Object(f.jsxs)("div",{className:"CharacterIcon",children:[Object(f.jsx)("img",{src:a.images.icon,alt:t}),Object(f.jsx)(h,{material:n},n.name)]},"calBotCharIcon".concat(t)))}})),u},r.createCharacterImage=function(){var e,t=r.props,a=t.day,n=t.userConfig,c=r.integrator.getData("talent",a,"all").map((function(e){return r.integrator.getData("character",e,"all")})),s=(e=[]).concat.apply(e,Object(d.a)(c)),i=[];return n.trackedCharacters.forEach((function(e){if(s.includes(e)){var t=r.integrator.getData("character",e),a=r.integrator.getData("talent",t.talentmaterialtype);i.push(Object(f.jsxs)("div",{className:"CharacterIcon",children:[Object(f.jsx)("img",{src:t.images.icon,alt:e}),Object(f.jsx)(h,{material:a},a.name)]},"calBotCharIcon".concat(e)))}})),i},r.integrator=new v,r}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"CalendarBottom",children:[this.createTransformerImage(),this.createSpiralAbyssImage(),this.createEntityImage("character"),this.createEntityImage("weapon")]})}}]),a}(n.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.date,a=e.config,r=e.userConfig,n=a.calendarDays[t.getDay()];return Object(f.jsxs)("div",{className:["CalendarItem",n].join(" "),children:[Object(f.jsx)("div",{className:"frame",children:" "}),Object(f.jsx)(m,{day:n,config:a}),Object(f.jsx)(y,{day:n,date:t,config:a,userConfig:r})]})}}]),a}(n.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).generateCalendarItems=function(){var t=e.props,a=t.displayOrder,r=t.config,n=t.userConfig,c=[];return a.forEach((function(e){c.push(Object(f.jsx)(O,{date:e,config:r,userConfig:n},e.getDay()))})),c},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Calendar",children:this.generateCalendarItems()})}}]),a}(n.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).toggleOpen=function(){r.setState({showSubLevel:!r.state.showSubLevel})},r.createMenu=function(e,t){var a=r.state.showSubLevel&&Object(f.jsx)("div",{className:"subLevel",children:t});return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"topLevel",onClick:r.toggleOpen,children:e}),a]})},r.state={showSubLevel:!0},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.topLevelText,a=e.subLevelItems;return this.createMenu(t,a)}}]),a}(n.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).toggleTracking=function(e,t){var a,n=r.props.stateManager,c=n.getUserConfig(t),s={};c.length&&c.includes(e)?(a=Object(d.a)(c),r.removeFromArray(a,e)):a=[].concat(Object(d.a)(c),[e]),s[t]=a,n.updateUserConfig(s)},r.generateItems=function(e,t){var a=r.props,n=a.stateManager,c=a.displayedRarities,s=a.ignoredEntities,i=n.getUserConfig(t),o=[];return c.forEach((function(a){var n=r.integrator.getData(e,a,"all"),c=[];n&&(n.forEach((function(e){if(!s||!s.includes(e)){var a=i.includes(e);c.push(Object(f.jsxs)("div",{className:"tracker ".concat(a&&"selected"),onClick:function(){r.toggleTracking(e,t)},children:[a&&Object(f.jsx)("div",{className:"primogem"}),e]},e))}})),o.push(Object(f.jsx)(C,{topLevelText:Object(f.jsx)("img",{src:r.integrator.getRarityImage(a),alt:a}),subLevelItems:c})))})),o},r.integrator=new v,r}return Object(o.a)(a,[{key:"removeFromArray",value:function(e,t){e.splice(e.indexOf(t),1)}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{})}}]),a}(C),I=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.createMenu("Character Tracker",this.generateItems("character","character"))}}]),a}(N),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).createTransformerDayItems=function(){var t=e.props,a=t.calendarDays,r=t.stateManager,n=[],c=r.getUserConfig().transformerDay;return a.forEach((function(e){var t=c===e;n.push(Object(f.jsxs)("div",{className:"transformerDay ".concat(t&&"selected"),onClick:function(){return r.updateUserConfig({transformerDay:e})},children:[t&&Object(f.jsx)("div",{className:"primogem"}),e]},"transformer".concat(e)))})),n},e}return Object(o.a)(a,[{key:"render",value:function(){return this.createMenu("Set Transformer",this.createTransformerDayItems())}}]),a}(C),D=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.handler;return Object(f.jsx)("div",{className:"topLevel",onClick:a,children:t})}}]),a}(n.a.Component),S=a(19),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).copyToClipboard=function(e){e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},e.generateCodeItems=function(t){var a=[];return t.forEach((function(t){a.push(Object(f.jsx)("input",{className:"code",onClick:function(t){return e.copyToClipboard(t.target)},value:t},t))})),a},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.url;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(D,{text:"Codes",handler:function(){window.open(e)}}),Object(f.jsx)("div",{className:"subLevel",children:this.generateCodeItems(S)})]})}}]),a}(n.a.Component),R=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.createMenu("Weapon Tracker",this.generateItems("weapon","weapon"))}}]),a}(N),L=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.config,t=e.calendarDays,a=e.checkInURL,r=e.codesURL,n=e.webEventURL,c=e.buildsURL,s=e.displayedRarities,i=e.ignoredCharacters,o=this.props.stateManager;return Object(f.jsxs)("div",{className:"Sidebar",children:[Object(f.jsx)(D,{text:"Check In",handler:function(){window.open(a)}}),Object(f.jsx)(D,{text:"Web Event",handler:function(){window.open(n)}}),Object(f.jsx)(k,{url:r}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(D,{text:"Builds",handler:function(){window.open(c)}}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(I,{stateManager:o,displayedRarities:s,ignoredEntities:i}),Object(f.jsx)(R,{stateManager:o,displayedRarities:s}),Object(f.jsx)(w,{stateManager:o,calendarDays:t}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(D,{text:"Calculator"})]})}}]),a}(n.a.Component),T=a(20),E=a(10),M=a(9);function U(){var e=M.defaultState,t=function(){var t=JSON.parse(localStorage.getItem("config"));return t||e},a=Object(r.useState)(Object(E.a)(Object(E.a)({},e),t())),n=Object(T.a)(a,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){var e;e=c,localStorage.setItem("config",JSON.stringify(e))}),[c]),{getUserConfig:function(e){return e?c[e]:c},loadUserConfig:t,updateUserConfig:function(e){var t=Object(E.a)(Object(E.a)({},c),e);s(t)}}}a(44),a(45);function A(){for(var e=function(e,t){var a=new Date(e.valueOf());return a.setDate(a.getDate()+t),a},t=new Date,a=[],r=0;r<7;++r)a.push(e(t,r));var n=U(),c=n.getUserConfig();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(x,{displayOrder:a,userConfig:c,config:M}),Object(f.jsx)(L,{userConfig:c,config:M,stateManager:n})]})}var B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),B()},9:function(e){e.exports=JSON.parse('{"calendarDays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"checkInURL":"https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=en-us","codesURL":"https://genshin.mihoyo.com/m/en/gift","webEventURL":"https://webstatic-sea.mihoyo.com/ys/event/e20210428invite/index.html?utm_source=share&utm_medium=link#/GBBEBQJA6N","buildsURL":"https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/pubhtml?gid=654398186#","spiralAbyssResetDays":[1,16],"displayedRarities":[5,4,3],"ignoredCharacters":["Lumine","Aether"],"resetDay":"Sunday","defaultState":{"character":[],"weapon":[],"transformerDay":""}}')}},[[46,1,2]]]);
//# sourceMappingURL=main.91114f8a.chunk.js.map