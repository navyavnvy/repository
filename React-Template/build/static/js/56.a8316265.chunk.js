(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1461:function(e,n,a){"use strict";a.r(n);var t=a(20),r=a(21),l=a(23),i=a(13),m=a(22),c=a(0),o=a.n(c),s=a(93),u=a(1382),d=a(1215),p=(a(94),a(95),a(98),a(99),a(100)),f='\nimport React, { Component, Fragment } from "react";\nimport { Card, CardBody, CardTitle, Row, Col, Button, FormGroup, Label } from "reactstrap";\nimport { Formik, Field, Form } from "formik";\nimport * as Yup from "yup";\n\n// import classnames from "classnames";\nimport ContentHeader from "../../components/contentHead/contentHeader";\nimport ContentSubHeader from "../../components/contentHead/contentSubHeader";\n\n//Prism\n// eslint-disable-next-line\nimport Prism from "prismjs";  //Include JS\nimport "prismjs/themes/prism-okaidia.css"; //Include CSS\nimport { PrismCode } from "react-prism"; //Prism Component\n\n\n\n\nconst formSchema = Yup.object().shape({\n   required: Yup.string()\n      .required("Required"),\n   email: Yup.string()\n      .email("Invalid email")\n      .required("Required"),\n   number: Yup.number()\n      .required("Required"),\n   url: Yup.string()\n      .url()\n      .required("Required"),\n   date: Yup.date()\n      .required("Required"),\n   minlength: Yup.string()\n      .min(4, "Too Short!")\n      .required("Required"),\n   maxlength: Yup.string()\n      .max(5, "Too Long!")\n      .required("Required"),\n});\n\nclass Validation extends Component {\n   render() {\n      return (\n         <Fragment>\n            <ContentHeader>Form Validation</ContentHeader>\n            <Row>\n               <Col sm="12">\n                  <Card>\n                     <CardBody>\n                        <CardTitle>Formik</CardTitle>\n                           <Col md="12" lg="6" className="leftDiv">\n                              <Formik\n                                 initialValues={{\n                                    required: "",\n                                    email: "",\n                                    url: "",\n                                    number: "",\n                                    date: "",\n                                    minlength: "",\n                                    maxlength: ""\n                                 }}\n                                 validationSchema={formSchema}\n                                 onSubmit={values => {\n                                    // same shape as initial values\n                                    console.log(values);\n                                 }}\n                              >\n                                 \n                              </Formik>\n                           </Col>\n                           \n                        \n                         \n                     </CardBody>\n                  </Card>\n               </Col>\n            </Row>\n         </Fragment>\n      );\n   }\n}\n\nexport default Validation;\n',v=a(105);function h(e){return function(){var n,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,t)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var E=d.object().shape({required:d.string().required("Required"),email:d.string().email("Invalid email").required("Required"),number:d.number().required("Required"),url:d.string().url().required("Required"),date:d.date().required("Required"),minlength:d.string().min(4,"Too Short!").required("Required"),maxlength:d.string().max(5,"Too Long!").required("Required")}),g=function(e){Object(m.a)(a,e);var n=h(a);function a(){return Object(t.a)(this,a),n.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(c.Fragment,null,o.a.createElement(s.kb,{className:"row-eq-height"},o.a.createElement(s.A,{sm:"12"},o.a.createElement(s.i,null,o.a.createElement(s.j,null,o.a.createElement(s.u,null,"Form Validation Design"),o.a.createElement(s.A,{md:"12",lg:"6",className:"leftDiv"},o.a.createElement(u.c,{initialValues:{required:"",email:"",url:"",number:"",date:"",minlength:"",maxlength:""},validationSchema:E,onSubmit:function(e){console.log(e)}},function(e){var n=e.errors,a=e.touched;return o.a.createElement(u.b,null,o.a.createElement(s.I,null,o.a.createElement(s.P,{for:"required"},"Required"),o.a.createElement(u.a,{name:"required",id:"required",className:"form-control ".concat(n.required&&a.required&&"is-invalid")}),n.required&&a.required?o.a.createElement("div",{className:"invalid-feedback"},n.required):null),o.a.createElement(s.I,null,o.a.createElement(s.P,{for:"email"},"Email"),o.a.createElement(u.a,{type:"email",name:"email",id:"email",className:"form-control ".concat(n.email&&a.email&&"is-invalid")}),n.email&&a.email?o.a.createElement("div",{className:"invalid-feedback"},n.email):null),o.a.createElement(s.I,null,o.a.createElement(s.P,{for:"url"},"Website URL"),o.a.createElement(u.a,{name:"url",id:"url",className:"form-control ".concat(n.url&&a.url&&"is-invalid")}),n.url&&a.url?o.a.createElement("div",{className:"invalid-feedback"},n.url):null),o.a.createElement(s.I,null,o.a.createElement(s.P,{for:"number"},"Number"),o.a.createElement(u.a,{name:"number",id:"number",className:"form-control ".concat(n.number&&a.number&&"is-invalid")}),n.number&&a.number?o.a.createElement("div",{className:"invalid-feedback"},n.number):null),o.a.createElement(s.I,null,o.a.createElement(s.P,{for:"date"},"Date"),o.a.createElement(u.a,{type:"date",name:"date",id:"date",className:"form-control ".concat(n.date&&a.date&&"is-invalid")}),n.date&&a.date?o.a.createElement("div",{className:"invalid-feedback"},n.date):null),o.a.createElement(s.I,null,o.a.createElement(s.P,{for:"minlength"},"Min Length (Minimum 4 Characters)"),o.a.createElement(u.a,{name:"minlength",id:"minlength",className:"form-control ".concat(n.minlength&&a.minlength&&"is-invalid")}),n.minlength&&a.minlength?o.a.createElement("div",{className:"invalid-feedback"},n.minlength):null),o.a.createElement(s.I,null,o.a.createElement(s.P,{for:"maxlength"},"Max Length (Maximum 5 Characters)"),o.a.createElement(u.a,{name:"maxlength",id:"maxlength",className:"form-control ".concat(n.maxlength&&a.maxlength&&"is-invalid")}),n.maxlength&&a.maxlength?o.a.createElement("div",{className:"invalid-feedback"},n.maxlength):null),o.a.createElement(s.e,{type:"submit"},"Submit"))}),o.a.createElement("div",{className:""},o.a.createElement("div",{className:"installation"},"Installation"),o.a.createElement(s.A,{md:"12",className:"leftDiv"},o.a.createElement("div",{className:"installation-steps"},o.a.createElement("div",{className:"installation-text"},"Download and install the package. Use Node.js v8.0.0 or later."),o.a.createElement("div",{className:"installation-box"},o.a.createElement("div",null,"npm install formik --save"),o.a.createElement("div",null,"npm install -S yup"),o.a.createElement("div",null,"npm install react-feather --save"),o.a.createElement("div",null,"npm install --save reactstrap react react-dom")))))),o.a.createElement(s.A,{md:"12",lg:"6",className:"rightDiv"},o.a.createElement(v.CopyToClipboard,{text:f,onCopy:function(){return e.setState({copied:!0})}},o.a.createElement("span",{className:"copy-code"},"Copy Code")),o.a.createElement(p.PrismCode,{component:"pre",className:"language-javascript"},f)))))))}}]),a}(c.Component);n.default=g},94:function(e,n,a){"use strict";var t=a(0),r=a.n(t);n.a=function(e){var n=e.className;return r.a.createElement("div",{className:"content-header".concat(void 0===n?"":" ".concat(n))},e.children)}},95:function(e,n,a){"use strict";var t=a(0),r=a.n(t);n.a=function(e){var n=e.className;return r.a.createElement("div",{className:"content-sub-header".concat(void 0===n?"":" ".concat(n))},e.children)}}}]);
//# sourceMappingURL=56.a8316265.chunk.js.map