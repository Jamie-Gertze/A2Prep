/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fn53su03xc0bfn8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jj4xa3rs",
    "name": "Type",
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
  const collection = dao.findCollectionByNameOrId("fn53su03xc0bfn8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jj4xa3rs",
    "name": "Name",
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
})
