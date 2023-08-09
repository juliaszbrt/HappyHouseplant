'use client';
import './globals.css'

// (function(d, t) {
//   var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
//   v.onload = function() {
//     window.voiceflow.chat.load({
//         verify: { projectID: '64d2d37526dfd90007fa04bd' },
//         url: 'https://general-runtime.voiceflow.com',
//         versionID: 'production'
//     });
//   }
//   v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
// })(document, 'script');

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Happy Houseplant</title>
        <meta></meta>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
