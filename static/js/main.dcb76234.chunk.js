(this["webpackJsonpreact-recollect-demo"]=this["webpackJsonpreact-recollect-demo"]||[]).push([[0],{16:function(e,n,t){e.exports=t(27)},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(7),o=t.n(c),u=t(3),l=t(4),i=t(1),f=t(2);function d(){var e=Object(i.a)(["\n    max-width: 520px;\n    width: 100%;\n    min-height: 320px;\n    padding: 16px 32px;\n    background: #ffffff;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    margin: 40px auto;\n"]);return d=function(){return e},e}var p=f.a.div(d());function s(){var e=Object(i.a)(["\n    color: #333333;\n"]);return s=function(){return e},e}var m=f.a.h1(s());function x(){var e=Object(i.a)(["\n    display: flex;\n"]);return x=function(){return e},e}var h=f.a.div(x());function v(){var e=Object(i.a)(["\n    width: 100%;\n    padding: 8px 16px;\n    box-shadow: none;\n    border: 1px solid #aaaaaa;\n"]);return v=function(){return e},e}var b=f.a.input(v());function g(){var e=Object(i.a)(["\n    margin-left: 24px;\n    border: 1px solid #aaaaaa;\n    padding: 8px 16px;\n    cursor: pointer;\n\n    &:hover {\n        background: #eeeeee;\n    }\n"]);return g=function(){return e},e}var k=f.a.div(g());function E(){var e=Object(i.a)(["\n    margin: 24px 0;\n"]);return E=function(){return e},e}var O=f.a.div(E());function j(){var e=Object(i.a)(["\n    display: flex;\n    padding: 8px 0;\n    text-decoration: ",";\n    color: ",";\n"]);return j=function(){return e},e}var w=f.a.div(j(),(function(e){return e.completed?"line-through":"unset"}),(function(e){return e.completed?"#999999":"inherit"}));function y(){var e=Object(i.a)(["\n    flex: ",";\n    text-align: ",";\n    color: ",";\n    margin-left: 8px;\n\n    &:first-child {\n        margin-left: 0;\n    }\n"]);return y=function(){return e},e}var C=f.a.div(y(),(function(e){return e.flex||"1"}),(function(e){return e.align||"left"}),(function(e){return e.color||"inherit"})),S=function(e){u.store.tasks.push({text:e,completed:!1})},A=function(e){u.store.tasks[e].completed=!u.store.tasks[e].completed},J=function(e){e?u.store.tasks.forEach((function(e){return e.completed=!1})):u.store.tasks.forEach((function(e){return e.completed=!0}))},B=Object(u.collect)((function(e){var n=e.store,t=Object(r.useState)(""),c=Object(l.a)(t,2),o=c[0],u=c[1],i=Object(r.useState)(!1),f=Object(l.a)(i,2),d=f[0],s=f[1];return a.a.createElement(p,null,a.a.createElement(m,null,"Recollect DEMO - Todolist"),a.a.createElement(h,null,a.a.createElement(b,{value:o,placeholder:"Add new task...",onChange:function(e){return u(e.target.value)}}),a.a.createElement(k,{onClick:function(){return S(o)}},"Add")),a.a.createElement(O,null,n.tasks.length>0&&a.a.createElement(w,null,a.a.createElement(C,{align:"center",flex:"unset"},a.a.createElement("input",{type:"checkbox",checked:d,onChange:function(){J(d),s(!d)}})),a.a.createElement(C,null,"Select All")),n.tasks.map((function(e,n){return a.a.createElement(w,{key:n,completed:e.completed},a.a.createElement(C,{align:"center",flex:"unset"},a.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){return A(n)}})),a.a.createElement(C,null,e.text))}))))}));t(25);Object(u.initStore)({tasks:[],counter:0}),o.a.render(a.a.createElement(B,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dcb76234.chunk.js.map