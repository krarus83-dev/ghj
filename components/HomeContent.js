'use client';
import Link from 'next/link';
import {recipes} from '../lib/recipes';
import {useLocale} from './LocaleProvider';
import RecipeCard from './RecipeCard';
import SearchForm from './SearchForm';
export default function HomeContent(){const {t}=useLocale();return <div className="wrap"><section className="hero"><div className="hero-copy"><span className="eyebrow">{t.tagline}</span><h1>{t.hero1}<br/>{t.hero2}<span className="accent">?</span></h1><SearchForm/></div><div className="hero-image"><img src="/images/eggs.jpg" alt=""/><span className="sticker">{t.sticker} ✳</span></div></section><section className="section"><div className="section-head"><div><span className="eyebrow">{t.short}</span><h2>{t.ideas} <span className="accent">✳</span></h2></div><Link className="text-link" href="/recipes">{t.all} ↗</Link></div><div className="grid">{recipes.slice(0,6).map(r=><RecipeCard key={r.slug} recipe={r}/>)}</div></section></div>}
