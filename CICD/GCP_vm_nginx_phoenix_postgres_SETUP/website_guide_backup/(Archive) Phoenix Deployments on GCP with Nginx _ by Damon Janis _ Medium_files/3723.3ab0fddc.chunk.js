(self.webpackChunklite=self.webpackChunklite||[]).push([[3723],{61796:(e,n,t)=>{"use strict";t.d(n,{LI:()=>m,k:()=>u,ZV:()=>k});var i=t(28655),a=t.n(i),o=t(92471),r=t(97217),l=t(42498);function d(){var e=a()(["\n  fragment GetDigestReferredCreatorPromoIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);return d=function(){return e},e}function s(){var e=a()(["\n  fragment GetFeaturedImageIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n      metadata {\n        isFeatured\n      }\n    }\n  }\n"]);return s=function(){return e},e}function c(){var e=a()(["\n  fragment GetTitleIndexMap_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);return c=function(){return e},e}var m=function(e){for(var n=null,t=null,i=null,a=null,o=null,r=0;r<=e.length;r++){var d=e[r];if(!d)break;if(null!=n){"H4"===d.type&&(t=r),null===i&&"IMG"===d.type&&(i=r);break}if("H3"===d.type||"H2"===d.type)n=r,o=a;else{if(null!=a)break;if("H4"!==d.type){if("IMG"===d.type){null===i&&(i=r);continue}if("IFRAME"===d.type||"P"===d.type&&"string"==typeof d.text&&(0,l.vV)(d.text))continue;break}a=r}}return{titleIndex:n,subtitleIndex:t,bannerImageIndex:i,kickerIndex:o}},u=(0,o.Ps)(c()),k=((0,o.Ps)(s()),function(e){for(var n=null,t=[],i=0;i<e.length;i++)p(e[i])&&(n||(n=i),i<e.length-1&&p(e[i+1])&&t.push(i));return 0===t.length?{index:n,ordering:"before"}:{index:t[Math.min(t.length-1,1)],ordering:"after"}}),p=function(e){return e.type===r.NJ.P&&"string"==typeof e.text&&!(0,l.vV)(e.text)};(0,o.Ps)(d())},42423:(e,n,t)=>{"use strict";t.d(n,{Pk:()=>c,v:()=>m});var i=t(319),a=t.n(i),o=t(86012),r=t(54975),l=t(27048),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostNotesDetails_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(a()(l.W.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostNotesMarkers_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"endOffset"}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"startOffset"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostNotesDetails_user"}}]}}]}}].concat(a()(d.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_bodyModel"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RichText"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sections"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"startIndex"}},{kind:"Field",name:{kind:"Name",value:"textLayout"}},{kind:"Field",name:{kind:"Name",value:"imageLayout"}},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"originalHeight"}},{kind:"Field",name:{kind:"Name",value:"originalWidth"}}]}},{kind:"Field",name:{kind:"Name",value:"videoLayout"}},{kind:"Field",name:{kind:"Name",value:"backgroundVideo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"videoId"}},{kind:"Field",name:{kind:"Name",value:"originalHeight"}},{kind:"Field",name:{kind:"Name",value:"originalWidth"}},{kind:"Field",name:{kind:"Name",value:"previewImageId"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodySection_paragraph"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"normalizedBodyModel_richText"}}]}}].concat(a()(o.Fm.definitions),a()(r.gd.definitions))},m=([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"normalizedBodyModel_highlight"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodySection_highlight"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostNotesMarkers_highlight"}}]}}].concat(a()(r.Cn.definitions),a()(o.rz.definitions),a()(s.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_creator"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostNotesMarkers_creator"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostNotesMarkers_creator"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))});[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"normalizedBodyModel_privateNote"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodySection_privateNote"}}]}}].concat(a()(r.EH.definitions),a()(o.ik.definitions))},1444:(e,n,t)=>{"use strict";t.d(n,{o:()=>c});var i=t(67294),a=t(39959),o=t(6443),r=t(75221),l=t(97217),d=t(43487),s=t(50458),c=function(e){var n=e.post,t=e.susiEntry,c=e.buttonStyle,m=n.id,u=n.visibility,k=(0,d.v9)((function(e){return e.config.authDomain}));return(0,o.H)().loading||u===l.Wn.UNLISTED?null:i.createElement(a.o,{kind:r.ej.POST,target:n,buttonStyle:c,susiEntry:t,susiActionUrl:(0,s.XET)(k,m)})}},46786:(e,n,t)=>{"use strict";t.d(n,{u:()=>l});var i=t(319),a=t.n(i),o=t(57572),r=t(4088),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostFooterSocialPopover_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SharePostButton_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(a()(o.o.definitions),a()(r.u.definitions))}},74543:(e,n,t)=>{"use strict";t.d(n,{$:()=>s});var i=t(67294),a=t(25145),o=t(12287),r=t(85805),l=t(37597),d=t(38352),s=function(e){var n=e.post,t=e.source,s=e.shareIconStyle,c=n.title,m=n.id,u=(0,a.D)()(n);return i.createElement(r.A,{ariaId:"postFooterSocialMenu",source:{name:t},url:u,title:c,ariaLabel:"Share Post",postId:m,iconStyle:s},(function(e){return i.createElement(i.Fragment,null,u&&i.createElement(i.Fragment,null,i.createElement(d.Sl,null,i.createElement(o._,{url:u,onClick:e,reportData:{postId:n.id},source:t,copyStyle:"INLINE"})),i.createElement(d.oK,{paddingTopBottom:"5px"})),i.createElement(d.Sl,{paddingTopBottom:"5px"},i.createElement(l.f,{socialPlatform:"TWITTER",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:n})),i.createElement(d.Sl,{paddingTopBottom:"5px"},i.createElement(l.f,{socialPlatform:"FACEBOOK",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:n})),i.createElement(d.Sl,{paddingTopBottom:"5px"},i.createElement(l.f,{socialPlatform:"LINKEDIN",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:n})))}))}},33384:(e,n,t)=>{"use strict";t.d(n,{T:()=>g});var i=t(67154),a=t.n(i),o=t(59713),r=t.n(o),l=t(67294),d=t(25735),s=t(23500),c=t(6729),m=t(93310),u=t(77355),k=t(47230),p=t(30020),v=t(87691);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=function(e){return{display:"inline-flex",alignItems:"center",":hover path":{fill:e.baseColor.fill.normal}}};function g(e){var n,t=e.buttonStyle,i=e.socialPlatform,o=e.baseOnClick,r=e.href,f=(0,d.VB)({name:"enable_in_context_sharing",placeholder:!1}),g=c.sC[i];if(!g)return null;switch(n=N(N({},{"aria-label":"Share on ".concat(i.toLowerCase())}),{},{onClick:function(){o();var e=Math.max((window.outerHeight||200)/2-560,100),n=(window.outerWidth||200)/2-250;f?window.open(r,"Social Share Window","resizable,scrollbars,status,top=".concat(e,",left=").concat(n,",height=").concat(650,",width=").concat(650)):"LINKEDIN"===i?window.open(r,"LIP","resizable,scrollbars,status,top=".concat(e,",left=").concat(n,",height=").concat(560,",width=").concat(500)):window.open(r)}}),t){case"LINK_DISABLED":return l.createElement(p._,{tooltipText:"This feature is temporarily disabled.",targetDistance:15},l.createElement(s.T,{buttonStyle:t,socialPlatform:i}));case"LINK":case"LINK_SUBTLE":return l.createElement(m.r,n,l.createElement(s.T,{buttonStyle:t,socialPlatform:i}));case"LINK_INLINE":return l.createElement(m.r,n,l.createElement(s.T,{buttonStyle:t,socialPlatform:i}),l.createElement(u.x,{display:"inline",marginLeft:"8px",marginTop:"2px"},l.createElement(v.F,{scale:"S",tag:"span"},"Share on ",g)));case"LINK_INLINE_SHORT_LABEL":return l.createElement(m.r,a()({},n,{rules:S}),l.createElement(s.T,{buttonStyle:t,socialPlatform:i}),l.createElement(u.x,{display:"inline",marginLeft:"8px"},"Share on ",g));case"BUTTON_BRANDED":return l.createElement(k.z,a()({},n,{buttonStyle:"SOCIAL",size:"REGULAR",width:"212px"}),l.createElement(u.x,{display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(s.T,{buttonStyle:t,socialPlatform:i}),"Share with ".concat(g)));default:return null}}},85805:(e,n,t)=>{"use strict";t.d(n,{A:()=>g});var i=t(63038),a=t.n(i),o=t(67294),r=t(38352),l=t(73917),d=t(93310),s=t(30020),c=t(18627),m=t(66411),u=t(31889);function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var p=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z",fill:"#000"});const v=function(e){return o.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),p)};var f=t(68894),N=t(6729),S=function(e){var n=e.children,t=e.source;return t?o.createElement(m.cW,{source:t},n):o.createElement(o.Fragment,null,n)},g=function(e){var n,t=e.url,i=e.title,k=e.source,p=e.ariaId,g=e.children,h=e.ariaLabel,y=e.tooltipText,E=void 0===y?"":y,F=e.postId,I=e.listId,b=e.iconStyle,P=void 0===b?"ICON":b,T=(0,u.F)(),L=(0,f.O)(!1),_=a()(L,3),D=_[0],x=_[1],O=_[2],B=(null==T||null===(n=T.breakpoints)||void 0===n?void 0:n.md)||728,C=(0,c.Av)(),w=(0,m.f0)(k);return o.createElement(S,{source:k},o.createElement(l.J,{ariaId:p,isVisible:D,hide:O,popoverRenderFn:function(){return o.createElement(r.mX,null,g(O))}},o.createElement(s._,{tooltipText:E||"Share",targetDistance:10},o.createElement(d.r,{"aria-controls":p,"aria-expanded":D?"true":"false","aria-label":h,onClick:function(){var e,n=null===(e=window)||void 0===e?void 0:e.innerWidth;if(C.event("shareLinkPopover.clicked",{postId:F,listId:I,source:w}),t&&n&&n<B){var a={url:t,text:i||"",title:i||""};if(navigator.canShare&&navigator.canShare(a))return void navigator.share(a)}x()},rules:"ICON_SUBTLE"===P?N.OL:N.Yq},o.createElement(v,null)))))}},57572:(e,n,t)=>{"use strict";t.d(n,{o:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SharePostButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},37597:(e,n,t)=>{"use strict";t.d(n,{f:()=>k});var i=t(28655),a=t.n(i),o=t(92471),r=t(67294),l=t(33384),d=t(18627),s=t(66411),c=t(43487),m=t(50458);function u(){var e=a()(["\n  fragment SharePostButton_post on Post {\n    id\n  }\n"]);return u=function(){return e},e}var k=function(e){var n,t=e.post,i=e.socialPlatform,a=e.buttonStyle,o=(0,d.Av)(),u=(0,s.Qi)(),k=(0,c.v9)((function(e){return e.config.authDomain}));if("FACEBOOK"===i)n=(0,m.VCf)(k,t.id);else if("TWITTER"===i)n=(0,m.A2M)(k,t.id);else{if("LINKEDIN"!==i)return null;n=(0,m.mZD)(k,t.id)}return r.createElement(l.T,{baseOnClick:function(){u&&o.event("post.shareOpen",{postId:t.id,source:u,dest:i.toLowerCase(),dialogType:"native"})},href:n,socialPlatform:i,buttonStyle:a})};(0,o.Ps)(u())},15855:(e,n,t)=>{"use strict";t.d(n,{E:()=>l});var i=t(319),a=t.n(i),o=t(57572),r=t(4088),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SharePostButtons_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isLimitedState"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SharePostButton_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(a()(o.o.definitions),a()(r.u.definitions))}},75399:(e,n,t)=>{"use strict";t.d(n,{U:()=>f});var i=t(67154),a=t.n(i),o=t(6479),r=t.n(o),l=t(67294),d=t(25145),s=t(12287),c=t(37597),m=t(77355),u=t(30020),k=t(66411);function p(e){switch(e){case"TWITTER":return"Share on Twitter";case"FACEBOOK":return"Share on Facebook";case"LINKEDIN":return"Share on LinkedIn";default:return"Copy link"}}var v=function(e){var n=e.post,t=e.source,i=e.socialPlatform,a=e.useSubtleShareButtons,o=e.spacing,r=a?"LINK_SUBTLE":"LINK",k=a?"ICON_SUBTLE":"ICON";n.isLimitedState&&(r="LINK_DISABLED",k="ICON_DISABLED");var v=(0,d.D)()(n);return l.createElement(m.x,{flexGrow:"0",paddingRight:o},"UNLISTED"!==n.visibility&&l.createElement(u._,{tooltipText:p(i),targetDistance:10},i?l.createElement(c.f,{socialPlatform:i,buttonStyle:r,post:n}):v&&l.createElement(s._,{url:v,copyStyle:k,source:t,reportData:{postId:n.id}})))};function f(e){var n=e.spacing,t=void 0===n?"1px":n,i=r()(e,["spacing"]);return l.createElement(l.Fragment,null,l.createElement(k.cW,{source:{name:i.source}},l.createElement(v,a()({},i,{spacing:t,socialPlatform:"TWITTER"})),l.createElement(v,a()({},i,{spacing:t,socialPlatform:"FACEBOOK"})),l.createElement(v,a()({},i,{spacing:t,socialPlatform:"LINKEDIN"}))),l.createElement(v,i))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3723.3ab0fddc.chunk.js.map