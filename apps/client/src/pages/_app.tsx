import type { AppProps } from 'next/app'
import {Appbar} from "ui"
import {RecoilRoot} from 'recoil'
 
export default function MyApp({ Component, pageProps }: AppProps) {

  return <div>
    <RecoilRoot>
      <Appbar onClick={function (message: string): void {
        
      } }></Appbar>
  <Component {...pageProps} />
  </RecoilRoot>
  </div>
}