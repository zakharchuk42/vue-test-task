(function(){"use strict";var e={479:function(e,t,l){var r=l(711),a=l(991),o=l(837),n=l(891);const u=(0,o.iH)(null),s=e=>((0,a.dD)("data-v-13b0fd41"),e=e(),(0,a.Cn)(),e),d={class:"header"},i={key:0,class:"user-info"},c=s((()=>(0,a._)("strong",null,"Name:",-1))),p=s((()=>(0,a._)("strong",null,"Username:",-1))),v=s((()=>(0,a._)("strong",null,"Email:",-1))),f=s((()=>(0,a._)("strong",null,"Phone:",-1))),m=s((()=>(0,a._)("strong",null,"Website:",-1)));var g=(0,a.aZ)({setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("div",d,[(0,o.SU)(u)?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",null,[c,(0,a.Uk)(" "+(0,n.zw)((0,o.SU)(u).name),1)]),(0,a._)("div",null,[p,(0,a.Uk)(" "+(0,n.zw)((0,o.SU)(u).username),1)]),(0,a._)("div",null,[v,(0,a.Uk)(" "+(0,n.zw)((0,o.SU)(u).email),1)]),(0,a._)("div",null,[f,(0,a.Uk)(" "+(0,n.zw)((0,o.SU)(u).phone),1)]),(0,a._)("div",null,[m,(0,a.Uk)(" "+(0,n.zw)((0,o.SU)(u).website),1)])])):(0,a.kq)("",!0)]))}}),_=l(497);const h=(0,_.Z)(g,[["__scopeId","data-v-13b0fd41"]]);var w=h;const b={class:"footer"};function y(e,t){return(0,a.wg)(),(0,a.iD)("div",b)}const U={},S=(0,_.Z)(U,[["render",y],["__scopeId","data-v-773784e2"]]);var D=S;const k={class:"body"};function I(e,t){return(0,a.wg)(),(0,a.iD)("div",k,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}const Z={},q=(0,_.Z)(Z,[["render",I],["__scopeId","data-v-d81b4cf2"]]);var H=q;const O={class:"main"};var V=(0,a.aZ)({setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("div",O,[(0,a.Wm)(w),(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}),(0,a.Wm)(D)]))}});const W=(0,_.Z)(V,[["__scopeId","data-v-04256ab2"]]);var E=W,T=(0,a.aZ)({setup(e){return(e,t)=>{const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(E,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l)])),_:1})}}});const x=T;var j=x,z=l(183),$=l(493);function N(e){return`${e.slice(0,1)}-${e.slice(1,4)}-${e.slice(4,7)}-${e.slice(7)}`}const P="https://jsonplaceholder.typicode.com",A=[{label:"All users",value:null},{label:"User 1",value:1},{label:"User 2",value:2},{label:"User 3",value:3},{label:"User 4",value:4},{label:"User 5",value:5},{label:"User 6",value:6},{label:"User 7",value:7},{label:"User 8",value:8},{label:"User 9",value:9},{label:"User 10",value:10}],C=[{label:"All status",value:null},{label:"Completed",value:"true"},{label:"Uncompleted",value:"false"}];function F(){const e=(0,o.iH)(""),t=(0,o.iH)(""),l=(0,o.iH)(""),r=(0,o.iH)(!1),a=(0,z.tv)(),n=async()=>{const o={username:e.value,phone:t.value};try{r.value=!0;const{data:n}=await $.Z.get(`${P}/users`),s=n.find((e=>e.username===o.username&&e.phone.split(" ")[0]===N(o.phone)));s?(u.value=s,await a.push("/dashboard"),e.value="",t.value="",l.value=""):l.value="Login error"}catch(n){console.error("Error fetching user:",n),l.value="Error fetching user"}finally{r.value=!1}};return{username:e,phone:t,loginError:l,login:n,loading:r}}const L=()=>{const e=(0,o.iH)(""),t=t=>{const l=t.value,r=/^[a-zA-Z]+$/;r.test(l)?e.value="":(e.value="Будь ласка, введіть тільки букви.",t.value=l.replace(/\d/g,""))};return{errorText:e,validate:t}},R=()=>{const e=(0,o.iH)(""),t=t=>{const l=t.value,r=/^\d+$/;r.test(l)?(t.value=l.slice(0,11),e.value=""):(e.value="Будь ласка, введіть тільки цифри.",t.value=l.replace(/[^\d]/g,""))};return{errorText:e,validate:t}},G=()=>{const e=(0,o.iH)(""),t=e=>{const t=e.value;e.value=t.trim()};return{errorText:e,validate:t}};var M,Y;(function(e){e["TEXT"]="text",e["PHONE"]="phone",e["WITHOUT"]="without"})(M||(M={})),function(e){e["GREEN"]="green",e["RED"]="red"}(Y||(Y={}));const K={key:0,class:"input-wrapper"},X=["required","placeholder"],B={key:1,class:"input-wrapper"},J=["required","placeholder"];var Q=(0,a.aZ)({props:{modelValue:{type:String,required:!0},placeholder:{type:String},required:{type:Boolean,default:!1},type:{type:String,default:M.WITHOUT}},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,u={text:L(),phone:R(),without:G()},s=(0,o.Fl)({get(){return l.modelValue},set(e){t("update:modelValue",e.trim())}}),{errorText:d,validate:i}=u[l.type];function c(){i(s)}return(t,l)=>e.type?((0,a.wg)(),(0,a.iD)("div",B,[(0,a.wy)((0,a._)("input",{type:"text",required:e.required,placeholder:e.placeholder,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.dq)(s)?s.value=e:null),onInput:c},null,40,J),[[r.nr,(0,o.SU)(s)]]),(0,a.wy)((0,a._)("p",{class:"error-text"},(0,n.zw)((0,o.SU)(d)),513),[[r.F8,(0,o.SU)(d)]])])):((0,a.wg)(),(0,a.iD)("div",K,[(0,a.wy)((0,a._)("input",{type:"text",required:e.required,placeholder:e.placeholder,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,o.dq)(s)?s.value=e:null)},null,8,X),[[r.nr,(0,o.SU)(s)]])]))}});const ee=(0,_.Z)(Q,[["__scopeId","data-v-457bbb46"]]);var te=ee,le=(0,a.aZ)({props:{color:{type:String,default:Y.GREEN}},setup(e){const t=e,l={[Y.GREEN]:"green",[Y.RED]:"red"},r=`${l[t.color]}`;return(e,t)=>((0,a.wg)(),(0,a.iD)("button",{class:(0,n.C_)(r)},[(0,a.WI)(e.$slots,"default")]))}});const re=le;var ae=re;const oe=e=>((0,a.dD)("data-v-dbea2a24"),e=e(),(0,a.Cn)(),e),ne={class:"wrapper"},ue={class:"register-card"},se=oe((()=>(0,a._)("div",{class:"register-card__header"}," description ",-1))),de={class:"register-card__form-wrapper"},ie=oe((()=>(0,a._)("span",{class:"register-card__description"},"description",-1))),ce=(0,a.Uk)(" Login "),pe={key:0,class:"error"};var ve=(0,a.aZ)({setup(e){const{username:t,phone:l,loginError:u,login:s,loading:d}=F();return(e,i)=>((0,a.wg)(),(0,a.iD)("div",ne,[(0,a._)("div",ue,[se,(0,a._)("div",de,[ie,(0,a._)("form",{onSubmit:i[2]||(i[2]=(0,r.iM)(((...e)=>(0,o.SU)(s)&&(0,o.SU)(s)(...e)),["prevent"])),class:"register-card__form"},[(0,a.Wm)(te,{required:"",placeholder:"Username",modelValue:(0,o.SU)(t),"onUpdate:modelValue":i[0]||(i[0]=e=>(0,o.dq)(t)?t.value=e:null),type:(0,o.SU)(M).TEXT},null,8,["modelValue","type"]),(0,a.Wm)(te,{required:"",placeholder:"Phone Number",modelValue:(0,o.SU)(l),"onUpdate:modelValue":i[1]||(i[1]=e=>(0,o.dq)(l)?l.value=e:null),type:(0,o.SU)(M).PHONE},null,8,["modelValue","type"]),(0,a.Wm)(ae,{type:"submit",disabled:(0,o.SU)(d)},{default:(0,a.w5)((()=>[ce])),_:1},8,["disabled"]),(0,o.SU)(u)?((0,a.wg)(),(0,a.iD)("div",pe,(0,n.zw)((0,o.SU)(u)),1)):(0,a.kq)("",!0)],32)])])]))}});const fe=(0,_.Z)(ve,[["__scopeId","data-v-dbea2a24"]]);var me=fe;const ge=(0,o.iH)([]);function _e(e){return ge.value.filter((t=>{if(t.title.includes(e.toLowerCase()))return t}))}function he(e,t){ge.value.push({userId:+e,id:+new Date,title:t,completed:!1})}function we(){const e=(0,o.iH)(!1),t=(0,o.iH)(null),l=(0,o.iH)(null),r=(0,o.iH)("");async function a(t){try{e.value=!0;const{data:l}=await $.Z.get(`${P}/todos`,{params:t});ge.value=l}catch(l){console.error("Error fetching user:",l)}finally{e.value=!1}}return{loading:e,fetchData:a,userId:t,completed:l,findText:r}}const be={disabled:"",value:""},ye=["value","selected"];var Ue=(0,a.aZ)({props:{options:{required:!0,type:Array},placeholder:{required:!0,type:String},selected:{type:[Number,String]}},emits:["select"],setup(e,{emit:t}){function l(e){t("select",e)}return(t,r)=>((0,a.wg)(),(0,a.iD)("select",{onChange:r[0]||(r[0]=e=>l(e.target.value))},[(0,a._)("option",be,(0,n.zw)(e.placeholder),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.options,(({value:t,label:l})=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:t,selected:t===e.selected},(0,n.zw)(l),9,ye)))),128))],32))}});const Se=(0,_.Z)(Ue,[["__scopeId","data-v-30acce34"]]);var De=Se;const ke={class:"todo-item"},Ie={class:"todo-item__left"};var Ze=(0,a.aZ)({props:{todo:{type:Object,required:!0}},setup(e){return(t,l)=>((0,a.wg)(),(0,a.iD)("div",ke,[(0,a._)("div",Ie,[(0,a._)("div",null,(0,n.zw)(e.todo.userId),1),(0,a._)("div",null,(0,n.zw)(e.todo.title),1)]),(0,a._)("div",null,(0,n.zw)(e.todo.completed),1)]))}});const qe=(0,_.Z)(Ze,[["__scopeId","data-v-4a73764e"]]);var He=qe;const Oe={class:"todo-table"};var Ve=(0,a.aZ)({props:{todos:{type:Array,required:!0,default:()=>[]}},setup(e){return(t,l)=>((0,a.wg)(),(0,a.iD)("div",Oe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.todos,((e,t)=>((0,a.wg)(),(0,a.j4)(He,{key:e.id,todo:e,class:(0,n.C_)((t%2?"row-color":"row-color_secondary")+" row")},null,8,["todo","class"])))),128))]))}});const We=(0,_.Z)(Ve,[["__scopeId","data-v-e49ad020"]]);var Ee=We;const Te={class:"loading"};function xe(e,t){return(0,a.wg)(),(0,a.iD)("div",Te," LOADING... ")}const je={},ze=(0,_.Z)(je,[["render",xe],["__scopeId","data-v-30369b0e"]]);var $e=ze;const Ne={class:"add-todo"},Pe={class:"container"},Ae=(0,a.Uk)(" Add ");var Ce=(0,a.aZ)({setup(e){const t=(0,o.iH)(""),l=(0,o.iH)("");function r(){he(t.value,l.value),t.value="",l.value=""}return(e,n)=>((0,a.wg)(),(0,a.iD)("div",Ne,[(0,a._)("div",Pe,[(0,a.Wm)(te,{required:"",placeholder:"User ID",modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),type:(0,o.SU)(M).PHONE},null,8,["modelValue","type"]),(0,a.Wm)(te,{required:"",placeholder:"Text todo",modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e)},null,8,["modelValue"]),(0,a.Wm)(ae,{onClick:r},{default:(0,a.w5)((()=>[Ae])),_:1})])]))}});const Fe=(0,_.Z)(Ce,[["__scopeId","data-v-29aa0be1"]]);var Le=Fe;const Re={class:"dashboard-wrapper"},Ge={class:"header-actions"},Me={key:0,class:"loading-block"};var Ye=(0,a.aZ)({setup(e){(0,a.bv)((()=>{u({userId:null,completed:null})}));const{loading:t,userId:l,completed:r,findText:n,fetchData:u}=we();(0,a.YP)([l,r],(([e,t])=>{u({userId:"All users"===e?null:e,completed:"All status"===t?null:t})}));const s=(0,o.Fl)((()=>_e(n.value)));return(e,u)=>((0,a.wg)(),(0,a.iD)("div",Re,[(0,a._)("div",Ge,[(0,a.Wm)(te,{placeholder:"Find todo...",modelValue:(0,o.SU)(n),"onUpdate:modelValue":u[0]||(u[0]=e=>(0,o.dq)(n)?n.value=e:null)},null,8,["modelValue"]),(0,a.Wm)(De,{placeholder:"User ID",options:(0,o.SU)(A),onSelect:u[1]||(u[1]=e=>l.value=e)},null,8,["options"]),(0,a.Wm)(De,{placeholder:"Task completed",options:(0,o.SU)(C),onSelect:u[2]||(u[2]=e=>r.value=e)},null,8,["options"])]),(0,o.SU)(t)?((0,a.wg)(),(0,a.iD)("div",Me,[(0,a.Wm)($e)])):((0,a.wg)(),(0,a.j4)(Ee,{key:1,todos:(0,o.SU)(s)},null,8,["todos"])),(0,a.Wm)(Le)]))}});const Ke=(0,_.Z)(Ye,[["__scopeId","data-v-5384c65a"]]);var Xe=Ke;function Be(e,t){return(0,a.wg)(),(0,a.iD)("h1",null,"404 - Сторінку не знайдено")}const Je={},Qe=(0,_.Z)(Je,[["render",Be]]);var et=Qe;const tt=[{path:"/",name:"Login",component:me},{path:"/dashboard",name:"Dashboard",component:Xe},{path:"/:catchAll(.*)",name:"NotFound",component:et}],lt=(0,z.p7)({history:(0,z.PO)(),routes:tt});var rt=lt;const at=(0,r.ri)(j);at.use(rt),at.mount("#app")}},t={};function l(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,r,a,o){if(!r){var n=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||n>=o)&&Object.keys(l.O).every((function(e){return l.O[e](r[s])}))?r.splice(s--,1):(u=!1,o<n&&(n=o));if(u){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]}}(),function(){l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,n=r[0],u=r[1],s=r[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(a in u)l.o(u,a)&&(l.m[a]=u[a]);if(s)var i=s(l)}for(t&&t(r);d<n.length;d++)o=n[d],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(i)},r=self["webpackChunkvue_test_task"]=self["webpackChunkvue_test_task"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=l.O(void 0,[998],(function(){return l(479)}));r=l.O(r)})();
//# sourceMappingURL=app.9d21e186.js.map