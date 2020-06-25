'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.deactivate = exports.activate = void 0
const vscode_1 = __importDefault(require('vscode'))
const license_json_1 = __importDefault(require('./license.json'))
function activate(context) {
  console.log(
    'Congratulations, your extension "mit-license-generator" is now active!'
  )
  vscode_1.default.commands.registerCommand(
    'mit-license-generator.generate',
    (target) => {
      console.log(target)
      console.log(license_json_1.default)
      console.log(
        String(
          vscode_1.default.workspace
            .getConfiguration()
            .get('mit-license-generator.name')
        )
      )
      vscode_1.default.workspace.fs.writeFile(
        vscode_1.default.Uri.parse(`${target}/LICENSE`),
        Buffer.from(
          license_json_1.default
            .join('\n')
            .replace(/<YEAR>/, String(new Date().getFullYear()))
            .replace(
              /<NAME>/,
              String(
                vscode_1.default.workspace
                  .getConfiguration()
                  .get('mit-license-generator.name') ||
                  'Replace it by your name or configure mit-license-generator.name in settings.json'
              )
            )
        )
      )
    }
  )
}
exports.activate = activate
function deactivate() {}
exports.deactivate = deactivate
//# sourceMappingURL=extension.js.map
