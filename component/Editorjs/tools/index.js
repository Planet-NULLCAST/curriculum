// A curated list of awesome Editor.js tools, libraries and resources. - https://github.com/editor-js/awesome-editorjs
// All tools: https://github.com/editor-js

import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Quote from "@editorjs/quote"; // https://github.com/editor-js/quote
import Delimiter from "@editorjs/delimiter"; // https://github.com/editor-js/delimiter
import Table from "@editorjs/table"; // https://github.com/editor-js/table
// import Link from "@editorjs/link"                    // Needs backend So better decide later
// import Embed from "@editorjs/embed";                    // Embed doesn't work at all
import Embed from "./embedTool";

import CodeMirror from "./codeMirror"; // https://github.com/alexiej/editorjs-codemirror

import InlineCode from "@editorjs/inline-code";

export default {
  header: {
    class: Header,
    inlineToolbar: true
  },
  list: {
    class: List,
    inlineToolbar: true
  },
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: "http://localhost:8008/uploadFile" // Your backend file uploader endpoint
      }
    }
  },
  inlineCode: {
    class: InlineCode,
    shortcut: "CMD+SHIFT+M"
  },
  raw: Raw,
  code: CodeMirror,
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+O",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author"
    }
  },
  delimiter: Delimiter,
  table: {
    class: Table,
    inlineToolbar: true
  },
  // EMbed doesn't work
  embed: {
    class: Embed,
    inlineToolbar: true,
    data: {
      something: 'else'
    },
    config: {
      services: {
        youtube: true,
        coub: true,
        twitter: {
          regex:
            /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/,
          embedUrl: "<%= remote_id %>",
          html: '<div style="width: 100%; height: 100px; background-color: #1C9CEA; text-align: center; color: #ffffff; padding-top: 40px">Twitter embedded.</div>',
          height: 300,
          width: 600,
          id: (ids) => ids.join("/")
        },
        instagram: {
          regex: /(https?:\/\/(?:www\.)?instagram\.com\/p\/([^/?#&]+)).*/,
          embedUrl: "<%= remote_id %>",
          html: '<div style="width: 100%; height: 100px; background-color: #DB2E6E; text-align: center; color: #ffffff; padding-top: 40px">Instagram embedded.</div>',
          height: 300,
          width: 600
        }
      }
    }
  }
};
