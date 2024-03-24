import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        host: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@layout': path.resolve(__dirname, './src/layout'),
            '@container': path.resolve(__dirname, './src/container'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@template': path.resolve(__dirname, './src/template'),
            '@recoil': path.resolve(__dirname, './src/recoil'),
            '@shared': path.resolve(__dirname, './src/shared'),
            '@model': path.resolve(__dirname, './src/model'),
            '@api': path.resolve(__dirname, './src/api'),
        },
    },
})
