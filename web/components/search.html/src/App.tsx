
import { ComponentChildren, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import style from "./style.css";          // import './style.css'

import { GithubRepoInfo } from './typing/response'
import { debounce } from './utils/debounce';

/// @ LINAIRIA:

// till just with css:
import { css } from '@linaria/core';


const user = localStorage.getItem('user') || "Sanshain";
let repos$: GithubRepoInfo[] = []

// const app = css`
//   text-transform: uppercase;
//   color: red;
// `;
const searchContainerStyle = css`
   max-height: calc(100vh - 5em);
   overflow: auto;
`;

function App({ onFocus, onBlur }: { onFocus: Function, onBlur: Function }): h.JSX.Element {

   const [repos, updateRepos] = useState<GithubRepoInfo[]>(repos$)

   useEffect(() => { }, [])

   function getRepos(e: Event) {

      onFocus(e);

      fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=30&page=1`).then(r => r.json()).then((resp: GithubRepoInfo[]) => {
         updateRepos(v => repos$ = resp);
      })
   }

   function onInput(e: InputEvent) {
      const target = e.currentTarget as HTMLInputElement;
      if (target.value.length > 2) {
         updateRepos(v => repos$.filter(v => ~v.name.indexOf(target.value)))
      }
      else if (target.value) {
         updateRepos(v => repos$.filter(v => v.name.startsWith(target.value)))
      }
      else {
         updateRepos(v => repos$)
      }
   }

   function onEscape(e: KeyboardEvent) {
      console.log(e.key)
      if (e.code == 'Escape') {

         updateRepos(v => [])
         const target = e.currentTarget as HTMLInputElement;
         target.value = '';
         target.blur()
         onBlur()
      }
   }

   // function onBlur() {
   //    updateRepos(v => [])
   // }

   const hashtag = css`
      display: inline-block;
      
      padding: .2em 1em;
      border-radius: 1em;

      margin-left: 1em;   
   `;

   const tags = css`
      display: flex;
      flex-wrap: wrap;
      margin-bottom: .5em;

      &>div{
         margin-right: 1em;
         margin-top: 1em;
         margin-left: 0;
         border: 1px solid lightgoldenrodyellow;
         background-color: rgba(222, 184, 135, 0.18);
      }

      &>.lang{
         border: 1px solid lightblue;
         /* background-color: rgba(95, 158, 160, 0.4); */
         background-color: hsla(219, 79%, 66%, 0.41);
      }
   `;

   const accordeon = css`
      position: absolute;
      top: 1em;
      right: 1.5em;
      border: 1px solid lightblue;
      /* padding: 1em; */
      height: 2em;
      width: 2em;
      text-align: center;
      line-height: 2em;
      border-radius: 1em;
      color: antiquewhite;
      font-weight: bold;
      z-index: 2;
      transition:.5s;
      outline: none;
      
      &:hover, &:focus {
         box-shadow: 0 0 15px white;
         background-color: rgba(159, 220, 222, 0.36);
      }
   `;

   const branches_count = css`
      
   `;

   function fetchBranches(e: { currentTarget: EventTarget }, url: string) {
      const target = e.currentTarget as HTMLInputElement;
      if (target.parentElement) {
         target.parentElement.style.boxShadow = '0 0 5px white';
         target.parentElement.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      }
      target.addEventListener('mouseout', function () {
         if (target.parentElement) {
            //@ts-expect-error
            target.parentElement.style.boxShadow = null;
            //@ts-expect-error
            target.parentElement.style.backgroundColor = null;
         }
      }, {once: true})
   }

   function expandBranchBtnFocus(e: KeyboardEvent, repo: GithubRepoInfo) {
      if (e['code'] == 'NumpadAdd') {
         const target = (e.currentTarget as HTMLElement).querySelector('.branches_btn') as HTMLElement;
         target.focus()
         // target.dispatchEvent(new Event('focus'))
         const ev = {
            currentTarget: (e.currentTarget as HTMLElement).querySelector('.branches_btn')
         }
         fetchBranches(ev as { currentTarget: EventTarget}, repo.branches_url)
      }
      else if (~e['code'].indexOf('Enter')) {
         window.open(repo.html_url, '_blank');   // <- also TODO type it via types-spring         
      }

      console.warn(e['code'])
   }

   function expandBranchList(e: Event, repo: GithubRepoInfo) {
      const target = (e.currentTarget as HTMLElement)
      target.style['transform'] = 'rotate(270deg)';

      fetch(repo.branches_url).then(r => r.json()).then(r => {

      })
   }

   const [branches, setBranches] = useState<{ repo: number, branches: Array<{}> } | null>(null);

   return (<>
      <input type="search" placeholder="Start typing repository name you want..." onInput={onInput} onFocus={getRepos} onKeyUp={onEscape} />
      <div className={searchContainerStyle}>
         <ul class={style.repo_list}>
            {repos.map(repo => {
               return <li class={style.repo_block} onKeyDown={(e) => expandBranchBtnFocus(e, repo)} >
                  {/*  tabIndex={0} */}
                  <a href={repo.html_url}><h3 className={css`margin: .5em 0;display:inline-block;`}>{repo.name}</h3></a>
                  <p className={css`margin: .5em 0;`}>{repo.description || ''}</p>
                  <div className={tags}>
                     <div className={`${hashtag} lang`}>{repo.language}</div>
                     {repo.topics.map((topic: string) => {
                        return <div className={hashtag}>{topic}</div>
                     })}
                  </div>

                  <div className={`${accordeon} branches_btn`} tabIndex={1} onMouseOver={e => fetchBranches(e, repo.branches_url)} onClick={e => expandBranchList(e, repo)}>
                     &lt;
                  </div>
               </li>
            })}
         </ul>
      </div>
   </>);
}

export default App;


// for more information about preact typing, see https://preactjs.com/guide/v10/typescript/#typescript-configuration