import { GithubRepoInfo } from "../typing/response"

export function copyBranchUrl(e: KeyboardEnhancedEvent<HTMLAnchorElement>, repo: GithubRepoInfo) {
    // console.log(e.code, e.ctrlKey)
    if (e.code == 'KeyC' && e.ctrlKey) {
        navigator.clipboard.writeText(`degit ${repo.html_url}#${e.currentTarget.textContent}`)
    }
}


