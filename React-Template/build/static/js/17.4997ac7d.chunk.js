(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1427:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),l=a(23),c=a(13),o=a(22),i=a(0),s=a.n(i),u=a(93),m=a(24),d=a(15),f=a(29),p=function(e){var t=e.active,a=e.children,r=e.onClick;return s.a.createElement("li",{className:"list-group-item list-group-item-action "+(t?"active":"")+" no-border-top-radius no-border-bottom-radius no-border px-2 py-1",onClick:r},a)},E=Object(d.connect)(function(e,t){return{active:t.filter===e.todoApp.todoVisibilityFilter}},function(e,t){return{onClick:function(){return e(Object(f.d)(t.filter))}}})(p),g=Object(d.connect)(function(e){return{id:e.todoApp.todo.length}})(function(e){var t,a,r,n,l,c,o,i,m=e.id,d=e.dispatch;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.H,{onSubmit:function(e){e.preventDefault(),t.value.trim()&&a.value.trim()&&l.value.trim()&&(d(Object(f.a)(m,t.value,a.value,r.value,n.value,l.value,c.value,o.value,i.value)),t.value="",l.value="",a.value="",r.value="",n.value="",l.value="",c.value=!1,o.value="",i.value="")}},s.a.createElement(u.W,null,s.a.createElement(u.kb,null,s.a.createElement(u.A,{md:12},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"firstName"},"Title"),s.a.createElement("input",{className:"form-control",type:"text",name:"task",id:"task",ref:function(e){return a=e},required:!0}))),s.a.createElement(u.A,{md:6},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"fullName"},"Owner"),s.a.createElement("input",{className:"form-control",type:"text",name:"full_name",id:"fullName",ref:function(e){return t=e},required:!0}))),s.a.createElement(u.A,{md:6},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"lastName"},"Project"),s.a.createElement("select",{className:"form-control",type:"select",name:"project",id:"project",ref:function(e){return l=e},required:!0},s.a.createElement("option",{value:"Project A"},"Project A"),s.a.createElement("option",{value:"Project B"},"Project B")))),s.a.createElement(u.A,{md:6},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"start-date"},"Start Date"),s.a.createElement("input",{className:"form-control",type:"text",name:"start-date",id:"start-date",ref:function(e){return r=e}}))),s.a.createElement(u.A,{md:6},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"due-date"},"Due Date"),s.a.createElement("input",{className:"form-control",type:"text",name:"due-date",id:"due-date",ref:function(e){return n=e}}))),s.a.createElement(u.A,{md:6},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"priority"},"Priority"),s.a.createElement("input",{className:"form-control",type:"checkbox",name:"priority",id:"priority",ref:function(e){return c=e}}))),s.a.createElement(u.A,{md:6},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"tag"},"Tag"),s.a.createElement("select",{className:"form-control",type:"select",name:"tag",id:"tag",ref:function(e){return o=e},required:!0},s.a.createElement("option",{value:"uiux"},"UI/UX"),s.a.createElement("option",{value:"frontend"},"Frontend"),s.a.createElement("option",{value:"backend"},"Backend")))),s.a.createElement(u.A,{md:12},s.a.createElement(u.I,null,s.a.createElement(u.P,{for:"comments"},"Comments"),s.a.createElement("input",{className:"form-control",type:"comments",name:"comments",id:"comments",ref:function(e){return i=e}}))))),s.a.createElement(u.X,null,s.a.createElement(u.e,{color:"primary",type:"submit"},"Add Task"))))}),b=a(115),v=a.n(b),N=a(96);function y(e){return function(){var t,a=Object(c.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(l.a)(this,t)}}var k=function(e){Object(o.a)(a,e);var t=y(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={modal:!1},n.toggle=n.toggle.bind(Object(m.a)(n)),n}return Object(n.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return s.a.createElement("div",{className:"todo-app-sidebar float-left d-none d-xl-block"},s.a.createElement(v.a,null,s.a.createElement("div",{className:"todo-app-sidebar-content"},s.a.createElement("div",{className:"todo-app-menu"},s.a.createElement("div",{className:"form-group form-group-compose text-center"},s.a.createElement("button",{type:"button",className:"btn btn-raised btn-danger btn-block my-2 shadow-z-2",onClick:this.toggle},s.a.createElement(N.Plus,{size:18,className:"mr-1"})," Add Task")),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(E,{filter:f.g.SHOW_ALL},s.a.createElement(N.Users,{size:18,className:"mr-1"})," All")),s.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Projects"),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(E,{filter:f.g.PROJECT_A_TODO},s.a.createElement(N.Briefcase,{size:18,className:"mr-1"})," Project A"),s.a.createElement(E,{filter:f.g.PROJECT_B_TODO},s.a.createElement(N.Briefcase,{size:18,className:"mr-1"})," Project B")),s.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Filters"),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(E,{filter:f.g.STARRED_TODO},s.a.createElement(N.Star,{size:18,className:"mr-1"})," Starred"),s.a.createElement(E,{filter:f.g.PRIORITY_TODO},s.a.createElement(N.AlertCircle,{size:18,className:"mr-1"})," Priority"),s.a.createElement(E,{filter:f.g.COMPLETED_TODO},s.a.createElement(N.Check,{size:18,className:"mr-1"})," Done")),s.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Tags"),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(E,{filter:f.g.UIUX_TODO,departmentValue:"UIUX"},s.a.createElement(N.Tag,{size:18,className:"mr-1 info"}),"UI/UX"),s.a.createElement(E,{filter:f.g.FRONTEND_TODO,departmentValue:"Frontend"},s.a.createElement(N.Tag,{size:18,className:"mr-1 warning"}),"Frontend"),s.a.createElement(E,{filter:f.g.BACKEND_TODO,departmentValue:"Backend"},s.a.createElement(N.Tag,{size:18,className:"mr-1 success"}),"Backend")))),s.a.createElement(u.V,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,size:"md"},s.a.createElement(u.Y,{toggle:this.toggle},"Add Task"),s.a.createElement(g,null))))}}]),a}(s.a.Component),O=function(e){var t=e.value,a=e.onChange;return s.a.createElement("input",{type:"text",className:"form-control round",placeholder:"Search todo",onChange:function(e){return a(e.target.value)},defaultValue:t})},h=Object(d.connect)(function(e){return{value:e.todoApp.todoSearch}},function(e){return{onChange:function(t){return e(Object(f.f)(t))}}})(O);function C(e){return function(){var t,a=Object(c.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(l.a)(this,t)}}var j=function(e){Object(o.a)(a,e);var t=C(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"todo-search-box w-100 bg-white pt-4 px-2 pb-2"},s.a.createElement("div",{className:"media"},s.a.createElement("span",{className:"todo-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-xl-none"}),s.a.createElement("div",{className:"media-body"},s.a.createElement(h,null))))}}]),a}(s.a.Component),T=a(1),R=a.n(T),A=function(e){var t=e.onCheckboxChange,a=e.onTodoClick,r=e.onStarredClick,n=e.onPriorityClick,l=e.id,c=e.task,o=e.completed,i=e.image,m=e.project,d=e.starred,f=e.priority,p=e.tag,E=e.active;return s.a.createElement("li",{className:"list-group-item list-group-item-action no-border "+(E===l?"bg-grey bg-lighten-4":"")},s.a.createElement(u.kb,{className:"todo-list-group-item"},s.a.createElement(u.A,{xl:1,xs:1},s.a.createElement(u.P,{check:!0},s.a.createElement(u.C,{type:"checkbox",onChange:t,id:"exampleCustomCheckbox-"+l,defaultChecked:o}))),s.a.createElement(u.A,{xl:1,xs:1},s.a.createElement(N.Star,{size:20,onClick:r,style:{color:d?"#FFC107":"#495057"}}),s.a.createElement(N.AlertCircle,{size:20,onClick:n,style:{color:f?"#FF586B":"#495057"}})),s.a.createElement(u.A,{xl:10,xs:9,onClick:a},s.a.createElement("p",{className:"mb-0 text-truncate"},o?s.a.createElement("s",null,c):c,s.a.createElement("img",{src:i,className:"rounded-circle width-25 float-right d-none d-xl-block",alt:i})),s.a.createElement("p",{className:"mb-0 font-small-3"},m," ",s.a.createElement("span",{className:"float-right badge "+("uiux"===p?"badge-info":"")+("frontend"===p?"badge-warning":"")+("backend"===p?"badge-success":"")+" mr-1"},p)))))},x=function(e){var t=e.todo,a=e.active,r=e.toggleTodo,n=e.toggleStarredTodo,l=e.togglePriorityTodo,c=e.deleteTodo,o=e.todoDetails;return s.a.createElement("div",{className:"todo-app-list"},s.a.createElement(v.a,null,s.a.createElement("div",{id:"users-list"},s.a.createElement("ul",{className:"list-group"},t.map(function(e){return s.a.createElement(A,Object.assign({key:e.id,active:a},e,{onCheckboxChange:function(){return r(e.id)},onStarredClick:function(){return n(e.id)},onPriorityClick:function(){return l(e.id)},onDeleteClick:function(){return c(e.id)},onTodoClick:function(){return o(e.id)}}))})))))};x.prototype={todo:R.a.arrayOf(R.a.shape({id:R.a.number.isRequired,full_name:R.a.string.isRequired,image:R.a.string,task:R.a.string,start_date:R.a.number.isRequired,due_date:R.a.number.isRequired,project:R.a.string,priority:R.a.bool.isRequired,tag:R.a.bool.isRequired,comments:R.a.string,completed:R.a.bool.isRequired,starred:R.a.bool.isRequired,deleted:R.a.bool.isRequired}).isRequired).isRequired,toggleStarredTodo:R.a.func.isRequired,deleteTodo:R.a.func.isRequired,todoDetails:R.a.func.isRequired};var P=x,w=function(e,t,a){switch(t){case f.g.SHOW_ALL:return e.filter(function(e){return!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.PROJECT_A_TODO:return e.filter(function(e){return"Project A"===e.project&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.PROJECT_B_TODO:return e.filter(function(e){return"Project B"===e.project&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.STARRED_TODO:return e.filter(function(e){return e.starred&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.PRIORITY_TODO:return e.filter(function(e){return e.priority&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.COMPLETED_TODO:return e.filter(function(e){return e.completed&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.UIUX_TODO:return e.filter(function(e){return"uiux"===e.tag&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.FRONTEND_TODO:return e.filter(function(e){return"frontend"===e.tag&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case f.g.BACKEND_TODO:return e.filter(function(e){return"backend"===e.tag&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});default:throw new Error("Unknown filter: "+t)}},_=Object(d.connect)(function(e,t){return{todo:w(e.todoApp.todo,e.todoApp.todoVisibilityFilter,e.todoApp.todoSearch),active:e.todoApp.todoDetails}},function(e,t){return{toggleTodo:function(t){return e(Object(f.j)(t))},toggleStarredTodo:function(t){return e(Object(f.i)(t))},togglePriorityTodo:function(t){return e(Object(f.h)(t))},deleteTodo:function(t){return e(Object(f.b)(t))},todoDetails:function(t){return e(Object(f.e)(t))}}})(P),L=function(e){var t=e.selectedTodo,a=e.toggleStarredTodo,r=e.togglePriorityTodo,n=e.onEditClick,l=e.editTodoFlag,c=e.onChange;return s.a.createElement(i.Fragment,null,t?s.a.createElement("div",{className:"todo-app-content-detail"},s.a.createElement(u.kb,null,s.a.createElement(u.A,{className:""},s.a.createElement(N.Star,{size:20,className:"my-2 mx-1",onClick:function(){return a(t.id)},style:{color:t.starred?"#FFC107":"#495057"}}),s.a.createElement(N.AlertCircle,{size:20,className:"my-2 mx-1",onClick:function(){return r(t.id)},style:{color:t.priority?"#FF586B":"#495057"}})),s.a.createElement(u.A,{className:"text-right"},s.a.createElement(u.e,{className:"btn-outline-success mr-1 mt-1",size:"sm",onClick:n},l?s.a.createElement(N.Check,{size:16}):s.a.createElement(N.Edit2,{size:16})))),s.a.createElement(v.a,null,s.a.createElement(u.kb,null,s.a.createElement(u.A,null,l?s.a.createElement(u.K,{type:"text",name:"task",id:"task",defaultValue:t.task,onChange:function(e){return c(t.id,"task",e.target.value)}}):s.a.createElement("p",{className:"lead"},t.completed?s.a.createElement("s",null,t.task):t.task))),s.a.createElement(u.kb,{className:"mt-1"},s.a.createElement(u.A,null,s.a.createElement(u.kb,null,s.a.createElement(u.A,{sm:"3"},s.a.createElement(u.U,{object:!0,src:t.image,alt:"Generic placeholder image",className:"img-fluid rounded-circle width-25"})),s.a.createElement(u.A,{sm:"9",className:"text-truncate"},l?s.a.createElement(u.K,{type:"text",className:"w-80",name:"full_name",id:"full_name",defaultValue:t.full_name,onChange:function(e){return c(t.id,"full_name",e.target.value)}}):t.full_name))),s.a.createElement(u.A,null,s.a.createElement(u.kb,null,s.a.createElement(u.A,{sm:"3"},s.a.createElement(N.Calendar,{size:19})),s.a.createElement(u.A,{sm:"9",className:"text-truncate"},l?s.a.createElement(u.K,{type:"text",className:"w-80",name:"due_date",id:"due_date",defaultValue:t.due_date,onChange:function(e){return c(t.id,"due_date",e.target.value)}}):t.due_date)))),s.a.createElement("hr",{style:{border:"1px solid #e6ecf5"}}),s.a.createElement(u.kb,{className:"mb-2"},s.a.createElement(u.A,null,l?s.a.createElement(u.K,{type:"textarea",rows:"4",name:"comments",id:"comments",defaultValue:t.comments,onChange:function(e){return c(t.id,"comments",e.target.value)}}):t.comments)),s.a.createElement(u.kb,{className:"mt-1"},s.a.createElement(u.A,{sm:"1"},s.a.createElement(N.Briefcase,{size:20})),s.a.createElement(u.A,{sm:"5"},l?s.a.createElement(u.K,{type:"select",name:"project",id:"project",className:"w-80",defaultValue:t.project,onChange:function(e){return c(t.id,"project",e.target.value)}},s.a.createElement("option",{value:"Project A"},"Project A"),s.a.createElement("option",{value:"Project B"},"Project B")):t.project),s.a.createElement(u.A,{sm:"1"},s.a.createElement(N.Tag,{size:20})),s.a.createElement(u.A,{sm:"5"},l?s.a.createElement(u.K,{type:"select",name:"tag",id:"tag",className:"w-80",defaultValue:t.tag,onChange:function(e){return c(t.id,"tag",e.target.value)}},s.a.createElement("option",{value:"uiux"},"UI/UX"),s.a.createElement("option",{value:"frontend"},"Frontend"),s.a.createElement("option",{value:"backend"},"Backend")):t.tag)),s.a.createElement("hr",{style:{border:"1px solid #e6ecf5"}}),s.a.createElement(u.kb,null,s.a.createElement(u.A,null,s.a.createElement("p",{className:"font-small-2 mb-0"},s.a.createElement("span",{className:"text-bold-400"},t.full_name)," created task on"," ",t.start_date,"."),s.a.createElement("p",{className:"font-small-2 mb-0"},s.a.createElement("span",{className:"text-bold-400"},t.full_name)," added to ",t.project,"."),s.a.createElement("p",{className:"font-small-2 mb-0"},s.a.createElement("span",{className:"text-bold-400"},t.full_name)," added to ",t.tag,"."))))):s.a.createElement("div",{className:"row h-100"},s.a.createElement("div",{className:"col-sm-12 my-auto"},s.a.createElement("div",{className:"text-center"},s.a.createElement(N.CheckSquare,{size:84,color:"#ccc",className:"pb-3"}),s.a.createElement("h4",null,"Please select a todo to show details.")))))};L.prototype={selectedTodo:R.a.arrayOf(R.a.shape({id:R.a.number.isRequired,full_name:R.a.string.isRequired,image:R.a.string,task:R.a.string,start_date:R.a.number.isRequired,due_date:R.a.number.isRequired,project:R.a.string,priority:R.a.bool.isRequired,tag:R.a.bool.isRequired,comments:R.a.string,completed:R.a.bool.isRequired,starred:R.a.bool.isRequired,deleted:R.a.bool.isRequired}).isRequired).isRequired,starred:R.a.bool.isRequired,priority:R.a.bool.isRequired,toggleStarredTodo:R.a.func.isRequired,togglePriorityTodo:R.a.func.isRequired};var D=L,q=Object(d.connect)(function(e,t){return{selectedTodo:e.todoApp.todo[e.todoApp.todoDetails],editTodoFlag:e.todoApp.editTodo}},function(e){return{onEditClick:function(){return e(Object(f.c)())},onChange:function(t,a,r){return e(Object(f.k)(t,a,r))},toggleStarredTodo:function(t){return e(Object(f.i)(t))},togglePriorityTodo:function(t){return e(Object(f.h)(t))}}})(D);function S(e){return function(){var t,a=Object(c.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(l.a)(this,t)}}var z=function(e){Object(o.a)(a,e);var t=S(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"todo-application"},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(k,null),s.a.createElement(u.kb,{className:"todo-app-content"},s.a.createElement("div",{className:"todo-app-content-area w-100"},s.a.createElement("div",{className:"todo-app-list-mails p-0"},s.a.createElement(j,null),s.a.createElement(_,null)),s.a.createElement("div",{className:"todo-app-mail-content d-none d-md-block"},s.a.createElement(q,null))))))}}]),a}(i.Component);t.default=z}}]);
//# sourceMappingURL=17.4997ac7d.chunk.js.map