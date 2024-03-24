import{u as n,j as e,a as i}from"./index-ca57c1c0.js";import{A as r,n as o,c as a}from"./AdvertsCard-2de2f938.js";const d=n.div`
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
`,c=({favorites:t})=>e.jsxs(d,{children:[e.jsx("h2",{children:"Your favorite adverts"}),e.jsx(l,{children:t.map(s=>e.jsx("li",{children:e.jsx(r,{item:s})},s._id))})]}),p=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`,u=()=>{const t=i(a);return e.jsx(p,{children:t.length>0&&e.jsx(c,{favorites:t})})};export{u as default};
