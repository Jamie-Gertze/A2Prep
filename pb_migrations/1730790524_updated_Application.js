/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buhg7vg5wavcrbs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxvkhrlr",
    "name": "Identity_num",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buhg7vg5wavcrbs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxvkhrlr",
    "name": "Identity_num",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 500000000000,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
