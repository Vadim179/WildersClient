(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(t,e,i){},70:function(t,e,i){"use strict";i.r(e);i(37);var s=i(5),a=i.n(s),n=i(35),c=i.n(n),r=i.p+"static/media/player_body.3e91f005.svg",o=i.p+"static/media/flower_l.daeb81d9.svg",l=i.p+"static/media/flower_s.f878ed27.svg",h=i.p+"static/media/hill_l.50d2ee12.svg",d=i.p+"static/media/hill_s.8d6a8490.svg",u=i.p+"static/media/pebble_l.336c6dd3.svg",v=i.p+"static/media/pebble_m.5b50f050.svg",b=i.p+"static/media/pebble_s.ce6a126a.svg",f=i.p+"static/media/copper_l.cf7073a3.svg",O=i.p+"static/media/copper_s.dcd76a60.svg",p=i.p+"static/media/gold_l.5a0ed2f3.svg",y=i.p+"static/media/gold_s.9637f5d4.svg",m=i.p+"static/media/iron_l.f69a6460.svg",j=i.p+"static/media/iron_s.be8ae255.svg",_=i.p+"static/media/rock_l.ed28c7de.svg",g=i.p+"static/media/rock_s.6fed8362.svg",w=i.p+"static/media/tree_l1.15d3fc32.svg",N=i.p+"static/media/tree_l2.be06cd57.svg",k=i.p+"static/media/tree_m1.2736f6ac.svg",D=i.p+"static/media/tree_m2.6fc81ff1.svg",C=i.p+"static/media/tree_s1.e2a9cfdd.svg",S=i.p+"static/media/tree_s2.5745e47b.svg",I=i.p+"static/media/inv_slot.9b8f093d.svg";function P(){this.load.svg("player_body",r),this.load.svg("flower_l",o),this.load.svg("flower_s",l),this.load.svg("pebble_l",u),this.load.svg("pebble_m",v),this.load.svg("pebble_s",b),this.load.svg("hill_l",h),this.load.svg("hill_s",d),this.load.svg("copper_l",f),this.load.svg("copper_s",O),this.load.svg("gold_l",p),this.load.svg("gold_s",y),this.load.svg("iron_l",m),this.load.svg("iron_s",j),this.load.svg("rock_l",_),this.load.svg("rock_s",g),this.load.svg("tree_l1",w),this.load.svg("tree_l2",N),this.load.svg("tree_m1",k),this.load.svg("tree_m2",D),this.load.svg("tree_s1",C),this.load.svg("tree_s2",S),this.load.svg("inv_slot",I)}function A(){this.player.cSeeker.doSeekCursor(),this.player.movement.doMove()}var E=function(){var t=a.a.Input.Keyboard.KeyCodes;this.W=this.input.keyboard.addKey(t.W),this.A=this.input.keyboard.addKey(t.A),this.S=this.input.keyboard.addKey(t.S),this.D=this.input.keyboard.addKey(t.D)},X=i(1),Y=i(4),M=i(0),K=i.n(M),W=i(36),R=function t(e,i){Object(X.a)(this,t),K()("SS",arguments),this.ID=e,this.name=i},B=function(){function t(){Object(X.a)(this,t),this.item=null,this.count=0}return Object(Y.a)(t,[{key:"doPushItem",value:function(t,e){return K()("ON",arguments),this.count+=e,null===this.item&&(this.item=t),this}},{key:"doRemoveItem",value:function(t){return K()("N",arguments),this.count-=t,this.count<=0&&(this.count=0,this.item=null),this}}]),t}(),G=function(){function t(){Object(X.a)(this,t),this.slots=new Array(8).fill(new B)}return Object(Y.a)(t,[{key:"doPushItem",value:function(t,e){if(K()("ON",arguments),t instanceof R!==!1){var i=this.slots.find((function(e){return null==e.item||e.item.ID===t.ID}));i&&i.doPushItem(t,e)}}},{key:"doRemoveItem",value:function(t,e){if(K()("ON",arguments),t instanceof R!==!1){var i=this.slots.find((function(e){return e.item.ID===t.ID}));i&&i.doRemoveItem(e)}}},{key:"doPushSlots",value:function(t){K()("N",arguments);var e=new Array(t).fill(new B);this.slots=[].concat(Object(W.a)(this.slots),[e])}}]),t}(),x=i(3),z=i(2),F=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a,n){var c;return Object(X.a)(this,i),K()("ONNS",arguments),(c=e.call(this,t,s,a,n))._doAddToScene(),c}return Object(Y.a)(i,[{key:"_doAddToScene",value:function(){this.scene.add.existing(this)}}]),i}(a.a.GameObjects.Sprite),V=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"inv_slot")).setScrollFactor(0),n.setDepth(100),n.setAlpha(.9),n}return i}(F),H=function(){function t(e){var i=this;Object(X.a)(this,t),this.doCreateSlot=function(t,e,s){var a=s.length,n=(window.innerWidth-120*a)/2+120*e+60,c=window.innerHeight-100;new V(i.scene,n,c)},K()("O",arguments),this.inventory=new G,this.scene=e,this.doInitializeSlots()}return Object(Y.a)(t,[{key:"doInitializeSlots",value:function(){this.inventory.slots.forEach(this.doCreateSlot)}}]),t}();var T=function(){new H(this)},U=i(14),q=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a,n){var c;return Object(X.a)(this,i),K()("ONNS",arguments),(c=e.call(this,t,s,a,n))._doEnablePhysics(),c._setCollider(),c}return Object(Y.a)(i,[{key:"_doEnablePhysics",value:function(){this.scene.physics.world.enable(this),this.body.setAllowGravity(!1)}},{key:"_setCollider",value:function(){}}]),i}(F),J=function(){function t(e,i){Object(X.a)(this,t),K()("OO",arguments),this.player=e,this.scene=i}return Object(Y.a)(t,[{key:"doSeekCursor",value:function(){var t=this.scene,e=t.input,i=t.cameras;e.mousePointer.updateWorldPoint(i.main);var s=e.mousePointer.worldX,n=e.mousePointer.worldY,c=this.player.x,r=this.player.y,o=a.a.Math.Angle.Between(c,r,s,n);this.player.setRotation(o-1.5)}}]),t}(),L=function(){function t(e,i){Object(X.a)(this,t),K()("OO",arguments),this.player=e,this.scene=i,this.X=0,this.Y=0,this.SPEED=200}return Object(Y.a)(t,[{key:"_handleYMovement",value:function(){var t=this.scene,e=t.W,i=t.S;e.isDown?this.Y=-1:i.isDown?this.Y=1:this.Y=0}},{key:"_handleXMovement",value:function(){var t=this.scene,e=t.A;t.D.isDown?this.X=1:e.isDown?this.X=-1:this.X=0}},{key:"doMove",value:function(){if(this._handleYMovement(),this._handleXMovement(),0!==this.X&&0!==this.Y)return this.player.body.setVelocityX(this.X*this.SPEED/Math.sqrt(2)),void this.player.body.setVelocityY(this.Y*this.SPEED/Math.sqrt(2));this.player.body.setVelocityX(this.X*this.SPEED),this.player.body.setVelocityY(this.Y*this.SPEED)}}]),t}(),Q=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"player_body")).setDepth(25),n.cSeeker=new J(Object(U.a)(n),t),n.movement=new L(Object(U.a)(n),t),n.setCollider(),n}return Object(Y.a)(i,[{key:"setCollider",value:function(){this.body.setCircle(35)}}]),i}(q),Z={BACKGROUND:"#9AB855"},$=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,s,a,window.innerWidth,window.innerHeight)).scene=t,n._doInitialize(),n}return Object(Y.a)(i,[{key:"_doInitialize",value:function(){this.scene.cameras.cameras.length=0,this.scene.cameras.addExisting(this,!0),this.setBackgroundColor(Z.BACKGROUND),this.doFollowPlayer()}},{key:"doFollowPlayer",value:function(){var t=this.scene.player;this.startFollow(t)}}]),i}(a.a.Cameras.Scene2D.Camera),tt=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"hill_s")).setDepth(0),n}return i}(F),et=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"hill_l")).setDepth(0),n}return i}(F),it=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"flower_l")).setDepth(1),n}return i}(F),st=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"flower_s")).setDepth(1),n}return i}(F),at=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"pebble_l")).setDepth(1),n}return i}(F),nt=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"pebble_m")).setDepth(1),n}return i}(F),ct=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"pebble_s")).setDepth(1),n}return i}(F),rt=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"gold_l")).setDepth(20),n}return Object(Y.a)(i,[{key:"_setCollider",value:function(){var t=this.scene,e=this.body;e.setImmovable(),e.setCircle(65,5,10),t.physics.add.collider(t.player,this)}}]),i}(q),ot=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"rock_l")).setDepth(20),n}return Object(Y.a)(i,[{key:"_setCollider",value:function(){var t=this.scene,e=this.body;e.setImmovable(),e.setCircle(65,5,10),t.physics.add.collider(t.player,this)}}]),i}(q),lt=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"rock_s")).setDepth(10),n}return Object(Y.a)(i,[{key:"_setCollider",value:function(){var t=this.scene,e=this.body;e.setImmovable(),e.setCircle(50,5,10),t.physics.add.collider(t.player,this)}}]),i}(q),ht=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"tree_l1")).setDepth(50),n}return Object(Y.a)(i,[{key:"_setCollider",value:function(){var t=this.scene,e=this.body;e.setImmovable(),e.setCircle(60,150,100),t.physics.add.collider(t.player,this)}}]),i}(q),dt=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"tree_m2")).setDepth(40),n}return Object(Y.a)(i,[{key:"_setCollider",value:function(){var t=this.scene,e=this.body;e.setImmovable(),e.setCircle(50,100,60),t.physics.add.collider(t.player,this)}}]),i}(q),ut=function(t){Object(x.a)(i,t);var e=Object(z.a)(i);function i(t,s,a){var n;return Object(X.a)(this,i),K()("ONN",arguments),(n=e.call(this,t,s,a,"tree_s1")).setDepth(30),n}return Object(Y.a)(i,[{key:"_setCollider",value:function(){var t=this.scene,e=this.body;e.setImmovable(),e.setCircle(30,60,40),t.physics.add.collider(t.player,this)}}]),i}(q);function vt(){this.player=new Q(this,0,0),this.camera=new $(this,0,0),E.call(this),T.call(this),new et(this,0,0),new tt(this,-200,200),new it(this,-100,-80),new st(this,180,40),new at(this,-150,160),new nt(this,120,-100),new ct(this,140,300),new ut(this,-200,-200),new ht(this,-350,-50),new dt(this,250,-100),new ot(this,-340,-220),new lt(this,200,120),new rt(this,100,200)}var bt=function(t){return{type:a.a.AUTO,width:window.innerWidth,height:window.innerHeight,roundPixels:!1,physics:{default:"arcade",arcade:{}},scene:{preload:P,create:function(){return vt.apply(this,[t])},update:function(){return A.apply(this,[t])}}}}(c()("http://localhost:8000"));new a.a.Game(bt)}},[[70,1,2]]]);
//# sourceMappingURL=main.67a4c31f.chunk.js.map