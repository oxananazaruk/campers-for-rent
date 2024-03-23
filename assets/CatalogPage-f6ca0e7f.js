import{s as t,j as e,r as u,u as C,a as L,f as F}from"./index-dbc6998f.js";import{n as w}from"./emotion-styled.browser.esm-0c734b6d.js";const z=w.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,I=w.div`
  display: flex;
  gap: 64px;
  /* justify-content: center; */
`,S=s=>s.adverts.items,i="/campers-for-rent/assets/sprite-7189a4a6.svg",A=t.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
`,x=t.li`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  padding: 12px 18px;
  width: 126px;
  height: 44px;
  background-color: ${s=>s.theme.color.blockFeatures};
`,h=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,d=t.svg`
  width: 20px;
  height: 20px;
`,W=({item:s})=>{const{adults:r,engine:n,transmission:c,details:o}=s;return e.jsxs(A,{children:[e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#users`})}),e.jsxs(h,{children:[r," adults"]})]}),c==="automatic"&&e.jsxs(x,{children:[e.jsx(d,{width:"20",height:"20",children:e.jsx("use",{href:`${i}#automatic`})}),e.jsx(h,{children:"Automatic"})]}),n==="petrol"&&e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#petrol`})}),e.jsx(h,{children:"Petrol"})]}),o.kitchen>0&&e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#knife`})}),e.jsx(h,{children:"Kitchen"})]}),e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#bad`})}),e.jsxs(h,{children:[o.beds," beds"]})]}),o.airConditioner>0&&e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{xlinkHref:`${i}#ac`})}),e.jsx(h,{children:"AC"})]})]})},B=t.div`
  border: ${s=>s.theme.border.grey};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  gap: 24px;
`,T=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,q=t.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,N=t.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,P=t.button`
  border: none;
  background: transparent;
  padding: 0;
`,R=t.div`
  display: flex;
  gap: 10px;
`,D=t.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`,E=t.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`,f=t.svg`
  width: 16px;
  height: 16px;
`,K=t.svg`
  width: 24px;
  height: 24px;
`,M=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,V=t.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,H=t.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`,U=t.p`
  color: ${s=>s.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`,X=t.button`
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background-color: ${s=>s.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`,Y=({item:s})=>{const{name:r,price:n,rating:c,location:o,description:m,gallery:k,reviews:y}=s,$=n.toFixed(2);return e.jsxs(B,{children:[e.jsx(D,{children:e.jsx(E,{src:k[1],alt:r})}),e.jsxs("div",{children:[e.jsxs(T,{children:[e.jsx(q,{children:r}),e.jsxs(R,{children:[e.jsxs(N,{children:["€",$]}),e.jsx(P,{type:"button",children:e.jsx(K,{children:e.jsx("use",{href:`${i}#heartDefault`})})})]})]}),e.jsxs(M,{children:[e.jsxs(V,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#star`})}),c," (",y.length," Reviews)"]}),e.jsxs(H,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#map-pin`})}),o]})]}),e.jsx(U,{children:m}),e.jsx(W,{item:s}),e.jsx(X,{type:"button",children:"Show more"})]})]})},_=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,G=t.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 100px;
`,J=t.button`
  border: ${s=>s.theme.border.grey};
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  &:hover,
  &:focus {
    border: ${s=>s.theme.border.red};
  }
`,O=({items:s,onLoadMare:r})=>e.jsxs(_,{children:[e.jsx(G,{children:s.map(n=>e.jsx("li",{children:e.jsx(Y,{item:n})},n._id))}),e.jsx(J,{type:"button",onClick:r,children:"Load more"})]}),Q=t.div`
  width: 360px;
  padding-top: 100px;
`,b=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`,Z=t.label`
  position: relative;
`,ee=t.input`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${s=>s.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`,te=t.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`,a=t.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
`,se=t.div`
  margin-top: 14px;
`,v=t.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`,ie=t.ul`
  display: flex;
  row-gap: 8px;
  column-gap: 10px;
  flex-wrap: wrap;
`,p=t.li`
  position: relative;
`,l=t.label`
  border: ${s=>s.theme.border.grey};
  border-radius: 10px;
  padding: 17px 27px;
  width: 113px;
  height: 95px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
  display: block;
`,g=t.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  &:checked + .castomChekbox {
    border: ${s=>s.theme.border.red};
  }
`,j=t.p`
  display: block;
  margin-top: 40px;
`,ne=t.div`
  margin-top: 32px;
`,re=t.button`
  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background-color: ${s=>s.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`,oe=()=>e.jsx(Q,{children:e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx(b,{children:"Location"}),e.jsxs(Z,{children:[e.jsx(ee,{type:"text",placeholder:"Kyiv, Ukraine"}),e.jsx(te,{width:"18",height:"20",children:e.jsx("use",{href:`${i}#map-pin`})})]})]}),e.jsxs("div",{children:[e.jsx(b,{children:"Filters"}),e.jsxs(se,{children:[e.jsx(v,{children:"Vehicle equipment"}),e.jsxs(ie,{children:[e.jsxs(p,{children:[e.jsx(a,{children:e.jsx("use",{href:`${i}#ac`})}),e.jsx(g,{type:"checkbox",name:"equipment",value:"ac",id:"ac"}),e.jsx(l,{htmlFor:"ac",className:"castomChekbox",children:e.jsx(j,{children:"AC"})})]}),e.jsxs(p,{children:[e.jsx(a,{children:e.jsx("use",{href:`${i}#automatic`})}),e.jsx(g,{type:"checkbox",name:"equipment",value:"automatic",id:"automatic"}),e.jsx(l,{htmlFor:"automatic",className:"castomChekbox",children:e.jsx(j,{children:"Automatic"})})]}),e.jsxs(p,{children:[e.jsx(a,{children:e.jsx("use",{href:`${i}#knife`})}),e.jsx(g,{type:"checkbox",name:"equipment",value:"kitchen",id:"kitchen"}),e.jsx(l,{htmlFor:"kitchen",className:"castomChekbox",children:e.jsx(j,{children:"Kitchen"})})]}),e.jsxs(p,{children:[e.jsx(a,{children:e.jsx("use",{href:`${i}#tv`})}),e.jsx(g,{type:"checkbox",name:"equipment",value:"tv",id:"tv"}),e.jsx(l,{htmlFor:"tv",className:"castomChekbox",children:e.jsx(j,{children:"TV"})})]}),e.jsxs(p,{children:[e.jsx(a,{children:e.jsx("use",{href:`${i}#shower`})}),e.jsx(g,{type:"checkbox",name:"equipment",value:"shower/WC",id:"shower"}),e.jsx(l,{htmlFor:"shower",className:"castomChekbox",children:e.jsx(j,{children:"Shower/WC"})})]})]})]}),e.jsx(ne,{children:e.jsx(v,{children:"Vehicle type"})})]}),e.jsx(re,{children:"Search"})]})}),he=()=>{const[s,r]=u.useState(1),n=C(S),c=L();u.useEffect(()=>{c(F(s))},[c,s]);const o=()=>{r(m=>m+=1)};return e.jsx(z,{children:e.jsxs(I,{children:[e.jsx(oe,{}),n.length>0&&e.jsx(O,{items:n,onLoadMare:o})]})})};export{he as default};
