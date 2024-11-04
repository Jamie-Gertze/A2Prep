/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  // remove
  collection.schema.removeField("xb6pchoi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dgounr1",
    "name": "Hours",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Monday\t9 am–7 pm",
        "Tuesday\t9 am–7 pm",
        "Wednesday\t9 am–7 pm",
        "Thursday\t9 am–7 pm",
        "Friday\t9 am–7 pm",
        "Saturday\t9 am–5 pm",
        "Sunday\t9 am–2 pm"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xb6pchoi",
    "name": "Hours",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("9dgounr1")

  return dao.saveCollection(collection)
})
