import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Swarm Toolkit",
  description: "Some tools made for Neuro-sama live stream.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/index' },
      { text: 'About', link: '/about/index' },
      { text: 'Neuro-sama', link: '//www.twitch.tv/vedal987' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Swarm Toolkit?', link: '/guide/index' },
          { text: 'Quick start', link: '/guide/getting-started' },
          { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SwarmToolkit' }
    ]
  }
})
