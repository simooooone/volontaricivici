const { createClient } = require("@supabase/supabase-js")

const supabaseUrl = process.env.GATSBY_SUPABASE_URL
const supabaseKey = process.env.GATSBY_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

exports.handler = async event => {
  if (event.httpMethod === "POST") {
    const { title, content, top_image, additional_images } = JSON.parse(
      event.body
    )

    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, content, top_image, additional_images }])

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Errore nel salvataggio del post" }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Metodo non consentito" }),
  }
}
