import{a as e,i as t,n,o as r,s as i}from"./index-CwyZArIO.js";import{t as a}from"./status-note-0089e9c9-CaLoD7Jj.js";import{t as o}from"./index-713f92a5-Be1EzDwH.js";import{n as s}from"./utils-c4af5b47-CgCdIyFH.js";var c=`:host{--width:366px;--width-icon-container:48px;--radius:var(--telekom-radius-standard);--background:var(--telekom-color-background-surface);--z-index:100;--box-shadow:var(--telekom-shadow-raised-standard);--background-success-icon-container:var(
    --telekom-color-functional-success-standard
  );--background-warning-icon-container:var(
    --telekom-color-functional-warning-standard
  );--background-error-icon-container:var(
    --telekom-color-functional-danger-standard
  );--background-informational-icon-container:var(
    --telekom-color-functional-informational-standard
  );--background-success-text-container:var(
    --telekom-color-functional-success-subtle
  );--background-warning-text-container:var(
    --telekom-color-functional-warning-subtle
  );--background-error-text-container:var(
    --telekom-color-functional-danger-subtle
  );--background-informational-text-container:var(
    --telekom-color-functional-informational-subtle
  )}.notification-toast{width:calc(var(--width) - var(--width-icon-container));opacity:1;z-index:var(--z-index);position:fixed;background:var(--background);box-shadow:var(--box-shadow);box-sizing:border-box;border-radius:0 var(--radius) var(--radius) 0;flex-direction:column;justify-content:space-between}.notification-toast.notification-toast--story{position:absolute}.notification-toast.notification-toast--story.notification-toast--hide{opacity:0}.notification-toast.notification-toast--story.notification-toast--opened{opacity:1}.notification-toast.notification-toast--variant-success{background:var(--background-success-text-container)}.notification-toast.notification-toast--variant-warning{background:var(--background-warning-text-container)}.notification-toast.notification-toast--variant-error{background:var(--background-error-text-container)}.notification-toast.notification-toast--variant-informational{background:var(--background-informational-text-container)}.notification-toast__icon{position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px}.notification-toast__icon-container{height:100%;width:var(--width-icon-container);position:absolute;left:calc(var(--width-icon-container) * -1 + 1px);top:0;float:left;border-radius:var(--radius) 0 0 var(--radius)}.notification-toast.notification-toast--variant-success .notification-toast__icon-container{background:var(--background-success-icon-container)}.notification-toast.notification-toast--variant-warning .notification-toast__icon-container{background:var(--background-warning-icon-container)}.notification-toast.notification-toast--variant-error .notification-toast__icon-container{background:var(--background-error-icon-container)}.notification-toast.notification-toast--variant-informational .notification-toast__icon-container{background:var(--background-informational-icon-container)}::slotted([slot='header']){margin:0;padding:3px var(--width-icon-container) 0 10px;font-weight:bold;font-size:16px}::slotted([slot='body']){padding:3px 0 0 10px;margin:0}::slotted([slot='link']){padding:10px 0 15px 10px;margin:0}.notification-toast__text-container{width:calc(var(--width) - calc(var(--width-icon-container) * 1));min-height:33px;float:left;position:relative;margin:0 0 0 1px;padding:15px 0 0 0}.notification-toast__button-close{position:absolute;top:10px;right:7.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-toast__button-close svg{height:19px;width:19px;padding:7.5px 6.5px 6.5px 6.5px;border-radius:20%;color:var(--telekom-color-text-and-icon-standard)}.notification-toast__button-close:hover svg{background-color:white;color:var(--telekom-color-text-and-icon-primary-hovered)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-toast__button-close svg{color:hsl(0, 0%, 100%)}.notification-toast{border:1px solid hsl(0, 0%, 100%)}.notification-toast__icon-container{border:1px solid hsl(0, 0%, 100%);margin-top:-1px}}`,l=class{constructor(e){i(this,e),this.scaleClosing=t(this,`scale-closing`,7),this.scaleClose=t(this,`scale-close`,7),this.variant=`informational`,this.animated=!0,this.alignment=`top-right`,this.positionVertical=12,this.positionHorizontal=12,this.autoHide=!1,this.autoHideDuration=3e3,this.fadeDuration=500,this.closeButtonLabel=`close`,this.closeButtonTitle=`close`,this.toastHeightWithOffset=0,this.hideToast=!1,this.close=()=>{s(this,`scaleClosing`),this.hideToast=!0,setTimeout(()=>{this.opened=!1,s(this,`scaleClose`)},this.fadeDuration)},this.transitions=e=>`
      @keyframes fadeIn {
        from {
          opacity: 0;
          ${this.alignmentVertical}: -${e}px;
        }
        to {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
      }
  
      @keyframes fadeOut {
        from {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
        to {
          opacity: 0;
          ${this.alignmentVertical}: -${e}px;
        }
      }
    `,this.animationStyle=e=>this.animated?`
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeIn ${this.fadeDuration/1e3}s ease-in-out;
          ${this.alignmentVertical}: ${this.positionVertical}px;
          opacity: 1;
        },
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeOut ${this.fadeDuration/1e3}s ease-in-out;
          ${this.alignmentVertical}: -${e}px;
          opacity: 0;
        }
      `:`
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: ${this.positionVertical}px;
      opacity: 1;
    },
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: -${e}px;
      opacity: 0;
    }
  `}connectedCallback(){a({source:this.element,type:`warn`})}componentWillLoad(){let e=this.alignment.split(`-`);this.alignmentVertical=e[0],this.alignmentHorizontal=e[1]}componentDidRender(){this.autoHide===!0&&setTimeout(this.close,this.autoHideDuration)}handleIcons(){if(this.variant)switch(this.variant){case`success`:return r(`scale-icon-action-success`,{class:`notification-toast__icon`,size:20,color:`#ffffff`,selected:!0,"aria-hidden":`true`});case`informational`:return r(`scale-icon-alert-information`,{class:`notification-toast__icon`,size:20,selected:!0,color:`#ffffff`,"aria-hidden":`true`});case`error`:return r(`scale-icon-alert-error`,{class:`notification-toast__icon`,size:20,selected:!0,color:`#ffffff`,"aria-hidden":`true`});case`warning`:return r(`scale-icon-alert-warning`,{class:`notification-toast__icon`,color:`#ffff`,size:20,selected:!0,"aria-hidden":`true`})}}async open(){this.opened=!0,this.hideToast=!1}render(){if(this.opened)return r(n,null,this.styles&&r(`style`,null,this.styles),r(`style`,null,this.transitions(this.toastHeightWithOffset)),r(`style`,null,this.animationStyle(this.toastHeightWithOffset)),r(`div`,{role:`alert`,style:{display:`${this.opened?``:`none`}`},class:this.getCssClassMap(),part:this.getBasePartMap(),tabindex:`0`},r(`div`,{class:`notification-toast__icon-container`},this.handleIcons()),r(`div`,{class:`notification-toast__text-container`},r(`slot`,{name:`header`}),r(`slot`,{name:`body`}),r(`scale-link`,{href:this.href,class:`notification-toast__link`,role:`link`},r(`slot`,{name:`link`}))),r(`button`,{part:`button-dismissable`,type:`button`,class:`notification-toast__button-close`,onClick:()=>this.close(),tabindex:0,"aria-label":this.closeButtonLabel,title:this.closeButtonTitle,onKeyDown:e=>{e.key===`Enter`&&this.close()}},r(`scale-icon-action-circle-close`,null))))}getToastHeightWithOffset(){let e=this.element.shadowRoot.querySelector(`.toast`).scrollHeight;this.toastHeightWithOffset=e+this.positionVertical}getBasePartMap(){return this.getCssOrBasePartMap(`basePart`)}getCssClassMap(){return this.getCssOrBasePartMap(`css`)}getCssOrBasePartMap(e){let t=`notification-toast`,n=e===`basePart`?``:`${t}`;return o(e===`basePart`?`base`:t,this.variant&&`${n}--variant-${this.variant}`,!!this.opened&&`${n}--opened`,!this.hideToast&&`${n}--show`,!!this.hideToast&&`${n}--hide`,this.story&&`${n}--story`)}get element(){return e(this)}};l.style=c;export{l as scale_notification_toast};