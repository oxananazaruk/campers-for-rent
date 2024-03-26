import{u as s,a as x,j as e,r as g,b as T,f as E,c as N}from"./index-fcc62467.js";import{n as f,s as B,A as V,F as L,a as W,b as P,c as r,d as M,e as O,f as R}from"./AdvertsCard-18e15057.js";const X=f.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,D=f.div`
  display: flex;
  gap: 64px;
`,K=f.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  padding-top: 200px;
`,Q=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,Y=s.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 100px;
`,_=s.button`
  border: ${t=>t.theme.border.grey};
  border-radius: 200px;
  padding: 16px 32px;
  min-width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  background-color: transparent;

  &:hover {
    border: ${t=>t.theme.border.red};
  }
`,G=({items:t,onLoadMare:l})=>{const o=x(B);return e.jsxs(Q,{children:[e.jsx(Y,{children:t.map(p=>e.jsx("li",{children:e.jsx(V,{item:p})},p._id))}),o?e.jsx("p",{children:o}):e.jsx(_,{type:"button",onClick:l,children:"Load more"})]})},H=s.div`
  width: 360px;
  padding-top: 100px;
`,w=s.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`,J=s.label`
  position: relative;
`,U=s(L)`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${t=>t.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`,Z=s.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`,h=s.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,ee=s.div`
  margin-top: 14px;
`,k=s.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`,C=s.ul`
  display: flex;
  row-gap: 8px;
  column-gap: 10px;
  flex-wrap: wrap;
`,i=s.li`
  position: relative;
`,d=s.label`
  border: ${t=>t.theme.border.grey};
  border-radius: 10px;
  padding: 17px 12px;
  min-width: 112px;
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
`,a=s(L)`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  &:checked + .castomChekbox {
    border: ${t=>t.theme.border.red};
  }
`,c=s.p`
  display: block;
  margin-top: 40px;
  white-space: pre-wrap;
`,te=s.div`
  margin-top: 32px;
`,j=s.label`
  border: ${t=>t.theme.border.grey};
  border-radius: 10px;
  padding: 9px 24px;
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
`,b=s.svg`
  width: 40px;
  height: 28px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,se=s.button`
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
`,oe=({handleSubmit:t})=>{const l={location:"",equipment:[],type:""};return e.jsx(H,{children:e.jsx(W,{initialValues:l,onSubmit:o=>{t(o)},children:e.jsxs(P,{children:[e.jsxs("div",{children:[e.jsx(w,{children:"Location"}),e.jsxs(J,{children:[e.jsx(U,{type:"text",name:"location",placeholder:"City"}),e.jsx(Z,{width:"18",height:"20",children:e.jsx("use",{href:`${r}#map-pin`})})]})]}),e.jsxs("div",{children:[e.jsx(w,{children:"Filters"}),e.jsxs(ee,{children:[e.jsx(k,{children:"Vehicle equipment"}),e.jsxs(C,{children:[e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#ac`})}),e.jsx(a,{type:"checkbox",name:"equipment",value:"airConditioner",id:"ac"}),e.jsx(d,{htmlFor:"ac",className:"castomChekbox",children:e.jsx(c,{children:"AC"})})]}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#automatic`})}),e.jsx(a,{type:"checkbox",name:"equipment",value:"automatic",id:"automatic"}),e.jsx(d,{htmlFor:"automatic",className:"castomChekbox",children:e.jsx(c,{children:"Automatic"})})]}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#knife`})}),e.jsx(a,{type:"checkbox",name:"equipment",value:"kitchen",id:"kitchen"}),e.jsx(d,{htmlFor:"kitchen",className:"castomChekbox",children:e.jsx(c,{children:"Kitchen"})})]}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#tv`})}),e.jsx(a,{type:"checkbox",name:"equipment",value:"TV",id:"tv"}),e.jsx(d,{htmlFor:"tv",className:"castomChekbox",children:e.jsx(c,{children:"TV"})})]}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#shower`})}),e.jsx(a,{type:"checkbox",name:"equipment",value:"shower",id:"shower"}),e.jsx(d,{htmlFor:"shower",className:"castomChekbox",children:e.jsx(c,{children:"Shower/WC"})})]})]})]}),e.jsxs(te,{children:[e.jsx(k,{children:"Vehicle type"}),e.jsxs(C,{children:[e.jsxs(i,{children:[e.jsx(b,{children:e.jsx("use",{href:`${r}#camper3`})}),e.jsx(a,{type:"radio",name:"type",value:"panelTruck",id:"van"}),e.jsx(j,{htmlFor:"van",className:"castomChekbox",children:e.jsx(c,{children:"Van"})})]}),e.jsxs(i,{children:[e.jsx(b,{children:e.jsx("use",{href:`${r}#camper2`})}),e.jsx(a,{type:"radio",name:"type",value:"fullyIntegrated",id:"fullyIntegrated"}),e.jsx(j,{htmlFor:"fullyIntegrated",className:"castomChekbox",children:e.jsx(c,{children:"Fully Integrated"})})]}),e.jsxs(i,{children:[e.jsx(b,{children:e.jsx("use",{href:`${r}#camper`})}),e.jsx(a,{type:"radio",name:"type",value:"alcove",id:"alcove"}),e.jsx(j,{htmlFor:"alcove",className:"castomChekbox",children:e.jsx(c,{children:"Alcove"})})]})]})]})]}),e.jsx(se,{type:"submit",children:"Search"})]})})})},ne=s.b`
  color: ${t=>t.theme.color.buttons};
  font-size: 24px;
  font-weight: 500;
  padding-top: 200px;
`,re=()=>e.jsx(ne,{children:"Oops! Something went wrong! Please try reloading this page!"}),ce=()=>{const[t,l]=g.useState(1),[o,p]=g.useState({}),y=x(M),F=x(O),$=x(R),v=T();g.useEffect(()=>{v(E(t))},[v,t]);const z=()=>{l(n=>n+=1)},S=n=>{p(n)},m=$.filter(n=>{const I=!o.location||n.location.toLowerCase().includes(o.location.toLowerCase().trim()),A=!o.type||n.form===o.type,q=!o.equipment||o.equipment.every(u=>Object.prototype.hasOwnProperty.call(n.details,u)&&n.details[u]!==0||u===n.transmission);return I&&A&&q});return e.jsx(X,{children:e.jsxs(D,{children:[e.jsx(oe,{handleSubmit:S}),m.length>0&&e.jsx(G,{items:m,onLoadMare:z}),m.length===0&&!y&&e.jsx(K,{children:"There are no results matching your search query. Please try changing your search parameters!"}),y&&e.jsx(N,{}),F&&e.jsx(re,{})]})})};export{ce as default};
