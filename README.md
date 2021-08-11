# Adonis Ally Yandex Driver

A driver of AdonisJS Ally for Yandex

## Installation

Make sure to install it using `npm` or `yarn`.

```bash
# npm
npm i adonis-ally-yandex
node ace configure adonis-ally-yandex

# yarn
yarn add adonis-ally-yandex
node ace configure adonis-ally-yandex
```

Open a `instructions.md` file after configure

## Usage

Make sure to register the provider inside `.adonisrc.json` file.
```json
{
  "providers": [
    "...other packages",
    "adonis-ally-yandex"
  ] 
}
```

For TypeScript projects add to `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "types": [
      "...other packages",
      "adonis-ally-yandex"
    ]
  } 
}
```

More about [AdonisJS Ally](https://docs.adonisjs.com/guides/auth/social) and as usage this driver

## An available configuration options

```ts
const allyConfig: AllyConfig = {
  // ... other drivers
  yandex: {
    // ... config

    display: 'popup',
    optionalScopes: ['login:birthday', '...other'],
    forceConfirm: true
  },
}
```
