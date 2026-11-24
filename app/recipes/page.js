import {recipes} from '../../lib/recipes';
import {match} from '../../lib/i18n';
import RecipeResults from '../../components/RecipeResults';
export default async function Recipes({searchParams}){const params=await searchParams;const q=typeof params.ingredients==='string'?params.ingredients:'';const hasQuery=q.split(/[,;\n]+/).some(x=>x.trim());const list=recipes.map(r=>({r,matched:match(r,q).length})).filter(x=>!hasQuery||x.matched>0).sort((a,b)=>b.matched-a.matched);return <RecipeResults q={q} list={list} hasQuery={hasQuery}/>}
