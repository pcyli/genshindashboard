(this.webpackJsonpgenshindashboard2=this.webpackJsonpgenshindashboard2||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"calendarDays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"checkInURL":"https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=en-us","codesURL":"https://genshin.mihoyo.com/m/en/gift","webEventURL":"https://webstatic-sea.mihoyo.com/ys/event/e20210713warm/index.html","buildsURL":"https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/pubhtml?gid=654398186#","wishesURL":"https://genshin-wishes.com/banners","spiralAbyssResetDays":[1,16],"displayedRarities":[5,4,3],"ignoredCharacters":["Lumine","Aether"],"resetDay":"Sunday","defaultState":{"character":[],"weapon":[],"transformerDay":""}}')},21:function(e){e.exports=JSON.parse('{"rarity":{"1":"onestar","2":"twostar","3":"threestar","4":"fourstar","5":"fivestar"}}')},23:function(e){e.exports=JSON.parse('["LS6T4L9ZZ7TH","GBNA9J5H9Y4H","AS6BQKLY9GLD"]')},29:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(20),i=a.n(c),s=(a(29),a(3)),o=a(4),l=a(6),u=a(5),d=a(8),f=a(0),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"convertURISafe",value:function(e){return escape(e.replace(/["']/g,"").split(" ").join("_"))}},{key:"createEntityImage",value:function(e,t,a,r){var n=Array.isArray(t)?t.join(" "):t;return Object(f.jsx)("div",{className:n,"data-tip":"","data-for":r,children:Object(f.jsx)("img",{src:e,alt:a})})}},{key:"render",value:function(){var e=this.props,t=e.imageSrc,a=e.classNames,r=e.entityName;return this.createEntityImage(t,a,r)}}]),a}(n.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"createMaterialURL",value:function(e){return e.images?e.images.fandom||e.images.redirect:"img/items/Item_".concat(this.convertURISafe(e.name),".png")}},{key:"render",value:function(){var e=this.props,t=e.material,a=e.classNames,r=e.dataFor,n=[];return a&&(n=Array.isArray(a)?a:[a]),this.createEntityImage(this.createMaterialURL(t),["MaterialImage"].concat(Object(d.a)(n)),t.name,r)}}]),a}(h),g=a(15),p=a(16),m=a(21),b=a(7),y=a.n(b),O=Object(p.a)("sanitizeString"),v=Object(p.a)("getQueryHandler"),x=function e(){var t=this;Object(s.a)(this,e),this.config=m,this.rarityDict={2:"2starname",3:"3starname",4:"4starname",5:"5starname"},Object.defineProperty(this,O,{writable:!0,value:function(e){return e.replace(/"/g,"")}}),Object.defineProperty(this,v,{writable:!0,value:function(e){switch(e){case"talent":return y.a.talents;case"talentMaterial":return y.a.talentmaterialtypes;case"character":return y.a.characters;case"weapon":return y.a.weapons;case"weaponMaterial":return y.a.weaponmaterialtypes;case"rarity":return y.a.rarity;case"material":return y.a.materials;default:throw new Error("getQueryHandler: Unexpected Type")}}}),this.getMaterialsListByDay=function(e,a,r){var n=[];switch(e){case"character":n=t.getData("material","talent material","objects");break;case"weapon":n=t.getData("material","weapon material","objects");break;default:throw new Error("getMaterialsListByDay: Unexpected Type")}return r?n.filter((function(e){return e.rarity===r&&e.daysofweek&&e.daysofweek.includes(a)})).map((function(e){return e.name})):n.filter((function(e){return e.daysofweek&&e.daysofweek.includes(a)})).map((function(e){return e.name}))},this.getMaterialData=function(e){return t.getData("material",Object(g.a)(t,O)[O](e),"objects")},this.getMaterialLocation=function(e,a){var r=a.match(/("([^"]*))|([^ ]*)$/),n=r?r[1]||r[r.length-1]:a,c=[];switch(e){case"character":c=t.getData("talentMaterial",n,"all");break;case"weapon":c=t.getData("weaponMaterial",n,"all");break;default:throw new Error("getMaterialData: Unexpected Type")}return c?c.domainofforgery||c.domainofmastery:t.getData("material",a).dropdomain},this.getEntitiesListByMaterial=function(e,a){var r=[];switch(e){case"character":r=t.getData("talent",a,"all");break;case"weapon":r=t.getData("weapon",a,"all");break;default:throw new Error("getEntitiesListByMaterial: Unexpected Type")}return r},this.getEntityAscendMaterial=function(e,a,r){switch(e){case"character":var n=t.getData("talent",a.name).costs.lvl10[1].name;return t.getData("material",n);case"weapon":var c=t.getData("weaponMaterial",a.weaponmaterialtype);return t.getData("material",c[t.rarityDict[r]]);default:throw new Error("getEntitiesListByMaterial: Unexpected Type")}},this.convertQuery=function(e,a){try{return t.config[e][a]}catch(r){return a}},this.getData=function(e,a,r){var n;switch(r){case"all":n={matchCategories:!0};break;case"objects":n={matchCategories:!0,verboseCategories:!0}}return Object(g.a)(t,v)[v](e)(a,n)},this.getRarityData=function(e){return t.getData("rarity",t.convertQuery("rarity",e))},this.getRarityImage=function(e){return t.getRarityData(e).image}},w=a(22),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){try{var e=this.props,t=e.material,a=e.location,r=e.targetId,n=a||t.domainofmastery||t.domainofforgery||t.dropdomain.replace(/Domain of ([^:]*): /g,""),c="img/domains/".concat(n.replace(/ /g,"_").toLowerCase(),".png");return Object(f.jsxs)(w.a,{id:r,place:"bottom",type:"dark",effect:"solid",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:c,alt:n})}),t.name," Series @ ",n]})}catch(i){return Object(f.jsx)("div",{children:i.name})}}}]),a}(n.a.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).integrator=new x,e.characterRarity="4",e.weaponRarity="5",e.createResetInfo=function(){var t=e.props;if(t.day===t.config.resetDay)return Object(f.jsx)("div",{className:"Reset",children:"Incoming Reset Day!"})},e.createMaterialImages=function(t,a,r){var n=e.integrator.getMaterialsListByDay(t,a,r),c=[];return n.forEach((function(a){var r=e.integrator.getMaterialData(a),n=e.integrator.getMaterialLocation(t,a),i="calendarTop_".concat(r.name);c.push(Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{material:r,dataFor:i},i),Object(f.jsx)(C,{material:r,location:n,targetId:i},"".concat(i,"_tooltip"))]}))})),c},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.day;return Object(f.jsxs)("div",{className:"CalendarTop",children:[Object(f.jsx)("div",{className:"day",children:e}),Object(f.jsx)("div",{className:"container",children:this.createMaterialImages("character",e,this.characterRarity)}),Object(f.jsx)("div",{className:"container",children:this.createMaterialImages("weapon",e,this.weaponRarity)}),this.createResetInfo()]})}}]),a}(n.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).createTransformerImage=function(){var e=r.props;if(e.day===e.userConfig.transformerDay)return Object(f.jsx)(j,{material:{name:"Parametric Transformer"},classNames:"transformer"})},r.createSpiralAbyssImage=function(){var e=r.props,t=e.date,a=e.config.spiralAbyssResetDays,n=t.getDate();if(a.includes(n))return Object(f.jsx)(h,{imageSrc:"img/domains/spiral_abyss.png",classNames:"SpiralAbyss",entityName:"SpiralAbyss"})},r.createEntityImage=function(e,t){var a,n=r.props,c=n.day,i=n.userConfig,s=r.integrator.getMaterialsListByDay(e,c).map((function(t){return r.integrator.getEntitiesListByMaterial(e,t)})),o=(a=[]).concat.apply(a,Object(d.a)(s)),l=[];return i[e],i[e].forEach((function(a){if(o.includes(a)){var n=r.integrator.getData(e,a),c=r.integrator.getEntityAscendMaterial(e,n,t);l.push(Object(f.jsxs)("div",{className:"CharacterIcon",children:[Object(f.jsx)("img",{src:n.images.icon,alt:a}),Object(f.jsx)(j,{material:c},c.name)]},"calBotCharIcon".concat(a)))}})),l},r.integrator=new x,r}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"CalendarBottom",children:[this.createTransformerImage(),this.createSpiralAbyssImage(),this.createEntityImage("character",4),this.createEntityImage("weapon",5)]})}}]),a}(n.a.Component),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.date,a=e.config,r=e.userConfig,n=a.calendarDays[t.getDay()];return Object(f.jsxs)("div",{className:["CalendarItem",n].join(" "),children:[Object(f.jsx)("div",{className:"frame",children:" "}),Object(f.jsx)(D,{day:n,config:a}),Object(f.jsx)(k,{day:n,date:t,config:a,userConfig:r})]})}}]),a}(n.a.Component),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).generateCalendarItems=function(){var t=e.props,a=t.displayOrder,r=t.config,n=t.userConfig,c=[];return a.forEach((function(e){c.push(Object(f.jsx)(I,{date:e,config:r,userConfig:n},e.getDay()))})),c},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Calendar",children:this.generateCalendarItems()})}}]),a}(n.a.Component),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={showSubLevel:!0},e.toggleOpen=function(){e.setState({showSubLevel:!e.state.showSubLevel})},e.createMenu=function(t,a){var r=e.state.showSubLevel&&Object(f.jsx)("div",{className:"subLevel",children:a});return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"topLevel",onClick:e.toggleOpen,children:t}),r]})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.topLevelText,a=e.subLevelItems;return this.createMenu(t,a)}}]),a}(n.a.Component),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).integrator=new x,e.toggleTracking=function(t,a){var r,n=e.props.stateManager,c=n.getUserConfig(a),i={};c.length&&c.includes(t)?(r=Object(d.a)(c),e.removeFromArray(r,t)):r=[].concat(Object(d.a)(c),[t]),i[a]=r,n.updateUserConfig(i)},e.generateItems=function(t,a){var r=e.props,n=r.stateManager,c=r.displayedRarities,i=r.ignoredEntities,s=n.getUserConfig(a),o=[];return c.forEach((function(r){var n=e.integrator.getData(t,r,"all"),c=[];n&&(n.forEach((function(t){if(!i||!i.includes(t)){var r=s.includes(t);c.push(Object(f.jsxs)("div",{className:"tracker ".concat(r&&"selected"),onClick:function(){e.toggleTracking(t,a)},children:[r&&Object(f.jsx)("div",{className:"primogem"}),t]},t))}})),o.push(Object(f.jsx)(M,{topLevelText:Object(f.jsx)("img",{src:e.integrator.getRarityImage(r),alt:r}),subLevelItems:c})))})),o},e}return Object(o.a)(a,[{key:"removeFromArray",value:function(e,t){e.splice(e.indexOf(t),1)}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{})}}]),a}(M),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.createMenu("Character Tracker",this.generateItems("character","character"))}}]),a}(N),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).createTransformerDayItems=function(){var t=e.props,a=t.calendarDays,r=t.stateManager,n=[],c=r.getUserConfig().transformerDay;return a.forEach((function(e){var t=c===e;n.push(Object(f.jsxs)("div",{className:"transformerDay ".concat(t&&"selected"),onClick:function(){return r.updateUserConfig({transformerDay:e})},children:[t&&Object(f.jsx)("div",{className:"primogem"}),e]},"transformer".concat(e)))})),n},e}return Object(o.a)(a,[{key:"render",value:function(){return this.createMenu("Set Transformer",this.createTransformerDayItems())}}]),a}(M),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.handler;return Object(f.jsx)("div",{className:"topLevel",onClick:a,children:t})}}]),a}(n.a.Component),T=a(23),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).copyToClipboard=function(e){e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},e.generateCodeItems=function(t){var a=[];return t.forEach((function(t){a.push(Object(f.jsx)("input",{className:"code",onClick:function(t){return e.copyToClipboard(t.target)},value:t,readOnly:!0},t))})),a},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.url;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(E,{text:"Codes",handler:function(){window.open(e)}}),Object(f.jsx)("div",{className:"subLevel",children:this.generateCodeItems(T)})]})}}]),a}(n.a.Component),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.createMenu("Weapon Tracker",this.generateItems("weapon","weapon"))}}]),a}(N),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.config,t=e.calendarDays,a=e.checkInURL,r=e.codesURL,n=e.webEventURL,c=e.buildsURL,i=e.wishesURL,s=e.displayedRarities,o=e.ignoredCharacters,l=this.props.stateManager;return Object(f.jsxs)("div",{className:"Sidebar",children:[Object(f.jsx)(E,{text:"Check In",handler:function(){window.open(a)}}),Object(f.jsx)(E,{text:"Web Event",handler:function(){window.open(n)}}),Object(f.jsx)(U,{url:r}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(E,{text:"Builds",handler:function(){window.open(c)}}),Object(f.jsx)(E,{text:"Wishes",handler:function(){window.open(i)}}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(S,{stateManager:l,displayedRarities:s,ignoredEntities:o}),Object(f.jsx)(A,{stateManager:l,displayedRarities:s}),Object(f.jsx)(R,{stateManager:l,calendarDays:t}),Object(f.jsx)("div",{className:"divider",children:" "}),Object(f.jsx)(E,{text:"Calculator"})]})}}]),a}(n.a.Component),F=a(24),J=a(11),P=a(10);function _(){var e=P.defaultState,t=function(){var t=JSON.parse(localStorage.getItem("config"));return t||e},a=Object(r.useState)(Object(J.a)(Object(J.a)({},e),t())),n=Object(F.a)(a,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var e;e=c,localStorage.setItem("config",JSON.stringify(e))}),[c]),{getUserConfig:function(e){return e?c[e]:c},loadUserConfig:t,updateUserConfig:function(e){var t=Object(J.a)(Object(J.a)({},c),e);i(t)}}}a(50),a(51);function H(){for(var e=function(e,t){var a=new Date(e.valueOf());return a.setDate(a.getDate()+t),a},t=new Date,a=[],r=0;r<7;++r)a.push(e(t,r));var n=_(),c=n.getUserConfig();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(L,{displayOrder:a,userConfig:c,config:P}),Object(f.jsx)(B,{userConfig:c,config:P,stateManager:n})]})}var Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),Q()}},[[52,1,2]]]);
//# sourceMappingURL=main.cb19c9b5.chunk.js.map