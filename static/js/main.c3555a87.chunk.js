(this.webpackJsonphlzh5=this.webpackJsonphlzh5||[]).push([[0],{11:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(8),r=a(9),c=a(7),i=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"beforeSend",value:function(){c.b()}},{key:"complete",value:function(){c.a()}}]),e}()},15:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="\u7f51\u7edc\u8fde\u63a5\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u72b6\u6001\uff01",r="\u670d\u52a1\u5668\u54cd\u5e94\u5f02\u5e38\uff01"},19:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));a(5),a(17),a(10);var n=a(15),r=(a(11),a(7));var c=function(e){return function(t){if(e&&e.complete(),200===t.status)return t;throw t.status>0?(r.c(n.a),new Error(n.b)):(r.c(n.a),new Error(n.a))}},i=function(e){return function(t){throw e&&e.complete(),r.c(n.a),t}}}).call(this,a(23))},30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),s=(a(35),a(36),a(28)),o=a(1),l=a(8),u=a(9),m=a(14),p=a(13),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Index Page")}}]),a}(r.a.Component),h=a(5),f=a.n(h),v=a(10),_=a(19),b=a(11),g=a(7),E={"Content-Type":"application/json"};function w(e){return y.apply(this,arguments)}function y(){return(y=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("ok"!=t.retCode){e.next=4;break}return e.abrupt("return",t);case 4:throw t.msg&&g.c(t.return_msg),new Error(t.return_msg);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return O.apply(this,arguments)}function O(){return(O=Object(v.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={mediaCode:"fyb",userID:"o8M-ywDqgHpgurI707sc05FPmMHo",os:"android",ver:1,pars:{artID:t,requestID:(new Date).valueOf(),readPrice:"",readUnit:""}},n=new b.a,e.next=4,fetch("/v1/app/articles/art/view",{method:"POST",headers:E,body:JSON.stringify(a)}).catch(Object(_.a)(n)).then(Object(_.b)(n)).then((function(e){return e.json()}));case 4:return r=e.sent,e.next=7,w(r);case 7:return r=e.sent,e.abrupt("return",r.body);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),console.log("params",e.match.params),n.state={content:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N().then((function(t){var a=t.article;e.setState({content:a.content})})).catch((function(e){}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content}}))}}]),a}(r.a.Component),j=a(27);a(39);var k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onOpenPress=function(){n.setState({showFull:!0})},n.articleId=e.match.params.articleId,n.state={title:"",type_name:"",content:"",showFull:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N(this.articleId).then((function(t){var a=t.article||{},n=a.title,r=a.type_name,c=a.content||"";c=(c=c.replace(/https:\/\/cdn.read.html5.qq.com\/image\?.*imageUrl=/gi,"")).replace(/<p/gi,'<p class="mytexts" '),e.setState({title:n,type_name:r,content:c})})).catch((function(e){}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"wraps"},this.state.content?r.a.createElement("div",{className:"article_infro ui_top_0 bg_color ui_position_relative"},r.a.createElement("div",{className:"article",style:{maxHeight:this.state.showFull?"none":"954px",overflowY:this.state.showFull?"auto":"hidden"}},r.a.createElement("h2",{className:"main_title"},this.state.title),r.a.createElement("h3",{className:"subtitles"},r.a.createElement("span",{className:"sub_type ui_paddingR"},this.state.type_name),r.a.createElement("span",{className:"time"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return e||(e=(new Date).valueOf()),j.a(e,t)}())),r.a.createElement("section",{className:"details",dangerouslySetInnerHTML:{__html:this.state.content}})),this.state.showFull?null:r.a.createElement("div",{className:"sub_shadow ui_position_absolute ui_box-shadow"}),this.state.showFull?null:r.a.createElement("div",{className:"more mymost ui_position_absolute"},r.a.createElement("a",{onClick:this.onOpenPress,id:"readBtn",className:"more_comment ui_inBlock border_1"},"\u70b9\u5f00\u67e5\u770b\u5168\u6587"))):r.a.createElement("div",{className:"article"},r.a.createElement("p",{className:"mytext"},"\u6587\u7ae0\u52a0\u8f7d\u4e2d...")),r.a.createElement("div",{className:"main",style:{marginTop:"0.2rem"}},r.a.createElement("div",{className:"seg_line ui_marginB_2"}),r.a.createElement("div",{className:"col-title ui_position_relative borderB_1 ui_paddingT ui_paddingB_5  ui_marginL_3 ui_marginR_3"},r.a.createElement("h3",{className:"ui_position_absolute"},"\u5927\u5bb6\u90fd\u5728\u770b")),r.a.createElement("div",{className:"pos_map hot_list hot_open"},r.a.createElement("div",{className:"hots_ul"},r.a.createElement("a",{className:"lista flex_box borderB_1",href:"http://118.190.131.43/v1/app/in/article/view?allowcomment=1&articleID=2344588&userID=o8M-ywDqgHpgurI707sc05FPmMHo&os=android&requestID=1602813566980560&readPrice=0&readUnit=&mediaCode=fyb&bts=1&ver=1&bfzyap=1&sqq=0&auth=0&readprice=\xe6\xaf\x8f\xe9\x98\x85\xe8\xaf\xbb7\xe6\xaf\x9b"},r.a.createElement("div",{className:"li_right ui_paddingR_2"},r.a.createElement("h2",null,"\u64a4\u9500\u6751\u957f\uff01\u5168\u56fd\u519c\u6751\u8fce\u6765\u201d\u65b0\u9886\u5bfc\u201c\uff0c\u6751\u957f\u65f6\u4ee3\u7ec8\u7ed3\uff01\u519c\u6c11\u62cd\u624b\u53eb\u597d\uff01"),r.a.createElement("p",{className:"intros"},r.a.createElement("span",{className:"ui_paddingR"},"\u793e\u4f1a"),r.a.createElement("span",{className:""},"4637\u9605\u8bfb"))),r.a.createElement("div",{className:"li_left"},r.a.createElement("img",{className:"lis_img borderA_1",src:"http://mz-up.oss-cn-shanghai.aliyuncs.com/article_cover/814668/3AzHzY2LZ5heSXkHFOBt0ujeHQUrEf4o7I3GPPIn.jpeg"})))),r.a.createElement("div",{className:"hots_ul"},r.a.createElement("a",{className:"lista flex_box borderB_1",href:"http://118.190.131.43/v1/app/in/article/view?allowcomment=1&articleID=2329563&userID=o8M-ywDqgHpgurI707sc05FPmMHo&os=android&requestID=1602813566980560&readPrice=0&readUnit=&mediaCode=fyb&bts=1&ver=1&bfzyap=1&sqq=0&auth=0&readprice=\xe6\xaf\x8f\xe9\x98\x85\xe8\xaf\xbb7\xe6\xaf\x9b"},r.a.createElement("div",{className:"li_right ui_paddingR_2"},r.a.createElement("h2",null,"\u606d\u559c\u5168\u4f53\u9000\u4f0d\u5175\uff0c\u8001\u5175\uff0c\u5143\u65e6 \u6625\u8282\u6709\u91cd\u5927\u798f\u5229\uff01\uff01\u76f8\u4e92\u8f6c\u544a"),r.a.createElement("p",{className:"intros"},r.a.createElement("span",{className:"ui_paddingR"},"\u793e\u4f1a"),r.a.createElement("span",{className:""},"4813\u9605\u8bfb"))),r.a.createElement("div",{className:"li_left"},r.a.createElement("img",{className:"lis_img borderA_1",src:"http://mz-up.oss-cn-shanghai.aliyuncs.com/article_cover/326906/6PbmJEkeI0ouZywtCTEFKI2d8xgkRkKPXFtm5eLG.jpeg"})))))))}}]),a}(r.a.Component);var x=function(){return r.a.createElement(s.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:d}),r.a.createElement(o.a,{path:"/about",exact:!0,component:I}),r.a.createElement(o.a,{path:"/article/:articleId",exact:!0,component:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var n=a(26),r=a.n(n),c=(a(38),0);function i(e){!function(e){var t=(new Date).valueOf();!e||t-c<3e3||(c=t,r()({text:e,gravity:"top",position:"center",backgroundColor:"rgba(0,0,0,0.5)"}).showToast())}(e)}function s(){}function o(){}}},[[30,1,2]]]);