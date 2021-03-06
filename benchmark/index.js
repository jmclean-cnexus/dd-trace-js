'use strict'

process.env.DD_TRACE_AGENT_PROTOCOL_VERSION = 'v0.4'

const execSync = require('child_process').execSync
const exec = cmd => execSync(cmd, { stdio: [0, 1, 2] })

exec('node benchmark/core')
exec('node benchmark/scope/async_hooks')
exec('node benchmark/scope/async_local_storage')
exec('node benchmark/platform/node')
exec('node benchmark/dd-trace')
