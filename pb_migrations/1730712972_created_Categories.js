/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fn53su03xc0bfn8",
    "created": "2024-11-04 09:36:12.019Z",
    "updated": "2024-11-04 09:36:12.019Z",
    "name": "Categories",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("fn53su03xc0bfn8");

  return dao.deleteCollection(collection);
})
