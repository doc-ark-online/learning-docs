import { readdirSync } from 'fs-extra'
import * as fs from 'fs-extra'
import * as path from 'path'
import { DefaultTheme } from '../viteTheme/shared'
import { globSync } from 'glob'

/** 根据文件夹生成对应的子类 */
export function dealItem(dir: string) {
  const p = `./docs/${dir}`
  const paths = readdirSync(p)
  return paths.map((name) => {
    return { text: name.split('.')[0], link: `/${dir}/${name}` }
  })
}

/** 将目录从类型分类改为根据命名空间分类 */
export function typeToNamespace(paths: string[]) {
  const targetObjArr = paths
    .map((p) => {
      const dirs = readdirSync(path.join(process.cwd(), `./docs/${p}`))
      return dirs.map((name) => {
        const info = getMdNameInfo(name)
        return {
          ...info,
          fullName: name,
          link: `/${p}/${name}`
        }
      })
    })
    .flat(2)
  let namespaceType: Record<string, typeof targetObjArr | undefined> = {}
  targetObjArr.forEach((obj) => {
    if (namespaceType[obj.namespace]) {
      namespaceType[obj.namespace]!.push(obj)
    } else {
      namespaceType[obj.namespace] = [obj]
    }
  })
  let sidebar: DefaultTheme.SidebarGroup[] = []
  Object.keys(namespaceType).forEach((key) => {
    const value = namespaceType[key]
    if (value)
      sidebar.push({
        text: key,
        collapsible: true,
        collapsed: true,
        items: value.map((s) => {
          return {
            text: s.name,
            link: s.link
          }
        })
      })
  })
  sidebar = sidebar.filter((item) => item.text !== 'Util')
  return sidebar
}
/**
 * 根据 md 名字包含的信息变成一下格式
 * Core.Core.Base.md
 * ```ts
 * {
 *    name: 'Base',
 *    namespace: 'Core',
 * }
 * ```
 */
function getMdNameInfo(mdName: string) {
  const infos = mdName.split('.')
  return {
    name: infos.at(-2)!,
    namespace: infos.at(0)!
  }
}

/** .md 文件初始化处理 */
export function init() {
  const g = globSync('./docs/**/*.md', {
    ignore: {
      childrenIgnored(p) {
        return ['.vitepress', 'public'].includes(p.name)
      }
    }
  })
}
