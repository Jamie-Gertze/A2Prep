/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qbgjrepsz7paamb",
    "created": "2024-11-03 16:50:57.134Z",
    "updated": "2024-11-03 16:50:57.134Z",
    "name": "Stores",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5ly0mccd",
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
      },
      {
        "system": false,
        "id": "kwwddemy",
        "name": "Adress",
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
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb");

  return dao.deleteCollection(collection);
})
