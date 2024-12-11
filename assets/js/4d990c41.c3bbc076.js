"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1147],{30987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"query/global-filter/logical-deleted","title":"Logical Deletion","description":"Readers cannot find anything related to global filters in this doc, because the filter required for logical deletion is built-in and hidden by Jimmer.","source":"@site/docs/query/global-filter/logical-deleted.mdx","sourceDirName":"query/global-filter","slug":"/query/global-filter/logical-deleted","permalink":"/jimmer-doc/docs/query/global-filter/logical-deleted","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/global-filter/logical-deleted.mdx","tags":[],"version":"current","lastUpdatedAt":1733618994000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Logical Deletion"},"sidebar":"tutorialSidebar","previous":{"title":"Custom Filters","permalink":"/jimmer-doc/docs/query/global-filter/user-filter"},"next":{"title":"Querying Association Tables","permalink":"/jimmer-doc/docs/query/associations"}}');var a=t(74848),r=t(28453),i=t(11470),s=t(19365);const o={sidebar_position:2,title:"Logical Deletion"},c=void 0,d={},u=[{value:"Mapping",id:"mapping",level:2},{value:"Usage",id:"usage",level:2},{value:"Filter root entity",id:"filter-root-entity",level:3},{value:"Filter associated objects",id:"filter-associated-objects",level:3},{value:"Ignore Logical Deletion Filter",id:"ignore-logical-deletion-filter",level:2},{value:"Reverse Logical Deletion Filter",id:"reverse-logical-deletion-filter",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Readers cannot find anything related to global filters in this doc, because the filter required for logical deletion is built-in and hidden by Jimmer."})}),"\n",(0,a.jsx)(n.h2,{id:"mapping",children:"Mapping"}),"\n",(0,a.jsx)(n.p,{children:"Logical deletion, also known as soft deletion, means data is not actually deleted from the database. Instead, data is hidden to give the illusion of deletion. This leaves room for recovering from accidental operations."}),"\n",(0,a.jsxs)(n.p,{children:["The mapping related to logical deletion is introduced in great detail in ",(0,a.jsx)(n.a,{href:"../../mapping/advanced/logical-deleted/entity",children:"Mapping / Advanced Mapping / Logical Deletion"}),", so all the details are not repeated here, just a brief recap:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"  ',children:'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true") \n    boolean isDeleted();\n    \n    ...other code omitted...\n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...other code omitted...\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"filter-root-entity",children:"Filter root entity"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .select(table)\n    .execute(); \n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    /* highlight-next-line */  \n    tb_1_.DELETED <> ? /* true */\n"})}),"\n",(0,a.jsx)(n.h3,{id:"filter-associated-objects",children:"Filter associated objects"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"AuthorTable author = Tables.AUTHOR_TABLE;\n\nList<Author> authors = sqlClient\n    .createQuery(author) \n    .select(\n        author.fetch(\n            Fetchers.AUTHOR_FETCHER\n                .allScalarFields()\n                .books(\n                    Fetchers.BOOK_FETCHER\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val authors = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table.fetchBy {\n                allScalarFields()\n                books {\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute() \n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Without caching enabled, this generates two SQLs:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Query root entity"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME,\n    tb_1_.GENDER\nfrom AUTHOR tb_1_\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Query associated objects, apply logical deletion filter"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_2_.AUTHOR_ID,\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE \nfrom BOOK tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.BOOK_ID\nwhere\n        tb_2_.AUTHOR_ID in (\n            ? /* 1 */, ? /* 2 */, ? /* 3 */, ? /* 4 */, ? /* 5 */  \n        )\n    and\n        /* highlight-next-line */\n        tb_1_.DELETED <> ? /* true */\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ignore-logical-deletion-filter",children:"Ignore Logical Deletion Filter"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .filters(cfg -> { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.IGNORED); \u2777\n    })\n    .createQuery(table)\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .filters { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.IGNORED)\n    } \n    .createQuery(table)\n    .select(table)\n    .execute()\n"})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2776 Adjust filter config without affecting the current ",(0,a.jsx)(n.code,{children:"sqlClient"}),", create a new temporary ",(0,a.jsx)(n.code,{children:"sqlClient"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u2777 Ignore soft deletion flag"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This time, the generated SQL no longer contains:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n"})}),"\n",(0,a.jsx)(n.h2,{id:"reverse-logical-deletion-filter",children:"Reverse Logical Deletion Filter"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .filters(cfg -> { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.REVERSED); \u2777\n    })\n    .createQuery(table)\n    .select(table)\n    .execute(); \n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .filters { \u2776\n        cfg.setBehavior(LogicalDeletedBehavior.REVERSED) \n    }\n    .createQuery(table)\n    .select(table) \n    .execute()\n"})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2776 Adjust filter config without affecting the current ",(0,a.jsx)(n.code,{children:"sqlClient"}),", create a new temporary ",(0,a.jsx)(n.code,{children:"sqlClient"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u2777 Reverse the soft deletion flag, i.e. query deleted data"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Executing again, the generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE, \n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    /* highlight-next-line */\n    tb_1_.DELETED = ? /* true */ \n"})}),"\n",(0,a.jsxs)(n.p,{children:["This time the filter condition is ",(0,a.jsx)(n.code,{children:"tb_1_.DELETED = true"}),", which is the exact opposite of the default filtering rule - it queries already deleted data."]})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var l=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>E});var l=t(96540),a=t(34164),r=t(23104),i=t(56347),s=t(205),o=t(57485),c=t(31682),d=t(70679);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:a}}=e;return{value:n,label:t,attributes:l,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:t,groupId:a}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=c??f;return b({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,r]),tabValues:r}}var p=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function m(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==l&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(m,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function E(e){const n=(0,p.A)();return(0,j.jsx)(_,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var l=t(96540);const a={},r=l.createContext(a);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);