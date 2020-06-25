import vscode from 'vscode'
import license from './license.json'

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "mit-license-generator" is now active!'
  )

  vscode.commands.registerCommand(
    'mit-license-generator.generate',
    (target: vscode.Uri) => {
      console.log(target)
      console.log(license)
      console.log(
        String(
          vscode.workspace.getConfiguration().get('mit-license-generator.name')
        )
      )
      vscode.workspace.fs.writeFile(
        vscode.Uri.parse(`${target}/LICENSE`),
        Buffer.from(
          license
            .join('\n')
            .replace(/<YEAR>/, String(new Date().getFullYear()))
            .replace(
              /<NAME>/,
              String(
                vscode.workspace
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

export function deactivate() {}
