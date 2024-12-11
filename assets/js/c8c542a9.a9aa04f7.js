"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[110],{73304:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"mapping/base/association/one-to-one","title":"One To One","description":"This chapter introduces how to use the @org.babyfish.jimmer.sql.OneToOne annotation to declare one-to-one association properties.","source":"@site/docs/mapping/base/association/one-to-one.mdx","sourceDirName":"mapping/base/association","slug":"/mapping/base/association/one-to-one","permalink":"/jimmer-doc/docs/mapping/base/association/one-to-one","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/association/one-to-one.mdx","tags":[],"version":"current","lastUpdatedAt":1733618994000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"One To One"},"sidebar":"tutorialSidebar","previous":{"title":"Association Mapping","permalink":"/jimmer-doc/docs/mapping/base/association/"},"next":{"title":"Many To One","permalink":"/jimmer-doc/docs/mapping/base/association/many-to-one"}}');var s=i(74848),a=i(28453),r=i(11470),o=i(19365);const l={sidebar_position:1,title:"One To One"},d=void 0,c={},u=[{value:"Owning Side",id:"owning-side",level:2},{value:"1. Based on Foreign Key",id:"1-based-on-foreign-key",level:3},{value:"2. Based on Join Table",id:"2-based-on-join-table",level:3},{value:"Inverse Side",id:"inverse-side",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This chapter introduces how to use the ",(0,s.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.OneToOne"})," annotation to declare one-to-one association properties."]}),"\n",(0,s.jsx)(n.p,{children:"One-to-one supports bidirectional association. For bidirectional associations, one side must be the owning side and the other side must be the inverse side:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Owning side (required): The actual mapping between the database and association properties to implement unidirectional one-to-one association."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Inverse side (optional): If a unidirectional association already exists, the inverse side can be configured as a mirror of the owning side to form a bidirectional association."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Let's assume there are two entity types Customer and Address, and establish a bidirectional one-to-one association between them."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Unlike JPA/Hibernate, the owning side and inverse side can be chosen arbitrarily. Both can be used to persist associations."}),(0,s.jsx)(n.p,{children:"The example in this article chooses:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Owning side (required): ",(0,s.jsx)(n.code,{children:"Customer.address"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Inverse side (optional): ",(0,s.jsx)(n.code,{children:"Address.customer"})]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"owning-side",children:"Owning Side"}),"\n",(0,s.jsx)(n.p,{children:"There are two ways to implement a one-to-one association: based on foreign key and based on join table."}),"\n",(0,s.jsx)(n.h3,{id:"1-based-on-foreign-key",children:"1. Based on Foreign Key"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Customer.java" ',children:"@Entity\npublic interface Customer {\n\n    // highlight-next-line\n    @OneToOne\n    Address address();\n\n    ...Omit other code...\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Customer.kt"',children:"@Entity\ninterface Customer {\n\n    // highlight-next-line \n    @OneToOne\n    val address: Address\n\n    ...Omit other code...\n}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Here ",(0,s.jsx)(n.code,{children:"@JoinColumn"})," is not used together to explicitly specify the foreign key column name. Jimmer will deduce the column name corresponding to the ",(0,s.jsx)(n.code,{children:"address"})," property based on the ",(0,s.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the default ",(0,s.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"})," is not overridden by the user, the foreign key column name of the ",(0,s.jsx)(n.code,{children:"address"})," property is ",(0,s.jsx)(n.code,{children:"ADDRESS_ID"}),". So the previous code is equivalent to:"]}),"\n",(0,s.jsx)(n.p,{children:"Therefore, the above code is equivalent to the following:"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Customer.java"  ',children:'@Entity\npublic interface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinColumn(name = "ADDRESS_ID")\n    Address address();\n\n    ...Omit other code...\n}\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Customer.kt"',children:'@Entity\ninterface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinColumn(name = "ADDRESS_ID")\n    val address: Address\n\n    ...Omit other code... \n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The foreign key can be real or fake. Fake foreign keys are discussed in subsequent documents. Here we assume the foreign key is real, so the corresponding constraint in the database is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// If foreign key pointing to associated entity is real, create foreign key constraint\nalter table CUSTOMER\n    add constraint FK_CUSTOMER__ADDRESS\n        /* highlight-next-line */\n        foreign key(ADDRESS_ID)\n            references ADDRESS(ID);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-based-on-join-table",children:"2. Based on Join Table"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Customer.java" ',children:"@Entity\npublic interface Customer {\n\n    @Nullable\n    @OneToOne\n    // highlight-next-line  \n    @JoinTable\n    Address address();\n\n    ...\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Customer.kt"',children:"@Entity\ninterface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinTable\n    val address: Address?\n\n    ...\n}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Here, no properties are specified for ",(0,s.jsx)(n.code,{children:"@JoinTable"}),". Jimmer will deduce the column names corresponding to the ",(0,s.jsx)(n.code,{children:"address"})," property based on the ",(0,s.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the default ",(0,s.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"})," is not overridden by the user, the deduced join table information is:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Join table name: CUSTOMER_ADDRESS_MAPPING"}),"\n",(0,s.jsx)(n.li,{children:"Join table foreign key column pointing to current entity: CUSTOMER_ID"}),"\n",(0,s.jsx)(n.li,{children:"Join table foreign key column pointing to associated entity: ADDRESS_ID"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So the previous code is equivalent to:"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Customer.java"',children:'@Entity\npublic interface Customer {\n\n    @Nullable\n    @OneToOne\n    @JoinTable(\n        /* highlight-start */\n        name = "CUSTOMER_ADDRESS_MAPPING",\n        joinColumnName = "CUSTOMER_ID",\n        inverseJoinColumnName = "ADDRESS_ID"\n        /* highlight-end */  \n    )\n    Address address();\n\n    ...\n}\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Customer.kt" ',children:'@Entity\ninterface Customer {\n\n    @OneToOne\n    @JoinTable(\n        /* highlight-start */\n        name = "CUSTOMER_ADDRESS_MAPPING",\n        joinColumnName = "CUSTOMER_ID",\n        inverseJoinColumnName = "ADDRESS_ID"\n        /* highlight-end */\n    )\n    val address: Address?\n\n    ...\n}\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The join table ",(0,s.jsx)(n.code,{children:"CUSTOMER_ADDRESS_MAPPING"})," is defined as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"create table CUSTOMER_ADDRESS_MAPPING(\n    CUSTOMER_ID bigint not null,\n    ADDRESS_ID bigint not null\n);\n\nalter table ADDRESS_MAPPING\n    add constraint PK_ADDRESS_MAPPING\n        primary(CUSTOMER_ID, ADDRESS_ID);\n\n// If foreign key pointing to current entity is real, \n// create foreign key constraint\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint FK_CUSTOMER_ADDRESS_MAPPING__CUSTOMER\n        foreign key(CUSTOMER_ID)\n            references CUSTOMER(ID); \n\n// If foreign key pointing to associated entity is real, \n// create foreign key constraint  \nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint FK_CUSTOMER_ADDRESS_MAPPING__ADDRESS\n        foreign key(ADDRESS_ID)\n            references ADDRESS(ID);\n\n// These two constraints are very important.\n// Otherwise this join table expresses a many-to-many association \n// rather than a one-to-one association\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint UQ_CUSTOMER_ADDRESS_MAPPING__CUSTOMER_ID\n        unique(CUSTOMER_ID);\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint UQ_CUSTOMER_ADDRESS_MAPPING__ADDRESS_ID\n        unique(ADDRESS_ID);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The join table has only two foreign keys, both non-null. The join table maintains the association by inserting and deleting data, never storing null data itself."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The join table has no corresponding ORM entity and does not need an independent primary key. The two foreign keys combined can serve as the primary key."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"By default, the join table represents a many-to-many association. To degrade it to a one-to-one association, a unique constraint must be specified for each foreign key of the join table."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Unless for compatibility with existing database design, one-to-one associations are recommended to directly use foreign keys instead of join tables."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once a one-to-one association is mapped using a join table, the Jimmer association property must be nullable, because the database cannot guarantee that any entity must have corresponding data in the join table."}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"inverse-side",children:"Inverse Side"}),"\n",(0,s.jsxs)(n.p,{children:["The configuration of the inverse side is very simple: just specify that ",(0,s.jsx)(n.code,{children:"Address.customer"})," is the mirror of ",(0,s.jsx)(n.code,{children:"Customer.address"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In the following code:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Left: The owning side discussed in the previous section"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Right: The inverse side association ",(0,s.jsx)(n.code,{children:"Address.customer"})," introduced in this section, which is the mirror of ",(0,s.jsx)(n.code,{children:"Customer.address"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here, ",(0,s.jsx)(n.code,{children:'@OneToOne(mappedBy = "address")'})," indicates that the current property ",(0,s.jsx)(n.code,{children:"Address.customer"})," is the mirror of ",(0,s.jsx)(n.code,{children:"Customer.address"}),"."]}),"\n",(0,s.jsxs)("div",{style:{display:"flex",alignItems:"start"},children:[(0,s.jsx)("div",{children:(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Customer.java"',children:'@Entity\npublic interface Customer {\n\n    @OneToOne\n    @JoinColumn(name = "ADDRESS_ID") \n    Address address();\n\n    ...Omit other code...\n}\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Customer.kt" ',children:'@Entity\ninterface Customer {\n\n    @OneToOne\n    @JoinColumn(name = "ADDRESS_ID")\n    val address: Address\n\n    ...Omit other code...\n}\n'})})})]})}),(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"mirror",src:i(34439).A+"",width:"130",height:"239"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Address.java"  ',children:'@Entity\npublic interface Address {\n\n    // `mappedBy` indicates `Address.customer` \n    // is the mirror of `Customer.address`\n    // highlight-next-line\n    @OneToOne(mappedBy = "address")\n    @Nullable\n    Customer customer();\n\n    ...Omit other code...\n}\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Address.kt"',children:'@Entity\ninterface Address {\n\n    // `mappedBy` indicates `Address.customer`\n    // is the mirror of `Customer.address` \n    // highlight-next-line\n    @OneToOne(mappedBy = "address")\n    val customer: Customer?\n\n    ...Omit other code...\n} \n'})})})]})})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once the ",(0,s.jsx)(n.code,{children:"mappedBy"})," property of ",(0,s.jsx)(n.code,{children:"@OneToOne"})," is specified, annotations like ",(0,s.jsx)(n.code,{children:"@JoinColumn"})," and ",(0,s.jsx)(n.code,{children:"@JoinTable"})," must not be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The one-to-one association property as the inverse side must be nullable."}),"\n"]}),"\n"]})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var t=i(34164);const s={tabItem:"tabItem_Ymn6"};var a=i(74848);function r(e){let{children:n,hidden:i,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,r),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>v});var t=i(96540),s=i(34164),a=i(23104),r=i(56347),o=i(205),l=i(57485),d=i(31682),c=i(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:s}}=e;return{value:n,label:i,attributes:t,default:s}}))}(i);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const s=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:s}=e,a=h(e),[r,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,u]=p({queryString:i,groupId:s}),[g,j]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(i);return[s,(0,t.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:s}),b=(()=>{const e=d??g;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(74848);function I(e){let{className:n,block:i,selectedValue:t,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,i=l.indexOf(n),s=o[i].value;s!==t&&(d(n),r(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function f(e){let{lazy:n,children:i,selectedValue:a}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function D(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(I,{...n,...e}),(0,x.jsx)(f,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,x.jsx)(D,{...e,children:u(e.children)},String(n))}},34439:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);