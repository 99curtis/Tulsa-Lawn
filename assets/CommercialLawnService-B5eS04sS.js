import{r as n,a as c,j as e,C as d,b as m,c as x}from"./index-C_pUgjqW.js";import{C as u,a as f,b as h,c as g,d as p,e as b}from"./commercial6-DkdOvGg9.js";const l=[u,f,h,g,p,b];function w(){const[r,s]=n.useState(0),i=c({onSwipedLeft:()=>s(t=>(t+1)%l.length),onSwipedRight:()=>s(t=>(t-1+l.length)%l.length),preventDefaultTouchmoveEvent:!0,trackMouse:!0}),o=()=>`-${r*100}%`;return e.jsxs("div",{className:"h-full overflow-hidden p-4 font-text text-text",children:[e.jsxs("div",{className:"flex h-[13%] items-center justify-between text-3xl font-bold md:px-4 lg:px-8",children:[e.jsx("div",{className:"h-full w-1/2 lg:text-4xl",children:"Commercial Lawn Care"}),e.jsx("div",{className:"flex h-full w-1/2 justify-end",children:e.jsx("img",{src:d,alt:"",className:"h-[90px] w-[90px] object-cover"})})]}),e.jsxs("div",{className:"flex h-[35%] flex-col justify-between rounded-3xl border-[1px] border-text bg-secondary p-2 md:mx-20 lg:mx-[30%] lg:h-[20%]",children:[e.jsx("div",{className:"px-2 leading-tight md:text-lg",children:"Specializing in commercial lawn maintenance, we provide expert mowing, precise edging, and essential fertilization to boost your business facade. Our solutions keep your property looking professional and immaculate, mirroring the high standards of your company."}),e.jsx("div",{className:"text-center text-xs font-bold md:text-base",children:"Pricing starts at $100/lot or $80/weekly"})]}),e.jsx("div",{className:"flex h-[5%] items-end justify-center font-bold",children:"past commercial projects"}),e.jsx("div",{className:"flex h-full w-full justify-center",children:e.jsxs("div",{className:"relative flex h-[45%] w-full overflow-hidden rounded-3xl border-2 border-black md:scale-90 lg:h-[60%] lg:w-[50%]",...i,children:[e.jsx("div",{className:"flex h-full transition-transform duration-500",style:{transform:`translateX(${o()})`},children:l.map((t,a)=>e.jsx("img",{src:t,alt:`Commercial Lawn Service ${a+1}`,className:"h-full w-full flex-shrink-0 object-cover"},a))}),e.jsx(m,{onClick:()=>s(t=>(t-1+l.length)%l.length),className:"absolute top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-text bg-opacity-60 text-5xl text-background"}),e.jsx(x,{onClick:()=>s(t=>(t+1)%l.length),className:"absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-text bg-opacity-60 text-5xl text-background"})]})})]})}export{w as default};
