import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css" // Importa il CSS di Quill

const Editor = ({ onChange }) => {
  const [editorHtml, setEditorHtml] = useState("")

  const handleChange = html => {
    setEditorHtml(html)
    onChange(html) // Passa il contenuto all'elemento genitore
  }

  return (
    <ReactQuill
      value={editorHtml}
      onChange={handleChange}
      modules={Editor.modules}
      formats={Editor.formats}
    />
  )
}

// Configurazione dei moduli e dei formati
Editor.modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    ["image", "code-block"],
    ["clean"], // Rimuovi la formattazione
  ],
}

Editor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "image",
  "code-block",
]

export default Editor
