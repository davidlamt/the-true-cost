(this["webpackJsonpthe-true-cost"]=this["webpackJsonpthe-true-cost"]||[]).push([[0],{117:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(6),a=t.n(i),c=(t(33),t(2)),l=t(1),s=t(7),u=t(26),f=t.n(u),h=function(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.currentPrincipal,o=void 0===r?0:r,i=t.interestRate,a=void 0===i?8:i,c=o;n>0;)c+=e,c*=1+a/100,n--;return c};function b(){var e=Object(c.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n"]);return b=function(){return e},e}function d(){var e=Object(c.a)(["\n  background-color: #5d9198;\n  border-radius: 5px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1em;\n  min-height: 50px;\n  min-width: 100px;\n  outline: none;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #466d72;\n  }\n\n  &:disabled {\n    background-color: #c0d5d8;\n    cursor: not-allowed;\n  }\n"]);return d=function(){return e},e}var p=Object(l.a)(d()),g=Object(l.a)(b());function m(){var e=Object(c.a)(["\n                  margin: 10px 5px 0 5px;\n                "]);return m=function(){return e},e}function v(){var e=Object(c.a)(["\n            display: flex;\n            justify-content: space-evenly;\n            flex-wrap: wrap;\n          "]);return v=function(){return e},e}function y(){var e=Object(c.a)(["\n            margin-bottom: 10px;\n            text-align: center;\n          "]);return y=function(){return e},e}function O(){var e=Object(c.a)(["\n          position: relative;\n          margin: 30px;\n          height: 1px;\n\n          &:before {\n            content: '';\n            position: absolute;\n            left: 5%;\n            width: 90%;\n            height: 1px;\n            background-image: linear-gradient(to right, transparent, rgb(48, 49, 51), transparent);\n          }\n        "]);return O=function(){return e},e}function j(){var e=Object(c.a)(["\n          a {\n            color: #000;\n            display: inline-block;\n            font-weight: bold;\n            padding: 0 1px;\n            position: relative;\n            text-decoration: none;\n            transition: color 0.3s ease;\n          }\n\n          a::after {\n            background: linear-gradient(0.25turn, #364958, #55828b);\n            bottom: 0;\n            content: '';\n            height: 10%;\n            left: 0;\n            position: absolute;\n            transition: height 0.3s ease;\n            width: 100%;\n            z-index: -1;\n          }\n\n          a:hover {\n            color: white;\n\n            &::after {\n              height: 100%;\n            }\n          }\n        "]);return j=function(){return e},e}function w(){var e=Object(c.a)(["\n            font-size: 1.5em;\n          "]);return w=function(){return e},e}function x(){var e=Object(c.a)(["\n          font-size: 1.5em;\n          margin-bottom: 20px;\n          text-align: center;\n        "]);return x=function(){return e},e}function R(){var e=Object(c.a)(["\n        line-height: 1.5;\n        text-align: left;\n      "]);return R=function(){return e},e}var z=Intl.NumberFormat("en-US",{currency:"USD",style:"currency"}),k=[10,20,30,40],E=function(e){var n=e.expense,t=Object(r.useState)(10),o=Object(s.a)(t,2),i=o[0],a=o[1],c=12*n.monthlyCost,u=z.format(c*i),b=z.format(h(c,i));return Object(l.b)("div",{css:Object(l.a)(R())},Object(l.b)("div",{css:Object(l.a)(x())},"In ",i," years, you could have had"," ",Object(l.b)("span",{css:Object(l.a)(w())},b,Object(l.b)("sup",null,"*"))," ","instead..."),Object(l.b)("div",null,"While you only spent ",u,", the opportunity cost is your real enemy. The number above shows you what could have been if you took the monthly expense and invested it instead."),Object(l.b)(f.a,{css:Object(l.a)(j()),source:n.description}),Object(l.b)("div",null,Object(l.b)("sup",null,"*"),"This calculation was made assuming an 8% average annual return"),Object(l.b)("div",{css:Object(l.a)(O())}),Object(l.b)("div",null,Object(l.b)("div",{css:Object(l.a)(y())},"Want to feel even worse? Let's see what would have happened over a longer period."),Object(l.b)("div",{css:Object(l.a)(v())},k.map((function(e){return Object(l.b)("button",{css:[p,Object(l.a)(m())],key:e,onClick:function(){return a(e)},disabled:e===i},e," Years")})))))};function C(){var e=Object(c.a)(["\n          font-size: 1.5em;\n        "]);return C=function(){return e},e}function P(){var e=Object(c.a)(["\n          -webkit-text-fill-color: transparent;\n          background: linear-gradient(0.25turn, #364958, #55828b);\n          font-size: 3em;\n          margin: auto;\n          text-align: center;\n          width: fit-content;\n          -webkit-background-clip: text;\n        "]);return P=function(){return e},e}var M=function(){return Object(l.b)("header",null,Object(l.b)("h1",{css:Object(l.a)(P())},"The True Cost"),Object(l.b)("h2",{css:Object(l.a)(C())},"What is it ",Object(l.b)("i",null,"really")," costing you?"))},H=t(119);function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function W(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var A=o.a.createElement("path",{d:"M26.823 48.438v204.581h204.582l24.118.012-17.055-17.067-59.647-59.647a205.31 205.31 0 0 1 12.284-10.96 202.213 202.213 0 0 1 17.61-12.898l-.011-.012c31.346-20.445 68.812-32.327 109.088-32.327h.082v-.036c55.159.012 105.131 22.406 141.273 58.56 36.143 36.142 58.525 86.08 58.56 141.19h-.035v.249h.035c-.012 55.158-22.406 105.143-58.56 141.273-36.154 36.154-86.091 58.524-141.19 58.56v-.036h-.402v.036a200.224 200.224 0 0 1-56.93-8.292v-.012a199.318 199.318 0 0 1-29.752-11.527c-48.91-23.646-86.742-66.686-103.513-119.104l-2.22-6.933H2.184l2.457 11.976.071.319v.035a319.09 319.09 0 0 0 18.425 58.548v.048a319.811 319.811 0 0 0 28.76 53.08c57.426 85.583 155.117 141.957 265.894 141.957h.082v-.035c88.36-.024 168.38-35.859 226.231-93.71v-.047c57.816-57.84 93.627-137.79 93.675-226.054h.035v-.248h-.035c-.024-88.324-35.86-168.321-93.746-226.196l.024-.024C486.207 35.857 406.245.07 317.958.023v-.036h-.32v.036C272.26.046 229.054 9.53 189.96 26.574a335.597 335.597 0 0 0-18.78 8.918c-28.524 14.728-54.555 33.661-77.257 55.925L43.867 41.374 26.823 24.318v24.119z"}),I=function(e){var n=e.svgRef,t=e.title,r=W(e,["svgRef","title"]);return o.a.createElement("svg",S({width:64,height:64,viewBox:"0 0 640 640",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",ref:n},r),t?o.a.createElement("title",null,t):null,A)},B=o.a.forwardRef((function(e,n){return o.a.createElement(I,S({svgRef:n},e))}));t.p;function V(){return(V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function T(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var $=o.a.createElement("path",{d:"M163325 241641c1912 813 2803 3024 1988 4935-813 1912-3023 2802-4935 1990-12557-5381-21002-16550-26590-31741-13315-8245-25904-12379-37783-12515-11276-128-22024 3346-32256 10324 5979 5184 10874 11602 14628 19317 912 1871 133 4127-1738 5039s-4128 133-5039-1738c-5541-11385-13882-19535-24791-24720-11162-5305-25057-7587-41434-7123-2075 57-3803-1579-3860-3654s1578-3803 3654-3860c17572-498 32609 2012 44852 7831 2607 1239 5085 2626 7432 4160 12133-8839 24998-13246 38611-13091 11067 126 22549 3272 34454 9502-562-2156-1084-4372-1564-6644-3641-17213-5022-37723-5321-59813 2614-1546 5107-3272 7466-5161 148 23569 1417 45435 5224 63440 4560 21564 12725 37401 27004 43520v2zM75549 53941c4208 0 8019 1706 10778 4464 2757 2758 4464 6569 4464 10778 0 4208-1707 8019-4464 10778-2759 2757-6570 4464-10778 4464s-8019-1707-10777-4464c-2758-2759-4464-6570-4464-10778s1706-8019 4464-10778c2758-2758 6569-4464 10777-4464zm0-28952c12204 0 23252 4947 31249 12944s12944 19046 12944 31249c0 12204-4947 23252-12944 31249s-19046 12944-31249 12944-23252-4947-31249-12944-12944-19045-12944-31249c0-12203 4947-23252 12944-31249s19046-12944 31249-12944zm26256 17938c-6719-6719-16002-10876-26256-10876s-19537 4156-26256 10876c-6719 6719-10876 16002-10876 26256s4156 19536 10876 26256c6719 6719 16002 10875 26256 10875s19537-4156 26256-10875 10875-16002 10875-26256-4156-19537-10875-26256zM75549 0c38207 0 69182 30974 69182 69183 0 38207-30975 69182-69182 69182S6367 107390 6367 69183c0-19103 7744-36399 20263-48919C39149 7745 56445 0 75549 0zm57800 69183c0-31922-25878-57801-57800-57801-15962 0-30413 6470-40872 16929S17748 53221 17748 69183c0 31922 25878 57800 57800 57800s57800-25878 57800-57800zm-52366-5435c-1390-1391-3313-2251-5435-2251s-4044 860-5435 2251-2251 3313-2251 5435 860 4044 2251 5435 3313 2251 5435 2251 4044-860 5435-2251c1391-1390 2251-3313 2251-5435s-860-4044-2251-5435zm74145 17355c18768 15892 33109 36769 43778 61746 13278 31082 20869 68505 24253 110535 5970 17099 8739 30928 5834 41025-3143 10922-12220 17236-29825 18227-43633 11100-82347 18028-115291 20068-33316 2062-60787-891-81555-9596-1919-797-2830-3001-2033-4921s3000-2831 4921-2033c19681 8250 46042 11028 78225 9036 32475-2010 70825-8896 114185-19940l2 7c241-61 491-98 750-111 14085-715 21170-5148 23372-12800 2425-8428-232-20917-5767-36716-159-370-262-774-295-1198-3304-41455-10721-78253-23700-108636-9314-21802-21496-40303-37085-54850 211-2120 320-4269 320-6445 0-1140-31-2272-90-3397z",fillRule:"nonzero"}),F=function(e){var n=e.svgRef,t=e.title,r=T(e,["svgRef","title"]);return o.a.createElement("svg",V({viewBox:"0 0 230154 333334",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",ref:n},r),t?o.a.createElement("title",null,t):null,$)},Q=o.a.forwardRef((function(e,n){return o.a.createElement(F,V({svgRef:n},e))}));t.p;function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function J(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var L=o.a.createElement("path",{d:"M405 603l617 617 856-256c3-1 6-2 9-2 11-19 24-37 40-53 43-43 103-70 169-70s126 27 169 70 70 103 70 169-27 126-70 169c-18 18-38 32-60 44l-232 879 607 607c30 30 30 80 0 110-11 11-23 17-37 21-393 122-764 106-1090-3l98 350c2 6 3 13 3 19 0 32-26 58-58 58H536c-5 0-9-1-14-2-31-8-50-39-43-71l210-850-60-66c-177-205-310-444-387-692-109-347-107-712 36-1027 18-39 64-57 103-39 9 4 17 9 23 16zm912 2251c-11-5-23-10-34-15-184-84-352-198-497-332l-176 710h808l-101-362zm845-2738c-32-5-54-34-50-66 5-32 34-54 66-50 278 40 513 128 685 287 174 160 282 390 302 710 2 32-22 60-55 62-32 2-60-22-62-55-19-288-113-492-265-632-153-141-367-220-623-257zm16 291c-32-5-53-35-48-67s35-53 67-48c190 31 350 97 468 210 119 115 193 276 209 497 2 32-22 60-54 62s-60-22-62-54c-14-190-75-327-173-421-99-96-239-152-405-179zm-4 313c-32-3-55-32-52-64s32-55 64-52c112 12 206 49 276 115 70 67 115 161 128 289 3 32-20 61-52 64s-61-20-64-52c-11-99-43-169-93-217s-121-74-208-84zm-317 372l-741 222 327 327 449-438c-20-33-33-71-35-112zm118 193l-450 439 351 351 200-758c-37-3-71-14-102-32zm207-293c-22-22-53-36-86-36-34 0-64 14-86 36s-36 53-36 86c0 34 14 64 36 86s53 36 86 36c34 0 64-14 86-36s36-53 36-86c0-34-14-64-36-86z",fillRule:"nonzero"}),U=function(e){var n=e.svgRef,t=e.title,r=J(e,["svgRef","title"]);return o.a.createElement("svg",_({viewBox:"0 0 3333 3333",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",ref:n},r),t?o.a.createElement("title",null,t):null,L)},Y=o.a.forwardRef((function(e,n){return o.a.createElement(U,_({svgRef:n},e))}));t.p;function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function G(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var q=o.a.createElement("path",{d:"M230061 74c6438 0 5366 5 5644 4 20147-134 31694-208 42637 15259 125 161 244 327 356 500l19976 30829c159 245 315 482 474 721 71 96 140 195 207 296 2159 3239 5111 7668 5111 12355 0 6233-3270 10769-13167 10769h-11663l-26821 205235c-314 2404-566 4972-823 7595-1359 13874-2855 29130-13973 39238-12233 11121-30349 10691-45894 10321-1968-46-3881-92-7278-92H94800v-22c-13656 391-24196-3105-31705-10376l-345-339c-114-114-228-228-340-344-112-115-224-231-335-348l-330-353-325-358-320-363c-106-122-211-244-315-368l-310-372-305-378-300-382-295-388-291-392-285-397-281-402-276-407-271-412-266-417-261-421-256-426-252-431-246-436-241-441-236-445-232-451-227-455-222-460-217-465-213-470-207-475-202-479-197-484-193-489-188-494-183-498-178-504-173-508-168-513-163-518-159-523-154-528-149-533-144-537-139-542-134-547-129-552-125-557-119-561-115-566-109-571h-1l-105-575-100-580-95-585h-1l-90-590-85-594-81-600-76-604-71-609-67-614-62-618-57-623-52-628-48-633-43-637-38-643-3861-29540c-83-387-137-785-156-1193L22090 70810h-9010C3352 70810 4 66233 4 59748c0-5377 3803-11032 6471-14997 581-864 1097-1631 1276-1925l13480-22226C33864-231 37129-197 60283 52c1129 12 2355 26 7888 26h161894zm35006 70844H36656l23790 182036h180831l23789-182036zM62339 267436l2915 22299c24 189 41 379 51 566h5c527 10094 3126 17474 7855 22053 4628 4481 11741 6604 21410 6298l226-3v-25h90047c1342 0 4432 74 7617 149 12861 306 27849 661 35824-6588 7030-6392 8238-18706 9335-29904 272-2770 537-5482 880-8104l881-6740H62339z",fillRule:"nonzero"}),D=function(e){var n=e.svgRef,t=e.title,r=G(e,["svgRef","title"]);return o.a.createElement("svg",N({viewBox:"0 0 304466 333334",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",ref:n},r),t?o.a.createElement("title",null,t):null,q)},K=o.a.forwardRef((function(e,n){return o.a.createElement(D,N({svgRef:n},e))}));t.p;function X(){return(X=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ee=o.a.createElement("path",{d:"M338 0h1258c93 0 178 38 239 99s99 146 99 239v2657c0 93-38 178-99 239s-146 99-239 99H338c-93 0-178-38-239-99S0 3088 0 2995V338c0-93 38-178 99-239S245 0 338 0zm447 3065c-22 0-41-18-41-41 0-22 18-41 41-41h372c22 0 41 18 41 41 0 22-18 41-41 41H785zM750 194c36 0 65 29 65 65s-29 65-65 65-65-29-65-65 29-65 65-65zm217 0c36 0 65 29 65 65s-29 65-65 65-65-29-65-65 29-65 65-65zm217 0c36 0 65 29 65 65s-29 65-65 65-65-29-65-65 29-65 65-65zM81 2693h1772V521H81v2172zm1772 81H81v220c0 71 29 135 76 181 47 47 111 76 181 76h1258c71 0 135-29 181-76 47-47 76-111 76-181v-220zM81 439h1772V338c0-71-29-135-76-181-47-47-111-76-181-76H338c-71 0-135 29-181 76-47 47-76 111-76 181v101z",fillRule:"nonzero"}),ne=function(e){var n=e.svgRef,t=e.title,r=Z(e,["svgRef","title"]);return o.a.createElement("svg",X({viewBox:"0 0 1934 3333",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",ref:n},r),t?o.a.createElement("title",null,t):null,ee)},te=o.a.forwardRef((function(e,n){return o.a.createElement(ne,X({svgRef:n},e))}));t.p;function re(){return(re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function oe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ie,ae,ce,le=o.a.createElement("path",{d:"M614.299 270.039V588.893h-74.528V539.63H100.217v49.264H25.688V270.04H-.001v-49.028h62.683l34.96-108.745c10.3-32.02 27.52-61.158 61.159-61.158h335.366c33.638 0 53.044 28.535 61.158 61.158l27.036 108.745h57.627v49.028h-25.69zM208.373 441.254h220.148v51.91H208.373v-51.91zM50.647 320.343c56.103 1.76 90.415 25.276 99.237 74.245H50.647v-74.245zm531.644 0c-56.091 1.76-90.415 25.276-99.226 74.245h99.226v-74.245zM89.482 221.011h461.037l-19.76-91.182c-5.421-25.004-20.977-46.595-46.607-46.595H165.309c-25.618 0-38.764 22.181-46.595 46.595L89.48 221.01z"}),se=function(e){var n=e.svgRef,t=e.title,r=oe(e,["svgRef","title"]);return o.a.createElement("svg",re({width:64,height:64,shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 640 640",ref:n},r),t?o.a.createElement("title",null,t):null,le)},ue=o.a.forwardRef((function(e,n){return o.a.createElement(se,re({svgRef:n},e))})),fe=(t.p,[{name:"Gym",imageComponent:Q,imageWidth:50,monthlyCost:58,description:"According to [this article](https://www.healthline.com/health-news/gym-memberships-can-be-a-trap#1), the average American spends around $58 a month on gym memberships. Maybe you should consider trying out [calisthenics](https://en.wikipedia.org/wiki/Calisthenics) since it can be done almost anywhere and the [optional equipment](https://amzn.to/2AYCsYM) is minimal.\n\nFurthermore, by removing the friction of having to physically go to a facility, you also reduce the likeliness that you won't exerise due to laziness. A win-win situation in my book!"},{name:"Cable",imageComponent:Y,imageWidth:70,monthlyCost:64,description:"According to [this article](https://costaide.com/cable-tv-pricing/), the average American spends around $64 a month on cable TV. Maybe you should consider subscribing to streaming service like [Netflix](https://www.netflix.com) instead.\n\nA majority of cable's cost is baked into the numerous channels it provides. However, do you _really_ need that many channels? Food for thought: why would you want to pay for shows you won't and can't (opportunity cost) watch?"},{name:"Coffee",imageComponent:K,imageWidth:60,monthlyCost:92,description:"According to [this article](https://www.fool.com/retirement/2018/01/22/one-third-of-americans-spend-more-on-coffee-than-o.aspx), the average American spends around $92 a month on coffee. Maybe you should consider buying your own [coffee maker](https://amzn.to/2VbtJJE)?\n\nUsing coffee as an excuse to hang out with coworkers? Try taking a nice stroll together instead (seriously). Using it to keep yourself awake? Keep in mind that there is a diminishing effect - consider cycling it and / or making your own [green tea](https://amzn.to/3hOsk5L)!"},{name:"Phone",imageComponent:te,imageWidth:45,monthlyCost:99,description:"According to [this article](https://www.cnbc.com/2019/10/25/you-can-save-up-to-268-a-year-by-switching-your-cell-phone-plan.html), the average American spends around $99 a month on cell phone bills. Maybe you should consider switching to a pay-as-you-go plan like [Google Fi](https://g.co/fi/r/21U088)?\n\nMost of cost of phone bills lie with data usage. Many plans offer unlimited data - do you _really_ need that? With the wide availability of WiFi nowadays and a bit of diligence on your part, you could drastically reduce data usage."},{name:"Car",imageComponent:ue,imageWidth:65,monthlyCost:554,description:"According to [this article](https://www.creditkarma.com/auto/i/what-is-average-car-payment), the average American spends around $554 a month on car payments for a new vehicle. Maybe you should consider purchasing a [used one](https://www.kbb.com/) instead?\n\nWhile many believe having a car payment in perpetuity is normal (by upgrading it incessantly), you're smarter than that. Plan on owning your vehicle for its entire lifespan."}]);function he(){var e=Object(c.a)(["\n                      border-bottom-left-radius: 0;\n                      border-top-left-radius: 0;\n                    "]);return he=function(){return e},e}function be(){var e=Object(c.a)(["\n                    background-color: #ebebeb;\n                    border-bottom-left-radius: 5px;\n                    border-top-left-radius: 5px;\n                    border: 1px solid transparent;\n                    outline: none;\n                    padding: 15px;\n                    transition: background-color 0.3s ease;\n\n                    &:focus {\n                      background-color: #fff;\n                      border: 1px solid #ebebeb;\n                    }\n                  "]);return be=function(){return e},e}function de(){var e=Object(c.a)(["\n                  display: flex;\n                  justify-content: center;\n                  margin-top: 30px;\n                "]);return de=function(){return e},e}function pe(){var e=Object(c.a)(["\n                        transition: transform 0.3s ease;\n                        width: ","px;\n                        margin-bottom: 10px;\n\n                        &:hover {\n                          transform: scale(1.3);\n                        }\n                      "]);return pe=function(){return e},e}function ge(){var e=Object(c.a)(["\n                  align-items: center;\n                  display: flex;\n                  flex-wrap: wrap;\n                  justify-content: space-evenly;\n                "]);return ge=function(){return e},e}function me(){var e=Object(c.a)(["\n            height: auto;\n            min-height: ","px;\n            padding: 50px;\n\n            &.fade-enter {\n              max-height: 0;\n              opacity: 0;\n            }\n\n            &.fade-enter-active {\n              max-height: 5000px;\n              opacity: 1;\n              transition: opacity 2s ease, max-height 2s ease;\n            }\n\n            &.fade-exit {\n              height: ","px;\n              opacity: 0;\n            }\n\n            &.fade-exit-active {\n              height: 0;\n              opacity: 1;\n              transition: opacity 1s ease, height 1s ease;\n            }\n          "]);return me=function(){return e},e}function ve(){var e=Object(c.a)(["\n            max-width: 70%;\n          "]);return ve=function(){return e},e}function ye(){var e=Object(c.a)(["\n                fill: #fff;\n                height: 100%;\n                width: 100%;\n              "]);return ye=function(){return e},e}function Oe(){var e=Object(c.a)(["\n                display: flex;\n                height: 25px;\n                left: 20px;\n                padding: 0;\n                position: absolute;\n                transition: transform 0.3s ease;\n                width: 25px;\n\n                &:hover {\n                  transform: rotate(-180deg);\n                }\n              "]);return Oe=function(){return e},e}function je(){var e=Object(c.a)(["\n          align-items: center;\n          background-color: #364958;\n          border-top-left-radius: 5px;\n          border-top-right-radius: 5px;\n          color: white;\n          display: flex;\n          justify-content: center;\n          margin: 0;\n          min-height: ","px;\n          padding: 0;\n          position: relative;\n        "]);return je=function(){return e},e}function we(){var e=Object(c.a)(["\n        border-radius: 5px;\n        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);\n        margin: 0 10%;\n      "]);return we=function(){return e},e}var xe=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(""),a=Object(s.a)(i,2),c=a[0],u=a[1],f="Choose a Monthly Expense";return t&&(f="".concat(t.name,": $").concat(t.monthlyCost," / month")),Object(l.b)("div",{css:Object(l.a)(we())},Object(l.b)("div",{css:Object(l.a)(je(),ce||50),ref:function(e){e&&e.clientHeight&&!ce&&(ce=e.clientHeight)}},t&&Object(l.b)("button",{css:[g,Object(l.a)(Oe())],onClick:function(){return o(null)}},Object(l.b)(B,{css:Object(l.a)(ye())})),Object(l.b)("h3",{css:Object(l.a)(ve())},f)),Object(l.b)(H.a,{in:!!t,timeout:2e3,classNames:"fade"},Object(l.b)("div",{css:Object(l.a)(me(),ae||50,ie?ie.clientHeight:0),ref:function(e){e&&e.clientHeight&&!ae&&(ae=e.clientHeight-100)}},!t&&Object(l.b)("div",null,Object(l.b)("div",{css:Object(l.a)(ge())},fe.map((function(e){return Object(l.b)("button",{css:[g,Object(l.a)(pe(),e.imageWidth||50)],key:e.name,onClick:function(){return o(e)}},e.imageComponent&&Object(l.b)(e.imageComponent,null))}))),Object(l.b)("div",{css:Object(l.a)(de())},Object(l.b)("input",{css:Object(l.a)(be()),onChange:function(e){return e.target.validity.valid&&u(e.target.value)},pattern:"[0-9]*",placeholder:"Enter your own",value:c}),Object(l.b)("button",{css:[p,Object(l.a)(he())],disabled:!c,onClick:function(){return o({name:"Your guilty pleasure",monthlyCost:+c,description:"Is this expense really worth it? There is no right answer - not everything has to be fiscal-centric. Just make sure you understand the _true_ cost when weighing your options!"})}},"Calculate"))),Object(l.b)("div",{ref:function(e){return ie=e}},t&&Object(l.b)(E,{expense:t})))))};function Re(){var e=Object(c.a)(["\n        height: 100%;\n        margin: 0 auto;\n        max-width: 60em;\n        padding: 50px 0;\n        text-align: center;\n        word-break: break-word;\n      "]);return Re=function(){return e},e}var ze=function(){return Object(l.b)("div",{css:Object(l.a)(Re())},Object(l.b)(M,null),Object(l.b)(xe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,n,t){e.exports=t(117)},33:function(e,n,t){}},[[28,1,2]]]);
//# sourceMappingURL=main.3a3884e7.chunk.js.map