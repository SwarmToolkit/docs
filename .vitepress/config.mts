import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Swarm Toolkit",
  description: "Some tools made for Neuro-sama live stream.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/index" },
      { text: "About", link: "/about/index" },
      { text: "Neuro-sama", link: "//www.twitch.tv/vedal987" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Swarm Toolkit?", link: "/guide/index" },
          { text: "Quick start", link: "/guide/start" },
        ],
      },
      {
        text: "Installation",
        items: [{ text: "NeuroTTS", link: "/guide/neurotts" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "//github.com/SwarmToolkit" }],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
    },
  },
});
