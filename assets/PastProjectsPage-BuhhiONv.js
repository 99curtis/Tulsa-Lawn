import{r as c,a as f,j as e,M as g,N as b,b as h,c as p,F as j}from"./index-TU3gXBt7.js";import{C as v,a as C,b as k,c as N,d as S,e as R}from"./commercial6-DkdOvGg9.js";import{b as L,a as w,H as y,c as H,d as T,e as P}from"./hedgetrimming6-Css9QD8h.js";import{d as F,a as E,b as M,c as $,R as O,e as A}from"./residential6-DshR-I0X.js";import{b as B,a as I,L as J,c as X,d as q,e as z}from"./leafremoval6-g8KUIHCL.js";const u={Commercial:[v,C,k,N,S,R],"Hedge Trimming":[L,w,y,H,T,P],Residential:[F,E,M,$,O,A],"Leaf Removal":[B,I,J,X,q,z]};function D(i,s){let r;return function(...t){const n=()=>{clearTimeout(r),i(...t)};clearTimeout(r),r=setTimeout(n,s)}}function W(){const[i,s]=c.useState(0),[r,d]=c.useState("Commercial"),t=u[r],n=f({onSwipedLeft:()=>s(a=>(a+1)%t.length),onSwipedRight:()=>s(a=>(a-1+t.length)%t.length),trackMouse:!0}),x=c.useCallback(D(d,250),[]),m=a=>{startTransition(()=>{s(o=>{let l=o+a;return l<0?l=t.length-1:l>=t.length&&(l=0),l})})};return e.jsx("div",{className:"flex min-h-screen w-screen flex-col justify-between overflow-hidden bg-background",children:e.jsxs(g,{children:[e.jsx(b,{}),e.jsxs("div",{className:"flex h-[75svh] min-h-[600px] flex-col",children:[e.jsxs("div",{className:"h-[20%]",children:[e.jsx("div",{className:"pt-1 text-center font-text text-4xl font-bold tracking-tighter text-text",children:"PAST PROJECTS"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 p-2 text-center font-text text-sm",children:Object.keys(u).map(a=>e.jsx("button",{onClick:()=>{x(a),s(0)},className:`rounded-full border-2 border-primary ${r===a?"bg-secondary font-bold":"bg-background"} transition ease-in-out hover:cursor-pointer`,children:a},a))}),e.jsx("div",{className:"ml-[5%] h-[1px] w-[90%] bg-black"})]}),e.jsx("div",{className:"h-[75%]",children:e.jsxs("div",{className:"relative m-2 h-full overflow-hidden rounded-3xl border-2 border-black",...n,children:[e.jsx("div",{className:"flex h-full transition-transform duration-500",style:{transform:`translateX(-${i*100}%)`},children:t.map((a,o)=>e.jsx("img",{src:a,alt:`Slide ${o+1}`,className:" h-full w-full flex-shrink-0 object-cover"},o))}),e.jsx(h,{onClick:()=>m(-1),className:"absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"}),e.jsx(p,{onClick:()=>m(1),className:"absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"})]})})]}),e.jsx(j,{})]})})}export{W as default};
