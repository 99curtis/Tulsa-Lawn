import{r as c,a as d,j as e,R as u,g as x,b as h,c as p}from"./index-ByycQQUC.js";const m=""+new URL("residential5-DhheYATu.webp",import.meta.url).href,f=""+new URL("residential2-BkiGKAGw.webp",import.meta.url).href,w=""+new URL("residential3-C8WfN6C8.webp",import.meta.url).href,g=""+new URL("residential4-CyJklAwV.webp",import.meta.url).href,b=""+new URL("residential1-DtGXMcoE.webp",import.meta.url).href,j=""+new URL("residential6-YvsTArwg.webp",import.meta.url).href,a=[w,f,m,g,b,j];function L(){const[l,n]=c.useState(0),r=d({onSwipedLeft:()=>n(t=>(t+1)%a.length),onSwipedRight:()=>n(t=>(t-1+a.length)%a.length),preventDefaultTouchmoveEvent:!0,trackMouse:!0}),i=t=>{t.stopPropagation(),n(s=>(s-1+a.length)%a.length)},o=t=>{t.stopPropagation(),n(s=>(s+1)%a.length)};return e.jsxs("div",{className:"h-full overflow-hidden p-4 font-text text-text",children:[e.jsxs("div",{className:"flex h-[10%] items-center justify-between text-3xl font-bold",children:[e.jsx("div",{className:"h-full w-1/2",children:"Residential Lawn Care"}),e.jsx("div",{className:"flex h-full w-1/2 justify-end bg-contain",children:e.jsx("img",{src:u,alt:"",className:"h-max w-[50%] -translate-y-3 scale-x-[-1] object-cover"})})]}),e.jsxs("div",{className:"flex h-[35%] flex-col justify-between rounded-3xl bg-background p-2",children:[e.jsx("div",{className:"px-2",children:"We excel in top-notch residential lawn care, offering detailed mowing, precise edging, and essential fertilization to keep your outdoor space lush and vibrant. Beyond the basics, our specialized care meets your lawn's unique needs, transforming it into a beautiful, healthy retreat. Choose us for a lawn that's cherished, not just maintained."}),e.jsx("div",{className:"text-center text-xs font-bold",children:"Pricing starts at $40/yard or $30/weekly"})]}),e.jsx("div",{className:"flex h-[5%] items-end justify-center font-bold",children:"past residential projects"}),e.jsxs("div",{className:"relative flex h-1/2 w-full px-2 pb-6",...r,children:[e.jsx(x,{offset:100,width:"100%",children:e.jsx("img",{src:a[l],alt:"portfolio",className:"h-full w-full rounded-3xl bg-center bg-no-repeat object-cover"})}),e.jsx(h,{onClick:i,className:"absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-6xl text-background"}),e.jsx(p,{onClick:o,className:"cursur-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-background"})]})]})}export{L as default};
