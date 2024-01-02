<img src="https://i.imgur.com/QGp88cp.png">

# [TECHNERY](https://technery.vercel.app/)

## Introduction

> 개발 및 기술 블로그의 최신 포스팅을 한곳에서 확인하세요.
> 매번 여러 블로그들을 돌아다니다 한곳에서 카테고리화 하여 모아보면 어떨까 해서 시작한 프로젝트입니다.

<br/>

## Tech Stacks

- React
- Turborepo
- Next.js
- React-Query
- Zustand
- Styled Components

<br/>

## Project Structure

<br/>

```
│
├── apps
│     └── technery
│           └── src
│                 └── components
│                   └── layout
│                 └── page-modules
│                   └── home
│                       └── components
│                               └── Home
│                           └── core
│                               └── _requests
│                           └── types
│                 └── pages
│                   └── home
│                   └── detail
│                   └── ...
│                 └── stores
│                 └── constants
│                 └── utils
│                 └── styles
│
│     └── another_app
│
├── packages
│     └── pure-strike-ui
│           └── src
│                 └── components
│                   └── Stack
│                   └── Button
│                   └── Flex
│                   └── Grid
│                   └── Image
│                   └── Stack
│                   └── Text
│                   └── TextField
│                   └── ...
│
│     └── eslint-settings (eslint related settings)
│     └── tsconfig-settings (tsconfig related settings)
│
├── turbo.json
├── env
└── README.md
```
