module.exports = function({ injectCommand, api }) {
  injectCommand(function({ program, cleanArgs, boxConfig }) {
    program
      .command('lint stylelint')
      .description('修复 stylelint')
      .action(async (name, cmd) => {
        const options = cleanArgs(cmd)
        const args = Object.assign(options, { name }, boxConfig)
        require('./lint')({ args, api })
      })
  })
}
