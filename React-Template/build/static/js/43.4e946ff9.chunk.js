(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1438:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(21),c=n(23),o=n(13),l=n(22),i=n(0),s=n.n(i),u=n(93),p=(n(98),n(99),n(100)),f=(n(395),n(97)),m=n(94),d=n(95),h=n(290);function b(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var y=function(e){Object(l.a)(n,e);var t=b(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={files:[]},e.onDrop=function(t){e.setState({files:t})},e}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"dropzone mb-2"},s.a.createElement(h.a,{onDrop:this.onDrop.bind(this)},s.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))),s.a.createElement("aside",null,s.a.createElement("h4",null,"Dropped files"),s.a.createElement("ul",null,this.state.files.map(function(e){return s.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")}))))}}]),n}(i.Component);function v(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var E,g=function(e){Object(l.a)(n,e);var t=v(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={files:[],accepted:[],rejected:[]},e.onDrop=function(t){e.setState({files:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"dropzone mb-2"},s.a.createElement(h.a,{accept:"image/jpeg, image/png",onDrop:function(t,n){e.setState({accepted:t,rejected:n})}},s.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."),s.a.createElement("p",null,"Only *.jpeg and *.png images will be accepted"))),s.a.createElement("aside",null,s.a.createElement("h4",null,"Accepted files"),s.a.createElement("ul",null,this.state.accepted.map(function(e){return s.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")})),s.a.createElement("h4",null,"Rejected files"),s.a.createElement("ul",null,this.state.rejected.map(function(e){return s.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")}))))}}]),n}(i.Component);function D(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var j=function(e){Object(l.a)(n,e);var t=D(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={files:[],accepted:[],rejected:[]},e}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"dropzone"},s.a.createElement(h.a,{ref:function(e){E=e},onDrop:function(e,t){alert(e)}},s.a.createElement("p",null,"Drop files here.")),s.a.createElement("button",{type:"button",className:"mt-2 btn btn-primary",onClick:function(){E.open()}},"Open File Dialog"))}}]),n}(i.Component);function z(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var O=function(e){Object(l.a)(n,e);var t=z(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={files:[],disabled:!0},e.onDrop=function(t){e.setState({files:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("aside",null,s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.setState({disabled:!e.state.disabled})}},"Toggle disabled")),s.a.createElement("div",{className:"dropzone my-2"},s.a.createElement(h.a,{onDrop:this.onDrop.bind(this),disabled:this.state.disabled},s.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))),s.a.createElement("aside",null,s.a.createElement("h4",null,"Dropped files"),s.a.createElement("ul",null,this.state.files.map(function(e){return s.a.createElement("li",null,e.name," - ",e.size," bytes")}))))}}]),n}(i.Component);function R(e){return function(){var t,n=Object(o.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var k=function(e){Object(l.a)(n,e);var t=R(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(m.a,null,"Dropzone"),s.a.createElement(d.a,null,s.a.createElement("p",null,"Simple HTML5 drag-drop zone with React.js."),s.a.createElement("a",{href:"https://github.com/react-dropzone/react-dropzone",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"https://img.shields.io/github/stars/react-dropzone/react-dropzone.svg?style=social",alt:"Stars"}),s.a.createElement("img",{src:"https://img.shields.io/npm/dm/react-dropzone.svg",alt:"Downloads"}))),s.a.createElement(u.kb,null,s.a.createElement(u.A,{sm:"12"},s.a.createElement(u.i,null,s.a.createElement(u.j,null,s.a.createElement(u.u,null,"Basic Dropzone"),s.a.createElement("p",null,"Dropzone with default properties and displays list of the dropped files."),s.a.createElement(f.a,{TabContent1:s.a.createElement(y,null),TabContent2:s.a.createElement(p.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nclass BasicDropzone extends Component {\n   state = {\n      files: []\n   };\n\n   onDrop = files => {\n      this.setState({\n         files\n      });\n   };\n\n   render() {\n      return (\n         <div>\n            <div className="dropzone">\n               <Dropzone onDrop={this.onDrop.bind(this)}>\n                  <p>\n                     Try dropping some files here, or click to select files to\n                     upload.\n                  </p>\n               </Dropzone>\n            </div>\n            <aside>\n               <h2>Dropped files</h2>\n               <ul>\n                  {this.state.files.map(f => (\n                     <li key={f.name}>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n            </aside>\n         </div>\n      );\n   }\n}\nexport default BasicDropzone;\n')}))))),s.a.createElement(u.kb,null,s.a.createElement(u.A,{sm:"12"},s.a.createElement(u.i,null,s.a.createElement(u.j,null,s.a.createElement(u.u,null,"Specific file types"),s.a.createElement("p",null,"By providing accept prop you can make Dropzone to accept specific file types and reject the others. The value must be a comma-separated list of unique content type specifiers."),s.a.createElement(f.a,{TabContent1:s.a.createElement(g,null),TabContent2:s.a.createElement(p.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nclass FileTypeDropzone extends Component {\n   state = {\n      files: [],\n      accepted: [],\n      rejected: [],\n   };\n\n   onDrop = files => {\n      this.setState({\n         files\n      });\n   };\n\n   render() {\n      return (\n         <div>\n            <div className="dropzone">\n               <Dropzone\n                  accept="image/jpeg, image/png"\n                  onDrop={(accepted, rejected) => {\n                     this.setState({ accepted, rejected });\n                  }}\n               >\n                  <p>\n                     Try dropping some files here, or click to select files to\n                     upload.\n                  </p>\n                  <p>Only *.jpeg and *.png images will be accepted</p>\n               </Dropzone>\n            </div>\n            <aside>\n               <h2>Accepted files</h2>\n               <ul>\n                  {this.state.accepted.map(f => (\n                     <li key={f.name}>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n               <h2>Rejected files</h2>\n               <ul>\n                  {this.state.rejected.map(f => (\n                     <li key={f.name}>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n            </aside>\n         </div>\n      );\n   }\n}\nexport default FileTypeDropzone;\n')}))))),s.a.createElement(u.kb,null,s.a.createElement(u.A,{sm:"12"},s.a.createElement(u.i,null,s.a.createElement(u.j,null,s.a.createElement(u.u,null,"Opening File Dialog Programmatically"),s.a.createElement("p",null,"You can programmatically invoke default OS file prompt. In order to do that you'll have to set the ref on your Dropzone instance and call the instance open method."),s.a.createElement(f.a,{TabContent1:s.a.createElement(j,null),TabContent2:s.a.createElement(p.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nlet dropzoneRef;\n\nclass ProgramaticDialogDropzone extends Component {\n   state = {\n      files: [],\n      accepted: [],\n      rejected: [],\n   };\n\n   render() {\n      return (\n         <div>\n            <Dropzone\n               ref={node => {\n                  dropzoneRef = node;\n               }}\n               onDrop={(accepted, rejected) => {\n                  alert(accepted);\n               }}\n            >\n               <p>Drop files here.</p>\n            </Dropzone>\n            <button\n               type="button"\n               onClick={() => {\n                  dropzoneRef.open();\n               }}\n            >\n               Open File Dialog\n            </button>\n         </div>\n      );\n   }\n}\nexport default ProgramaticDialogDropzone;\n')}))))),s.a.createElement(u.kb,null,s.a.createElement(u.A,{sm:"12"},s.a.createElement(u.i,null,s.a.createElement(u.j,null,s.a.createElement(u.u,null,"Dropzone with disabled property"),s.a.createElement("p",null,"You can programmatically invoke default OS file prompt. In order to do that you'll have to set the ref on your Dropzone instance and call the instance open method."),s.a.createElement(f.a,{TabContent1:s.a.createElement(O,null),TabContent2:s.a.createElement(p.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nclass DisabledDropzone extends Component {\n   state = {\n      files: [],\n      disabled: true\n   };\n\n   onDrop = files => {\n      this.setState({\n         files\n      });\n   };\n\n   render() {\n      return (\n         <div>\n            <aside>\n               <button\n                  type="button"\n                  onClick={() =>\n                     this.setState({\n                        disabled: !this.state.disabled\n                     })\n                  }\n               >\n                  Toggle disabled\n               </button>\n            </aside>\n            <div className="dropzone">\n               <Dropzone\n                  onDrop={this.onDrop.bind(this)}\n                  disabled={this.state.disabled}\n               >\n                  <p>\n                     Try dropping some files here, or click to select files to\n                     upload.\n                  </p>\n               </Dropzone>\n            </div>\n            <aside>\n               <h2>Dropped files</h2>\n               <ul>\n                  {this.state.files.map(f => (\n                     <li>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n            </aside>\n         </div>\n      );\n   }\n}\nexport default DisabledDropzone;\n')}))))))}}]),n}(i.Component);t.default=k},395:function(e,t,n){},94:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:"content-header".concat(void 0===t?"":" ".concat(t))},e.children)}},95:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:"content-sub-header".concat(void 0===t?"":" ".concat(t))},e.children)}},97:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(20),r=n(21),c=n(24),o=n(23),l=n(13),i=n(22),s=n(0),u=n.n(s),p=n(96),f=n(93),m=n(14),d=n.n(m);function h(e){return function(){var t,n=Object(l.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(o.a)(this,t)}}var b=function(e){Object(i.a)(n,e);var t=h(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).toggle=r.toggle.bind(Object(c.a)(r)),r.state={activeTab:"1"},r}return Object(r.a)(n,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"nav-tabs-vc"},u.a.createElement(f.Z,{tabs:!0},u.a.createElement(f.ab,null,u.a.createElement(f.bb,{className:d()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},u.a.createElement(p.Eye,{size:18}))),u.a.createElement(f.ab,null,u.a.createElement(f.bb,{className:d()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},u.a.createElement(p.Code,{size:18})))),u.a.createElement(f.lb,{activeTab:this.state.activeTab,className:"px-0"},u.a.createElement(f.mb,{tabId:"1"},u.a.createElement(f.kb,null,u.a.createElement(f.A,{sm:"12"},this.props.TabContent1))),u.a.createElement(f.mb,{tabId:"2"},u.a.createElement(f.kb,null,u.a.createElement(f.A,{sm:"12"},this.props.TabContent2)))))}}]),n}(u.a.Component)}}]);
//# sourceMappingURL=43.4e946ff9.chunk.js.map