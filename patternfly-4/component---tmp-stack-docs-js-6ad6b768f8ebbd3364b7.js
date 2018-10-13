webpackJsonp([0xe2ca968c7fe7,0xbc7d7b1b9bbd,72201024063061],{781:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(4),o=n(226),c=r(o),i=n(227),l=r(i);e.default={title:"Stack",components:{Stack:a.Stack,StackItem:a.StackItem},enumValues:{"Object.keys(GutterSize)":Object.keys(a.GutterSize)},examples:[c.default,l.default]},t.exports=e.default},226:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var i=n(2),l=r(i),u=n(4),f=n(51),s=r(f),p=function(t){function e(){return a(this,e),o(this,t.apply(this,arguments))}return c(e,t),e.prototype.render=function(){return l.default.createElement(u.Stack,null,l.default.createElement(u.StackItem,null,"Secondary content"),l.default.createElement(u.StackItem,{isMain:!0},"Primary Content"),l.default.createElement(u.StackItem,null,"Secondary content"))},e}(l.default.Component);p.title="Simple Stack Layout",p.getContainerProps=s.default,e.default=p,p.__docgenInfo={description:"",displayName:"SimpleStack"},t.exports=e.default},632:function(t,e){t.exports="import React from 'react';\nimport { Stack, StackItem } from '@patternfly/react-core';\nimport getContainerProps from './common/getContainerProps';\n\nclass SimpleStack extends React.Component {\n  static title = 'Simple Stack Layout';\n  static getContainerProps = getContainerProps;\n\n  render() {\n    return (\n      <Stack>\n        <StackItem>Secondary content</StackItem>\n        <StackItem isMain>Primary Content</StackItem>\n        <StackItem>Secondary content</StackItem>\n      </Stack>\n    );\n  }\n}\n\nexport default SimpleStack;\n"},227:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var i=n(2),l=r(i),u=n(4),f=n(51),s=r(f),p=function(t){function e(){return a(this,e),o(this,t.apply(this,arguments))}return c(e,t),e.prototype.render=function(){return l.default.createElement(u.Stack,{gutter:"md"},l.default.createElement(u.StackItem,null,"Secondary content"),l.default.createElement(u.StackItem,{isMain:!0},"Primary Content"),l.default.createElement(u.StackItem,null,"Secondary content"))},e}(l.default.Component);p.title="Stack Layout With Gutter",p.getContainerProps=s.default,e.default=p,p.__docgenInfo={description:"",displayName:"StackWithGutter"},t.exports=e.default},633:function(t,e){t.exports="import React from 'react';\nimport { Stack, StackItem } from '@patternfly/react-core';\nimport getContainerProps from './common/getContainerProps';\n\nclass StackWithGutter extends React.Component {\n  static title = 'Stack Layout With Gutter';\n  static getContainerProps = getContainerProps;\n\n  render() {\n    return (\n      <Stack gutter=\"md\">\n        <StackItem>Secondary content</StackItem>\n        <StackItem isMain>Primary Content</StackItem>\n        <StackItem>Secondary content</StackItem>\n      </Stack>\n    );\n  }\n}\n\nexport default StackWithGutter;\n"},51:function(t,e,n){"use strict";e.__esModule=!0;var r=n(5),a=n(7),o=r.StyleSheet.create({demoLayout:{"& .pf-l-stack > .pf-l-stack__item":{minHeight:35,borderWidth:a.global_BorderWidth_md.var,borderStyle:"dashed",borderColor:a.global_BorderColor.var}}});e.default=function(){return{className:(0,r.css)(o.demoLayout)}},t.exports=e.default},825:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(2),c=r(o),i=n(781),l=r(i),u=n(15),f=r(u),s=[{name:"SimpleStack",path:"../../react-core/src/layouts/Stack/examples/SimpleStack.js",file:n(632)},{name:"StackWithGutter",path:"../../react-core/src/layouts/Stack/examples/StackWithGutter.js",file:n(633)}],p=[{name:"pf_logo.svg",file:n(10)},{name:"pf_mini_logo_white.svg",file:n(11)},{name:"img_avatar.png",file:n(13)},{name:"pf_logo.svg",file:n(14)},{name:"img_avatar.png",file:n(8)},{name:"l_pf-reverse-164x11.png",file:n(9)},{name:"pfbg_992.jpg",file:n(12)}];e.default=function(){return c.default.createElement(f.default,a({rawExamples:s,images:p},l.default))},t.exports=e.default}});
//# sourceMappingURL=component---tmp-stack-docs-js-6ad6b768f8ebbd3364b7.js.map