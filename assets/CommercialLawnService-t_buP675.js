import{r as c,a as m,j as e,C as p,g as u,b as x,c as d}from"./index-ByycQQUC.js";const h=""+new URL("commercial1-CqUg0s0J.webp",import.meta.url).href,f=""+new URL("commercial2-ekVI06M2.webp",import.meta.url).href,w=""+new URL("commercial3-BgQe3qDf.webp",import.meta.url).href,g=""+new URL("commercial4-D2QtGx9L.webp",import.meta.url).href,b=""+new URL("commercial5-BTNy7KCr.webp",import.meta.url).href,j=""+new URL("commercial6-CLhhP0mZ.webp",import.meta.url).href,a=[w,f,h,g,b,j];function L(){const[s,r]=c.useState(0),n=m({onSwipedLeft:()=>r(t=>(t+1)%a.length),onSwipedRight:()=>r(t=>(t-1+a.length)%a.length),preventDefaultTouchmoveEvent:!0,trackMouse:!0}),o=t=>{t.stopPropagation(),r(l=>(l-1+a.length)%a.length)},i=t=>{t.stopPropagation(),r(l=>(l+1)%a.length)};return e.jsxs("div",{className:"h-full overflow-hidden p-4 font-text text-text",children:[e.jsxs("div",{className:"flex h-[10%] items-center justify-between text-3xl font-bold",children:[e.jsx("div",{className:"h-full w-1/2 ",children:"Commercial Lawn Care"}),e.jsx("div",{className:"h-full w-1/2 bg-contain flex justify-end",children:e.jsx("img",{src:p,alt:"",className:"h-max w-[58%] object-cover scale-x-[-1] -translate-y-5"})})]}),e.jsxs("div",{className:"flex h-[35%] flex-col justify-between rounded-3xl bg-secondary p-2",children:[e.jsx("div",{className:"px-2",children:"We specialize in superior commercial lawn care, delivering expert mowing, precise edging, and essential fertilization to enhance your business's outdoor appeal. Our tailored solutions ensure your property remains immaculate, reflecting your company's professionalism. Trust us to transform your commercial landscape into a pristine, inviting space."}),e.jsx("div",{className:"text-center text-xs font-bold",children:"Pricing starts at $100/lot or $80/weekly"})]}),e.jsx("div",{className:"flex h-[5%] items-end justify-center font-bold",children:"past commercial projects"}),e.jsxs("div",{className:"relative flex h-1/2 w-full px-2 pb-6",...n,children:[e.jsx(u,{offset:100,width:"100%",children:e.jsx("img",{src:a[s],alt:"portfolio",className:"h-full w-full rounded-3xl bg-center bg-no-repeat object-cover"})}),e.jsx(x,{onClick:o,className:"absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-6xl text-background"}),e.jsx(d,{onClick:i,className:"cursur-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-background"})]})]})}export{L as default};
