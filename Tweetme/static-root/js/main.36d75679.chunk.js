(this.webpackJsonptweetme2=this.webpackJsonptweetme2||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(14),a(7)),s=a.n(o);a(15);function i(e,t,a,n){var r;n&&(r=JSON.stringify(n));var c=new XMLHttpRequest,l="http://localhost:8000/api".concat(t);c.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var r=a[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");c.open(e,l),c.setRequestHeader("Content-Type","application/json"),o&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",o)),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));a(c.response,c.status)},c.onerror=function(e){a({message:"The request was an error"},400)},c.send(r)}function u(e,t,a){var n="/tweets/";e&&(n="/tweets/?username=".concat(e)),null!==a&&void 0!==a&&(n=a.replace("http://localhost:8000/api","")),i("GET",n,t)}function m(e){var t=e.tweet,a=e.action,n=e.didPerformAction,c=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=a.display?a.display:"Action",s=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},u="like"===a.type?"".concat(c," ").concat(o):o;return r.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,a){i("POST","/tweets/action/",a,{id:e,action:t})}(t.id,a.type,s)}},u)}var d=a(2),f=a(1);function p(e){var t=r.a.createRef(),a=e.didTweet,n=function(e,t){201===t?a(e):(console.log(e),alert("An error occured please try again"))};return r.a.createElement("div",{className:e.className},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;i("POST","/tweets/create/",n,{content:a}),t.current.value=""}},r.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}var w=a(8);function v(e){var t=e.username;return r.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function b(e){var t=e.user,a=!0===e.includeFullName?"".concat(t.first_name," ").concat(t.last_name," "):null;return r.a.createElement(r.a.Fragment,null,a,r.a.createElement(v,{username:t.username},"@",t.username))}function E(e){var t=e.user;return r.a.createElement(v,{username:t.username},r.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]))}function h(e){var t=e.tweet;return t.parent?r.a.createElement(g,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function g(e){var t=e.tweet,a=e.didRetweet,c=e.hideActions,l=e.isRetweet,o=e.retweeter,s=Object(n.useState)(e.tweet?e.tweet:null),i=Object(f.a)(s,2),u=i[0],d=i[1],p=e.className?e.className:"col-10 mx-auto col-md-6";p=!0===l?"".concat(p," p-2 border rounded"):p;var v=window.location.pathname.match(Object(w.a)(/([0-9]+)/,{tweetid:1})),g=v?v.groups.tweetid:-1,N="".concat(t.id)==="".concat(g),j=function(e,t){200===t?d(e):201===t&&a&&a(e)};return r.a.createElement("div",{className:p},!0===l&&r.a.createElement("div",{className:"mb-2"},r.a.createElement("span",{className:"small text-muted"},"Retweet via ",r.a.createElement(b,{user:o}))),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:""},r.a.createElement(E,{user:t.user})),r.a.createElement("div",{className:"col-11"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(b,{includeFullName:!0,user:t.user})),r.a.createElement("p",null,t.content),r.a.createElement(h,{tweet:t,retweeter:t.user})),r.a.createElement("div",{className:"btn btn-group px-0"},u&&!0!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{tweet:u,didPerformAction:j,action:{type:"like",display:"Likes"}}),r.a.createElement(m,{tweet:u,didPerformAction:j,action:{type:"unlike",display:"Unlike"}}),r.a.createElement(m,{tweet:u,didPerformAction:j,action:{type:"retweet",display:"Retweet"}})),!0===N?null:r.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function N(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(f.a)(o,2),i=s[0],m=s[1],p=Object(n.useState)(null),w=Object(f.a)(p,2),v=w[0],b=w[1],E=Object(n.useState)(!1),h=Object(f.a)(E,2),N=h[0],j=h[1];Object(n.useEffect)((function(){var t=Object(d.a)(e.newTweets).concat(c);t.length!==i.length&&m(t)}),[e.newTweets,i,c]),Object(n.useEffect)((function(){if(!1===N){u(e.username,(function(e,t){200===t?(b(e.next),l(e.results),j(!0)):alert("There was an error")}))}}),[c,N,j,e.username]);var O=function(e){var t=Object(d.a)(c);t.unshift(e),l(t);var a=Object(d.a)(i);a.unshift(i),m(a)};return r.a.createElement(r.a.Fragment,null,i.map((function(e,t){return r.a.createElement(g,{tweet:e,didRetweet:O,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==v&&r.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==v){u(e.username,(function(e,t){if(200===t){b(e.next);var a=Object(d.a)(i).concat(e.results);l(a),m(a)}else alert("There was an error")}),v)}},className:"btn btn-outline-primary"},"Load next"))}function j(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1],o="false"!==e.canTweet;return r.a.createElement("div",{className:e.className},!0===o&&r.a.createElement(p,{didTweet:function(e){var t=Object(d.a)(c);t.unshift(e),l(t)},className:"col-12 mb-3"}),r.a.createElement(N,Object.assign({newTweets:c},e)))}function O(e){var t=e.tweetId,a=Object(n.useState)(!1),c=Object(f.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(null),u=Object(f.a)(s,2),m=u[0],d=u[1],p=function(e,t){200===t?d(e):alert("There was an error finding your tweet.")};return Object(n.useEffect)((function(){!1===l&&(!function(e,t){i("GET","/tweets/".concat(e,"/"),t)}(t,p),o(!0))}),[t,l,o]),null===m?null:r.a.createElement(g,{tweet:m,className:e.className})}var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("div",null,r.a.createElement(j,null)),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=document.getElementById("root");k&&l.a.render(r.a.createElement(y,null),k);var T=r.a.createElement,R=document.getElementById("tweetme-2");R&&l.a.render(T(j,R.dataset),R),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){l.a.render(T(O,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.36d75679.chunk.js.map