import { useEffect } from 'react'
import EditorJs from "@editorjs/editorjs";

import editorjsTools from './tools'

export default function RTE_Component(props) {
  const { setEditorRef } = props;
  useEffect(() => {
    setEditorRef(editor)
  }, [])

  const editor = new EditorJs({
    /**
     * Create a holder for the Editor and pass its ID
     */
    holder: "editorjs",

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    tools: {...editorjsTools},
    
    /**
     * Previously saved data that should be rendered
     */
    data: {
      time: 1550476186479,
      blocks: [
        {
          type: "header",
          data: {
            text: "Editor.js",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.",
          },
        },
        {
          type: "header",
          data: {
            text: "Key features",
            level: 3,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "It is a block-styled editor",
              "It returns clean data output in JSON",
              "Designed to be extendable and pluggable with a simple API",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "What does it mean «block-styled editor»",
            level: 3,
          },
        },
        {
          type: "paragraph",
          data: {
            text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
          },
        },
      ],
      version: "2.8.1",
    },
  });
  // setEditorRef(editor);

  return <div id="editorjs">Editor</div>;
}
