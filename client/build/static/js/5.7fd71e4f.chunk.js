(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[5],{305:function(e,a,t){e.exports={Nav:"Nav_Nav__woVsg",select:"Nav_select__Qq0bX",navbtn:"Nav_navbtn__3PIaA",line:"Nav_line__jaj-T"}},306:function(e,a,t){e.exports={Property:"Property_Property__O-SQj",propertyImg:"Property_propertyImg__1Afib",content:"Property_content__o_CFw",area:"Property_area__D0UmN",price:"Property_price__1Gvqx",listingdesc:"Property_listingdesc__17z7I"}},307:function(e,a,t){"use strict";var o=t(30),r=t(31);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(t(0)),c=(0,o(t(32)).default)(l.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");a.default=c},308:function(e,a,t){"use strict";var o=t(30),r=t(31);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(t(0)),c=(0,o(t(32)).default)(l.createElement("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"}),"Extension");a.default=c},309:function(e,a,t){e.exports={heading:"RealState_heading__3YQje"}},344:function(e,a,t){"use strict";t.r(a);var o=t(9),r=t(0),l=t(235),c=t(42),n=t(231),i=t(242),s=t(237),d=t(256),p=t(238),m=t(229),b=t(252),u=t(305),y=t.n(u),g=t(1),j=Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),h=function(e){var a=j();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:y.a.Nav,children:[Object(g.jsxs)(m.a,{className:[a.formControl,y.a.select].join(" "),children:[Object(g.jsx)(d.a,{id:"demo-simple-select-label",children:"Property Type"}),Object(g.jsxs)(b.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e.type,onChange:e.handleChange,children:[Object(g.jsx)(p.a,{value:"residential",children:"Recidential"}),Object(g.jsx)(p.a,{value:"commercial",children:"Commercial"})]})]}),Object(g.jsxs)(n.a,{style:"sale"===e.mode?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.modeChange.bind(null,"sale"),className:y.a.navbtn,children:["Sale"," "]}),Object(g.jsx)(n.a,{style:"rent"===e.mode?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.modeChange.bind(null,"rent"),className:y.a.navbtn,children:"Rent"}),Object(g.jsx)(n.a,{style:"pg"===e.mode?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.modeChange.bind(null,"pg"),className:y.a.navbtn,children:"PG"})]}),Object(g.jsx)(i.a,{className:y.a.line})]})},v=t(133),f=t(2),O=t(3),x=(t(6),t(4)),C=t(24),k=Object(C.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),S=t(5),_=t(15),N=t(10),P=t(7),I=t(80);function w(e){return"Backspace"===e.key||"Delete"===e.key}var E=r.forwardRef((function(e,a){var t=e.avatar,o=e.classes,l=e.className,c=e.clickable,n=e.color,i=void 0===n?"default":n,s=e.component,d=e.deleteIcon,p=e.disabled,m=void 0!==p&&p,b=e.icon,u=e.label,y=e.onClick,g=e.onDelete,j=e.onKeyDown,h=e.onKeyUp,v=e.size,C=void 0===v?"medium":v,S=e.variant,_=void 0===S?"default":S,E=Object(O.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),R=r.useRef(null),T=Object(N.a)(R,a),$=function(e){e.stopPropagation(),g&&g(e)},z=!(!1===c||!y)||c,L="small"===C,B=s||(z?I.a:"div"),D=B===I.a?{component:"div"}:{},V=null;if(g){var H=Object(x.a)("default"!==i&&("default"===_?o["deleteIconColor".concat(Object(P.a)(i))]:o["deleteIconOutlinedColor".concat(Object(P.a)(i))]),L&&o.deleteIconSmall);V=d&&r.isValidElement(d)?r.cloneElement(d,{className:Object(x.a)(d.props.className,o.deleteIcon,H),onClick:$}):r.createElement(k,{className:Object(x.a)(o.deleteIcon,H),onClick:$})}var A=null;t&&r.isValidElement(t)&&(A=r.cloneElement(t,{className:Object(x.a)(o.avatar,t.props.className,L&&o.avatarSmall,"default"!==i&&o["avatarColor".concat(Object(P.a)(i))])}));var F=null;return b&&r.isValidElement(b)&&(F=r.cloneElement(b,{className:Object(x.a)(o.icon,b.props.className,L&&o.iconSmall,"default"!==i&&o["iconColor".concat(Object(P.a)(i))])})),r.createElement(B,Object(f.a)({role:z||g?"button":void 0,className:Object(x.a)(o.root,l,"default"!==i&&[o["color".concat(Object(P.a)(i))],z&&o["clickableColor".concat(Object(P.a)(i))],g&&o["deletableColor".concat(Object(P.a)(i))]],"default"!==_&&[o.outlined,{primary:o.outlinedPrimary,secondary:o.outlinedSecondary}[i]],m&&o.disabled,L&&o.sizeSmall,z&&o.clickable,g&&o.deletable),"aria-disabled":!!m||void 0,tabIndex:z||g?0:void 0,onClick:y,onKeyDown:function(e){e.currentTarget===e.target&&w(e)&&e.preventDefault(),j&&j(e)},onKeyUp:function(e){e.currentTarget===e.target&&(g&&w(e)?g(e):"Escape"===e.key&&R.current&&R.current.blur()),h&&h(e)},ref:T},D,E),A||F,r.createElement("span",{className:Object(x.a)(o.label,L&&o.labelSmall)},u),V)})),R=Object(S.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(_.a)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(_.c)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(_.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(_.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(_.c)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(_.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(_.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(_.a)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(_.a)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(_.a)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(_.a)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(_.a)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(_.a)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(_.a)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(_.a)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(E),T=t(307),$=t.n(T),z=t(308),L=t.n(z),B=t(306),D=t.n(B),V=t.p+"static/media/property.b71a0d5e.png",H=function(e){return Object(g.jsxs)(v.a,{elevation:3,className:D.a.Property,children:[Object(g.jsx)("img",{src:V,alt:"property",className:D.a.propertyImg}),Object(g.jsxs)("div",{className:D.a.content,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(c.a,{variant:"button",display:"block",children:e.title}),Object(g.jsx)(R,{icon:Object(g.jsx)($.a,{}),variant:"outlined",label:e.location,size:"small",clickable:!0,color:"primary"})]}),Object(g.jsxs)("div",{className:D.a.area,children:[Object(g.jsx)(L.a,{}),e.area," Sq. Ft.",Object(g.jsxs)("span",{className:D.a.price,children:["Rs. ",e.price," ",Object(g.jsxs)("i",{children:["(",e.rate," per Sq. Ft.)"]})]})]}),Object(g.jsxs)("div",{className:D.a.listingdesc,children:[Object(g.jsx)(R,{variant:"outlined",size:"small",label:"Possession ".concat(e.status)}),Object(g.jsx)(R,{variant:"outlined",size:"small",label:"Listed On ".concat(e.listedon)}),Object(g.jsx)(R,{variant:"outlined",size:"small",label:"Listed By ".concat(e.listedby)})]})]})]})},A=t(309),F=t.n(A);a.default=function(){var e=Object(r.useState)("residential"),a=Object(o.a)(e,2),t=a[0],n=a[1],i=Object(r.useState)("sale"),s=Object(o.a)(i,2),d=s[0],p=s[1],m=Object(r.useState)([]),b=Object(o.a)(m,2),u=b[0],y=b[1],j=Object(r.useState)([]),v=Object(o.a)(j,2),f=v[0],O=v[1];Object(r.useEffect)((function(){fetch("/companystats/properties").then((function(e){return e.json()})).then((function(e){y(e);var a=e.filter((function(e){return"sale"===e.mode&&"residential"===e.type}));O(a),console.log(e)})).catch((function(e){console.log(e)}))}),[]);var x=f.map((function(e,a){return Object(g.jsx)(H,{title:e.title,location:e.location,area:e.area,img:e.imageurl,listedby:e.listedby,listedon:e.listedon,price:e.price,rate:e.rate,status:e.status},a)}));return Object(g.jsxs)(l.a,{children:[Object(g.jsx)(c.a,{className:F.a.heading,variant:"h5",children:"Best Place to Trade Your Real State"}),Object(g.jsx)(h,{handleChange:function(e){n(e.target.value);var a=u.filter((function(a){return a.mode===d&&a.type===e.target.value}));O(a)},modeChange:function(e){if(d!==e){p(e);var a=u.filter((function(a){return a.mode===e&&a.type===t}));O(a)}},type:t,mode:d}),x]})}}}]);
//# sourceMappingURL=5.7fd71e4f.chunk.js.map