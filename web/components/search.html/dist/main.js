(function () {
  'use strict';

  var n,l$1,u$2,i$1,o$1,r$1,f$2,e$1,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _$1(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$2:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$2);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$2));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?(e&&!e.isConnected&&(e=x(v)),e=I(y,e,n)):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof L)try{if(m=u.props,x=(a=L.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in L&&L.prototype.render?u.__c=h=new L(m,C):(u.__c=h=new b(m,C),h.constructor=L,h.render=q),x&&x.sub(h),h.props=m,h.state||(h.state={}),h.context=C,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=L.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,L.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)null==L.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==L.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,C),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),M=0;M<h._sb.length;M++)h.__h.push(h._sb[M]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=C,h.props=m,h.__P=n,h.__e=!1,P=l$1.__r,$=0,"prototype"in L&&L.prototype.render){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),I=0;I<h._sb.length;I++)h.__h.push(h._sb[I]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(H=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?H:[H],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A(l,s,g,m[s],o));}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_$1(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$2=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$1=0,c$1=F(!1),s$1=F(!0);

  var f$1=0;function u$1(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--f$1,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return l$1.vnode&&l$1.vnode(l),l}

  var t,r,u,i,o=0,f=[],c=[],e=l$1,a=e.__b,v=e.__r,l=e.diffed,m=e.__c,s=e.unmount,d=e.__;function h(n,t){e.__h&&e.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function p(n){return o=1,y(D,n)}function y(n,u,i){var o=h(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function _(n,u){var i=h(t++,3);!e.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],e.__e(t,n.__v);}}e.__b=function(n){r=null,a&&a(n);},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d&&d(n,t);},e.__r=function(n){v&&v(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===e.requestAnimationFrame||((i=e.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],e.__e(r,n.__v);}}),m&&m(n,t);},e.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&e.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

  /* eslint-env browser */

  function styleInject(css = '', ref, id) {
    if (ref === undefined) ref = {};
    const { insertAt } = ref;

    const previous = [].slice.call(document.querySelectorAll('[data-module="' + id + '"]'));

    // NOTE we want to inject the style el at the same position in the DOM to
    // respect equal power selectors priority (last one wins)
    const anchor = previous[previous.length - 1];

    const remove = () => previous.forEach(element => element.remove());

    if (typeof document === 'undefined') {
      remove();
      return
    }

    const head = document.head || document.querySelector('head');
    const style = document.createElement('style');
    style.type = 'text/css';

    style.dataset.module = id;

    if (anchor) {
      anchor.parentNode.insertBefore(style, anchor);
    } else if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    remove();

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".style_header__3t_1_{color:red;color:#00f}ul.style_repo_list__233KR{padding:2em 1em}li.style_repo_block__3lNVy{position:relative;list-style-type:none;box-shadow:0 0 5px #fff;color:#fff;width:calc(100% - 4em);padding:.5em 1em;margin:.8em .2em;border-radius:.75em;border:1px solid transparent;transition:.3s linear;outline:none;max-height:550px}li.style_repo_block__3lNVy a{color:#fff}li.style_repo_block__3lNVy:focus{border:1px solid #add8e6;box-shadow:0 0 15px grey}.style_repo_block__3lNVy:hover{box-shadow:0 0 15px #fff;background-color:rgba(0,0,0,.11)}";
  var style = {"header":"style_header__3t_1_","repo_list":"style_repo_list__233KR","repo_block":"style_repo_block__3lNVy"};
  styleInject(css_248z, undefined, "12xcavg");
  if (window.import && window.import.meta.hot) window.import.meta.hot.accept();

  function copyBranchUrl(e, repo) {
      // console.log(e.code, e.ctrlKey)
      if (e.code == 'KeyC' && e.ctrlKey) {
          navigator.clipboard.writeText(`degit ${repo.html_url}#${e.currentTarget.textContent}`);
      }
  }
  // function getNumberOfGames(x: number): number {
  //     const nextTeamsCount = Math.ceil(half);
  //     if (nextTeamsCount === 1) return 1;
  //     else {
  //         return getNumberOfGames(nextTeamsCount);
  //     }
  // }
  // function getNumberOfGames(x) {
  //     const games = Math.floor(x / 2);
  //     const excessTeam = x % 2;
  //     if (!games) return games;
  //     else if (!excessTeam && games === 1) return games;
  //     else {
  //         const nextTeamsCount = games + excessTeam;
  //         return games + getNumberOfGames(nextTeamsCount);
  //     }
  // }
  // let sum = 0;
  // for (let i = 1; i <= 100; i++) {
  //     sum += getNumberOfGames(i)
  // }

  false;

  const user = localStorage.getItem('user') || "Sanshain";
  let repos$ = [];
  // const app = css`
  //   text-transform: uppercase;
  //   color: red;
  // `;
  const searchContainerStyle = "suwg8pj";
  let prevExpandedHeight = null;
  function App({
    onFocus,
    onBlur
  }) {
    const [repos, updateRepos] = p(repos$);
    _(() => {}, []);
    function getRepos(e) {
      onFocus(e);
      fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=30&page=1`).then(r => r.json()).then(resp => {
        updateRepos(v => repos$ = resp);
      });
    }
    function onInput(e) {
      const target = e.currentTarget;
      if (target.value.length > 2) {
        updateRepos(v => repos$.filter(v => ~v.name.indexOf(target.value)));
      } else if (target.value) {
        updateRepos(v => repos$.filter(v => v.name.startsWith(target.value)));
      } else {
        updateRepos(v => repos$);
      }
    }
    function onEscape(e) {
      // console.log(e.key)
      if (e.code == 'Escape') {
        const target = e.currentTarget;
        closeSearch(target);
      }
    }
    const hashtag = "h1llctjr";
    const tags = "t1q6qxdt";
    const accordeon = "a1u5xbpx";
    function closeSearch(input) {
      updateRepos(v => []);
      input.value = '';
      input.blur();
      onBlur();
    }
    function fetchBranches(e, url) {
      const target = e.currentTarget;
      if (target.parentElement) {
        target.parentElement.style.boxShadow = '0 0 5px white';
        target.parentElement.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      }
      target.addEventListener('mouseout', function () {
        if (target.parentElement) {
          //@ts-expect-error
          target.parentElement.style.boxShadow = null;
          //@ts-expect-error
          target.parentElement.style.backgroundColor = null;
        }
      }, {
        once: true
      });
    }
    function expandBranchBtnFocus(e, repo) {
      var _a, _b;
      if (e['code'] == 'NumpadAdd') {
        const target = e.currentTarget.querySelector('.branches_btn');
        target.focus();
        // target.dispatchEvent(new Event('focus'))
        const ev = {
          currentTarget: e.currentTarget.querySelector('.branches_btn')
        };
        fetchBranches(ev, repo.branches_url);
      } else if (~e['code'].indexOf('Enter')) {
        // console.log(document.activeElement)
        if ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.classList.contains('branches_btn')) {
          expandBranchList({
            currentTarget: document.activeElement
          }, repo);
        } else {
          window.open(((_b = document.activeElement) === null || _b === void 0 ? void 0 : _b.tagName) == 'A' ? document.activeElement.href : repo.html_url, '_blank');
          e.preventDefault();
          // <- also TODO type it via types-spring (_blank)
          // ^- also TODO type for tagName
        }
      }
      // console.warn(e['code'])
    }
    function expandBranchList(e, repo) {
      const target = e.currentTarget;
      if (expandedRepo == repo.id) {
        collapsCurrentRepo();
        target.style['transform'] = 'rotate(0deg)';
        return;
      }
      target.style['transform'] = 'rotate(270deg)';
      if (!repo.branches) fetch(repo.branches_url.replace(/\{[\w\/]+\}/, '')).then(r => r.json()).then(r => {
        if ('message' in r) {
          return alert(r.message);
        }
        repo.branches = r.map(v => v.name);
        animateBranchesAppearing();
      });else {
        // setExpand(repo.id)
        animateBranchesAppearing();
      }
      function animateBranchesAppearing() {
        const handlingContainer = target.parentElement;
        const expandedContainer = collapsCurrentRepo();
        handlingContainer.style.height = (prevExpandedHeight = handlingContainer.clientHeight - 16) + 'px';
        setTimeout(() => {
          var _a;
          handlingContainer.style.height = handlingContainer.clientHeight + (((_a = repo.branches) === null || _a === void 0 ? void 0 : _a.length) || 0) * 26 - 0 + 'px';
          setTimeout(() => {
            setExpand(repo.id);
            if (expandedContainer) {
              //@ts-ignore
              expandedContainer.style.height = null;
            }
            /// move to useEffect:
            setTimeout(() => {
              const branchInput = handlingContainer.querySelector('input');
              if (branchInput) {
                branchInput.focus();
              }
            });
          }, 400);
        });
      }
      function collapsCurrentRepo() {
        const _prevExpandedHeight = prevExpandedHeight;
        const expandedContainer = document.getElementById(expandedRepo.toString());
        setTimeout(() => {
          if (_prevExpandedHeight && expandedContainer) {
            // console.log(_prevExpandedHeight, prevExpandedHeight);               
            expandedContainer.style.height = _prevExpandedHeight + 'px';
          }
        });
        setExpand(NaN);
        return expandedContainer;
      }
    }
    const branchesStyle = "b1kc2ny1";
    y(() => NaN, null);
    /**
     * @description current repo with shown branches
     */
    const [expandedRepo, setExpand] = p(NaN);
    p(null);
    const close_search = "c1pzzxzi";
    const branch_input = "b1gv4ixx";
    const branches_container = "bhbdon0";
    const [branchSearch, setBranchSearch] = p('');
    const branch_link = "b8pxf0e";
    // const close_search = accordeon;
    return u$1(k$1, {
      children: [u$1("input", {
        type: "search",
        placeholder: "Start typing repository name you want...",
        tabIndex: 1,
        onInput: onInput,
        onFocus: getRepos,
        onKeyUp: onEscape
      }), u$1("div", {
        className: searchContainerStyle,
        children: [repos.length ? u$1("div", {
          className: `${accordeon} ${close_search}`,
          onClick: () => closeSearch(document.querySelector('#search>input')),
          children: "\u2715"
        }) : '', u$1("ul", {
          class: style.repo_list,
          children: 'length' in repos ? repos.map(repo => {
            return u$1("li", {
              class: style.repo_block,
              tabIndex: 1,
              id: repo.id.toString(),
              onKeyDown: e => expandBranchBtnFocus(e, repo),
              children: [u$1("a", {
                href: repo.html_url,
                children: u$1("h3", {
                  className: "c7yifyx",
                  children: repo.name
                })
              }), u$1("p", {
                className: "c12wpk68",
                children: repo.description || ''
              }), u$1("div", {
                className: tags,
                children: [u$1("div", {
                  className: `${hashtag} lang`,
                  children: repo.language
                }), repo.topics.map(topic => {
                  return u$1("div", {
                    className: hashtag,
                    children: topic
                  });
                })]
              }), u$1("div", {
                className: `${accordeon} branches_btn`,
                tabIndex: 1,
                onMouseOver: e => fetchBranches(e, repo.branches_url),
                onClick: e => expandBranchList(e, repo),
                children: "<"
              }), expandedRepo == repo.id && repo.branches ? u$1(k$1, {
                children: [repo.branches.length > 10 ? u$1("input", {
                  type: "search",
                  className: branch_input,
                  placeholder: "Enter branch name...",
                  onInput: e => setBranchSearch(e.currentTarget.value)
                }) : '', u$1("div", {
                  className: branches_container,
                  children: u$1("ol", {
                    className: branchesStyle,
                    onKeyDown: e => {
                      var _a, _b, _c, _d, _e, _f;
                      if (e.code == 'ArrowUp') {
                        const next = (_c = (_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.previousElementSibling) === null || _c === void 0 ? void 0 : _c.querySelector('a');
                        console.log(next);
                        if (next && 'focus' in next) next.focus();else {
                          (_f = (_e = (_d = e.currentTarget.closest(`.${branches_container}`)) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.querySelector('input')) === null || _f === void 0 ? void 0 : _f.focus();
                        }
                        e.preventDefault();
                      }
                    },
                    children: repo.branches.filter(b => ~b.indexOf(branchSearch)).map(branchname => {
                      //  style={{ display: ~branchname.indexOf(branchSearch) ? '' : 'none' }}
                      return u$1("li", {
                        children: u$1("a", {
                          href: `${repo.html_url}#${branchname}`,
                          className: branch_link,
                          onKeyDown: e => copyBranchUrl(e, repo),
                          children: branchname
                        })
                      });
                    })
                  })
                })]
              }) : '']
            });
          }) : u$1("div", {
            className: "c1gr8d2i",
            children: "API rate limit exceeded!!!"
          })
        })]
      })]
    });
  }

  //@ts-check

  let root = document.querySelector('#search');
  if (root) {
    //@ts-expect-error                                                                              App  <- `cann't found name react`
    B$1(u$1(App, {
      onFocus: onFocus,
      onBlur: onOut
    }), root);
  }
  const mirror = document.querySelector('div.mirror');
  const background = document.querySelector('.background');
  function onFocus(e) {
    if (mirror && root && background) {
      mirror['style'].opacity = '0.1';
      root['style'].top = '5vh';
      background['style'].opacity = '.5';
      background['style'].zIndex = '0';
      background['style'].backgroundColor = '#CFD9EC'; // 'rgb(51, 51, 51)';
    } else {
      console.warn("Mirror or other block doesn't found");
    }
  }
  function onOut() {
    if (mirror && root && background) {
      mirror['style'].opacity = null;
      root['style'].top = null;
      background['style'].opacity = null;
      background['style'].zIndex = null;
      background['style'].backgroundColor = null;
    }
  }

})();
