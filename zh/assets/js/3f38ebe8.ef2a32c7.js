"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8307],{66819:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"object/visibility","title":"\u53ef\u89c1\u6027","description":"\u4e4b\u524d\u6587\u6863\u5df2\u7ecf\u8be6\u7ec6\u8ba8\u8bba\u4e86Jimmer\u5c5e\u6027\u7684\u52a8\u6001\u6027\u548c\u4e0d\u53ef\u53d8\u6027\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u65b0\u7684\u7279\u6027\uff1a\u53ef\u89c1\u6027\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/object/visibility.mdx","sourceDirName":"object","slug":"/object/visibility","permalink":"/jimmer-doc/zh/docs/object/visibility","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/object/visibility.mdx","tags":[],"version":"current","lastUpdatedAt":1741228772000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"\u53ef\u89c1\u6027"},"sidebar":"tutorialSidebar","previous":{"title":"MapStruct","permalink":"/jimmer-doc/zh/docs/object/view/mapstruct"},"next":{"title":"\u5de5\u5177\u65b9\u6cd5","permalink":"/jimmer-doc/zh/docs/object/tool"}}');var i=r(74848),t=r(28453),a=r(11470),s=r(19365);const o={sidebar_position:6,title:"\u53ef\u89c1\u6027"},c=void 0,d={},u=[{value:"\u7ea0\u7f20\u5c5e\u6027",id:"\u7ea0\u7f20\u5c5e\u6027",level:2},{value:"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027",id:"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027",level:2},{value:"\u5c5e\u6027\u53ef\u89c1\u6027",id:"\u5c5e\u6027\u53ef\u89c1\u6027",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u4e4b\u524d\u6587\u6863\u5df2\u7ecf\u8be6\u7ec6\u8ba8\u8bba\u4e86Jimmer\u5c5e\u6027\u7684",(0,i.jsx)(n.a,{href:"./dynamic",children:"\u52a8\u6001\u6027"}),"\u548c",(0,i.jsx)(n.a,{href:"./immutable",children:"\u4e0d\u53ef\u53d8\u6027"}),"\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u65b0\u7684\u7279\u6027\uff1a\u53ef\u89c1\u6027\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ea0\u7f20\u5c5e\u6027",children:"\u7ea0\u7f20\u5c5e\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8eJimmer\u5b9e\u4f53\u800c\u8a00\uff0c\u867d\u7136\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u5c5e\u6027\u4e4b\u95f4\u662f\u5f7c\u6b64\u72ec\u7acb\u7684\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u60c5\u51b5\uff0c\u591a\u4e2a\u5c5e\u6027\u4f1a\u5171\u4eab\u540c\u4e00\u4efd\u79c1\u6709\u6570\u636e\uff0c\u4ece\u800c\u5bfc\u81f4\u5f7c\u6b64\u5f71\u54cd\u3002\u6211\u4eec\u79f0\u591a\u4e2a\u5c5e\u6027\u4e4b\u95f4\u4ea7\u751f\u4e86\u7ea0\u7f20\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e9b\u60c5\u51b5\u5305\u62ec"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u5c5e\u6027 ",(0,i.jsxs)(n.em,{children:["(",(0,i.jsx)(n.a,{href:"../mapping/advanced/calculated/formula#1-%E5%9F%BA%E4%BA%8Ejavakotlin%E7%9A%84%E8%AE%A1%E7%AE%97",children:"\u56de\u987e\u6240\u6709\u7ec6\u8282"}),")"]})]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    String firstName();\n\n    String lastName();\n\n    // highlight-next-line\n    @Formula(dependencies = {"firstName", "lastName"})\n    default String fullName() {\n        return firstName() + \' \' + lastName();\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    val firstName: String\n\n    val lastName: String\n\n    // highlight-next-line\n    @Formula(dependencies = ["firstName", "lastName"])\n    val fullName: String\n        get() = "$firstName $lastName"\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Author.fullName"}),"\u5c5e\u6027\u53ea\u662f\u4e00\u4e2a\u8ba1\u7b97\u89c4\u5219\uff0c\u5e76\u6ca1\u6709\u81ea\u5df1\u7684\u79c1\u6709\u6570\u636e\u3002\u5b83\u4f9d\u8d56\u4e8e",(0,i.jsx)(n.code,{children:"Author.firstName"}),"\u548c",(0,i.jsx)(n.code,{children:"Author.lastName"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u867d\u7136",(0,i.jsx)(n.code,{children:"Author.fullName"}),"\u8fd9\u79cd\u57fa\u4e8eJava/Kotlin\u8ba1\u7b97\u89c4\u5219\u7684\u5c5e\u6027\u88ab\u5b9a\u4e49\u4e3a\u8ba1\u7b97\u5c5e\u6027\uff0c\u4f46\u662f\u6362\u4e00\u4e2a\u601d\u8003\u89d2\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u8ba4\u4e3a\u5b83\u662f\u89c6\u56fe\u5c5e\u6027\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u5c06",(0,i.jsx)(n.code,{children:"Author.firstName"}),"\u548c",(0,i.jsx)(n.code,{children:"Author.lastName"}),"\u7684\u89c6\u4e3a\u539f\u59cb\u5c5e\u6027\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u8ba4\u4e3a",(0,i.jsx)(n.code,{children:"Author.fullName"}),"\u662f\u57fa\u4e8e\u5b83\u4eec\u7684\u89c6\u56fe\u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["@IdView\u89c6\u56fe\u5c5e\u6027 ",(0,i.jsxs)(n.em,{children:["(",(0,i.jsx)(n.a,{href:"../mapping/advanced/view/id-view",children:"\u56de\u987e\u6240\u6709\u7ec6\u8282"}),")"]})]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    Long storeId();\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    List<Long> authorIds();\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    val storeId: Long?\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    val authorIds: List<Long>\n}\n'})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Book.store"}),"\u662f\u539f\u59cb\u5c5e\u6027\uff0c",(0,i.jsx)(n.code,{children:"Book.storeId"}),"\u662f\u57fa\u4e8e\u5b83\u4eec\u7684\u89c6\u56fe\u5c5e\u6027"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Book.authors"}),"\u662f\u539f\u59cb\u5c5e\u6027\uff0c",(0,i.jsx)(n.code,{children:"Book.authorIds"}),"\u662f\u57fa\u4e8e\u5b83\u4eec\u7684\u89c6\u56fe\u5c5e\u6027"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["@ManyToManyView\u89c6\u56fe\u5c5e\u6027 ",(0,i.jsxs)(n.em,{children:["(",(0,i.jsx)(n.a,{href:"../mapping/advanced/view/many-to-many-view",children:"\u56de\u987e\u6240\u6709\u7ec6\u8282"}),")"]})]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Student.java"',children:'@Entity\npublic interface Student {\n\n    // \u7b2c\u4e00\u6b65\u4e2d\uff0c\u5df2\u7ecf\u58f0\u660e\u4e86\u4e00\u5bf9\u591a\u5173\u8054`learningLinks`\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"\n    )\n    \n    List<Course> courses();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Student.kt"',children:'@Entity\ninterface Student {\n\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"\n    )\n    val courses: List<Course>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Student.learningLinks"}),"\u662f\u539f\u59cb\u5c5e\u6027\uff0c",(0,i.jsx)(n.code,{children:"Student.courses"}),"\u662f\u57fa\u4e8e\u5b83\u7684\u89c6\u56fe\u5c5e\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u8fd9\u7c7b\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u603b\u7ed3\u51fa\u5171\u540c\u7279\u70b9\uff0c\u5b58\u5728\u539f\u59cb\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u539f\u59cb\u5c5e\u6027\u5177\u5907\u81ea\u5df1\u7684\u79c1\u6709\u6570\u636e\uff0c\u800c\u89c6\u56fe\u5c5e\u6027\u6ca1\u6709\uff0c\u5b83\u53ea\u662f\u6362\u7528\u53e6\u5916\u4e00\u4e2a\u89c6\u89d2\u89c2\u5bdf\u539f\u59cb\u5c5e\u6027\u7684\u503c\u800c\u5df2\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u5185\u90e8\u5b9e\u73b0\u673a\u5236\u7684\u5c42\u9762\u8bb2\uff0c\u89c6\u56fe\u5c5e\u6027\u5176\u5b9e\u548c\u539f\u59cb\u5c5e\u6027\u5171\u4eab\u540c\u4e00\u4efd\u79c1\u6709\u6570\u636e\u3002\u8fd9\u8868\u793a\uff0c\u77e5\u9053\u5176\u4e2d\u4e00\u4e2a\u7684\u503c\uff0c\u5fc5\u7136\u77e5\u9053\u53e6\u5916\u4e00\u4e2a\u503c\u7684\u90e8\u5206\u4fe1\u606f\uff0c\u56e0\u6b64\uff0c\u53ef\u4ee5\u5f62\u8c61\u5730\u79f0\u5b83\u4eec\u4e3a\u7ea0\u7f20\u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027",children:"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u4e4b\u524d\u6211\u4eec\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u7ea0\u7f20\u5c5e\u6027\uff0c\u6709\u539f\u59cb\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u3002\u771f\u6b63\u7684\u6570\u636e\u88ab\u539f\u59cb\u6570\u636e\u6301\u6709\uff0c\u89c6\u56fe\u5c5e\u6027\u53ea\u6709\u4e00\u4e2a\u89c2\u5bdf\u8005\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u5728\u5229\u7528",(0,i.jsx)(n.a,{href:"../query/object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u6293\u53d6\u89c6\u56fe\u5c5e\u6027\uff0c\u5176\u5185\u90e8\u903b\u8f91\u4f1a\u5c06\u4e4b\u6362\u8f6c\u5316\u4e3a\u5bf9\u539f\u59cb\u5c5e\u6027\u7684\u6293\u53d6\uff0c\u4f8b\u5982"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6293\u53d6",(0,i.jsx)(n.code,{children:"Author.fullName"}),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,i.jsx)(n.code,{children:"Author.firstName"}),"\u548c",(0,i.jsx)(n.code,{children:"Author.lastName"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6293\u53d6",(0,i.jsx)(n.code,{children:"Book.storeId"}),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,i.jsx)(n.code,{children:"Book.store"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6293\u53d6",(0,i.jsx)(n.code,{children:"Book.authorIds"}),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,i.jsx)(n.code,{children:"Book.authors"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6293\u53d6",(0,i.jsx)(n.code,{children:"Student.courses"}),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,i.jsx)(n.code,{children:"Student.learningLinks"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u4ece\u4e2d\u9009\u53d6",(0,i.jsx)(n.code,{children:"Book.authorIds"}),"\u548c",(0,i.jsx)(n.code,{children:"Book.authors"}),"\uff0c\u6765\u5c55\u793a",(0,i.jsx)(n.a,{href:"../query/object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u5bf9\u539f\u59cb\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7684\u5904\u7406\u6709\u4f55\u4e0d\u540c"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6293\u53d6\u539f\u59cb\u5c5e\u6027"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authors(), // \u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\n    1L\n);\nSystem.out.println(book);\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authors() // \u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\n    },\n    1L\n)\nprintln(book)\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u8c61\u6293\u53d6\u5668\u4e2d\u7684",(0,i.jsx)(n.code,{children:"authors()"}),"\u6ca1\u6709\u4efb\u4f55\u53c2\u6570\uff0c\u8868\u793a\u662f\u6293\u53d6\u53ea\u6709id\u5c5e\u6027\u7684author\u5bf9\u8c61\u7684\u96c6\u5408\uff0c\u7ed3\u679c\u5982\u4e0b ",(0,i.jsx)(n.em,{children:"(\u4e3a\u63d0\u9ad8\u672c\u6587\u53ef\u8bfb\u6027\uff0c\u4eba\u4e3a\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50,\n    "authors":[\n        // highlight-next-line\n        { "id":2 },\n        // highlight-next-line\n        { "id":1 }\n    ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6293\u53d6\u89c6\u56fe\u5c5e\u6027"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authorIds(), // \u5173\u8054id\uff0c\u4e0d\u662f\u5bf9\u8c61\n    1L\n);\nSystem.out.println(book);\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authorIds() // \u5173\u8054id\uff0c\u4e0d\u662f\u5bf9\u8c61\n    },\n    1L\n)\nprintln(book)\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u6b21\u7ed3\u679c\u4e3a ",(0,i.jsx)(n.em,{children:"(\u4e3a\u63d0\u9ad8\u672c\u6587\u53ef\u8bfb\u6027\uff0c\u4eba\u4e3a\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50,\n    "authorIds":[\n        // highlight-next-line\n        2, 1\n    ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u867d\u7136\u4e24\u6b21\u67e5\u8be2\u8fd4\u56de\u7684\u6570\u636e\u662f\u7b49\u4ef7\u7684\uff0c\u4f46\u683c\u5f0f\u5b8c\u5168\u4e0d\u540c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u524d\u9762\u8bf4\u8fc7\uff0c",(0,i.jsx)(n.a,{href:"../query/object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u6293\u53d6\u89c6\u56fe\u5c5e\u6027\uff0c\u5176\u5185\u90e8\u903b\u8f91\u4f1a\u5c06\u4e4b\u6362\u8f6c\u5316\u4e3a\u5bf9\u539f\u59cb\u5c5e\u6027\u7684\u6293\u53d6\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u65e2\u7136\u5982\u6b64\uff0c\u4e8c\u8005\u5e95\u5c42\u903b\u8f91\u5e94\u8be5\u5b8c\u5168\u4e00\u6837\uff0c\u8fd9\u79cd\u5dee\u5f02\u4ece\u4f55\u800c\u6765\uff1f"}),"\n",(0,i.jsx)(n.h2,{id:"\u5c5e\u6027\u53ef\u89c1\u6027",children:"\u5c5e\u6027\u53ef\u89c1\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u524d\u9762\u63d0\u51fa\u4e00\u4e2a\u4e00\u4e2a\u95ee\u9898\uff0c\u5e95\u5c42\u903b\u8f91\u5b8c\u5168\u4e00\u6837\u7684\u4e24\u6b21\u67e5\u8be2\uff0c\u4e3a\u4ec0\u4e48\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f\u6709\u5dee\u5f02\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Jimmer\u53ef\u4ee5\u63a7\u5236\u6bcf\u4e2a\u5c5e\u6027\u7684\u53ef\u89c1\u6027\uff0c\u8ba9\u5176\u663e\u793a\u6216\u9690\u85cf\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u548c",(0,i.jsx)(n.a,{href:"./dynamic",children:"\u52a8\u6001\u6027"}),"\u4e2d\u63d0\u53ca\u7684\u5c5e\u6027\u53ef\u4ee5\u5177\u5907\u5df2\u52a0\u8f7d\u548c\u672a\u52a0\u8f7d\u4e24\u79cd\u72b6\u6001\u4e0d\u540c\uff0c\u53ef\u89c1\u6027\u662f\u53e6\u5916\u4e00\u4e2a\u7eac\u5ea6\u7684\u7279\u6027\uff0c\u548c\u52a8\u6001\u6027\u6beb\u65e0\u5173\u7cfb\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u89c1\u6027\u4ec5\u4ec5\u5f71\u54cd\u5bf9\u8c61\u7684",(0,i.jsx)(n.a,{href:"./jackson",children:"Jackson\u5e8f\u5217\u5316"})," ",(0,i.jsx)(n.em,{children:"(\u5305\u62ec\u5bf9\u8c61\u81ea\u5df1\u7684toString\u884c\u4e3a)"}),"\uff0c\u51b3\u5b9a\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u5426\u88ab\u5e8f\u5217\u5316\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5bf9\u8c61\u7684\u5176\u4ed6\u4efb\u4f55\u884c\u4e3a\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u4e4b\u524d\u4f8b\u5b50\u5c31\u5f88\u5bb9\u6613\u89e3\u91ca\u4e86"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b21\u67e5\u8be2\uff1a",(0,i.jsx)(n.code,{children:"Book.authors"}),"\u88ab\u663e\u793a\uff0c",(0,i.jsx)(n.code,{children:"Book.authorIds"}),"\u88ab\u9690\u85cf"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e8c\u6b21\u67e5\u8be2\uff1a",(0,i.jsx)(n.code,{children:"Book.authors"}),"\u88ab\u9690\u85cf\uff0c",(0,i.jsx)(n.code,{children:"Book.authorIds"}),"\u88ab\u663e\u793a"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"\u53ea\u6709\u4e0b\u9762\u4e24\u4e2a\u6761\u4ef6\u540c\u65f6\u6ee1\u8db3\u65f6\uff0c\u5c5e\u6027\u624d\u4f1a\u53c2\u4e0eJackson\u5e8f\u5217\u5316"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u52a8\u6001\u6027\uff1a\u5c5e\u6027\u88ab\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u89c1\u6027\uff1a\u5c5e\u6027\u88ab\u663e\u793a"}),"\n"]}),(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u53c2\u8003",(0,i.jsx)(n.a,{href:"./tool",children:"\u5de5\u5177\u65b9\u6cd5"}),"\uff0c\u4e86\u89e3\u5982\u4f55\u81ea\u5df1\u63a7\u5236Jimmer\u5bf9\u8c61\u5c5e\u6027\u7684\u53ef\u89c1\u6027"]})]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var l=r(34164);const i={tabItem:"tabItem_Ymn6"};var t=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(i.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var l=r(96540),i=r(34164),t=r(23104),a=r(56347),s=r(205),o=r(57485),c=r(31682),d=r(70679);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:i}}=e;return{value:n,label:r,attributes:l,default:i}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function j(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const i=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,t=h(e),[a,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[c,u]=x({queryString:r,groupId:i}),[m,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Dv)(r);return[i,(0,l.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:i}),g=(()=>{const e=c??m;return j({value:e,tabValues:t})?e:null})();(0,s.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,t]),tabValues:t}}var p=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function f(e){let{className:n,block:r,selectedValue:l,selectValue:a,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),i=s[r].value;i!==l&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...t,className:(0,i.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,p.A)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var l=r(96540);const i={},t=l.createContext(i);function a(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);