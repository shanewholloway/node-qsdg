#!/usr/bin/env node
const cli_qsdg = require('./cjs/cli_qsdg.cjs')
cli_qsdg
  .qsdg_main(process.argv.slice(2), process.env)
  .then(cli_qsdg.show_banner)
