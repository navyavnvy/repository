(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1445:function(a,e,t){"use strict";t.r(e);var r=t(20),n=t(21),o=t(23),l=t(13),i=t(22),s=t(0),c=t.n(s),m=t(93),d=t(1274),p=t(105),u={data:{labels:["January","February","March","April","May","June","July"],datasets:[{data:[65,59,80,81,56,55,40],label:"My First dataset",fill:!1,borderDash:[5,5],borderColor:"#9C27B0",pointBorderColor:"#9C27B0",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4},{data:[28,48,40,19,86,27,90],label:"My Second dataset",fill:!1,borderDash:[5,5],borderColor:"#00A5A8",pointBorderColor:"#00A5A8",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4},{data:[45,25,16,36,67,18,76],label:"My Third dataset - No bezier",lineTension:0,fill:!1,borderColor:"#FF7D4D",pointBorderColor:"#FF7D4D",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4}]},options:{animation:{duration:1e3,easing:"easeOutBack"},hover:{animationDuration:1e3,mode:"label"},responsiveAnimationDuration:1e3,responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},scales:{xAxes:[{display:!0,gridLines:{color:"#f3f3f3",drawTicks:!1},scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,gridLines:{color:"#f3f3f3",drawTicks:!1},scaleLabel:{display:!0,labelString:"Value"}}]},title:{display:!0,text:"Chart.js Line Chart - Legend"}}},g={data:{labels:["January","February","March","April","May","June","July"],datasets:[{data:[0,150,140,105,190,230,270],label:"Series A",backgroundColor:"rgba(255, 141, 96, 0.4)",borderColor:"transparent",pointBackgroundColor:"#FFF",pointBorderColor:"rgba(255, 141, 96,1)",pointHoverBackgroundColor:"rgba(255, 141, 96,1)",pointRadius:"5",pointHoverBorderColor:"#FFF",pointHoverRadius:"5",pointBorderWidth:"2"},{data:[0,90,120,240,140,250,190],label:"Series B",backgroundColor:"rgba(0, 157, 160, 0.7)",borderColor:"transparent",pointBackgroundColor:"#FFF",pointBorderColor:"rgba(0, 157, 160,1)",pointHoverBackgroundColor:"rgba(0, 157, 160,1)",pointRadius:"5",pointHoverBorderColor:"#FFF",pointHoverRadius:"5",pointBorderWidth:"2"}]},options:{animation:{duration:1e3,easing:"easeOutBack"},hover:{animationDuration:1e3},responsiveAnimationDuration:1e3,responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!0,gridLines:{color:"#f3f3f3",drawTicks:!1},scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,gridLines:{color:"#f3f3f3",drawTicks:!1},scaleLabel:{display:!0,labelString:"Value"}}]}}},C={data:{labels:["2006","2007","2008","2009","2010","2011","2012"],datasets:[{label:"Series A",data:[65,59,80,81,56,55,40],backgroundColor:"rgba(255, 141, 96, 0.8)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{data:[28,48,40,19,86,27,90],label:"Series B",backgroundColor:"rgba(0, 157, 160, 0.8)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}]},options:{scaleShowVerticalLines:!1,responsive:!0,maintainAspectRatio:!1}},h={data:{labels:["Download Sales","In-Store Sales","Mail Sales"],datasets:[{data:[300,500,100],backgroundColor:["rgba(0, 157, 160, 0.8)","rgba(28, 188, 216, 0.8)","rgba(255, 141, 96, 0.8)"]}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1}},v=(t(98),t(99),t(100)),f='\nimport React, { Fragment } from "react";\nimport { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";\nimport { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";\n\nimport {\n   BarData\n} from "./chartData";\n\nconst ChartJS = props => (\n   <Fragment>\n    \n      <Row>\n\n         <Col md="12" lg="12" className="leftDiv">\n            <Bar height={400} data={BarData.data} options={BarData.options} />\n         </Col>\n        \n      </Row>\n   </Fragment>\n);\n\nexport default ChartJS;',E='\nimport React, { Fragment } from "react";\nimport { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";\nimport { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";\n\nimport {\n    LineChartData\n} from "./chartData";\n\nconst ChartJS = props => (\n   <Fragment>\n    \n      <Row>\n\n         <Col md="12" lg="12" className="leftDiv">\n         <Line height={400} data={LineChartData.data} options={LineChartData.options} />\n         </Col>\n        \n      </Row>\n   </Fragment>\n);\n\nexport default ChartJS;',b='\nimport React, { Fragment } from "react";\nimport { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";\nimport { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";\n\nimport {\n    AreaChartdata\n} from "./chartData";\n\nconst ChartJS = props => (\n   <Fragment>\n    \n      <Row>\n\n         <Col md="12" lg="12" className="leftDiv">\n            <Line height={400} data={AreaChartdata.data} options={AreaChartdata.options} /> \n         </Col>\n        \n      </Row>\n   </Fragment>\n);\n\nexport default ChartJS;',N='\nimport React, { Fragment } from "react";\nimport { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";\nimport { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";\n\nimport {\n    PieData\n} from "./chartData";\n\nconst ChartJS = props => (\n   <Fragment>\n    \n      <Row>\n\n         <Col md="12" lg="12" className="leftDiv">\n         <Pie height={400} data={PieData.data} options={PieData.options} /> \n         </Col>\n        \n      </Row>\n   </Fragment>\n);\n\nexport default ChartJS;';function D(a){return function(){var e,t=Object(l.a)(a);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var r=Object(l.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(o.a)(this,e)}}var y=function(a){Object(i.a)(t,a);var e=D(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var a=this;return c.a.createElement(s.Fragment,null,c.a.createElement(m.kb,{className:"row-eq-height"},c.a.createElement(m.A,{sm:"12"},c.a.createElement(m.i,null,c.a.createElement(m.j,null,c.a.createElement(m.u,null,"Charts Design"),c.a.createElement(m.A,{md:"12",lg:"6",className:"leftDiv"},c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement(d.a,{height:400,data:C.data,options:C.options})),c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"installation"},"Installation"),c.a.createElement(m.A,{md:"12",className:"leftDiv"},c.a.createElement("div",{className:"installation-steps"},c.a.createElement("div",{className:"installation-text"},"Download and install the package. Use Node.js v8.0.0 or later."),c.a.createElement("div",{className:"installation-box"},c.a.createElement("div",null,"npm install react-chartjs-2 chart.js --save"),c.a.createElement("div",null,"npm install --save reactstrap react react-dom"))))))),c.a.createElement(m.A,{md:"12",lg:"6",className:"rightDiv"},c.a.createElement(p.CopyToClipboard,{text:f,onCopy:function(){return a.setState({copied:!0})}},c.a.createElement("span",{className:"copy-code"},"Copy Code")),c.a.createElement(v.PrismCode,{component:"pre",className:"language-javascript"},f)))))),c.a.createElement(m.kb,{className:"row-eq-height"},c.a.createElement(m.A,{sm:"12"},c.a.createElement(m.i,null,c.a.createElement(m.j,null,c.a.createElement(m.u,null,"LINE Charts"),c.a.createElement(m.A,{md:"12",lg:"6",className:"leftDiv"},c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement(d.b,{height:400,data:u.data,options:u.options})),c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"installation"},"Installation"),c.a.createElement(m.A,{md:"12",className:"leftDiv"},c.a.createElement("div",{className:"installation-steps"},c.a.createElement("div",{className:"installation-text"},"Download and install the package. Use Node.js v8.0.0 or later."),c.a.createElement("div",{className:"installation-box"},c.a.createElement("div",null,"npm install react-chartjs-2 chart.js --save"),c.a.createElement("div",null,"npm install --save reactstrap react react-dom"))))))),c.a.createElement(m.A,{md:"12",lg:"6",className:"rightDiv"},c.a.createElement(p.CopyToClipboard,{text:E,onCopy:function(){return a.setState({copied:!0})}},c.a.createElement("span",{className:"copy-code"},"Copy Code")),c.a.createElement(v.PrismCode,{component:"pre",className:"language-javascript"},E)))))),c.a.createElement(m.kb,{className:"row-eq-height"},c.a.createElement(m.A,{sm:"12"},c.a.createElement(m.i,null,c.a.createElement(m.j,null,c.a.createElement(m.u,null,"LINE AREA Charts"),c.a.createElement(m.A,{md:"12",lg:"6",className:"leftDiv"},c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement(d.b,{height:400,data:g.data,options:g.options})),c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"installation"},"Installation"),c.a.createElement(m.A,{md:"12",className:"leftDiv"},c.a.createElement("div",{className:"installation-steps"},c.a.createElement("div",{className:"installation-text"},"Download and install the package. Use Node.js v8.0.0 or later."),c.a.createElement("div",{className:"installation-box"},c.a.createElement("div",null,"npm install react-chartjs-2 chart.js --save"),c.a.createElement("div",null,"npm install --save reactstrap react react-dom"))))))),c.a.createElement(m.A,{md:"12",lg:"6",className:"rightDiv"},c.a.createElement(p.CopyToClipboard,{text:b,onCopy:function(){return a.setState({copied:!0})}},c.a.createElement("span",{className:"copy-code"},"Copy Code")),c.a.createElement(v.PrismCode,{component:"pre",className:"language-javascript"},b)))))),c.a.createElement(m.kb,{className:"row-eq-height"},c.a.createElement(m.A,{sm:"12"},c.a.createElement(m.i,null,c.a.createElement(m.j,null,c.a.createElement(m.u,null,"PIE Charts"),c.a.createElement(m.A,{md:"12",lg:"6",className:"leftDiv"},c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement(d.c,{height:400,data:h.data,options:h.options})),c.a.createElement(m.A,{md:"12",lg:"12",className:"leftDiv"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"installation"},"Installation"),c.a.createElement(m.A,{md:"12",className:"leftDiv"},c.a.createElement("div",{className:"installation-steps"},c.a.createElement("div",{className:"installation-text"},"Download and install the package. Use Node.js v8.0.0 or later."),c.a.createElement("div",{className:"installation-box"},c.a.createElement("div",null,"npm install react-chartjs-2 chart.js --save"),c.a.createElement("div",null,"npm install --save reactstrap react react-dom"))))))),c.a.createElement(m.A,{md:"12",lg:"6",className:"rightDiv"},c.a.createElement(p.CopyToClipboard,{text:N,onCopy:function(){return a.setState({copied:!0})}},c.a.createElement("span",{className:"copy-code"},"Copy Code")),c.a.createElement(v.PrismCode,{component:"pre",className:"language-javascript"},N)))))))}}]),t}(s.Component);e.default=y}}]);
//# sourceMappingURL=67.285675f5.chunk.js.map