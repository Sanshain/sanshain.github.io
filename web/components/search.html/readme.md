#### Has been get started with: 

```sh
npm init nollup-app -- --name preact-app --template preact
```


### Features


- **Hot** module reloading
- **Linaria** (`css` tag) out of the box (w/o maps in hmr mode and `styled` feature (!))


<details>
<summary>

### Cheat sheets, how to install from a scratch:
. . .

</summary>

- Install fixed @prefresh/nollup package with the corrected exports (created due [this service](https://gitpkg.vercel.app/about)):

    ```sh
    npm install 'https://gitpkg.now.sh/Sanshain/prefresh/packages/nollup?main' -D
    ```

- Install `@linaria/rollup` with force flag (inapproproiate peer debendencies with `@linaria/rollup` package (it seems so), but I couldn't find out where is it inside linaria repository):

    ```sh
    npm i @linaria/rollup -D -f
    ```

- Install fixed `nollup` (inter alia in dev branch source-map-fast version is fixed) to drown out linaria sourcemap merging error in hmr mode (`linaria` will be without maps. Unfortunately, it's an unavoidable sacrifice). 

    ```sh
    npm i github:Sanshain/nollup#fix -D -f    
    ```
    or might to choice dev branch  as well: 
    ```sh
    npm i github:Sanshain/nollup#dev -D -f    
    ```    

- Install `Sanshain/rollup-plugin-hot-css` to have support of `include` option

- set global variable in public directory html head script: 

    ```js
    window.process = {
        env: {
            NODE_ENV: undefined
        }
    }    
    ```

- ts: create tsconfig via `tsc --init` and add next settings: 

    ```json
        "jsx": "react-jsx",                         /* Specify what JSX code is generated. */
        "jsxImportSource": "preact",                /* Specify module specifier used to import the JSX factory functions when using `jsx: 
    ```

</details>

## How to use: 

### Get started:

#### via degit:

```sh
degit Sanshain/preact-boilerplate#js_hmr_linaria
```

#### via git: 

```sh
git clone Sanshain/preact-boilerplate#js_hmr_linaria && rm -r .get && git init
```

### Develop with

#### Windows

```
npm run dev:w
```

#### Unix

```
npm run dev:u
```

#### little details::

The command above starts nollup directly through nodejs ([why](https://github.com/nodejs/node/issues/45580)) with `--no-experimental-fetch` (`--environment` for rollup cli doesn't work (may be because of nollup, but not sure)). Else sourcemaps will think it's a browser env and will require link to `mappings.wasm`.

### Build with

as usual due rollup (using `rollup -c` or `npm run rollup` or `npm run build` (no difference))

### Packages destinations:

(collected by its features in the template)

## JSX compilation: 

- `@rollup/plugin-babel`
- `@babel/core`
- `@babel/plugin-transform-react-jsx`

## HMR:

- `@prefresh/nollup`
- `@prefresh/babel-plugin` ([recomended for hooks](https://github.com/Sanshain/prefresh/tree/main/packages/nollup#using-hooks))
- `nollup`
- `react-refresh`
- `rollup-plugin-hot-css` (hot reloading for css)


## Code building (it's default): 

- `@rollup/plugin-node-resolve`

## Production compilation: 

- `rollup`
- `rollup-plugin-static-files` (just copies static files to production dist - unneccessary)
- `rollup-plugin-terser` (minifier)
