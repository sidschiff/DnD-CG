import { PDFDocument } from 'pdf-lib';

// Creates a copy of the character sheet to be filled
export async function createCopy() {
  const url = '../docs/charSheet.pdf'

  const donorPdfBytes = await fetch(url).then(res => res.arrayBuffer())
  const donorPdfLoad = await PDFDocument.load(donorPdfBytes)

  const newPdf = await PDFDocument.create()

  const [donorPdfPage] = await newPdf.copyPages(donorPdfLoad, [0])

  newPdf.addPage(donorPdfPage)


  const pdfBytes = await newPdf.saveAsBase64( { dataUri: true } )
  // Code to get fields
  // const form = pdfBytes.getForm()
  // const fields = form.getFields()
  // fields.forEach(field => {
  //   const type = field.constructor.name
  //   const name = field.getName()
  //   console.log(`${type}: ${name}`)
  // })
  return pdfBytes
};

export async function fillSheet(charData) {
  // const formPdfBytes = await createCopy()
  const url = '../docs/charSheet.pdf'
  const urlBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(urlBytes)
  // const pdfDoc = formPdfBytes
  const form = pdfDoc.getForm()

  const nameField = form.getTextField('CharacterName')
  const raceField = form.getTextField('Race ')
  const classField = form.getTextField('ClassLevel')
  const strModField = form.getTextField('STRmod')
  const dexModField = form.getTextField('DEXmod ')
  const conModField = form.getTextField('CONmod')
  const intModField = form.getTextField('INTmod')
  const wisModField = form.getTextField('WISmod')
  const chaModField = form.getTextField('CHamod')

  nameField.setText(charData.name)
  raceField.setText(charData.race)
  classField.setText(charData.class)
  strModField.setText(charData.stats.str.toString())
  dexModField.setText(charData.stats.dex.toString())
  conModField.setText(charData.stats.con.toString())
  intModField.setText(charData.stats.int.toString())
  wisModField.setText(charData.stats.wis.toString())
  chaModField.setText(charData.stats.cha.toString())

  const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true })
  console.log('Logged at end of fillSheet')
  document.getElementById('pdf-render').src = pdfBytes
};