webpackJsonp([2],{139:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id=139},167:function(l,n,u){function a(l){var n=t[l];return n?u.e(n[1]).then(function(){return u(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var t={"../pages/info/info.module.ngfactory":[242,1],"../pages/manage/manage.module.ngfactory":[243,0]};a.keys=function(){return Object.keys(t)},a.id=167,l.exports=a},193:function(l,n,u){"use strict";u.d(n,"a",function(){return a});var a=function(){function l(){}return l.initAppListData=function(){null==window.localStorage.getItem(l.storageKeyAppList)&&l.saveAppListData(l.initAppList)},l.getAppListData=function(){return JSON.parse(window.localStorage.getItem(l.storageKeyAppList))},l.saveAppListData=function(n){window.localStorage.setItem(l.storageKeyAppList,JSON.stringify(n))},l.appName="elastos",l.storageKeyAppList=l.appName+"_appList",l.currentDate=new Date,l.currentDateYYYYMMDD=l.currentDate.getFullYear()+"."+(l.currentDate.getMonth()<9?"0"+(l.currentDate.getMonth()+1):l.currentDate.getMonth()+1)+"."+(l.currentDate.getDay()<9?"0"+(l.currentDate.getDay()+1):l.currentDate.getDay()+1),l.initAppList=[{path:"../wallet/www/assets/images/logo.jpg",name:"Wallet",url:"wallet/www/index.html",size:"1 MB",date:l.currentDateYYYYMMDD},{path:"../todo/www/assets/imgs/logo.png",name:"ToDO",url:"todo/www/index.html",size:"2 MB",date:l.currentDateYYYYMMDD},{path:"../CarTest/www/assets/imgs/logo.png",name:"CarTest",url:"CarTest/www/index.html",size:"666 KB",date:l.currentDateYYYYMMDD}],l}()},205:function(l,n,u){"use strict";function a(l){return e._19(0,[(l()(),e.Z(0,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(1,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,7,{contentLabel:0}),e._16(603979776,8,{_buttons:1}),e._16(603979776,9,{_icons:1}),e.Y(5,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(7,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,9)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(9,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(11,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(12,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(14,0,null,null,0,"img",[["alt",""],["src","assets/imgs/camera.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(17,0,null,0,8,"ion-thumbnail",[["class","app-info"],["item-start",""]],null,null,null,null,null)),e.Y(18,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(20,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "]))],function(l,n){l(n,9,0,"dark","true")},function(l,n){l(n,7,0,e._11(n,9)._disabled)})}function t(l){return e._19(0,[(l()(),e._18(-1,null,["\n"])),(l()(),e.Z(1,0,null,null,13,"ion-header",[["no-border",""]],null,null,null,null,null)),e.Y(2,16384,null,0,m.a,[r.a,e.j,e.z,[2,g.a]],null,null),(l()(),e._18(-1,null,["\n  "])),(l()(),e.Z(4,0,null,null,9,"ion-navbar",[["class","toolbar"],["transparent",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,b.b,b.a)),e.Y(5,49152,null,0,k.a,[Z.a,[2,g.a],[2,Y.a],r.a,e.j,e.z],null,null),(l()(),e._18(-1,3,["\n      "])),(l()(),e.Z(7,0,null,3,5,"button",[["clear",""],["ion-button",""],["navPop",""],["small",""],["style","padding: 0;"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,9).onClick()&&a}return a},v.b,v.a)),e.Y(8,1097728,null,0,y.a,[[8,""],r.a,e.j,e.z],{small:[0,"small"],clear:[1,"clear"]},null),e.Y(9,16384,null,0,w.a,[[2,Y.a]],null,null),(l()(),e._18(-1,0,["\n        "])),(l()(),e.Z(11,0,null,0,0,"img",[["alt","back"],["src","assets/imgs/arrows-left.png"]],null,null,null,null,null)),(l()(),e._18(-1,0,["\n      "])),(l()(),e._18(-1,3,["\n  "])),(l()(),e._18(-1,null,["\n"])),(l()(),e._18(-1,null,["\n\n"])),(l()(),e.Z(16,0,null,null,154,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,x.b,x.a)),e.Y(17,4374528,null,0,z.a,[r.a,D.a,j.a,e.j,e.z,Z.a,L.a,e.u,[2,g.a],[2,Y.a]],null,null),(l()(),e._18(-1,1,["\n  "])),(l()(),e.Z(19,0,null,1,150,"ion-grid",[["class","grid"]],null,null,null,null,null)),e.Y(20,16384,null,0,M.a,[],null,null),(l()(),e._18(-1,null,["\n    "])),(l()(),e.Z(22,0,null,null,37,"ion-list",[["no-lines",""]],null,null,null,null,null)),e.Y(23,16384,null,0,I.a,[r.a,e.j,e.z,D.a,O.l,j.a],null,null),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(25,0,null,null,25,"ion-row",[["class","row"]],null,null,null,null,null)),e.Y(26,16384,null,0,N.a,[],null,null),(l()(),e._18(-1,null,["\n        "])),(l()(),e.Z(28,0,null,null,21,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(29,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,1,{contentLabel:0}),e._16(603979776,2,{_buttons:1}),e._16(603979776,3,{_icons:1}),e.Y(33,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(35,0,null,0,4,"ion-thumbnail",[["class","up-app"],["item-start",""]],null,null,null,null,null)),e.Y(36,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(38,0,null,null,0,"img",[["src","assets/imgs/slice2.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(41,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(44,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(47,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(52,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,i.b,i.a)),e.Y(53,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,4,{contentLabel:0}),e._16(603979776,5,{_buttons:1}),e._16(603979776,6,{_icons:1}),e.Y(57,16384,null,0,A.a,[r.a,e.z,e.j,[8,null]],null,null),(l()(),e._18(-1,2,["Permissions"])),(l()(),e._18(-1,null,["\n\n    "])),(l()(),e._18(-1,null,["\n    "])),(l()(),e.Z(61,0,null,null,107,"ion-list",[["no-lines",""]],null,null,null,null,null)),e.Y(62,16384,null,0,I.a,[r.a,e.j,e.z,D.a,O.l,j.a],null,null),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(64,0,null,null,89,"ion-row",[["class","row"]],null,null,null,null,null)),e.Y(65,16384,null,0,N.a,[],null,null),(l()(),e._18(-1,null,["\n        "])),(l()(),e.U(16777216,null,null,1,null,a)),e.Y(68,802816,null,0,P.h,[e.I,e.F,e.p],{ngForOf:[0,"ngForOf"]},null),(l()(),e._18(-1,null,["\n\n        "])),(l()(),e.Z(70,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(71,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,10,{contentLabel:0}),e._16(603979776,11,{_buttons:1}),e._16(603979776,12,{_icons:1}),e.Y(75,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(77,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,79)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(79,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(81,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(82,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(84,0,null,null,0,"img",[["src","assets/imgs/camera.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(87,0,null,0,8,"ion-thumbnail",[["class","app-info"],["item-start",""]],null,null,null,null,null)),e.Y(88,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(90,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(93,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n\n        "])),(l()(),e.Z(98,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(99,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,13,{contentLabel:0}),e._16(603979776,14,{_buttons:1}),e._16(603979776,15,{_icons:1}),e.Y(103,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(105,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,107)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(107,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(109,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(110,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(112,0,null,null,0,"img",[["src","assets/imgs/id.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(115,0,null,0,8,"ion-thumbnail",[["class","app-info"],["item-start",""]],null,null,null,null,null)),e.Y(116,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(118,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(121,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n\n        "])),(l()(),e.Z(126,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(127,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,16,{contentLabel:0}),e._16(603979776,17,{_buttons:1}),e._16(603979776,18,{_icons:1}),e.Y(131,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(133,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,135)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(135,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(137,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(138,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(140,0,null,null,0,"img",[["src","assets/imgs/speaker.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(143,0,null,0,8,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(144,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(146,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(149,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(155,0,null,null,6,"ion-list-header",[["class","hide item"]],null,null,null,i.b,i.a)),e.Y(156,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,19,{contentLabel:0}),e._16(603979776,20,{_buttons:1}),e._16(603979776,21,{_icons:1}),e.Y(160,16384,null,0,A.a,[r.a,e.z,e.j,[8,null]],null,null),(l()(),e._18(-1,2,["Infomation"])),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(163,0,null,null,4,"div",[["class","desc hide"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n        "])),(l()(),e.Z(165,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),e._18(-1,null,["This is a description"])),(l()(),e._18(-1,null,["\n      "])),(l()(),e._18(-1,null,["\n    "])),(l()(),e._18(-1,null,["\n  "])),(l()(),e._18(-1,1,["\n"])),(l()(),e._18(-1,null,["\n\n\n"]))],function(l,n){var u=n.component;l(n,8,0,"","");l(n,68,0,u.appManageList);l(n,79,0,"dark","true");l(n,107,0,"dark","true");l(n,135,0,"dark","true")},function(l,n){l(n,4,0,e._11(n,5)._hidden,e._11(n,5)._sbPadding);l(n,16,0,e._11(n,17).statusbarPadding,e._11(n,17)._hasRefresher);l(n,77,0,e._11(n,79)._disabled);l(n,105,0,e._11(n,107)._disabled);l(n,133,0,e._11(n,135)._disabled)})}u.d(n,"a",function(){return T});var e=u(0),i=u(106),o=u(17),c=u(13),r=u(1),s=u(37),_=u(55),p=u(169),f=u(14),d=u(51),h=u(78),m=u(79),g=u(5),b=u(170),k=u(34),Z=u(8),Y=u(19),v=u(22),y=u(12),w=u(80),x=u(107),z=u(21),D=u(4),j=u(9),L=u(23),M=u(68),I=u(45),O=u(6),N=u(54),A=u(70),P=u(11),F=u(87),C=u(10),S=e.X({encapsulation:2,styles:[],data:{}}),T=e.V("page-info",F.a,function(l){return e._19(0,[(l()(),e.Z(0,0,null,null,1,"page-info",[],null,null,null,t,S)),e.Y(1,49152,null,0,F.a,[Y.a,C.a],null,null)],null,null)},{},{},[])},206:function(l,n,u){"use strict";function a(l){return i._19(0,[(l()(),i.Z(0,0,null,null,30,"ion-item",[["class","item item-block"]],null,null,null,o.b,o.a)),i.Y(1,1097728,null,3,c.a,[r.a,s.a,i.j,i.z,[2,_.a]],null,null),i._16(335544320,3,{contentLabel:0}),i._16(603979776,4,{_buttons:1}),i._16(603979776,5,{_icons:1}),i.Y(5,16384,null,0,p.a,[],null,null),(l()(),i._18(-1,2,["\n      "])),(l()(),i.Z(7,0,null,0,2,"ion-checkbox",[["color","dark"],["ng-checked","checked"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0,t=l.component;if("click"===n){a=!1!==i._11(l,9)._click(u)&&a}if("click"===n){a=!1!==t.checkApp(l.context.$implicit)&&a}return a},f.b,f.a)),i._14(5120,null,d.e,function(l){return[l]},[h.a]),i.Y(9,1228800,null,0,h.a,[s.a,r.a,[2,c.a],i.j,i.z],{color:[0,"color"]},null),(l()(),i._18(-1,2,["\n      "])),(l()(),i.Z(11,0,null,0,18,"ion-thumbnail",[["item-start",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.goInfo(l.context.index)&&a}return a},null,null)),i.Y(12,16384,null,0,m.a,[],null,null),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(14,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(16,0,null,null,10,"div",[["class","thum-inner"]],null,null,null,null,null)),(l()(),i._18(-1,null,["\n            "])),(l()(),i.Z(18,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._18(19,null,["",""])),(l()(),i._18(-1,null,["\n            "])),(l()(),i.Z(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._18(22,null,["",""])),(l()(),i._18(-1,null,["\n            "])),(l()(),i.Z(24,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._18(25,null,["Added ",""])),(l()(),i._18(-1,null,["\n        "])),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(28,0,null,null,0,"img",[["class","right_arrow"],["src","assets/imgs/arrow.png"]],null,null,null,null,null)),(l()(),i._18(-1,null,["\n      "])),(l()(),i._18(-1,2,["\n    "]))],function(l,n){l(n,9,0,"dark")},function(l,n){l(n,7,0,i._11(n,9)._disabled);l(n,14,0,i._2(1,"",n.context.$implicit.path,""));l(n,19,0,n.context.$implicit.name);l(n,22,0,n.context.$implicit.size);l(n,25,0,n.context.$implicit.date)})}function t(l){return i._19(0,[(l()(),i.Z(0,0,null,null,14,"div",[["class","footer"]],null,null,null,null,null)),(l()(),i._18(-1,null,["\n  "])),(l()(),i.Z(2,0,null,null,11,"ion-row",[["class","row"]],null,null,null,null,null)),i.Y(3,16384,null,0,g.a,[],null,null),(l()(),i._18(-1,null,["\n    "])),(l()(),i._18(-1,null,["\n    "])),(l()(),i.Z(6,0,null,null,6,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),i.Y(7,16384,null,0,b.a,[],null,null),(l()(),i._18(-1,null,["\n      "])),(l()(),i.Z(9,0,null,null,2,"ion-card",[["class","card-box card-delete"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.doDel()&&a}return a},null,null)),i.Y(10,16384,null,0,k.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n        Delete\n      "])),(l()(),i._18(-1,null,["\n    "])),(l()(),i._18(-1,null,["\n  "])),(l()(),i._18(-1,null,["\n"]))],null,null)}function e(l){return i._19(0,[(l()(),i._18(-1,null,["\n"])),(l()(),i.Z(1,0,null,null,19,"ion-header",[["no-border",""]],null,null,null,null,null)),i.Y(2,16384,null,0,Z.a,[s.a,i.j,i.z,[2,Y.a]],null,null),(l()(),i._18(-1,null,["\n  "])),(l()(),i.Z(4,0,null,null,15,"ion-navbar",[["class","toolbar"],["transparent",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,v.b,v.a)),i.Y(5,49152,null,0,y.a,[w.a,[2,Y.a],[2,x.a],s.a,i.j,i.z],null,null),(l()(),i._18(-1,3,["\n    "])),(l()(),i.Z(7,0,null,1,3,"ion-buttons",[["class","man-title"],["start",""]],null,null,null,null,null)),i.Y(8,16384,null,1,z.a,[s.a,i.j,i.z,[2,D.a],[2,y.a]],null,null),i._16(603979776,1,{_buttons:1}),(l()(),i._18(-1,null,["\n        Management\n    "])),(l()(),i._18(-1,3,["\n    "])),(l()(),i.Z(12,0,null,2,5,"ion-buttons",[["end",""],["style","z-index: 999;"]],null,[[null,"click"]],function(l,n,u){var a=!0,t=l.component;if("click"===n){a=!1!==t.goToIndex(t.i)&&a}return a},null,null)),i.Y(13,16384,null,1,z.a,[s.a,i.j,i.z,[2,D.a],[2,y.a]],null,null),i._16(603979776,2,{_buttons:1}),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(16,0,null,null,0,"img",[["alt","Delete"],["class","icon-right"],["src","assets/imgs/man-del.png"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.goToIndex()&&a}return a},null,null)),(l()(),i._18(-1,null,["\n    "])),(l()(),i._18(-1,3,["\n\n    "])),(l()(),i._18(-1,3,["\n  "])),(l()(),i._18(-1,null,["\n"])),(l()(),i._18(-1,null,["\n\n"])),(l()(),i.Z(22,0,null,null,30,"ion-content",[["overflow-scroll","true"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,j.b,j.a)),i.Y(23,4374528,null,0,L.a,[s.a,M.a,I.a,i.j,i.z,w.a,O.a,i.u,[2,Y.a],[2,x.a]],null,null),(l()(),i._18(-1,1,["\n  "])),(l()(),i.Z(25,0,null,1,19,"ion-card",[["class","import-box"]],null,null,null,null,null)),i.Y(26,16384,null,0,k.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n    "])),(l()(),i.Z(28,0,null,null,8,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.importFromEpk()&&a}return a},N.b,N.a)),i.Y(29,1097728,null,0,A.a,[[8,""],s.a,i.j,i.z],null,null),(l()(),i._18(-1,0,["\n      "])),(l()(),i.Z(31,0,null,0,4,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(32,147456,null,0,P.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(34,0,null,null,0,"img",[["alt",""],["class","icon-right"],["src","assets/imgs/add.png"]],null,null,null,null,null)),(l()(),i._18(-1,null,["\n      "])),(l()(),i._18(-1,0,["\n    "])),(l()(),i._18(-1,null,["\n    "])),(l()(),i.Z(38,0,null,null,5,"ion-card-content",[],null,null,null,null,null)),i.Y(39,16384,null,0,F.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n      "])),(l()(),i.Z(41,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),i._18(-1,null,["Import from Local file"])),(l()(),i._18(-1,null,["\n    "])),(l()(),i._18(-1,null,["\n  "])),(l()(),i._18(-1,1,["\n\n  "])),(l()(),i.Z(46,0,null,1,5,"ion-list",[["no-lines",""]],null,null,null,null,null)),i.Y(47,16384,null,0,C.a,[s.a,i.j,i.z,M.a,S.l,I.a],null,null),(l()(),i._18(-1,null,["\n    "])),(l()(),i.U(16777216,null,null,1,null,a)),i.Y(50,802816,null,0,T.h,[i.I,i.F,i.p],{ngForOf:[0,"ngForOf"]},null),(l()(),i._18(-1,null,["\n  "])),(l()(),i._18(-1,1,["\n"])),(l()(),i._18(-1,null,["\n\n"])),(l()(),i._18(-1,null,["\n"])),(l()(),i.U(16777216,null,null,1,null,t)),i.Y(56,16384,null,0,T.i,[i.I,i.F],{ngIf:[0,"ngIf"]},null),(l()(),i._18(-1,null,["\n\n"])),(l()(),i._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,50,0,u.appList);l(n,56,0,u.isShow)},function(l,n){l(n,4,0,i._11(n,5)._hidden,i._11(n,5)._sbPadding);l(n,22,0,i._11(n,23).statusbarPadding,i._11(n,23)._hasRefresher);l(n,31,0,i._11(n,32)._hidden)})}u.d(n,"a",function(){return V});var i=u(0),o=u(106),c=u(17),r=u(13),s=u(1),_=u(37),p=u(55),f=u(169),d=u(14),h=u(51),m=u(78),g=u(54),b=u(67),k=u(100),Z=u(79),Y=u(5),v=u(170),y=u(34),w=u(8),x=u(19),z=u(125),D=u(58),j=u(107),L=u(21),M=u(4),I=u(9),O=u(23),N=u(22),A=u(12),P=u(32),F=u(63),C=u(45),S=u(6),T=u(11),E=u(88),J=u(10),H=u(46),R=u(81),B=u(82),U=u(83),$=i.X({encapsulation:2,styles:[],data:{}}),V=i.V("page-manage",E.a,function(l){return i._19(0,[(l()(),i.Z(0,0,null,null,1,"page-manage",[],null,null,null,e,$)),i.Y(1,49152,null,0,E.a,[x.a,J.a,H.a,R.a,B.a,U.a],null,null)],null,null)},{},{},[])},207:function(l,n,u){"use strict";function a(l){return s._19(0,[(l()(),s._18(-1,null,["\n"])),(l()(),s._18(-1,null,["\n"])),(l()(),s._18(-1,null,["\n\n"])),(l()(),s.Z(3,0,null,null,19,"div",[],null,null,null,null,null)),(l()(),s._18(-1,null,["\n  "])),(l()(),s.Z(5,0,null,null,8,"button",[["icon-only",""],["ion-button",""]],null,null,null,N.b,N.a)),s.Y(6,1097728,null,0,A.a,[[8,""],P.a,s.j,s.z],null,null),(l()(),s._18(-1,0,["\n    "])),(l()(),s.Z(8,0,null,0,4,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),s.Y(9,147456,null,0,F.a,[P.a,s.j,s.z],null,null),(l()(),s._18(-1,null,["\n      "])),(l()(),s.Z(11,0,null,null,0,"img",[["alt",""],["class","icon-right"],["src","../../assets/imgs/add.png"]],null,null,null,null,null)),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,0,["\n  "])),(l()(),s._18(-1,null,["\n  "])),(l()(),s.Z(15,0,null,null,6,"ion-card-content",[],null,null,null,null,null)),s.Y(16,16384,null,0,C.a,[P.a,s.j,s.z],null,null),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,null,["\n    "])),(l()(),s.Z(19,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),s._18(-1,null,["Import from Local file"])),(l()(),s._18(-1,null,["\n  "])),(l()(),s._18(-1,null,["\n"])),(l()(),s._18(-1,null,["\n"]))],null,function(l,n){l(n,8,0,s._11(n,9)._hidden)})}function t(l){return s._19(0,[(l()(),s.Z(0,0,null,null,2,"ion-nav",[],null,null,null,E.b,E.a)),s._14(6144,null,J.a,null,[H.a]),s.Y(2,4374528,null,0,H.a,[[2,R.a],[2,B.a],U.a,P.a,$.a,s.j,s.u,s.z,s.i,V.l,K.a,[2,X.a],q.a,s.k],{root:[0,"root"]},null),(l()(),s._18(-1,null,["\n"]))],function(l,n){l(n,2,0,n.component.rootPage)},null)}function e(l){return s._19(0,[(l()(),s.Z(0,0,null,null,0,"img",[["alt",""],["class","manage-btn"],["src","assets/imgs/manage.png"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.goManage()&&a}return a},null,null))],null,null)}function i(l){return s._19(0,[(l()(),s.Z(0,0,null,null,0,"span",[["class","del-ioc"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.delEvent(l.parent.context.index)&&a}return a},null,null))],null,null)}function o(l){return s._19(0,[(l()(),s.Z(0,0,null,null,10,"ion-col",[["class","main-section col"],["col-3",""]],null,[[null,"press"],[null,"click"]],function(l,n,u){var a=!0,t=l.component;if("press"===n){a=!1!==t.pressEvent()&&a}if("click"===n){a=!1!==t.onClick(l.context.$implicit)&&a}return a},null,null)),s.Y(1,16384,null,0,Q.a,[],null,null),(l()(),s._18(-1,null,["\n        "])),(l()(),s.Z(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),s._18(-1,null,["\n        "])),(l()(),s.U(16777216,null,null,1,null,i)),s.Y(6,16384,null,0,ll.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._18(-1,null,["\n        "])),(l()(),s.Z(8,0,null,null,1,"div",[["class","app-title"]],null,null,null,null,null)),(l()(),s._18(9,null,["",""])),(l()(),s._18(-1,null,["\n      "]))],function(l,n){l(n,6,0,n.component.checked)},function(l,n){l(n,3,0,s._2(1,"",n.context.$implicit.path,""));l(n,9,0,n.context.$implicit.name)})}function c(l){return s._19(0,[(l()(),s.Z(0,0,null,null,34,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,nl.b,nl.a)),s.Y(1,4374528,null,0,ul.a,[P.a,$.a,q.a,s.j,s.z,U.a,al.a,s.u,[2,R.a],[2,B.a]],null,null),(l()(),s._18(-1,1,["\n  "])),(l()(),s.Z(3,0,null,1,27,"ion-grid",[["class","grid"]],null,null,null,null,null)),s.Y(4,16384,null,0,tl.a,[],null,null),(l()(),s._18(-1,null,["\n    "])),(l()(),s.Z(6,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),s.Y(7,16384,null,0,el.a,[],null,null),(l()(),s._18(-1,null,["\n      "])),(l()(),s.Z(9,0,null,null,9,"ion-col",[["class","manage-box col"],["col-3",""]],null,null,null,null,null)),s.Y(10,16384,null,0,Q.a,[],null,null),(l()(),s._18(-1,null,["\n        "])),(l()(),s.Z(12,0,null,null,5,"button",[["clear",""],["ion-button",""]],null,null,null,N.b,N.a)),s.Y(13,1097728,null,0,A.a,[[8,""],P.a,s.j,s.z],{clear:[0,"clear"]},null),(l()(),s._18(-1,0,["\n          "])),(l()(),s.U(16777216,null,0,1,null,e)),s.Y(16,16384,null,0,ll.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._18(-1,0,["\n        "])),(l()(),s._18(-1,null,["\n      "])),(l()(),s._18(-1,null,["\n      "])),(l()(),s.Z(20,0,null,null,1,"ion-col",[["class","col"],["col-21",""]],null,[[null,"tap"]],function(l,n,u){var a=!0;if("tap"===n){a=!1!==l.component.tapEvent(u)&&a}return a},null,null)),s.Y(21,16384,null,0,Q.a,[],null,null),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,null,["\n    "])),(l()(),s.Z(24,0,null,null,5,"ion-row",[["class","main-contain row"]],null,null,null,null,null)),s.Y(25,16384,null,0,el.a,[],null,null),(l()(),s._18(-1,null,["\n      "])),(l()(),s.U(16777216,null,null,1,null,o)),s.Y(28,802816,null,0,ll.h,[s.I,s.F,s.p],{ngForOf:[0,"ngForOf"]},null),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,null,["\n  "])),(l()(),s._18(-1,1,["\n  "])),(l()(),s.Z(32,0,null,1,1,"ion-grid",[["class","grid-down grid"]],null,[[null,"tap"]],function(l,n,u){var a=!0;if("tap"===n){a=!1!==l.component.tapEvent(u)&&a}return a},null,null)),s.Y(33,16384,null,0,tl.a,[],null,null),(l()(),s._18(-1,1,["\n"])),(l()(),s._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,13,0,"");l(n,16,0,!u.checked);l(n,28,0,u.getAppList())},function(l,n){l(n,0,0,s._11(n,1).statusbarPadding,s._11(n,1)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var r=u(26),s=u(0),_=(u(3),u(40),u(85)),p=u(86),f=u(84),d=function(){return function(l,n,u){this.rootPage=f.a,l.ready().then(function(){n.styleDefault(),u.hide()})}}(),h=function(){return function(){console.log("Hello LocalimportComponent Component"),this.text="Hello World"}}(),m=function(){return function(){}}(),g=(u(88),u(87),u(46)),b=u(81),k=u(82),Z=u(195),Y=u(83),v=function(){return function(){}}(),y=u(48),w=u(196),x=u(197),z=u(198),D=u(199),j=u(200),L=u(201),M=u(202),I=u(203),O=u(204),N=u(22),A=u(12),P=u(1),F=u(32),C=u(63),S=s.X({encapsulation:2,styles:[],data:{}}),T=s.V("localimport",h,function(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"localimport",[],null,null,null,a,S)),s.Y(1,49152,null,0,h,[],null,null)],null,null)},{},{},[]),E=u(241),J=u(38),H=u(56),R=u(5),B=u(19),U=u(8),$=u(4),V=u(6),K=u(30),X=u(18),q=u(9),W=s.X({encapsulation:2,styles:[],data:{}}),G=s.V("ng-component",d,function(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"ng-component",[],null,null,null,t,W)),s.Y(1,49152,null,0,d,[$.a,_.a,p.a],null,null)],null,null)},{},{},[]),Q=u(67),ll=u(11),nl=u(107),ul=u(21),al=u(23),tl=u(68),el=u(54),il=s.X({encapsulation:2,styles:[],data:{}}),ol=s.V("page-home",f.a,function(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"page-home",[],null,null,null,c,il)),s.Y(1,49152,null,0,f.a,[B.a,g.a],null,null)],null,null)},{},{},[]),cl=u(206),rl=u(205),sl=u(109),_l=u(14),pl=u(97),fl=u(99),dl=u(108),hl=u(13),ml=u(33),gl=u(104),bl=u(129),kl=u(50),Zl=u(41),Yl=u(113),vl=u(64),yl=u(116),wl=u(111),xl=u(124),zl=u(194),Dl=u(110),jl=u(28),Ll=u(105),Ml=u(112),Il=s.W(v,[y.b],function(l){return s._7([s._8(512,s.i,s.S,[[8,[w.a,x.a,z.a,D.a,j.a,L.a,M.a,I.a,O.a,T,G,ol,cl.a,rl.a]],[3,s.i],s.s]),s._8(5120,s.r,s._15,[[3,s.r]]),s._8(4608,ll.k,ll.j,[s.r,[2,ll.s]]),s._8(5120,s.b,s._1,[]),s._8(5120,s.p,s._9,[]),s._8(5120,s.q,s._12,[]),s._8(4608,r.c,r.q,[ll.c]),s._8(6144,s.D,null,[r.c]),s._8(4608,r.f,sl.a,[]),s._8(5120,r.d,function(l,n,u,a,t){return[new r.k(l,n),new r.o(u),new r.n(a,t)]},[ll.c,s.u,ll.c,ll.c,r.f]),s._8(4608,r.e,r.e,[r.d,s.u]),s._8(135680,r.m,r.m,[ll.c]),s._8(4608,r.l,r.l,[r.e,r.m]),s._8(6144,s.B,null,[r.l]),s._8(6144,r.p,null,[r.m]),s._8(4608,s.G,s.G,[s.u]),s._8(4608,r.h,r.h,[ll.c]),s._8(4608,r.i,r.i,[ll.c]),s._8(4608,_l.k,_l.k,[]),s._8(4608,_l.c,_l.c,[]),s._8(4608,pl.a,pl.a,[U.a,P.a]),s._8(4608,fl.a,fl.a,[U.a,P.a]),s._8(4608,dl.a,dl.a,[]),s._8(4608,hl.a,hl.a,[]),s._8(4608,ml.a,ml.a,[$.a]),s._8(4608,al.a,al.a,[P.a,$.a,s.u,q.a]),s._8(4608,gl.a,gl.a,[U.a,P.a]),s._8(5120,ll.f,bl.c,[ll.q,[2,ll.a],P.a]),s._8(4608,ll.e,ll.e,[ll.f]),s._8(5120,kl.b,kl.d,[U.a,kl.a]),s._8(5120,X.a,X.b,[U.a,kl.b,ll.e,Zl.b,s.i]),s._8(4608,Yl.a,Yl.a,[U.a,P.a,X.a]),s._8(4608,vl.a,vl.a,[U.a,P.a]),s._8(4608,yl.a,yl.a,[U.a,P.a,X.a]),s._8(4608,wl.a,wl.a,[P.a,$.a,q.a,U.a,V.l]),s._8(4608,xl.a,xl.a,[U.a,P.a]),s._8(4608,K.a,K.a,[$.a,P.a]),s._8(4608,g.a,g.a,[]),s._8(4608,b.a,b.a,[]),s._8(4608,k.a,k.a,[]),s._8(4608,p.a,p.a,[]),s._8(4608,Z.a,Z.a,[]),s._8(4608,_.a,_.a,[]),s._8(4608,Y.a,Y.a,[]),s._8(512,ll.b,ll.b,[]),s._8(512,s.k,zl.a,[]),s._8(256,P.b,{tabsHideOnSubPages:"true",backButtonText:""},[]),s._8(1024,Dl.a,Dl.b,[]),s._8(1024,$.a,$.b,[r.b,Dl.a,s.u]),s._8(1024,P.a,P.c,[P.b,$.a]),s._8(512,q.a,q.a,[$.a]),s._8(512,jl.a,jl.a,[]),s._8(512,U.a,U.a,[P.a,$.a,[2,jl.a]]),s._8(512,V.l,V.l,[U.a]),s._8(256,kl.a,{links:[{loadChildren:"../pages/info/info.module.ngfactory#InfoPageModuleNgFactory",name:"InfoPage",segment:"info",priority:"low",defaultHistory:[]},{loadChildren:"../pages/manage/manage.module.ngfactory#ManagePageModuleNgFactory",name:"ManagePage",segment:"manage",priority:"low",defaultHistory:[]}]},[]),s._8(512,s.h,s.h,[]),s._8(512,Ll.a,Ll.a,[s.h]),s._8(1024,Zl.b,Zl.c,[Ll.a,s.o]),s._8(1024,s.c,function(l,n,u,a,t,e,i,o,c,s,_,p,f){return[r.s(l),Ml.a(n),dl.b(u,a),wl.b(t,e,i,o,c),Zl.d(s,_,p,f)]},[[2,s.t],P.a,$.a,q.a,P.a,$.a,q.a,U.a,V.l,P.a,kl.a,Zl.b,s.u]),s._8(512,s.d,s.d,[[2,s.c]]),s._8(131584,s.f,s.f,[s.u,s.T,s.o,s.k,s.i,s.d]),s._8(512,s.e,s.e,[s.f]),s._8(512,r.a,r.a,[[3,r.a]]),s._8(512,_l.j,_l.j,[]),s._8(512,_l.d,_l.d,[]),s._8(512,_l.i,_l.i,[]),s._8(512,bl.a,bl.a,[]),s._8(512,bl.b,bl.b,[]),s._8(512,m,m,[]),s._8(512,v,v,[]),s._8(256,Zl.a,h,[]),s._8(256,y.a,d,[]),s._8(256,ll.a,"/",[])])});Object(s.M)(),Object(r.j)().bootstrapModuleFactory(Il)},84:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(3),u(40),u(46);var a=u(88),t=u(193),e=function(){function l(l,n){this.navCtrl=l,this.file=n,this.checked=!1,t.a.initAppListData()}return l.prototype.getAppList=function(){return t.a.getAppListData()},l.prototype.goManage=function(){this.navCtrl.push(a.a)},l.prototype.pressEvent=function(){this.checked=!0},l.prototype.delEvent=function(l){var n=t.a.getAppListData(),u=n[l],a=this.file.externalRootDirectory+t.a.appName+"/",e=u.url.substr(0,u.url.lastIndexOf("/www/index.html"));this.file.removeRecursively(a,e).then(function(a){a?(n.splice(l,1),t.a.saveAppListData(n)):alert("remove this app "+u.name+" failed!")}).catch(function(l){return alert(JSON.stringify(l))}),this.checked=!1},l.prototype.tapEvent=function(){this.checked=!1},l.prototype.onClick=function(l){if(this.checked)return!1;cordova.plugins.TestPlugin.coolMethod(l.url+"?timestamp="+(new Date).getTime(),function(l){},function(l){})},l}()},87:function(l,n,u){"use strict";u.d(n,"a",function(){return a});u(3),u(40);var a=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad InfoPage")},l}()},88:function(l,n,u){"use strict";u.d(n,"a",function(){return i});u(3),u(40),u(46),u(81),u(82),u(83);var a=u(84),t=u(87),e=u(193),i=function(){function l(l,n,u,a,t,i){this.navCtrl=l,this.navParams=n,this.file=u,this.fileChooser=a,this.filePath=t,this.zip=i,this.checkIndex=[],this.isShow=!1,this.appList=[],e.a.initAppListData(),this.appList=e.a.getAppListData()}return l.prototype.goToIndex=function(l){this.navCtrl.push(a.a)},l.prototype.goInfo=function(l){this.navCtrl.push(t.a)},l.prototype.checkApp=function(l){l.checked=!l.checked,this.checkIndex.indexOf(l)<0?this.checkIndex.push(l):this.checkIndex.splice(this.checkIndex.indexOf(l),1),this.isShow=this.checkIndex.length>0},l.prototype.doDel=function(){var l=this;this.checkIndex.forEach(function(n){var u=l.file.externalRootDirectory+e.a.appName+"/",a=n.url.substr(0,n.url.lastIndexOf("/www/index.html"));l.file.removeRecursively(u,a).then(function(u){u?(l.appList.splice(l.appList.indexOf(n),1),e.a.saveAppListData(l.appList)):alert("remove this app "+n.name+" failed!")}).catch(function(l){return alert(JSON.stringify(l))})}),this.checkIndex=[]},l.prototype.importFromEpk=function(){var l=this,n=this.file.externalRootDirectory+e.a.appName+"/";this.fileChooser.open().then(function(u){var a=decodeURI(u),t="0MB";l.file.resolveLocalFilesystemUrl(u).then(function(l){l.getMetadata(function(l){t=l.size>=1048576?(l.size/1048576).toFixed(2)+" MB":(l.size/1024).toFixed(2)+" KB"},function(l){alert(l.message)})}).catch(function(l){return alert(JSON.stringify(l))}),l.filePath.resolveNativePath(a).then(function(u){var a=u.substr(u.lastIndexOf("/")+1),i=a.substr(0,a.lastIndexOf("."));".epk"!=u.substr(u.lastIndexOf(".")).toLowerCase()?alert("please choose epk file formats!"):l.zip.unzip(u,n).then(function(u){if(-1===u)alert("unzip this file failed!");else if(0===u){var a=n+i+"/www/",o="manifest.json";l.file.checkFile(a,o).then(function(n){n?l.file.readAsText(a,o).then(function(n){var u=new Date,a=u.getMonth()<9?"0"+(u.getMonth()+1):u.getMonth()+1,o=u.getDay()<9?"0"+(u.getDay()+1):u.getDay()+1,c=JSON.parse(n);l.appList.push({path:"../"+i+"/www/"+c.icons[0].src,name:c.name,url:i+"/www/index.html",size:t,date:u.getFullYear()+"."+a+"."+o}),e.a.saveAppListData(l.appList)}).catch(function(l){return alert(JSON.stringify(l))}):alert("this file is broken!")}).catch(function(l){return alert(JSON.stringify(l))})}}).catch(function(l){return alert(JSON.stringify(l))})}).catch(function(l){return alert(JSON.stringify(l))})}).catch(function(l){return alert(JSON.stringify(l))})},l}()}},[207]);