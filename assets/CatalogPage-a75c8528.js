import{u as t,a as g,j as e,r as p,b as k,f as y}from"./index-7aa28ecb.js";import{n as b,s as w,A as C,a as i,b as $}from"./AdvertsCard-e53f99c7.js";const F=b.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,L=b.div`
  display: flex;
  gap: 64px;
  /* justify-content: center; */
`,z=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,A=t.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 100px;
`,I=t.button`
  border: ${s=>s.theme.border.grey};
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  &:hover,
  &:focus {
    border: ${s=>s.theme.border.red};
  }
`,S=({items:s,onLoadMare:l})=>{const c=g(w);return e.jsxs(z,{children:[e.jsx(A,{children:s.map(x=>e.jsx("li",{children:e.jsx(C,{item:x})},x._id))}),c?e.jsx("p",{children:c}):e.jsx(I,{type:"button",onClick:l,children:"Load more"})]})},N=t.div`
  width: 360px;
  padding-top: 100px;
`,m=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`,q=t.label`
  position: relative;
`,W=t.input`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${s=>s.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`,B=t.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`,h=t.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,T=t.div`
  margin-top: 14px;
`,j=t.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`,u=t.ul`
  display: flex;
  row-gap: 8px;
  column-gap: 10px;
  flex-wrap: wrap;
`,n=t.li`
  position: relative;
`,o=t.label`
  border: ${s=>s.theme.border.grey};
  border-radius: 10px;
  padding: 9px 18px;
  min-width: 100px;
  max-width: 128px;
  height: 95px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
  display: block;
  position: relative;
  z-index: 2;
`,r=t.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  &:checked + .castomChekbox {
    border: ${s=>s.theme.border.red};
  }
`,a=t.p`
  display: block;
  margin-top: 40px;
  white-space: pre-wrap;
`,V=t.div`
  margin-top: 32px;
`,d=t.svg`
  width: 40px;
  height: 28px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,E=t.button`
  margin-top: 80px;
  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background-color: ${s=>s.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`,M=()=>e.jsx(N,{children:e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx(m,{children:"Location"}),e.jsxs(q,{children:[e.jsx(W,{type:"text",placeholder:"Kyiv, Ukraine"}),e.jsx(B,{width:"18",height:"20",children:e.jsx("use",{href:`${i}#map-pin`})})]})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Filters"}),e.jsxs(T,{children:[e.jsx(j,{children:"Vehicle equipment"}),e.jsxs(u,{children:[e.jsxs(n,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#ac`})}),e.jsx(r,{type:"checkbox",name:"equipment",value:"ac",id:"ac"}),e.jsx(o,{htmlFor:"ac",className:"castomChekbox",children:e.jsx(a,{children:"AC"})})]}),e.jsxs(n,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#automatic`})}),e.jsx(r,{type:"checkbox",name:"equipment",value:"automatic",id:"automatic"}),e.jsx(o,{htmlFor:"automatic",className:"castomChekbox",children:e.jsx(a,{children:"Automatic"})})]}),e.jsxs(n,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#knife`})}),e.jsx(r,{type:"checkbox",name:"equipment",value:"kitchen",id:"kitchen"}),e.jsx(o,{htmlFor:"kitchen",className:"castomChekbox",children:e.jsx(a,{children:"Kitchen"})})]}),e.jsxs(n,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#tv`})}),e.jsx(r,{type:"checkbox",name:"equipment",value:"tv",id:"tv"}),e.jsx(o,{htmlFor:"tv",className:"castomChekbox",children:e.jsx(a,{children:"TV"})})]}),e.jsxs(n,{children:[e.jsx(h,{children:e.jsx("use",{href:`${i}#shower`})}),e.jsx(r,{type:"checkbox",name:"equipment",value:"shower/WC",id:"shower"}),e.jsx(o,{htmlFor:"shower",className:"castomChekbox",children:e.jsx(a,{children:"Shower/WC"})})]})]})]}),e.jsxs(V,{children:[e.jsx(j,{children:"Vehicle type"}),e.jsxs(u,{children:[e.jsxs(n,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#camper3`})}),e.jsx(r,{type:"radio",name:"type",value:"van",id:"van"}),e.jsx(o,{htmlFor:"van",className:"castomChekbox",children:e.jsx(a,{children:"Van"})})]}),e.jsxs(n,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#camper2`})}),e.jsx(r,{type:"radio",name:"type",value:"fully integrated",id:"fullyIntegrated"}),e.jsx(o,{htmlFor:"fullyIntegrated",className:"castomChekbox",children:e.jsx(a,{children:"Fully Integrated"})})]}),e.jsxs(n,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#camper`})}),e.jsx(r,{type:"radio",name:"type",value:"alcove",id:"alcove"}),e.jsx(o,{htmlFor:"alcove",className:"castomChekbox",children:e.jsx(a,{children:"Alcove"})})]})]})]})]}),e.jsx(E,{children:"Search"})]})}),R=()=>{const[s,l]=p.useState(1),c=g($),x=k();p.useEffect(()=>{x(y(s))},[x,s]);const f=()=>{l(v=>v+=1)};return e.jsx(F,{children:e.jsxs(L,{children:[e.jsx(M,{}),c.length>0&&e.jsx(S,{items:c,onLoadMare:f})]})})};export{R as default};
