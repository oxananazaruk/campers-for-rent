import{j as s,u as x,a as h,r as p,f}from"./index-f9f6478e.js";import{n as i}from"./emotion-styled.browser.esm-a38589d5.js";const j=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,g=i.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;i.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const m=e=>e.adverts.items,u=({item:e})=>{const{name:t,price:r,rating:n,location:c,adults:a,children:b,engine:w,transmission:y,form:A,length:C,width:E,height:P,tank:R,consumption:S,description:d,details:k,gallery:l,reviews:o}=e;return s.jsxs("div",{children:[s.jsx("img",{src:l[1],alt:t}),s.jsx("h2",{children:t}),s.jsxs("p",{children:["€",r]}),s.jsxs("div",{children:[s.jsx("p",{children:n}),s.jsxs("p",{children:["(",o.length," Reviews)"]}),s.jsx("p",{children:c}),s.jsx("p",{children:d})]}),s.jsx("div",{children:s.jsx("ul",{children:s.jsxs("li",{children:[a," adults"]})})})]})},v=({items:e})=>s.jsx("ul",{children:e.map(t=>s.jsx("li",{children:s.jsx(u,{item:t})},t._id))}),L=()=>{const e=x(m),t=h();return p.useEffect(()=>{t(f())},[t]),s.jsxs(j,{children:[s.jsx(g,{children:"First Page"}),e.length>0&&s.jsx(v,{items:e})]})};export{L as default};
