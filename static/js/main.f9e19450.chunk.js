(this["webpackJsonpmy-todo"]=this["webpackJsonpmy-todo"]||[]).push([[0],{11:function(t,e,s){"use strict";s.r(e);var a=s(2),n=s(5),i=s(6),o=s(1),c=s(9),r=s(8),l=s(0),u=s(3),k=s.n(u),d=s(7),h=s.n(d),f=(s(17),s(10)),j={display:"flex",justifyContent:"center",flexDirection:"column"},m={margin:20,fontSize:70,alignSelf:"center"},b={margin:20,fontSize:25,height:40,width:800,alignSelf:"center"},O={margin:20,fontSize:20,height:40,width:130,alignSelf:"center"},g={fontSize:30},p=function(t){Object(c.a)(s,t);var e=Object(r.a)(s);function s(t){var a;return Object(n.a)(this,s),(a=e.call(this,t)).state={tasks:[],task:""},a.updateTasks=a.updateTasks.bind(Object(o.a)(a)),a.removeTask=a.removeTask.bind(Object(o.a)(a)),a}return Object(i.a)(s,[{key:"componentWillMount",value:function(){localStorage.getItem("tasks")&&this.setState({tasks:JSON.parse(localStorage.getItem("tasks")),isLoading:!1})}},{key:"componentWillUpdate",value:function(t,e){localStorage.setItem("tasks",JSON.stringify(e.tasks))}},{key:"newTask",value:function(t){this.setState({task:t})}},{key:"updateTasks",value:function(t){var e=this;t.preventDefault();var s=Object(a.a)(this.state.tasks);this.setState({tasks:[{name:this.state.task,id:Object(f.a)(3)}].concat(Object(a.a)(s)),task:""},(function(){localStorage.setItem("tasks",JSON.stringify(e.state.tasks))}))}},{key:"removeTask",value:function(t){var e=Object(a.a)(this.state.tasks).filter((function(e){return e.id!==t}));this.setState({tasks:Object(a.a)(e)},(function(){localStorage.setItem("tasks",JSON.stringify(e))}))}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("form",{style:j,children:[Object(l.jsx)("div",{style:m,children:this.props.name}),Object(l.jsx)("input",{style:b,type:"text",value:this.state.task,onChange:function(e){return t.newTask(e.target.value)},placeholder:"  Add Task..."}),Object(l.jsx)("button",{style:O,onClick:this.updateTasks,disabled:""===this.state.task,children:"Add Task"}),Object(l.jsx)("ul",{style:g,children:this.state.tasks.map((function(e){return Object(l.jsxs)("li",{children:[e.name,Object(l.jsx)("button",{onClick:function(){t.removeTask(e.id)},style:O,children:"Remove"})]},e.id)}))})]})}}]),s}(k.a.Component);h.a.render(Object(l.jsx)(p,{name:"ToDo Tracker"}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f9e19450.chunk.js.map