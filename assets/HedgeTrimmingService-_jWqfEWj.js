import{r as c,a as d,j as e,H as m,g as x,b as h,c as g}from"./index-De6TLC62.js";const p=""+new URL("hedgetrimming1-BYRGV5tS.webp",import.meta.url).href,u=""+new URL("hedgetrimming2-CJbID5wH.webp",import.meta.url).href,f=""+new URL("hedgetrimming3-BYI2s_e-.webp",import.meta.url).href,w=""+new URL("hedgetrimming4-B2PX6KUW.webp",import.meta.url).href,b=""+new URL("hedgetrimming5-DB9Spg_i.webp",import.meta.url).href,j=""+new URL("hedgetrimming6-DFAuIwvN.webp",import.meta.url).href,n=[f,u,p,w,b,j];function N(){const[a,r]=c.useState(0),l=d({onSwipedLeft:()=>r(t=>(t+1)%n.length),onSwipedRight:()=>r(t=>(t-1+n.length)%n.length),preventDefaultTouchmoveEvent:!0,trackMouse:!0}),i=t=>{t.stopPropagation(),r(s=>(s-1+n.length)%n.length)},o=t=>{t.stopPropagation(),r(s=>(s+1)%n.length)};return e.jsxs("div",{className:"h-full overflow-hidden p-4 font-text text-text",children:[e.jsxs("div",{className:"flex h-[13%] items-center justify-between text-3xl font-bold",children:[e.jsxs("div",{className:"h-full w-1/2",children:["Hedge",e.jsx("br",{}),"Trimming"]}),e.jsx("div",{className:"flex h-full w-1/2 justify-end bg-contain",children:e.jsx("img",{src:m,alt:"",className:"h-[90px] w-[90px] -translate-y-3 scale-x-[-1] object-cover"})})]}),e.jsxs("div",{className:"flex h-[35%] flex-col justify-between rounded-3xl bg-background p-2",children:[e.jsx("div",{className:"px-2 leading-tight",children:"Our hedge trimming services offer precision and detail, sculpting your hedges to perfection. We enhance your landscape's natural beauty, creating an inviting and refined space for everyone to enjoy."}),e.jsx("div",{className:"text-center text-xs font-bold",children:"Pricing starts at $60/lot or $50/monthly"})]}),e.jsx("div",{className:"flex h-[5%] items-end justify-center font-bold",children:"past hedge trimming projects"}),e.jsxs("div",{className:"relative flex h-1/2 w-full px-2 pb-6",...l,children:[e.jsx(x,{offset:100,width:"100%",children:e.jsx("img",{src:n[a],alt:"portfolio",className:"h-full w-full rounded-3xl bg-center bg-no-repeat object-cover"})}),e.jsx(h,{onClick:i,className:"absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-6xl text-background"}),e.jsx(g,{onClick:o,className:"cursur-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-background"})]})]})}export{N as default};