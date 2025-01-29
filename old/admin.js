import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { createClient } from "@supabase/supabase-js"
import Editor from "./Editor"

const supabaseUrl = process.env.GATSBY_SUPABASE_URL
const supabaseKey = process.env.GATSBY_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const Admin = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    // Controlla se l'utente è autenticato
    if (!localStorage.getItem("authenticated")) {
      window.location.href = "/login"
    }
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    // Inserisci il post nella tabella posts
    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, description, content }])

    if (error) {
      setError("Errore durante il salvataggio del post.")
    } else {
      console.log("Post salvato:", data)
      // Reindirizza alla pagina del blog dopo il salvataggio
      navigate("/blog")
    }
  }

  return (
    <div>
      <h1>Area di Amministrazione</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <Editor onChange={setContent} />
        <button type="submit">Salva Post</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  )
}

export default Admin
