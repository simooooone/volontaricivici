import React, { useState } from "react"
import { navigate } from "gatsby"
import { createClient } from "@supabase/supabase-js"
import bcrypt from "bcrypt"

// Inizializza Supabase
const supabaseUrl = process.env.GATSBY_SUPABASE_URL
const supabaseKey = process.env.GATSBY_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()

    // Hash della password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Inserisci l'utente nella tabella users
    const { data, error } = await supabase
      .from("users")
      .insert([{ username, password: hashedPassword }])

    if (error) {
      setError(
        "Errore durante la registrazione. Assicurati che il nome utente sia unico."
      )
    } else {
      console.log("Utente registrato:", data)
      // Reindirizza alla pagina di login dopo la registrazione
      navigate("/login")
    }
  }

  return (
    <div>
      <h1>Registrazione</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome Utente"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrati</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  )
}

export default Register
