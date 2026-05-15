import{a as e,n as t,o as n,s as r}from"./index-2WSr6Us_.js";import{t as i}from"./status-note-0089e9c9-CaLoD7Jj.js";import{t as a}from"./index-713f92a5-Be1EzDwH.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p}from"./index-264b2c3e-WyeBrFiR.js";function m(e,t){return p(2,arguments),u(e,l(t)*1e3)}function h(e,t){p(2,arguments);var n=s(e),r=s(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function g(e,t){p(2,arguments);var n=s(e),r=s(t),i=n.getFullYear()-r.getFullYear(),a=n.getMonth()-r.getMonth();return i*12+a}function _(e,t){return p(2,arguments),s(e).getTime()-s(t).getTime()}var v={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},y=`trunc`;function b(e){return e?v[e]:v[y]}function x(e){p(1,arguments);var t=s(e);return t.setHours(23,59,59,999),t}function S(e){p(1,arguments);var t=s(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function C(e){p(1,arguments);var t=s(e);return x(t).getTime()===S(t).getTime()}function w(e,t){p(2,arguments);var n=s(e),r=s(t),i=h(n,r),a=Math.abs(g(n,r)),o;if(a<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*a);var c=h(n,r)===-i;C(s(e))&&a===1&&h(e,r)===1&&(c=!1),o=i*(a-Number(c))}return o===0?0:o}function T(e,t,n){p(2,arguments);var r=_(e,t)/1e3;return b(n?.roundingMethod)(r)}function E(e){return f({},e)}var D=1440,O=2520,k=43200,A=86400;function j(e,t,n){p(2,arguments);var r=c(),i=n?.locale??r.locale??d;if(!i.formatDistance)throw RangeError(`locale must contain formatDistance property`);var a=h(e,t);if(isNaN(a))throw RangeError(`Invalid time value`);var l=f(E(n),{addSuffix:!!n?.addSuffix,comparison:a}),u,m;a>0?(u=s(t),m=s(e)):(u=s(e),m=s(t));var g=T(m,u),_=(o(m)-o(u))/1e3,v=Math.round((g-_)/60),y;if(v<2)return n!=null&&n.includeSeconds?g<5?i.formatDistance(`lessThanXSeconds`,5,l):g<10?i.formatDistance(`lessThanXSeconds`,10,l):g<20?i.formatDistance(`lessThanXSeconds`,20,l):g<40?i.formatDistance(`halfAMinute`,0,l):g<60?i.formatDistance(`lessThanXMinutes`,1,l):i.formatDistance(`xMinutes`,1,l):v===0?i.formatDistance(`lessThanXMinutes`,1,l):i.formatDistance(`xMinutes`,v,l);if(v<45)return i.formatDistance(`xMinutes`,v,l);if(v<90)return i.formatDistance(`aboutXHours`,1,l);if(v<D){var b=Math.round(v/60);return i.formatDistance(`aboutXHours`,b,l)}else if(v<O)return i.formatDistance(`xDays`,1,l);else if(v<k){var x=Math.round(v/D);return i.formatDistance(`xDays`,x,l)}else if(v<A)return y=Math.round(v/k),i.formatDistance(`aboutXMonths`,y,l);if(y=w(m,u),y<12){var S=Math.round(v/k);return i.formatDistance(`xMonths`,S,l)}else{var C=y%12,j=Math.floor(y/12);return C<3?i.formatDistance(`aboutXYears`,j,l):C<9?i.formatDistance(`overXYears`,j,l):i.formatDistance(`almostXYears`,j+1,l)}}function M(e,t){return p(2,arguments),m(e,-l(t))}var N=`:host{--width:400px;--radius:var(--telekom-radius-small);--background:var(--scl-color-background-standard);--box-shadow:var(--telekom-shadow-app-bar-top-raised);--spacing:var(--telekom-spacing-composition-space-06);--border-header:1px solid var(--scl-color-grey-20);--font-size-header:var(--telekom-text-style-heading-4);--font-size-header-small:var(--telekom-typography-font-size-small);--height-progress:var(--telekom-spacing-composition-space-02)}.toast{width:var(--width);display:flex;opacity:0;z-index:1;position:fixed;background:var(--background);box-shadow:var(--box-shadow);box-sizing:border-box;border-radius:var(--radius);flex-direction:column;justify-content:space-between}.toast__body{padding:var(--spacing)}.toast__header{margin:0;display:flex;padding:var(--spacing);border-bottom:var(--border-header);justify-content:space-between;font:var(--font-size-header)}.toast__header a{cursor:pointer}.toast__header small{margin-top:5px;margin-left:120px;font-size:var(--font-size-header-small)}.toast__progress{left:0;bottom:0;height:var(--height-progress);display:block;overflow:hidden;position:absolute;background:red}`,P=class{constructor(e){r(this,e),this.size=``,this.variant=``,this.autoHide=!1,this.animated=!0,this.positionTop=12,this.positionRight=12,this.fadeDuration=500,this.progress=0,this.toastHeightWithOffset=0,this.hideToast=!1,this.timerId=null,this.close=()=>{clearInterval(this.timerId),this.hideToast=!0,setTimeout(()=>{this.timerId=null,this.opened=!1,this.progress=0},this.fadeDuration)},this.getTime=()=>this.time&&j(M(this.time,3),new Date,{addSuffix:!0}),this.setToastTimeout=()=>{this.opened&&this.autoHide!==!1&&!this.timerId&&(this.timerId=setInterval(()=>{this.progress+=1/(this.getAutoHide()/1e3),this.progress>=100&&this.close()},10))},this.transitions=e=>`
    @keyframes fadeIn {
      from {
        opacity: 0;
        top: -${e}px;
      }
      to {
        opacity: 1;
        top: ${this.positionTop}px;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        top: ${this.positionTop}px;
      }
      to {
        opacity: 0;
        top: -${e}px;
      }
    }
  `,this.animationStyle=e=>`
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeIn ${this.fadeDuration/1e3}s ease-in-out;
        top: ${this.positionTop}px;
        opacity: 1;
      },
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeOut ${this.fadeDuration/1e3}s ease-in-out;
        top: -${e}px;
        opacity: 0;
      }
    `}connectedCallback(){i({source:this.element,type:`warn`})}disconnectedCallback(){this.timerId&&(clearTimeout(this.timerId),this.timerId=null,this.opened=!1,this.progress=0)}async open(){this.opened=!0,this.hideToast=!1}render(){return this.setToastTimeout(),n(t,null,this.styles&&n(`style`,null,this.styles),n(`style`,null,this.transitions(this.toastHeightWithOffset)),n(`style`,null,this.animationStyle(this.toastHeightWithOffset)),n(`div`,{class:this.getCssClassMap(),part:this.getBasePartMap()},n(`div`,{part:`header`,class:`toast__header`},n(`slot`,{name:`header`}),n(`small`,null,this.getTime()),n(`a`,{onClick:this.close},n(`span`,{"aria-hidden":`true`},`×`))),this.autoHide&&n(`div`,{part:`progress`,class:`toast__progress`,style:{width:`${this.progress}%`}},`\xA0`),n(`div`,{part:`body`,class:`toast__body`},n(`slot`,null))))}getToastHeightWithOffset(){let e=this.element.shadowRoot.querySelector(`.toast`).scrollHeight;this.toastHeightWithOffset=e+this.positionTop}getAutoHide(){return typeof this.autoHide==`number`||typeof this.autoHide==`string`?Number(this.autoHide):0}getBasePartMap(){return this.getCssOrBasePartMap(`basePart`)}getCssClassMap(){return this.getCssOrBasePartMap(`css`)}getCssOrBasePartMap(e){let t=`toast`,n=e===`basePart`?``:`${t}`;return a(e===`basePart`?`base`:t,this.size&&`${n}--size-${this.size}`,this.variant&&`${n}--variant-${this.variant}`,!!this.opened&&`${n}--opened`,!this.hideToast&&`${n}--show`,!!this.hideToast&&`${n}--hide`)}get element(){return e(this)}};P.style=N;export{P as scale_toast};