import path from 'path'
import { rmSync } from 'fs'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron-unbuild'

rmSync(path.join(__dirname, 'dist-electron'), { recursive: true, force: true })

export default defineConfig({
  plugins: [electron({
    include: [
      'electron',
      // 'common.ts',
    ],
    /*
    configResolved(config) { },
    onstart(args) {
      args.startup()
    },
    onwatch(event, path) { },
    transform(args) { },
    */
  })],
  clearScreen: false,
})