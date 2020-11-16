const url = '../docs/charSheet.pdf';

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null

const scale = 1,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d')

// Render PDF Page
const renderPage = num => {
  pageIsRendering = true

  // Get page
  pdfDoc.getPage(num).then(page => {
    // Set scale
    const viewport = page.getViewport({ scale })
    canvas.height = viewport.height
    canvas.width = viewport.width

    const renderCtx = {
      canvasContext: ctx,
      viewport
    }

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending)
        pageNumIsPending = null
      }
    })
  })
}

// Get PDF Doc
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
  pdfDoc = pdfDoc_

  renderPage(pageNum)
})
