(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1443:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n(21),i=n(23),o=n(13),c=n(22),s=n(0),l=n.n(s),d=n(93),u=n(105),p=(n(98),n(99),n(100)),f=(n(97),n(94),n(95),n(24)),g=n(5),m=n(420),b=n(419);function v(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)}}var h=function(e){return Array.from({length:e},function(e,t){return t}).map(function(e){return{id:"item-".concat(e),content:"item ".concat(e)}})};s.Component;function y(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)}}var D=function(e){return Array.from({length:e},function(e,t){return t}).map(function(e){return{id:"item-".concat(e),content:"item ".concat(e)}})};s.Component;function E(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)}}var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},function(e,t){return t}).map(function(e){return{id:"item-".concat(e+t),content:"item ".concat(e+t)}})},I=function(e,t,n){var r=Array.from(e),a=r.splice(t,1),i=Object(m.a)(a,1)[0];return r.splice(n,0,i),r},O=function(e,t,n,r){var a=Array.from(e),i=Array.from(t),o=a.splice(n.index,1),c=Object(m.a)(o,1)[0];i.splice(r.index,0,c);var s={};return s[n.droppableId]=a,s[r.droppableId]=i,s},j=function(e,t){return Object(g.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:e?"lightgreen":"grey"},t)},R=function(e){return{background:e?"lightblue":"lightgrey",padding:8,width:250}},k=function(e){Object(c.a)(n,e);var t=E(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={items:x(10),selected:x(5,10)},e.id2List={droppable:"items",droppable2:"selected"},e.getList=function(t){return e.state[e.id2List[t]]},e.onDragEnd=function(t){var n=t.source,r=t.destination;if(r)if(n.droppableId===r.droppableId){var a=I(e.getList(n.droppableId),n.index,r.index),i={items:a};"droppable2"===n.droppableId&&(i={selected:a}),e.setState(i)}else{var o=O(e.getList(n.droppableId),e.getList(r.droppableId),n,r);e.setState({items:o.droppable,selected:o.droppable2})}},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement(b.a,{onDragEnd:this.onDragEnd},l.a.createElement(b.c,{droppableId:"droppable"},function(t,n){return l.a.createElement("div",{ref:t.innerRef,style:R(n.isDraggingOver)},e.state.items.map(function(e,t){return l.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},function(t,n){return l.a.createElement("div",Object.assign({className:"white bg-success",ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:j(n.isDragging,t.draggableProps.style)}),e.content)})}),t.placeholder)}),l.a.createElement(b.c,{droppableId:"droppable2"},function(t,n){return l.a.createElement("div",{ref:t.innerRef,style:R(n.isDraggingOver)},e.state.selected.map(function(e,t){return l.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},function(t,n){return l.a.createElement("div",Object.assign({className:"white bg-danger",ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:j(n.isDragging,t.draggableProps.style)}),e.content)})}),t.placeholder)})))}}]),n}(s.Component),C='import React, { Component } from "react";\nimport { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";\n\n// fake data generator\nconst getItems = (count, offset = 0) =>\n   Array.from({ length: count }, (v, k) => k).map(k => ({\n      id: `item-${k + offset}`,\n      content: `item ${k + offset}`\n   }));\n\n// a little function to help us with reordering the result\nconst reorder = (list, startIndex, endIndex) => {\n   const result = Array.from(list);\n   const [removed] = result.splice(startIndex, 1);\n   result.splice(endIndex, 0, removed);\n\n   return result;\n};\n\n/**\n * Moves an item from one list to another list.\n */\nconst move = (source, destination, droppableSource, droppableDestination) => {\n   const sourceClone = Array.from(source);\n   const destClone = Array.from(destination);\n   const [removed] = sourceClone.splice(droppableSource.index, 1);\n\n   destClone.splice(droppableDestination.index, 0, removed);\n\n   const result = {};\n   result[droppableSource.droppableId] = sourceClone;\n   result[droppableDestination.droppableId] = destClone;\n\n   return result;\n};\n\nconst grid = 8;\n\nconst getItemStyle = (isDragging, draggableStyle) => ({\n   // some basic styles to make the items look a bit nicer\n   userSelect: "none",\n   padding: grid * 2,\n   margin: `0 0 ${grid}px 0`,\n\n   // change background colour if dragging\n   background: isDragging ? "lightgreen" : "grey",\n\n   // styles we need to apply on draggables\n   ...draggableStyle\n});\n\nconst getListStyle = isDraggingOver => ({\n   background: isDraggingOver ? "lightblue" : "lightgrey",\n   padding: grid,\n   width: 250\n});\n\nclass multipleTarget extends Component {\n   state = {\n      items: getItems(10),\n      selected: getItems(5, 10)\n   };\n\n   /**\n    * A semi-generic way to handle multiple lists. Matches\n    * the IDs of the droppable container to the names of the\n    * source arrays stored in the state.\n    */\n   id2List = {\n      droppable: "items",\n      droppable2: "selected"\n   };\n\n   getList = id => this.state[this.id2List[id]];\n\n   onDragEnd = result => {\n      const { source, destination } = result;\n\n      // dropped outside the list\n      if (!destination) {\n         return;\n      }\n\n      if (source.droppableId === destination.droppableId) {\n         const items = reorder(\n            this.getList(source.droppableId),\n            source.index,\n            destination.index\n         );\n\n         let state = { items };\n\n         if (source.droppableId === "droppable2") {\n            state = { selected: items };\n         }\n\n         this.setState(state);\n      } else {\n         const result = move(\n            this.getList(source.droppableId),\n            this.getList(destination.droppableId),\n            source,\n            destination\n         );\n\n         this.setState({\n            items: result.droppable,\n            selected: result.droppable2\n         });\n      }\n   };\n\n   // Normally you would want to split things out into separate components.\n   // But in this example everything is just done in one place for simplicity\n   render() {\n      return (\n         <DragDropContext onDragEnd={this.onDragEnd}>\n            <Droppable droppableId="droppable">\n               {(provided, snapshot) => (\n                  <div\n                     ref={provided.innerRef}\n                     style={getListStyle(snapshot.isDraggingOver)}\n                  >\n                     {this.state.items.map((item, index) => (\n                        <Draggable\n                           key={item.id}\n                           draggableId={item.id}\n                           index={index}\n                        >\n                           {(provided, snapshot) => (\n                              <div\n                                 ref={provided.innerRef}\n                                 {...provided.draggableProps}\n                                 {...provided.dragHandleProps}\n                                 style={getItemStyle(\n                                    snapshot.isDragging,\n                                    provided.draggableProps.style\n                                 )}\n                              >\n                                 {item.content}\n                              </div>\n                           )}\n                        </Draggable>\n                     ))}\n                     {provided.placeholder}\n                  </div>\n               )}\n            </Droppable>\n            <Droppable droppableId="droppable2">\n               {(provided, snapshot) => (\n                  <div\n                     ref={provided.innerRef}\n                     style={getListStyle(snapshot.isDraggingOver)}\n                  >\n                     {this.state.selected.map((item, index) => (\n                        <Draggable\n                           key={item.id}\n                           draggableId={item.id}\n                           index={index}\n                        >\n                           {(provided, snapshot) => (\n                              <div\n                                 ref={provided.innerRef}\n                                 {...provided.draggableProps}\n                                 {...provided.dragHandleProps}\n                                 style={getItemStyle(\n                                    snapshot.isDragging,\n                                    provided.draggableProps.style\n                                 )}\n                              >\n                                 {item.content}\n                              </div>\n                           )}\n                        </Draggable>\n                     ))}\n                     {provided.placeholder}\n                  </div>\n               )}\n            </Droppable>\n         </DragDropContext>\n      );\n   }\n}\nexport default multipleTarget;\n';function S(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)}}var N=function(e){Object(c.a)(n,e);var t=S(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(s.Fragment,null,l.a.createElement(d.kb,null,l.a.createElement(d.A,{md:"12",lg:"12"},l.a.createElement(d.i,null,l.a.createElement(d.j,null,l.a.createElement(d.u,null,"Multiple Drop Targets"),l.a.createElement(d.A,{md:"12",lg:"6",className:"leftDiv"},l.a.createElement(k,null),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"installation"},"Installation"),l.a.createElement(d.A,{md:"12",className:"leftDiv"},l.a.createElement("div",{className:"installation-steps"},l.a.createElement("div",{className:"installation-text"},"Download and install the package. Use Node.js v8.0.0 or later."),l.a.createElement("div",{className:"installation-box"},"npm install --save reactstrap react react-dom",l.a.createElement("br",null),"npm install react-beautiful-dnd"))))),l.a.createElement(d.A,{md:"12",lg:"6",className:"rightDiv"},l.a.createElement(u.CopyToClipboard,{text:C,onCopy:function(){return e.setState({copied:!0})}},l.a.createElement("span",{className:"copy-code"},"Copy Code")),l.a.createElement(p.PrismCode,{component:"pre",className:"language-javascript"},C)))))))}}]),n}(s.Component);t.default=N},94:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.className;return a.a.createElement("div",{className:"content-header".concat(void 0===t?"":" ".concat(t))},e.children)}},95:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.className;return a.a.createElement("div",{className:"content-sub-header".concat(void 0===t?"":" ".concat(t))},e.children)}},97:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(20),a=n(21),i=n(24),o=n(23),c=n(13),s=n(22),l=n(0),d=n.n(l),u=n(96),p=n(93),f=n(14),g=n.n(f);function m(e){return function(){var t,n=Object(c.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(o.a)(this,t)}}var b=function(e){Object(s.a)(n,e);var t=m(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).toggle=a.toggle.bind(Object(i.a)(a)),a.state={activeTab:"1"},a}return Object(a.a)(n,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"nav-tabs-vc"},d.a.createElement(p.Z,{tabs:!0},d.a.createElement(p.ab,null,d.a.createElement(p.bb,{className:g()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},d.a.createElement(u.Eye,{size:18}))),d.a.createElement(p.ab,null,d.a.createElement(p.bb,{className:g()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},d.a.createElement(u.Code,{size:18})))),d.a.createElement(p.lb,{activeTab:this.state.activeTab,className:"px-0"},d.a.createElement(p.mb,{tabId:"1"},d.a.createElement(p.kb,null,d.a.createElement(p.A,{sm:"12"},this.props.TabContent1))),d.a.createElement(p.mb,{tabId:"2"},d.a.createElement(p.kb,null,d.a.createElement(p.A,{sm:"12"},this.props.TabContent2)))))}}]),n}(d.a.Component)}}]);
//# sourceMappingURL=45.d9ed4d6d.chunk.js.map