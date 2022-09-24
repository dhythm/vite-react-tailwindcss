# vite-react-tailwindcss

## How to create the environment

```sh
npm create vite@latest vite-react-tailwindcss -- --template react-ts
cd vite-react-tailwindcss
npm install

npx sb init --builder @storybook/builder-vite
npm install -D tailwindcss postcss autoprefixer --legacy-peer-deps
npx tailwindcss init -p
npm install -D @storybook/addon-postcss
```

## Getting Started

```sh
npm install

npm run storybook
```

## Concept

This repository works with [HyperUI](https://www.hyperui.dev/) that is Free Open Source Tailwind CSS Components.
