"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[142],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},u="Jumpcloud SAML Integration",p={unversionedId:"authenticate/saml/jumpcloud",id:"authenticate/saml/jumpcloud",isDocsHomePage:!1,title:"Jumpcloud SAML Integration",description:'First, browse to "User Authentication | SSO" and create a new application.',source:"@site/docs/authenticate/saml/30-jumpcloud.md",sourceDirName:"authenticate/saml",slug:"/authenticate/saml/jumpcloud",permalink:"/docs/authenticate/saml/jumpcloud",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/saml/30-jumpcloud.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Active Directory",permalink:"/docs/authenticate/saml/azure"},next:{title:"Overview",permalink:"/docs/authenticate/oauth/oauth2"}},c=[],s={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jumpcloud-saml-integration"},"Jumpcloud SAML Integration"),(0,r.kt)("p",null,'First, browse to "User Authentication | SSO" and create a new application.'),(0,r.kt)("p",null,'Select "Custom SAML App".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - New Application",src:n(3636).Z})),(0,r.kt)("p",null,"Confirm new SSO connector instance."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - SSO connector",src:n(1664).Z})),(0,r.kt)("p",null,'Provide app name, e.g. "MyFIOS Auth Portal".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - App Name",src:n(9753).Z})),(0,r.kt)("p",null,"Next, provide IdP Entity ID and SP Entity ID values. Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"urn:auth-portal"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - SSO Configuration",src:n(8920).Z})),(0,r.kt)("p",null,"Then, provide the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ACS URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://auth.myfiosgateway.com:8443/saml/jumpcloud")),(0,r.kt)("li",{parentName:"ul"},"SAMLSubject NameID: ",(0,r.kt)("inlineCode",{parentName:"li"},"email")),(0,r.kt)("li",{parentName:"ul"},"SAMLSubject NameID Format: ",(0,r.kt)("inlineCode",{parentName:"li"},"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress")),(0,r.kt)("li",{parentName:"ul"},"Signature Algorithm: ",(0,r.kt)("inlineCode",{parentName:"li"},"RSA-SHA256")),(0,r.kt)("li",{parentName:"ul"},"Login URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://auth.myfiosgateway.com:8443/"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - SSO Configuration",src:n(8226).Z})),(0,r.kt)("p",null,"Next, provide IDP URL: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://sso.jumpcloud.com/saml2/auth-portal-saml")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - SSO Configuration",src:n(5284).Z})),(0,r.kt)("p",null,"Finally, add User Attributes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"email")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/displayname"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"fullname"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - User Attributes",src:n(967).Z})),(0,r.kt)("p",null,'After saving the configuration, browse back to "User Authentication | SSO".'),(0,r.kt)("p",null,"Re-enter the application, browse to SSO and download JumpCloud Metadata.\nThis would be the ",(0,r.kt)("inlineCode",{parentName:"p"},"JumpCloud-saml2-metadata.xml")," file referenced in the config."),(0,r.kt)("p",null,'Additionally, while in the app, click "IDP Certificate Valid" and "Download certificate.\nThis would be the ',(0,r.kt)("inlineCode",{parentName:"p"},"certificate.pem")," file referenced in the config."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - IDP Certificate",src:n(5797).Z})),(0,r.kt)("p",null,"The setup is now complete."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App Registration - Complete",src:n(5263).Z})),(0,r.kt)("p",null,"When a user accesses Jumpcloud user portal, the user sees the new app in the\nlist of application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jumpcloud SAML App User Portal",src:n(85).Z})))}m.isMDXComponent=!0},3636:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_00a-b2675c9931cf3662d58933b5da7d4c1c.png"},1664:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_00b-4d226986cbe27df39a99a0daedc650d8.png"},9753:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_01-0cc4d3740b996ffe71c2a6b7a9a78862.png"},8920:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_02-af52054c368ac0f5f4a304ceda31cf80.png"},8226:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_03-545df7302ba84dca66b38e6b1a4a2303.png"},5284:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_04-25e98341bd12b02c7ae33f48c48414c8.png"},967:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_05-4716fabe425e13cf51814e4c119f1b81.png"},5797:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_05a-e7a852af7583e0f735141b1e69cf4f79.png"},5263:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_06-229dbaa84af84bf43dc127da8bdd2a8b.png"},85:function(e,t,n){t.Z=n.p+"assets/images/jumpcloud_saml_sso_07-336695ed7649d7967e1679b0451630ad.png"}}]);