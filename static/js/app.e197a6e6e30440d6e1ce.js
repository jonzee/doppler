webpackJsonp([1],{0:function(t,e){},JYDu:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui card"},[s("sui-progress",{attrs:{attached:"",top:"",indicating:"",percent:t.percent}}),t._v(" "),s("div",{staticClass:"extra content"},[s("div",{staticClass:"header"},[s("a",{attrs:{href:t.miner.href,target:"_blank"}},[t._v(t._s(this.index+1)+". "+t._s(this.miner.name)+", charge "+t._s(this.miner.charge)+"%")])])]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"ui form"},[s("div",{},[s("div",{staticClass:"field"},[s("p",[t._v("Sessions per month")]),t._v(" "),s("div",{staticClass:"ui left icon input massive"},[s("i",{staticClass:"users icon dop-icon"}),t._v(" "),s("vue-numeric",{model:{value:t.users,callback:function(e){t.users=e},expression:"users"}})],1)]),t._v(" "),s("div",{staticClass:"field"},[s("p",[t._v("Average visit duration (seconds)")]),t._v(" "),s("div",{staticClass:"ui left icon input massive"},[s("i",{staticClass:"time icon dop-icon"}),t._v(" "),s("vue-numeric",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)])])]),t._v(" "),s("div",{staticClass:"ui statistics small"},[s("div",{staticClass:"statistic"},[s("div",{staticClass:"value"},[t._v(t._s(t.percent+"%"))]),t._v(" "),s("div",{staticClass:"label"},[t._v("CPU usage")])]),t._v(" "),s("div",{staticClass:"statistic"},[s("div",{staticClass:"value"},[t._v(t._s(t.usdmonth.toFixed(2)))]),t._v(" "),s("div",{staticClass:"label"},[t._v("usd / month")])])])]),t._v(" "),s("div",{staticClass:"ui icon buttons"},[s("sui-button",{nativeOn:{click:function(e){t.decrease(e)}}},[s("i",{staticClass:"minus icon"})]),t._v(" "),s("sui-button",{nativeOn:{click:function(e){t.backward(e)}}},[s("i",{staticClass:"icon backward"})]),t._v(" "),s("sui-button",{nativeOn:{click:function(e){t.forward(e)}}},[s("i",{staticClass:"icon forward"})]),t._v(" "),s("sui-button",{nativeOn:{click:function(e){t.increase(e)}}},[s("i",{staticClass:"plus icon"})])],1)],1)},staticRenderFns:[]};var a=s("VU/8")({props:["miners","xmrusd","reward","hashes"],data:function(){return{index:0,time:300,users:1e6,percent:70}},computed:{miner:function(){return this.miners[this.index]},usdmonth:function(){return this.users*this.time*this.hashes*(this.percent/100)*this.reward*(100-this.miner.charge)/100*this.xmrusd}},methods:{backward:function(){this.index=this.index>0?this.index-1:this.miners.length-1},forward:function(){this.index=(this.index+1)%this.miners.length},increase:function(){this.percent<100&&(this.percent+=10,this.loaded&&this.miner.setThrottle(this.throttle))},decrease:function(){this.percent>10&&(this.percent-=10,this.loaded&&this.miner.setThrottle(this.throttle))}}},n,!1,function(t){s("JYDu")},null,null).exports,r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"ui inverted vertical masthead center aligned segment"},[t._m(0),t._v(" "),s("div",{staticClass:"ui container"},[s("h1",{staticClass:"ui inverted header"},[t._v("\n        Doppler\n      ")]),t._v(" "),s("h2",{staticClass:"subheader"},[t._v("Browser Mining Compare")]),t._v(" "),s("div",{staticClass:"ui steps huge"},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"step",attrs:{href:"#estimate"}},[s("i",{staticClass:"bitcoin icon"}),t._v(" "),t._m(1)]),t._v(" "),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3,offset:-50},expression:"{ duration: 1000, offset: -50 }"}],staticClass:"step",attrs:{href:"#compare"}},[s("i",{staticClass:"line chart icon"}),t._v(" "),t._m(2)]),t._v(" "),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"step",attrs:{href:"#verify"}},[s("i",{staticClass:"protect icon"}),t._v(" "),t._m(3)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container"},[s("div",{staticClass:"ui large secondary inverted pointing menu"},[s("div",{staticClass:"right item menu-mobile"},[s("a",{staticClass:"ui inverted icon button",attrs:{target:"_blank",href:"https://www.producthunt.com/posts/doppler"}},[s("i",{staticClass:"icon large product hunt"})]),t._v(" "),s("a",{staticClass:"ui inverted icon button",attrs:{target:"_blank",href:"https://github.com/jonzee/doppler"}},[s("i",{staticClass:"icon large github alternate"})])]),t._v(" "),s("div",{staticClass:"right item menu-desktop"},[s("a",{staticClass:"ui inverted button",attrs:{target:"_blank",href:"https://github.com/jonzee/doppler"}},[t._v("\n            Github\n          ")]),t._v(" "),s("a",{staticClass:"ui inverted button",attrs:{target:"_blank",href:"https://www.producthunt.com/posts/doppler"}},[t._v("\n            Product Hunt\n          ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v("\n              Estimate\n            ")]),t._v(" "),s("div",{staticClass:"description"},[t._v("\n              your profit\n            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v("\n              Compare\n            ")]),t._v(" "),s("div",{staticClass:"description"},[t._v("\n              efficiency\n            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v("\n              Verify\n            ")]),t._v(" "),s("div",{staticClass:"description"},[t._v("\n              detectability\n            ")])])}]};var c=s("VU/8")(null,r,!1,function(t){s("q0jB")},null,null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("a",{staticClass:"footer-link",attrs:{href:"https://github.com/jonzee/"}},[s("i",{staticClass:"github icon"})]),t._v(" "),s("a",{staticClass:"footer-link",attrs:{href:"www.linkedin.com/in/janhorubala"}},[s("i",{staticClass:"linkedin square icon"})]),t._v(" "),s("a",{staticClass:"footer-link",attrs:{href:"https://stackoverflow.com/users/6041704/jonzee"}},[s("i",{staticClass:"stack overflow icon"})]),t._v(" "),s("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com/jonzee_"}},[s("i",{staticClass:"twitter square icon"})]),t._v(" "),s("a",{staticClass:"footer-link",attrs:{href:"https://www.producthunt.com/@jonzee_"}},[s("i",{staticClass:"product hunt icon"})])])}]};var l={props:["miner","xmrusd","reward"],data:function(){return{speed:0,total:0,percent:70,loaded:!1,running:!1,interval:null}},computed:{usdmonth:function(){return 2628e3*this.speed*this.reward*this.xmrusd},throttle:function(){return 1-this.percent/100}},methods:{loadScript:function(){var t,e,s=this;t=document,(e=t.createElement("script")).type="text/javascript",e.async=!0,e.onload=function(){s.loaded=!0,s.startMiner()},e.src=s.miner.script,e.className=s.miner.class||"",t.getElementsByTagName("head")[0].appendChild(e)},startMiner:function(){var t=this;if(!this.loaded)return this.loadScript();this.miner.start(this.throttle),this.running=!0,this.interval=setInterval(function(){t.speed=t.miner.getHashesPerSecond(),t.total=t.miner.getTotalHashes()},1e3)},stopMiner:function(){this.miner.stop(),clearInterval(this.interval),this.speed=0,this.running=!1},increase:function(){this.percent<100&&(this.percent+=10,this.loaded&&this.miner.setThrottle(this.throttle))},decrease:function(){this.percent>10&&(this.percent-=10,this.loaded&&this.miner.setThrottle(this.throttle))}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui card miner"},[s("div",{staticClass:"extra content"},[s("a",{attrs:{href:t.miner.href,target:"_blank"}},[s("i",{staticClass:"icon linkify"}),t._v("\n      "+t._s(t.miner.name)+",\n    ")]),t._v("\n    charge "+t._s(t.miner.charge)+"%\n  ")]),t._v(" "),s("div",{staticClass:"content"},[s("sui-statistics-group",{staticClass:"small"},[s("sui-statistic",{attrs:{"in-group":""}},[s("sui-statistic-value",[t._v(t._s(t.speed.toFixed(2)))]),t._v(" "),s("sui-statistic-label",[t._v("hash / sec")])],1),t._v(" "),s("sui-statistic",{attrs:{"in-group":""}},[s("sui-statistic-value",[t._v(t._s(t.total))]),t._v(" "),s("sui-statistic-label",[t._v("total hash")])],1),t._v(" "),s("sui-statistic",{attrs:{"in-group":""}},[s("sui-statistic-value",[t._v(t._s(t.percent+"%"))]),t._v(" "),s("sui-statistic-label",[t._v("cpu usage")])],1),t._v(" "),s("sui-statistic",{attrs:{"in-group":""}},[s("sui-statistic-value",[t._v(t._s(t.usdmonth.toFixed(2)))]),t._v(" "),s("sui-statistic-label",[t._v("usd / month")])],1)],1)],1),t._v(" "),s("div",{staticClass:"ui vertical icon buttons"},[s("sui-button",{nativeOn:{click:function(e){t.increase(e)}}},[s("i",{staticClass:"plus icon"})]),t._v(" "),t.running?s("sui-button",{nativeOn:{click:function(e){t.stopMiner(e)}}},[s("i",{staticClass:"pause icon"})]):s("sui-button",{nativeOn:{click:function(e){t.startMiner(e)}}},[s("i",{staticClass:"play icon"})]),t._v(" "),s("sui-button",{nativeOn:{click:function(e){t.decrease(e)}}},[s("i",{staticClass:"minus icon"})])],1),t._v(" "),s("sui-progress",{attrs:{attached:"",bottom:"",indicating:"",percent:t.percent}})],1)},staticRenderFns:[]};var d=void 0,h=void 0,v=void 0,m=[{name:"CoinImp",href:"https://www.coinimp.com/invite/b4402faa-04a2-4651-900b-267c9e189690",script:"https://www.webassembly.stream/nhzm.js",charge:1,start:function(t){return(h=new Client.Anonymous("994e8c09f676708e22644b00ba8fe7a4d3f38b8e05f06d315ae166bde9c73b35",{throttle:t})).start()},stop:function(){return h.stop()},getHashesPerSecond:function(){return h.getHashesPerSecond()},getTotalHashes:function(){return h.getTotalHashes()},setThrottle:function(t){return h.setThrottle(t)}},{name:"Crypto-Loot",href:"https://crypto-loot.com/",script:"//webmine.pro/lib/crlt.js",charge:18,start:function(t){return(v=new CRLT.Anonymous("c046712707b40ffa3906faf34716bc3ddfd1835da2e6",{throttle:t})).start()},stop:function(){return v.stop()},getHashesPerSecond:function(){return v.getHashesPerSecond()},getTotalHashes:function(){return v.getTotalHashes()},setThrottle:function(t){return v.setThrottle(t)}},{name:"CoinHive",href:"https://coinhive.com/",script:"https://coinhive.com/lib/coinhive.min.js",charge:30,start:function(t){return(d=new CoinHive.Anonymous("nWSBog9VskRRvFI07Y74tydSfYRnQTD4",{throttle:t})).start()},stop:function(){return d.stop()},getHashesPerSecond:function(){return d.getHashesPerSecond()},getTotalHashes:function(){return d.getTotalHashes()},setThrottle:function(t){return d.setThrottle(t)}},{name:"Mineralt",href:"https://mineralt.io/join/2039",charge:30,script:"https://analytics.blue/amo.js",class:"=Um9ZTzVSSnc7NjA7MTt3c3M6Ly9zMi5hbmFseXRpY3MuYmx1ZTo3MDAxLHdzczovL3MzLmFuYWx5dGljcy5ibHVlOjcwMDE=",start:function(t){var e,s;document.getElementsByClassName("=Um9ZTzVSSnc7NjA7MTt3c3M6Ly9zMi5hbmFseXRpY3MuYmx1ZTo3MDAxLHdzczovL3MzLmFuYWx5dGljcy5ibHVlOjcwMDE=")[0]||(e=document,(s=e.createElement("script")).type="text/javascript",s.async=!0,s.src="https://analytics.blue/amo.js",s.className="=Um9ZTzVSSnc7NjA7MTt3c3M6Ly9zMi5hbmFseXRpY3MuYmx1ZTo3MDAxLHdzczovL3MzLmFuYWx5dGljcy5ibHVlOjcwMDE=",e.getElementsByTagName("head")[0].appendChild(s))},stop:function(){var t=document.getElementsByClassName("=Um9ZTzVSSnc7NjA7MTt3c3M6Ly9zMi5hbmFseXRpY3MuYmx1ZTo3MDAxLHdzczovL3MzLmFuYWx5dGljcy5ibHVlOjcwMDE=")[0];return!!t&&t.parentNode.removeChild(t)},getHashesPerSecond:function(){return 0},getTotalHashes:function(){return 0},setThrottle:function(t){return!1}}],f={data:function(){return{xmrusd:0,block_reward:0,solved_hashes:1e6,global_difficulty:0,hashes_per_second:30}},computed:{reward:function(){return this.global_difficulty?this.solved_hashes*this.block_reward/this.global_difficulty:0},miners:function(){return m.sort(function(t,e){return t.charge>e.charge})},reward_per_one_hash:function(){return this.reward?this.reward/this.solved_hashes:0}},created:function(){this.fetchReward(),this.fetchXMRPrice()},methods:{fetchXMRPrice:function(){var t=this;this.$http.get("https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD").then(function(e){t.xmrusd=e.body.USD}).catch(function(t){})},fetchReward:function(){var t=this;this.$http.get("https://www.min-api.cryptocompare.com/data/coinsnapshot/?fsym=XMR&tsym=USD").then(function(e){t.block_reward=e.body.Data.General.BlockReward,t.global_difficulty=e.body.Data.General.NetHashesPerSecond*e.body.Data.General.BlockTime}).catch(function(e){t.block_reward=5.29,t.global_difficulty=95693639234})}},components:{Calculator:a,Footer:s("VU/8")(null,o,!1,function(t){s("XN2x")},null,null).exports,Header:c,Miner:s("VU/8")(l,u,!1,function(t){s("Y+AX")},null,null).exports}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),t._v(" "),s("div",{staticClass:"ui vertical stripe quote segment"},[s("div",{staticClass:"ui equal width stackable internally celled grid"},[s("div",{staticClass:"center aligned row"},[s("div",{staticClass:"column",attrs:{id:"estimate"}},[s("h3",[t._v("\n            Estimate your profit\n          ")]),t._v(" "),t._m(0),t._v(" "),s("table",{staticClass:"ui very basic collapsing celled table unstackable"},[s("tbody",[s("tr",[s("td",[t._v("\n                  GD\n                ")]),t._v(" "),s("td",[t._v("\n                  Global Difficulty\n                ")]),t._v(" "),s("td",[s("vue-numeric",{model:{value:t.global_difficulty,callback:function(e){t.global_difficulty=e},expression:"global_difficulty"}})],1)]),t._v(" "),s("tr",[s("td",[t._v("\n                  BR\n                ")]),t._v(" "),s("td",[t._v("\n                  Block Reward\n                ")]),t._v(" "),s("td",[s("vue-numeric",{attrs:{precision:2,currency:"XMR","currency-symbol-position":"suffix"},model:{value:t.block_reward,callback:function(e){t.block_reward=e},expression:"block_reward"}})],1)]),t._v(" "),s("tr",[s("td",[t._v("\n                  SH\n                ")]),t._v(" "),s("td",[t._v("\n                  Solved Hashes\n                ")]),t._v(" "),s("td",[s("vue-numeric",{model:{value:t.solved_hashes,callback:function(e){t.solved_hashes=e},expression:"solved_hashes"}})],1)]),t._v(" "),s("tr",[s("td",[t._v("\n                  CE\n                ")]),t._v(" "),s("td",[t._v("\n                  CPU Efficiency\n                ")]),t._v(" "),s("td",[s("vue-numeric",{attrs:{currency:"hash/sec","currency-symbol-position":"suffix"},model:{value:t.hashes_per_second,callback:function(e){t.hashes_per_second=e},expression:"hashes_per_second"}})],1)]),t._v(" "),s("tr",[s("td",[t._v("\n                  XU\n                ")]),t._v(" "),s("td",[t._v("\n                  XMR to USD\n                ")]),t._v(" "),s("td",[s("vue-numeric",{attrs:{precision:2,currency:"USD","currency-symbol-position":"suffix"},model:{value:t.xmrusd,callback:function(e){t.xmrusd=e},expression:"xmrusd"}})],1)])])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n            Reward after solving "+t._s(this.solved_hashes)+" hashes:\n          ")]),t._v(" "),s("code",[t._v("\n            (SH / GD) * BR = "+t._s(this.reward.toFixed(7))+" XMR\n          ")])]),t._v(" "),s("div",{staticClass:"column"},[s("Calculator",{attrs:{xmrusd:t.xmrusd,miners:t.miners,hashes:t.hashes_per_second,reward:t.reward_per_one_hash}})],1)])])]),t._v(" "),s("div",{staticClass:"ui vertical stripe segment"},[s("div",{staticClass:"ui text container cards centered",attrs:{id:"compare"}},[s("h3",[t._v("\n        Compare miners efficiency\n      ")]),t._v(" "),t._l(t.miners,function(e,i){return s("Miner",{key:i,attrs:{xmrusd:t.xmrusd,reward:t.reward_per_one_hash,miner:e}})})],2)]),t._v(" "),t._m(1),t._v(" "),s("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n            Provide web traffic and estimate profit.\n            "),e("br"),this._v("\n            Calculation based on below assumptions.\n          ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui vertical stripe segment",attrs:{id:"verify"}},[s("div",{staticClass:"ui text container"},[s("h3",{staticClass:"ui header centered"},[t._v("Verify detectability")]),t._v(" "),s("p",[t._v("Mining scripts aren't loaded automatically. If you want to check if antivirus or blocker would detect particular miner, press play on its dashboard.")]),t._v(" "),s("p",[t._v("I don't recommend mining on websites without informing users, but in some cases mining crypto is much better way to monetize web traffic then aggressive and distracting ads, which consume CPU and attention as well.")])])])}]};var p={name:"App",components:{Main:s("VU/8")(f,_,!1,function(t){s("dM7a")},null,null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pushable",attrs:{id:"app"}},[e("Main")],1)},staticRenderFns:[]};var C=s("VU/8")(p,b,!1,function(t){s("bsOY")},null,null).exports,g=s("myK/"),w=s.n(g),y=s("O6Gy"),x=s.n(y),k=s("8+8L"),M=s("295d"),T=s.n(M);s("kVq8");i.default.use(w.a),i.default.use(x.a),i.default.use(k.a),i.default.use(T.a),i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:C},template:"<App/>"})},XN2x:function(t,e){},"Y+AX":function(t,e){},bsOY:function(t,e){},dM7a:function(t,e){},kVq8:function(t,e){},q0jB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e197a6e6e30440d6e1ce.js.map