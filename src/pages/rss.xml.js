import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET() {
  return rss({
    title: 'いまいまい | ブログ',
    description: 'Astroを学ぶ旅',
    site: 'https://astro-test-5ks.pages.dev/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  })
}
