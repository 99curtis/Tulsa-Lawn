import{r as d,a as o,j as e,R as c,b as x,c as u}from"./index-C_pUgjqW.js";import{R as h,a as f,b as m,c as g,d as p,e as b}from"./residential6-DshR-I0X.js";const s=[h,f,m,g,p,b];function w(){const[i,l]=d.useState(0),r=o({onSwipedLeft:()=>l(t=>(t+1)%s.length),onSwipedRight:()=>l(t=>(t-1+s.length)%s.length),preventDefaultTouchmoveEvent:!0,trackMouse:!0}),n=()=>`-${i*100}%`;return e.jsxs("div",{className:"h-full overflow-hidden p-4 font-text text-text",children:[e.jsxs("div",{className:"flex h-[13%] items-center justify-between text-3xl font-bold md:px-4 lg:px-8",children:[e.jsx("div",{className:"h-full w-3/5 lg:text-4xl",children:"Residential Lawn Care"}),e.jsx("div",{className:"flex h-full w-1/2 justify-end",children:e.jsx("img",{src:c,alt:"",className:"h-[90px] w-[90px] object-cover"})})]}),e.jsxs("div",{className:"flex h-[35%] flex-col justify-between rounded-3xl border-[1px] border-text bg-background p-2 md:mx-20 lg:mx-[30%] lg:h-[20%]",children:[e.jsx("div",{className:"px-2 leading-tight md:text-lg",children:"Our residential lawn care excels in delivering detailed mowing, precise edging, and targeted fertilization, ensuring your garden remains lush and vibrant. With our specialized attention, we transform your outdoor area into a cherished, healthy retreat that stands out."}),e.jsx("div",{className:"text-center text-xs font-bold md:text-base",children:"Pricing starts at $40/yard or $30/weekly"})]}),e.jsx("div",{className:"flex h-[5%] items-end justify-center font-bold",children:"past residential projects"}),e.jsx("div",{className:"flex h-full w-full justify-center",children:e.jsxs("div",{className:"relative flex h-[45%] w-full overflow-hidden rounded-3xl border-2 border-black md:scale-90 lg:h-[60%] lg:w-[50%]",...r,children:[e.jsx("div",{className:"flex h-full transition-transform duration-500",style:{transform:`translateX(${n()})`},children:s.map((t,a)=>e.jsx("img",{src:t,alt:`Residential Lawn Service ${a+1}`,className:"h-full w-full flex-shrink-0 object-cover"},a))}),e.jsx(x,{onClick:()=>l(t=>(t-1+s.length)%s.length),className:"absolute top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-text bg-opacity-60 text-5xl text-background"}),e.jsx(u,{onClick:()=>l(t=>(t+1)%s.length),className:"absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-text bg-opacity-60 text-5xl text-background"})]})})]})}export{w as default};