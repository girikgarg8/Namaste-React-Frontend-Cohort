**Why is package-lock.json even required, if we have package.json?**

Important excerpt from [Stackoverflow Link](https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json)

If we install using `npm clean install`, it installs the exact versions of dependencies which are mentioned in `package-lock.json`. However, if we do `npm install`, the minor and patch version may change with the use of `~` and `^`.

## 1. What is a bundler?

A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser

For example:  
1. Parcel 
2. Webpack (used by `create-react-app`) and
3. Vite

## 2. Parcel:

Parcel is a bundler used for development and productions purposes.

## Parcel Features:

* HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files without requiring a refresh
* File watcher algorithm - written in C++
* MINIFICATION
* BUNDLING 
* Cleaning our code
* Development and production Build
* Super fast building algorithm
* Image optimization
* Caching while development - that's the reason subsequent builds are faster
* Tree shaking: Simply put, tree-shaking means removing unreachable code (also known as dead code) from a bundle.
* Compatible with older version of browsers - Parcel supports differential bundling for different browsers
* Compression
* HTTPS in dev
* Graceful error handling: Beautiful diagnostics
* Allows Port Number configuration
* Zero Configuration

See the documentation of [Parcel](https://parceljs.org) for more details, it's simply awesome!

Explore [browserslist](http://browserslist.dev) documentation.

###  installation commands:

1. Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

2. Parcel Commands :

- For development build:
```
npx parcel <entry_point> 
```
- For production build :
```
npx parcel build <entry_point> 
```

## 3. Why react is fast?

It is not only the virtual DOM that makes React app fast but other components like bundlers (e.g. parcel, webpack , vite etc.) also contribute to it.

## 4. Transitive dependencies:

It is a type of dependency where one dependency requires another dependency to work and another dependency requires another dependecy.