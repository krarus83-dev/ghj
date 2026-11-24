'use client';
import {createContext,useContext,useState,useEffect} from 'react';
import {ui} from '../lib/i18n';
const Context=createContext(null);
export function LocaleProvider({children}){const [lang,setLang]=useState('ru');useEffect(()=>{try{const saved=localStorage.getItem('cook-lang');if(['ru','uz','en'].includes(saved))setLang(saved)}catch{}},[]);useEffect(()=>{document.documentElement.lang=lang;document.title=ui[lang].brand;try{localStorage.setItem('cook-lang',lang)}catch{}},[lang]);return <Context.Provider value={{lang,t:ui[lang],setLang}}>{children}</Context.Provider>}
export function useLocale(){return useContext(Context)}
