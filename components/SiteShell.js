'use client';
import Link from 'next/link';
import {useLocale} from './LocaleProvider';
export function Header(){const {lang,t,setLang}=useLocale();return <header className="header wrap"><Link className="brand" href="/"><img src="/logo.svg" width="44" height="44" alt=""/><span>{t.brand}</span></Link><nav aria-label={t.recipes}><Link href="/recipes">{t.recipes}</Link><Link href="/favorites">{t.favorites} ♡</Link></nav><div className="language" aria-label={t.lang}>{['ru','uz','en'].map(l=><button key={l} type="button" aria-label={{ru:'Русский',uz:'O‘zbekcha',en:'English'}[l]} aria-pressed={lang===l} className={lang===l?'active':''} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div></header>}
export function Footer(){const {t}=useLocale();return <footer className="wrap footer">{t.footer}</footer>}
