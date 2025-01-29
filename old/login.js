import React, { useState } from "react"
import { navigate } from "gatsby"
import { createClient } from "@supabase/supabase-js"

// Inizializza Supabase
const supabaseUrl = process.env.GATSBY_SUPABASE_URL
const supabaseKey = process.env.GATSBY_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()

    // Verifica le credenziali dell'utente
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single()

    if (error || !data) {
      setError("Nome utente o password errati.")
      return
    }

    // Confronta la password fornita con quella memorizzata
    const isPasswordValid = password === data.password
    if (!isPasswordValid) {
      setError("Nome utente o password errati.")
      return
    }

    // Memorizza lo stato di autenticazione
    localStorage.setItem("authenticated", "true")
    // Reindirizza all'area di amministrazione
    navigate("/admin")
  }

  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Accedi</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  )
}

export default Login
