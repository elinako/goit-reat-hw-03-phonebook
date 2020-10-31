(this["webpackJsonpgoit-reat-hw-03-phonebook"]=this["webpackJsonpgoit-reat-hw-03-phonebook"]||[]).push([[0],{25:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n.n(r),o=n(12),i=n.n(o),s=n(16),u=n(4),l=n(5),b=n(8),h=n(7),d=n(2),j=n(26),f=n(3);function p(){var t=Object(d.a)(["\n  width: 230px;\n  display: flex;\n  justify-content: space-between;\n"]);return p=function(){return t},t}function m(){var t=Object(d.a)(["\n  width: 150px;\n"]);return m=function(){return t},t}function v(){var t=Object(d.a)(["\n  width: 400px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 2px solid blue;\n  margin-bottom: 10px;\n"]);return v=function(){return t},t}var O=f.a.form(v()),x=f.a.button(m()),g=f.a.label(p()),C=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.onChangeName=function(e){t.setState({name:e.target.value})},t.onChangeNumber=function(e){t.setState({number:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Phonebook"}),Object(a.jsxs)(O,{onSubmit:this.handleSubmit,children:[Object(a.jsxs)(g,{children:["Name",Object(a.jsx)("input",{type:"text",placeholder:"Enter your name",value:e,onChange:this.onChangeName})]}),Object(a.jsxs)(g,{children:["Number",Object(a.jsx)("input",{type:"tel",placeholder:"XXX-XX-XX",value:n,onChange:this.onChangeNumber})]}),Object(a.jsx)(x,{type:"submit",children:"Add contact"})]})]})}}]),n}(r.Component);function y(){var t=Object(d.a)(["\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n"]);return y=function(){return t},t}function S(){var t=Object(d.a)(["\n  width: 360px;\n  border: 2px solid #c0ebff;\n  display: block;\n"]);return S=function(){return t},t}Object(j.a)();var w=f.a.ul(S()),k=f.a.li(y()),N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Contacts:"}),Object(a.jsx)(w,{children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(a.jsxs)(k,{children:[r," : ",c,Object(a.jsx)("button",{onClick:function(){return n(e)},children:"delete"})]},Object(j.a)())}))})]})};N.defaultProps={name:"Name Surname",number:"000-00-00"};var X=N;function F(){var t=Object(d.a)(["\n  width: 400px;\n  border: 2px solid paleviolet;\n"]);return F=function(){return t},t}var I=f.a.input(F());function D(t){var e=t.value,n=t.onChangeSearchInput;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Find contact by name:"}),Object(a.jsx)(I,{type:"text",value:e,onChange:n,placeholder:"Enter name to search"})]})}function J(){var t=Object(d.a)(["\n  font-family: sans-serif;\n  font-size: 16px;\n"]);return J=function(){return t},t}Object(j.a)();var L=f.a.div(J()),A=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,r={id:Object(j.a)(),name:n,number:a};t.state.contacts.some((function(t){return t.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[r])}}))},t.filterContacts=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n}),localStorage.removeItem(e)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,r=this.getFilteredContacts();return Object(a.jsxs)(L,{children:[Object(a.jsx)(C,{onSubmit:this.addContact}),n.length>1&&Object(a.jsx)(D,{value:e,onChangeSearchInput:this.filterContacts}),n.length>0&&Object(a.jsx)(X,{contacts:r,onDeleteContact:this.deleteContact})]})}},{key:"componentDidMount",value:function(){if(0!==localStorage.length){var t=localStorage.getItem("contacts");this.setState({contacts:JSON.parse(t)})}}},{key:"componentDidUpdate",value:function(t){t!==this.state&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.087544e8.chunk.js.map