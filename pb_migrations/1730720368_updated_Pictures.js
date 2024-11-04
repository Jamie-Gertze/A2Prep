/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tz7toqz6fms6bfo")

  // remove
  collection.schema.removeField("cvvvvd9t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "coqeoa6n",
    "name": "Spongebob_pic",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/vnd.mozilla.apng",
        "image/jpeg"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tz7toqz6fms6bfo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvvvvd9t",
    "name": "Spongebob_pic",
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
  collection.schema.removeField("coqeoa6n")

  return dao.saveCollection(collection)
})