
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_m(0)],1),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"project-management"}},[_c('span',{staticClass:"anchor",attrs:{"id":"project-management"}}),_v("Project management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-management","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This page contains info relevant to project management activities, typically done by senior dev team members.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"automated-release"}},[_c('span',{staticClass:"anchor",attrs:{"id":"automated-release"}}),_v("Automated release"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#automated-release","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Follow these steps to release a new version of CATcher using a GitHub Actions' workflow.")]),_v(" "),_c('ol',[_c('li',[_v("Create and merge a Pull Request that updates CATcher's version number in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" file.")]),_v(" "),_c('li',[_v("Navigate to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Actions")]),_v(" Tab of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CATcher")]),_v(" repository and start the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Draft Deployment")]),_v(" Workflow.\n"),_c('ul',[_c('li',[_v("This workflow deploys the web app and creates a Draft Release containing the desktop app's executables")])])]),_v(" "),_c('li',[_v("Edit the Draft Release:\n"),_c('ul',[_c('li',[_v("Update the description with a changelog that describes any new features or bug fixes")])])]),_v(" "),_c('li',[_v("Publish the release.")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"manual-release"}},[_c('span',{staticClass:"anchor",attrs:{"id":"manual-release"}}),_v("Manual release"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#manual-release","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Follow these steps to manually release a new version of CATcher:")]),_v(" "),_c('ol',[_c('li',[_v("Create and merge a Pull Request that updates CATcher's version number in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" file.")]),_v(" "),_c('li',[_v("Build the CATcher desktop application's executables for Linux, MacOS and Windows")]),_v(" "),_c('li',[_v("Build the CATcher web application, and then deploy it onto CATcher's "),_c('a',{attrs:{"href":"https://catcher-org.github.io/CATcher/"}},[_v("GitHub Pages site")])]),_v(" "),_c('li',[_v("Create a release on GitHub:\n"),_c('ul',[_c('li',[_v("Upload the desktop app's executables")]),_v(" "),_c('li',[_v("Under the description, include a changelog that describes any new features or bug fixes")])])]),_v(" "),_c('li',[_v("Publish the release.")])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.0.6")]),_v(", generated on Sun, 7 Nov 2021, 15:05:09 UTC]")])])])}
}];
  