/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xb6pchoi",
    "name": "Hours",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  // remove
  collection.schema.removeField("xb6pchoi")

  return dao.saveCollection(collection)
})
