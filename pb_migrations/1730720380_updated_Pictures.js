/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tz7toqz6fms6bfo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "coqeoa6n",
    "name": "picture",
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

  // update
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
})
