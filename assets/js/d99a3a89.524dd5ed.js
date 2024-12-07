"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7285],{56131:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"quick-view/get-started/create-project","title":"Create a Project","description":"Create a Spring Boot Project","source":"@site/docs/quick-view/get-started/create-project.mdx","sourceDirName":"quick-view/get-started","slug":"/quick-view/get-started/create-project","permalink":"/jimmer-doc/docs/quick-view/get-started/create-project","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/get-started/create-project.mdx","tags":[],"version":"current","lastUpdatedAt":1733499820000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Create a Project"},"sidebar":"tutorialSidebar","previous":{"title":"Get Started","permalink":"/jimmer-doc/docs/quick-view/get-started/"},"next":{"title":"Create Database","permalink":"/jimmer-doc/docs/quick-view/get-started/create-database"}}');var i=r(74848),a=r(28453),s=r(11470),o=r(19365);const l={sidebar_position:1,title:"Create a Project"},d=void 0,c={},u=[{value:"Create a Spring Boot Project",id:"create-a-spring-boot-project",level:2},{value:"Add Dependencies",id:"add-dependencies",level:2},{value:"Additional Configuration Needed for Kotlin",id:"additional-configuration-needed-for-kotlin",level:2},{value:"Other Useful Configurations",id:"other-useful-configurations",level:2},{value:"Add Other Required Dependencies",id:"add-other-required-dependencies",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"create-a-spring-boot-project",children:"Create a Spring Boot Project"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"https://start.spring.io/",children:"https://start.spring.io/"})," to create a Spring Boot project. You need to choose your preferred language - Java or Kotlin."]}),"\n",(0,i.jsx)(n.p,{children:"The choice of language is important because Jimmer supports two different sets of APIs."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Java API - Ensures maximum developer usage"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Kotlin API - APIs designed specifically for Kotlin to optimize the development experience"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-dependencies",children:"Add Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Jimmer itself is highly neutral and can be used without Spring Boot. But it also provides great integration with Spring Boot."}),"\n",(0,i.jsx)(n.p,{children:"Users can choose to use it with or without Spring Boot. Different choices require adding different dependencies."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"groupId:\norg.babyfish.jimmer"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"artifactId:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{}),(0,i.jsx)("th",{children:"Integrate with Spring Boot"}),(0,i.jsx)("th",{children:"Standalone Usage"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Java"}),(0,i.jsx)("td",{rowspan:"2",children:"jimmer-spring-boot-starter"}),(0,i.jsx)("td",{children:"jimmer-sql"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Kotlin"}),(0,i.jsx)("td",{children:"jimmer-sql-kotlin"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Compared to standalone usage, integrating with Spring Boot is simpler. So this tutorial will demonstrate the ",(0,i.jsx)(n.code,{children:"jimmer-spring-boot-starter"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Modify build.gradle or pom.xml to add dependencies:"}),"\n",(0,i.jsxs)(s.A,{groupId:"buildTool",children:[(0,i.jsx)(o.A,{value:"maven",label:"Maven",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"<properties>\n  <jimmer.version>0.9.25</jimmer.version>\n</properties>\n\n<dependencies>\n  <dependency>\n      <groupId>org.babyfish.jimmer</groupId>\n      <artifactId>jimmer-spring-boot-starter</artifactId>\n      <version>${jimmer.version}</version>\n  </dependency>\n  ...other dependencies omitted...  \n</dependencies>\n"})})}),(0,i.jsx)(o.A,{value:"gradle",label:"Gradle",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"ext {\n  jimmerVersion = '0.9.25' \n}\n\ndependencies {\n\n  implementation \"org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}\"\n\n  ...other dependencies omitted...\n}\n"})})}),(0,i.jsx)(o.A,{value:"gradlekts",label:"Gradle (Kts)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val jimmerVersion = "0.9.25"\n\ndependencies {\n\n  implementation("org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}")  \n\n  ...other dependencies omitted...\n}\n'})})}),(0,i.jsx)(o.A,{value:"gradle_plugin",label:"Gradle Plugin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'plugins {\n    // Starting from Gradle 7.0, you can use "latest.release" instead of a specific version number to represent the use of the latest version.\n    // You can also use the \'+\' character to indicate matching the latest version number starting from the \'+\' character.\n    id "tech.argonariod.gradle-plugin-jimmer" version "latest.release"\n\n    ... other plugins omitted ...\n}\n\njimmer {\n    // Set the Jimmer dependency version, where you can also use version range expressions such as "latest.release" or "0.+"\n    version = "0.9.25"\n}\n'})})}),(0,i.jsx)(o.A,{value:"gradle_plugin_kts",label:"Gradle Plugin (kts)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'plugins {\n    // Starting from Gradle 7.0, you can use "latest.release" instead of a specific version number to represent the use of the latest version.\n    // You can also use the \'+\' character to indicate matching the latest version number starting from the \'+\' character.\n    id("tech.argonariod.gradle-plugin-jimmer") version "latest.release"\n\n    ... other plugins omitted ...\n}\n\njimmer {\n    // Set the Jimmer dependency version, where you can also use version range expressions such as "latest.release" or "0.+"\n    version = "0.9.25"\n}\n'})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["If you are using Gradle as your build tool, you can also use third-party Gradle plugin ",(0,i.jsx)(n.code,{children:"tech.argonariod.gradle-plugin-jimmer"})," provided by the community to automatically identify the project type and add dependencies automatically."]}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"tech.argonariod.gradle-plugin-jimmer"})," gradle plugin is community-provided and maintained to simplify Jimmer project configuration, and it is not officially maintained by Jimmer."]}),(0,i.jsxs)(n.p,{children:["Repository URL: ",(0,i.jsx)(n.a,{href:"https://github.com/ArgonarioD/gradle-plugin-jimmer",children:"https://github.com/ArgonarioD/gradle-plugin-jimmer"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"additional-configuration-needed-for-kotlin",children:"Additional Configuration Needed for Kotlin"}),"\n",(0,i.jsx)(n.p,{children:"If using Kotlin, you must modify the Spring Boot configuration file - this is very important."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Kotlin projects must configure ",(0,i.jsx)(n.code,{children:"jimmer.language"})]})}),"\n",(0,i.jsxs)(s.A,{groupId:"springBoot",children:[(0,i.jsx)(o.A,{value:"properties",label:"application.properties",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"jimmer.language = kotlin\n"})})}),(0,i.jsx)(o.A,{value:"yaml",label:"application.yml",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"jimmer:\n  language: kotlin\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"other-useful-configurations",children:"Other Useful Configurations"}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the required ",(0,i.jsx)(n.code,{children:"jimmer.language"})," for Kotlin projects, there are other useful configurations."]}),"\n",(0,i.jsx)(n.p,{children:"Here are a few basic configurations that work for both Java and Kotlin:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jimmer.dialect"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"org.babyfish.jimmer.sql.dialect.DefaultDialect"}),(0,i.jsx)(n.td,{children:"Database dialect class name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jimmer.show-sql"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Print executed SQL if true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jimmer.pretty-sql"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsxs)(n.td,{children:["Ensure that the printed SQL is well-formatted ",(0,i.jsx)(n.em,{children:"(compact by default)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jimmer.database-validation-mode"}),(0,i.jsx)(n.td,{children:"NONE|WARNING|ERROR"}),(0,i.jsx)(n.td,{children:"NONE"}),(0,i.jsx)(n.td,{children:"Validate consistency between database schema and entity types. WARNING logs inconsistencies, ERROR throws errors."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"../../spring/appendix",children:"Spring/Appendix"})," for complete documentation on configurations."]}),"\n",(0,i.jsxs)(s.A,{groupId:"springBoot",children:[(0,i.jsx)(o.A,{value:"properties",label:"application.properties",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"jimmer.dialect = org.babyfish.jimmer.sql.dialect.MySqlDialect  \njimmer.show-sql = true\njimmer.pretty-sql = true\njimmer.database-validation-mode = ERROR\n...other configurations omitted...\n"})})}),(0,i.jsx)(o.A,{value:"yaml",label:"application.yml",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"jimmer:\n  dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n  show-sql: true\n  pretty-sql: true\n  database-validation-mode: ERROR\n  ...other configurations omitted...  \n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"add-other-required-dependencies",children:"Add Other Required Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"In addition to Jimmer, some other dependencies are required like spring-web, JDBC driver, etc."}),"\n",(0,i.jsx)(n.p,{children:"Modify build.gradle or pom.xml to add dependencies:"}),"\n",(0,i.jsxs)(s.A,{groupId:"buildTool",children:[(0,i.jsx)(o.A,{value:"maven",label:"Maven",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n  </dependency>\n\n  <dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>8.0.30</version>\n    <scope>runtime</scope>\n  </dependency>\n\n  ...other dependencies omitted...\n</dependencies>\n"})})}),(0,i.jsx)(o.A,{value:"gradle",label:"Gradle",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n\n  implementation 'org.springframework.boot:spring-boot-starter-web'\n  runtimeOnly 'mysql:mysql-connector-java:8.0.30'\n\n  ...other dependencies omitted...\n}\n"})})}),(0,i.jsx)(o.A,{value:"gradlekts",label:"Gradle (Kts)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n\n  implementation("org.springframework.boot:spring-boot-starter-web")\n  runtimeOnly("mysql:mysql-connector-java:8.0.30")  \n\n  ...other dependencies omitted...\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(18215);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),i=r(18215),a=r(23104),s=r(56347),o=r(205),l=r(57485),d=r(31682),c=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=h(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,u]=m({queryString:r,groupId:i}),[g,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),f=(()=>{const e=d??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),i=o[r].value;i!==t&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(96540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);