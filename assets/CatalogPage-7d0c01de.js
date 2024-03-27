import{u as o,a as p,j as e,r as l,b as $,f as F,c as A}from"./index-b4ee6983.js";import{n as h,s as T,A as E,F as w,a as I,b as B,c as x,d as V,e as W,f as P}from"./AdvertsCard-8ab6ee95.js";const M=h.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,O=h.div`
  display: flex;
  gap: 64px;
`,R=h.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  padding-top: 200px;
`,N=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,X=o.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 50px;
`,D=o.button`
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
`,K=({items:t,onLoadMare:a})=>{const i=p(T);return e.jsxs(N,{children:[e.jsx(X,{children:t.map(r=>e.jsx("li",{children:e.jsx(E,{item:r})},r._id))}),i?e.jsx("p",{children:i}):e.jsx(D,{type:"button",onClick:a,children:"Load more"})]})},Q=o.div`
  width: 360px;
  padding-top: 100px;
`,u=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`,Y=o.label`
  position: relative;
`,_=o(w)`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${t=>t.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`,G=o.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`,H=o.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,J=o.div`
  margin-top: 14px;
`,m=o.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`,b=o.ul`
  display: flex;
  row-gap: 8px;
  column-gap: 10px;
  flex-wrap: wrap;
`,f=o.li`
  position: relative;
`,U=o.label`
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
`,j=o(w)`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  &:checked + .castomChekbox {
    border: ${t=>t.theme.border.red};
  }
`,y=o.p`
  display: block;
  margin-top: 40px;
  white-space: pre-wrap;
`,Z=o.div`
  margin-top: 32px;
`,ee=o.label`
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
`,te=o.svg`
  width: 40px;
  height: 28px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,oe=o.button`
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
`,ne=({handleSubmit:t})=>{const a={location:"",equipment:[],type:""},i=[{equipment:"airConditioner",text:"AC"},{equipment:"automatic",text:"Automatic"},{equipment:"kitchen",text:"Kitchen"},{equipment:"TV",text:"TV"},{equipment:"shower",text:"Shower/WC"}],r=[{type:"panelTruck",text:"Van"},{type:"fullyIntegrated",text:"Fully Integrated"},{type:"alcove",text:"Alcove"}];return e.jsx(Q,{children:e.jsx(I,{initialValues:a,onSubmit:n=>{t(n)},children:e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx(u,{children:"Location"}),e.jsxs(Y,{children:[e.jsx(_,{type:"text",name:"location",placeholder:"City"}),e.jsx(G,{width:"18",height:"20",children:e.jsx("use",{href:`${x}#map-pin`})})]})]}),e.jsxs("div",{children:[e.jsx(u,{children:"Filters"}),e.jsxs(J,{children:[e.jsx(m,{children:"Vehicle equipment"}),e.jsx(b,{children:i.map(n=>e.jsxs(f,{children:[e.jsx(H,{children:e.jsx("use",{href:`${x}#${n.equipment}`})}),e.jsx(j,{type:"checkbox",name:"equipment",value:n.equipment,id:n.equipment}),e.jsx(U,{htmlFor:n.equipment,className:"castomChekbox",children:e.jsx(y,{children:n.text})})]},n.equipment))})]}),e.jsxs(Z,{children:[e.jsx(m,{children:"Vehicle type"}),e.jsx(b,{children:r.map(n=>e.jsxs(f,{children:[e.jsx(te,{children:e.jsx("use",{href:`${x}#${n.type}`})}),e.jsx(j,{type:"radio",name:"type",value:n.type,id:n.type}),e.jsx(ee,{htmlFor:n.type,className:"castomChekbox",children:e.jsx(y,{children:n.text})})]},n.type))})]})]}),e.jsx(oe,{type:"submit",children:"Search"})]})})})},ie=o.b`
  color: ${t=>t.theme.color.buttons};
  font-size: 24px;
  font-weight: 500;
  padding-top: 200px;
`,se=()=>e.jsx(ie,{children:"Oops! Something went wrong! Please try reloading this page!"}),pe=()=>{const[t,a]=l.useState(1),[i,r]=l.useState({}),n=p(V),v=p(W),k=p(P),g=$();l.useEffect(()=>{g(F(t))},[g,t]);const C=()=>{a(s=>s+=1)},L=s=>{r(s)},c=k.filter(s=>{const q=!i.location||s.location.toLowerCase().includes(i.location.toLowerCase().trim()),z=!i.type||s.form===i.type,S=!i.equipment||i.equipment.every(d=>Object.prototype.hasOwnProperty.call(s.details,d)&&s.details[d]!==0||d===s.transmission);return q&&z&&S});return e.jsx(M,{children:e.jsxs(O,{children:[e.jsx(ne,{handleSubmit:L}),c.length>0&&e.jsx(K,{items:c,onLoadMare:C}),c.length===0&&!n&&e.jsx(R,{children:"There are no results matching your search query. Please try changing your search parameters!"}),n&&e.jsx(A,{}),v&&e.jsx(se,{})]})})};export{pe as default};
