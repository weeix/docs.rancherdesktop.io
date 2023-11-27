"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2174],{4391:function(e,n,o){o.r(n),o.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=o(85893),r=o(11151),s=o(74866),a=o(85162);const l={title:"Skaffold and Rancher Desktop"},i=void 0,c={id:"how-to-guides/skaffold-and-rancher-desktop",title:"Skaffold and Rancher Desktop",description:"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs here.",source:"@site/versioned_docs/version-1.6/how-to-guides/skaffold-and-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/skaffold-and-rancher-desktop",permalink:"/1.6/how-to-guides/skaffold-and-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/how-to-guides/skaffold-and-rancher-desktop.md",tags:[],version:"1.6",frontMatter:{title:"Skaffold and Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Rancher on Rancher Desktop",permalink:"/1.6/how-to-guides/rancher-on-rancher-desktop"},next:{title:"Provisioning Scripts",permalink:"/1.6/how-to-guides/provisioning-scripts"}},d={},u=[];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/skaffold-and-rancher-desktop"})}),"\n",(0,t.jsxs)(n.p,{children:["Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs ",(0,t.jsx)(n.a,{href:"https://skaffold.dev/docs/",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to demonstrate the steps to set up Skaffold with Rancher Desktop, a sample nodejs app example is provided within the Rancher Desktop docs repository ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["Important: Skaffold only works with ",(0,t.jsx)(n.code,{children:"dockerd"})," (Moby)."]})," Therefore, make sure to select your runtime as ",(0,t.jsx)(n.code,{children:"dockerd"})," from the ",(0,t.jsx)(n.strong,{children:"Kubernetes Settings"})," panel in the Rancher Desktop UI."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.a,{href:"https://skaffold.dev/docs/install/",children:"https://skaffold.dev/docs/install/"})," to install Skaffold."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Clone the ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git",children:"Rancher Desktop docs repository"})," and navigate to the ",(0,t.jsx)(n.code,{children:"express-sample"})," in a terminal as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd docs.rancherdesktop.io/assets/express-sample\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"skaffold init"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Per the ",(0,t.jsx)(n.a,{href:"https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization",children:"Skaffold docs"}),",",(0,t.jsx)(n.code,{children:"skaffold init"})," walks through your project directory and looks for any build configuration files such as ",(0,t.jsx)(n.code,{children:"Dockerfile"}),", ",(0,t.jsx)(n.code,{children:"build.gradle/pom.xml"}),", ",(0,t.jsx)(n.code,{children:"package.json"}),", ",(0,t.jsx)(n.code,{children:"requirements.txt"}),", or ",(0,t.jsx)(n.code,{children:"go.mod"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We will select ",(0,t.jsx)(n.code,{children:"Dockerfile"})," and ",(0,t.jsx)(n.code,{children:"package.json"})," in our example. This will generate the initial configuration file that you can modify as needed. When prompted, select ",(0,t.jsx)(n.code,{children:"yes"})," to write your config to ",(0,t.jsx)(n.code,{children:"skaffold.yaml"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your editor, review your ",(0,t.jsx)(n.code,{children:"app.js"})," and ",(0,t.jsx)(n.code,{children:"manifests.yaml"})," files. Note that in ",(0,t.jsx)(n.code,{children:"manifests.yaml"}),", you will have a deployment config as well as a service config. It is only necessary to have 1 ",(0,t.jsx)(n.code,{children:"replica"})," for testing purposes."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Back in your terminal, you'll notice that you will have two options: ",(0,t.jsx)(n.code,{children:"skaffold run"})," that lets you build and deploy, and ",(0,t.jsx)(n.code,{children:"skaffold dev"})," that allows you to enter development mode with auto-redeploy. We will use ",(0,t.jsx)(n.code,{children:"skaffold dev"})," in this example."]}),"\n",(0,t.jsx)(n.p,{children:"As you will need to have push access to the image repository, you can either use your docker login, or you can set up a local registry:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(a.Z,{value:"docker-hub",label:"Docker Hub",default:!0,children:(0,t.jsxs)(n.p,{children:["Before running ",(0,t.jsx)(n.code,{children:"skaffold dev"}),", use your docker login if you have a ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," account. Then, in the files ",(0,t.jsx)(n.code,{children:"skaffold.yaml"})," and ",(0,t.jsx)(n.code,{children:"manifests.yaml"})," replace ",(0,t.jsx)(n.code,{children:"matamagu/express-sample"})," for ",(0,t.jsx)(n.code,{children:"YOUR_DOCKER_HUB_USERNAME/express-sample"})," as ",(0,t.jsx)(n.code,{children:"skaffold dev"})," will push the built image to DockerHub."]})}),(0,t.jsxs)(a.Z,{value:"local-registry",label:"Local Registry",children:[(0,t.jsxs)(n.p,{children:["You can set up a local registry by first running this command:",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n"})}),(0,t.jsx)(n.p,{children:"Then:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"skaffold dev --default-repo=localhost:5000\n"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"As you go through your development, Skaffold will detect any changes and will automatically go through the build and deployment process again. You will be able to see any changes reflected in the cluster."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Point your web browser to ",(0,t.jsx)(n.code,{children:"localhost:3000"}),", and you will see the ",(0,t.jsx)(n.code,{children:"express-sample"})," screen."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,n,o){o.d(n,{Z:function(){return a}});o(67294);var t=o(34334),r={tabItem:"tabItem_Ymn6"},s=o(85893);function a(e){let{children:n,hidden:o,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:o,children:n})}},74866:function(e,n,o){o.d(n,{Z:function(){return v}});var t=o(67294),r=o(34334),s=o(12466),a=o(16550),l=o(20469),i=o(91980),c=o(67392),d=o(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:r}}=e;return{value:n,label:o,attributes:t,default:r}}))}(o);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function f(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const r=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,s=h(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=p({queryString:o,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(o);return[r,(0,t.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:r}),x=(()=>{const e=c??m;return f({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=o(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},k=o(85893);function g(e){let{className:n,block:o,selectedValue:t,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,o=i.indexOf(n),r=l[o].value;r!==t&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;n=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;n=i[o]??i[i.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},n),children:l.map((e=>{let{value:n,label:o,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function y(e){let{lazy:n,children:o,selectedValue:r}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=m(e);return(0,k.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,k.jsx)(g,{...e,...n}),(0,k.jsx)(y,{...e,...n})]})}function v(e){const n=(0,b.Z)();return(0,k.jsx)(j,{...e,children:u(e.children)},String(n))}},11151:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return a}});var t=o(67294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);