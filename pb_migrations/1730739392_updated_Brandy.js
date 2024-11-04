/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9q3rjwdstb8pmpr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cuu8s5uh",
    "name": "Categories",
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
  const collection = dao.findCollectionByNameOrId("9q3rjwdstb8pmpr")

  // remove
  collection.schema.removeField("cuu8s5uh")

  return dao.saveCollection(collection)
})
