webpackJsonp([19762096046040],{157:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),u=o(l),c=n(4),s=function(e){function t(){var n,o,r;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=o=i(this,e.call.apply(e,[this].concat(u))),o.state={isModalOpen:!1},o.handleModalToggle=function(){o.setState(function(e){var t=e.isModalOpen;return{isModalOpen:!t}})},r=n,i(o,r)}return r(t,e),t.prototype.render=function(){var e=this.state.isModalOpen;return u.default.createElement(u.default.Fragment,null,u.default.createElement(c.Button,{variant:"primary",onClick:this.handleModalToggle},"Show Large Modal"),u.default.createElement(c.Modal,{isLarge:!0,title:"Modal Header",isOpen:e,onClose:this.handleModalToggle,actions:[u.default.createElement(c.Button,{key:"cancel",variant:"secondary",onClick:this.handleModalToggle},"Cancel"),u.default.createElement(c.Button,{key:"confirm",variant:"primary",onClick:this.handleModalToggle},"Confirm")]},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},t}(u.default.Component);s.title="Large Modal",t.default=s,s.__docgenInfo={description:"",displayName:"LargeModal"},e.exports=t.default}});
//# sourceMappingURL=component---react-core-src-components-modal-examples-large-modal-js-1242b49f26291a921d25.js.map