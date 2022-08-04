# vite-plugin-ember-experimental - WIP

This repo is meant to serve as an experiment to integrate ViteJS build tooling with EmberJS applications.

## Theory

When developing an addon using [Embroider][embroider-build] for [EmberJS addons][embroider-addon], under the hood it is using [Rollup][rollup].

Since [ViteJS][vitejs] is uses Rollup under the hood, and [ViteJS Plugins][vitejs-plugins] are a superset of Rollup plugins, our theory is that we can develop ember-addons using ViteJS.

## Follow Up

Need to revisit the [ViteJS plugin conventions][vite-plugin-conventions] once we have something that we can test out against external addons/apps.

[embroider-addon]: https://github.com/embroider-build/embroider/blob/main/ADDON-AUTHOR-GUIDE.md
[embroider-build]: https://github.com/embroider-build/embroider
[rollup]: https://rollupjs.org/
[vitejs]: https://vitejs.dev/
[vite-plugin-conventions]: https://vitejs.dev/guide/api-plugin.html#conventions
[vitejs-plugins]: https://vitejs.dev/guide/api-plugin.html
