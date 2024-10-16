
type DateString = string
type URLString = string

export type GithubRepoInfo = {
    id: number,
    name: string,    
    owner: {
        login: string
    },
    html_url: URLString,
    description?: string,
    topics: string[],
    language? : string[],
    
    default_branch: string,
    branches_url: `https://api.github.com/repos/${string}/${string}/branches{/branch}`,    

    // has_issues: boolean,
    issues_url: `https://api.github.com/repos/${string}/${string}/issues{/number}`,

    // fork: boolean,
    // forks: number,
    // open_issues: number,
    // homepage?: URLString,
    // ssh_url: `git@github.com:${string}/${string}.git`,
    // updated_at: DateString,
    // created_at: DateString,

    branches?: string[],
}



// open docs: https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28

// issues: https://api.github.com/search/issues?q=&page=1&per_page=1
// code: https://api.github.com/search/code?q=edx-drf-extensions+org:edx

// repos: https://api.github.com/users/${user}/repos
// EXACT FILTER:
// repos by language: https://api.github.com/search/repositories?q=user:Sanshain+language:javascript
// repos by topic: https://api.github.com/search/repositories?q=user:Sanshain+topic:preact