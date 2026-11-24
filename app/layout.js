import './globals.css';
import {LocaleProvider} from '../components/LocaleProvider';
import {Header,Footer} from '../components/SiteShell';
export const metadata={title:'Что готовим?',description:'Рецепты из твоих продуктов'};
export default function Layout({children}){return <html lang="ru" suppressHydrationWarning><body><LocaleProvider><Header/><main>{children}</main><Footer/></LocaleProvider></body></html>}
