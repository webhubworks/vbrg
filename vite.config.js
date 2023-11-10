import { defineConfig, loadEnv } from 'vite';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import ViteRestart from 'vite-plugin-restart';
import critical from 'rollup-plugin-critical';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        base: command === 'serve' ? '' : '/dist/',
        build: {
            commonjsOptions: {
                transformMixedEsModules: false,
            },
            manifest: true,
            outDir: path.resolve(__dirname, 'public/dist/'),
            rollupOptions: {
                input: {
                    app: path.resolve(__dirname, 'src/scripts/app.js'),
                },
                output: {
                    sourcemap: true,
                },
            },
        },
        plugins: [
            vue(),
            manifestSRI(),
            viteCompression({
                filter: /\.(js|mjs|json|css|map)$/i,
            }),
            ViteRestart({
                reload: ['templates/**/*'],
            }),
            critical({
                criticalUrl:
                    env.CRAFT_ENVIRONMENT === 'dev'
                        ? 'http://localhost/'
                        : env.PRIMARY_SITE_URL,
                criticalBase: './public/dist/criticalcss/',
                criticalPages: [{ uri: '', template: 'index' }],
                criticalConfig: {},
            }),
        ],
        publicDir: path.resolve(__dirname, 'src/public'),
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@scripts': path.resolve(__dirname, 'src/scripts'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@components': path.resolve(
                    __dirname,
                    'src/scripts/components'
                ),
                vue: 'vue/dist/vue.esm-bundler.js',
            },
        },
        server: {
            host: '0.0.0.0',
            port: 3000,
            strictPort: true,
        },
    };
});
