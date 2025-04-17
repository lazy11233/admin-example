import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    rules: {
      semi: [2, 'never'],
      'no-multiple-empty-lines': [2, { max: 1 }],
      'vue/max-attributes-per-line': [2, {
        singleline: { max: 3 },
        multiline: { max: 1 },
      }],
      'max-len': [2, { // 一行最多120个字符，忽略注释、尾注释、链接、正则等 B
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      'vue/block-order': [2, { order: ['script', 'template', 'style'] }],
      'vue/component-definition-name-casing': [2, 'PascalCase'],
    }
  }
)
