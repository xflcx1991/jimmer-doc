"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8256],{29522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"query/paging/reverse-sorting","title":"\u53cd\u6392\u5e8f\u4f18\u5316","description":"\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/reverse-sorting.mdx","sourceDirName":"query/paging","slug":"/query/paging/reverse-sorting","permalink":"/jimmer-doc/zh/docs/query/paging/reverse-sorting","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/reverse-sorting.mdx","tags":[],"version":"current","lastUpdatedAt":1733618994000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"\u53cd\u6392\u5e8f\u4f18\u5316"},"sidebar":"tutorialSidebar","previous":{"title":"\u8868\u8fde\u63a5\u4f18\u5316","permalink":"/jimmer-doc/zh/docs/query/paging/unnecessary-join"},"next":{"title":"\u6df1\u5206\u9875\u4f18\u5316","permalink":"/jimmer-doc/zh/docs/query/paging/deep-optimization"}}');var a=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={sidebar_position:3,title:"\u53cd\u6392\u5e8f\u4f18\u5316"},c=void 0,u={},d=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u6b63\u6392\u5e8f",id:"\u6b63\u6392\u5e8f",level:3},{value:"\u53cd\u6392\u5e8f",id:"\u53cd\u6392\u5e8f",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,a.jsx)(n.p,{children:"\u968f\u7740\u9875\u7801\u7684\u4e0d\u65ad\u7741\u5927\uff0c\u5206\u9875\u67e5\u8be2\u7684\u6548\u7387\u4f1a\u8d8a\u6765\u8d8a\u4f4e\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cJimmer\u652f\u6301\u4e86\u53cd\u6392\u5e8f\u4f18\u5316\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u53cd\u6392\u5e8f\u4f18\u5316\u5fc5\u987b\u5728\u4e00\u4e0b\u524d\u63d0\u540c\u65f6\u6ee1\u8db3\u65f6\u624d\u751f\u6548\uff1a"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u6b64\u529f\u80fd\u5e76\u4e0d\u9488\u5bf9\u53ea\u5173\u5fc3\u9875\u5185\u6570\u636e\u800c\u4e0d\u5173\u5fc3\u5206\u9875\u524d\u603b\u884c\u6570\u7684\u7684\u67e5\u8be2\uff0c\u5373",(0,a.jsx)(n.code,{children:"limit(limit, offset)"}),"\u3002\u5fc5\u987b\u662f\u540c\u65f6\u5173\u5fc3\u9875\u5185\u6570\u636e\u548c\u603b\u884c\u6570\u7684\u67e5\u8be2\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u6837\u677f\u67e5\u8be2\u5fc5\u987b\u5177\u5907\u660e\u786e\u7684orderBy\u5b50\u53e5\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u88ab\u67e5\u8be2\u7684\u90a3\u4e00\u9875\u7684\u6570\u636e\u5728\u5206\u9875\u524d\u6240\u6709\u6570\u636e\u4e2d\u504f\u540e\u3002\u5373"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"offset"})," + ",(0,a.jsx)(n.code,{children:"pageSize"})," / 2 > ",(0,a.jsx)(n.code,{children:"totalCount"})," / 2"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u4ee5\u4e0a\u6761\u4ef6\u90fd\u6ee1\u8db3\u65f6\uff0cJimmer\u4f1a\u98a0\u5012\u6837\u677f\u67e5\u8be2\u7684\u6392\u5e8f\u3002\u56e0\u4e3a\uff0c\u9875\u7801\u76f8\u5bf9\u8f83\u5927\u7684\u6b63\u6392\u5e8f\u67e5\u8be2\u548c\u9875\u7801\u76f8\u5bf9\u5c0f\u7684\u53cd\u6392\u5e8f\u67e5\u8be2\u7b49\u4ef7\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,a.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["SpringBoot\u7684",(0,a.jsx)(n.code,{children:"Page<E>"}),"\u7c7b\u578b\u7684\u5b9a\u4e49\u8fc7\u4e8e\u590d\u6742\uff0c\u4e0d\u5229\u4e8e\u672c\u6587\u901a\u8fc7\u6253\u5370\u7ed3\u679c\u8fdb\u884c\u6f14\u793a\uff0c\u6240\u4ee5\u6211\u4eec\u91c7\u7528Jimmer\u5b9a\u4e49\u7684Page\u7c7b\uff0c\u800c\u975eSpringBoot\u5e76\u91c7\u7528\u81ea\u5b9a\u4e49Page\u7c7b\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5206\u9875\u67e5\u8be2\u4ee3\u7801\u4e3a"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public Page<Book> findBooks(\n    int pageIndex,\n    int pageSize\n) {\n    BookTable table = Tables.BOOK_TABLE;\n    \n    return sqlClient\n        .createQuery(table)\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        .fetchPage(pageIndex, pageSize);\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(\n    pageIndex: Int,\n    pageSize: Int\n): Page<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .fetchPage(pageIndex, pageSize)\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u6211\u4eec\u5047\u8bbe",(0,a.jsx)(n.code,{children:"Book"}),"\u8bb0\u5f55\u517112\u6761\uff0c\u5982\u679c",(0,a.jsx)(n.code,{children:"pageSize"}),"\u4e3a2\uff0c\u51716\u9875\uff0c",(0,a.jsx)(n.code,{children:"pageIndex"}),"\u7684\u67095\u4e2a\u53d6\u503c\uff1a0\u30011\u30012\u30013\u30014\u30015\u3002"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"0\u30011\u30012: \u8981\u67e5\u8be2\u7684\u6570\u636e\u504f\u524d\uff0c\u91c7\u7528\u6b63\u6392\u5e8f\u5206\u9875"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"3\u30014\u30015: \u8981\u67e5\u8be2\u7684\u6570\u636e\u504f\u540e\uff0c\u91c7\u7528\u53cd\u6392\u5e8f\u5206\u9875"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5206\u522b\u4ee5",(0,a.jsx)(n.code,{children:"pageIndex=2"}),"\u548c",(0,a.jsx)(n.code,{children:"pageIndex=3"}),"\u4e3a\u4f8b\uff0c\u5c55\u793a\u53cd\u6392\u5e8f\u5206\u9875\u548c\u6b63\u6392\u5e8f\u5206\u9875\u7684\u5dee\u5f02\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u6b63\u6392\u5e8f",children:"\u6b63\u6392\u5e8f"}),"\n",(0,a.jsxs)(n.p,{children:["\u6267\u884c",(0,a.jsx)(n.code,{children:"findBooks(2, 2)"}),"\uff0c\u751f\u6210\u7684\u6b63\u6392\u5e8fSQL\u4e3a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    /* highlight-next-line */\n    tb_1_.NAME asc,\n    /* highlight-next-line */\n    tb_1_.EDITION desc\nlimit ? /* 2 */ \noffset ? /* 4 */\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "rows":[\n        {\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81,\n            "store":{\n                "id":2\n            }\n        },\n        {\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":80,\n            "store":{\n                "id":2\n            }\n        }\n    ],\n    "totalCount":12,\n    "totalPage":6\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u53cd\u6392\u5e8f",children:"\u53cd\u6392\u5e8f"}),"\n",(0,a.jsxs)(n.p,{children:["\u6267\u884c",(0,a.jsx)(n.code,{children:"findBooks(3, 2)"}),"\uff0c\u751f\u6210\u7684\u6b63\u6392\u5e8fSQL\u4e3a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    /* highlight-next-line */\n    tb_1_.NAME desc, // \u53cd\u5e8f\uff1aasc\u53d8desc\n    /* highlight-next-line */\n    tb_1_.EDITION asc // \u53cd\u5e8f\uff1adesc\u53d8asc\nlimit ? /* 2 */ \noffset ? /* 4 */\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "rows":[\n        {\n            "id":3,\n            "name":"Learning GraphQL",\n            "edition":3,\n            "price":51,\n            "store":{\n                "id":1\n            }\n        },\n        {\n            "id":2,\n            "name":"Learning GraphQL",\n            "edition":2,\n            "price":55,\n            "store":{\n                "id":1\n            }\n        }\n    ],\n    "totalCount":12,\n    "totalPage":6\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function I(e){const n=(0,m.A)();return(0,x.jsx)(_,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);