'use client';
import Link from 'next/link';
import {useLocale} from '../../../components/LocaleProvider';
export default function NotFound(){const {t}=useLocale();return <div className="wrap section page empty"><h1>{t.missing} 🥲</h1><Link href="/recipes">{t.recipes} ↗</Link></div>}
