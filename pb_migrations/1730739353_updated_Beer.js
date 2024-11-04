/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ofac5l11zs7t3n8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1pqars0",
    "name": "Category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fn53su03xc0bfn8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ofac5l11zs7t3n8")

  // remove
  collection.schema.removeField("o1pqars0")

  return dao.saveCollection(collection)
})
