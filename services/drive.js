const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')

const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly']
const CREDENTIALS_PATH = '../credentials.json'
const TOKEN_PATH = '../token.json'

// Cargar credenciales desde un archivo en la raiz
function intento () {
  fs.readFile(CREDENTIALS_PATH, (err, content) => {
    if (err) { return console.log('Error loading client secret file:', err) }
    authorize(JSON.parse(content), listFiles)
  })
}

// Crear cliente de OAuth2 con las credenciales recibidas por parametro y despues ejecutar el callback
function authorize (credentials, callback) {
  const { client_secret: clientSecret, client_id: clientId, redirect_uris: redirectUris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    clientId, clientSecret, redirectUris[0])

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) { return getAccessToken(oAuth2Client, callback) }
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
  })
}

// Solicitar y crear un nuevo token tras solicitar la autorizacion del usuario, posteriormente el callback es ejecutado
function getAccessToken (oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) { return console.error('Error retrieving access token', err) }
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) { return console.error(err) }
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

function listFiles (auth) {
  const drive = google.drive({ version: 'v3', auth })
  drive.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name)'
  }, (err, res) => {
    if (err) { return console.log('The API returned an error: ' + err) }
    const files = res.data.files
    if (files.length) {
      console.log('Files:')
      files.map((file) => {
        console.log(`${file.name} (${file.id})`)
        return file.name
      })
    } else {
      console.log('No files found.')
    }
  })
}

exports.intento = intento
