(self.webpackChunklite=self.webpackChunklite||[]).push([[1888,8916],{69100:(e,n,t)=>{var i=t(99489),a=t(57067);function l(n,t,r){return a()?e.exports=l=Reflect.construct:e.exports=l=function(e,n,t){var a=[null];a.push.apply(a,n);var l=new(Function.bind.apply(e,a));return t&&i(l,t.prototype),l},l.apply(null,arguments)}e.exports=l},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,n,t)=>{var i=t(29754),a=t(99489),l=t(70430),r=t(69100);function o(n){var t="function"==typeof Map?new Map:void 0;return e.exports=o=function(e){if(null===e||!l(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return r(e,arguments,i(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)},o(n)}e.exports=o},42130:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var i=t(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var l=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z",fill:"#000"});const r=function(e){return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),l)}},76972:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var i=t(59910),a=t(13882),l=36e5;function r(e,n){(0,a.Z)(2,arguments);var t=(0,i.Z)(e,n)/l;return t>0?Math.floor(t):Math.ceil(t)}},11849:(e,n,t)=>{"use strict";t.r(n),t.d(n,{RightColumnContent:()=>S,useLoader:()=>g});var i=t(64718),a=t(67294),l=t(36682),r=t(319),o=t.n(r),d=t(9273),m=t(15013),s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RecircSidebarQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recirc"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}]}},{kind:"Argument",name:{kind:"Name",value:"postId"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RexRecircItem"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPresentationTracker_post"}}]}},{kind:"Field",name:{kind:"Name",value:"feedId"}}]}}]}}]}}]}}].concat(o()(d.Q.definitions),o()(m.h.definitions))},c=t(94986),u=t(43487),k=t(50458),p=t(27628),v=t(10774),f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostPageRightColumnQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostResultError_postResult"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostRightColumn_post"}}]}}]}}]}}].concat(o()(p.i.definitions),o()(v.w.definitions))},g=function(e){var n=(0,a.useMemo)((function(){return(0,k.mrd)({params:e})}),[e.postId]),t=(0,u.v9)((function(e){return e.client.viewerIsBot})),l=(0,i.a)(f,{variables:{postId:n||""},skip:!n}),r=(0,i.a)(s,{variables:{postId:n},skip:!n,ssr:t});return(0,a.useMemo)((function(){return{loading:l.loading||r.loading,postRightColumnQueryResult:l,recircSidebarQueryResult:r}}),[l,r])},S=function(e){var n,t=e.postRightColumnQueryResult,i=e.recircSidebarQueryResult,r=null===(n=t.data)||void 0===n?void 0:n.postResult,o=i.data,d=i.refetch;return(0,c.r)(r)?null:a.createElement(l.J,{post:r,recircData:o,recircRefetch:d})}},27467:(e,n,t)=>{"use strict";t.d(n,{x:()=>m});var i=t(319),a=t.n(i),l=t(91515),r=t(57831),o=t(1279),d=t(84492),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AuthorInfo_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherName_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherDescription_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}}]}}].concat(a()(l.qy.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherName_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),a()(r.h.definitions),a()(o.m.definitions),a()(d.i.definitions),a()(l.FB.definitions))}},10774:(e,n,t)=>{"use strict";t.d(n,{w:()=>r});var i=t(319),a=t.n(i),l=t(27467),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostRightColumn_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"firstPublishedAt"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AuthorInfo_user"}}]}}]}}].concat(a()(l.x.definitions))}},36682:(e,n,t)=>{"use strict";t.d(n,{J:()=>y});var i=t(67294),a=t(88641),l=t(40358),r=t(64423),o=t(32064),d=t(986),m=t(75374),s=t(97217),c=t(57189),u=t(25550),k=t(49608),p=t(77355),v=t(20113),f=t(66411),g=t(18305),S=t(43487),h=function(e){var n,t=e.postId,a=e.recircData,l=e.recircRefetch,r=(0,u.r)(),o=r.viewerId,d=r.loading,m=(0,S.v9)((function(e){return e.config.productName}));(0,i.useEffect)((function(){!d&&(0,k.Q)(o||"")&&l&&l()}),[d,l]);var s=null==a||null===(n=a.recirc)||void 0===n?void 0:n.items;if(null==s||!s.length||!l)return null;var h=s.slice(0,4);return i.createElement(p.x,null,i.createElement(p.x,{marginTop:"40px",marginBottom:"24px"},i.createElement(v.X6,{scale:"XS"},"More from ",m)),i.createElement(p.x,null,h.map((function(e,n){return null!=e&&e.post?i.createElement(f.cW,{extendSource:!0,source:{name:"read_next_recirc",index:n,feedId:e.feedId||void 0},key:"post-page-read-next-recirc".concat(t,"-").concat(n)},i.createElement(g.o,{post:e.post,presentationContext:"POST_PREVIEW"},i.createElement(c.N,{post:e.post,withFixedWidth:!1}))):null}))))},N=i.memo(h),x=["post"],y=function(e){var n=e.post,t=e.recircData,c=e.recircRefetch,u=(0,a.L)();return i.createElement(d.c,null,i.createElement(o.y,null,i.createElement(l.E,null)),!u&&i.createElement(o.y,null,i.createElement(m.f,{algoliaIndexes:x,algoliaQueryContext:"post"})),n.creator&&i.createElement(o.y,null,i.createElement(r.d,{user:n.creator})),!!n.firstPublishedAt&&n.visibility!==s.Wn.UNLISTED&&i.createElement(o.y,null,i.createElement(N,{postId:n.id,recircData:t,recircRefetch:c})))}},29519:(e,n,t)=>{"use strict";t.d(n,{h:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionNavigationContextProvider_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}},27628:(e,n,t)=>{"use strict";t.d(n,{i:()=>l});var i=t(319),a=t.n(i),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostResultError_postResult"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostResult"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"}}]}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]))}},94986:(e,n,t)=>{"use strict";t.d(n,{I:()=>b,r:()=>F});var i=t(67294),a=t(83447),l=t(29747),r=t(34575),o=t.n(r),d=t(2205),m=t.n(d),s=t(78585),c=t.n(s),u=t(29754),k=t.n(u),p=t(65957);var v=function(e){m()(a,e);var n,t,i=(n=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=k()(n);if(t){var a=k()(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return c()(this,e)});function a(){return o()(this,a),i.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return a}(t.n(p)()(Error)),f=t(43683),g=t(2808),S=t(49216),h=t(57815);function N(e){var n=e.errorData,t=e.showMetabar;return i.createElement(f.q,{code:451,title:"451 Not available — Medium",lumenId:n.lumenId,showMetabar:t},"This story is subject to a DMCA copyright or other legal or government claim.")}function x(e){var n=e.errorData,t=e.showMetabar;return i.createElement(f.q,{code:451,title:"451 Not available in your country — Medium",lumenId:n.lumenId,showMetabar:t},"This page is not available in your country.")}var y=t(59764),F=function(e){return!(0,y.f)(e)},b=function(e){var n=e.postResult,t=e.showMetabar;if(!n)return i.createElement(g.C,{error:new v});switch(n.__typename){case"Unauthorized":return i.createElement(l.N,{opt_isDraft:!0});case"NotFound":return t?i.createElement(S.$,null):i.createElement(a.$,null);case"AccountDeleted":return i.createElement(f.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:t},"User deactivated or deleted their account.");case"AccountSuspended":return i.createElement(h.y,{suspension:"account",showMetabar:t});case"PostSuspended":return i.createElement(h.y,{suspension:"post",showMetabar:t});case"Blocked":return i.createElement(f.q,{code:403,title:"403 Blocked — Medium",showMetabar:t},"This user had blocked you from following them or viewing their stories.");case"RemovedByUser":return i.createElement(f.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:t},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return i.createElement(N,{errorData:n,showMetabar:t});case"WithheldInCountry":return i.createElement(x,{errorData:n,showMetabar:t});default:return i.createElement(g.C,{error:new Error("Unsupported postResult: ".concat(n.__typename)),showMetabar:t})}}},91515:(e,n,t)=>{"use strict";t.d(n,{qy:()=>c,qL:()=>u,FB:()=>k,zH:()=>v});var i=t(319),a=t.n(i),l=t(45180),r=t(76430),o=t(71069),d=t(13085),m=t(81712),s=t(68216),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}}]},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MetaHeader_customStyleSheet"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}}].concat(a()(l.aU.definitions),a()(c.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(a()(d.b.definitions),a()(s.$m.definitions))},p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SidebarProfilePic_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(a()(k.definitions),a()(r.G.definitions),a()(o.w.definitions))},v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowButton_publisher"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"MetaHeader_publisher"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebar_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"tagline"}}]}}]),a()(p.definitions),a()(d.b.definitions),a()(m.f.definitions),a()(l.Mv.definitions))}},93647:(e,n,t)=>{"use strict";t.d(n,{C:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"auroraHooks_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraEligible"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}}]}},76430:(e,n,t)=>{"use strict";t.d(n,{G:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SidebarProfilePic_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}}]}}]}},9273:(e,n,t)=>{"use strict";t.d(n,{Q:()=>s});var i=t(319),a=t.n(i),l=t(27048),r=t(68216),o=t(54341),d=t(4088),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}].concat(a()(l.W.definitions),a()(r.$m.definitions),a()(o.O.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_user"}}]}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(a()(m.definitions),a()(r.nf.definitions),a()(d.u.definitions))}},57189:(e,n,t)=>{"use strict";t.d(n,{N:()=>h});var i=t(67294),a=t(25145),l=t(68427),r=t(84739),o=t(12643),d=t(4381),m=t(17193),s=t(28695),c=t(93310),u=t(77355),k=t(26244),p=t(27323),v=t(87691),f=t(52069),g=t(14646),S=t(46696),h=function(e){var n,t,h,N=e.post,x=e.withFixedWidth,y=void 0===x||x,F=N&&N.previewImage||{},b=F.focusPercentX,E=F.focusPercentY,w=F.id,D=F.alt,C=N.collection,P=N.creator,R=null!==(n=null==N?void 0:N.title)&&void 0!==n?n:"",_=(0,a.L)(N),I=null!==(t=null==C?void 0:C.name)&&void 0!==t?t:null,T=(0,l.B)(),M=(0,r.I)();P&&(h=M(P));var O=w?"170px":"".concat(226,"px"),A=(0,g.I)(),U=(0,i.useCallback)((function(){return P&&i.createElement(s.K,{user:P})}),[P]);return i.createElement(u.x,{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"24px"},i.createElement(u.x,{display:"flex",flexDirection:"row",justifyContent:"space-between"},i.createElement(u.x,{display:"flex",flexDirection:"column",marginRight:"24px",flexGrow:"1",flexBasis:"0%"},P&&i.createElement(u.x,{display:"flex",alignItems:"center",marginBottom:"8px"},i.createElement(u.x,{marginRight:"8px"},i.createElement(c.r,{href:h},i.createElement(m.Yt,{scale:"XXXS",user:P}))),i.createElement(u.x,{paddingRight:"4px"},i.createElement(k.$,{targetDistance:15,mouseLeaveDelay:100,placement:"top",role:"tooltip",popoverRenderFn:U},i.createElement(u.x,{display:"flex"},i.createElement(c.r,{href:h},i.createElement(v.F,{scale:"S",color:"DARKER",clamp:1},P.name))))),C&&C.name&&i.createElement(i.Fragment,null,i.createElement(u.x,{paddingRight:"4px"},i.createElement(v.F,{scale:"S",color:"LIGHTER"},"in")),i.createElement(u.x,null,i.createElement(c.r,{href:T(C)},i.createElement(v.F,{scale:"S",color:"DARKER",clamp:1},I))))),R&&i.createElement(p.P,{href:_},i.createElement(f.Dx,{scale:"XS",clamp:3},i.createElement("div",{className:y?A({width:O}):void 0},R)))),i.createElement(p.P,{href:_},i.createElement(u.x,{width:"56px"},w&&i.createElement(o.G,{height:1,width:1},i.createElement(d.UV,{miroId:w,alt:D||"",aspectRatio:d.Pr.Square,strategy:S._S.Crop,width:56,rules:{borderRadius:"2px"},focusPercentX:b||50,focusPercentY:E||50,freezeGifs:!0}))))))}},29747:(e,n,t)=>{"use strict";t.d(n,{N:()=>s});var i=t(67294),a=t(90833),l=t(18839),r=t(66411),o=t(43487),d=t(78870),m=t(50458),s=function(e){var n=e.opt_isDraft,t=e.opt_params,s=e.operation,c=e.opt_hash,u=e.opt_location,k=(0,o.v9)((function(e){return e.config.authDomain})),p=(0,o.v9)((function(e){return e.navigation.currentLocation})),v=(0,r.pK)(),f=(0,r.hp)(),g=(0,d.Rk)((0,m.Kkz)(k),{operation:s||"login",redirect:(0,l.hQ)(u||p,v,f,null,null,t,c),isDraft:n?"1":"0"});return i.createElement(a.l,{to:g,temporary:!0})}},12643:(e,n,t)=>{"use strict";t.d(n,{G:()=>l});var i=t(67294),a=t(77355),l=i.forwardRef((function(e,n){var t=e.height,l=void 0===t?1:t,r=e.width,o=void 0===r?1:r,d=e.backgroundColor,m=void 0===d?"BASE_NORMAL":d,s=e.children,c=(o=o||1)/(l=l||1);return i.createElement(a.x,{position:"relative",margin:"auto",backgroundColor:m,ref:n,overflow:"hidden"},i.createElement(a.x,{paddingBottom:"".concat(100/c,"%"),height:"0"},s))}))},84492:(e,n,t)=>{"use strict";t.d(n,{i:()=>o});var i=t(319),a=t.n(i),l=t(78693),r=t(71069),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(a()(l.s.definitions),a()(r.w.definitions))}},15013:(e,n,t)=>{"use strict";t.d(n,{h:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPresentationTracker_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}}]}},43683:(e,n,t)=>{"use strict";t.d(n,{q:()=>x});var i=t(67294),a=t(70405),l=t(5977),r=t(59713),o=t.n(r),d=t(77355),m=t(14199),s=t(14646),c=t(97489),u={fontSize:"20px",textTransform:"uppercase"},k=function(e){return o()({display:"block",fontSize:"192px",lineHeight:"200px"},c.sm(e),{fontSize:"150px"})},p=function(e){var n=e.errorCode,t=(0,s.I)(),a=(0,m.n)({name:"marketing",scale:"XXXL",color:"DARKER"});return i.createElement(d.x,{display:"flex",flexDirection:"column"},i.createElement("div",{className:t(u)},"Error"),i.createElement("div",{className:t([a,k])},n))},v=t(46580),f=t(96370),g=t(93310),S=t(6402),h=t(21638),N={fontSize:"24px"};function x(e){var n=e.code,t=e.title,r=e.children,o=e.lumenId,m=e.showMetabar,c=void 0===m||m,u=(0,s.I)();return(0,i.useEffect)((function(){S.k.debug({status:n},"[".concat(n,"]: ").concat(t))}),[]),i.createElement(l.AW,{render:function(e){var l=e.staticContext;return l&&(l.statusCode=n),i.createElement("div",null,i.createElement(a.ql,null,i.createElement("title",null,t)),c&&i.createElement(v.k,null),i.createElement(d.x,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},i.createElement(f.P,{size:"inset"},i.createElement(d.x,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},i.createElement(p,{errorCode:n}),i.createElement("div",{className:u((0,h.rJ)())},i.createElement(d.x,{marginBottom:"28px"},i.createElement("div",{className:u(N)},r)),o?i.createElement("div",{className:u(N)},"A report is available on"," ",i.createElement(g.r,{href:"https://lumendatabase.org/notices/".concat(o),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},49216:(e,n,t)=>{"use strict";t.d(n,{$:()=>O});var i=t(63038),a=t.n(i),l=t(59713),r=t.n(l),o=t(67294),d=t(5977),m=t(83447),s=t(46580),c=t(32331),u=t(4381),k=t(77355),p=t(47459),v=t(43158),f=t(93310),g=t(52278),S=t(14646),h=t(31889),N=t(34135),x=t(43487),y=t(21638),F=t(50458);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e,n){return function(t){var i={border:"1px solid ".concat(t.baseColor.border.lighter),borderRadius:"5px",boxShadow:"0 1px 4px ".concat(t.baseColor.border.lighter),margin:"8px",width:"calc(calc(100% / 3) - 8px)",overflow:"hidden","@media (max-width: 903.98px)":{width:"100%",marginLeft:"0",marginRight:"0"}};return 0===e?E(E({},i),{},{marginLeft:"0px"}):e===n?E(E({},i),{},{marginRight:"0px"}):i}},D={width:242,height:242},C={width:303,height:303},P={width:410,height:410},R={width:478,height:478},_=function(){var e=(0,S.I)();return o.createElement("div",{className:e({display:"flex",flexDirection:{xl:"row",lg:"row",md:"column",sm:"column",xs:"column"}})},m.l.slice(0,3).map((function(n,t){return o.createElement("div",{key:t,className:e(w(t,m.l.length-1))},o.createElement(c.y,{post:n}))})))},I=function(e){var n=e.imageDimensions,t=(0,S.I)();return o.createElement(o.Fragment,null,o.createElement(k.x,{sm:{display:"none"},xs:{display:"none"}},o.createElement(p.T,{alignItems:"stretch"},o.createElement(v.P,{size:{xs:12,sm:12,md:6,lg:6,xl:6}},o.createElement(k.x,{textAlign:"center"},!!n.width&&o.createElement(u.UV,{miroId:"1*8rgW0Qvy2bSGSBMlORMhQA.png",width:n.width,height:n.height}))),o.createElement(v.P,{size:{xs:12,sm:12,md:6,lg:6,xl:6}},o.createElement(k.x,{paddingLeft:"27px"},o.createElement(T,{cx:t}),o.createElement(M,{cx:t}))))),o.createElement(k.x,{xl:{display:"none"},lg:{display:"none"},md:{display:"none"},sm:{display:"block",textAlign:"center"},xs:{display:"block",textAlign:"center"}},o.createElement(p.T,{alignItems:"stretch"},o.createElement(v.P,{size:{xs:12,sm:12,md:6,lg:6,xl:6}},o.createElement(T,{cx:t})),o.createElement(v.P,{size:{xs:12,sm:12,md:6,lg:6,xl:6}},o.createElement(u.UV,{miroId:"1*8rgW0Qvy2bSGSBMlORMhQA.png",width:n.width,height:n.height})),o.createElement(v.P,{size:{xs:12,sm:12,md:6,lg:6,xl:6}},o.createElement(M,{cx:t})))))},T=function(e){var n=e.cx;return o.createElement(o.Fragment,null,o.createElement("div",{className:n({fontFamily:y.XM,fontSize:{xl:"16px",lg:"16px",md:"13px",sm:"13px",xs:"13px"},letterSpacing:"normal",lineHeight:{xl:"24px",lg:"24px",md:"20px",sm:"20px",xs:"20px"},fontWeight:"400"})},"PAGE NOT FOUND"),o.createElement("div",{className:n((0,y.rJ)())},o.createElement("div",{className:n((function(e){return{fontFamily:e.newFonts.marketing.family,fontSize:{xl:"150px",lg:"130px",md:"90px",sm:"90px",xs:"90px"},color:"#B2B2B2",letterSpacing:"normal",lineHeight:{xl:"173.55px",lg:"150px",md:"104px",sm:"104px",xs:"104px"},fontWeight:"400",fontFeatureSettings:'"liga" on, "lnum" on;',"-moz-font-feature-settings":'"liga" on, "lnum" on;',"-webkit-font-feature-settings":'"liga" on, "lnum" on;'}}))},"404"),o.createElement("div",{className:n((function(e){return{fontFamily:e.newFonts.marketing.family,fontSize:{xl:"70px",lg:"48px",md:"32px",sm:"32px",xs:"32px"},letterSpacing:"normal",lineHeight:{xl:"74px",lg:"52px",md:"36px",sm:"36px",xs:"36px"},marginBottom:{xl:"0px",lg:"0px",md:"0px",sm:"24px",xs:"24px"},fontWeight:"400"}}))},"Out of nothing, something.")))},M=function(e){var n=e.cx,t=(0,x.v9)((function(e){return e.config.productName}));return o.createElement("div",{className:n({fontFamily:y.XM,fontSize:{xl:"18px",lg:"16px",md:"16px",sm:"16px",xs:"16px"},letterSpacing:"normal",lineHeight:{xl:"24px",lg:"20px",md:"20px",sm:"20px",xs:"20px"},marginTop:{xl:"11px",lg:"11px",md:"11px",sm:"26px",xs:"26px"},fontWeight:"400"})},"You can find (just about) anything on ",t," — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?",o.createElement(f.r,{href:(0,F.$x3)()},o.createElement("div",{className:n({textDecoration:"underline",marginTop:"11px"})},"Home")))},O=function(e){var n=e.loggingData,t=(0,h.F)(),i=o.useState(0),l=a()(i,2),r=l[0],m=l[1],c=function(){m(window.innerWidth)};o.useEffect((function(){return c(),N.V6.on("resize",c),function(){return N.V6.off("resize",c)}}),[]);var u={width:0,height:0};return r>=t.breakpoints.xl?u=R:t.breakpoints.lg<=r&&r<t.breakpoints.xl?u=P:t.breakpoints.md<=r&&r<t.breakpoints.lg?u=C:r>0&&(u=D),o.createElement(d.AW,{render:function(e){var t=e.staticContext;return t&&(t.loggingData=n,t.statusCode=404),o.createElement(o.Fragment,null,o.createElement(s.k,null),o.createElement(g.M,null,o.createElement(I,{imageDimensions:u})),o.createElement(k.x,{tag:"section",marginTop:"100px",paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px",paddingBottom:"120px"},o.createElement(g.M,null,o.createElement(_,null))))}})}},57815:(e,n,t)=>{"use strict";t.d(n,{y:()=>s});var i=t(67294),a=t(77355),l=t(47230),r=t(90586),o=t(18627),d=t(43683),m=t(43487),s=function(e){var n=e.suspension,t=e.showMetabar,s=(0,o.Av)(),c=(0,m.v9)((function(e){return e.config.authDomain}));return i.createElement(d.q,{code:410,title:"410 ".concat(n," suspended — Medium"),showMetabar:t},i.createElement(a.x,{display:"flex",marginTop:"-30px"},i.createElement(r.QE,{scale:"S"},"This ",n," is under investigation or was found in violation of the Medium Rules."," ")),i.createElement(a.x,{display:"flex",marginTop:"80px"},i.createElement(r.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",i.createElement("br",null)," to find one that’s right for you.")),i.createElement(a.x,{display:"flex",marginTop:"15px"},i.createElement(l.z,{buttonStyle:"SUBTLE",href:"https://".concat(c),onClick:function(){s.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/PostPage.RightColumnContent.7583ad6a.chunk.js.map