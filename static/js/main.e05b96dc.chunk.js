(this.webpackJsonpcommunication=this.webpackJsonpcommunication||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n(5),a=n.n(o),i=n(12),s=n(3),l=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(!1),l=Object(i.a)(a,2),d=l[0],u=l[1],j=Object(s.b)();return Object(c.jsx)("div",{className:"container request",children:Object(c.jsxs)("div",{className:"col request-content",children:[Object(c.jsx)("h1",{children:"To-Do App!"}),Object(c.jsx)("p",{children:"Add New To-Do"}),Object(c.jsx)("input",{type:"text",style:{border:d?"4px solid red":"none"},className:"form-control input-val",placeholder:"Enter new task",onChange:function(e){o(e.target.value),u(!1)},value:n}),Object(c.jsx)("button",{type:"button",id:"add-button",className:"btn btn-primary",onClick:function(){n?(j({type:"ADDTODO",payload:{isComplete:!1,todo:n,id:Math.random()}}),o("")):u(!0)},children:"Add"})]})})},d=n(2),u=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e}));return Object(c.jsxs)("div",{className:"container response-content",children:[Object(c.jsxs)("div",{className:"response-title",children:[Object(c.jsx)("h3",{children:"Lets get some work done!"}),Object(c.jsx)("hr",{style:{width:"100px"}})]}),n.map((function(e,n){return Object(c.jsx)("div",{className:"response",children:Object(c.jsxs)("div",{className:"d-flex w-100 pt-3",children:[Object(c.jsx)("button",{className:"btn btn-outline-primary mr-3",onClick:function(){t({type:"COMPLETE",payload:e.id})},children:e.isComplete?"Undo":"Complete"}),Object(c.jsx)("button",{className:"btn btn-outline-primary mx-3",onClick:function(){t({type:"DELETETODO",payload:e.id})},children:"Remove"}),Object(c.jsx)("button",{className:"btn btn-outline-primary mx-3",onClick:function(){t({type:"REQUEST",payload:e.id})},children:"Update"}),e.request?Object(c.jsx)("input",{type:"text",onKeyUp:function(n){return"Enter"===n.key&&t({type:"UPDATETODO",payload:Object(d.a)(Object(d.a)({},e),{},{todo:n.target.value})})}}):Object(c.jsx)("h4",{style:{textDecoration:e.isComplete?"line-through":""},children:e.todo})]})},n)}))]})},j=(n(26),function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(u,{})]})}),b=n(7),O=n(14),p=Object(b.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"ADDTODO":return[].concat(Object(O.a)(e),[c]);case"DELETETODO":return e.filter((function(e){return e.id!==c}));case"UPDATETODO":return e.map((function(e){return e.id===c.id?Object(d.a)(Object(d.a)(Object(d.a)({},e),c),{},{request:!1}):e}));case"COMPLETE":return e.map((function(e){return e.id===c?Object(d.a)(Object(d.a)({},e),{},{isComplete:!e.isComplete}):e}));case"REQUEST":return e.map((function(e){return e.id===c?Object(d.a)(Object(d.a)({},e),{},{request:!e.request}):e}));default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(27);a.a.render(Object(c.jsx)(s.a,{store:p,children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e05b96dc.chunk.js.map