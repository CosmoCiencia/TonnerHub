import fs from 'node:fs/promises'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

function saveLayoutPlugin(): Plugin {
  return {
    name: 'save-layout-plugin',
    configureServer(server) {
      server.middlewares.use('/__save-layout', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }

        try {
          let body = ''

          await new Promise<void>((resolve, reject) => {
            req.on('data', (chunk) => {
              body += chunk
            })
            req.on('end', () => resolve())
            req.on('error', reject)
          })

          const parsed = JSON.parse(body) as {
            mascotSize: number
            mascotX: number
            mascotY: number
            stagePaddingRight: number
            stageMinHeight: number
            cardScale: number
          }

          const configPath = path.resolve(server.config.root, 'src/config/layout.ts')
          const current = await fs.readFile(configPath, 'utf8')
          const next = current.replace(
            /export const DEFAULT_LAYOUT_CONTROLS: LayoutControls = \{[\s\S]*?\n\}/,
            `export const DEFAULT_LAYOUT_CONTROLS: LayoutControls = {
  mascotSize: ${parsed.mascotSize},
  mascotX: ${parsed.mascotX},
  mascotY: ${parsed.mascotY},
  stagePaddingRight: ${parsed.stagePaddingRight},
  stageMinHeight: ${parsed.stageMinHeight},
  cardScale: ${parsed.cardScale},
}`,
          )

          await fs.writeFile(configPath, next)

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: true }))
        } catch (error) {
          res.statusCode = 500
          res.end(error instanceof Error ? error.message : 'Save failed')
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), saveLayoutPlugin()],
  server: {
    port: 5173,
    strictPort: true,
  },
})
