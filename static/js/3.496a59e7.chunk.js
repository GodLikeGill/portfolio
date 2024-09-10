(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{41:function(e,t,r){"use strict";t.a=r.p+"static/media/main.dac60df5.png"},42:function(e,t,r){"use strict";t.a=r.p+"static/media/main.ed7b7d63.png"},43:function(e,t,r){"use strict";t.a=r.p+"static/media/onchain-investing-1.67b304d7.jpg"},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return d}));var a=r(8),i=r(1),s=r(41),n=r(42),c=[{id:1,title:"Onchain Investing",category:"Blockchain Android Mobile Application",img:r(43).a,ProjectHeader:{title:"Onchain Investing",publishDate:"Jul 26, 2021",tags:"Android / Mobile / UI / Frontend"}},{id:2,title:"CharityChain",category:"Blockchain Web Application",img:s.a,ProjectHeader:{title:"CharityChain",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:3,title:"Campsite Booker",category:"Web Application",img:n.a,ProjectHeader:{title:"Campsite Booker",publishDate:"Jul 14, 2022",tags:"UI / Frontend"}}],l=r(2),o=Object(i.createContext)(),d=function(e){var t=Object(i.useState)(c),r=Object(a.a)(t,2),s=r[0],n=r[1],d=Object(i.useState)(""),m=Object(a.a)(d,2),j=m[0],x=m[1],g=Object(i.useState)(""),b=Object(a.a)(g,2),u=b[0],p=b[1],h=s.filter((function(e){return e.title.toLowerCase().includes(j.toLowerCase())||""===j?e:""})),y=s.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(u)}));return Object(l.jsx)(o.Provider,{value:{projects:s,setProjects:n,searchProject:j,setSearchProject:x,searchProjectsByTitle:h,selectProject:u,setSelectProject:p,selectProjectsByCategory:y},children:e.children})}},45:function(e,t,r){"use strict";var a=r(1),i=r(6),s=r(39),n=r(13),c=r(2),l=function(e){var t=e.title,r=e.category,a=e.image,i=e.id;return Object(c.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(c.jsx)(n.b,{to:"/projects/single-project/".concat(i),"aria-label":"Single Project",children:Object(c.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(c.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(c.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(c.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},o=r(44),d=["Web Application","Mobile Application","UI/UX Design","Branding"],m=function(e){var t=e.setSelectProject;return Object(c.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(c.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(c.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(o.a),t=e.projects,r=e.searchProject,s=e.setSearchProject,n=e.searchProjectsByTitle,d=e.selectProject,j=e.setSelectProject,x=e.selectProjectsByCategory;return Object(c.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(c.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(c.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(c.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(c.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(c.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(c.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(c.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(c.jsx)(m,{setSelectProject:j})]})]}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?x.map((function(e){return Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)})):r?n.map((function(e){return Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)})):t.map((function(e){return Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)}))})]})}},53:function(e,t,r){"use strict";r.r(t);var a=r(13),i=r(8),s=r(23),n=r(6),c=r.p+"static/media/developer.2f084608.svg",l=r.p+"static/media/developer-dark.aa2700b5.svg",o=r(39),d=r(2),m=function(){var e=Object(s.a)(),t=Object(i.a)(e,1)[0];return Object(d.jsxs)(o.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(d.jsx)(o.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I'm Jatin"}),Object(d.jsx)(o.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"An Android Developer & Software Developer"}),Object(d.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(d.jsxs)("a",{download:"Jatin-Resume.pdf",href:"/files/Jatin-Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(d.jsx)(n.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(d.jsx)(o.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(d.jsx)("img",{src:"dark"===t?c:l,alt:"Developer"})})]})},j=r(45),x=r(44),g=r(18);t.default=function(){return Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsx)(m,{}),Object(d.jsx)(x.b,{children:Object(d.jsx)(j.a,{})}),Object(d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(d.jsx)(a.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(d.jsx)(g.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.496a59e7.chunk.js.map