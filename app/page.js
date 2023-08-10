'use client';
import Banner from "./Banner";
import Section1 from "./Section1";
import Water from "./Water";
import Names from "./Names";
import Houseplants from "./Houseplants";
import Section2 from "./Section2";
import Earth from "./Earth";
import { Londrina_Solid } from '@next/font/google';
import { Poppins } from '@next/font/google';
import './chatBot.js';

const londrina = Londrina_Solid({
  subsets: ['latin'],
  weight: ['900']
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <main>
      <div className={londrina.className}>
        <Banner /> 
      </div>
      <div className={poppins.className}>
        <Section1 />
      </div>
      <div className={londrina.className}>
        <Water />
      </div>
      <div className={poppins.className}>
        <Names />
      </div>
      <Houseplants />
      <div className={poppins.className}>
        <Section2 />
      </div>
      <div className={londrina.className}>
        <Earth />
      </div>
    </main>
  )
}

// var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
// v.onload = function() {
//   window.voiceflow.chat.load({
//     verify: { projectID: '64d2d37526dfd90007fa04bd' },
//     url: 'https://general-runtime.voiceflow.com',
//     versionID: 'production'
//   });
// }
// v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
// (document, 'script');