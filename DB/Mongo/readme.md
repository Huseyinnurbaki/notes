# Mongo Cheatsheet

```
db.getCollectionNames()
```

```
db.listDatabases
```



https://docs.mongodb.com/manual/reference/method/


 db.deneme3.insert({name: "Chaitanya", age: 30})


 # Check if replica has the same values

 show dbs will return error
rs.secondaryOk() <---
then 
show dbs


# update user pwd

sshow dbs
use dbIWantToUpdateUsersPwd
db.changeUserPassword("user", "newPwd")

# register users to related dbs omly


db.collection.find()

db.users.find().pretty()


db.users.find().pretty()

# diagnostics

BadRequest (400); Substatus: 0; ActivityId: e2159319-7189-4a99-a4b2-321ad4cd1bb8; Reason: (Response status code does not indicate success: BadRequest (400); Substatus: 0; ActivityId: e2159319-7189-4a99-a4b2-321ad4cd1bb8; Reason: (Message: {"Errors":["The index path corresponding to the specified order-by item is excluded."]}

check indexing

# cheatsheet

## array size

{subDoc: {$size: 2}}

array size greater than n

 'array.1': {$exists: true },