import{a as e,n as t,o as n,s as r}from"./index-CwyZArIO.js";var i=`/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.

 */
/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

scale-telekom-profile-menu scale-menu-flyout {
  display: flex;
  height: 100%;

  > a {
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    height: 100%;
    position: relative;
    font: inherit;
    color: inherit;
    background: none;
    appearance: none;
    padding: 0 0 var(--_spacing-bottom-slotted-bottom) 0;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: padding-bottom var(--telekom-motion-duration-immediate)
      var(--telekom-motion-easing-standard);

    line-height: var(--telekom-typography-line-spacing-loose);
    font-weight: var(--telekom-typography-font-weight-extra-bold);

    > .flyout-label {
      font-size: var(--scl-font-size-12);
      font-weight: var(--telekom-typography-font-weight-regular);
      margin-left: var(--scl-spacing-8);
    }
  }

  > a:hover,
  > a:hover svg {
    color: var(--telekom-color-text-and-icon-primary-hovered);
  }

  > a[aria-expanded='true'],
  > a[aria-expanded='true'] svg {
    color: var(--telekom-color-text-and-icon-primary-standard);
  }

  > a[aria-expanded='true'] .flyout-label {
    color: var(--telekom-color-text-and-icon-standard);
  }
}

.user-menu-mobile {
  display: flex;
  height: 100%;
}
.user-menu-mobile .flyout-label [aria-hidden='true'] {
  display: none;
}
.user-menu-mobile .mydot .scale-icon {
  width: 12px;
  height: 12px;
}

scale-telekom-profile-menu .scale-telekom-nav-item > button {
  padding-bottom: var(--_spacing-bottom-slotted-bottom);
}

.user-menu-desktop {
  display: none;
}

.user-menu-desktop scale-menu-flyout {
  display: flex;
}

.user-menu-trigger {
  position: relative;
  left: 24px;
}

@media screen and (min-width: 640px) {
  .user-menu-trigger {
    top: calc(var(--_spacing-bottom-slotted-bottom) + 8px);
  }
}

@media screen and (min-width: 1040px) {
  .user-menu-mobile {
    display: none;
  }

  .user-menu-desktop {
    display: flex;
    height: 100%;
  }

  scale-telekom-profile-menu scale-menu-flyout-list::part(base) {
    top: calc(100% + var(--telekom-spacing-composition-space-03) - 16px);
  }
}

@media screen and (min-width: 1296px) {
  scale-telekom-header-data-back-compat .user-menu-trigger {
    top: calc(var(--_spacing-bottom-slotted-bottom) + 12px);
  }
}

.profile-menu-login {
  min-width: 15em;
  padding-right: var(--telekom-spacing-composition-space-06);

  > scale-button {
    display: block;
    --width: 100%;
    margin: 1.5em 0;
  }
}

.profile-menu-login > strong {
  display: flex;
  font: var(--telekom-text-style-heading-5);
  padding: var(--telekom-spacing-composition-space-04) 0;
}
@media screen and (min-width: 640px) {
  .profile-menu-login > strong {
    padding-top: var(--telekom-spacing-composition-space-10);
  }
  .profile-menu-login .footer {
    padding-top: var(--telekom-spacing-composition-space-04);
  }
}
@media screen and (min-width: 1040px) {
  .profile-menu-login {
    padding: 12px 24px 4px 24px;
  }
  .profile-menu-login > strong {
    padding-top: 0;
  }
  .profile-menu-login > scale-button {
    margin: 16px 0;
  }
  .profile-menu-login .footer {
    padding-top: 0;
  }
}

.profile-menu-login p {
  line-height: 1.4em;
  color: var(--telekom-color-text-and-icon-additional);
  margin: 0;
}
.profile-menu-login #signUp {
  margin-top: var(--telekom-spacing-composition-space-04);
}
.profile-menu-login #signUp p {
  margin: 0;
}

.scale-telekom-nav-list[variant='functions']::part(circle) .scale-icon {
  height: 12px;
  width: 12px;
}

.mydot {
  background: var(--telekom-color-functional-success-standard);
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 12px;
  width: 12px;
  position: absolute;
  top: -4px;
  right: -6px;
}
scale-telekom-profile-menu scale-menu-flyout a .mydot .scale-icon {
  color: #fff !important;
  height: 12px;
  width: 12px;
}

app-navigation-user-menu {
  --color-divider: transparent;
}

app-navigation-user-menu::part(userInfo) {
  margin: 0;
}
app-navigation-user-menu::part(userInfo)
  .app-navigation-user-menu__user-info--name {
  margin-bottom: 0;
}

app-navigation-user-menu::part(rule-horizontal) {
  visibility: hidden;
  margin: var(--telekom-spacing-composition-space-05) 0;
}

@media screen and (min-width: 640px) {
  app-navigation-user-menu::part(userInfo) {
    padding-top: var(--telekom-spacing-composition-space-08);
  }
  app-navigation-user-menu::part(rule-horizontal) {
    margin: var(--telekom-spacing-composition-space-08) 0
      var(--telekom-spacing-composition-space-06) 0;
  }
}

app-navigation-user-menu::part(item) {
  margin-top: var(--telekom-spacing-composition-space-05);
  margin-bottom: var(--telekom-spacing-composition-space-05);
  padding: 0;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}

app-navigation-user-menu::part(button) {
  padding-top: 0;
  padding-left: 0;
}
@media screen and (min-width: 640px) {
  app-navigation-user-menu::part(button) {
    margin-top: -10px;
  }
}

@media screen and (min-width: 1040px) {
  app-navigation-user-menu::part(item) {
    line-height: 200%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 0;
    padding-bottom: 0;
    border: 0;
  }

  app-navigation-user-menu::part(userInfo) {
    padding-top: 0;
  }
  app-navigation-user-menu::part(rule-horizontal) {
    padding-top: 16px;
    padding-bottom: 6px;
    margin: 0;
  }
  app-navigation-user-menu::part(button) {
    margin-top: 7px;
    padding-bottom: 0;
  }
}

.visually-hidden {
  /* see https://www.a11yproject.com/posts/how-to-hide-content/ */
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
`,a=`https://www.telekom.de`,o=`https://www.telekom.de`,s=`https://www.telekom.de`,c=`https://account.idm.telekom.com/account-manager/`,l=`https://accounts.login.idm.telekom.com/sessionmessage/logout`,u=e=>{let t;try{t=JSON.parse(e)}catch{t=e}return t},d=class{constructor(e){r(this,e),this.menuOpen=!1}onKeydown(e){this.menuOpen&&e.key===`Escape`&&this.userMenuDesktopTrigger.click()}openMenu(e){e.target.id===`user-menu-desktop`&&(this.menuOpen=!0)}closeMenu(e){e.target.id===`user-menu-desktop`&&(this.menuOpen=!1)}printSignInMenu(){return n(`div`,{class:`profile-menu-login`},n(`strong`,null,this.serviceName),n(`p`,null,this.serviceDescription),n(`scale-button`,{href:this.loginUrl||a},this.loginLabel),n(`div`,{class:`footer`},n(`p`,null,n(`scale-link`,{"omit-underline":`true`,href:this.loginHelpUrl||o},this.loginHelpLabel)),n(`div`,{id:`signUp`},n(`p`,null,this.registerHeadline),n(`p`,null,n(`scale-link`,{"omit-underline":`true`,href:this.registerUrl||s},this.registerLabel)))))}printProfileTrigger(){return this.loggedIn?n(`scale-badge`,{"no-dot":`true`},n(`scale-icon-user-file-user`,{selected:this.menuOpen}),n(`div`,{slot:`dot`,class:`mydot`},n(`scale-icon-action-checkmark`,null))):n(`scale-icon-user-file-user`,{selected:this.menuOpen})}buildLogoutButton(){return{type:`button`,name:this.logoutLabel||`Logout`,href:this.logoutUrl||l,variant:`secondary`,onClick:this.logoutHandler}}buildUserNavigation(){let e=[{type:`divider`}],t=u(this.userInfo);t&&(t.type=`userInfo`);let n=u(this.serviceLinks)||[];for(let e of n)e.type=`item`;let r={type:`item`,name:this.loginSettingsLabel||`Login-Settings`,href:this.loginSettingsUrl||c,icon:`service-settings`},i=[];return t&&(i=i.concat(t)),t&&!this.serviceLinksEmpty()&&(i=i.concat(e)),i=i.concat(n),this.hideLoginSettings||(i=i.concat(r)),this.serviceLinksEmpty()||(i=i.concat(e)),i=i.concat(this.buildLogoutButton()),i}serviceLinksEmpty(){return this.hideLoginSettings&&(!this.serviceLinks||this.serviceLinks.length<1)}buildDesktopMenuStyles(){let e=`.app-navigation-user-menu { padding: 12px 24px 4px 24px; box-sizing: border-box; }`;return e+=`.scale-icon { width: 20px; height: 20px; display: flex; align-self: center; }`,this.serviceLinksEmpty()&&(e+=`scale-button { margin-top: 32px !important; }`),e}buildMobileMenuStyles(){let e=`.app-navigation-user-menu__user-info--name { margin-bottom: 0 !important; }`;return e+=`.scale-icon { width: 20px; height: 20px; }`,this.serviceLinksEmpty()&&(e+=`scale-button { margin-top: 32px !important; }`),e}printLabel(){return this.accessibilityLabel?n(`div`,{class:`flyout-label`},n(`span`,{"aria-hidden":`true`},this.label),n(`span`,{class:`visually-hidden`},this.accessibilityLabel)):n(`span`,{class:`flyout-label`},this.label)}render(){return n(t,null,n(`scale-telekom-nav-item`,{class:`user-menu-desktop`},n(`scale-menu-flyout`,{direction:`bottom-left`,"onScale-open":e=>this.openMenu(e),"onScale-close":e=>this.closeMenu(e),triggerHasPopup:!1},n(`a`,{href:`javascript:void(0);`,slot:`trigger`,role:`button`,"aria-controls":`user-menu-desktop`},this.printProfileTrigger(),this.printLabel()),n(`scale-menu-flyout-list`,{id:`user-menu-desktop`,preventFlipVertical:!0,role:`none`},this.loggedIn&&[n(`app-navigation-user-menu`,{hide:()=>{this.userMenuDesktopTrigger.click()},navigation:this.buildUserNavigation(),styles:this.buildDesktopMenuStyles()})],!this.loggedIn&&[n(`app-navigation-user-menu`,{navigation:[]},this.printSignInMenu())]),n(`div`,{slot:`trigger`,class:`user-menu-trigger`,ref:e=>this.userMenuDesktopTrigger=e}))),n(`scale-telekom-nav-item`,{class:`user-menu-mobile`},n(`button`,null,this.printProfileTrigger(),this.printLabel()),n(`scale-telekom-nav-flyout`,{variant:`mobile`},n(`scale-telekom-mobile-flyout-canvas`,{appName:this.appName,closeButtonLabel:this.closeMenuAccessibilityLabel},this.loggedIn&&[n(`app-navigation-user-menu`,{slot:`mobile-main-nav`,navigation:this.buildUserNavigation(),styles:this.buildMobileMenuStyles()})],!this.loggedIn&&[n(`app-navigation-user-menu`,{slot:`mobile-main-nav`,navigation:[]},this.printSignInMenu())]))))}get hostElement(){return e(this)}};d.style=i;export{d as scale_telekom_profile_menu};