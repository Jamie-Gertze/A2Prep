/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ofac5l11zs7t3n8")

  // remove
  collection.schema.removeField("gfleklak")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbpr884g",
    "name": "Store",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qbgjrepsz7paamb",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gfleklak",
    "name": "Store",
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

  // remove
  collection.schema.removeField("sbpr884g")

  return dao.saveCollection(collection)
})
