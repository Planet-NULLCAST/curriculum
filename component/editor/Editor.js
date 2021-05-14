import { useRef, useEffect, useState } from "react";

import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import Runbutton from "./RunButton";

const Codemirror = ({ initialValue }) => {
  useEffect(() => {
    if (editor.current)
      editor.current.setState(
        EditorState.create({
          doc: "",
          extensions: [basicSetup, javascript(), oneDark, onUpdate(), baseTheme]
        })
      );
  }, [initialValue]);
  // Local state
  const [editorValue, setEditorValue] = useState("");
  const [editorTreeValue, setEditorTreeValue] = useState([]);

  // Ref of the editor
  const editor = useRef();

  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of((v) => {
      const doc = v.state.doc;

      const value = doc.toString();
      if (value !== editorValue) setEditorValue(value);

      let treeArray = new Array();
      treeArray = [...doc.toJSON()];

      if (treeArray !== editorTreeValue) setEditorTreeValue(treeArray);
    });

  let baseTheme = EditorView.baseTheme({
    ".cm-scroller": {
      height: "85vh"
    },
    "&light .cm-o-replacement": {
      backgroundColor: "#04c"
    },
    "&dark .cm-o-replacement": {
      backgroundColor: "#5bf"
    }
  });

  // Initialize view
  useEffect(function initEditorView() {
    const el = document.getElementById("codemirror-editor-wrapper");
    editor.current = new EditorView({
      state: EditorState.create({
        doc: "",
        extensions: [basicSetup, javascript(), oneDark, onUpdate(), baseTheme]
      }),
      parent: el,
      baseTheme
    });
  }, []);

  return (
    <div>
      <div id="codemirror-editor-wrapper" />
      <Runbutton
        editorVal={editorTreeValue}
        courseName={initialValue.courseName}
        chapterName={initialValue.chapterName}
      />
    </div>
  );
};

export default Codemirror;
