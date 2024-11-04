/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ofac5l11zs7t3n8")

  // remove
  collection.schema.removeField("8ka5mlii")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vngwiced",
    "name": "Store_Price_2",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o7uemtla",
    "name": "Store_Price1",
    "type": "number",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("ofac5l11zs7t3n8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ka5mlii",
    "name": "Price1",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "104.99",
        "98.99"
      ]
    }
  }))

  // remove
  collection.schema.removeField("vngwiced")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o7uemtla",
    "name": "Price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
