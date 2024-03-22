import{s,j as e,u as f,a as u,r as m,f as w}from"./index-e0e5ea83.js";import{n as v}from"./emotion-styled.browser.esm-a4611ca4.js";const b=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,y=t=>t.adverts.items,n="/campers-for-rent/assets/sprite-468f709e.svg",$=s.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
`,r=s.li`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  padding: 12px 18px;
  width: 126px;
  height: 44px;
  background-color: ${t=>t.theme.color.blockFeatures};
`,o=s.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,c=s.svg`
  width: 20px;
  height: 20px;
`,k=({item:t})=>{const{adults:i,engine:x,transmission:h,details:d}=t;return e.jsxs($,{children:[e.jsxs(r,{children:[e.jsx(c,{children:e.jsx("use",{href:`${n}#users`})}),e.jsxs(o,{children:[i," adults"]})]}),h==="automatic"&&e.jsxs(r,{children:[e.jsx(c,{width:"20",height:"20",children:e.jsx("use",{href:`${n}#automatic`})}),e.jsx(o,{children:"Automatic"})]}),x==="petrol"&&e.jsxs(r,{children:[e.jsx(c,{children:e.jsx("use",{href:`${n}#petrol`})}),e.jsx(o,{children:"Petrol"})]}),d.kitchen>0&&e.jsxs(r,{children:[e.jsx(c,{children:e.jsx("use",{href:`${n}#knife`})}),e.jsx(o,{children:"Kitchen"})]}),e.jsxs(r,{children:[e.jsx(c,{children:e.jsx("use",{href:`${n}#bad`})}),e.jsxs(o,{children:[d.beds," beds"]})]}),d.airConditioner>0&&e.jsxs(r,{children:[e.jsx(c,{children:e.jsx("use",{xlinkHref:`${n}#ac`})}),e.jsx(o,{children:"AC"})]})]})},A=s.div`
  border: ${t=>t.theme.border.grey};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  gap: 24px;
`,z=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,I=s.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,F=s.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,L=s.button`
  border: none;
  background: transparent;
  padding: 0;
`,C=s.div`
  display: flex;
  gap: 10px;
`,P=s.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`,S=s.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`,l=s.svg`
  width: 16px;
  height: 16px;
`,T=s.svg`
  width: 24px;
  height: 24px;
`,B=s.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,W=s.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,D=s.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`,E=s.p`
  color: ${t=>t.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`,R=s.button`
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background-color: ${t=>t.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover {
    background-color: #d84343;
  }
`,H=({item:t})=>{const{name:i,price:x,rating:h,location:d,description:a,gallery:p,reviews:g}=t,j=x.toFixed(2);return e.jsxs(A,{children:[e.jsx(P,{children:e.jsx(S,{src:p[1],alt:i})}),e.jsxs("div",{children:[e.jsxs(z,{children:[e.jsx(I,{children:i}),e.jsxs(C,{children:[e.jsxs(F,{children:["€",j]}),e.jsx(L,{type:"button",children:e.jsx(T,{children:e.jsx("use",{href:`${n}#heartDefault`})})})]})]}),e.jsxs(B,{children:[e.jsxs(W,{children:[e.jsx(l,{children:e.jsx("use",{href:`${n}#star`})}),h," (",g.length," Reviews)"]}),e.jsxs(D,{children:[e.jsx(l,{children:e.jsx("use",{href:`${n}#map-pin`})}),d]})]}),e.jsx(E,{children:a}),e.jsx(k,{item:t}),e.jsx(R,{type:"button",children:"Show more"})]})]})},K=({items:t})=>e.jsx("ul",{children:t.map(i=>e.jsx("li",{children:e.jsx(H,{item:i})},i._id))}),_=()=>{const t=f(y),i=u();return m.useEffect(()=>{i(w())},[i]),e.jsx(b,{children:t.length>0&&e.jsx(K,{items:t})})};export{_ as default};
