(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{41:function(e,t,r){"use strict";t.a=r.p+"static/media/rentic.a6c28748.png"},42:function(e,t,r){"use strict";t.a=r.p+"static/media/main.dac60df5.png"},43:function(e,t,r){"use strict";t.a=r.p+"static/media/main.ed7b7d63.png"},44:function(e,t,r){"use strict";t.a=r.p+"static/media/main.f8982624.png"},45:function(e,t,r){"use strict";t.a=r.p+"static/media/chatbrewery.83177a33.png"},46:function(e,t,r){"use strict";t.a=r.p+"static/media/onchain-investing-1.67b304d7.jpg"},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return g}));var a=r(8),i=r(1),c=r(41),n=r(42),s=r(43),o=r(44),l=r(45),d=[{id:1,title:"Onchain Investing",category:"Blockchain Android Mobile Application",img:r(46).a,ProjectHeader:{title:"Onchain Investing",publishDate:"Jul 26, 2021",tags:"Android / Mobile / UI / Frontend"}},{id:2,title:"CharityChain",category:"Blockchain Web Application",img:n.a,ProjectHeader:{title:"CharityChain",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:3,title:"Campsite Booker",category:"Web Application",img:s.a,ProjectHeader:{title:"Campsite Booker",publishDate:"Jul 14, 2022",tags:"UI / Frontend"}},{id:4,title:"Country Detail",category:"iOS Application",img:o.a,ProjectHeader:{title:"Country Detail",publishDate:"Oct 24, 2022",tags:"iOS / Mobile / UI / Frontend"}},{id:5,title:"Rentic",category:"Android Mobile Application",img:c.a,ProjectHeader:{title:"Rentic",publishDate:"Oct 24, 2022",tags:"Android / Mobile / UI / Frontend"}},{id:6,title:"ChatBrewery",category:"Android Mobile Application",img:l.a,ProjectHeader:{title:"ChatBrewery",publishDate:"Aug 8, 2023",tags:"Android / Mobile / UI / Frontend"}}],m=r(2),j=Object(i.createContext)(),g=function(e){var t=Object(i.useState)(d),r=Object(a.a)(t,2),c=r[0],n=r[1],s=Object(i.useState)(""),o=Object(a.a)(s,2),l=o[0],g=o[1],b=Object(i.useState)(""),u=Object(a.a)(b,2),p=u[0],x=u[1],h=c.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),y=c.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(p)}));return Object(m.jsx)(j.Provider,{value:{projects:c,setProjects:n,searchProject:l,setSearchProject:g,searchProjectsByTitle:h,selectProject:p,setSelectProject:x,selectProjectsByCategory:y},children:e.children})}},48:function(e,t,r){"use strict";var a=r(1),i=r(6),c=r(39),n=r(13),s=r(2),o=function(e){var t=e.title,r=e.category,a=e.image,i=e.id;return Object(s.jsx)(c.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(s.jsx)(n.b,{to:"/projects/single-project/".concat(i),"aria-label":"Single Project",children:Object(s.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(s.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(s.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(s.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},l=r(47),d=["Web Application","Mobile Application","UI/UX Design","Branding"],m=function(e){var t=e.setSelectProject;return Object(s.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(s.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(s.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(l.a),t=e.projects,r=e.searchProject,c=e.setSearchProject,n=e.searchProjectsByTitle,d=e.selectProject,j=e.setSelectProject,g=e.selectProjectsByCategory;return Object(s.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(s.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(s.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(s.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(s.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(s.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(s.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(s.jsx)("input",{onChange:function(e){c(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(s.jsx)(m,{setSelectProject:j})]})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?g.map((function(e){return Object(s.jsx)(o,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)})):r?n.map((function(e){return Object(s.jsx)(o,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)})):t.map((function(e){return Object(s.jsx)(o,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)}))})]})}},51:function(e,t,r){"use strict";r.r(t);var a=r(48),i=r(47),c=r(2);t.default=function(){return Object(c.jsx)(i.b,{children:Object(c.jsx)("div",{className:"container mx-auto",children:Object(c.jsx)(a.a,{})})})}}}]);
//# sourceMappingURL=4.6280f88c.chunk.js.map