(()=>{var e={229:function(e,r){var s,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,s=function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const r="The message port closed before a response was received.",s=e=>{const s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(s).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(e,r=void 0){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,s)=>(...n)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):s.singleCallbackArg||n.length<=1&&!1!==s.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},t=e=>1==e?"argument":"arguments",g=(e,r,s)=>new Proxy(r,{apply:(r,n,a)=>s.call(n,e,...a)});let o=Function.call.bind(Object.prototype.hasOwnProperty);const i=(e,r={},s={})=>{let n=Object.create(null),m={has:(r,s)=>s in e||s in n,get(m,A,l){if(A in n)return n[A];if(!(A in e))return;let c=e[A];if("function"==typeof c)if("function"==typeof r[A])c=g(e,e[A],r[A]);else if(o(s,A)){let r=((e,r)=>function(s,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((t,g)=>{if(r.fallbackToNoCallback)try{s[e](...n,a({resolve:t,reject:g},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),s[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,t()}else r.noCallback?(s[e](...n),t()):s[e](...n,a({resolve:t,reject:g},r))}))})(A,s[A]);c=g(e,e[A],r)}else c=c.bind(e);else if("object"==typeof c&&null!==c&&(o(r,A)||o(s,A)))c=i(c,r[A],s[A]);else{if(!o(s,"*"))return Object.defineProperty(n,A,{configurable:!0,enumerable:!0,get:()=>e[A],set(r){e[A]=r}}),c;c=i(c,r[A],s["*"])}return n[A]=c,c},set:(r,s,a,t)=>(s in n?n[s]=a:e[s]=a,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(n,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},A=Object.create(e);return new Proxy(A,m)},m=e=>({addListener(r,s,...n){r.addListener(e.get(s),...n)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}}),A=new n((e=>"function"!=typeof e?e:function(r){const s=i(r,{},{getContent:{minArgs:0,maxArgs:0}});e(s)})),l=new n((e=>"function"!=typeof e?e:function(r,s,n){let a,t,g=!1,o=new Promise((e=>{a=function(r){g=!0,e(r)}}));try{t=e(r,s,a)}catch(e){t=Promise.reject(e)}const i=!0!==t&&((m=t)&&"object"==typeof m&&"function"==typeof m.then);var m;if(!0!==t&&!i&&!g)return!1;return(i?t:o).then((e=>{n(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),c=({reject:s,resolve:n},a)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():s(new Error(e.runtime.lastError.message)):a&&a.__mozWebExtensionPolyfillReject__?s(new Error(a.message)):n(a)},x=(e,r,s,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const a=c.bind(null,{resolve:e,reject:r});n.push(a),s.sendMessage(...n)}))},d={devtools:{network:{onRequestFinished:m(A)}},runtime:{onMessage:m(l),onMessageExternal:m(l),sendMessage:x.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:x.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},u={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":u},services:{"*":u},websites:{"*":u}},i(e,d,s)};e.exports=s(chrome)}else e.exports=globalThis.browser},void 0===(n=s.apply(r,[e]))||(e.exports=n)}},r={};function s(n){var a=r[n];if(void 0!==a)return a.exports;var t=r[n]={exports:{}};return e[n].call(t.exports,t,t.exports,s),t.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var n in r)s.o(r,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=s(229),r=function(e,r,s,n){return new(s||(s=Promise))((function(a,t){function g(e){try{i(n.next(e))}catch(e){t(e)}}function o(e){try{i(n.throw(e))}catch(e){t(e)}}function i(e){var r;e.done?a(e.value):(r=e.value,r instanceof s?r:new s((function(e){e(r)}))).then(g,o)}i((n=n.apply(e,r||[])).next())}))};const n="object"==typeof chrome?chrome:"object"==typeof n?n:void 0;new class{constructor(){this.init=()=>{console.log("[===== Loaded Background Scripts =====]"),e.runtime.onInstalled.addListener(this.onInstalled),e.runtime.onMessage.addListener(this.onMessage),e.tabs.onUpdated.addListener(this.onUpdatedTab),e.tabs.onCreated.addListener(this.onCreatedTab)},this.onInstalled=()=>{console.log("[===== Installed Extension!] =====")},this.onMessage=(s,a)=>r(this,void 0,void 0,(function*(){try{console.log("[===== Received messagessss =====]",s,a);const t=n.identity.getRedirectURL();if(console.log("SIGN IN REDIRECT URI: ",t),"login"===s.type){const s=`https://api-gateway.skymavis.one/oauth2/auth?${new URLSearchParams({state:crypto.randomUUID(),client_id:"2cae5412-1ff5-4081-b51c-20a7ac319374",response_type:"code",scope:"openid offline",remember:"false",redirect_uri:t}).toString()}`;console.log("SIGN IN URL: ",s),n.identity.launchWebAuthFlow({url:s,interactive:!0},(function(s){return r(this,void 0,void 0,(function*(){if(n.runtime.lastError)return console.log("lastError",n.runtime.lastError.message),null;const r=new URL(s).searchParams.get("code")||"";e.storage.local.set({token:r})}))}))}return!0}catch(e){return console.log("[===== Error in MessageListener =====]",e),e}})),this.onMessageFromExtension=e=>{console.log("[===== Message from Long Live Connection =====]")},this.onCreatedTab=e=>{console.log("[===== New Tab Created =====]",e)},this.onUpdatedTab=(e,r,s)=>{console.log("[===== Tab Created =====]",e)},this.getURLFromTab=s=>r(this,void 0,void 0,(function*(){try{return(yield e.tabs.get(s)).url||""}catch(e){throw console.log("[===== Could not get Tab Info$(tabId) in getURLFromTab =====]",e),""}})),this.openNewTab=s=>r(this,void 0,void 0,(function*(){try{return yield e.tabs.create({url:s})}catch(e){return console.log("[===== Error in openNewTab =====]",e),null}})),this.closeTab=s=>r(this,void 0,void 0,(function*(){var r;try{yield e.tabs.remove(null!==(r=s.id)&&void 0!==r?r:0)}catch(e){console.log("[===== Error in closeTab =====]",e)}})),this.sendMessage=(s,n)=>r(this,void 0,void 0,(function*(){var r;try{return yield e.tabs.sendMessage(null!==(r=s.id)&&void 0!==r?r:0,n)}catch(e){return console.log("[===== Error in sendMessage =====]",e),null}})),this.init()}}})()})();