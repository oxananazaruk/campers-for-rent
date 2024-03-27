import{u as o,L as r,j as e}from"./index-83dffdfe.js";const n="/campers-for-rent/assets/featured-min-ca34c45c.jpg",i=o.section`
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
`,a=o.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,s=o.div`
  padding-top: 200px;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
`,c=o.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.blockFeatures};
  width: 550px;
`,d=o.p`
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.inputs};
  width: 550px;
`,p=o(r)`
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
`,l=()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:e.jsx(a,{children:e.jsxs(s,{children:[e.jsxs("div",{children:[e.jsx(c,{children:"The best way to rent an campers here"}),e.jsx(d,{children:"Discover our Camper models and find your holiday home that meets all the requirements and makes your travel dreams come true. We offer a wide selection of campers and motorhomes from well-known brands."})]}),e.jsx(p,{to:"/catalog",children:"Find campers"})]})})})}),m=()=>e.jsx(l,{});export{m as default};
