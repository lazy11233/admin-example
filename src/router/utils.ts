import LayoutBase from '@/layouts/index.vue'

const viewModules = import.meta.glob('/src/views/**/index.vue')
const metaModules = import.meta.glob('/src/views/**/meta.ts', { eager: true })

const toPascalCase = (str: string) =>
  str.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase())

const getMeta = (path: string) => {
  const meta = metaModules[`/src/views/${path}/meta.ts`] as any
  return meta?.default || {}
}

const buildRouteTree = () => {
  const root: any = {}

  Object.keys(viewModules).forEach((fullPath) => {
    const relativePath = fullPath.replace('/src/views/', '').replace('/index.vue', '')
    const segments = relativePath.split('/')

    let current = root
    segments.forEach((segment, i) => {
      const subPath = segments.slice(0, i + 1).join('/')

      if (!current[segment]) {
        current[segment] = {
          path: segment,
          name: toPascalCase(segment),
          meta: getMeta(subPath),
          childrenMap: {}
        }
      }

      // 最后一层加 component
      if (i === segments.length - 1) {
        current[segment].component = viewModules[fullPath]
      }

      current = current[segment].childrenMap
    })
  })

  const transform = (nodeMap: Record<string, any>, fullPath = ''): any[] =>
    Object.values(nodeMap)
      .map((node: any) => {
        const isTopLevel = fullPath === ''
        const currentFullPath = isTopLevel ? `/${node.path}` : `${fullPath}/${node.path}`

        const route: any = {
          path: isTopLevel ? `/${node.path}` : node.path,
          name: node.name,
          meta: node.meta
        }

        if (node.component) {
          route.component = node.component
        }

        const children = transform(node.childrenMap, currentFullPath)
        if (children.length > 0) {
          route.children = children
          route.redirect = `${currentFullPath}/${children[0].path}`

          if (isTopLevel) {
            route.component = LayoutBase
          }
        }

        return route
      })
      .sort((a, b) => {
        const orderA = a.meta?.order ?? Infinity
        const orderB = b.meta?.order ?? Infinity
        return orderA - orderB
      })

  return transform(root)
}

// 过滤指定路径
const excludedPaths = ['/dashboard', '/login', '/register']
const finalRoutes = buildRouteTree().filter(route => !excludedPaths.includes(route.path))

export default finalRoutes
