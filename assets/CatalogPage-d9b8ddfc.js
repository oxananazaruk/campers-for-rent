import{u as s,a as p,j as e,r as j,b as q,f as T,c as E}from"./index-46905e35.js";import{n as b,s as N,A as V,F as w,a as W,b as B,c as r,d as P,e as M,f as O}from"./AdvertsCard-46c1da2e.js";const K=b.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,R=b.div`
  display: flex;
  gap: 64px;
`,X=b.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  padding-top: 200px;
`,D=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,Q=s.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 100px;
`,U=s.button`
  border: ${t=>t.theme.border.grey};
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
    border: ${t=>t.theme.border.red};
  }
`,Y=({items:t,onLoadMare:h})=>{const o=p(N);return e.jsxs(D,{children:[e.jsx(Q,{children:t.map(x=>e.jsx("li",{children:e.jsx(V,{item:x})},x._id))}),o?e.jsx("p",{children:o}):e.jsx(U,{type:"button",onClick:h,children:"Load more"})]})},_=s.div`
  width: 360px;
  padding-top: 100px;
`,v=s.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`,G=s.label`
  position: relative;
`,H=s(w)`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${t=>t.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`,J=s.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`,d=s.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Z=s.div`
  margin-top: 14px;
`,y=s.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`,k=s.ul`
  display: flex;
  row-gap: 8px;
  column-gap: 10px;
  flex-wrap: wrap;
`,i=s.li`
  position: relative;
`,a=s.label`
  border: ${t=>t.theme.border.grey};
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
`,c=s(w)`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  &:checked + .castomChekbox {
    border: ${t=>t.theme.border.red};
  }
`,l=s.p`
  display: block;
  margin-top: 40px;
  white-space: pre-wrap;
`,ee=s.div`
  margin-top: 32px;
`,g=s.svg`
  width: 40px;
  height: 28px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,te=s.button`
  margin-top: 80px;
  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background-color: ${t=>t.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`,se=({handleSubmit:t})=>{const h={location:"",equipment:[],type:""};return e.jsx(_,{children:e.jsx(W,{initialValues:h,onSubmit:o=>{t(o)},children:e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx(v,{children:"Location"}),e.jsxs(G,{children:[e.jsx(H,{type:"text",name:"location",placeholder:"Kyiv, Ukraine"}),e.jsx(J,{width:"18",height:"20",children:e.jsx("use",{href:`${r}#map-pin`})})]})]}),e.jsxs("div",{children:[e.jsx(v,{children:"Filters"}),e.jsxs(Z,{children:[e.jsx(y,{children:"Vehicle equipment"}),e.jsxs(k,{children:[e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:`${r}#ac`})}),e.jsx(c,{type:"checkbox",name:"equipment",value:"airConditioner",id:"ac"}),e.jsx(a,{htmlFor:"ac",className:"castomChekbox",children:e.jsx(l,{children:"AC"})})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:`${r}#automatic`})}),e.jsx(c,{type:"checkbox",name:"equipment",value:"automatic",id:"automatic"}),e.jsx(a,{htmlFor:"automatic",className:"castomChekbox",children:e.jsx(l,{children:"Automatic"})})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:`${r}#knife`})}),e.jsx(c,{type:"checkbox",name:"equipment",value:"kitchen",id:"kitchen"}),e.jsx(a,{htmlFor:"kitchen",className:"castomChekbox",children:e.jsx(l,{children:"Kitchen"})})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:`${r}#tv`})}),e.jsx(c,{type:"checkbox",name:"equipment",value:"TV",id:"tv"}),e.jsx(a,{htmlFor:"tv",className:"castomChekbox",children:e.jsx(l,{children:"TV"})})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:`${r}#shower`})}),e.jsx(c,{type:"checkbox",name:"equipment",value:"shower",id:"shower"}),e.jsx(a,{htmlFor:"shower",className:"castomChekbox",children:e.jsx(l,{children:"Shower/WC"})})]})]})]}),e.jsxs(ee,{children:[e.jsx(y,{children:"Vehicle type"}),e.jsxs(k,{children:[e.jsxs(i,{children:[e.jsx(g,{children:e.jsx("use",{href:`${r}#camper3`})}),e.jsx(c,{type:"radio",name:"type",value:"panelTruck",id:"van"}),e.jsx(a,{htmlFor:"van",className:"castomChekbox",children:e.jsx(l,{children:"Van"})})]}),e.jsxs(i,{children:[e.jsx(g,{children:e.jsx("use",{href:`${r}#camper2`})}),e.jsx(c,{type:"radio",name:"type",value:"fullyIntegrated",id:"fullyIntegrated"}),e.jsx(a,{htmlFor:"fullyIntegrated",className:"castomChekbox",children:e.jsx(l,{children:"Fully Integrated"})})]}),e.jsxs(i,{children:[e.jsx(g,{children:e.jsx("use",{href:`${r}#camper`})}),e.jsx(c,{type:"radio",name:"type",value:"alcove",id:"alcove"}),e.jsx(a,{htmlFor:"alcove",className:"castomChekbox",children:e.jsx(l,{children:"Alcove"})})]})]})]})]}),e.jsx(te,{type:"submit",children:"Search"})]})})})},oe=s.b`
  color: ${t=>t.theme.color.buttons};
  font-size: 24px;
  font-weight: 500;
  padding-top: 200px;
`,ne=()=>e.jsx(oe,{children:"Oops! Something went wrong! Please try reloading this page!"}),ae=()=>{const[t,h]=j.useState(1),[o,x]=j.useState({}),C=p(P),L=p(M),F=p(O),f=q();j.useEffect(()=>{f(T(t))},[f,t]);const $=()=>{h(n=>n+=1)},S=n=>{x(n)},m=F.filter(n=>{const z=!o.location||n.location.toLowerCase().includes(o.location.toLowerCase()),I=!o.type||n.form===o.type,A=!o.equipment||o.equipment.every(u=>Object.prototype.hasOwnProperty.call(n.details,u)&&n.details[u]!==0||u===n.transmission);return z&&I&&A});return e.jsx(K,{children:e.jsxs(R,{children:[e.jsx(se,{handleSubmit:S}),m.length>0&&e.jsx(Y,{items:m,onLoadMare:$}),m.length===0&&e.jsx(X,{children:"There are no results matching your search query. Please try changing your search parameters!"}),C&&e.jsx(E,{}),L&&e.jsx(ne,{})]})})};export{ae as default};
