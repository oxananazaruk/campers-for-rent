import{u as n,j as e,a as r}from"./index-24d9e287.js";import{A as i,n as o,g as a}from"./AdvertsCard-ae612fcd.js";const d=n.div`
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
`,c=({favorites:t})=>e.jsxs(d,{children:[e.jsx("h2",{children:"You liked these adverts"}),e.jsx(l,{children:t.map(s=>e.jsx("li",{children:e.jsx(i,{item:s})},s._id))})]}),p=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`,u=()=>{const t=r(a);return e.jsx(p,{children:t.length>0?e.jsx(c,{favorites:t}):e.jsx("h2",{children:"There are no favorite adverts yet... "})})};export{u as default};