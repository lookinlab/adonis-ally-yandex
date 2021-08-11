The package has been configured successfully.

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
declare module '@ioc:Adonis/Addons/Ally' {
  import { YandexDriver, YandexDriverConfig } from 'adonis-ally-yandex/build/standalone'

  interface SocialProviders {
    // ... other mappings
    yandex: {
      config: YandexDriverConfig
      implementation: YandexDriver
    }
  }
}
```

Ally config relies on environment variables for the client id and secret.
We recommend you to validate environment variables inside the `env.ts` file.

## Variables for Yandex driver

```ts
YANDEX_CLIENT_ID: Env.schema.string(),
YANDEX_CLIENT_SECRET: Env.schema.string(),
```

## Ally config for Yandex driver

```ts
const allyConfig: AllyConfig = {
  // ... other drivers
  yandex: {
    driver: 'yandex',
    clientId: Env.get('YANDEX_CLIENT_ID'),
    clientSecret: Env.get('YANDEX_CLIENT_SECRET'),
    callbackUrl: 'http://localhost:3333/yandex',
  },
}
```
