import{u as n,j as e,a as i}from"./index-fcc62467.js";import{A as o,n as r,g as a}from"./AdvertsCard-18e15057.js";const d=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,l=n.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 20px;
`,c=({favorites:t})=>e.jsxs(d,{children:[e.jsx("h2",{children:"You liked these adverts"}),e.jsx(l,{children:t.map(s=>e.jsx("li",{children:e.jsx(o,{item:s})},s._id))})]}),p=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`,u=()=>{const t=i(a);return e.jsx(p,{children:t.length>0&&e.jsx(c,{favorites:t})})};export{u as default};
