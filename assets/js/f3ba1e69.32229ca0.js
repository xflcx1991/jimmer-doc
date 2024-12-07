"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5864],{53531:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var i=t(74848),r=t(28453),a=t(11470),s=t(19365);const o=[];function l(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In Jimmer, all executable statements and instructions support two execution modes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Execute based on the JDBC connection specified by the user"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Executed by Jimmer automatically determining based on a JDBC connection"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Here, take ",(0,i.jsx)(n.code,{children:"Executable"})," (Java) or ",(0,i.jsx)(n.code,{children:"KExecutable"})," (Kotlin) interface as an example"]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Executable.java"',children:"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="KExecutable.kt" ',children:"package org.babyfish.jimmer.sql.kt\n\nimport java.sql.Connection  \n\ninterface KExecutable<R> {\n  fun execute(con: Connection? = null): R\n}\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"execute(Connection)"}),": Execute on the JDBC connection specified by the user."]}),"\n",(0,i.jsx)(n.p,{children:"Take query as an example:"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute(con);\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute(con)\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"For this usage, no special configuration of SqlClient is required."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"execute()"})," or ",(0,i.jsx)(n.code,{children:"execute(null)"}),": Determined by Jimmer to execute on a JDBC connection."]}),"\n",(0,i.jsx)(n.p,{children:"Take query as an example:"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line  \n    .execute();\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute()\n"})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["For this usage, ",(0,i.jsx)(n.code,{children:"ConnectionManager"})," must be configured for SqlClient. Otherwise it will cause exceptions."]}),(0,i.jsxs)(n.p,{children:["Undoubtedly, the 2nd approach is more in line with the requirements of business system development, so it is recommended. So it is strongly recommended to configure ",(0,i.jsx)(n.code,{children:"ConnectionManager"})," for SqlClient."]})]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},79864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"spring/transaction","title":"Spring Transaction","description":"Integrate Spring Transaction","source":"@site/docs/spring/transaction.mdx","sourceDirName":"spring","slug":"/spring/transaction","permalink":"/jimmer-doc/docs/spring/transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/spring/transaction.mdx","tags":[],"version":"current","lastUpdatedAt":1711320943000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Spring Transaction"},"sidebar":"tutorialSidebar","previous":{"title":"Spring","permalink":"/jimmer-doc/docs/spring/"},"next":{"title":"Spring Data","permalink":"/jimmer-doc/docs/spring/repository/"}}');var r=t(74848),a=t(28453),s=t(11470),o=t(19365),l=t(74400),c=t(53531);const d={sidebar_position:1,title:"Spring Transaction"},u=void 0,h={},p=[{value:"Integrate Spring Transaction",id:"integrate-spring-transaction",level:2},{value:"Using Spring Boot starter",id:"using-spring-boot-starter",level:3},{value:"Not Using Spring Boot Starter",id:"not-using-spring-boot-starter",level:3},{value:"Work with JdbcTemplate",id:"work-with-jdbctemplate",level:2},{value:"Multiple Data Sources",id:"multiple-data-sources",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"integrate-spring-transaction",children:"Integrate Spring Transaction"}),"\n",(0,r.jsx)(n.p,{children:"In Jimmer, all database operation APIs have two execution modes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute on a specified JDBC connection"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Execute without specifying a JDBC connection, but a ",(0,r.jsx)(n.code,{children:"ConnectionManager"})," needs to be configured for Jimmer to teach Jimmer how to borrow and return connections."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsxs)(l.l,{buttonText:"here",title:"Two execution ways",children:[" ",(0,r.jsx)(c.Ay,{})]})," for more details."]}),"\n",(0,r.jsxs)(n.p,{children:["So Jimmer itself does not provide connection/transaction management capabilities, such management capabilities completely rely on user customization of ",(0,r.jsx)(n.code,{children:"ConnectionManager"}),". ",(0,r.jsx)(n.code,{children:"ConnectionManager"})," is the key to integrate Jimmer with the connection/transaction management capabilities of any IOC framework ",(0,r.jsx)(n.em,{children:"(of course including Spring)"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"using-spring-boot-starter",children:"Using Spring Boot starter"}),"\n",(0,r.jsx)(n.p,{children:"If using the Spring Boot Starter provided by Jimmer, no extra work is needed. Jimmer will automatically integrate into Spring's transaction management mechanism."}),"\n",(0,r.jsx)(n.h3,{id:"not-using-spring-boot-starter",children:"Not Using Spring Boot Starter"}),"\n",(0,r.jsx)(n.p,{children:"If using Spring only, without the Spring Boot Starter provided by Jimmer.\nYou need to code by yourself to integrate Jimmer into Spring's transaction management mechanism."}),"\n",(0,r.jsxs)(n.p,{children:["Developers need to create ",(0,r.jsx)(n.code,{children:"JSqlClient/KSqlClient"})," and set its ",(0,r.jsx)(n.code,{children:"ConnectionManager"}),". In ",(0,r.jsx)(n.code,{children:"ConnectionManager"}),", use Spring's ",(0,r.jsx)(n.code,{children:"org.springframework.jdbc.datasource.DataSourceUtils"})," to open and close connections."]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Bean  \npublic JSqlClient sqlClient(DataSource dataSource) {\n    return JSqlClient.newBuilder()\n        // highlight-next-line  \n        .setConnectionManager(\n            new ConnectionManager() {\n                @Override\n                public <R> R execute(\n                    Function<Connection, R> block\n                ) {\n                    Connection con = DataSourceUtils\n                        // highlight-next-line\n                        .getConnection(dataSource);\n                    try {\n                        return block.apply(con);\n                    } finally {\n                        DataSourceUtils\n                        // highlight-next-line\n                        .releaseConnection(con, dataSource);\n                    }\n                }\n            }\n        )\n        ...Omit other configurations...\n        .build();\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Bean\nfun sqlClient(dataSource: DataSource): KSqlClient = \n    newKSqlClient {\n        // highlight-next-line\n        setConnectionManager {\n            val con = DataSourceUtils\n                // highlight-next-line\n                .getConnection(dataSource)\n            try {\n                proceed(con)  \n            } finally {\n                DataSourceUtils\n                // highlight-next-line\n                .releaseConnection(con, dataSource)\n            }\n        }\n        ...Omit other configurations...\n    }\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Don't use normal methods to borrow ",(0,r.jsx)(n.em,{children:"(dataSource.getConnection)"})," and return ",(0,r.jsx)(n.em,{children:"(con.close)"})," connections from the connection pool.\nYou must use Spring's ",(0,r.jsx)(n.code,{children:"org.springframework.jdbc.datasource.DataSourceUtils"}),",\nbecause this can be combined with Spring's transaction management mechanism."]})}),"\n",(0,r.jsx)(n.h2,{id:"work-with-jdbctemplate",children:"Work with JdbcTemplate"}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer adopts minimalist design. The API entry point ",(0,r.jsx)(n.code,{children:"JSqlClient/KSqlClient"})," exposes stateless APIs."]}),"\n",(0,r.jsx)(n.p,{children:"Many database operation frameworks provide lightweight stateful wrappers for JDBC connections, such as"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JPA's ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html",children:"EntityManager"})]}),"\n",(0,r.jsxs)(n.li,{children:["Hibernate's ",(0,r.jsx)(n.a,{href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/Session.html",children:"Session"})]}),"\n",(0,r.jsxs)(n.li,{children:["MyBatis's ",(0,r.jsx)(n.a,{href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html",children:"SqlSession"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"And they also provide stateful wrappers for database transactions, such as"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JPA's ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html#getTransaction--",children:"EntityManager.getTransaction()"})]}),"\n",(0,r.jsxs)(n.li,{children:["Hibernate's ",(0,r.jsx)(n.a,{href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/SharedSessionContract.html#getTransaction()",children:"Session.getTransaction()"})]}),"\n",(0,r.jsxs)(n.li,{children:["MyBatis's ",(0,r.jsx)(n.a,{href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html#commit()",children:"SqlSession.commit()"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer doesn't have similar abstractions. The API entry point ",(0,r.jsx)(n.code,{children:"JSqlClient/KSqlClient"})," exposes stateless APIs. JDBC connection is the only low-level dependency of Jimmer."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"This enables an important feature: Jimmer's transaction management is exactly the same as JdbcTemplate's transaction management."})}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer doesn't need to provide any APIs like ",(0,r.jsx)(n.code,{children:"createNativeQuery"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For report queries that are not closely related to ORM, users expect to write complete Native SQL, then JdbcTemplate can be used directly, because Jimmer's transaction management is exactly the same as JdbcTemplate's."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For Jimmer's ORM-style queries, inject ",(0,r.jsx)(n.a,{href:"../query/native-sql",children:"Native SQL"})," expressions in strongly typed SQL DSL."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"multiple-data-sources",children:"Multiple Data Sources"}),"\n",(0,r.jsxs)(n.p,{children:["In the previous sections, we discussed the integration of Spring transactions in the single data source scenario.\nAs for multiple data sources, please refer to ",(0,r.jsx)(n.a,{href:"../configuration/multi-datasources",children:"this section"}),"."]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var i=t(96540),r=t(18215),a=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),j=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function S(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},66971:(e,n,t)=>{t.d(n,{a:()=>x});var i=t(96540),r=t(72774),a=t(63051),s=t(28968),o=t(48875),l=t(44676),c=t(47859),d=t(4671),u=t(99343),h=t(7324),p=t(39781),m=t(74848);const x=(0,i.memo)((e=>{let{open:n,fullScreen:t=!1,title:o,maxWidth:x="md",onClose:j,children:b}=e;const[f,v]=(0,i.useState)(t),y=(0,i.useCallback)((()=>{v((e=>!e))}),[]);return(0,m.jsxs)(a.A,{open:n,onClose:j,fullScreen:f,TransitionComponent:g,maxWidth:x,children:[(0,m.jsx)(r.A,{sx:{position:"relative"},children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,m.jsx)(d.A,{onClick:y,style:{color:"white"},children:f?(0,m.jsx)(h.A,{}):(0,m.jsx)(u.A,{})}),(0,m.jsx)(d.A,{"aria-label":"close",onClick:j,style:{color:"white"},children:(0,m.jsx)(p.A,{})})]})}),(0,m.jsx)(s.A,{children:b})]})})),g=i.forwardRef((function(e,n){return(0,m.jsx)(o.A,{direction:"up",ref:n,...e})}))},74400:(e,n,t)=>{t.d(n,{l:()=>o});var i=t(96540),r=t(67512),a=t(66971),s=t(74848);const o=(0,i.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:o=n,variant:l="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[p,m]=(0,i.useState)(!1),x=(0,i.useCallback)((e=>{m(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),g=(0,i.useCallback)((()=>{m(!1)}),[]),j=u?{textTransform:"none"}:{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{"data-is-view-more-button":"true",onClick:x,variant:l,size:c?"large":"small",style:j,children:n}),(0,s.jsx)(a.a,{open:p,onClose:g,title:o,maxWidth:d,fullScreen:t,children:h})]})}))},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);