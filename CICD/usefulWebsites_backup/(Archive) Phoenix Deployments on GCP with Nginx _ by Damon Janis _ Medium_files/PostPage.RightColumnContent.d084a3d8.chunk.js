(self.webpackChunklite=self.webpackChunklite||[]).push([[1888,8916],{69100:(e,n,i)=>{var t=i(99489),a=i(57067);function l(n,i,r){return a()?e.exports=l=Reflect.construct:e.exports=l=function(e,n,i){var a=[null];a.push.apply(a,n);var l=new(Function.bind.apply(e,a));return i&&t(l,i.prototype),l},l.apply(null,arguments)}e.exports=l},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,n,i)=>{var t=i(29754),a=i(99489),l=i(70430),r=i(69100);function d(n){var i="function"==typeof Map?new Map:void 0;return e.exports=d=function(e){if(null===e||!l(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(e))return i.get(e);i.set(e,n)}function n(){return r(e,arguments,t(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)},d(n)}e.exports=d},42130:(e,n,i)=>{"use strict";i.d(n,{Z:()=>r});var t=i(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var l=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z",fill:"#000"});const r=function(e){return t.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),l)}},76972:(e,n,i)=>{"use strict";i.d(n,{Z:()=>r});var t=i(59910),a=i(13882),l=36e5;function r(e,n){(0,a.Z)(2,arguments);var i=(0,t.Z)(e,n)/l;return i>0?Math.floor(i):Math.ceil(i)}},91575:(e,n,i)=>{"use strict";i.r(n),i.d(n,{RightColumnContent:()=>N,useLoader:()=>S});var t=i(64718),a=i(67294),l=i(36682),r=i(319),d=i.n(r),o=i(9273),m=i(15013),s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RecircSidebarQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recirc"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}]}},{kind:"Argument",name:{kind:"Name",value:"postId"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RexRecircItem"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPresentationTracker_post"}}]}},{kind:"Field",name:{kind:"Name",value:"feedId"}}]}}]}}]}}]}}].concat(d()(o.Q.definitions),d()(m.h.definitions))},u=i(94986),c=i(43487),k=i(50458),v=i(27628),p=i(10774),f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostPageRightColumnQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostResultError_postResult"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostRightColumn_post"}}]}}]}}]}}].concat(d()(v.i.definitions),d()(p.w.definitions))},S=function(e){var n=(0,a.useMemo)((function(){return(0,k.mrd)({params:e})}),[e.postId]),i=(0,c.v9)((function(e){return e.client.viewerIsBot})),l=(0,t.a)(f,{variables:{postId:n||""},skip:!n}),r=(0,t.a)(s,{variables:{postId:n},skip:!n,ssr:i});return(0,a.useMemo)((function(){return{loading:l.loading||r.loading,postRightColumnQueryResult:l,recircSidebarQueryResult:r}}),[l,r])},N=function(e){var n,i=e.postRightColumnQueryResult,t=e.recircSidebarQueryResult,r=null===(n=i.data)||void 0===n?void 0:n.postResult,d=t.data,o=t.refetch;return(0,u.rK)(r)?null:a.createElement(l.J,{post:r,recircData:d,recircRefetch:o})}},27467:(e,n,i)=>{"use strict";i.d(n,{x:()=>m});var t=i(319),a=i.n(t),l=i(91515),r=i(57831),d=i(1279),o=i(84492),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AuthorInfo_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherName_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherDescription_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}}]}}].concat(a()(l.qy.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherName_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),a()(r.h.definitions),a()(d.m.definitions),a()(o.i.definitions),a()(l.FB.definitions))}},10774:(e,n,i)=>{"use strict";i.d(n,{w:()=>r});var t=i(319),a=i.n(t),l=i(27467),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostRightColumn_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"firstPublishedAt"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AuthorInfo_user"}}]}}]}}].concat(a()(l.x.definitions))}},36682:(e,n,i)=>{"use strict";i.d(n,{J:()=>y});var t=i(67294),a=i(40358),l=i(64423),r=i(32064),d=i(986),o=i(75374),m=i(36405),s=i(97217),u=i(57189),c=i(25550),k=i(49608),v=i(77355),p=i(20113),f=i(66411),S=i(18305),N=i(43487),h=function(e){var n,i=e.postId,a=e.recircData,l=e.recircRefetch,r=(0,c.r)(),d=r.viewerId,o=r.loading,m=(0,N.v9)((function(e){return e.config.productName}));(0,t.useEffect)((function(){!o&&(0,k.Q)(d||"")&&l&&l()}),[o,l]);var s=null==a||null===(n=a.recirc)||void 0===n?void 0:n.items;if(null==s||!s.length||!l)return null;var h=s.slice(0,4);return t.createElement(v.x,null,t.createElement(v.x,{marginTop:"40px",marginBottom:"24px"},t.createElement(p.X6,{scale:"XS"},"More from ",m)),t.createElement(v.x,null,h.map((function(e,n){return null!=e&&e.post?t.createElement(f.cW,{extendSource:!0,source:{name:"read_next_recirc",index:n,feedId:e.feedId||void 0},key:"post-page-read-next-recirc".concat(i,"-").concat(n)},t.createElement(S.o,{post:e.post,presentationContext:"POST_PREVIEW"},t.createElement(u.N,{post:e.post,withFixedWidth:!1}))):null}))))},g=t.memo(h),F=["post"],y=function(e){var n=e.post,i=e.recircData,u=e.recircRefetch,c=!!(0,m.P5)("enable_two_column_layout_with_global_nav");return t.createElement(d.c,null,t.createElement(r.y,null,t.createElement(a.E,null)),!c&&t.createElement(r.y,null,t.createElement(o.f,{algoliaIndexes:F,algoliaQueryContext:"post"})),n.creator&&t.createElement(r.y,null,t.createElement(l.d,{user:n.creator})),!!n.firstPublishedAt&&n.visibility!==s.Wn.UNLISTED&&t.createElement(r.y,null,t.createElement(g,{postId:n.id,recircData:i,recircRefetch:u})))}},29519:(e,n,i)=>{"use strict";i.d(n,{h:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionNavigationContextProvider_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}},27628:(e,n,i)=>{"use strict";i.d(n,{i:()=>l});var t=i(319),a=i.n(t),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostResultError_postResult"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostResult"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"}}]}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]))}},94986:(e,n,i)=>{"use strict";i.d(n,{Ij:()=>P,iT:()=>I,rK:()=>D});var t=i(28655),a=i.n(t),l=i(92471),r=i(67294),d=i(29747),o=i(34575),m=i.n(o),s=i(2205),u=i.n(s),c=i(78585),k=i.n(c),v=i(29754),p=i.n(v),f=i(65957);var S=function(e){u()(a,e);var n,i,t=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p()(n);if(i){var a=p()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return k()(this,e)});function a(){return m()(this,a),t.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return a}(i.n(f)()(Error)),N=i(43683),h=i(2808),g=i(62837),F=i(57815);function y(){var e=a()(["\n  fragment UnavailableForLegalReasonsScreen_unavailableForLegalReasons on UnavailableForLegalReasons {\n    lumenId\n  }\n"]);return y=function(){return e},e}function b(e){var n=e.errorData,i=e.showMetabar;return r.createElement(N.q,{code:451,title:"451 Not available — Medium",lumenId:n.lumenId,showMetabar:i},"This story is subject to a DMCA copyright or other legal or government claim.")}var E=(0,l.Ps)(y());function x(){var e=a()(["\n  fragment WithheldInCountryScreen_withheldInCountry on WithheldInCountry {\n    lumenId\n  }\n"]);return x=function(){return e},e}function C(e){var n=e.errorData,i=e.showMetabar;return r.createElement(N.q,{code:451,title:"451 Not available in your country — Medium",lumenId:n.lumenId,showMetabar:i},"This page is not available in your country.")}var _=(0,l.Ps)(x()),R=i(59764);function w(){var e=a()(["\n  fragment PostResultError_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n    }\n    ... on UnavailableForLegalReasons {\n      ...UnavailableForLegalReasonsScreen_unavailableForLegalReasons\n    }\n    ... on WithheldInCountry {\n      ...WithheldInCountryScreen_withheldInCountry\n    }\n  }\n  ","\n  ","\n"]);return w=function(){return e},e}var D=function(e){return!(0,R.f)(e)},P=function(e){var n=e.postResult,i=e.showMetabar;if(!n)return r.createElement(h.C,{error:new S});switch(n.__typename){case"Unauthorized":return r.createElement(d.N,{opt_isDraft:!0});case"NotFound":return r.createElement(g.$,{showMetabar:i});case"AccountDeleted":return r.createElement(N.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:i},"User deactivated or deleted their account.");case"AccountSuspended":return r.createElement(F.y,{suspension:"account",showMetabar:i});case"PostSuspended":return r.createElement(F.y,{suspension:"post",showMetabar:i});case"Blocked":return r.createElement(N.q,{code:403,title:"403 Blocked — Medium",showMetabar:i},"This user had blocked you from following them or viewing their stories.");case"RemovedByUser":return r.createElement(N.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:i},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return r.createElement(b,{errorData:n,showMetabar:i});case"WithheldInCountry":return r.createElement(C,{errorData:n,showMetabar:i});default:return r.createElement(h.C,{error:new Error("Unsupported postResult: ".concat(n.__typename)),showMetabar:i})}},I=(0,l.Ps)(w(),E,_)},91515:(e,n,i)=>{"use strict";i.d(n,{qy:()=>u,qL:()=>c,FB:()=>k,zH:()=>p});var t=i(319),a=i.n(t),l=i(98237),r=i(76430),d=i(71069),o=i(13085),m=i(81712),s=i(68216),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}}]},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MetaHeader_customStyleSheet"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}}].concat(a()(l.aU.definitions),a()(u.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(a()(o.b.definitions),a()(s.$m.definitions))},v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SidebarProfilePic_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(a()(k.definitions),a()(r.G.definitions),a()(d.w.definitions))},p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowButton_publisher"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"MetaHeader_publisher"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"tagline"}}]}}]),a()(v.definitions),a()(o.b.definitions),a()(m.f.definitions),a()(l.Mv.definitions))}},93647:(e,n,i)=>{"use strict";i.d(n,{C:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"auroraHooks_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraEligible"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}}]}},76430:(e,n,i)=>{"use strict";i.d(n,{G:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SidebarProfilePic_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}}]}}]}},9273:(e,n,i)=>{"use strict";i.d(n,{Q:()=>s});var t=i(319),a=i.n(t),l=i(27048),r=i(68216),d=i(54341),o=i(4088),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}].concat(a()(l.W.definitions),a()(r.$m.definitions),a()(d.O.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_user"}}]}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(a()(m.definitions),a()(r.nf.definitions),a()(o.u.definitions))}},57189:(e,n,i)=>{"use strict";i.d(n,{N:()=>h});var t=i(67294),a=i(25145),l=i(68427),r=i(84739),d=i(12643),o=i(4381),m=i(17193),s=i(28695),u=i(93310),c=i(77355),k=i(26244),v=i(27323),p=i(87691),f=i(52069),S=i(14646),N=i(46696),h=function(e){var n,i,h,g=e.post,F=e.withFixedWidth,y=void 0===F||F,b=g&&g.previewImage||{},E=b.focusPercentX,x=b.focusPercentY,C=b.id,_=b.alt,R=g.collection,w=g.creator,D=null!==(n=null==g?void 0:g.title)&&void 0!==n?n:"",P=(0,a.L)(g),I=null!==(i=null==R?void 0:R.name)&&void 0!==i?i:null,T=(0,l.B)(),M=(0,r.I)();w&&(h=M(w));var U=C?"170px":"".concat(226,"px"),A=(0,S.I)(),L=(0,t.useCallback)((function(){return w&&t.createElement(s.K,{user:w})}),[w]);return t.createElement(c.x,{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"24px"},t.createElement(c.x,{display:"flex",flexDirection:"row",justifyContent:"space-between"},t.createElement(c.x,{display:"flex",flexDirection:"column",marginRight:"24px",flexGrow:"1",flexBasis:"0%"},w&&t.createElement(c.x,{display:"flex",alignItems:"center",marginBottom:"8px"},t.createElement(c.x,{marginRight:"8px"},t.createElement(u.r,{href:h},t.createElement(m.Yt,{scale:"XXXS",user:w}))),t.createElement(c.x,{paddingRight:"4px"},t.createElement(k.$,{targetDistance:15,mouseLeaveDelay:100,placement:"top",role:"tooltip",popoverRenderFn:L},t.createElement(c.x,{display:"flex"},t.createElement(u.r,{href:h},t.createElement(p.F,{scale:"S",color:"DARKER",clamp:1},w.name))))),R&&R.name&&t.createElement(t.Fragment,null,t.createElement(c.x,{paddingRight:"4px"},t.createElement(p.F,{scale:"S",color:"LIGHTER"},"in")),t.createElement(c.x,null,t.createElement(u.r,{href:T(R)},t.createElement(p.F,{scale:"S",color:"DARKER",clamp:1},I))))),D&&t.createElement(v.P,{href:P},t.createElement(f.Dx,{scale:"XS",clamp:3},t.createElement("div",{className:y?A({width:U}):void 0},D)))),t.createElement(v.P,{href:P},t.createElement(c.x,{width:"56px"},C&&t.createElement(d.G,{height:1,width:1},t.createElement(o.UV,{miroId:C,alt:_||"",aspectRatio:o.Pr.Square,strategy:N._S.Crop,width:56,rules:{borderRadius:"2px"},focusPercentX:E||50,focusPercentY:x||50,freezeGifs:!0}))))))}},29747:(e,n,i)=>{"use strict";i.d(n,{N:()=>s});var t=i(67294),a=i(90833),l=i(18839),r=i(66411),d=i(43487),o=i(78870),m=i(50458),s=function(e){var n=e.opt_isDraft,i=e.opt_params,s=e.operation,u=e.opt_hash,c=e.opt_location,k=(0,d.v9)((function(e){return e.config.authDomain})),v=(0,d.v9)((function(e){return e.navigation.currentLocation})),p=(0,r.pK)(),f=(0,r.hp)(),S=(0,o.Rk)((0,m.Kkz)(k),{operation:s||"login",redirect:(0,l.hQ)(c||v,p,f,null,null,i,u),isDraft:n?"1":"0"});return t.createElement(a.l,{to:S,temporary:!0})}},12643:(e,n,i)=>{"use strict";i.d(n,{G:()=>l});var t=i(67294),a=i(77355),l=t.forwardRef((function(e,n){var i=e.height,l=void 0===i?1:i,r=e.width,d=void 0===r?1:r,o=e.backgroundColor,m=void 0===o?"BASE_NORMAL":o,s=e.children,u=(d=d||1)/(l=l||1);return t.createElement(a.x,{position:"relative",margin:"auto",backgroundColor:m,ref:n,overflow:"hidden"},t.createElement(a.x,{paddingBottom:"".concat(100/u,"%"),height:"0"},s))}))},15013:(e,n,i)=>{"use strict";i.d(n,{h:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPresentationTracker_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}}]}},43683:(e,n,i)=>{"use strict";i.d(n,{q:()=>F});var t=i(67294),a=i(70405),l=i(5977),r=i(59713),d=i.n(r),o=i(77355),m=i(14199),s=i(14646),u=i(97489),c={fontSize:"20px",textTransform:"uppercase"},k=function(e){return d()({display:"block",fontSize:"192px",lineHeight:"200px"},u.sm(e),{fontSize:"150px"})},v=function(e){var n=e.errorCode,i=(0,s.I)(),a=(0,m.n)({name:"marketing",scale:"XXXL",color:"DARKER"});return t.createElement(o.x,{display:"flex",flexDirection:"column"},t.createElement("div",{className:i(c)},"Error"),t.createElement("div",{className:i([a,k])},n))},p=i(46580),f=i(96370),S=i(93310),N=i(6402),h=i(21638),g={fontSize:"24px"};function F(e){var n=e.code,i=e.title,r=e.children,d=e.lumenId,m=e.showMetabar,u=void 0===m||m,c=(0,s.I)();return(0,t.useEffect)((function(){N.k.debug({status:n},"[".concat(n,"]: ").concat(i))}),[]),t.createElement(l.AW,{render:function(e){var l=e.staticContext;return l&&(l.statusCode=n),t.createElement("div",null,t.createElement(a.ql,null,t.createElement("title",null,i)),u&&t.createElement(p.kw,null),t.createElement(o.x,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},t.createElement(f.P,{size:"inset"},t.createElement(o.x,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},t.createElement(v,{errorCode:n}),t.createElement("div",{className:c((0,h.rJ)())},t.createElement(o.x,{marginBottom:"28px"},t.createElement("div",{className:c(g)},r)),d?t.createElement("div",{className:c(g)},"A report is available on"," ",t.createElement(S.r,{href:"https://lumendatabase.org/notices/".concat(d),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},57815:(e,n,i)=>{"use strict";i.d(n,{y:()=>s});var t=i(67294),a=i(77355),l=i(47230),r=i(90586),d=i(18627),o=i(43683),m=i(43487),s=function(e){var n=e.suspension,i=e.showMetabar,s=(0,d.Av)(),u=(0,m.v9)((function(e){return e.config.authDomain}));return t.createElement(o.q,{code:410,title:"410 ".concat(n," suspended — Medium"),showMetabar:i},t.createElement(a.x,{display:"flex",marginTop:"-30px"},t.createElement(r.QE,{scale:"S"},"This ",n," is under investigation or was found in violation of the Medium Rules."," ")),t.createElement(a.x,{display:"flex",marginTop:"80px"},t.createElement(r.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",t.createElement("br",null)," to find one that’s right for you.")),t.createElement(a.x,{display:"flex",marginTop:"15px"},t.createElement(l.z,{buttonStyle:"SUBTLE",href:"https://".concat(u),onClick:function(){s.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/PostPage.RightColumnContent.d084a3d8.chunk.js.map