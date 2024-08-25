// export const observeElements = (
//   selector,
//   callback,
//   options = { root: null, rootMargin: "0px", threshold: 0.1 }
// ) => {
//   const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         callback(entry.target)
//         observer.unobserve(entry.target)
//       }
//     })
//   }

//   const observer = new IntersectionObserver(observerCallback, options)
//   const elements = document.querySelectorAll(selector)
//   elements.forEach(element => observer.observe(element))
// }

export const observeElements = (
  classi,
  config = {},
  classToAdd = "visible"
) => {
  let lazyBackgrounds = [].slice.call(document.querySelectorAll(classi))
  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd)
          lazyBackgroundObserver.unobserve(entry.target)
        }
      })
    }, config)
    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground)
    })
  } else {
    lazyBackgrounds.forEach(element => element.classList.add(classToAdd))
  }
}
