(self.webpackChunklite=self.webpackChunklite||[]).push([[7994],{40358:(e,n,i)=>{"use strict";i.d(n,{E:()=>f});var t=i(67294),l=i(36405),a=i(25550),o=i(49608),r=i(77355),d=i(5977),c=i(77520),m=i(26350),u=i(47230),s=i(87691),k=i(92661),p="three_column_layout_nav",v=function(e){var n,i=e.loading,l=(0,d.TH)(),a=(0,k.$B)(l.pathname),o=null==a||null===(n=a.route)||void 0===n?void 0:n.name;return t.createElement(r.x,{display:"flex",alignItems:"center"},t.createElement(r.x,{flexGrow:"1",flexShrink:"0",playwrightClassName:"pw-susi-button"},t.createElement(m.R,{pageSource:(0,c.x)(o,"register"),operation:"register",susiEntry:p},t.createElement(u.z,{size:"REGULAR",buttonStyle:"BRAND",width:"100%",loading:i,"aria-label":"sign up"},"Get started"))),!i&&t.createElement(r.x,{marginLeft:"24px",playwrightClassName:"pw-sign-in-button"},t.createElement(s.F,{scale:"M",color:"ACCENT"},t.createElement(m.R,{pageSource:(0,c.x)(o,"login"),operation:"login",susiEntry:p},"Sign In"))))},g=i(10974),f=function(){var e=(0,a.r)(),n=e.viewerId,i=e.loading,d=n&&(0,o.Q)(n),c=!!(0,l.P5)("enable_two_column_layout_with_global_nav");return!d&&c?null:t.createElement(r.x,null,d?t.createElement(g.N,null):t.createElement(v,{loading:i}))}},64423:(e,n,i)=>{"use strict";i.d(n,{d:()=>J,m:()=>$});var t=i(67294),l=i(937),a=i(20113),o=function(e){var n=e.publisher,i=e.scale,l=void 0===i?"XS":i;return n.name?t.createElement(a.X6,{playwrightClassName:"pw-author-name",scale:l},n.name):null},r=i(41987),d=i(63038),c=i.n(d),m=i(38460),u=i(25468),s=i(65590),k=i(319),p=i.n(k),v=i(13085),g=i(14337),f=i(54341),S=i(84683),y=i(19308),N={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat(p()(S.d.definitions),p()(y.I.definitions))},F={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FollowedEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}]}}].concat(p()(g.v.definitions),p()(f.O.definitions),p()(N.definitions))},b=([{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}}]}}].concat(p()(v.b.definitions)),{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserFollowsListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"}}]}}]}}].concat(p()(F.definitions))}),E=i(78757),h=i(30826),x=i(75210),w=i(28695),C=i(77355),_=i(93310),T=i(73917),I=i(42130),D=i(68894),B=function(e){return{"& path":{fill:e.baseColor.text.lighter},":hover path":{fill:e.baseColor.fill.darker},":focus path":{fill:e.baseColor.fill.darker},":hover":{background:e.baseColor.background.normal},padding:"4px",borderRadius:"6px"}},R=function(e){var n=e.popoverRenderFn,i=e.ariaId,l=e.role,a=(0,D.O)(!1),o=c()(a,4),r=o[0],d=o[2],m=o[3];return t.createElement(T.J,{ariaId:i,isVisible:r,placement:"top",targetDistance:10,role:l,popoverRenderFn:n,hide:d,hideOnOutsideClick:!0,noPortal:!0},t.createElement(_.r,{onClick:m,rules:B,"aria-controls":i,"aria-expanded":r},t.createElement(I.Z,null)))},U=i(87691),A=function(e){return{"& p":{wordBreak:"break-all"},":hover p":{textDecoration:"underline",color:e.baseColor.text.light}}},L=function(e){var n=e.entity,i=(0,E.P)(n),l=(0,t.useCallback)((function(){return"User"===n.__typename?t.createElement(w.K,{user:n}):t.createElement(x.L,{collection:n,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}),[n]);return t.createElement(C.x,{tag:"li",display:"flex",justifyContent:"space-between",alignItems:"center"},t.createElement(_.r,{href:i,rules:A},t.createElement(C.x,{display:"flex",paddingRight:"10px"},t.createElement(C.x,{paddingRight:"12px"},t.createElement(h.G,{publisher:n,scale:"XXXS"})),t.createElement(U.F,{clamp:1,scale:"S",color:"LIGHTER"},n.name))),t.createElement(R,{popoverRenderFn:l,ariaId:"creatorInfoPopover-".concat(n.id),role:"dialog"}))},V=i(6443),P=i(18627),M=i(66411),O=i(18122),G=i(97217),H=i(21372),X=function(e){var n,i=e.user,l=i.id,o=i.customStyleSheet,r=(0,V.H)().value,d=l===(null==r?void 0:r.id),k=(0,P.Av)(),p=(0,O.g)({onPresentedFn:function(){return k.event("sidebar.blogrollViewed",{viewerIsAuthor:d})}}),v=(0,m.t)(b,{ssr:!0,variables:{userId:l,limit:5}}),g=c()(v,2),f=g[0],S=g[1],y=S.called,N=S.loading,F=S.error,E=S.data,h=(E=void 0===E?{userFollows:void 0}:E).userFollows,x=(0,u.g)(i),w=x.isFollowingCountVisible,T=x.followingCount,I=(0,t.useState)(),D=c()(I,2),B=D[0],R=D[1],A=(0,t.useState)(!1),X=c()(A,2),z=X[0],Y=X[1],j=(0,t.useCallback)((function(){return Y(!0)}),[]),q=(0,t.useCallback)((function(){return Y(!1)}),[]);if((null==o||null===(n=o.blogroll)||void 0===n?void 0:n.visibility)===G.n$.BLOGROLL_VISIBILITY_HIDDEN)return null;if(!y)return f(),null;if(N||F||!h||!h.length||T<5)return null;var Q=w?"See all (".concat((0,H.rR)(T),")"):"See all";return t.createElement(M.cW,{extendSource:!0,source:{name:"blogrolls_sidebar"}},t.createElement(C.x,{ref:p,position:"relative"},t.createElement(a.X6,{scale:"XS",tag:"span"},"Following"),t.createElement(C.x,{marginTop:"16px",marginBottom:"16px",tag:"ul"},h.map((function(e){return t.createElement(L,{key:null==e?void 0:e.id,entity:e,isTooltipActive:B===e.id,onMouseEnter:function(){return R(e.id)}})}))),t.createElement(U.F,{scale:"S"},t.createElement(_.r,{linkStyle:"SUBTLE",onClick:j},Q)),t.createElement(s.A,{hide:q,publisher:i,followingCount:T,isVisible:z})))},z=i(84739),Y=i(14818),j=i(24330),q=i(43487),Q=i(87498),W=i(50458),$=88,J=function(e){var n=e.includeBlogRoll,i=e.user,a=(0,V.H)().value,d=(0,q.v9)((function(e){return e.config.authDomain})),c=a&&a.id===i.id,m=(0,z.B)(i);return t.createElement(t.Fragment,null,t.createElement(_.r,{href:m},t.createElement(Y.z,{alt:i.name||"",miroId:i.imageId||Q.gG,diameter:$})),t.createElement(C.x,{marginTop:"16px"}),t.createElement(_.r,{href:m},t.createElement(o,{publisher:i})),t.createElement(C.x,{marginTop:"4px"}),t.createElement(r.e,{publisher:i}),t.createElement(C.x,{marginTop:"12px"}),t.createElement(l.y,{publisher:i}),c&&t.createElement(C.x,{marginTop:"24px",marginBottom:"46px"},t.createElement(U.F,{scale:"S",color:"ACCENT"},t.createElement(_.r,{href:(0,W.McF)(d)},"Edit profile"))),t.createElement(C.x,{marginTop:"24px"}),!c&&t.createElement(M.cW,{source:{name:"publisher_header_actions"},extendSource:!0},t.createElement(C.x,{display:"flex",marginBottom:"40px"},t.createElement(j.N,{creator:i,followButtonSize:"REGULAR",susiEntry:"follow_profile",showMembershipUpsellModal:!0,width:"auto"}))),n&&t.createElement(X,{user:i}))}},1279:(e,n,i)=>{"use strict";i.d(n,{m:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherDescription_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bio"}}]}}]}}]}},937:(e,n,i)=>{"use strict";i.d(n,{y:()=>r});var t=i(67294),l=i(14294),a=i(38882),o=i(87691),r=function(e){var n=e.publisher,i="Collection"===n.__typename?n.description:n.bio;return i?t.createElement(o.F,{scale:"M"},t.createElement(a.c.Provider,{value:!0},t.createElement(l.P,{wrapLinks:!0},i))):null}},13085:(e,n,i)=>{"use strict";i.d(n,{b:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowingCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followingCount"}},{kind:"Field",name:{kind:"Name",value:"collectionFollowingCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},25468:(e,n,i)=>{"use strict";i.d(n,{g:()=>c,D:()=>m});var t=i(63038),l=i.n(t),a=i(67294),o=i(65590),r=i(93310),d=i(21372),c=function(e){var n,i,t,l,a=0;return"User"===e.__typename&&(a=(null!==(n=null===(i=e.socialStats)||void 0===i?void 0:i.followingCount)&&void 0!==n?n:0)+(null!==(t=null===(l=e.socialStats)||void 0===l?void 0:l.collectionFollowingCount)&&void 0!==t?t:0)),{followingCount:a,isFollowingCountVisible:a>0}},m=function(e){var n=e.publisher,i=e.linkStyle,t=void 0===i?"SUBTLE":i,m=c(n),u=m.followingCount,s=m.isFollowingCountVisible,k=(0,a.useState)(!1),p=l()(k,2),v=p[0],g=p[1];if(!s)return null;var f="".concat((0,d.pY)(u)," Following");return a.createElement(a.Fragment,null,a.createElement(r.r,{linkStyle:t,onClick:function(){return g(!0)}},f),a.createElement(o.A,{hide:function(){return g(!1)},publisher:n,followingCount:u,isVisible:v}))}},65590:(e,n,i)=>{"use strict";i.d(n,{A:()=>p});var t=i(6479),l=i.n(t),a=i(64718),o=i(67294),r=i(19262),d=i(319),c=i.n(d),m=i(69387),u=i(84683),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DialogCollectionEntity_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}}].concat(c()(u.d.definitions))},k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowingDialogUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"followingEntityConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"DialogUserEntity_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"DialogCollectionEntity_collection"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"to"}},{kind:"Field",name:{kind:"Name",value:"limit"}},{kind:"Field",name:{kind:"Name",value:"from"}}]}}]}}]}}]}}]}}].concat(c()(m.U.definitions),c()(s.definitions))},p=function(e){var n,i,t,d,c,m=e.publisher,u=e.followingCount,s=e.isVisible,p=e.hide,v=(0,a.a)(k,{variables:{id:m.id,pagingInfo:{limit:10}},ssr:!1}),g=v.data,f=v.error,S=v.fetchMore,y=null==g||null===(n=g.user)||void 0===n||null===(i=n.followingEntityConnection)||void 0===i?void 0:i.entities,N=null==g||null===(t=g.user)||void 0===t||null===(d=t.followingEntityConnection)||void 0===d||null===(c=d.pagingInfo)||void 0===c?void 0:c.next;return f||0===u?null:o.createElement(r.L,{hide:p,isVisible:s,heading:"".concat(u," Following"),entities:y,pagingInfoNext:N,handleFetchMore:function(){if(N){N.__typename;var e=l()(N,["__typename"]);S({variables:{pagingInfo:e}})}}})}},32064:(e,n,i)=>{"use strict";i.d(n,{y:()=>a});var t=i(67294),l=i(77355),a=function(e){var n=e.children,i=e.marginTop,a=void 0===i?"40px":i,o=e.paddingBottom,r=void 0===o?"0px":o,d=e.showBorderBottom,c=void 0!==d&&d;return t.createElement(l.x,{marginTop:a,paddingBottom:r,borderBottom:c?"BASE_LIGHTER":"NONE"},n)}},78757:(e,n,i)=>{"use strict";i.d(n,{P:()=>a});var t=i(68427),l=i(84739),a=function(e){var n=(0,t.B)(),i=(0,l.I)();return"Collection"===e.__typename?n(e):"User"===e.__typename?i(e):""}},986:(e,n,i)=>{"use strict";i.d(n,{c:()=>c});var t=i(67294),l=i(52439),a=i(9470),o=i(36405),r=i(77355),d=i(35010),c=function(e){var n=e.children,i=(0,t.useRef)(0),c=(0,t.useRef)(null),m=(0,t.useRef)("stickyToTop"),u=!!(0,o.P5)("enable_two_column_layout_with_global_nav"),s=(0,t.useRef)(null);return(0,d.L)((function(){var e=function(){if(c.current){var e=window.scrollY>i.current;i.current=window.scrollY;var n=window.innerHeight,t=c.current.offsetHeight-n,l=u?a.f:0,o=Math.max(a.f-window.scrollY,0);u&&s.current&&(s.current.style.minHeight="calc(100vh - ".concat(o,"px)")),t<=20||(e?("notSticky"===m.current&&window.scrollY>=c.current.offsetTop+t+l&&(m.current="stickyToBottom",c.current.style.position="sticky",c.current.style.top="".concat(-t,"px")),"stickyToTop"===m.current&&(m.current="notSticky",c.current.style.position="relative",c.current.style.top="0px",c.current.style.marginTop="0px",c.current.style.marginTop="".concat(Math.max(i.current-c.current.offsetTop-l,0),"px"))):("notSticky"===m.current&&window.scrollY<=c.current.offsetTop+l&&(m.current="stickyToTop",c.current.style.position="sticky",c.current.style.top="0px",c.current.style.marginTop="0px"),"stickyToBottom"===m.current&&(m.current="notSticky",c.current.style.position="relative",c.current.style.top="0px",c.current.style.marginTop="0px",c.current.style.marginTop="".concat(i.current-t-c.current.offsetTop-l,"px"))))}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),t.createElement(r.x,{position:"sticky",top:"0",ref:c},t.createElement(r.x,{display:"flex",flexDirection:"column",minHeight:u?"calc(100vh - ".concat(a.f,"px)"):"100vh",ref:s},t.createElement(r.x,{flexGrow:"1"},n),t.createElement(l.q,{detailScale:"XS",spacing:"XS"})))}},14337:(e,n,i)=>{"use strict";i.d(n,{v:()=>r});var t=i(319),l=i.n(t),a=i(84683),o=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherAvatar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}]}}].concat(l()(a.d.definitions),l()(o.W.definitions))}},30826:(e,n,i)=>{"use strict";i.d(n,{G:()=>o});var t=i(67294),l=i(71652),a=i(17193),o=function(e){var n=e.link,i=void 0!==n&&n,o=e.scale,r=void 0===o?"M":o,d=e.publisher;switch(d.__typename){case"User":return t.createElement(a.Yt,{link:i,scale:r,user:d});case"Collection":return t.createElement(l.v,{link:i,size:a.wC[r],collection:d});default:return null}}},75210:(e,n,i)=>{"use strict";i.d(n,{L:()=>c});var t=i(67294),l=i(71652),a=i(82405),o=i(77355),r=i(20113),d=i(87691),c=function(e){var n=e.collection,i=e.buttonSize,c=e.buttonStyleFn,m=n.name,u=n.description;return t.createElement(o.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},t.createElement(o.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},t.createElement(o.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},t.createElement(r.X6,{scale:"S"},m),t.createElement(d.F,{scale:"S"},u)),t.createElement(o.x,null,t.createElement(l.v,{collection:n,link:!0}))),t.createElement(o.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},t.createElement(d.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),t.createElement(a.Fp,{collection:n,buttonSize:i,buttonStyleFn:c,susiEntry:"follow_card"})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7994.7409a9e8.chunk.js.map