(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14],{323:function(t,e,a){"use strict";a.r(e);var o=a(322),n=a(320),r=a(321),s=a(325),i=a(60),l={name:"Layout",components:{Home:o.a,Page:r.a,Sidebar:s.a,Navbar:n.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=a(10),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=c.exports},412:function(t,e,a){t.exports=a(413)},413:function(t,e,a){"use strict";
/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */function o(t){return" "===t||"\n"===t||"\r"===t||"\t"===t}t.exports=function(t,e){var a,n,r=0,s=0,i=t.length-1;for((e=e||{}).wordsPerMinute=e.wordsPerMinute||200,a=e.wordBound||o;a(t[s]);)s++;for(;a(t[i]);)i--;for(n=s;n<=i;){for(;n<=i&&!a(t[n]);n++);for(r++;n<=i&&a(t[n]);n++);}var l=r/e.wordsPerMinute,u=60*l*1e3;return{text:Math.ceil(l.toFixed(2))+" min read",minutes:l,time:u,words:r}}},424:function(t,e,a){"use strict";a.r(e);a(79),a(22),a(25);var o=a(323),n=a(324),r=(a(412),{name:"BlogPostLayout",extends:o.default,components:{Footer:n.a},computed:{date:function(){return new Date(this.$page.frontmatter.date)}},methods:{fullsize:function(t){return t.replace(/^\/blog/,"/blog/fullsize")}}}),s=a(10),i=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,attrs:{id:"blog"},on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("i-container",{attrs:{id:"blog-post"}},[a("i-row",[a("i-column",[a("article",[a("h1",{staticClass:"blog-post-title"},[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),a("p",{staticClass:"blog-post-excerpt"},[t._v(t._s(t.$page.frontmatter.excerpt))]),t._v(" "),a("ul",{staticClass:"blog-post-meta list -inline"},[a("li",[t._v("Published on "+t._s(t._f("dateFormat")(t.date,"MMMM DD, YYYY")))]),t._v(" "),a("li",[t._v("·")]),t._v(" "),a("li",[t._v(t._s(t.$page.readingTime.text))])]),t._v(" "),a("div",{staticClass:"blog-post-image"},[a("img",{staticClass:"image -fluid",attrs:{src:t.fullsize(t.$withBase(t.$page.frontmatter.image)),alt:t.$page.title}})]),t._v(" "),a("Content",{staticClass:"theme-default-content"})],1)])],1)],1),t._v(" "),a("Footer")],1)}),[],!1,null,null,null);e.default=i.exports}}]);