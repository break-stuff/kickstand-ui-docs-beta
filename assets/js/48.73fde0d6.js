(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{436:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"font-design-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font-design-tokens"}},[t._v("#")]),t._v(" Font Design Tokens")]),t._v(" "),a("h2",{attrs:{id:"base-font-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-font-size"}},[t._v("#")]),t._v(" Base Font Size")]),t._v(" "),a("p",[t._v("The will be the default base font size applied to the "),a("code",[t._v("body")]),t._v(" element.")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$font-size-base")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("This actually controls a lot more that just the font size. Most of the sizing and spacing use "),a("a",{attrs:{href:"https://www.sitepoint.com/understanding-and-using-rem-units-in-css",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS rem units"),a("OutboundLink")],1),t._v(" which are based off of the font size set on the "),a("code",[t._v("body")]),t._v(" element, so increasing or decreasing this value will also cause those values to increase or decrease as well.")])]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("This really only should be used "),a("em",[t._v("once")]),t._v(" on the "),a("code",[t._v("body")]),t._v(" element. Updating the token in SASS will automatically update the CSS variable.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html,\nbody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--ks-font-size-base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"font-families"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font-families"}},[t._v("#")]),t._v(" Font Families")]),t._v(" "),a("p",[t._v("There are 3 default font types set up to start out with ("),a("code",[t._v("accent")]),t._v(", "),a("code",[t._v("base")]),t._v(", and "),a("code",[t._v("monospace")]),t._v("). This should usually be more than enough for a website or application. If you feel like you need more font families in your project than this, feel free to add them, but do so carefully. Having all of those fancy fonts on your site may look nice, but they come at a cost (both for performance and usability).")]),t._v(" "),a("p",[t._v("For performance reasons, the default values that have been set for these variables are system fonts. For further reading on this, check out Marcin Wichary's excellent "),a("a",{attrs:{href:"https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Smashing Magazine article"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Accent")]),t._v(" "),a("td",[t._v("This is primarily used for things like headings or blockquotes. This should help those pieces of your design stand out from the rest of your content.")])]),t._v(" "),a("tr",[a("td",[t._v("Base")]),t._v(" "),a("td",[t._v("This is the default font for your site. If it is not text that should stand out more than other text, it should be using this font. This font should be simple and easy to read at both large and small font sizes.")])]),t._v(" "),a("tr",[a("td",[t._v("Monospace (optional)")]),t._v(" "),a("td",[t._v("If you are creating a tutorial site that has code snippets or special call-out text, this font is an excellent way to help highlight those parts of your application. This is an "),a("em",[t._v("optional")]),t._v(" font and most sites will not need it.")])])])]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fonts")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("accent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("monospace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-accent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -apple-system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("BlinkMacSystemFont"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Segoe UI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Roboto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helvetica Neue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Arial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Noto Sans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apple Color Emoji"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Segoe UI Emoji"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Segoe UI Symbol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Noto Color Emoji"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -apple-system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("BlinkMacSystemFont"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Segoe UI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Roboto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helvetica Neue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Arial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Noto Sans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apple Color Emoji"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Segoe UI Emoji"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Segoe UI Symbol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Noto Color Emoji"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-monospace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SFMono-Regular"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Menlo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Monaco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Consolas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Liberation Mono"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Courier New"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("monospace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h4",{attrs:{id:"sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[t._v("#")]),t._v(" SASS")]),t._v(" "),a("p",[t._v("There is a SASS mixin to add the appropriate rules and variables to your code.")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// signature - font($font: base, $important: false)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// returns   - font-family: {selected font CSS variable} !important (if set to "true")')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("font")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using the $important value - should rarely be used")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("font")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--ks-font-base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"font-sizes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font-sizes"}},[t._v("#")]),t._v(" Font Sizes")]),t._v(" "),a("p",[t._v("The default font sizes are "),a("code",[t._v("xxs-xxl")]),t._v(". As mentioned before, they use "),a("code",[t._v("rem")]),t._v("'s for the unit of measure. This is to provide proper scaling when the user's browser default font size is increased or they zoom in and out or adjust their default font size.")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$font-sizes")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("xxs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.75rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12px")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("xs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.875rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 14px")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16px")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("md")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.25rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30px")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("lg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 24px")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("xl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 32px")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("xxl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3rem     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 48px,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-xxs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.75rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-xs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.875rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-sm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-md")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.25rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-lg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-xl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--ks-font-size-xxl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h4",{attrs:{id:"sass-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass-2"}},[t._v("#")]),t._v(" SASS")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// signature - font-size($size, $important: false)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// returns   - font-size: {selected font-size CSS variable} !important (if set to "true")')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this will add the `!important` attribute to the rule")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text-xxs ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"css-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-2"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--ks-font-size-sm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);