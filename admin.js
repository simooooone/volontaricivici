document
  .getElementById("postForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault()

    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const topImage = document.getElementById("topImage").value
    const additionalImages = document
      .getElementById("additionalImages")
      .value.split(",")
      .map(url => url.trim())

    try {
      const response = await fetch("/.netlify/functions/savePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          top_image: topImage,
          additional_images: additionalImages,
        }),
      })

      const result = await response.json()
      console.log("Post aggiunto:", result)
    } catch (error) {
      console.error("Errore nel salvataggio del post:", error)
    }

    // Resettare il modulo
    this.reset()
  })
