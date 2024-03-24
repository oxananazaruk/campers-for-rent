import{u as n,L as r,j as e}from"./index-7aa28ecb.js";const o="/campers-for-rent/assets/featured-min-ca34c45c.jpg",i=n.section`
  height: 100vh;
  width: 100%;
  padding-bottom: 44px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.8),
      rgba(46, 47, 66, 0.8)
    ),
    url(${o});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`,a=n.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,s=n.div`
  padding-top: 200px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`,c=n.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.blockFeatures};
  width: 550px;
`,d=n(r)`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.blockFeatures};
  border: ${t=>t.theme.border.red};
  border-radius: 10px;
  padding: 17px 18px;

  &:hover,
  &:focus {
    text-shadow:
      0 0 5px #d84343,
      0 0 10px #d84343,
      0 0 20px #d84343,
      0 0 40px #d84343;
  }
`,p=()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(c,{children:"The best way to rent an campers here"}),e.jsx(d,{to:"/catalog",children:"Find campers"})]})})})}),x=()=>e.jsx(p,{});export{x as default};
