import {EditorView, basicSetup} from "codemirror"
import {EditorState} from "@codemirror/state"
import {javascript} from "@codemirror/lang-javascript"
import {html} from "@codemirror/lang-html"

var els = document.querySelectorAll(".codemirror");

els.forEach((el) => {
  let editor = new EditorView({
    state: EditorState.create({
      extensions: [
        basicSetup,
        html(),
        EditorView.updateListener.of(function(e) {
            el.dataset.doc = e.state.doc.toString();
        })
      ],
      doc: el.dataset.doc,
    }),
    parent: el
  });
});

