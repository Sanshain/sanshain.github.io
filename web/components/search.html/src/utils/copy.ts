import { GithubRepoInfo } from "../typing/response"

export function copyBranchUrl(e: KeyboardEnhancedEvent<HTMLAnchorElement>, repo: GithubRepoInfo) {
    // console.log(e.code, e.ctrlKey)
    if (e.code == 'KeyC' && e.ctrlKey) {
        navigator.clipboard.writeText(`degit ${repo.html_url}#${e.currentTarget.textContent}`)
    }
}


// function getNumberOfGames(x: number): number {
//     const nextTeamsCount = Math.ceil(half);
//     if (nextTeamsCount === 1) return 1;
//     else {
//         return getNumberOfGames(nextTeamsCount);
//     }
// }

// function getNumberOfGames(x) {
//     const games = Math.floor(x / 2);
//     const excessTeam = x % 2;
//     if (!games) return games;
//     else if (!excessTeam && games === 1) return games;
//     else {
//         const nextTeamsCount = games + excessTeam;
//         return games + getNumberOfGames(nextTeamsCount);
//     }
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += getNumberOfGames(i)
// }