'use babel';

import {
  CompositeDisposable
} from 'atom';

export default {

  subscriptions: null,
  serverStarted: false,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'spell-check-languagetool:check': () => this.check()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  startServer() {
    if (this.serverStarted === false) {
      this.serverStarted = true;
      var ltjar = atom.config.get(
        "spell-check-languagetool.languagetoolServerPath");
      var exec = require("child_process").exec;
      exec('java -cp ' + ltjar
            + ' org.languagetool.server.HTTPServer --public "$@"');
    }
  },

  check() {
    if (!(editor = atom.workspace.getActiveTextEditor()))
      return;

    this.startServer();

    var text = editor.getText();
    console.log(text);
  }

};
