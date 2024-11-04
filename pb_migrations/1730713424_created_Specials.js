/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wpne35koz368xbf",
    "created": "2024-11-04 09:43:44.035Z",
    "updated": "2024-11-04 09:43:44.035Z",
    "name": "Specials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ctndtjid",
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
  const collection = dao.findCollectionByNameOrId("wpne35koz368xbf");

  return dao.deleteCollection(collection);
})
