import{s as r,L as o,j as e}from"./index-e0e5ea83.js";const n="/campers-for-rent/assets/featured-min-ca34c45c.jpg",i=r.section`
  height: 100vh;
  width: 100%;
  padding-bottom: 44px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.8),
      rgba(46, 47, 66, 0.8)
    ),
    url(${n});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`,a=r.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,s=r.div`
  padding-top: 200px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`,d=r.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.blockFeatures};
  width: 550px;
`,c=r(o)`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.blockFeatures};
  border: ${t=>t.theme.border.red};
  border-radius: 10px;
  padding: 17px 18px;

  /* &:hover {
    border: '1px solid #d84343';
  } */
  &:hover,
  &:focus {
    text-shadow:
      0 0 5px #d84343,
      0 0 10px #d84343,
      0 0 20px #d84343,
      0 0 40px #d84343;
  }
`,p=()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(d,{children:"The best way to rent an campers here"}),e.jsx(c,{to:"/catalog",children:"Find campers"})]})})})}),g=()=>e.jsx(p,{});export{g as default};
