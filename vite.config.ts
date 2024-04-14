import {fileURLToPath, URL} from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import {resolve, dirname} from 'node:path'

export default defineConfig({
    // @import "./src/assets/styles/_variables.scss";
    // @import "./src/assets/styles/_reset.scss";
    // @import "./src/assets/styles/_mixins.scss";
    // @import "./src/assets/styles/_utilities.scss";
    // @import "./src/assets/styles/_custom.scss";
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
              @import "./src/assets/styles/elitecupid-landing.scss";
            `,
            },
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        VueI18nPlugin({
            runtimeOnly: false,
            include: resolve(
                dirname(fileURLToPath(import.meta.url)),
                './src/i18n/locales/**'
            ),
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
