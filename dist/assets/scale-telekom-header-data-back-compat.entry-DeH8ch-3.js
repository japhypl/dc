import{o as e,s as t}from"./index-CwyZArIO.js";import{n,t as r}from"./menu-utils-ee192675-OQDkixm9.js";import{t as i}from"./render-icon-05777d0c-VZt71_pX.js";var a=`/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */


scale-telekom-header-data-back-compat .user-menu-mobile {
  display: block;
}

scale-telekom-header-data-back-compat .user-menu-desktop {
  display: none;
}

scale-telekom-header-data-back-compat .user-menu-desktop scale-menu-flyout {
  display: flex;
}

scale-telekom-header-data-back-compat .user-menu-trigger {
  position: relative;
  left: 24px;
}

@media screen and (min-width: 640px) {
  scale-telekom-header-data-back-compat .user-menu-trigger {
    top: calc(var(--_spacing-bottom-slotted-bottom) + 8px);
  }
}

@media screen and (min-width: 1040px) {
  scale-telekom-header-data-back-compat .user-menu-mobile {
    display: none;
  }

  scale-telekom-header-data-back-compat .user-menu-desktop {
    display: block;
  }
}

dia screen and (--xl) {
  scale-telekom-header-data-back-compat .user-menu-trigger {
    top: calc(var(--_spacing-bottom-slotted-bottom) + 12px);
  }
}
`,o=e=>{let t;try{t=JSON.parse(e)}catch{t=e}return t},s=class{constructor(e){t(this,e)}render(){let{shortName:t=`Login`,badge:a,badgeLabel:s}=(o(this.userNavigation)||[]).find(({type:e})=>e===`userInfo`)||{shortName:`Login`};return e(`scale-telekom-header`,{"app-name":this.appName,"app-name-link":this.appNameLink,"app-name-click":this.appNameClick,"logo-href":this.logoHref,"logo-title":this.logoTitle,"logo-hide-title":this.logoHideTitle},o(this.sectorNavigation)?e(`scale-telekom-nav-list`,{slot:`meta-nav-external`,variant:`meta-nav-external`,alignment:`left`},o(this.sectorNavigation).map(t=>e(`scale-telekom-nav-item`,null,e(`a`,{href:t.href||`javascript:void(0);`,id:t.id,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name)))):null,o(this.addonNavigation)?e(`scale-telekom-nav-list`,{slot:`meta-nav`,variant:`meta-nav`,alignment:`right`},o(this.addonNavigation).map(t=>e(`scale-telekom-nav-item`,null,e(`a`,{href:t.href||`javascript:void(0);`,id:t.id,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name)))):null,o(this.mainNavigation)?e(`scale-telekom-nav-list`,{variant:`main-nav`,slot:`main-nav`},o(this.mainNavigation).map(t=>{let{selected:i}=n(o(this.mainNavigation),this.activeRouteId),a=i&&r(o(this.mainNavigation),i.id);return e(`scale-telekom-nav-item`,{active:(e=>a&&a.id===e)(t.id)},e(`a`,{href:t.href||`javascript:void(0);`,id:t.id,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},e(`span`,null,t.name)),t.children?e(`scale-telekom-nav-flyout`,{hover:!0},e(`scale-telekom-mega-menu`,null,t.children.map(t=>e(`scale-telekom-mega-menu-column`,null,e(`a`,{href:t.href||`javascript:void(0);`,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)},slot:`heading`},t.name),t.children?e(`ul`,null,t.children.map(t=>e(`li`,null,e(`a`,{href:t.href||`javascript:void(0);`,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name)))):null)))):null)})):null,!o(this.iconNavigation)&&!o(this.userNavigation)?null:e(`scale-telekom-nav-list`,{variant:`functions`,slot:`functions`,alignment:`right`},o(this.userNavigation).length>0&&e(`scale-telekom-nav-item`,{class:`user-menu-desktop`},e(`a`,{href:`javascript:void(0);`,ref:e=>this.userMenuDesktopLink=e,onKeyDown:e=>{[` `,`Enter`,`Escape`].includes(e.key)&&(e.preventDefault(),this.userMenuDesktopTrigger.click())},onClick:e=>{e.stopPropagation(),this.userMenuDesktopTrigger.click()}},e(`scale-menu-flyout`,{direction:`bottom-left`},a?e(`scale-badge`,{count:s,label:t,"label-visually-hidden":!0},e(`scale-icon-user-file-user`,null,` `)):e(`scale-icon-user-file-user`,null,` `),e(`scale-menu-flyout-list`,null,e(`app-navigation-user-menu`,{hide:()=>{this.userMenuDesktopTrigger.click(),this.userMenuDesktopLink.focus()},navigation:o(this.userNavigation)})),e(`div`,{slot:`trigger`,class:`user-menu-trigger`,ref:e=>this.userMenuDesktopTrigger=e})))),o(this.userNavigation).length>0&&e(`scale-telekom-nav-item`,{class:`user-menu-mobile`},e(`button`,{ref:e=>{this.userMenuMobileTrigger=e}},e(`scale-badge`,{count:s,label:t,"label-visually-hidden":!0},e(`scale-icon-user-file-user`,null,` `))),e(`scale-telekom-nav-flyout`,{variant:`mobile`},e(`scale-telekom-mobile-flyout-canvas`,null,e(`app-navigation-user-menu`,{slot:`mobile-main-nav`,hide:()=>{this.userMenuMobileTrigger.click(),this.userMenuMobileTrigger.focus()},navigation:o(this.userNavigation)})))),(o(this.iconNavigation)||[]).filter(({id:e})=>e!==`menu`).map(t=>e(`scale-telekom-nav-item`,null,e(`a`,{href:t.href||`javascript:void(0);`,target:t.target||`_self`,id:t.id,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.badgeLabel?e(`scale-badge`,{count:t.badgeCount,label:t.badgeLabel,"label-visually-hidden":t.labelVisuallyHidden,"aria-label-translation":t.ariaLabelTranslation},i({tag:`scale-icon-${t.icon}`,attributes:{}})):i({tag:`scale-icon-${t.icon}`,attributes:{}})))),!o(this.mainNavigation)&&!o(this.sectorNavigation)&&!o(this.addonNavigation)?null:e(`scale-telekom-nav-item`,{"hide-on-desktop":!0},e(`button`,null,e(`scale-badge`,null,e(`scale-icon-action-menu`,null))),e(`scale-telekom-nav-flyout`,{variant:`mobile`},e(`scale-telekom-mobile-flyout-canvas`,{"app-name":this.appName,"app-name-link":this.appNameLink||`javascript:void(0);`,"app-name-click":e=>{typeof this.appNameClick==`function`&&this.appNameClick(e)}},o(this.mainNavigation)?e(`scale-telekom-mobile-menu`,{slot:`mobile-main-nav`},o(this.mainNavigation).map(t=>{let{selected:i,parent:a}=n(o(this.mainNavigation),this.activeRouteId),s=i&&r(o(this.mainNavigation),i.id),c=e=>s&&s.id===e&&e!==this.activeRouteId,l=e=>e===this.activeRouteId;return e(`scale-telekom-mobile-menu-item`,{open:c(t.id),active:l(t.id)},e(`a`,{href:t.href||`javascript:void(0);`,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name),t.children?t.children.map(t=>e(`scale-telekom-mobile-menu-item`,{slot:`children`,active:l(t.id),open:a&&a.id===t.id},e(`a`,{href:t.href||`javascript:void(0);`,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name),t.children?t.children.map(t=>e(`scale-telekom-mobile-menu-item`,{slot:`children`,active:l(t.id)},e(`a`,{href:t.href||`javascript:void(0);`,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name))):null)):null)})):null,o(this.sectorNavigation)?e(`scale-telekom-nav-list`,{variant:`meta-nav`,slot:`mobile-meta-nav-external`,alignment:`left`},o(this.sectorNavigation).map(t=>e(`scale-telekom-nav-item`,null,e(`a`,{id:t.id,href:t.href||`javascript:void(0);`,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name)))):null,o(this.addonNavigation)?e(`scale-telekom-nav-list`,{variant:`meta-nav`,slot:`mobile-meta-nav`,alignment:`left`},o(this.addonNavigation).map(t=>e(`scale-telekom-nav-item`,null,e(`a`,{href:t.href||`javascript:void(0);`,id:t.id,target:t.target||`_self`,onClick:e=>{typeof t.onClick==`function`&&t.onClick(e)}},t.name)))):null)))))}};s.style=a;export{s as scale_telekom_header_data_back_compat};