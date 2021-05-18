import { useRef } from 'react';
import dynamic from 'next/dynamic';

// SSR is disabled because editor js doesn't work well with SSR
// https://github.com/Jungwoo-An/react-editor-js/issues/58#issuecomment-791095763
const EditorJs = dynamic(() => import("../component/Editorjs/editor"), { ssr: false });

export default function editor() {
    const editorRef = useRef()
    const setEditorRef =(editor) => {
        editorRef.current = editor
    }
    return(
        <div>
            <EditorJs setEditorRef={setEditorRef}/>
            <button onClick={()=> editorRef.current.save()}>save</button>
        </div>
    )
}