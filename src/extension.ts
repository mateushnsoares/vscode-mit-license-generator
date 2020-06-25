import vscode from 'vscode'
import license from './license.json'

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "mit-license-generator" is now active!'
  )

  vscode.commands.registerCommand(
    'mit-license-generator.generate',
    () => {
      vscode.window.showInformationMessage('Generating...')
    }
  )
}

export function deactivate() { }
