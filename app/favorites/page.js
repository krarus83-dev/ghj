'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {recipes} from '../../lib/recipes';
import RecipeCard from '../../components/RecipeCard';
import {getFavorites} from '../../components/FavoriteButton';
import {useLocale} from '../../components/LocaleProvider';
export default function Favorites(){const {t}=useLocale();const [items,setItems]=useState([]);const [ready,setReady]=useState(false);useEffect(()=>{const sync=()=>{setItems(getFavorites());setReady(true)};sync();window.addEventListener('favorites-changed',sync);return()=>window.removeEventListener('favorites-changed',sync)},[]);const selected=recipes.filter(r=>items.includes(r.slug));return <div className="wrap section page"><Link className="back" href="/">← {t.home}</Link><span className="eyebrow">{t.collection}</span><h1 className="page-title">{t.favorites} <span className="accent">♥</span></h1>{!ready?<p>{t.loading}</p>:selected.length?<div className="grid">{selected.map(r=><RecipeCard key={r.slug} recipe={r}/>)}</div>:<div className="empty"><h2>{t.empty}</h2><p>{t.save}</p><Link href="/recipes">{t.recipes} ↗</Link></div>}</div>}
