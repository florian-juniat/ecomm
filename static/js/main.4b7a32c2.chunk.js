(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{111:function(e,a,t){e.exports=t(153)},153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),o=t.n(c),l=t(6),i=t.n(l),m=t(12),s=t(8),u=t(212),p=t(11),d=t(15),g=t(92),b=t(191),E=t(192),h=t(193),f=t(195),v=t(196),y=t(54),j=t(194),x=t(86),C=t.n(x),w=t(14),O=t(186),k=t(16),N=Object(O.a)((function(e){return{appBar:Object(w.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(w.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(w.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(w.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),S=function(e){var a=e.totalItems,t=Object(n.useState)(null),c=Object(s.a)(t,2),o=c[0],l=c[1],i=N(),m=Object(d.h)(),u=Boolean(o),x=r.a.createElement(g.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:function(){return l(null)}},r.a.createElement(b.a,null,r.a.createElement(E.a,{component:p.b,to:"/ecomm/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(h.a,{badgeContent:a,color:"secondary"},r.a.createElement(j.a,null))),r.a.createElement("p",null,"Cart")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{position:"fixed",className:i.appBar,color:"inherit"},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:p.b,to:"/ecomm/signin",variant:"h6",className:i.title,color:"inherit"},r.a.createElement("img",{src:C.a,alt:"commerce.js",height:"25px",className:i.image})," e-Teaching"),r.a.createElement("div",{className:i.grow}),"/ecomm"===m.pathname&&r.a.createElement("div",{className:i.button},r.a.createElement(E.a,{component:p.b,to:"ecomm/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(h.a,{badgeContent:a,color:"secondary"},r.a.createElement(j.a,null)))))),x)},T=t(202),B=t(197),I=t(198),D=t(199),R=t(200),W=t(201),_=Object(O.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),A=function(e){var a=e.product,t=e.onAddToCart,n=_();return r.a.createElement(B.a,{className:n.root},r.a.createElement(I.a,{className:n.media,image:a.media.source,title:a.name}),r.a.createElement(D.a,null,r.a.createElement("div",{className:n.cardContent},r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.name),r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},"$",a.price.formatted)),r.a.createElement(y.a,{dangerouslySetInnerHTML:{__html:a.description},variant:"body2",color:"textSecondary",component:"p"})),r.a.createElement(R.a,{disableSpacing:!0,className:n.cardActions},r.a.createElement(E.a,{"aria-label":"Add to Cart",onClick:function(){return t(a.id,1)}},r.a.createElement(W.a,null))))},q=Object(O.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),P=function(e){var a=e.products,t=e.onAddToCart,n=e.token,c=q(),o=Object(d.g)();return a.length?(""==n&&o.push("/ecomm/signin"),r.a.createElement("main",{className:c.content},r.a.createElement("div",{className:c.toolbar}),r.a.createElement(T.a,{container:!0,justify:"center",spacing:4},a.map((function(e){return r.a.createElement(T.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(A,{product:e,onAddToCart:t}))}))))):r.a.createElement("p",null,"Loading...")},U=t(203),L=t(204),F=Object(O.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),z=function(e){var a=e.item,t=e.onUpdateCartQty,n=e.onRemoveFromCart,c=F(),o=function(e,a){return t(e,a)};return r.a.createElement(B.a,{className:"cart-item"},r.a.createElement(I.a,{image:a.media.source,alt:a.name,className:c.media}),r.a.createElement(D.a,{className:c.cardContent},r.a.createElement(y.a,{variant:"h4"},a.name),r.a.createElement(y.a,{variant:"h5"},a.line_total.formatted_with_symbol)),r.a.createElement(R.a,{className:c.cardActions},r.a.createElement("div",{className:c.buttons},r.a.createElement(U.a,{type:"button",size:"small",onClick:function(){return o(a.id,a.quantity-1)}},"-"),r.a.createElement(y.a,null,"\xa0",a.quantity,"\xa0"),r.a.createElement(U.a,{type:"button",size:"small",onClick:function(){return o(a.id,a.quantity+1)}},"+")),r.a.createElement(U.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return e=a.id,n(e);var e}},"Remove")))},G=Object(O.a)((function(e){var a;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(a={minWidth:"150px"},Object(w.a)(a,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(w.a)(a,e.breakpoints.up("xs"),{marginRight:"20px"}),a),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),M=function(e){var a=e.cart,t=e.onUpdateCartQty,n=e.onRemoveFromCart,c=e.onEmptyCart,o=e.token,l=G(),i=Object(d.g)();""==o&&i.push("/ecomm/signin");var m=function(){return c()};if(!a.line_items)return"Loading";return r.a.createElement(L.a,null,r.a.createElement("div",{className:l.toolbar}),r.a.createElement(y.a,{className:l.title,variant:"h3",gutterBottom:!0},"Your Shopping Cart"),a.line_items.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{container:!0,spacing:3},a.line_items.map((function(e){return r.a.createElement(T.a,{item:!0,xs:12,sm:4,key:e.id},r.a.createElement(z,{item:e,onUpdateCartQty:t,onRemoveFromCart:n}))}))),r.a.createElement("div",{className:l.cardDetails},r.a.createElement(y.a,{variant:"h4"},"Subtotal: ",a.subtotal.formatted_with_symbol),r.a.createElement("div",null,r.a.createElement(U.a,{className:l.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:m},"Empty cart"),r.a.createElement(U.a,{className:l.checkoutButton,component:p.b,to:"/checkout",size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))):r.a.createElement(y.a,{variant:"subtitle1"},"You have no items in your shopping cart,",r.a.createElement(p.b,{className:l.link,to:"/"},"start adding some"),"!"))},Y=(t(210),t(211),t(95),t(221),t(213),t(217),t(90)),J=new(t.n(Y).a)("pk_test_19661763baf3194382812193e2e539617b1870f41d8b9",!0),Q=(t(68),t(208),t(216),t(49),t(219));t(53);var Z=t(91),H=(t(190),t(154),t(209),Object(Z.a)("pk_test_51Hqmw9EnylLNWUqjZhGaG1ipWYADqMvDACswXeMX1ZYEe5PwGEh1xmtmJgYZkZMigJaROV3k5ZYPl22gBaWgJReS00xo3zab3y"),Object(O.a)((function(e){var a;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(w.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(a={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(w.a)(a,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(w.a)(a,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),a),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),t(222)),V=t(214),X=t(63),$=t.n(X),K=t(42),ee=t.n(K),ae=t(207),te=t(155),ne=t(218),re=t(215),ce=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},error:{color:"red"},astext:{background:"none",border:"none",margin:0,padding:0,cursor:"pointer"},radioContainer:{marginTop:"30px"}}}));function oe(e){var a=ce(),t=Object(d.g)(),c=Object(n.useState)(""),o=Object(s.a)(c,2),l=o[0],i=o[1],m=Object(n.useState)(""),g=Object(s.a)(m,2),b=g[0],E=g[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),v=f[0],j=f[1],x=Object(n.useState)(""),C=Object(s.a)(x,2),w=C[0],O=C[1],k=Object(n.useState)(""),N=Object(s.a)(k,2),S=N[0],B=N[1],I=Object(n.useState)(""),D=Object(s.a)(I,2),R=D[0],W=D[1],_=Object(n.useState)(""),A=Object(s.a)(_,2),q=A[0],P=A[1];return r.a.createElement(L.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(H.a,{className:a.avatar},r.a.createElement($.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:l,onChange:function(e){return i(e.target.value)},autoFocus:!0}),r.a.createElement(Q.a,{value:b,onChange:function(e){return E(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(Q.a,{value:v,onChange:function(e){return j(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"Repeat Password",label:"Repeat Password",type:"password",autoComplete:"current-password"}),r.a.createElement(ae.a,{className:a.radioContainer,component:"fieldset"},r.a.createElement(te.a,{component:"legend"},"Interest *"),r.a.createElement(ne.a,{"aria-label":"gender",name:"gender1",value:S,onChange:function(e){B(e.target.value)}},r.a.createElement(V.a,{value:"Informational Technology",control:r.a.createElement(re.a,null),label:"Informational Technology"}),r.a.createElement(V.a,{value:"Business Intelligence",control:r.a.createElement(re.a,null),label:"Business Intelligence"}),r.a.createElement(V.a,{value:"Data Science",control:r.a.createElement(re.a,null),label:"Data Science"}),r.a.createElement(V.a,{value:"Digital Economics",control:r.a.createElement(re.a,null),label:"Digital Economics"}),r.a.createElement(V.a,{value:"biological Computing",control:r.a.createElement(re.a,null),label:"biological Computing"}),r.a.createElement(V.a,{value:"E-commerce",control:r.a.createElement(re.a,null),label:"E-commerce"}))),r.a.createElement(ae.a,{className:a.radioContainer,component:"fieldset"},r.a.createElement(te.a,{component:"legend"},"Education *"),r.a.createElement(ne.a,{"aria-label":"gender",name:"gender1",value:R,onChange:function(e){W(e.target.value)}},r.a.createElement(V.a,{value:"Higher Education",control:r.a.createElement(re.a,null),label:"Informational Technology"}),r.a.createElement(V.a,{value:"Bachelors",control:r.a.createElement(re.a,null),label:"Business Intelligence"}),r.a.createElement(V.a,{value:"Masters",control:r.a.createElement(re.a,null),label:"Data Science"}),r.a.createElement(V.a,{value:"PhD",control:r.a.createElement(re.a,null),label:"Digital Economics"}),r.a.createElement(V.a,{value:"Postdoctorate",control:r.a.createElement(re.a,null),label:"biological Computing"}))),r.a.createElement(ae.a,{className:a.radioContainer,component:"fieldset"},r.a.createElement(te.a,{component:"legend"},"Reasons for taking new courses *"),r.a.createElement(ne.a,{"aria-label":"gender",name:"gender1",value:q,onChange:function(e){P(e.target.value)}},r.a.createElement(V.a,{value:"Person Interest",control:r.a.createElement(re.a,null),label:"Informational Technology"}),r.a.createElement(V.a,{value:"Educational",control:r.a.createElement(re.a,null),label:"Business Intelligence"}),r.a.createElement(V.a,{value:"Career Development",control:r.a.createElement(re.a,null),label:"Data Science"}))),r.a.createElement(U.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){""!=l&&""!=b&&""!=v&&""!=q&&""!=R&&""!=S?ee.a.post("https://back-ecommerce01.herokuapp.com/auth/register",{name:l,password:b,education:R,reason:q,interest:S}).then((function(a){ee.a.post("https://back-ecommerce01.herokuapp.com/auth/login",{name:l,password:b}).then((function(a){e.setToken(a.data),t.push("/ecomm")})).catch((function(e){O("Problem during connexion")}))})).catch((function(e){O("Sign Up refused: use another name")})):O("Please enter details")}},"Sign Up"),r.a.createElement(T.a,{container:!0},r.a.createElement(T.a,{item:!0,xs:!0}),r.a.createElement(T.a,{item:!0},r.a.createElement(p.b,null,r.a.createElement("a",{className:a.astext,onClick:function(){t.push("/ecomm/signin")},variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement("p",{className:a.error},w)))}var le=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},error:{color:"red"},astext:{background:"none",border:"none",margin:0,padding:0,cursor:"pointer"}}}));function ie(e){var a=le(),t=Object(d.g)(),c=Object(n.useState)(""),o=Object(s.a)(c,2),l=o[0],i=o[1],m=Object(n.useState)(""),g=Object(s.a)(m,2),b=g[0],E=g[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),v=f[0],j=f[1];return r.a.createElement(L.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(H.a,{className:a.avatar},r.a.createElement($.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:l,onChange:function(e){return i(e.target.value)},autoFocus:!0}),r.a.createElement(Q.a,{value:b,onChange:function(e){return E(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(U.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){""!=l&&""!=b||j("Please enter details"),ee.a.post("https://back-ecommerce01.herokuapp.com/auth/login",{name:l,password:b}).then((function(a){e.setToken(a.data),t.push("/ecomm")})).catch((function(e){j("Connection refused")}))}},"Sign In"),r.a.createElement(T.a,{container:!0},r.a.createElement(T.a,{item:!0,xs:!0},r.a.createElement(p.b,{href:"#",variant:"body2"})),r.a.createElement(T.a,{item:!0},r.a.createElement(p.b,null,r.a.createElement("a",{className:a.astext,onClick:function(){t.push("/ecomm/signup")},variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement("p",{className:a.error},v)))}t(93);var me=function(){var e=r.a.useState(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([]),l=Object(s.a)(o,2),g=l[0],b=l[1],E=Object(n.useState)({}),h=Object(s.a)(E,2),f=h[0],v=h[1],y=Object(n.useState)({}),j=Object(s.a)(y,2),x=(j[0],j[1],Object(n.useState)("")),C=Object(s.a)(x,2),w=(C[0],C[1],Object(n.useState)("")),O=Object(s.a)(w,2),k=O[0],N=O[1],T=function(){var e=Object(m.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.products.list();case 2:a=e.sent,t=a.data,b(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,J.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(i.a.mark((function e(a,t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.add(a,t);case 2:n=e.sent,v(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(i.a.mark((function e(a,t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.update(a,{quantity:t});case 2:n=e.sent,v(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.remove(a);case 2:t=e.sent,v(t.cart);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.empty();case 2:a=e.sent,v(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){T(),B()}),[]);return r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u.a,null),r.a.createElement(S,{totalItems:f.total_items,handleDrawerToggle:function(){return c(!t)}}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/ecomm/signup"},r.a.createElement(oe,{setToken:N})),r.a.createElement(d.b,{exact:!0,path:"/ecomm/signin"},r.a.createElement(ie,{setToken:N})),r.a.createElement(d.b,{token:k,exact:!0,path:"/ecomm"},r.a.createElement(P,{token:k,products:g,onAddToCart:I,handleUpdateCartQty:!0})),r.a.createElement(d.b,{token:k,exact:!0,path:"/ecomm/cart"},r.a.createElement(M,{token:k,cart:f,onUpdateCartQty:D,onRemoveFromCart:R,onEmptyCart:W})))))};o.a.render(r.a.createElement(me,null),document.getElementById("root"))},86:function(e,a,t){e.exports=t.p+"static/media/commerce.422fec10.png"}},[[111,1,2]]]);
//# sourceMappingURL=main.4b7a32c2.chunk.js.map