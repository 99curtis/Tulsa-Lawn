import{r as d,a as g,j as e,M as h,N as p,b as v,c as j,F as C}from"./index-9ewjYHld.js";import{b as k,a as S,C as w,c as N,d as R,e as L}from"./commercial6-BOFvFFm-.js";import{b as y,a as H,H as P,c as E,d as F,e as O}from"./hedgetrimming6-CATD_tK9.js";import{d as T,a as $,R as I,c as M,b as W,e as A}from"./residential6-D8ud7stS.js";import{L as B,a as D,b as J,c as X,d as q,e as z}from"./leafremoval6-BtpF9AJE.js";const o={Commercial:[k,S,w,N,R,L],"Hedge Trimming":[y,H,P,E,F,O],Residential:[T,$,I,M,W,A],"Leaf Removal":[B,D,J,X,q,z]},G=[].concat(...Object.values(o));function Z(){const[m,n]=d.useState(0),[t,u]=d.useState(null),i=t?o[t]:G,f=g({onSwipedLeft:()=>s(1),onSwipedRight:()=>s(-1),preventDefaultTouchmoveEvent:!0,trackMouse:!0}),s=a=>{n(l=>{const r=l+a,c=i.length;return r<0?c-1:r>=c?0:r})},x=()=>`-${m*100}%`,b=a=>{u(t===a?null:a),n(0)};return e.jsx("div",{className:"flex min-h-screen w-screen flex-col justify-between overflow-hidden bg-background",children:e.jsxs(h,{children:[e.jsx(p,{}),e.jsx("div",{className:"h-[52px] pt-3 text-center font-text text-4xl font-bold tracking-tighter text-text",children:"PAST PROJECTS"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 p-2 text-center font-text text-sm",children:Object.keys(o).map(a=>e.jsx("div",{className:`rounded-full border-2 border-primary ${t===a?"bg-secondary font-bold":"bg-background"} transition ease-in-out hover:cursor-pointer`,onClick:()=>b(a),children:e.jsx("button",{children:a})},a))}),e.jsx("div",{className:"ml-[5%] h-[1px] w-[90%] bg-black"}),e.jsxs("div",{className:"relative m-2 flex-grow overflow-hidden rounded-3xl border-2 border-black h-0",...f,children:[e.jsx("div",{className:"flex h-full w-full transition-transform duration-500",style:{transform:`translateX(${x()})`},children:i.map((a,l)=>e.jsx("div",{className:"h-full w-full flex-shrink-0",children:e.jsx("img",{src:a,alt:`Slide ${l+1}`,className:"block h-full w-full object-cover"})},l))}),e.jsx(v,{onClick:()=>s(-1),className:"absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"}),e.jsx(j,{onClick:()=>s(1),className:"absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"})]}),e.jsx(C,{})]})})}export{Z as default};
