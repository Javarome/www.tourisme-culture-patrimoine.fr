const mapImg = document.querySelector(".map-image")
mapImg.addEventListener("load", _ => {
  const areas = document.querySelectorAll("#image-map area")
  for (const area of areas) {
    let coords = area.getAttribute("coords").split(",")
    let pos = area.dataset.pos.split(",")
    const mapLink = document.createElement("a")
    mapLink.href = area.href
    mapLink.title = area.title
    let shape = area.getAttribute("shape")
    let imgSrc = area.dataset.img
    let imgEl = document.createElement("img")
    imgEl.src = imgSrc
    mapLink.append(imgEl)
    let imgBounds

    function xInPx(xPer1000) {
      return imgBounds.width / 1000 * xPer1000
    }

    function yInPx(yPer1000) {
      return imgBounds.height / 1000 * yPer1000
    }

    function computeBounds() {
      imgBounds = mapImg.getBoundingClientRect()
      let x1, y1, x2, y2
      switch (shape) {
        case "rect":
          x1 = xInPx(parseInt(coords[0], 10))
          y1 = yInPx(parseInt(coords[1], 10))
          x2 = xInPx(parseInt(coords[2], 10))
          y2 = yInPx(parseInt(coords[3], 10))
          break
        case "circle":
          let radius = xInPx(parseInt(coords[2], 10))
          let centerX = xInPx(parseInt(coords[0], 10))
          let centerY = yInPx(parseInt(coords[1], 10))
          x1 = centerX - radius
          y1 = centerY - radius
          let diameter = radius * 2
          x2 = x1 + diameter
          y2 = y1 + diameter
          break
        default:
          throw new Error(`Unsupported shape: ${shape}`)
      }
      let width = x2 - x1 + 1
      let height = y2 - y1 + 1
      mapLink.style.left = `${x1}px`
      mapLink.style.top = `${y1}px`
      mapLink.style.width = `${width}px`
      mapLink.style.height = `${height}px`
      imgEl.style.left = xInPx(parseInt(pos[0], 10)) + "px"
      imgEl.style.top = yInPx(parseInt(pos[1], 10)) + "px"
    }

    computeBounds()
    mapLink.className = `map-link ${shape}`
    document.querySelector(".map").append(mapLink)
    mapLink.addEventListener("mouseover", (_) => {
//    imgEl.addEventListener("transitionend", (ev) => {
      //const popupBounds = imgEl.getBoundingClientRect()
      // imgEl.style.left = ev.offsetX + 'px'
      //  })
      imgEl.classList.toggle("visible", true)
    })
    mapLink.addEventListener("mouseleave", (_) => {
      imgEl.classList.toggle("visible", false)
    })
    window.addEventListener("resize", (_) => {
      computeBounds()
    })
  }
})

