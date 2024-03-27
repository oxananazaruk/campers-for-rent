import{u as o,L as r,j as e}from"./index-24d9e287.js";const n="/campers-for-rent/assets/featured-min-ca34c45c.jpg",i=o.section`
  height: 100vh;
  width: 100%;
  padding-bottom: 44px;
  background-image: linear-gradient(
      rgba(16, 24, 40, 0.8),
      rgba(16, 24, 40, 0.8)
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
  padding-top: 150px;
`,d=o.h1`
  display: block;
  margin: 0 auto;
  font-weight: 600;
  font-size: 64px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.blockFeatures};
  width: 800px;
`,c=o.p`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.inputs};
  width: 800px;
`,p=o(r)`
  display: block;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.color.blockFeatures};
  border: ${t=>t.theme.border.red};
  border-radius: 10px;
  padding: 17px 18px;
  margin-top: 50px;

  &:hover,
  &:focus {
    text-shadow:
      0 0 5px #d84343,
      0 0 10px #d84343,
      0 0 20px #d84343,
      0 0 40px #d84343;
  }
`,l=()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:e.jsx(a,{children:e.jsxs(s,{children:[e.jsxs("div",{children:[e.jsx(d,{children:"The best way to rent an campers here"}),e.jsx(c,{children:"Discover our Camper models and find your holiday home that meets all the requirements and makes your travel dreams come true. We offer a wide selection of campers and motorhomes from well-known brands."})]}),e.jsx(p,{to:"/catalog",children:"Find campers"})]})})})}),h=()=>e.jsx(l,{});export{h as default};
