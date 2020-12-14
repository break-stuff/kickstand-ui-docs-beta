(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{463:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"adding-kickstand-ui-to-an-angular-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-kickstand-ui-to-an-angular-project"}},[t._v("#")]),t._v(" Adding Kickstand UI to an Angular Project")]),t._v(" "),a("h2",{attrs:{id:"adding-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-styles"}},[t._v("#")]),t._v(" Adding Styles")]),t._v(" "),a("p",[t._v("After installing Kickstand UI, adding the styles is fairly straight forward. In your "),a("code",[t._v("angular.json")]),t._v(" config file add a reference to the styles "),a("em",[t._v("before")]),t._v(" your global styles (that way your custom styles will easily override the default styles):")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"styles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../node_modules/kickstand-ui/dist/kickstand-ui/kickstand-ui.css"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"styles.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[t._v("#")]),t._v(" SASS")]),t._v(" "),a("p",[t._v("If you are using "),a("code",[t._v("SASS")]),t._v(" and customizing the default implementation, make sure your project is configured properly for it. The Angular CLI provides some tooling to help with this.")]),t._v(" "),a("h4",{attrs:{id:"angular-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angular-6"}},[t._v("#")]),t._v(" Angular 6+")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ng config schematics.@schematics/angular:component.styleext scss\n")])])]),a("h4",{attrs:{id:"angular-6-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angular-6-2"}},[t._v("#")]),t._v(" Angular < 6")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install the node-sass compiler")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" node-sass --save-dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use Angular CLI to configure the project")]),t._v("\nng "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" defaults.styleExt scss\n")])])]),a("p",[t._v("In your main SASS file, add a reference to Kickstand UI in order to take advantage of tooling that is provided. Make sure it is referenced "),a("em",[t._v("before")]),t._v(" your custom styles:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~kickstand-ui/src/scss/styles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),a("p",[a("em",[t._v("Alternately")]),t._v(", you can add a reference to the SASS in the "),a("code",[t._v("angular.json")]),t._v(" config file "),a("em",[t._v("before")]),t._v(" your global styles (again, so that the default styles can easily be overridden):")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"styles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../node_modules/kickstand-ui/src/scss/styles.scss"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"styles.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"adding-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-components"}},[t._v("#")]),t._v(" Adding Components")]),t._v(" "),a("p",[t._v("Using Kickstand UI within an Angular CLI project is a two-step process. You will need to:")]),t._v(" "),a("ol",[a("li",[t._v("Include the "),a("code",[t._v("CUSTOM_ELEMENTS_SCHEMA")]),t._v(" in the modules that use the components.")]),t._v(" "),a("li",[t._v("Call "),a("code",[t._v("defineCustomElements()")]),t._v(" from "),a("code",[t._v("main.ts")]),t._v(" (or some other appropriate place).")])]),t._v(" "),a("h3",{attrs:{id:"including-the-custom-elements-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#including-the-custom-elements-schema"}},[t._v("#")]),t._v(" Including the Custom Elements Schema")]),t._v(" "),a("p",[t._v("Including the "),a("code",[t._v("CUSTOM_ELEMENTS_SCHEMA")]),t._v(" in the module allows the use of the web components in the HTML markup without the compiler producing errors. This code should be added into the "),a("code",[t._v("AppModule")]),t._v(" and in every other modules that use your custom elements.")]),t._v(" "),a("p",[t._v("Here is an example of adding it to "),a("code",[t._v("AppModule")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BrowserModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/platform-browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CUSTOM_ELEMENTS_SCHEMA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NgModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FormsModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/forms'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  declarations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("BrowserModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FormsModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bootstrap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  schemas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CUSTOM_ELEMENTS_SCHEMA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CUSTOM_ELEMENTS_SCHEMA")]),t._v(" needs to be included in any module that uses custom elements.")])]),t._v(" "),a("h3",{attrs:{id:"add-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-components"}},[t._v("#")]),t._v(" Add Components")]),t._v(" "),a("p",[t._v("Import the "),a("code",[t._v("applyPolyfills()")]),t._v(" and "),a("code",[t._v("defineCustomElements()")]),t._v(" functions from the Kickstand UI loader in your "),a("code",[t._v("main.ts")]),t._v(" file and execute them (as shown below) and you can start using Kickstand UI's components just like normal HTML elements.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" applyPolyfills"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defineCustomElements "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kickstand-ui/loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyPolyfills")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineCustomElements")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);