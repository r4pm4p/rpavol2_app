var N=Object.defineProperty;var M=(r,e,t)=>e in r?N(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var m=(r,e,t)=>M(r,typeof e!="symbol"?e+"":e,t);import{d as p,c as a,i as d,v as i,f as u,t as f,l as _,F as g,o as c}from"./index-D5bJCSK_.js";class x{constructor(){m(this,"errorMessage");this.errorMessage=""}}const b={key:0,class:"text-rose-600 text-sm"},k=p({__name:"Email",props:{controller:x,reference:Object,referenceName:String},setup(r){const e=r;return(t,s)=>{var o,n;return c(),a(g,null,[d(u("input",{class:"p-3 border rounded-md mt-1 mb-1",type:"text",placeholder:"Email.....","onUpdate:modelValue":s[0]||(s[0]=l=>e.reference[e.referenceName]=l)},null,512),[[i,e.reference[e.referenceName]]]),(o=e.controller)!=null&&o.errorMessage?(c(),a("p",b,f((n=e.controller)==null?void 0:n.errorMessage),1)):_("",!0)],64)}}}),y={key:0,class:"text-rose-600 text-sm"},S=p({__name:"Password",props:{controller:x,reference:Object,referenceName:String},setup(r){const e=r;return(t,s)=>{var o,n;return c(),a(g,null,[d(u("input",{class:"p-3 border rounded-md mt-1 mb-1",type:"password",placeholder:"Secret Pass.....","onUpdate:modelValue":s[0]||(s[0]=l=>e.reference[e.referenceName]=l)},null,512),[[i,e.reference[e.referenceName]]]),(o=e.controller)!=null&&o.errorMessage?(c(),a("p",y,f((n=e.controller)==null?void 0:n.errorMessage),1)):_("",!0)],64)}}});export{x as C,k as _,S as a};
