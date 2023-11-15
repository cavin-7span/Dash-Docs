"use strict";(self.webpackChunkboilerplate_docs=self.webpackChunkboilerplate_docs||[]).push([[857],{3810:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=i(5893),t=i(1151);const o={sidebar_position:2,description:"Configure your App's Environment Variables"},s="Configure Environment Variables",l={id:"tutorial-basics/configuring-environment-variables",title:"Configure Environment Variables",description:"Configure your App's Environment Variables",source:"@site/docs/tutorial-basics/configuring-environment-variables.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/configuring-environment-variables",permalink:"/Dash-Docs/docs/tutorial-basics/configuring-environment-variables",draft:!1,unlisted:!1,editUrl:"#/docs/tutorial-basics/configuring-environment-variables.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Configure your App's Environment Variables"},sidebar:"tutorialSidebar",previous:{title:"Boilerplate Essentials",permalink:"/Dash-Docs/docs/tutorial-basics/folder-structure"},next:{title:"Routing",permalink:"/Dash-Docs/docs/tutorial-basics/router"}},a={},d=[{value:"1. Configure default environment variables:",id:"1-configure-default-environment-variables",level:2},{value:"2. Adding your own environment variables:",id:"2-adding-your-own-environment-variables",level:2},{value:"3. Bonus \ud83d\udc99",id:"3-bonus-",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-environment-variables",children:"Configure Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["We're using ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/envied",children:(0,r.jsx)(n.code,{children:"envied"})})," package for the environment variables since it encryptes every key values inside your ",(0,r.jsx)(n.code,{children:".env"})," files. By default, the Dart side of the environment files will be already given for your ",(0,r.jsx)(n.strong,{children:"Base API URL"})," and ",(0,r.jsx)(n.strong,{children:"environment name"}),". But you will need to create the ",(0,r.jsx)(n.code,{children:".env"})," files in order to utilize it in your Flutter App."]}),"\n",(0,r.jsx)(n.h2,{id:"1-configure-default-environment-variables",children:"1. Configure default environment variables:"}),"\n",(0,r.jsx)(n.p,{children:"To configure environment variables inside your Flutter project, Follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create 2 files at the ",(0,r.jsx)(n.strong,{children:"root level"})," of your project and name like this:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".env.dev"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".env.prod"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Now, Add this 2 variables inside both env files like this:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",metastring:'jsx title=".env.dev"',children:"BASE_API_URL=YOUR API URL\nENV=Development\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["ENV key for ",(0,r.jsx)(n.code,{children:".env.dev"})," will be ",(0,r.jsx)(n.strong,{children:"Development"})," but it will be ",(0,r.jsx)(n.strong,{children:"Production"})," for ",(0,r.jsx)(n.code,{children:".env.prod"})]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Don't commit your .env file to a (public/private) repository."})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Now run the Flutter Build Runner command in order to generate your encrypted environment variables."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-zsh",children:"dart run build_runner build\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-adding-your-own-environment-variables",children:"2. Adding your own environment variables:"}),"\n",(0,r.jsx)(n.p,{children:"Adding your own environment variables is as easy as defining it. To add your own environment variables, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add your variables in the ",(0,r.jsx)(n.code,{children:".env"})," files. Let's say you want to add ",(0,r.jsx)(n.code,{children:"PATH"})," variable for only ",(0,r.jsx)(n.code,{children:".env.dev"}),", then you will do it like this:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",metastring:'jsx title=".env.dev"',children:"BASE_API_URL=https://jsonplaceholder.typicode.com/\nENV=Development\nPATH=Home\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Now, Go to ",(0,r.jsx)(n.code,{children:"app_config.dart"})," inside the ",(0,r.jsx)(n.code,{children:"lib -> app -> config"}),". There will be am abstract class called ",(0,r.jsx)(n.code,{children:"EnvDev"}),". Add your ",(0,r.jsx)(n.code,{children:"PATH"})," variable like this:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'jsx title="app_config.dart"',children:"@Envied(path: '.env.dev')\nabstract class EnvDev {\n  @EnviedField(varName: 'BASE_API_URL', obfuscate: true)\n  static final String ENV_BASE_API_URL = _EnvDev.ENV_BASE_API_URL;\n  @EnviedField(varName: 'ENV', obfuscate: true)\n  static final String ENV_NAME = _EnvDev.ENV_NAME;\n  @EnviedField(varName: 'PATH', obfuscate: true)\n  static final String ENV_PATH = _EnvDev.ENV_PATH;\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Now run the Flutter Build Runner command in order to generate your encrypted environment variables."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dart run build_runner build\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["The last step is to create the ",(0,r.jsx)(n.strong,{children:"getters"})," for the variable. You can look into the implementation of other getter variables inside the ",(0,r.jsx)(n.code,{children:"app_config.dart"})," file in order to implement it."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-bonus-",children:"3. Bonus \ud83d\udc99"}),"\n",(0,r.jsx)(n.p,{children:"If you ever have to render a widget based on the environment, then you can do it like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'jsx title="app-screen.dart"',children:"/// Here you can take any env, for this demo we're taking `development`\nif (AppConfig.environment==Env.development) {\n    ....\n  }\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var r=i(7294);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);