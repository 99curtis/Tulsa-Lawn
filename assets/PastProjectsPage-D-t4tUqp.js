import{r as o,a as f,j as e,M as g,N as b,b as h,c as p,F as j}from"./index-C_pUgjqW.js";import{C as v,a as C,b as k,c as N,d as S,e as R}from"./commercial6-DkdOvGg9.js";import{b as w,a as y,H as L,c as H,d as T,e as P}from"./hedgetrimming6-Css9QD8h.js";import{d as F,a as E,b as M,c as $,R as O,e as A}from"./residential6-DshR-I0X.js";import{b as B,a as I,L as J,c as X,d as q,e as z}from"./leafremoval6-g8KUIHCL.js";const u={Commercial:[v,C,k,N,S,R],"Hedge Trimming":[w,y,L,H,T,P],Residential:[F,E,M,$,O,A],"Leaf Removal":[B,I,J,X,q,z]};function D(n,s){let l;return function(...a){const c=()=>{clearTimeout(l),n(...a)};clearTimeout(l),l=setTimeout(c,s)}}function W(){const[n,s]=o.useState(0),[l,d]=o.useState("Commercial"),a=u[l],c=f({onSwipedLeft:()=>s(t=>(t+1)%a.length),onSwipedRight:()=>s(t=>(t-1+a.length)%a.length),trackMouse:!0}),x=o.useCallback(D(d,250),[]),m=t=>{o.startTransition(()=>{s(i=>{let r=i+t;return r<0?r=a.length-1:r>=a.length&&(r=0),r})})};return e.jsx("div",{className:"flex min-h-screen w-screen flex-col justify-between overflow-hidden bg-background",children:e.jsxs(g,{children:[e.jsx(b,{}),e.jsxs("div",{className:"flex h-[75svh] min-h-[600px] flex-col",children:[e.jsxs("div",{className:"h-[20%]",children:[e.jsx("div",{className:"pt-1 text-center font-text text-4xl font-bold tracking-tighter text-text",children:"PAST PROJECTS"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 p-2 text-center font-text text-sm lg:mx-[30%]",children:Object.keys(u).map(t=>e.jsx("button",{onClick:()=>{x(t),s(0)},className:`rounded-full border-2 md:text-2xl border-primary ${l===t?"bg-secondary font-bold":"bg-background"} transition ease-in-out hover:cursor-pointer`,children:t},t))}),e.jsx("div",{className:"ml-[5%] h-[1px] w-[90%] bg-black"})]}),e.jsx("div",{className:"h-[75%] w-full flex justify-center",children:e.jsxs("div",{className:"relative m-2 h-full lg:w-1/2 overflow-hidden rounded-3xl border-2 border-black",...c,children:[e.jsx("div",{className:"flex h-full transition-transform duration-500",style:{transform:`translateX(-${n*100}%)`},children:a.map((t,i)=>e.jsx("img",{src:t,alt:`Slide ${i+1}`,className:" h-full w-full flex-shrink-0 object-cover"},i))}),e.jsx(h,{onClick:()=>m(-1),className:"absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"}),e.jsx(p,{onClick:()=>m(1),className:"absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"})]})})]}),e.jsx(j,{})]})})}export{W as default};