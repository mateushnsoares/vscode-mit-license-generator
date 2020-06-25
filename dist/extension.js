"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = __importDefault(require("vscode"));
function activate(context) {
    console.log('Congratulations, your extension "mit-license-generator" is now active!');
    vscode_1.default.commands.registerCommand('mit-license-generator.generate', () => {
        vscode_1.default.window.showInformationMessage('Generating...');
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map