(self.webpackChunkjayakrishnan=self.webpackChunkjayakrishnan||[]).push([[989],{5900:function(e,t,a){var l=a(5301).w_;e.exports.z=function(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"}}]})(e)}},8550:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var l=a(7294),n=a(5444);var r=a(5900),c=function(e){var t=e.tags,a=void 0===t?[]:t,c=e.activeTag;return a&&0!==a.length?l.createElement("div",{className:"flex justify-end items-start flex-wrap"},a.map((function(e){return l.createElement(n.Link,{key:"search-tag-"+e,className:c&&e===c?"flex items-center active-tag hover:active-tag":"flex items-center inactive-tag hover:active-tag",to:c&&e===c?"/blog":(t=e,void 0===t&&(t=""),"/tag/"+(t=(null===(a=t)||void 0===a||null===(i=a.replace(/[\W_]+/g,"-"))||void 0===i?void 0:i.toLowerCase())||""))},c&&e===c&&l.createElement(r.z,null),l.createElement("span",null,"  ",function(e){return"#"+e}(e)));var t,a,i}))):null}},832:function(e,t,a){"use strict";a.d(t,{A:function(){return l}});var l=function(e){e=e||1;var t=Math.round(e/5)||1;return t=t>5?5:t,new Array(t).fill("☕️").join("")+" "+e+" min read"}},4870:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(5444),r=a(2140),c=a(3751),i=a(832),m=a(3851),o=a(8550),s=a(1472);t.default=function(e){var t=e.data,a=(e.pageContext,t.markdownRemark),u=t.previous,d=t.next,v=a||{},g=v.frontmatter,f=g.tags,p=g.title,E=g.description,h=g.date,x=g.featuredImage,y=void 0===x?{}:x,k=g.featuredImageAlt,b=v.excerpt,w=v.timeToRead,N=v.html,L=(y||{}).childImageSharp,j=(L=void 0===L?{}:L).gatsbyImageData;return l.createElement(r.Z,null,l.createElement(c.Z,{title:p,description:E||b}),l.createElement(s.Z,null,l.createElement("div",null,l.createElement("article",{className:"post pr-5",itemScope:!0,itemType:"http://schema.org/Article"},j&&l.createElement(m.G,{alt:null!=k?k:"cover image",className:"rounded my-5 max-w-2xl mx-auto ",image:j}),l.createElement("header",null,l.createElement("div",{id:"page-header"}),l.createElement("h1",{itemProp:"headline",className:"text-3xl my-5 mt-14 font-extrabold text-gray-900"},p),l.createElement("p",{className:"text-muted"},l.createElement("small",null,h),l.createElement("small",null," • ",(0,i.A)(w)))),l.createElement("div",{id:"page-content"}),l.createElement("section",{className:"text-gray-500 article-body",dangerouslySetInnerHTML:{__html:N},itemProp:"articleBody"}),l.createElement("div",{id:"page-footer"})),l.createElement("div",{className:"py-5"},l.createElement(o.Z,{tags:f})),l.createElement("hr",null),l.createElement("nav",{className:"border-gray-200 py-4 mb-5"},l.createElement("div",{id:"page-bottom-nav"}),l.createElement("ul",{className:"flex justify-between"},l.createElement("li",null,d&&l.createElement(n.Link,{to:d.fields.slug,rel:"next"},"← ",d.frontmatter.title)),l.createElement("li",null,u&&l.createElement(n.Link,{to:u.fields.slug,rel:"prev"},u.frontmatter.title," →")))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b259d772c34b6049ad33.js.map