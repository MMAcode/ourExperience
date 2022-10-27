(self.webpackChunklite=self.webpackChunklite||[]).push([[4330],{66802:(e,t,n)=>{"use strict";n.d(t,{R4:()=>i,Ue:()=>l,xG:()=>o,Hp:()=>s});var r=n(93661),i=function(e,t,n){var r,i;return"undefined"!=typeof window&&e&&t&&!!(window.ApplePaySession&&null!==(r=window.ApplePaySession)&&void 0!==r&&r.supportsVersion(n)&&null!==(i=window.ApplePaySession)&&void 0!==i&&i.canMakePayments())},l=function(e,t){var n="";switch(t){case"CA":return e===r.FM.Monthly&&(n="monthlyCad"),e===r.FM.Yearly&&(n="yearlyCad"),n;default:return n}};function o(e){var t=e.amount,n=e.currency,r=e.locale,i=e.floatingDigits,l=void 0===i?[2,2]:i,o=e.isLongFormat,s=void 0!==o&&o,a=r||"undefined"!=typeof window&&window.navigator.language||"en-US",u=n||"USD";if(!Intl)return"".concat(t," ").concat(u);try{var c=new Intl.NumberFormat(a,{style:"currency",currency:u,minimumFractionDigits:l[0],maximumFractionDigits:l[1],currencyDisplay:"narrowSymbol"}).format(t);return s?"".concat(c," ").concat(n):c}catch(e){return String(t)}}var s=function(e,t,n){var r=String(e);return n?"".concat(r," ").concat(t):r}},76107:(e,t,n)=>{"use strict";n.d(t,{b:()=>r});var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MembershipUpsellModal_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},61279:(e,t,n)=>{"use strict";n.d(t,{DI:()=>k,nj:()=>C,oT:()=>_});var r=n(59713),i=n.n(r),l=n(63038),o=n.n(l),s=n(28655),a=n.n(s),u=n(82492),c=n.n(u),d=n(92471),m=n(21919),b=n(67294),p=n(25735),v=n(9354),f=n(75880),w=n(18627),h=n(66411),S=n(78285);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(){var e=a()(["\n  mutation fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe($userId: ID!) {\n    fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe(userId: $userId) {\n      __typename\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function V(){var e=a()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);return V=function(){return e},e}function x(){var e=a()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n"]);return x=function(){return e},e}function M(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3_viewerEdge on NewsletterV3 {\n    viewerEdge {\n      id\n      isSubscribed\n    }\n  }\n"]);return M=function(){return e},e}function N(){var e=a()(["\n  fragment useNewsletterV3Subscription_user on User {\n    id\n    username\n    newsletterV3 {\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return N=function(){return e},e}function P(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    type\n    slug\n    name\n    collection {\n      slug\n    }\n    user {\n      id\n      name\n      username\n      newsletterV3 {\n        id\n      }\n    }\n  }\n"]);return P=function(){return e},e}var k=(0,d.Ps)(P()),C=(0,d.Ps)(N(),k),U=((0,d.Ps)(M()),(0,d.Ps)(x())),O=(0,d.Ps)(V()),I=(0,d.Ps)(E(),k),_=function(e){var t=e.newsletterV3,n=e.creator,r=e.newsletterName,i=t||{},l=i.id,s=i.type,a=i.slug,u=i.collection,d=(null==t?void 0:t.user)||n,g=null!=r?r:null==t?void 0:t.name,E=b.useState(!1),V=o()(E,2),x=V[0],M=V[1],N=(0,v.T)({newsletterSlug:a,collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username}),P=N.viewerEdge,k=N.loading,_=(0,p.VB)({name:"enable_auto_follow_on_subscribe",placeholder:!1}),F=b.useState(!1),D=o()(F,2),A=D[0],T=D[1];b.useEffect((function(){T(!(null==P||!P.isSubscribed))}),[null==P?void 0:P.isSubscribed]);var R=(0,w.Av)(),B=(0,h.Qi)(),L=(0,S.w)();x&&R.event("newsletterV3.subscribe.error",{newsletterV3Id:l});var Y=function(e,t,n){if(n){var r={id:"User:".concat(null==d?void 0:d.id),fragment:C,fragmentName:"useNewsletterV3Subscription_user"},i=e.readFragment(r);e.writeFragment(y(y({},r),{},{data:y(y({},i),{},{newsletterV3:n})}))}if(P){var l=e.readQuery({query:v.p,variables:{newsletterSlug:a,collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username}}),o=c()({},l,{newsletterV3:{viewerEdge:{isSubscribed:t}}});e.writeQuery({query:v.p,variables:{newsletterSlug:a||"",collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username},data:o})}t&&null!=d&&d.id&&_&&(0,f.I0)(e,d.id,{isFollowing:!0})},j=(0,m.D)(U,{onCompleted:function(e){var t=e.subscribeNewsletterV3;M(!t),t&&(R.event("newsletterV3.subscribeClicked",{newsletterV3Id:l,source:B}),T(!0))},update:function(e){Y(e,!0)}}),G=o()(j,1)[0],$=(0,m.D)(O,{onCompleted:function(e){var t=e.unsubscribeNewsletterV3;M(!t),t&&(T(!1),L({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:g||null,newsletterType:s||null,unsubscribeFn:function(){return T(!1)}}}))},update:function(e){Y(e,!1)}}),z=o()($,1)[0],H=(0,m.D)(I,{onCompleted:function(e){var t=e.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe;M(!t),t&&(R.event("newsletterV3.subscribeClicked",{newsletterV3Id:t.id,source:B}),T(!0))},update:function(e,t){var n,r=y({},null===(n=t.data)||void 0===n?void 0:n.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe);Y(e,!0,r)}}),W=o()(H,1)[0];return{isSubscribed:A,hasError:x,setSubscribe:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];M(!1),e&&!t&&null!=n&&n.id?W({variables:{userId:null==n?void 0:n.id}}):e&&null!=t&&t.id?G({variables:{newsletterV3Id:null==t?void 0:t.id,shouldRecordConsent:r}}):null!=t&&t.id?z({variables:{newsletterV3Id:null==t?void 0:t.id}}):M(!0)},loading:k}}},93661:(e,t,n)=>{"use strict";n.d(t,{FM:()=>l,d5:()=>m,kr:()=>b,OS:()=>p});var r,i,l,o=n(59713),s=n.n(o),a=n(66802),u=n(25735),c=n(91157);!function(e){e.Monthly="monthly",e.Yearly="yearly",e.YearlyCrossout="yearlyCrossout",e.YearlyStaff="yearlyStaff",e.YearlyPriceSaved="yearlyPriceSaved",e.YearlyStaffPriceSaved="YearlyStaffPriceSaved"}(l||(l={}));var d={CA:{plan:(r={},s()(r,l.Monthly,5),s()(r,l.Yearly,50),s()(r,l.YearlyCrossout,60),s()(r,l.YearlyStaff,1),s()(r,l.YearlyPriceSaved,10),s()(r,l.YearlyStaffPriceSaved,49),r),currency:"CAD"},US:{plan:(i={},s()(i,l.Monthly,5),s()(i,l.Yearly,50),s()(i,l.YearlyCrossout,60),s()(i,l.YearlyStaff,1),s()(i,l.YearlyPriceSaved,10),s()(i,l.YearlyStaffPriceSaved,49),i),currency:"USD"}},m=function(){var e=(0,c.x)(),t=e.loading,n=e.geolocation,r=!!(0,u.VB)({name:"enable_lite_canada_plan",placeholder:!1}),i=!t&&n&&n.country?n.country:"";return r&&"CA"===i?"CA":"US"},b=function(e){var t=e.membershipType,n=e.country,r=d[n],i=r.currency,o=r.plan[t||l.Yearly];if(!o)throw new Error("Unavailable membership price");return{amount:o,currency:i}},p=function(e){var t=e.membershipType,n=e.excludeCurrencySign,r=void 0!==n&&n,i=e.isLongFormat,l=void 0!==i&&i,o=m(),s=b({membershipType:t,country:o}),u=s.amount,c=s.currency;return r?(0,a.Hp)(u,c,l):(0,a.xG)({amount:u,currency:c,floatingDigits:[0,0],isLongFormat:l})}},9354:(e,t,n)=>{"use strict";n.d(t,{T:()=>a,p:()=>u});var r=n(28655),i=n.n(r),l=n(64718),o=n(92471);function s(){var e=i()(["\n  query NewsletterV3ViewerEdge($newsletterSlug: ID!, $collectionSlug: ID, $username: ID) {\n    newsletterV3(\n      newsletterSlug: $newsletterSlug\n      collectionSlug: $collectionSlug\n      username: $username\n    ) {\n      ... on NewsletterV3 {\n        id\n        viewerEdge {\n          id\n          isSubscribed\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}var a=function(e){var t,n=e.newsletterSlug,r=void 0===n?"":n,i=e.collectionSlug,o=e.username,s=(0,l.a)(u,{variables:{newsletterSlug:r,collectionSlug:i,username:o},ssr:!1,skip:!r&&!o}),a=s.loading,c=s.error,d=s.data;return a?{loading:a}:c?{error:c}:{viewerEdge:null==d||null===(t=d.newsletterV3)||void 0===t?void 0:t.viewerEdge}},u=(0,o.Ps)(s())},24330:(e,t,n)=>{"use strict";n.d(t,{N:()=>u});var r=n(63038),i=n.n(r),l=n(67294),o=n(32317),s=n(71293),a=n(77355),u=function(e){var t=e.creator,n=e.followButtonSize,r=void 0===n?"REGULAR":n,u=e.shouldHideTooltip,c=void 0!==u&&u,d=e.post,m=e.showMembershipUpsellModal,b=e.susiEntry,p=e.isVisible,v=e.width,f=e.isSubscribeCompact,w=void 0!==f&&f,h=l.useState(!1),S=i()(h,2),g=S[0],y=S[1];return l.createElement(l.Fragment,null,l.createElement(o.Bv,{buttonSize:r,onClick:function(){t.viewerEdge.isFollowing||y(!0)},post:d,user:t,susiEntry:b,width:v}),l.createElement(a.x,{marginLeft:w?"4px":"8px"},l.createElement(s.X,{user:t,showMembershipUpsellModal:m,showPostFollowSubscribeTooltip:g&&!c,hidePostFollowSubscribeTooltip:function(){return y(!1)},isVisible:p,isCompact:w})))}},71293:(e,t,n)=>{"use strict";n.d(t,{X:()=>se,w:()=>ae});var r=n(28655),i=n.n(r),l=n(63038),o=n.n(l),s=n(92471),a=n(67294),u=n(21919),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateUserPostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userUpdatePostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}}]}}]}}]},d=n(6443),m=n(14818),b=n(13791),p=n(77355),v=n(8126),f=n(87691),w=n(18627),h=n(66411),S=n(43487),g=n(87498),y=n(78870),E=n(50458),V="after_subscribe_membership_upsell",x=function(e){var t=e.user,n=e.isVisible,r=e.hide,i=(0,S.v9)((function(e){return e.config.authDomain})),l=(0,w.Av)(),s=(0,d.H)(),x=s.value,M=s.loading;a.useEffect((function(){var e;M||null!=x&&x.postSubscribeMembershipUpsellShownAt||(l.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:null===(e=t.newsletterV3)||void 0===e?void 0:e.id,source:V}),P())}),[M]);var N=(0,u.D)(c,{optimisticResponse:{userUpdatePostSubscribeMembershipUpsellShownAt:{__typename:"User",id:(null==x?void 0:x.id)||"",postSubscribeMembershipUpsellShownAt:(new Date).getTime()}}}),P=o()(N,1)[0];return a.createElement(h.cW,{source:{name:V}},a.createElement(b.v,{isVisible:n,hide:r,withCloseButton:!0,withAnimation:!0,buttonStyle:"STRONG",buttonSize:"REGULAR",cancelText:"Not now",confirmText:"Become a member",onConfirm:function(){var e,n;l.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:null===(e=t.newsletterV3)||void 0===e?void 0:e.id,source:V}),n=(0,y.Rk)((0,E.c5p)(i),{subscribeToUserId:t.id,source:V}),window.location.href=n},showCancelButton:!0,isDestructiveAction:!1},a.createElement(p.x,{marginBottom:"24px"},a.createElement(m.z,{miroId:t.imageId||g.gG,alt:t.name||"",diameter:80,freezeGifs:!1})),a.createElement(p.x,{marginBottom:{xs:"8px",sm:"8px",md:"16px",lg:"16px",xl:"16px"}},a.createElement(v.F1,{scale:{xs:"S",sm:"S",md:"L",lg:"L",xl:"L"}},"You’re subscribed to get email updates. Become a member for more.")),a.createElement(p.x,{marginBottom:"32px"},a.createElement(f.F,{tag:"span",scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Your membership fee directly supports ",t.name," and other writers you read. Get full access to every story on Medium."))))},M=n(76107),N=n(77280),P=n(61279),k=n(93661),C=n(98863),U=n(26350),O=n(43822),I=n(47230),_=n(73917),F=n(26244),D=n(1383),A=n(14646),T=n(31889),R=n(34135),B=n(97217),L=n(78285);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=a.createElement("path",{d:"M14 7.29L15.6 9 18 6M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),G=a.createElement("path",{d:"M6 8.44l5.27 3.87 1.4-1.06.7-.52"});const $=function(e){return a.createElement("svg",Y({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),j,G)};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var H=a.createElement("path",{d:"M24 13l2 2 3-3.5M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),W=a.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const Q=function(e){return a.createElement("svg",z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),H,W)};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var X=a.createElement("path",{d:"M14.58 6.89h3.92M16.39 9V5.08M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),q=a.createElement("path",{d:"M6 8.44l5.27 3.87 2.81-2.11"});const J=function(e){return a.createElement("svg",K({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),X,q)};function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ee=a.createElement("rect",{x:26.25,y:9.25,width:.5,height:6.5,rx:.25}),te=a.createElement("rect",{x:29.75,y:12.25,width:.5,height:6.5,rx:.25,transform:"rotate(90 29.75 12.25)"}),ne=a.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),re=a.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const ie=function(e){return a.createElement("svg",Z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),ee,te,ne,re)};var le=n(68894);function oe(){var e=i()(["\n  fragment UserSubscribeButton_user on User {\n    id\n    isPartnerProgramEnrolled\n    name\n    viewerEdge {\n      id\n      isFollowing\n      isUser\n    }\n    viewerIsUser\n    newsletterV3 {\n      id\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n    ...useNewsletterV3Subscription_user\n    ...MembershipUpsellModal_user\n  }\n  ","\n  ","\n  ","\n"]);return oe=function(){return e},e}var se=function(e){var t=e.user,n=e.showMembershipUpsellModal,r=void 0!==n&&n,i=e.showPostFollowSubscribeTooltip,l=void 0!==i&&i,s=e.hidePostFollowSubscribeTooltip,u=e.isVisible,c=void 0===u||u,m=e.isCompact,b=void 0!==m&&m,v=a.useRef(null),g=(0,A.I)(),V=(0,T.F)(),M=(0,d.H)().value,Y=(0,le.O)(!1),j=o()(Y,3),G=j[0],z=j[1],H=j[2],W=t.newsletterV3,K=(0,L.w)(),X=(0,w.Av)(),q=(0,h.pK)(),Z=(0,h.Qi)(),ee=(0,N.PM)(),te=(0,P.oT)({newsletterV3:W,creator:t,newsletterName:t.name||void 0}),ne=te.isSubscribed,re=te.hasError,oe=te.loading,se=te.setSubscribe,ae=(0,S.v9)((function(e){return e.config.authDomain})),ue=(0,y.Rk)((0,E.c5p)(ae),{subscribeToUserId:t.id,source:Z}),ce=!(null==M||!M.mediumMemberAt),de=a.useState(!1),me=o()(de,2),be=me[0],pe=me[1],ve=a.useState(!1),fe=o()(ve,2),we=fe[0],he=fe[1],Se=(0,h.P7)(ee||"").susiEntry,ge=void 0===Se?"":Se,ye=["newsletter_v3_promo","writer_subscription_landing"].includes(ge),Ee=["newsletter_v3_promo"].includes(ge),Ve=(0,k.OS)({membershipType:k.FM.Monthly}),xe=!1,Me=function(){var e;!xe&&c&&Ne()&&(X.event("newsletterV3.subscribePresented",{newsletterV3Id:(null===(e=t.newsletterV3)||void 0===e?void 0:e.id)||"",source:q}),xe=!0)},Ne=function(){var e;if(!v.current)return!1;var t=null===(e=v.current)||void 0===e?void 0:e.getBoundingClientRect(),n=t.top+t.height/2;return n>=0&&n<=window.innerHeight};a.useEffect((function(){return Me(),window&&R.V6.on("scroll",Me),function(){R.V6.off("scroll",Me)}}),[]),a.useEffect((function(){Me()}),[c]);var Pe=(0,le.O)(!1),ke=o()(Pe,3),Ce=ke[0],Ue=ke[1],Oe=ke[2],Ie=function(e,t){var n=(0,d.H)(),r=n.value,i=n.loading,l=a.useRef(null),o=!(null==r||!r.mediumMemberAt),s=(0,N.PM)(),u=(0,h.P7)(s||"").susiEntry,c=["newsletter_v3_promo","writer_subscription_landing","subscribe_user"].includes(void 0===u?"":u);if(i)return!1;if(null!==l.current)return l.current;var m=c&&!o&&!e.viewerEdge.isUser&&!!e.isPartnerProgramEnrolled&&!(null!=r&&r.postSubscribeMembershipUpsellShownAt);return l.current=m,m}(t),_e=a.useState(!1),Fe=o()(_e,2),De=Fe[0],Ae=Fe[1];a.useEffect((function(){r&&ne&&!De&&Ie?Ue():Oe()}),[ne,De,Ie]),a.useEffect((function(){ee&&!Ie&&ye&&ne&&(!Ee&&Z===ge||Ee)&&K({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:t.name,newsletterType:B.Rr.NEWSLETTER_TYPE_AUTHOR,unsubscribeFn:function(){return se(!1)}}})}),[ee,ne]),a.useEffect((function(){if(ne&&we&&W){var e=!ce&&!!t.isPartnerProgramEnrolled;e&&X.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:W.id,source:Z}),pe(e),he(!1)}}),[ne,we,W]);var Te=(0,C.f)().isWorkingPreview;if(re||t.viewerEdge.isUser&&!Te)return null;var Re,Be=ne?"OBVIOUS":"STRONG",Le=function(e,t){return function(n){return{stroke:t?n.baseColor.background.normal:e,height:b?"23px":"36px",width:b?"23px":"36px"}}},Ye=g(Le(V.accentColor.fill.normal,oe)),je=g(Le(V.accentColor.background,oe));Re=ne?b?a.createElement($,{className:Ye}):a.createElement(Q,{className:Ye}):b?a.createElement(J,{className:je}):a.createElement(ie,{className:je});var Ge=a.createElement(I.z,{loading:oe,buttonStyle:Be,onClick:function(){var e;he(!ne),M?ne?se(!1):M&&M.allowEmailAddressSharingEditorWriter?se(!0,!1):z():null!==(e=t.newsletterV3)&&void 0!==e&&e.id?X.event("newsletterV3.subscribeClicked",{newsletterV3Id:t.newsletterV3.id,source:Z}):X.event("user.LOSubscribeClicked",{targetUserId:t.id,source:Z})},padding:"0","aria-label":"Subscribe"},Re),$e=function(){return a.createElement(p.x,{padding:"14px 12px 20px",maxWidth:"220px"},a.createElement(f.F,{tag:"div",scale:"S",color:"DARKER"},a.createElement("strong",null,"You're subscribed to ",t.name,". Become a member for more.")," Get full access to every story on Medium for ",Ve," a month."),a.createElement(p.x,{paddingTop:"8px"},a.createElement(O.a,{isButton:!0,buttonStyle:"STRONG",buttonSize:"SMALL",redirectUrl:ue,width:"150px",onClick:function(){X.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:W.id,source:Z})}},a.createElement(p.x,{textAlign:"center"},a.createElement(f.F,{scale:"S",color:"WHITE"},"Become a member")))))},ze=function(){return a.createElement(p.x,{padding:"10px 12px",maxWidth:"166px"},a.createElement(f.F,{tag:"div",scale:"S",color:"DARKER"},"Subscribe to get an email whenever ",t.name," publishes."))},He=function(e){var t=e.children;return a.createElement(_.J,{isVisible:!!s&&!ne,hide:s,placement:"bottom",popoverRenderFn:ze,targetDistance:10,role:"tooltip"},t)},We=function(e){var t=e.children;return a.createElement(_.J,{isVisible:!oe&&be,hide:function(){return pe(!1)},placement:"bottom",popoverRenderFn:$e,targetDistance:10,role:"tooltip"},t)},Qe=function(e){var t=e.children;return a.createElement(F.$,{isVisible:!oe&&!ne,hideOnClick:!0,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:"bottom",popoverRenderFn:ze,role:"tooltip",targetDistance:10},t)},Ke=function(e){var t=e.children;return l&&!ne?a.createElement(He,null,t):be?a.createElement(We,null,t):a.createElement(Qe,null,t)};return a.createElement("div",{ref:v},a.createElement(Ke,null,a.createElement(p.x,null,M&&a.createElement(D.Q,{onConfirm:function(){se(!0,!0)},isVisible:G,hide:H,titleText:"Confirm your subscription to ".concat(t.name),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"When you subscribe to a writer or publication, your email address will be shared with them so they can stay in contact with you outside of Medium. Opt out any time by unsubscribing in Settings."),M?Ge:a.createElement(U.R,{operation:"register",newsletterV3:W,user:t,actionUrl:W?(0,E.Zul)(W.id):(0,E.lcz)(t.id),susiEntry:"subscribe_user"},Ge))),Ce&&a.createElement(x,{user:t,isVisible:Ce,hide:function(){Ae(!0),Oe()}}))},ae=(0,s.Ps)(oe(),P.DI,P.nj,M.b)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4330.73510d98.chunk.js.map