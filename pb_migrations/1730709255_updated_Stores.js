/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  collection.listRule = "@request.auth.id != null"
  collection.viewRule = "@request.auth.id != null"
  collection.createRule = "@request.auth.id != null"
  collection.updateRule = "@request.auth.id != null"
  collection.deleteRule = "@request.auth.id != null"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qbgjrepsz7paamb")

  collection.listRule = "id = @request.auth.id"
  collection.viewRule = "id = @request.auth.id"
  collection.createRule = "id = @request.auth.id"
  collection.updateRule = "id = @request.auth.id"
  collection.deleteRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
})
