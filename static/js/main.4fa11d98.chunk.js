(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{109:function(e,t,a){e.exports=a(152)},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=a(7),l=a.n(o),m=a(11),s=a(9),u=a(208),p=a(15),d=a(14),f=a(90),b=a(189),E=a(190),g=a(191),h=a(193),v=a(194),y=a(47),x=a(192),j=a(84),k=a.n(j),O=a(13),w=a(184),C=a(16),S=Object(w.a)((function(e){return{appBar:Object(O.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(O.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),N=function(e){var t=e.totalItems,a=Object(n.useState)(null),c=Object(s.a)(a,2),i=c[0],o=c[1],l=S(),m=Object(d.h)(),u=Boolean(i),j=r.a.createElement(f.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:function(){return o(null)}},r.a.createElement(b.a,null,r.a.createElement(E.a,{component:p.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(g.a,{badgeContent:t,color:"secondary"},r.a.createElement(x.a,null))),r.a.createElement("p",null,"Cart")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{position:"fixed",className:l.appBar,color:"inherit"},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:p.b,to:"/signin",variant:"h6",className:l.title,color:"inherit"},r.a.createElement("img",{src:k.a,alt:"commerce.js",height:"25px",className:l.image})," e-Teaching"),r.a.createElement("div",{className:l.grow}),"/ecomm"===m.pathname&&r.a.createElement("div",{className:l.button},r.a.createElement(E.a,{component:p.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(g.a,{badgeContent:t,color:"secondary"},r.a.createElement(x.a,null)))))),j)},_=a(200),T=a(195),B=a(196),q=a(197),W=a(198),F=a(199),R=Object(w.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),A=function(e){var t=e.product,a=e.onAddToCart,n=R();return r.a.createElement(T.a,{className:n.root},r.a.createElement(B.a,{className:n.media,image:t.media.source,title:t.name}),r.a.createElement(q.a,null,r.a.createElement("div",{className:n.cardContent},r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},"$",t.price.formatted)),r.a.createElement(y.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"})),r.a.createElement(W.a,{disableSpacing:!0,className:n.cardActions},r.a.createElement(E.a,{"aria-label":"Add to Cart",onClick:function(){return a(t.id,1)}},r.a.createElement(F.a,null))))},I=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),D=function(e){var t=e.products,a=e.onAddToCart,n=I();return t.length?(console.log("====TEST Products====="),console.log(t),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(_.a,{container:!0,justify:"center",spacing:4},t.map((function(e){return r.a.createElement(_.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(A,{product:e,onAddToCart:a}))}))))):r.a.createElement("p",null,"Loading...")},L=a(201),P=a(202),z=Object(w.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),U=function(e){var t=e.item,a=e.onUpdateCartQty,n=e.onRemoveFromCart,c=z(),i=function(e,t){return a(e,t)};return r.a.createElement(T.a,{className:"cart-item"},r.a.createElement(B.a,{image:t.media.source,alt:t.name,className:c.media}),r.a.createElement(q.a,{className:c.cardContent},r.a.createElement(y.a,{variant:"h4"},t.name),r.a.createElement(y.a,{variant:"h5"},t.line_total.formatted_with_symbol)),r.a.createElement(W.a,{className:c.cardActions},r.a.createElement("div",{className:c.buttons},r.a.createElement(L.a,{type:"button",size:"small",onClick:function(){return i(t.id,t.quantity-1)}},"-"),r.a.createElement(y.a,null,"\xa0",t.quantity,"\xa0"),r.a.createElement(L.a,{type:"button",size:"small",onClick:function(){return i(t.id,t.quantity+1)}},"+")),r.a.createElement(L.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return e=t.id,n(e);var e}},"Remove")))},G=Object(w.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(O.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(O.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),M=function(e){var t=e.cart,a=e.onUpdateCartQty,n=e.onRemoveFromCart,c=e.onEmptyCart,i=G(),o=function(){return c()};if(!t.line_items)return"Loading";return r.a.createElement(P.a,null,r.a.createElement("div",{className:i.toolbar}),r.a.createElement(y.a,{className:i.title,variant:"h3",gutterBottom:!0},"Your Shopping Cart"),t.line_items.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{container:!0,spacing:3},t.line_items.map((function(e){return r.a.createElement(_.a,{item:!0,xs:12,sm:4,key:e.id},r.a.createElement(U,{item:e,onUpdateCartQty:a,onRemoveFromCart:n}))}))),r.a.createElement("div",{className:i.cardDetails},r.a.createElement(y.a,{variant:"h4"},"Subtotal: ",t.subtotal.formatted_with_symbol),r.a.createElement("div",null,r.a.createElement(L.a,{className:i.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:o},"Empty cart"),r.a.createElement(L.a,{className:i.checkoutButton,component:p.b,to:"/checkout",size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))):r.a.createElement(y.a,{variant:"subtitle1"},"You have no items in your shopping cart,",r.a.createElement(p.b,{className:i.link,to:"/"},"start adding some"),"!"))},Q=a(206),Y=a(207),Z=a(93),J=a(218),V=a(209),H=a(214),X=a(88),K=new(a.n(X).a)("pk_test_19661763baf3194382812193e2e539617b1870f41d8b9",!0),$=a(66),ee=a(217),te=a(212),ae=a(46),ne=a(215);var re=function(e){var t=e.name,a=e.label,n=e.required,c=Object(ae.d)().control;return r.a.createElement(_.a,{item:!0,xs:12,sm:6},r.a.createElement(ae.a,{as:ne.a,name:t,control:c,label:a,fullWidth:!0,required:n,error:!1}))},ce=function(e){var t=e.checkoutToken,a=e.test,c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],u=i[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),E=f[0],g=f[1],h=Object(n.useState)([]),v=Object(s.a)(h,2),x=v[0],j=v[1],k=Object(n.useState)(""),O=Object(s.a)(k,2),w=O[0],C=O[1],S=Object(n.useState)([]),N=Object(s.a)(S,2),T=N[0],B=N[1],q=Object(n.useState)(""),W=Object(s.a)(q,2),F=W[0],R=W[1],A=Object(ae.c)(),I=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.services.localeListShippingCountries(t);case 2:a=e.sent,n=a.countries,u(n),g(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.services.localeListSubdivisions(t);case 2:a=e.sent,n=a.subdivisions,j(n),C(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(m.a)(l.a.mark((function e(t,a){var n,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,K.checkout.getShippingOptions(t,{country:a,region:n});case 3:r=e.sent,B(r),R(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){I(t.id)}),[]),Object(n.useEffect)((function(){E&&D(E)}),[E]),Object(n.useEffect)((function(){w&&P(t.id,E,w)}),[w]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Shipping address"),r.a.createElement(ae.b,A,r.a.createElement("form",{onSubmit:A.handleSubmit((function(e){return a(Object($.a)(Object($.a)({},e),{},{shippingCountry:E,shippingSubdivision:w,shippingOption:F}))}))},r.a.createElement(_.a,{container:!0,spacing:3},r.a.createElement(re,{required:!0,name:"firstName",label:"First name"}),r.a.createElement(re,{required:!0,name:"lastName",label:"Last name"}),r.a.createElement(re,{required:!0,name:"address1",label:"Address line 1"}),r.a.createElement(re,{required:!0,name:"email",label:"Email"}),r.a.createElement(re,{required:!0,name:"city",label:"City"}),r.a.createElement(re,{required:!0,name:"zip",label:"Zip / Postal code"}),r.a.createElement(_.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Country"),r.a.createElement(te.a,{value:E,fullWidth:!0,onChange:function(e){return g(e.target.value)}},Object.entries(o).map((function(e){var t=Object(s.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)})))),r.a.createElement(_.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Subdivision"),r.a.createElement(te.a,{value:w,fullWidth:!0,onChange:function(e){return C(e.target.value)}},Object.entries(x).map((function(e){var t=Object(s.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)})))),r.a.createElement(_.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Options"),r.a.createElement(te.a,{value:F,fullWidth:!0,onChange:function(e){return R(e.target.value)}},T.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)}))))),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(L.a,{component:p.b,variant:"outlined",to:"/cart"},"Back to Cart"),r.a.createElement(L.a,{type:"submit",variant:"contained",color:"primary"},"Next")))))},ie=a(52),oe=a(89),le=a(188),me=a(153),se=a(205),ue=function(e){var t=e.checkoutToken;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(le.a,{disablePadding:!0},t.live.line_items.map((function(e){return r.a.createElement(me.a,{style:{padding:"10px 0"},key:e.name},r.a.createElement(se.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),r.a.createElement(y.a,{variant:"body2"},e.line_total.formatted_with_symbol))})),r.a.createElement(me.a,{style:{padding:"10px 0"}},r.a.createElement(se.a,{primary:"Total"}),r.a.createElement(y.a,{variant:"subtitle1",style:{fontWeight:700}},t.live.subtotal.formatted_with_symbol))))},pe=Object(oe.a)("pk_test_51Hqmw9EnylLNWUqjZhGaG1ipWYADqMvDACswXeMX1ZYEe5PwGEh1xmtmJgYZkZMigJaROV3k5ZYPl22gBaWgJReS00xo3zab3y"),de=function(e){var t=e.checkoutToken,a=e.nextStep,n=e.backStep,c=e.shippingData,i=e.onCaptureCheckout,o=function(){var e=Object(m.a)(l.a.mark((function e(n,r,o){var m,s,u,p,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o&&r){e.next=3;break}return e.abrupt("return");case 3:return m=r.getElement(ie.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:m});case 6:s=e.sent,u=s.error,p=s.paymentMethod,u?console.log("[error]",u):(d={line_items:t.live.line_items,customer:{firstname:c.firstName,lastname:c.lastName,email:c.email},shipping:{name:"International",street:c.address1,town_city:c.city,county_state:c.shippingSubdivision,postal_zip_code:c.zip,country:c.shippingCountry},fulfillment:{shipping_method:c.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:p.id}}},i(t.id,d),a());case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{checkoutToken:t}),r.a.createElement(Q.a,null),r.a.createElement(y.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"}},"Payment method"),r.a.createElement(ie.Elements,{stripe:pe},r.a.createElement(ie.ElementsConsumer,null,(function(e){var a=e.elements,c=e.stripe;return r.a.createElement("form",{onSubmit:function(e){return o(e,a,c)}},r.a.createElement(ie.CardElement,null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(L.a,{variant:"outlined",onClick:n},"Back"),r.a.createElement(L.a,{type:"submit",variant:"contained",disabled:!c,color:"primary"},"Pay ",t.live.subtotal.formatted_with_symbol)))}))))},fe=Object(w.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(O.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(O.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(O.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),be=["Shipping address","Payment details"],Ee=function(e){var t=e.cart,a=e.onCaptureCheckout,c=e.order,i=e.error,o=Object(n.useState)(null),f=Object(s.a)(o,2),b=f[0],E=f[1],g=Object(n.useState)(0),h=Object(s.a)(g,2),v=h[0],x=h[1],j=Object(n.useState)({}),k=Object(s.a)(j,2),O=k[0],w=k[1],C=fe(),S=Object(d.g)(),N=function(){return x((function(e){return e+1}))},_=function(){return x((function(e){return e-1}))};Object(n.useEffect)((function(){t.id&&function(){var e=Object(m.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.checkout.generateToken(t.id,{type:"cart"});case 3:a=e.sent,E(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v!==be.length&&S.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var T=function(e){w(e),N()},B=function(){return c.customer?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h5"},"Thank you for your purchase, ",c.customer.firstname," ",c.customer.lastname,"!"),r.a.createElement(Q.a,{className:C.divider}),r.a.createElement(y.a,{variant:"subtitle2"},"Order ref: ",c.customer_reference)),r.a.createElement("br",null),r.a.createElement(L.a,{component:p.b,variant:"outlined",type:"button",to:"/"},"Back to home")):r.a.createElement("div",{className:C.spinner},r.a.createElement(Y.a,null))};i&&(B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5"},"Error: ",i),r.a.createElement("br",null),r.a.createElement(L.a,{component:p.b,variant:"outlined",type:"button",to:"/"},"Back to home"))});var q=function(){return 0===v?r.a.createElement(ce,{checkoutToken:b,nextStep:N,setShippingData:w,test:T}):r.a.createElement(de,{checkoutToken:b,nextStep:N,backStep:_,shippingData:O,onCaptureCheckout:a})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement("div",{className:C.toolbar}),r.a.createElement("main",{className:C.layout},r.a.createElement(Z.a,{className:C.paper},r.a.createElement(y.a,{variant:"h4",align:"center"},"Checkout"),r.a.createElement(J.a,{activeStep:v,className:C.stepper},be.map((function(e){return r.a.createElement(V.a,{key:e},r.a.createElement(H.a,null,e))}))),v===be.length?r.a.createElement(B,null):b&&r.a.createElement(q,null))))},ge=a(219),he=a(211),ve=a(213),ye=(a(210),a(62)),xe=a.n(ye);var je=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ke(){var e=je(),t=Object(d.g)();return r.a.createElement(P.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(ge.a,{className:e.avatar},r.a.createElement(xe.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(_.a,{container:!0,spacing:2},r.a.createElement(_.a,{item:!0,xs:12,sm:6},r.a.createElement(ne.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(_.a,{item:!0,xs:12,sm:6},r.a.createElement(ne.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(ne.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(he.a,{control:r.a.createElement(ve.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(L.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){t.push("/ecomm")}},"Sign Up"),r.a.createElement(_.a,{container:!0,justify:"flex-end"},r.a.createElement(_.a,{item:!0},r.a.createElement("a",{href:"/signin",variant:"body2"},"Already have an account? Sign in"))))))}var Oe=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function we(){var e=Oe(),t=Object(d.g)();return r.a.createElement(P.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(ge.a,{className:e.avatar},r.a.createElement(xe.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(he.a,{control:r.a.createElement(ve.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(L.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){t.push("/ecomm")}},"Sign In"),r.a.createElement(_.a,{container:!0},r.a.createElement(_.a,{item:!0,xs:!0},r.a.createElement(p.b,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(_.a,{item:!0},r.a.createElement("a",{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))))}var Ce=a(91),Se=function(e){e.component;var t=e.token,a=Object(Ce.a)(e,["component","token"]);""==t&&(console.log("===TEST TOKEN===="),console.log(t));return r.a.createElement(d.b,Object.assign({},a,{render:function(e){return r.a.createElement(d.a,{to:"/signin"})}}))},Ne=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),f=o[0],b=o[1],E=Object(n.useState)({}),g=Object(s.a)(E,2),h=g[0],v=g[1],y=Object(n.useState)({}),x=Object(s.a)(y,2),j=x[0],k=x[1],O=Object(n.useState)(""),w=Object(s.a)(O,2),C=w[0],S=w[1],_=Object(n.useState)(""),T=Object(s.a)(_,2),B=T[0],q=(T[1],function(){var e=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.products.list();case 2:t=e.sent,a=t.data,b(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),W=function(){var e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,K.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.add(t,a);case 2:n=e.sent,v(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.update(t,{quantity:a});case 2:n=e.sent,v(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.remove(t);case 2:a=e.sent,v(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.empty();case 2:t=e.sent,v(t.cart);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.refresh();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(m.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.checkout.capture(t,a);case 3:n=e.sent,k(n),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){q(),W()}),[]);return r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u.a,null),r.a.createElement(N,{totalItems:h.total_items,handleDrawerToggle:function(){return c(!a)}}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/signup"},r.a.createElement(ke,null)),r.a.createElement(d.b,{exact:!0,path:"/signin"},r.a.createElement(we,null)),r.a.createElement(Se,{token:B,exact:!0,path:"/ecomm"},r.a.createElement(D,{products:f,onAddToCart:F,handleUpdateCartQty:!0})),r.a.createElement(Se,{token:B,exact:!0,path:"/cart"},r.a.createElement(M,{cart:h,onUpdateCartQty:R,onRemoveFromCart:A,onEmptyCart:I})),r.a.createElement(Se,{token:B,path:"/checkout",exact:!0},r.a.createElement(Ee,{cart:h,order:j,onCaptureCheckout:P,error:C})))))};i.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},84:function(e,t,a){e.exports=a.p+"static/media/commerce.422fec10.png"}},[[109,1,2]]]);
//# sourceMappingURL=main.4fa11d98.chunk.js.map