import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'
import rpi_resolve from '@rollup/plugin-node-resolve'
import rpi_json from '@rollup/plugin-json'

const configs = []
export default configs

const _cfg_ = {
  external: ['qsdg', 'path', 'fs', 'os', 'dgram', 'https', 'http'],
  plugins: [
    rpi_json(),
    rpi_jsy({
      include: ['**/*.jsy'],
      exclude: ['**/*.mjs', '**/*.cjs', 'node_modules/**'],
    }),
    rpi_resolve({preferBuiltins: true}),
    rpi_dgnotify(),
  ]}

const _out_ = {sourcemap: true}

add_jsy('index')
add_jsy('cli_qsdg')


function add_jsy(src_name) {
  configs.push({ ... _cfg_,
    input: `code/${src_name}.jsy`,
    output: [
      { ..._out_, file: `esm/${src_name}.mjs`, format: 'es' },
      { ..._out_, file: `cjs/${src_name}.cjs`, format: 'cjs', exports:'named' },
    ]})
}
