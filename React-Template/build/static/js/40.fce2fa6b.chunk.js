(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1451:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(21),o=n(23),c=n(13),l=n(22),i=n(0),s=n.n(i),p=n(93),u=(n(98),n(99),n(100)),m=n(97),v=n(94),f=n(95);function b(e){return function(){var t,n=Object(c.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(o.a)(this,t)}}var h=function(e){Object(l.a)(n,e);var t=b(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={popoverOpen:!1},e.toggle=function(){e.setState({popoverOpen:!e.state.popoverOpen})},e}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("span",null,s.a.createElement(p.e,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),s.a.createElement(p.gb,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},s.a.createElement(p.ib,null,"Popover Title"),s.a.createElement(p.hb,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),n}(s.a.Component),d=function(e){Object(l.a)(n,e);var t=b(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},e}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,this.state.popovers.map(function(e,t){return s.a.createElement(h,{key:t,item:e,id:t})}))}}]),n}(s.a.Component);function g(e){return function(){var t,n=Object(c.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(o.a)(this,t)}}var E=function(e){Object(l.a)(n,e);var t=g(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(v.a,null,"Popovers"),s.a.createElement(f.a,null,"Popovers React Component."),s.a.createElement(p.kb,null,s.a.createElement(p.A,{sm:"12"},s.a.createElement(p.i,null,s.a.createElement(p.j,null,s.a.createElement(p.u,null,"Popovers"),s.a.createElement(m.a,{TabContent1:s.a.createElement(d,null),TabContent2:s.a.createElement(u.PrismCode,{component:"pre",className:"language-javascript"},'import React from "react";\nimport { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";\n\nclass PopoverItem extends React.Component {\n   state = {\n      popoverOpen: false\n   };\n\n   toggle = () => {\n      this.setState({\n         popoverOpen: !this.state.popoverOpen\n      });\n   };\n\n   render() {\n      return (\n         <span>\n            <Button\n               className="mr-1"\n               color="secondary"\n               id={"Popover-" + this.props.id}\n               onClick={this.toggle}\n            >\n               {this.props.item.text}\n            </Button>\n            <Popover\n               placement={this.props.item.placement}\n               isOpen={this.state.popoverOpen}\n               target={"Popover-" + this.props.id}\n               toggle={this.toggle}\n            >\n               <PopoverHeader>Popover Title</PopoverHeader>\n               <PopoverBody>\n                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.\n                  Pellentesque ornare sem lacinia quam venenatis vestibulum.\n               </PopoverBody>\n            </Popover>\n         </span>\n      );\n   }\n}\n\nclass PopoverExampleMulti extends React.Component {\n   state = {\n      popovers: [\n         {\n            placement: "top",\n            text: "Top"\n         },\n         {\n            placement: "bottom",\n            text: "Bottom"\n         },\n         {\n            placement: "left",\n            text: "Left"\n         },\n         {\n            placement: "right",\n            text: "Right"\n         }\n      ]\n   };\n\n   render() {\n      return (\n         <div>\n            {this.state.popovers.map((popover, i) => {\n               return <PopoverItem key={i} item={popover} id={i} />;\n            })}\n         </div>\n      );\n   }\n}\n\nexport default PopoverExampleMulti;')}))))))}}]),n}(s.a.Component);t.default=E},94:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:"content-header".concat(void 0===t?"":" ".concat(t))},e.children)}},95:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:"content-sub-header".concat(void 0===t?"":" ".concat(t))},e.children)}},97:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(20),r=n(21),o=n(24),c=n(23),l=n(13),i=n(22),s=n(0),p=n.n(s),u=n(96),m=n(93),v=n(14),f=n.n(v);function b(e){return function(){var t,n=Object(l.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var h=function(e){Object(i.a)(n,e);var t=b(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).toggle=r.toggle.bind(Object(o.a)(r)),r.state={activeTab:"1"},r}return Object(r.a)(n,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"nav-tabs-vc"},p.a.createElement(m.Z,{tabs:!0},p.a.createElement(m.ab,null,p.a.createElement(m.bb,{className:f()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},p.a.createElement(u.Eye,{size:18}))),p.a.createElement(m.ab,null,p.a.createElement(m.bb,{className:f()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},p.a.createElement(u.Code,{size:18})))),p.a.createElement(m.lb,{activeTab:this.state.activeTab,className:"px-0"},p.a.createElement(m.mb,{tabId:"1"},p.a.createElement(m.kb,null,p.a.createElement(m.A,{sm:"12"},this.props.TabContent1))),p.a.createElement(m.mb,{tabId:"2"},p.a.createElement(m.kb,null,p.a.createElement(m.A,{sm:"12"},this.props.TabContent2)))))}}]),n}(p.a.Component)}}]);
//# sourceMappingURL=40.fce2fa6b.chunk.js.map