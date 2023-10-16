import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    const externalizedDependencies = process.env.VITE_EXTERNALIZED_DEPENDENCIES ? process.env.VITE_EXTERNALIZED_DEPENDENCIES.split(',').map(i => i.trim()) : []
    const addSourcemap = process.env.VITE_BUILD_ATTACH_SOURCEMAP && process.env.VITE_BUILD_ATTACH_SOURCEMAP === "true"

    return defineConfig({
        define: {
            'process.env.NODE_ENV': '"production"'
        },
        plugins: [
            vue(),
        ],
        build: {
            modulePreload: false,
            lib: {
                entry: {
                    // Full library.
                    'search-ui-vue-raw-elements': 'src/bundle.ts',
                    // Individual components.
                    'checkbox': 'src/components/SearchFacetCheckbox/ce.ts',
                    'input': 'src/components/SearchInput/ce.ts',
                    'pager': 'src/components/SearchPager/ce.ts',
                    'result': 'src/components/SearchResult/ce.ts',
                    'summary': 'src/components/SearchSummary/ce.ts',
                },
                formats: ['es'],
            },
            rollupOptions: {
                external: externalizedDependencies,
                output: {
                    entryFileNames: "[name].js",
                    chunkFileNames: "lib/[name].js",
                },
            },
            sourcemap: addSourcemap,
            target: 'esnext',
            minify: true,
        },
    })

}