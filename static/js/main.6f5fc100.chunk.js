(this["webpackJsonpquizz-app-react"]=this["webpackJsonpquizz-app-react"]||[]).push([[0],{10:function(e,o,t){},11:function(e,o,t){"use strict";t.r(o);var i=t(1),s=t.n(i),n=t(4),r=t.n(n),c=t(2),a=[{question:"if I were you, would you be me or you I be you?",options:[{option:"wtf?",isCorrect:!0},{option:"I would be me, but also you.",isCorrect:!1},{option:"I... y-yes.",isCorrect:!1},{option:"thirteen",isCorrect:!1}]},{question:"What is the sum of 3 + 4 * 2 / 1?",options:[{option:"18",isCorrect:!1},{option:"11",isCorrect:!0},{option:"14",isCorrect:!1},{option:"7",isCorrect:!1}]},{question:"What is the color of SUN?",options:[{option:"red",isCorrect:!1},{option:"orange",isCorrect:!1},{option:"reddish orange",isCorrect:!1},{option:"yellow",isCorrect:!0}]},{question:"Considering that the sky is blue and the earth is a square, what is my name?",options:[{option:"Juliana",isCorrect:!1},{option:"Shrek",isCorrect:!1},{option:"Oliver",isCorrect:!1},{option:">> GABRIEL JODAS <<",isCorrect:!0}]}],u=t(0),p=function(e){var o=e.LoopQuestions,t=(e.setLoopQuestions,e.showScore),i=(e.setShowScore,e.score),s=(e.setScore,e.updateLoopQuestion),n=e.restartGame;return Object(u.jsx)("div",{children:t?Object(u.jsxs)("div",{className:"score-section",children:[Object(u.jsxs)("h2",{children:[" You scored ",i," out of ",a.length," "]}),Object(u.jsx)("button",{className:"play-again",onClick:n,children:"Play Again"})]}):Object(u.jsxs)("div",{className:"questions",children:[Object(u.jsx)("h2",{children:a[o].question}),Object(u.jsx)("div",{className:"options",children:a[o].options.map((function(e){return Object(u.jsx)("a",{href:"#",onClick:function(){return s(e.isCorrect)},className:"question-option",children:e.option},e.option)}))})]})})};t(10);var h=function(){var e=Object(i.useState)(0),o=Object(c.a)(e,2),t=o[0],s=o[1],n=Object(i.useState)(!1),r=Object(c.a)(n,2),h=r[0],l=r[1],d=Object(i.useState)(0),j=Object(c.a)(d,2),b=j[0],C=j[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"quizz-container",children:[Object(u.jsx)("h1",{children:"Quizz"}),Object(u.jsx)(p,{LoopQuestions:t,setLoopQuestions:s,showScore:h,setShowScore:l,score:b,setScore:C,updateLoopQuestion:function(e){(!0===e&&C(b+1),t<a.length-1)?s(t+1):l(!0)},restartGame:function(){window.location.reload(!0)}})]})})},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(o){var t=o.getCLS,i=o.getFID,s=o.getFCP,n=o.getLCP,r=o.getTTFB;t(e),i(e),s(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),l()}},[[11,1,2]]]);
//# sourceMappingURL=main.6f5fc100.chunk.js.map