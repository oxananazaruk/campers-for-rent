import{s as t,j as e,r as l,u as v,a as w,f as y}from"./index-dcb8084b.js";import{n as u}from"./emotion-styled.browser.esm-6993f4d5.js";const k=u.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,$=u.div`
  display: flex;
  gap: 64px;
  /* justify-content: center; */
`,L=i=>i.adverts.items,s="/campers-for-rent/assets/sprite-468f709e.svg",A=t.ul`
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
  background-color: ${i=>i.theme.color.blockFeatures};
`,d=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,p=t.svg`
  width: 20px;
  height: 20px;
`,S=({item:i})=>{const{adults:r,engine:n,transmission:c,details:o}=i;return e.jsxs(A,{children:[e.jsxs(x,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#users`})}),e.jsxs(d,{children:[r," adults"]})]}),c==="automatic"&&e.jsxs(x,{children:[e.jsx(p,{width:"20",height:"20",children:e.jsx("use",{href:`${s}#automatic`})}),e.jsx(d,{children:"Automatic"})]}),n==="petrol"&&e.jsxs(x,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#petrol`})}),e.jsx(d,{children:"Petrol"})]}),o.kitchen>0&&e.jsxs(x,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#knife`})}),e.jsx(d,{children:"Kitchen"})]}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#bad`})}),e.jsxs(d,{children:[o.beds," beds"]})]}),o.airConditioner>0&&e.jsxs(x,{children:[e.jsx(p,{children:e.jsx("use",{xlinkHref:`${s}#ac`})}),e.jsx(d,{children:"AC"})]})]})},z=t.div`
  border: ${i=>i.theme.border.grey};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  gap: 24px;
`,C=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,I=t.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,W=t.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,F=t.button`
  border: none;
  background: transparent;
  padding: 0;
`,B=t.div`
  display: flex;
  gap: 10px;
`,T=t.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`,q=t.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`,a=t.svg`
  width: 16px;
  height: 16px;
`,P=t.svg`
  width: 24px;
  height: 24px;
`,R=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,D=t.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,E=t.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`,K=t.p`
  color: ${i=>i.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`,M=t.button`
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background-color: ${i=>i.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`,V=({item:i})=>{const{name:r,price:n,rating:c,location:o,description:h,gallery:m,reviews:f}=i,b=n.toFixed(2);return e.jsxs(z,{children:[e.jsx(T,{children:e.jsx(q,{src:m[1],alt:r})}),e.jsxs("div",{children:[e.jsxs(C,{children:[e.jsx(I,{children:r}),e.jsxs(B,{children:[e.jsxs(W,{children:["€",b]}),e.jsx(F,{type:"button",children:e.jsx(P,{children:e.jsx("use",{href:`${s}#heartDefault`})})})]})]}),e.jsxs(R,{children:[e.jsxs(D,{children:[e.jsx(a,{children:e.jsx("use",{href:`${s}#star`})}),c," (",f.length," Reviews)"]}),e.jsxs(E,{children:[e.jsx(a,{children:e.jsx("use",{href:`${s}#map-pin`})}),o]})]}),e.jsx(K,{children:h}),e.jsx(S,{item:i}),e.jsx(M,{type:"button",children:"Show more"})]})]})},H=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,N=t.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 100px;
`,U=t.button`
  border: ${i=>i.theme.border.grey};
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
    border: ${i=>i.theme.border.red};
  }
`,Y=({items:i,onLoadMare:r})=>e.jsxs(H,{children:[e.jsx(N,{children:i.map(n=>e.jsx("li",{children:e.jsx(V,{item:n})},n._id))}),e.jsx(U,{type:"button",onClick:r,children:"Load more"})]}),_=t.div`
  width: 360px;
  padding-top: 100px;
`,g=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`,G=t.label`
  position: relative;
`,J=t.input`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${i=>i.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`,O=t.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`,Q=t.svg`
  width: 32px;
  height: 32px;
`,X=t.div`
  margin-top: 14px;
`,j=t.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`,Z=t.div`
  margin-top: 32px;
`,ee=()=>e.jsx(_,{children:e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx(g,{children:"Location"}),e.jsxs(G,{children:[e.jsx(J,{type:"text",placeholder:"Kyiv, Ukraine"}),e.jsx(O,{width:"18",height:"20",children:e.jsx("use",{href:`${s}#map-pin`})})]})]}),e.jsxs("div",{children:[e.jsx(g,{children:"Filters"}),e.jsxs(X,{children:[e.jsx(j,{children:"Vehicle equipment"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"ac"}),e.jsx(Q,{children:e.jsx("use",{xlinkHref:`${s}#ac`})}),"AC"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"automatic"}),"Automatic"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"kitchen"}),"Kitchen"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"tv"}),"TV"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"shower/WC"}),"Shower/WC"]})]}),e.jsx(Z,{children:e.jsx(j,{children:"Vehicle type"})})]}),e.jsx("button",{children:"Search"})]})}),se=()=>{const[i,r]=l.useState(1),n=v(L),c=w();l.useEffect(()=>{c(y(i))},[c,i]);const o=()=>{r(h=>h+=1)};return e.jsx(k,{children:e.jsxs($,{children:[e.jsx(ee,{}),n.length>0&&e.jsx(Y,{items:n,onLoadMare:o})]})})};export{se as default};
