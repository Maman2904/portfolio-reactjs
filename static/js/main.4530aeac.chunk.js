(this.webpackJsonpujian050221=this.webpackJsonpujian050221||[]).push([[0],{29:function(e,a,s){},55:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),i=s(9),n=s.n(i),r=(s(29),s(2)),l=s(3),o=s(5),j=s(4),m=s(0),d=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"main-menu",id:"main-menu",children:Object(m.jsxs)("ul",{className:"main-menu-list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#page-resume",className:"link-home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#page-resume",className:"link-page",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#page-skills",className:"link-page",children:"Skills"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#page-portfolio",className:"link-page",children:"Portfolio"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#page-contact",className:"link-page",children:"Contact"})})]})})})}}]),s}(t.Component),b=s(6),p=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"section-vcardbody section-home",id:"section-home",children:[Object(m.jsxs)("div",{className:"vcard-profile-pic",children:[Object(m.jsx)("img",{src:this.props.foto,id:"profile2",alt:""}),Object(m.jsx)("img",{src:this.props.foto,id:"profile1",className:"profileActive",alt:""})]}),Object(m.jsxs)("div",{className:"vcard-profile-description",children:[Object(m.jsxs)("h1",{className:"profile-title",children:["Hi, i'm ",Object(m.jsx)("span",{className:"color1",children:this.props.nama})]}),Object(m.jsx)("h2",{className:"profile-subtitle",children:this.props.job}),Object(m.jsx)("hr",{className:"hr1"}),Object(m.jsx)("div",{className:"vcard-profile-description-text",children:Object(m.jsx)("p",{children:this.props.title})}),Object(m.jsx)("div",{className:"vcard-profile-description-feature",children:Object(m.jsx)("div",{className:"vcard-profile-description-ft-item",children:Object(m.jsxs)("p",{children:["Email : ",this.props.email," ",Object(m.jsx)("br",{})," Phone ",this.props.phone]})})})]}),Object(m.jsx)("div",{className:"vcard-footer",children:Object(m.jsxs)("div",{className:"footer-social-icons",children:[Object(m.jsx)("a",{href:this.props.instagram,target:"blank",children:Object(m.jsx)("i",{className:"fa fa-instagram"})}),Object(m.jsx)("a",{href:this.props.facebook,target:"blank",children:Object(m.jsx)("i",{className:"fa fa-facebook"})}),Object(m.jsx)("a",{href:this.props.linkedin,target:"blank",children:Object(m.jsx)("i",{className:"fa fa-linkedin"})}),Object(m.jsx)("a",{href:this.props.youtube,target:"blank",children:Object(m.jsx)("i",{className:"fa fa-youtube"})})]})})]})})}}]),s}(t.Component),h=Object(b.b)((function(e){return{foto:e.home.foto,nama:e.home.nama,job:e.home.job,title:e.home.title,email:e.home.email,phone:e.home.phone,instagram:e.home.instagram,facebook:e.home.facebook,linkedin:e.home.linkedin,youtube:e.home.youtube}}))(p),u=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"section-vcardbody section-page",id:"page-resume",children:[Object(m.jsxs)("div",{className:"section-education",children:[Object(m.jsx)("h2",{className:"section-title",children:"Resume"}),Object(m.jsxs)("div",{className:"resume-buttons header-page-buttons",children:[Object(m.jsxs)("a",{href:"##",className:"btn btn-default btn-default2",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"\xa0 Download my resume"]}),Object(m.jsxs)("a",{href:"#page-contact",className:"btn btn-default btn-default2 link-page",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"\xa0 Get in Touch"]})]}),Object(m.jsxs)("h2",{className:"section-title2",children:[Object(m.jsx)("i",{className:"fa fa-university"}),"\xa0 Education"]}),this.props.education.map((function(e,a){return Object(m.jsxs)("div",{className:"resume-item",children:[Object(m.jsx)("h3",{className:"section-item-title-1",children:e.jurusan}),Object(m.jsxs)("h4",{className:"graduation-time",children:[e.sekolah," (",Object(m.jsx)("strong",{className:"graduation-date",children:e.tahun}),")"]}),Object(m.jsx)("div",{className:"graduation-description",children:Object(m.jsx)("p",{children:"Saya lulusan tahun 2020, di Universitas PancaSakti Bekasi,"})})]},a)}))]}),Object(m.jsxs)("div",{className:"section-education",children:[Object(m.jsxs)("h2",{className:"section-title2",children:[Object(m.jsx)("i",{className:"fa fa-flag"}),"\xa0 Work Experience"]}),this.props.work.map((function(e,a){return Object(m.jsxs)("div",{className:"resume-item",children:[Object(m.jsx)("h3",{className:"section-item-title-1",children:e.perusahaan}),Object(m.jsxs)("h4",{className:"job",children:[e.jabatan," -"," ",Object(m.jsx)("span",{className:"job-date",children:e.lama})]}),Object(m.jsx)("div",{className:"graduation-description",children:Object(m.jsx)("p",{children:"saya bekerja di pt karya komponen presisi sebagai operator dan quality assurance selama 2 tahun, job desk: mengukur dan memastikan semua part berdimensi ok"})})]},a)}))]}),Object(m.jsxs)("h2",{className:"section-title2",children:[Object(m.jsx)("i",{className:"fa fa-commenting"}),"\xa0 Tentang Saya"]}),Object(m.jsx)("div",{className:"testimonials",children:Object(m.jsx)("div",{className:"testimonial-slides",id:"testimonial-carousel",children:Object(m.jsxs)("div",{className:"testimonial-item",children:[Object(m.jsx)("div",{className:"testimonial-content",children:Object(m.jsx)("p",{children:this.props.kuote})}),Object(m.jsxs)("div",{className:"testimonial-credits",children:[Object(m.jsx)("div",{className:"testimonial-picture",children:Object(m.jsx)("img",{src:this.props.foto,alt:!0})}),Object(m.jsx)("p",{className:"testimonial-author",children:this.props.nama})]})]})})}),Object(m.jsx)("div",{className:"page-footer",children:Object(m.jsxs)("div",{className:"resume-buttons",children:[Object(m.jsxs)("a",{href:"#",className:"btn btn-default btn-default2",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"\xa0 Download my resume"]}),Object(m.jsxs)("a",{href:"#page-contact",className:"btn btn-default btn-default2 link-page",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"\xa0 Get in Touch"]})]})})]})})}}]),s}(t.Component),O=Object(b.b)((function(e){return{foto:e.home.foto,nama:e.home.nama,education:e.resume.education,work:e.resume.work,kuote:e.resume.kuote,quotesmaker:e.resume.quotesmaker}}))(u),f=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"section-vcardbody section-page",id:"page-skills",children:Object(m.jsxs)("div",{className:"section-skills",children:[Object(m.jsx)("h2",{className:"section-title",children:"SKILLS"}),Object(m.jsxs)("h3",{className:"section-item-title-2",children:[Object(m.jsx)("i",{className:"fa fa-users"}),"\xa0\xa0 Professional Skills"]}),Object(m.jsx)("ul",{className:"skills-list",children:this.props.professional.map((function(e,a){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"progress",children:[Object(m.jsx)("div",{className:"progress-bar",role:"progressbar","data-percent":e.persen,style:{width:"".concat(e.persen)},children:Object(m.jsxs)("span",{className:"sr-only",children:[e.persen," Complete"]})}),Object(m.jsx)("span",{className:"progress-type",children:e.nama}),Object(m.jsx)("span",{className:"progress-completed",children:e.persen})]},a)})}))}),Object(m.jsxs)("h3",{className:"section-item-title-2",children:[Object(m.jsx)("i",{className:"fa fa-laptop"}),"\xa0\xa0 Software Skills"]}),Object(m.jsx)("ul",{className:"skills-list",children:this.props.software.map((function(e,a){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"progress",children:[Object(m.jsx)("div",{className:"progress-bar progress-bar-2",role:"progressbar","data-percent":e.persen,style:{width:"".concat(e.persen)},children:Object(m.jsxs)("span",{className:"sr-only",children:[e.persen," Complete"]})}),Object(m.jsx)("span",{className:"progress-type",children:e.nama}),Object(m.jsx)("span",{className:"progress-completed",children:e.persen})]},a)})}))}),Object(m.jsxs)("h3",{className:"section-item-title-2",children:[Object(m.jsx)("i",{className:"fa fa-code"}),"\xa0\xa0 Code Skills"]}),Object(m.jsx)("ul",{className:"skills-list",children:this.props.code.map((function(e,a){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"progress",children:[Object(m.jsx)("div",{className:"progress-bar progress-bar-3",role:"progressbar","data-percent":e.persen,style:{width:"".concat(e.persen)},children:Object(m.jsxs)("span",{className:"sr-only",children:[e.persen," Complete"]})}),Object(m.jsx)("span",{className:"progress-type",children:e.nama}),Object(m.jsx)("span",{className:"progress-completed",children:e.persen})]},a)})}))})]})})})}}]),s}(t.Component),x=Object(b.b)((function(e){return{professional:e.skill.professional,software:e.skill.software,code:e.skill.code}}))(f),g=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"section-vcardbody section-page",id:"page-portfolio",children:Object(m.jsxs)("div",{className:"section-portfolio",children:[Object(m.jsx)("h2",{className:"section-title",children:"Portfolio"}),Object(m.jsx)("div",{className:"projects-list",children:this.props.portfolio.map((function(e,a){return Object(m.jsx)("div",{className:"project-item",children:Object(m.jsx)("a",{href:e.gambar,className:"project-thumbnail nivobox","data-lightbox-gallery":"portfolio",style:{backgroundImage:"url(".concat(e.thumbnail,")")},children:Object(m.jsx)("div",{className:"project-description-wrapper",children:Object(m.jsxs)("div",{className:"project-description",children:[Object(m.jsx)("h2",{className:"project-title",children:e.title}),Object(m.jsx)("span",{className:"see-more",children:e.tag})]})})})},a)}))})]})})})}}]),s}(t.Component),v=Object(b.b)((function(e){return{portfolio:e.portfolio.portfolio}}))(g),N=s(24),k=s.n(N),y=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(e){return Object(r.a)(this,s),a.call(this,e)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.getAPI()}},{key:"render",value:function(){var e=this.props.blog;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"section-vcardbody section-page",id:"page-blog",children:Object(m.jsxs)("div",{className:"section-blog",children:[Object(m.jsx)("h2",{className:"section-title",children:"Blog"}),Object(m.jsx)("div",{className:"blog-posts",children:e.map((function(e,a){return Object(m.jsx)("div",{className:"blog-item",children:Object(m.jsxs)("div",{className:"blog-item-wrapper",children:[Object(m.jsx)("div",{className:"blog-item-thumb",children:Object(m.jsx)("img",{src:e.image,alt:""})}),Object(m.jsxs)("div",{className:"blog-item-infos",children:[Object(m.jsx)("div",{className:"blog-item-title-wrapper",children:Object(m.jsx)("h2",{className:"blog-item-title title-border",children:e.id})}),Object(m.jsx)("div",{className:"blog-item-description",children:Object(m.jsx)("p",{children:e.text})}),Object(m.jsx)("div",{className:"blog-item-link"})]})]})},a)}))}),Object(m.jsx)("div",{className:"section-pagination",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-xs-12",children:Object(m.jsxs)("span",{className:"pagination-numbers",children:[Object(m.jsx)("a",{href:"#",children:"1"}),Object(m.jsx)("a",{href:"#",children:"2"}),Object(m.jsx)("a",{href:"#",children:"3"}),Object(m.jsx)("a",{href:"#",children:"4"}),Object(m.jsx)("a",{href:"#",children:"5"}),Object(m.jsx)("a",{href:"#",children:"6"})]})})})})]})})})}}]),s}(t.Component),w=Object(b.b)((function(e){return{blog:e.blog.blog}}),(function(e){return{getAPI:function(){k.a.get("".concat("https://dummyapi.io/data/api/post?limit=50"),{headers:{"app-id":"601ead21b91b092675004fb2"}},{delayed:!0}).then((function(a){e({type:"BLOG",payload:a.data.data})})).catch((function(e){console.log(e.response)}))}}}))(y),S=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"section-vcardbody section-page",id:"page-contact",children:Object(m.jsxs)("div",{className:"section-contact",children:[Object(m.jsx)("h2",{className:"section-title",children:"Contact"}),Object(m.jsxs)("div",{className:"map",children:[Object(m.jsx)("div",{className:"map-overlay"}),Object(m.jsx)("iframe",{title:"map",src:this.props.map})]}),Object(m.jsxs)("div",{className:"contact-infos",children:[Object(m.jsxs)("h4",{className:"contact-subtitle-1",children:[Object(m.jsx)("i",{className:"fa fa-map"}),"\xa0 Address"]}),Object(m.jsx)("p",{children:this.props.alamat}),Object(m.jsxs)("h4",{className:"contact-subtitle-1",children:[Object(m.jsx)("i",{className:"fa fa-phone-square"}),"\xa0 Phone"]}),Object(m.jsx)("p",{children:this.props.phone}),Object(m.jsxs)("h4",{className:"contact-subtitle-1",children:[Object(m.jsx)("i",{className:"fa fa-envelope"}),"\xa0 Mail"]}),Object(m.jsx)("p",{children:this.props.email})]}),Object(m.jsxs)("h4",{className:"contact-subtitle-1",children:[Object(m.jsx)("i",{className:"fa fa-paper-plane-o"}),"\xa0 Send Me a Message"]}),Object(m.jsxs)("form",{id:"contactForm",method:"post",className:"form",children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{className:"form-control required",id:"name",name:"name",placeholder:"Name",type:"text",required:!0})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{className:"form-control required",id:"email",name:"email",placeholder:"Email",type:"email",required:!0})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{className:"form-control required",id:"subject",type:"text",name:"subject",placeholder:"Subject",required:!0})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("textarea",{className:"form-control required",id:"message",name:"message",placeholder:"Message",rows:5,required:!0,defaultValue:""})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"submit",className:"btn btn-default form-send",defaultValue:"Send!"})})]})]})})})}}]),s}(t.Component),C=Object(b.b)((function(e){return{map:e.contact.map,alamat:e.contact.alamat,phone:e.contact.phone,email:e.contact.email}}))(S),P=Object(b.b)((function(e){return{blog:e.blog.blog}}))((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"section-vcardbody section-page section-page-single",id:"page-blog-single",children:Object(m.jsx)("div",{className:"section-blog-single",children:Object(m.jsx)("div",{id:"postHere"})})})})})),B=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"body",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(d,{}),Object(m.jsx)(h,{}),Object(m.jsx)(O,{}),Object(m.jsx)(x,{}),Object(m.jsx)(v,{}),Object(m.jsx)(w,{}),Object(m.jsx)(P,{}),Object(m.jsx)(C,{})]})})}}]),s}(t.Component),J=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"loader-container",id:"page-loader",children:Object(m.jsxs)("div",{className:"loading-wrapper",children:[Object(m.jsx)("div",{className:"loader-animation",id:"loader-animation",children:Object(m.jsx)("span",{className:"loader",children:Object(m.jsx)("span",{className:"loader-inner"})})}),Object(m.jsxs)("div",{className:"loader-name",id:"loader-name",children:[this.props.namaDepan," ",Object(m.jsx)("strong",{children:this.props.namaBelakang})]}),Object(m.jsx)("p",{className:"loader-job",id:"loader-job",children:this.props.job})]})})})}}]),s}(t.Component),q=Object(b.b)((function(e){return{namaDepan:e.loader.namaDepan,namaBelakang:e.loader.namaBelakang,job:e.loader.job}}))(J),M=function(e){Object(o.a)(s,e);var a=Object(j.a)(s);function s(){return Object(r.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(q,{}),Object(m.jsx)(B,{})]})}}]),s}(t.Component),A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,n=a.getTTFB;s(e),t(e),c(e),i(e),n(e)}))},D={namaDepan:"Maman",namaBelakang:"Sulaeman",job:"Software Engineer"},L={foto:"asset/img/me.png",nama:"Maman Sulaeman",job:"Fresh Graduate",title:"software engginer",email:"mamansulaeman2904@gmail.com",phone:"+62 887 172 9987",instagram:"https://www.instagram.com/maman.sulae_man/",facebook:"https://m.facebook.com/maman.alamsyah",linkedin:"https://www.linkedin.com/in/maman-sulaeman-61b7781a4/",youtube:"https://www.youtube.com/channel/UCJuqVgBrzeP7AWBxfi6qiwA"},T={foto:"asset/img/me.png",nama:"Maman Sulaeman",kuote:"saya Maman Sulaeman fresh graduate, miliki kemampuan programming,python, Javascript, ReactJS, React Native, ExpressJs, HTML dan php, telah membuat beberapa project. Saya juga terbiasa mengoperasikan OS Linux,",education:[{jurusan:"Teknik Informatika",Universitas:"PancaSakti Bekasi",tahun:"2016-2020"}],work:[{perusahaan:"PT Karya Komponen Presisi",jabatan:"QA",lama:"2018-2020"}]},E={code:[{nama:"HTML & CSS",persen:"90%"},{nama:"Bootstrap",persen:"85%"},{nama:"Python",persen:"80%"},{nama:"Javascript",persen:"80%"},{nama:"PHP",persen:"70%"},{nama:"ReactJS",persen:"80%"},{nama:"React Native",persen:"80%"},{nama:"ExpressJS",persen:"90%"}],professional:[{nama:"Communication",persen:"80%"},{nama:"Leadership",persen:"80%"},{nama:"Comfidence",persen:"80%"}],software:[{nama:"Adobe Photoshop",persen:"60%"},{nama:"Adobe Illustrator",persen:"60%"}]},I={portfolio:[{title:"web ujian online sederhahna",tag:"Javascript, react-native",gambar:"asset/img/portfolio/ujian.png",thumbnail:"asset/img/portfolio/ujian.png"},{title:"Sistem Absensi Kehadiran Deteksi Wajah",tag:"Python, Tkinter",gambar:"asset/img/portfolio/absensiPython.png",thumbnail:"asset/img/portfolio/absensiPython.png"},{title:"E-commerce ",tag:"PHP",gambar:"asset/img/portfolio/phpstore.png",thumbnail:"asset/img/portfolio/phpstore.png"},{title:"Siskamling app",tag:"Javascript, react-native",gambar:"asset/img/portfolio/siskamling.jpeg",thumbnail:"asset/img/portfolio/siskamling.jpeg"},{title:"Absensi app",tag:"Javascript, react-native",gambar:"asset/img/portfolio/absensiapp.jpeg",thumbnail:"asset/img/portfolio/absensiapp.jpeg"},{title:"service-Backend",tag:"Javascript, expressJS",gambar:"asset/img/portfolio/exprss.png",thumbnail:"asset/img/portfolio/exprss.png"},{title:"User Manager app",tag:"Javascript, react-native, with firebase and monggoDB",gambar:"asset/img/portfolio/usermanager.jpeg",thumbnail:"asset/img/portfolio/usermanager.jpeg"},{title:"Web Portofolio",tag:"Javasript, ReactJS",gambar:"asset/img/portfolio/webportfolio.png",thumbnail:"asset/img/portfolio/webportfolio.png"}]},H=s(14),R={blog:[]},F={map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126899.47381010777!2d107.08405116844088!3d-6.315041296754703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699a97cdfd23f3%3A0xa467efa8d683cc31!2sCikarang%2C%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1612687378737!5m2!1sid!2sid",alamat:"cikarang, Bekasi, jawa barat, Indonesia",phone:"+62 887 172 9987",email:"mamansulaeman2904"},G=s(8),K=Object(G.c)(Object(G.b)({loader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return e},home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return e},resume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return e},skill:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return e},portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return e},blog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BLOG":e=Object(H.a)(Object(H.a)({},e),{},{blog:a.payload})}return e},contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return e}}));n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(b.a,{store:K,children:Object(m.jsx)(M,{})})}),document.getElementById("root")),A()}},[[55,1,2]]]);
//# sourceMappingURL=main.4530aeac.chunk.js.map