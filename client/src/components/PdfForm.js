import { PDFDocument } from 'pdf-lib';

// Creates a copy of the character sheet to be filled
// export async function createCopy() {
//   const url = '../docs/charSheet.pdf'

//   const donorPdfBytes = await fetch(url).then(res => res.arrayBuffer())
//   const donorPdfLoad = await PDFDocument.load(donorPdfBytes)

//   const newPdf = await PDFDocument.create()

//   const [donorPdfPage] = await newPdf.copyPages(donorPdfLoad, [0])

//   newPdf.addPage(donorPdfPage)


//   const pdfBytes = await newPdf.saveAsBase64( { dataUri: true } )
//   // Code to get fields
//   // const form = pdfBytes.getForm()
//   // const fields = form.getFields()
//   // fields.forEach(field => {
//   //   const type = field.constructor.name
//   //   const name = field.getName()
//   //   console.log(`${type}: ${name}`)
//   // })
//   return pdfBytes
// };

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
  const strField = form.getTextField('STRmod')
  const dexField = form.getTextField('DEXmod ')
  const conField = form.getTextField('CONmod')
  const intField = form.getTextField('INTmod')
  const wisField = form.getTextField('WISmod')
  const chaField = form.getTextField('CHamod')
  const strModField = form.getTextField('STR')
  const dexModField = form.getTextField('DEX')
  const conModField = form.getTextField('CON')
  const intModField = form.getTextField('INT')
  const wisModField = form.getTextField('WIS')
  const chaModField = form.getTextField('CHA')

  nameField.setText(charData.name)
  raceField.setText(charData.race)
  classField.setText(charData.class)
  strField.setText(charData.stats.str.toString())
  dexField.setText(charData.stats.dex.toString())
  conField.setText(charData.stats.con.toString())
  intField.setText(charData.stats.int.toString())
  wisField.setText(charData.stats.wis.toString())
  chaField.setText(charData.stats.cha.toString())
  strModField.setText(charData.stats.mod.strMod)
  dexModField.setText(charData.stats.mod.dexMod)
  conModField.setText(charData.stats.mod.conMod)
  intModField.setText(charData.stats.mod.intMod)
  wisModField.setText(charData.stats.mod.wisMod)
  chaModField.setText(charData.stats.mod.chaMod)

  const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true })
  // console.log('Logged at end of fillSheet')
  document.getElementById('pdf-render').src = pdfBytes
};