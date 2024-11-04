/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dgounr1",
    "name": "Hours",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Monday - Friday\t9 am–7 pm",
        "Monday - Friday\t9 am–6 pm",
        "Saturday\t9 am–5 pm",
        "Sunday\t9 am–2 pm"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dgounr1",
    "name": "Hours",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Monday - Friday\t9 am–7 pm",
        "Saturday\t9 am–5 pm",
        "Sunday\t9 am–2 pm"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
