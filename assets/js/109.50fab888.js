(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{322:function(t,s,i){"use strict";i.r(s),i.d(s,"ks_gallery",(function(){return r}));var e=i(13),r=function(){function t(t){Object(e.i)(this,t),this.position=0,this.containerWidth=0,this.childWidth=0,this.margin=0,this.gutter="md",this.isStart=!0,this.isEnd=!1}return t.prototype.componentDidRender=function(){var t=this;this.setScrollValues(),this.container.addEventListener("scroll",(function(s){var i=s.target,e=i.scrollLeft+i.offsetWidth;t.isStart=e===i.offsetWidth,t.isEnd=e>=i.scrollWidth})),this.itemWidth&&Array.from(this.$el.querySelector(".scrolling-content").children).forEach((function(s){return s.style.width=t.itemWidth}))},t.prototype.scrollRight=function(){this.setScrollValues();var t=this.container.scrollWidth-this.containerWidth;this.position=this.container.scrollLeft+this.getScrollWidth(),this.position=this.position>=t?t+1:this.position,this.scroll()},t.prototype.scrollLeft=function(){this.setScrollValues(),this.position=this.container.scrollLeft-this.getScrollWidth(),this.position=this.position<=0?0:this.position,this.scroll()},t.prototype.scroll=function(){this.supportsSmoothScrolling()?this.container.scroll({left:this.position,behavior:"smooth"}):this.scrollTo(this.container,this.container.scrollLeft,this.position)},t.prototype.scrollTo=function(t,s,i,e,r){var n=this;if(void 0===e&&(e=1e3),void 0===r&&(r=0),s=s<=0?0:s,i=i<=0?0:i,!(r>=e)){var o=i-s,l=r/e*Math.PI/2,c=o*Math.sin(l);setTimeout((function(){t.scrollLeft=s+c,n.scrollTo(t,s,i,e,r+5)}))}},t.prototype.supportsSmoothScrolling=function(){var t=document.body,s=t.style.scrollBehavior;t.style.scrollBehavior="smooth";var i="smooth"===getComputedStyle(t).scrollBehavior;return t.style.scrollBehavior=s,i},t.prototype.setScrollValues=function(){this.container=this.$el.querySelector(".content-wrapper"),this.containerWidth=this.container.offsetWidth;var t=this.$el.querySelector(".scrolling-content > *");this.childWidth=t.offsetWidth;var s=window.getComputedStyle(t);this.margin=parseFloat(s.marginRight)},t.prototype.getScrollWidth=function(){return Math.floor(this.containerWidth/(this.childWidth+this.margin))*(this.childWidth+this.margin)},t.prototype.render=function(){var t,s=this,i=((t={"ks-gallery":!0})["gutter-"+this.gutter]=!0,t),r={"content-wrapper":!0,"b-l-xxxs":!this.isStart,"b-r-xxxs":!this.isEnd};return Object(e.g)(e.b,{class:i},Object(e.g)("header",{class:"header"},Object(e.g)("h2",{class:"heading"},this.src?Object(e.g)("a",{href:this.src},this.heading):this.heading),Object(e.g)("div",{class:"controls"},Object(e.g)("ks-button",{class:"scroll-left",size:"xs",display:"clear",disabled:this.isStart,onClick:function(){return s.scrollLeft()}},Object(e.g)("ks-icon",{class:"text-lg",icon:"chevron_left"})),Object(e.g)("ks-button",{class:"scroll-right",size:"xs",display:"clear",disabled:this.isEnd,onClick:function(){return s.scrollRight()}},Object(e.g)("ks-icon",{class:"text-lg",icon:"chevron_right"})))),Object(e.g)("div",{class:r},Object(e.g)("div",{class:"scrolling-content"},Object(e.g)("slot",null))))},Object.defineProperty(t.prototype,"$el",{get:function(){return Object(e.f)(this)},enumerable:!1,configurable:!0}),t}();r.style=".ks-gallery.gutter-auto .scrolling-content>*{margin-right:var(--ks-spacing-size-auto)}.ks-gallery.gutter-none .scrolling-content>*{margin-right:var(--ks-spacing-size-none)}.ks-gallery.gutter-xxxs .scrolling-content>*{margin-right:var(--ks-spacing-size-xxxs)}.ks-gallery.gutter-xxs .scrolling-content>*{margin-right:var(--ks-spacing-size-xxs)}.ks-gallery.gutter-xs .scrolling-content>*{margin-right:var(--ks-spacing-size-xs)}.ks-gallery.gutter-sm .scrolling-content>*{margin-right:var(--ks-spacing-size-sm)}.ks-gallery.gutter-md .scrolling-content>*{margin-right:var(--ks-spacing-size-md)}.ks-gallery.gutter-lg .scrolling-content>*{margin-right:var(--ks-spacing-size-lg)}.ks-gallery.gutter-xl .scrolling-content>*{margin-right:var(--ks-spacing-size-xl)}.ks-gallery.gutter-xxl .scrolling-content>*{margin-right:var(--ks-spacing-size-xxl)}.ks-gallery.gutter-xxxl .scrolling-content>*{margin-right:var(--ks-spacing-size-xxxl)}.ks-gallery .header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.ks-gallery .header .heading{margin:var(--ks-spacing-size-none)}.ks-gallery .content-wrapper{overflow-x:auto;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}.ks-gallery .content-wrapper::-webkit-scrollbar{display:none}.ks-gallery .content-wrapper .scrolling-content{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:var(--ks-spacing-size-xs)}.ks-gallery .content-wrapper .scrolling-content:last-child{margin-right:var(--ks-spacing-size-xs)}.ks-gallery .content-wrapper .scrolling-content>*{-ms-flex:0 0 auto;flex:0 0 auto}"}}]);