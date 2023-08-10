'use client';
import './globals.css'
import {useEffect} from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
            verify: { projectID: '64d2d37526dfd90007fa04bd' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Houseplant</title>
        <meta name="description" content="Provides user with plant care tips and advice"></meta>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
