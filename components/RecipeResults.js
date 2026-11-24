'use client';
import Link from 'next/link';
import RecipeCard from './RecipeCard';
import SearchForm from './SearchForm';
import {useLocale} from './LocaleProvider';
export default function RecipeResults({q,list,hasQuery}){const {t}=useLocale();return <div className="wrap section page"><Link className="back" href="/">← {t.home}</Link><span className="eyebrow">{t.searchLabel}</span><h1 className="page-title">{t.searchTitle}<span className="accent"> ✳</span></h1><SearchForm key={q} initial={q}/><div className="section-head results-head"><h2>{hasQuery?t.yourRecipes:t.all}</h2><span>{list.length} {t.count}</span></div>{hasQuery&&list.length>0&&<p className="results-note">{t.resultsNote}</p>}{list.length?<div className="grid">{list.map(({r,matched})=><RecipeCard key={r.slug} recipe={r} matched={hasQuery?matched:undefined}/>)}</div>:<div className="empty"><h2>{t.noResults}</h2><p>{t.tryOther}</p><Link href="/recipes">{t.all} ↗</Link></div>}</div>}
