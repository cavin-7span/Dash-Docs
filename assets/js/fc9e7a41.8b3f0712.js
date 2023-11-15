"use strict";(self.webpackChunkboilerplate_docs=self.webpackChunkboilerplate_docs||[]).push([[1562],{2473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(5893),r=n(1151);const i={sidebar_position:3,description:"Configure your App's routes",title:"Routing"},s="Introduction",a={id:"tutorial-basics/router",title:"Routing",description:"Configure your App's routes",source:"@site/docs/tutorial-basics/router.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/router",permalink:"/Dash-Docs/docs/tutorial-basics/router",draft:!1,unlisted:!1,editUrl:"#/docs/tutorial-basics/router.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Configure your App's routes",title:"Routing"},sidebar:"tutorialSidebar",previous:{title:"Configure Environment Variables",permalink:"/Dash-Docs/docs/tutorial-basics/configuring-environment-variables"},next:{title:"Implementing a Feature",permalink:"/Dash-Docs/docs/tutorial-basics/implementing-a-feature"}},u={},c=[{value:"1. Annotating the screen",id:"1-annotating-the-screen",level:2},{value:"2. Adding the route in <code>app_router.dart</code>",id:"2-adding-the-route-in-app_routerdart",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["We're using ",(0,o.jsx)(t.a,{href:"https://pub.dev/packages/auto_route",children:(0,o.jsx)(t.code,{children:"auto_route"})})," package for the routing. They helps us to use the newer ",(0,o.jsx)(t.code,{children:"Navigator 2.0"})," API while keeping the learning curve as much low as possible. The boilerplate comes with the routing setup out of the box. Thus, this guide will help you to create your own routes."]}),"\n",(0,o.jsx)(t.p,{children:"Follow the steps for creating your own routes in the project:"}),"\n",(0,o.jsx)(t.h2,{id:"1-annotating-the-screen",children:"1. Annotating the screen"}),"\n",(0,o.jsxs)(t.p,{children:["Let's say you're creating a ",(0,o.jsx)(t.code,{children:"HomeScreen"})," widget and you want to add that in your routes. The code should look something like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:'jsx title="home-screen.dart"',children:"    class HomeScreen extends StatelessWidget {\n    const HomeScreen({super.key});\n\n    @override\n    Widget build(BuildContext context) {\n        return ...your code;\n    }\n    }\n"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Import the Auto Route package into your file:"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"import 'package:auto_route/auto_route.dart';"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["Annotate your Widget by ",(0,o.jsx)(t.strong,{children:"@RoutePage()"})," like this:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:'jsx title="home-screen.dart" {1}',children:"    @RoutePage()\n    class HomeScreen extends StatelessWidget {\n    const HomeScreen({super.key});\n\n    @override\n    Widget build(BuildContext context) {\n        return ...your code;\n    }\n    }\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["Make sure that your Screen's name is either ending with ",(0,o.jsx)(t.code,{children:"Page"})," or ",(0,o.jsx)(t.code,{children:"Screen"}),". (E.g HomeScreen, HomePage)"]})}),"\n",(0,o.jsxs)(t.h2,{id:"2-adding-the-route-in-app_routerdart",children:["2. Adding the route in ",(0,o.jsx)(t.code,{children:"app_router.dart"})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Add your route in ",(0,o.jsx)(t.code,{children:"app_router.dart"})," like this:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:'jsx title="app_router.dart" {12}',children:"@AutoRouterConfig(replaceInRouteName: 'Page|Screen,Route')\nclass AppRouter extends _$AppRouter {\n  @override\n  List<AutoRoute> get routes => [\n        AutoRoute(\n          initial: true,\n          page: SplashRoute.page,\n          guards: [\n            AuthGuard(),\n          ],\n        ),\n        AutoRoute(page: HomeRoute.page),\n      ];\n}\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["Finally, run the ",(0,o.jsx)(t.code,{children:"build_runner"})," command to generate the routes."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-zsh",children:"dart run build_runner build\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If you want to learn more about ",(0,o.jsx)(t.code,{children:"Auto Route"}),", then you can read Cavin's Blogs series on ",(0,o.jsx)(t.a,{href:"https://medium.com/@CavinMac/list/auto-route-in-flutter-105bbe608e12",children:"Auto Route"}),"."]})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);