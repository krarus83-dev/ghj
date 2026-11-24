'use client';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';
import {useLocale} from './LocaleProvider';
import {localizedRecipe} from '../lib/translations';
export default function RecipeCard({recipe,matched}){const {lang,t}=useLocale();const r=localizedRecipe(recipe,lang);return <article className="card"><Link href={'/recipes/'+r.slug} className="card-link"><img src={r.image} alt={r.title}/><div className="card-info"><div><h3>{r.title}</h3>{matched!==undefined&&<span className="match">{t.have}: {matched} {t.of} {r.ingredients.length} {t.products}</span>}</div><span className="time">{r.time} {t.min}</span></div></Link><FavoriteButton slug={r.slug}/></article>}
