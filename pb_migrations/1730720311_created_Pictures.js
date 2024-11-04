/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tz7toqz6fms6bfo",
    "created": "2024-11-04 11:38:31.299Z",
    "updated": "2024-11-04 11:38:31.299Z",
    "name": "Pictures",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tz7toqz6fms6bfo");

  return dao.deleteCollection(collection);
})
