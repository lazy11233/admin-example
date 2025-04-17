const pages = import.meta.glob('@/views/**/index.vue')
const metas = import.meta.glob('@/views/**/meta.ts', { eager: true })

const toCamelCase = (str: string): string =>
  str.split('/').map((s, i) =>
    i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)
  ).join('')

const autoRoutes = Object.entries(pages)
  .map(([filePath, component]) => {
    const match = filePath.match(/\/views\/(.+)\/index\.vue$/)
    const rawPath = match?.[1] ?? ''
    const routePath = '/' + rawPath
    const name = toCamelCase(rawPath)

    const metaPath = filePath.replace(/index\.vue$/, 'meta.ts')
    const meta = (metas[metaPath] as any)?.default || {}

    return {
      path: routePath,
      name,
      component,
      meta: {
        title: meta.title || name,
        icon: meta.icon || '',
        order: meta.order ?? 999,
        showInMenu: meta.showInMenu ?? true,
      }
    }
  })
  .sort((a, b) => a.meta.order - b.meta.order)

export default autoRoutes
