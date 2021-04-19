import { useRef, useEffect, useState } from "react";

import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const Codemirror = ({ initialValue }) => {
  // Local state
  const [editorValue, setEditorValue] = useState("");
  const [editorTreeValue, setEditorTreeValue] = useState([]);

  // Ref of the editor
  const editor = useRef();

  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of((v) => {
      const doc = v.state.doc;

      /**
       * # Contenido
       *
       * ```js
       * const x () => {
       *   console.log(45);
       * }
       * ```
       */
      const value = doc.toString();
      if (value !== editorValue) setEditorValue(value);
      /**
       * [
       *   "# Contenido",
       *   "",
       *   "```js",
       *   "const x () => {",
       *   "  console.log(45);",
       *   "}",
       *   "```"
       * ]
       */
      let treeArray = new Array();
      treeArray = [...doc.toJSON()];

      if (treeArray !== editorTreeValue) setEditorTreeValue(treeArray);
    });
  
    let baseTheme = EditorView.baseTheme({
    ".cm-scroller": {
      height: "600px"
    },
    "&light .cm-o-replacement": {
      backgroundColor: "#04c"
    },
    "&dark .cm-o-replacement": {
      backgroundColor: "#5bf"
    }
  })

  // Initilize view
  useEffect(function initEditorView() {
    const el = document.getElementById("codemirror-editor-wrapper");

    editor.current = new EditorView({
      state: EditorState.create({
        doc: initialValue,
        extensions: [basicSetup, javascript(), oneDark, onUpdate(), baseTheme],
      }),
      parent: el,
      baseTheme
    });
  }, []);

  // Component for display text
  // const OutputText = () => (
  //   <div className="border rounded p-5">
  //     <pre>
  //       <code>{editorValue}</code>
  //     </pre>
  //   </div>
  // );

  // // Component for display array from editor
  // const OutputArray = () => (
  //   <div className="border rounded p-5">
  //     <pre>
  //       <code>{JSON.stringify(editorTreeValue, null, 2)}</code>
  //     </pre>
  //   </div>
  // );

  return (
    <div id="codemirror-editor-wrapper" />
  );
};

export default Codemirror;