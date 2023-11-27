"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[948],{96800:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return a}});var t=r(85893),o=r(11151);const i={title:"Working with Containers"},s=void 0,c={id:"tutorials/working-with-containers",title:"Working with Containers",description:"nerdctl is a Docker-compatible CLI for containerd. The primary goal of nerdctl is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.",source:"@site/docs/tutorials/working-with-containers.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-containers",permalink:"/next/tutorials/working-with-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/tutorials/working-with-containers.md",tags:[],version:"current",frontMatter:{title:"Working with Containers"},sidebar:"tutorialSidebar",previous:{title:"Working with Images",permalink:"/next/tutorials/working-with-images"},next:{title:"Using Persistent Storage",permalink:"/next/tutorials/using-persistent-storage"}},d={},a=[{value:"Running Containers",id:"running-containers",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Exposing a Port",id:"exposing-a-port",level:2},{value:"Exposing the port of a running container",id:"exposing-the-port-of-a-running-container",level:3},{value:"Targeting a Kubernetes Namespace",id:"targeting-a-kubernetes-namespace",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Head:r,TabItem:i,Tabs:s}=n;return r||u("Head",!0),i||u("TabItem",!0),s||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/tutorials/working-with-containers"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"nerdctl"})," is a Docker-compatible CLI for containerd. The primary goal of ",(0,t.jsx)(n.code,{children:"nerdctl"})," is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/moby/moby",children:"Moby"})," is an open-source project that was created by Docker to enable and accelerate software containerization. Components include container build tools, a container registry, orchestration tools, and a runtime, and more. The Docker CLI uses the Moby runtime."]}),"\n",(0,t.jsx)(n.h2,{id:"running-containers",children:"Running Containers"}),"\n",(0,t.jsxs)(n.p,{children:["To run a container with the default ",(0,t.jsx)(n.code,{children:"bridge"})," CNI network (10.4.0.0/24):"]}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl run -it --rm alpine\n"})})}),(0,t.jsx)(i,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run -it --rm alpine\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"To build an image using BuildKit:"}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl build -t foo /some-dockerfile-directory\nnerdctl run -it --rm foo\n"})})}),(0,t.jsx)(i,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker build -t foo /some-dockerfile-directory\ndocker run -it --rm foo\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"To build and send output to a local directory using BuiltKit:"}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl build -o type=local,dest=. /some-dockerfile-directory\n"})})}),(0,t.jsx)(i,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker build -o type=local,dest=. /some-dockerfile-directory\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,t.jsx)(n.p,{children:"Docker Compose is a tool for defining and running multi-container Docker applications."}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsxs)(i,{value:"nerdctl",default:!0,children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"nerdctl-compose"})," CLI is designed to be compatible with ",(0,t.jsx)(n.code,{children:"docker-compose"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl compose up -d\nnerdctl compose down\n"})})]}),(0,t.jsxs)(i,{value:"docker",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"compose"})," command in the Docker CLI supports most of the ",(0,t.jsx)(n.code,{children:"docker-compose"})," commands and flags. It is expected to be a drop-in replacement for ",(0,t.jsx)(n.code,{children:"docker-compose"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker compose up -d\ndocker compose down\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"exposing-a-port",children:"Exposing a Port"}),"\n",(0,t.jsx)(n.p,{children:"To expose port 8000 for a container:"}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl run -d -p 8000:80 nginx\n"})})}),(0,t.jsx)(i,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run -d -p 8000:80 nginx\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can then access the container via the browser here: ",(0,t.jsx)(n.a,{href:"http://localhost:8000/",children:"http://localhost:8000/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: By default the exposed ports are accessible on all network interfaces on macOS and Linux. However, on Windows, the exposed ports are currently only accessible through the localhost network interface (see issue ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180",children:"#1180"}),").  As a workaround, you can ",(0,t.jsxs)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200",children:["configure a ",(0,t.jsx)(n.code,{children:"portproxy"})," on the windows host"]})," to expose the port to additional network interfaces."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost\n"})}),"\n",(0,t.jsx)(n.h3,{id:"exposing-the-port-of-a-running-container",children:"Exposing the port of a running container"}),"\n",(0,t.jsxs)(n.p,{children:["If you forgot to expose the port as part of the ",(0,t.jsx)(n.code,{children:"run"})," command, you can follow the steps below to start a proxy container that forwards traffic to the original container. This hack helps you avoid restarting the container and is especially useful when dealing with containerized services with longer startup times. With full disclosure, this hack is based on the suggestions in this ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/19897743/exposing-a-port-on-a-live-docker-container",children:"stackoverflow discussion"})," and this ",(0,t.jsx)(n.a,{href:"https://iximiuz.com/en/posts/docker-publish-port-of-running-container/",children:"blog post"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Let's say you ran a container without publishing the port (by mistake)."}),"\n"]}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl run -d --name rd-nginx nginx\n"})})}),(0,t.jsx)(i,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run -d --name rd-nginx nginx\n"})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Set port variables to be used in the subsequent commands."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Powershell\n$HOST_PORT=8080\n$CONTAINER_PORT=80\n\n# Bash\nexport HOST_PORT=8080\nexport CONTAINER_PORT=80\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Get the container IP address. If you did not give a name to the container at the time of starting it, you can pass the container id in place of the container name ",(0,t.jsx)(n.code,{children:"rd-nginx"})," in the commands below."]}),"\n"]}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Powershell\n$CONTAINER_IP=$(nerdctl inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n\n# Bash\nexport CONTAINER_IP=$(nerdctl inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n"})})}),(0,t.jsx)(i,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Powershell\n$CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n\n# Bash\nexport CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n"})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Start a proxy container to forward traffic to the original container."}),"\n"]}),"\n",(0,t.jsxs)(s,{groupId:"container-runtime",children:[(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl run --rm -p ${HOST_PORT}:${CONTAINER_PORT} alpine/socat TCP-LISTEN:${CONTAINER_PORT},fork TCP-CONNECT:${CONTAINER_IP}:${CONTAINER_PORT}\n"})})}),(0,t.jsx)(i,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run --rm -p ${HOST_PORT}:${CONTAINER_PORT} alpine/socat TCP-LISTEN:${CONTAINER_PORT},fork TCP-CONNECT:${CONTAINER_IP}:${CONTAINER_PORT}\n"})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Once the proxy container is successfully run, you can access the NGINX server at ",(0,t.jsx)(n.code,{children:"localhost:8080"})," from your host machine."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"targeting-a-kubernetes-namespace",children:"Targeting a Kubernetes Namespace"}),"\n",(0,t.jsxs)(n.p,{children:["You may also target a Kubernetes namespace with the ",(0,t.jsx)(n.code,{children:"--namespace"})," parameter with ",(0,t.jsx)(n.code,{children:"containerd"}),". Please note that ",(0,t.jsx)(n.code,{children:"docker"})," doesn't use namespaces."]}),"\n",(0,t.jsx)(s,{groupId:"container-runtime",children:(0,t.jsx)(i,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app\nnerdctl --namespace k8s.io ps\n"})})})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var t=r(67294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);