/*
 * adonis-ally-yandex
 *
 * (c) Lookin Anton <lookin@lookinlab.ru>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class YandexDriverProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { YandexDriver } = await import('../src/Yandex')

    Ally.extend('yandex', (_, __, config, ctx) => {
      return new YandexDriver(ctx, config)
    })
  }
}
