'use client';
import {useEffect,useState} from 'react';
import {useLocale} from './LocaleProvider';
const key='what-to-cook-favorites';
export function getFavorites(){try{const a=JSON.parse(localStorage.getItem(key)||'[]'); return Array.isArray(a)?a:[]}catch{return []}}
export default function FavoriteButton({slug}){const [saved,setSaved]=useState(false);const {t}=useLocale();useEffect(()=>{setSaved(getFavorites().includes(slug));const sync=()=>setSaved(getFavorites().includes(slug));window.addEventListener('favorites-changed',sync);return()=>window.removeEventListener('favorites-changed',sync)},[slug]);function toggle(){let a=getFavorites();a=a.includes(slug)?a.filter(x=>x!==slug):[...a,slug];try{localStorage.setItem(key,JSON.stringify(a));setSaved(a.includes(slug));window.dispatchEvent(new Event('favorites-changed'))}catch{}}return <button className={'heart '+(saved?'is-saved':'')} onClick={toggle} aria-label={saved?t.remove:t.add} aria-pressed={saved}>{saved?'♥':'♡'}</button>}
