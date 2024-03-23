import{s as t,j as e,r as j,u as k,a as $,f as L}from"./index-88330dd8.js";import{n as b}from"./emotion-styled.browser.esm-04bcca65.js";const C=b.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,z=b.div`
  display: flex;
  gap: 64px;
  /* justify-content: center; */
`,A=i=>i.adverts.items,n="/campers-for-rent/assets/sprite-7189a4a6.svg",S=t.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
`,c=t.li`
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
`,I=({item:i})=>{const{adults:r,engine:s,transmission:x,details:o}=i;return e.jsxs(S,{children:[e.jsxs(c,{children:[e.jsx(p,{children:e.jsx("use",{href:`${n}#users`})}),e.jsxs(d,{children:[r," adults"]})]}),x==="automatic"&&e.jsxs(c,{children:[e.jsx(p,{width:"20",height:"20",children:e.jsx("use",{href:`${n}#automatic`})}),e.jsx(d,{children:"Automatic"})]}),s==="petrol"&&e.jsxs(c,{children:[e.jsx(p,{children:e.jsx("use",{href:`${n}#petrol`})}),e.jsx(d,{children:"Petrol"})]}),o.kitchen>0&&e.jsxs(c,{children:[e.jsx(p,{children:e.jsx("use",{href:`${n}#knife`})}),e.jsx(d,{children:"Kitchen"})]}),e.jsxs(c,{children:[e.jsx(p,{children:e.jsx("use",{href:`${n}#bad`})}),e.jsxs(d,{children:[o.beds," beds"]})]}),o.airConditioner>0&&e.jsxs(c,{children:[e.jsx(p,{children:e.jsx("use",{xlinkHref:`${n}#ac`})}),e.jsx(d,{children:"AC"})]})]})},W=t.div`
  border: ${i=>i.theme.border.grey};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  gap: 24px;
`,F=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,T=t.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,B=t.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,q=t.button`
  border: none;
  background: transparent;
  padding: 0;
`,H=t.div`
  display: flex;
  gap: 10px;
`,P=t.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`,R=t.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`,u=t.svg`
  width: 16px;
  height: 16px;
`,D=t.svg`
  width: 24px;
  height: 24px;
`,E=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,K=t.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,M=t.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`,V=t.p`
  color: ${i=>i.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`,N=t.button`
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
`,U=({item:i})=>{const{name:r,price:s,rating:x,location:o,description:g,gallery:v,reviews:w}=i,y=s.toFixed(2);return e.jsxs(W,{children:[e.jsx(P,{children:e.jsx(R,{src:v[1],alt:r})}),e.jsxs("div",{children:[e.jsxs(F,{children:[e.jsx(T,{children:r}),e.jsxs(H,{children:[e.jsxs(B,{children:["€",y]}),e.jsx(q,{type:"button",children:e.jsx(D,{children:e.jsx("use",{href:`${n}#heartDefault`})})})]})]}),e.jsxs(E,{children:[e.jsxs(K,{children:[e.jsx(u,{children:e.jsx("use",{href:`${n}#star`})}),x," (",w.length," Reviews)"]}),e.jsxs(M,{children:[e.jsx(u,{children:e.jsx("use",{href:`${n}#map-pin`})}),o]})]}),e.jsx(V,{children:g}),e.jsx(I,{item:i}),e.jsx(N,{type:"button",children:"Show more"})]})]})},Y=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`,_=t.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 100px;
`,G=t.button`
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
`,J=({items:i,onLoadMare:r})=>e.jsxs(Y,{children:[e.jsx(_,{children:i.map(s=>e.jsx("li",{children:e.jsx(U,{item:s})},s._id))}),e.jsx(G,{type:"button",onClick:r,children:"Load more"})]}),O=t.div`
  width: 360px;
  padding-top: 100px;
`,f=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`,Q=t.label`
  position: relative;
`,X=t.input`
  border: none;
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: ${i=>i.theme.color.inputs};
  margin-top: 8px;
  margin-bottom: 32px;
`,Z=t.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`,h=t.svg`
  width: 32px;
  height: 32px;
`,ee=t.div`
  margin-top: 14px;
`,m=t.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 48px;
`,te=t.div`
  display: flex;
  row-gap: 8px;
  column-gap: 10px;
  flex-wrap: wrap;
`,l=t.div`
  border: ${i=>i.theme.border.grey};
  border-radius: 10px;
  padding: 17px 27px;
  width: 113px;
  height: 95px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,a=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,ie=t.div`
  margin-top: 32px;
`,ne=()=>e.jsx(O,{children:e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx(f,{children:"Location"}),e.jsxs(Q,{children:[e.jsx(X,{type:"text",placeholder:"Kyiv, Ukraine"}),e.jsx(Z,{width:"18",height:"20",children:e.jsx("use",{href:`${n}#map-pin`})})]})]}),e.jsxs("div",{children:[e.jsx(f,{children:"Filters"}),e.jsxs(ee,{children:[e.jsx(m,{children:"Vehicle equipment"}),e.jsxs(te,{children:[e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{xlinkHref:`${n}#ac`})}),e.jsx(a,{children:"AC"}),e.jsx("input",{type:"checkbox",name:"equipment",value:"ac"})]}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{xlinkHref:`${n}#automatic`})}),e.jsx(a,{children:"Automatic"}),e.jsx("input",{type:"checkbox",name:"equipment",value:"automatic"})]}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{xlinkHref:`${n}#knife`})}),e.jsx(a,{children:"Kitchen"}),e.jsx("input",{type:"checkbox",name:"equipment",value:"kitchen"})]}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{xlinkHref:`${n}#tv`})}),e.jsx(a,{children:"TV"}),e.jsx("input",{type:"checkbox",name:"equipment",value:"tv"})]}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{xlinkHref:`${n}#shower`})}),e.jsx(a,{children:"Shower/WC"}),e.jsx("input",{type:"checkbox",name:"equipment",value:"shower/WC"})]})]})]}),e.jsx(ie,{children:e.jsx(m,{children:"Vehicle type"})})]}),e.jsx("button",{children:"Search"})]})}),oe=()=>{const[i,r]=j.useState(1),s=k(A),x=$();j.useEffect(()=>{x(L(i))},[x,i]);const o=()=>{r(g=>g+=1)};return e.jsx(C,{children:e.jsxs(z,{children:[e.jsx(ne,{}),s.length>0&&e.jsx(J,{items:s,onLoadMare:o})]})})};export{oe as default};
