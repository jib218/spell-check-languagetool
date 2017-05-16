'use babel';

import SpellCheckLanguagetoolView from './spell-check-languagetool-view';
import {
  CompositeDisposable
} from 'atom';

export default {

  // spellCheckLanguagetoolView: null,
  // modalPanel: null,
  subscriptions: null,

  activate(state) {
    // this.spellCheckLanguagetoolView = new SpellCheckLanguagetoolView(state.spellCheckLanguagetoolViewState);
    // this.modalPanel = atom.workspace.addModalPanel({
    //   item: this.spellCheckLanguagetoolView.getElement(),
    //   visible: false
    // });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'spell-check-languagetool:check': () => this.check()
    }));
  },

  deactivate() {
    // this.modalPanel.destroy();
    this.subscriptions.dispose();
    // this.spellCheckLanguagetoolView.destroy();
  },

  // serialize() {
  //   return {
  //     spellCheckLanguagetoolViewState: this.spellCheckLanguagetoolView.serialize()
  //   };
  // },

  check() {
    if (editor = atom.workspace.getActiveTextEditor()) {
      text = editor.getText();
      console.log(text);

    }
    // console.log('SpellCheckLanguagetool was toggled!');
    // return (
    //   this.modalPanel.isVisible() ?
    //   this.modalPanel.hide() :
    //   this.modalPanel.show()
    // );
  }

};
