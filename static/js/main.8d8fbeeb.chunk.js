(this["webpackJsonpudemy-react-redux-practice"]=this["webpackJsonpudemy-react-redux-practice"]||[]).push([[0],[,,,function(t,e,c){t.exports={item:"CartItem_item__1zMOi",details:"CartItem_details__2_Z3n",quantity:"CartItem_quantity__DfEXm",price:"CartItem_price__2Nl0j",itemprice:"CartItem_itemprice__j9ZSt",actions:"CartItem_actions__UwVPJ"}},,function(t,e,c){t.exports={item:"ProductItem_item__WYS0J",price:"ProductItem_price__1GiPR",actions:"ProductItem_actions__14Yr-"}},,,function(t,e,c){t.exports={button:"CartButton_button__3nU_b",badge:"CartButton_badge__3njqM"}},,,,function(t,e,c){t.exports={card:"Card_card__1m44e"}},function(t,e,c){t.exports={cart:"Cart_cart__3GqLz"}},function(t,e,c){t.exports={header:"MainHeader_header__k5Wsz"}},function(t,e,c){t.exports={products:"Products_products__1PCvW"}},,,,,,,,,,,function(t,e,c){},function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(1),i=c(4),r=c.n(i),a=c(2),s=(c(26),c(27),c(10)),d=c(9),o=Object(d.b)({name:"main",initialState:{products:[{id:22,title:"Sushi",price:9.99,description:"delicious sushi"},{id:45,title:"Pizza",price:8.99,description:"delicious pizza"},{id:12,title:"Coca-Cola",price:2,description:"0.6 liter"}],cartItems:[],some:"hello there general Kenoby",showCart:!1},reducers:{addLetter:function(t,e){t.some+=e.payload.value},addProductToCart:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id==e.payload.id})),n=t.products.find((function(t){return t.id==e.payload.id}));c>=0?t.cartItems[c].amount++:t.cartItems.push(Object(s.a)(Object(s.a)({},n),{},{amount:1}))},increase:function(t,e){t.cartItems.find((function(t){return t.id==e.payload})).amount++},decrease:function(t,e){var c=t.cartItems.find((function(t){return t.id==e.payload}));c.amount>1?c.amount--:t.cartItems=t.cartItems.filter((function(t){return t.id!=e.payload}))},showCartHandler:function(t){t.showCart=!t.showCart}}}),u=Object(d.a)({reducer:{main:o.reducer}}),l=o.actions,j=u,m=c(12),b=c.n(m),h=c(0),p=function(t){return Object(h.jsx)("section",{className:"".concat(b.a.card," ").concat(t.className?t.className:""),children:t.children})},x=c(13),O=c.n(x),f=c(3),_=c.n(f),C=function(t){var e=t.item,c=e.title,n=e.quantity,i=e.total,r=e.price,s=(e.id,e.increase),d=e.decrease;Object(a.b)();return Object(h.jsxs)("li",{className:_.a.item,children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h3",{children:c}),Object(h.jsxs)("div",{className:_.a.price,children:["$",i.toFixed(2)," ",Object(h.jsxs)("span",{className:_.a.itemprice,children:["($",r.toFixed(2),"/item)"]})]})]}),Object(h.jsxs)("div",{className:_.a.details,children:[Object(h.jsxs)("div",{className:_.a.quantity,children:["x ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("div",{className:_.a.actions,children:[Object(h.jsx)("button",{onClick:d,children:"-"}),Object(h.jsx)("button",{onClick:s,children:"+"})]})]})]})},I=function(t){var e=Object(a.b)(),c=(Object(a.c)((function(t){return t.main.some})),function(t){e(l.increase(t))}),n=function(t){e(l.decrease(t))},i=Object(a.c)((function(t){return t.main.cartItems})),r=i.reduce((function(t,e){return t+e.amount*e.price}),0);return Object(h.jsxs)(p,{className:O.a.cart,children:[Object(h.jsxs)("h2",{children:["Your Shopping Cart ",0==i.length?"is empty":""]}),Object(h.jsxs)("h2",{children:["Total Amount: $",r.toFixed(2)]}),Object(h.jsx)("ul",{children:i.map((function(t){return Object(h.jsx)(C,{item:{title:t.title,quantity:t.amount,total:t.amount*t.price,price:t.price,increase:c.bind(null,t.id),decrease:n.bind(null,t.id)}},t.id)}))})]})},v=c(8),y=c.n(v),N=function(t){var e=Object(a.b)(),c=Object(a.c)((function(t){return t.main.cartItems})).reduce((function(t,e){return t+e.amount}),0)||0,n=y.a.button+" animated faster "+"".concat(c>0?"pulse":"");return Object(h.jsxs)("button",{className:n,onClick:function(){e(l.showCartHandler())},children:[Object(h.jsx)("span",{children:"My Cart"}),Object(h.jsx)("span",{className:y.a.badge,children:c})]},c)},P=c(14),w=c.n(P),g=function(t){return Object(h.jsxs)("header",{className:w.a.header,children:[Object(h.jsx)("h1",{children:"ReduxCart"}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)(N,{})})})})]})},k=function(t){return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsx)("main",{children:t.children})]})},q=c(5),z=c.n(q),F=function(t){var e=t.title,c=t.price,n=t.description,i=t.id,r=Object(a.b)();return Object(h.jsx)("li",{className:z.a.item,children:Object(h.jsxs)(p,{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h3",{children:e}),Object(h.jsxs)("div",{className:z.a.price,children:["$",c.toFixed(2)]})]}),Object(h.jsx)("p",{children:n}),Object(h.jsx)("div",{className:z.a.actions,children:Object(h.jsx)("button",{onClick:function(){r(l.addProductToCart({id:i}))},children:"Add to Cart"})})]})})},S=c(15),B=c.n(S),J=function(t){var e=Object(a.c)((function(t){return t.main.products}));return Object(h.jsxs)("section",{className:B.a.products,children:[Object(h.jsx)("h2",{children:"Buy your favorite products"}),Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)(F,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})};var M=function(){var t=Object(a.c)((function(t){return t.main.showCart}));return Object(h.jsxs)(k,{children:[t&&Object(h.jsx)(I,{}),Object(h.jsx)(J,{})]})};r.a.render(Object(h.jsx)(a.a,{store:j,children:Object(h.jsx)(M,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.8d8fbeeb.chunk.js.map