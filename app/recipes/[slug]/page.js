import {notFound} from 'next/navigation';
import {recipes} from '../../../lib/recipes';
import RecipeDetail from '../../../components/RecipeDetail';
export function generateStaticParams(){return recipes.map(({slug})=>({slug}))}
export default async function Recipe({params}){const {slug}=await params;const r=recipes.find(x=>x.slug===slug);if(!r)notFound();return <RecipeDetail recipe={r}/>}
