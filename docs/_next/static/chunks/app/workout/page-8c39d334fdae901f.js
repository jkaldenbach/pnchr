(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{4769:function(e,n,t){Promise.resolve().then(t.bind(t,8320))},8320:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(7437),o=t(2265),i=t(6691),s=t.n(i),a=t(1396),c=t.n(a),l=t(3234),u=t.n(l),d=t(1149),m=t.n(d),h={src:"/pnchr/_next/static/media/cap.ecbb85e9.png",height:202,width:217},v=t(2058),p=t(2576),f=t.n(p);function g(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{className:f().input,type:"checkbox",id:e.name,name:e.name,checked:e.checked,onChange:function(n){e.onChange(n.target.checked,e.name)}}),(0,r.jsxs)("label",{className:f().container,htmlFor:e.name,children:[e.checked?(0,r.jsx)(v.pkh,{}):(0,r.jsx)(v.jUK,{}),(0,r.jsx)("span",{children:e.label})]})]})}var b=t(5846),x=t(9425),k=t(4606),_=t(3814),j=t.n(_);function C(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{className:j().input,type:"checkbox",id:e.name,name:e.name,checked:e.checked,onChange:function(n){e.onChange(n.target.checked,e.name)}}),(0,r.jsxs)("label",{className:j().container,htmlFor:e.name,children:[e.checked?(0,r.jsx)(k.XGl,{className:j().icon}):(0,r.jsx)(k.YXN,{className:j().icon}),(0,r.jsx)("span",{children:e.label})]})]})}var y=t(6368);let N="\n  1 1\n  1 1b\n  1 1 2\n  1 1 2 3\n  1 1 4\n  1 1 4b\n  1 1 4 bblk 6\n  1 1 rr 2 s 4\n  1 1 rr 4 3 rl 3 6\n  1 1 sr 2\n  1 1 sr sl 3\n  1 1b 2\n  1 2\n  1 2 1\n  1 2 1 2\n  1 2 1 2 2\n  1 2 3\n  1 2 3 rl 3\n  1 2 3b\n  1 2 3 2\n  1 2 3 2 3b\n  1 2 3 6\n  1 2 5\n  3 5 3\n  1 2 5 2\n  1 2 rr 4 3\n  1 2 rr rl 3\n  1 2 s 2\n  1 2 sr 2 rr 4 3\n  1 2 sr 6\n  1 2b\n  1 2b 3\n  1 3\n  1 4 3\n  1 6\n  1 6 3\n  1 6 3 2\n  1 s 1 2\n  1b 1b\n  1b 2\n  1b 2b\n  2 1\n  2 2\n  2 3\n  2 3 2 3b\n  2 3b\n  2b 2b\n  3 3\n  3 3b\n  3 4 5 6\n  3b 6 3\n  3b 3b\n  4 4\n  4b 4b\n  4b 6\n  5 2 3 2\n  6 2\n  6 3\n  6 3b\n  6 5\n".split("\n").map(e=>e.trim().split(" "));function w(e){if("number"==typeof e)return e.toString();if(e.endsWith("b"))return e.replace("b"," body");switch(e){case"rr":return"roll right";case"rl":return"roll left";case"sr":return"slip right";case"sl":return"slip left";case"s":return"slip";case"bblk":return"body block";default:return e}}function S(e){return null==e?void 0:e.map(w).join(" - ")}function I(e){let n=Math.floor(Math.random()*e.length),t=e[n];return t}let R=N.filter(e=>e.length>=5),q=["padWork","combos","situps","pushups","squats"],E={padWork:"Pad Work",combos:"Combos",situps:"Sit-Ups",pushups:"Push-Ups",squats:"Squats"};function T(e){let{message:n,setWorkoutInterval:t}=function(e){let[n,t]=o.useState(0),[r,i]=o.useState(),[s,a]=o.useState();return o.useEffect(()=>{let e;if((null==r?void 0:r.kind)==="work")switch(a(E[null==r?void 0:r.name]),null==r?void 0:r.name){case"situps":case"pushups":case"squats":var n;setTimeout(()=>{a("Keep pushing!")},(null!==(n=null==r?void 0:r.duration)&&void 0!==n?n:0)*1e3/2);break;case"padWork":e=setInterval(()=>{a(function(){let e=I(N);return S(e)}())},2e3);break;case"combos":let t=function(e){let n=I(R),t=Math.floor(e/30);console.log("phases",t),console.log("combo",n);let r=[];for(let e=0;e<(t||1);e++)console.log("in loop",n.slice(0,-1*e)),r.unshift(0===e?[...n]:n.slice(0,-1*e));return console.log(r),r}(null==r?void 0:r.duration),o=0;a(S(t[0])),o+=1,e=setInterval(()=>{a(S(t[o])),o+=1},3e4);break;default:a("freestyle")}else(null==r?void 0:r.kind)==="recovery"&&(a(r.name&&!["punches","slips"].includes(r.name)?r.name:"RECOVERY"),setTimeout(()=>{switch(null==r?void 0:r.name){case"punches":a("Easy 1's and 2's");break;case"slips":a("Slip left; slip right")}},1e3),setTimeout(()=>{r.nextName&&a("Next up: ".concat(E[r.nextName]||r.nextName))},r.duration/2));return()=>clearInterval(e)},[r]),o.useEffect(()=>{if(s){let e=new SpeechSynthesisUtterance(s.replaceAll(" - "," "));e.rate=.95,window.speechSynthesis.speak(e)}},[s]),{message:s,setWorkoutInterval:i}}(e.workoutConfig),i=o.useMemo(()=>({...e.timerConfig,workSequence:q.filter(n=>e.workoutConfig[n]).sort(()=>1-Math.floor(2*Math.random())),recoverySequence:e.workoutConfig.activeRecovery?["punches","slips"]:void 0}),[]);return(0,r.jsx)(y.H,{config:i,onComplete:e.onComplete,onIntervalChange:t,children:n})}function L(){let[e,n]=o.useState("config-workouts"),[t,i]=o.useState({padWork:!0,combos:!0,situps:!0,pushups:!0,squats:!0,activeRecovery:!1}),[a,l]=o.useState({punchInterval:90,repInterval:30,recoveryInterval:5,numberOfSets:15,countDown:3});function d(e,n){i(t=>({...t,[n]:e}))}let v=["padWork","combos"].filter(e=>t[e]).length,p=["situps","pushups","squats"].filter(e=>t[e]).length,f=!!p;return(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsx)(b.h,{children:"Workout"}),"config-workouts"===e&&(0,r.jsxs)("form",{className:m().workoutConfig,onSubmit:function(e){e.preventDefault(),n("config-timer")},children:[(0,r.jsx)("h2",{className:u().header,children:"Configure Activities"}),(0,r.jsx)("h3",{children:"Punching"}),(0,r.jsx)(g,{label:"Pad Work",name:"padWork",checked:t.padWork,onChange:d}),(0,r.jsx)(g,{label:"Combos",name:"combos",checked:t.combos,onChange:d}),(0,r.jsx)("h3",{children:"Reps"}),(0,r.jsx)(g,{label:"Sit Ups",name:"situps",checked:t.situps,onChange:d}),(0,r.jsx)(g,{label:"Push Ups",name:"pushups",checked:t.pushups,onChange:d}),(0,r.jsx)(g,{label:"Squats",name:"squats",checked:t.squats,onChange:d}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Recovery"}),(0,r.jsx)(C,{label:"Active Recovery",name:"activeRecovery",checked:t.activeRecovery,onChange:d})]}),(0,r.jsx)("button",{className:u().cta,type:"submit",children:"Continue"})]}),"config-timer"===e&&(0,r.jsxs)("form",{className:m().configForm,onSubmit:function(e){e.preventDefault(),n("active")},children:[(0,r.jsx)(x.U,{value:a,onChange:l,enableReps:f,intervalRatio:f?v/p:void 0}),(0,r.jsx)("button",{className:u().cta,type:"submit",children:"Start"}),(0,r.jsx)("button",{type:"button",onClick:()=>n("config-workouts"),children:"Cancel"})]}),"active"===e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(T,{timerConfig:a,workoutConfig:t,onComplete:()=>n("complete")})}),"complete"===e&&(0,r.jsxs)("div",{className:m().completeContainer,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"You Rock!"}),(0,r.jsx)(c(),{href:"/",className:u().buttonLink,children:"Home"})]}),(0,r.jsx)(s(),{alt:"The Captain salutes you",src:h.src,height:h.height,width:h.width})]})]})}},5846:function(e,n,t){"use strict";t.d(n,{h:function(){return d}});var r=t(7437);t(2265);var o=t(4440),i=t.n(o),s=t(1396),a=t.n(s),c=t(2058),l=t(6926),u=t.n(l);function d(e){let{className:n,children:t,...o}=e;return(0,r.jsxs)("div",{className:i()(u().container,n),...o,children:[(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)(c.HW9,{className:u().icon})}),(0,r.jsxs)("h1",{children:[" ",t]})]})}},6368:function(e,n,t){"use strict";t.d(n,{H:function(){return f}});var r=t(7437),o=t(2265),i=t(4440),s=t.n(i),a=t(5794),c=t.n(a),l=t(2202),u=t.n(l);function d(e){return(0,r.jsxs)("div",{className:s()(u().container,e.className),children:[(0,r.jsx)("span",{className:u().content,children:e.children}),(0,r.jsx)("svg",{className:u().ring,viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("g",{children:[(0,r.jsx)("title",{children:"Time remainging"}),(0,r.jsx)("circle",{id:"ring-track",className:s()(u().ring),style:{strokeDashoffset:0},r:"69.85699",cy:"81",cx:"81","stroke-width":"10","stroke-linecap":"round",stroke:"#000",fill:"none"}),(0,r.jsx)("circle",{id:"ring",className:s()(u().ring,u()[e.color]),style:{strokeDashoffset:440*e.fraction},r:"69.85699",cy:"81",cx:"81","stroke-width":"10","stroke-linecap":"round",stroke:"#000",fill:"none"}),e.innerFraction&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("circle",{id:"inner-ring-track",className:u().innerRing,style:{strokeDashoffset:0},r:"59.85699",cy:"81",cx:"81","stroke-width":"10","stroke-linecap":"round",stroke:"#000",fill:"none"}),(0,r.jsx)("circle",{id:"inner-ring",className:s()(u().innerRing,e.innerColor?u()[e.innerColor]:void 0),style:{strokeDashoffset:377*e.innerFraction},r:"59.85699",cy:"81",cx:"81","stroke-width":"10","stroke-linecap":"round",stroke:"#000",fill:"none"})]})]})})]})}var m=t(8374),h=t.n(m);function v(e){let{secondsRemaining:n}=function(e,n){let t=o.useRef(),[r,i]=o.useState(e);return o.useEffect(()=>{let e="--color-background",n="--color-background-alt",t=window.getComputedStyle(document.body).getPropertyValue(e),r=window.getComputedStyle(document.body).getPropertyValue(n);return document.documentElement.style.setProperty(e,"var(--color-black)"),document.documentElement.style.setProperty(n,"var(--color-dark-green)"),()=>{document.documentElement.style.setProperty(e,t),document.documentElement.style.setProperty(n,r)}},[]),o.useEffect(()=>{t.current||(t.current=setInterval(()=>{i(e=>e-1)},1e3))}),o.useEffect(()=>{r<=0&&(clearInterval(t.current),n())},[r]),{secondsRemaining:r}}(e.duration,e.onComplete);o.useEffect(()=>{if(n<=3){let e=0===n?875:800,t=0===n?100:50,r=new AudioContext,o=r.createOscillator();o.type="sine",o.frequency.value=e,o.connect(r.destination),o.start(),setTimeout(()=>{o.stop()},t)}},[n]);let t=n/e.duration,i="work"===e.kind?{color:"blue",fraction:t}:{color:"blue",fraction:0,innerColor:"red",innerFraction:t};return(0,r.jsx)(d,{...i,children:n})}let p=["pushups","situps","squats"];function f(e){var n,t,i,a;let{activeInterval:l,incActiveInterval:u,intervals:d}=function(e){let[n,t]=o.useState(0),r=[...Array(2*e.numberOfSets-1)].map((n,t)=>{if(t%2!=0)return{kind:"recovery",duration:e.recoveryInterval,name:e.recoverySequence?e.recoverySequence[(t-1)/2%e.recoverySequence.length]:void 0};{let n=e.workSequence?e.workSequence[t/2%e.workSequence.length]:void 0,r=!!n&&p.includes(n);return{kind:"work",duration:r?e.repInterval:e.punchInterval,name:n}}}),i=o.useCallback(()=>{t(e=>e+1)},[]);return{activeInterval:n,incActiveInterval:i,intervals:[{kind:"recovery",duration:e.countDown,name:"Get Ready!"},...r]}}(e.config);return o.useEffect(()=>{var n;e.onIntervalChange&&e.onIntervalChange({...d[l],nextName:null===(n=d[l+1])||void 0===n?void 0:n.name})},[l]),(0,r.jsxs)("div",{className:h().container,children:[(0,r.jsx)("h2",{className:h().title,children:(null===(n=d[l])||void 0===n?void 0:n.name)||c()(null===(t=d[l])||void 0===t?void 0:t.kind)}),e.children&&(0,r.jsx)("div",{className:h().content,children:e.children}),(0,r.jsx)(v,{duration:null===(i=d[l])||void 0===i?void 0:i.duration,kind:null===(a=d[l])||void 0===a?void 0:a.kind,onComplete:function(){l===d.length-1?e.onComplete():u()}},l),(0,r.jsx)("div",{className:h().intervalList,children:d.map((e,n)=>"work"===e.kind?(0,r.jsx)("div",{className:s()(h().intervalListItem,{[h().intervalListComplete]:n<l,[h().intervalListActive]:n===l})},n):null)})]})}},9425:function(e,n,t){"use strict";t.d(n,{U:function(){return s}});var r=t(7437);t(2265);var o=t(2875),i=t.n(o);function s(e){function n(n){return function(t){e.onChange({...e.value,[n]:Number(t.target.value)})}}return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsxs)("div",{className:i().field,children:[(0,r.jsx)("label",{htmlFor:"punchInterval",children:"Punching Work Interval (seconds)"}),(0,r.jsx)("input",{type:"number",name:"punchInterval",onChange:n("punchInterval"),value:e.value.punchInterval})]}),e.enableReps&&(0,r.jsxs)("div",{className:i().field,children:[(0,r.jsx)("label",{htmlFor:"repInterval",children:"Reps Work Interval (seconds)"}),(0,r.jsx)("input",{type:"number",name:"repInterval",onChange:n("repInterval"),value:e.value.repInterval})]}),(0,r.jsxs)("div",{className:i().field,children:[(0,r.jsx)("label",{htmlFor:"recoveryInterval",children:"Recovery Interval (seconds)"}),(0,r.jsx)("input",{type:"number",name:"recoveryInterval",onChange:n("recoveryInterval"),value:e.value.recoveryInterval})]}),(0,r.jsxs)("div",{className:i().field,children:[(0,r.jsx)("label",{htmlFor:"numberOfSets",children:"Number of Sets"}),(0,r.jsx)("input",{type:"number",name:"numberOfSets",onChange:n("numberOfSets"),value:e.value.numberOfSets})]}),(0,r.jsxs)("div",{className:i().field,children:[(0,r.jsx)("label",{children:"Total Time"}),(0,r.jsx)("div",{children:function(){let n=(e.enableReps&&e.intervalRatio?e.intervalRatio*e.value.punchInterval*e.value.numberOfSets+1/e.intervalRatio*e.value.repInterval*e.value.numberOfSets:e.value.punchInterval*e.value.numberOfSets)+e.value.recoveryInterval*(e.value.numberOfSets-1),t=(n/60).toString(),[r,o]=t.split(".");if(!o)return"".concat(r," Minutes");let i=Math.round(60*Number("0.".concat(o)));return"".concat(r," Min ").concat(i," Sec")}()})]})]})}},3234:function(e){e.exports={container:"pageCommon_container__pXWMq",content:"pageCommon_content__RDhtU",cta:"pageCommon_cta___p77y",buttonLink:"pageCommon_buttonLink__vOCj3"}},1149:function(e){e.exports={workoutConfig:"page_workoutConfig__LmcB4",configForm:"page_configForm__gDCXN",completeContainer:"page_completeContainer__CgGaU"}},2576:function(e){e.exports={container:"ContainedCheckbox_container__WBVGb",input:"ContainedCheckbox_input__00D_c"}},6926:function(e){e.exports={container:"Header_container__L4JQR",icon:"Header_icon__JOAy9"}},2202:function(e){e.exports={container:"Ring_container__BUPCm",content:"Ring_content__JhKJj",blue:"Ring_blue__s4Aa9",red:"Ring_red__JaFxZ",ring:"Ring_ring__srRKj",innerRing:"Ring_innerRing__kcNtc"}},8374:function(e){e.exports={container:"Timer_container__tGzOg",title:"Timer_title__NdJrG",content:"Timer_content__icoXS",intervalList:"Timer_intervalList__LWOss",intervalListItem:"Timer_intervalListItem__qiez_",intervalListActive:"Timer_intervalListActive__3kYEm",intervalListComplete:"Timer_intervalListComplete__Q3J_t"}},2875:function(e){e.exports={container:"TimerConfigForm_container__4zRDG",field:"TimerConfigForm_field__SXD7a"}},3814:function(e){e.exports={container:"ToggleCheckbox_container___Cgaa",input:"ToggleCheckbox_input__DNMEE",icon:"ToggleCheckbox_icon__wQsGL"}}},function(e){e.O(0,[122,447,326,324,691,971,472,744],function(){return e(e.s=4769)}),_N_E=e.O()}]);