(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{444:function(e,t,n){"use strict";n.r(t);n(137);var i=n(393),s=n.n(i);const r=window.CodeMirror||s.a;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");const n=Object(e);for(let e=1;e<arguments.length;e++){const t=arguments[e];if(null!=t)for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},writable:!0,configurable:!0});var o={name:"codemirror",data:()=>({content:"",codemirror:null,cminstance:null}),props:{code:String,value:String,marker:Function,unseenLines:Array,name:{type:String,default:"codemirror"},placeholder:{type:String,default:""},merge:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},events:{type:Array,default:()=>[]},globalOptions:{type:Object,default:()=>({})},globalEvents:{type:Array,default:()=>[]}},watch:{options:{deep:!0,handler(e){for(const t in e)this.cminstance.setOption(t,e[t])}},merge(){this.$nextTick(this.switchMerge)},code(e){this.handerCodeChange(e)},value(e){this.handerCodeChange(e)}},methods:{initialize(){const e=Object.assign({},this.globalOptions,this.options);this.merge?(this.codemirror=r.MergeView(this.$refs.mergeview,e),this.cminstance=this.codemirror.edit):(this.codemirror=r.fromTextArea(this.$refs.textarea,e),this.cminstance=this.codemirror,this.cminstance.setValue(this.code||this.value||this.content)),this.cminstance.on("change",e=>{this.content=e.getValue(),this.$emit&&this.$emit("input",this.content)});const t={};["scroll","changes","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"].concat(this.events).concat(this.globalEvents).filter(e=>!t[e]&&(t[e]=!0)).forEach(e=>{this.cminstance.on(e,(...t)=>{this.$emit(e,...t);const n=e.replace(/([A-Z])/g,"-$1").toLowerCase();n!==e&&this.$emit(n,...t)})});this.$emit("ready",this.codemirror),this.unseenLineMarkers(),this.refresh()},refresh(){this.$nextTick(()=>{this.cminstance.refresh()})},destroy(){const e=this.cminstance.doc.cm.getWrapperElement();e&&e.remove&&e.remove()},handerCodeChange(e){if(e!==this.cminstance.getValue()){const t=this.cminstance.getScrollInfo();this.cminstance.setValue(e),this.content=e,this.cminstance.scrollTo(t.left,t.top)}this.unseenLineMarkers()},unseenLineMarkers(){void 0!==this.unseenLines&&void 0!==this.marker&&this.unseenLines.forEach(e=>{const t=this.cminstance.lineInfo(e);this.cminstance.setGutterMarker(e,"breakpoints",t.gutterMarkers?null:this.marker())})},switchMerge(){const e=this.cminstance.doc.history,t=this.cminstance.doc.cleanGeneration;this.options.value=this.cminstance.getValue(),this.destroy(),this.initialize(),this.cminstance.doc.history=e,this.cminstance.doc.cleanGeneration=t}},mounted(){this.initialize()},beforeDestroy(){this.destroy()}},c=n(10),a=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"vue-codemirror",class:{merge:this.merge}},[this.merge?e("div",{ref:"mergeview"}):e("textarea",{ref:"textarea",attrs:{name:this.name,placeholder:this.placeholder}})])}),[],!1,null,null,null);t.default=a.exports}}]);