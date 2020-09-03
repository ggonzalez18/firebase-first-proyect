const functions = require('firebase-functions');//servidor node
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors'); // se usa para acceder a otro dominio
const app = express();// Automatically allow cross-origin requestsrouter.use(cors({ origin: true }));
app.use(cors({ origin: true }))

//end point express
app.get('/beers', async (req, rest) => {
  const beers = await admin.firestore().collection('beers').get()//va a buscar toda la coleccion de cervezas
  const list = []
  beers.docs.forEach(doc => {
    list.push({id: doc.id, data: doc.data()})
  })
  rest.send(list)
})

// trae las cervesas desde el firestore
app.get('/beers/:id', async (req, res) => {
  const beer = await admin.firestore().collection('beers')
    .doc(req.params.id).get().then((doc) => {
      if (doc.exists) {
        return {
          id: doc.id, data: doc.data()
        }
      } else {
        return {}
      }
    })
  res.send(beer)
})

//crear cervezas
app.post('/beers', async (req, res) => {
  const beer = await admin.firestore().collection('beers').add(req.body).then((doc) => {
    return doc.id
  })
  res.send(beer)
})

// elimina cervezas
app.delete('/beers/:id', async (req, res) => {
  const beer = await admin.firestore().collection('beers').doc(req.params.id).delete()
  res.send(beer)
})

// actualiza registro
app.put('/beers/:id', async (req, res) => {
  const beer = await admin.firestore().collection('beers')
    .doc(req.params.id).update(req.body).then(function (doc) {
    return doc.id
    })
  res.send(beer)
})

exports.api = functions.https.onRequest(app)
