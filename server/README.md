#API

## Initial request

Example

`curl http://localhost:8080/api/root`

Response
```
{
  "name": "",
  "id": "i0",
  "parentId": null,
  "type": "folder",
  "folders": [
    "i1",
    "i2"
  ],
  "files": []
}
```
#### Get file
`GET /api/file/:id`

`id` - file ID

#### Get folder
`GET /api/folder/:id`

`id` - folder ID

Example
`curl http://localhost:8080/api/folder/i1`
```json
{
  "name": "Private",
  "parentId": "i0",
  "id": "i1",
  "type": "folder",
  "folders": [],
  "files": [
    "i10",
    "i11",
    "i12",
    "i13",
    "i14",
    "i15",
    "i16"
  ]
}
```
#### Get root folder
`GET /api/root`
#### Get search results
`GET /api/search`
#### Create folder
`POST /api/folder/:id/new`

`id` - parent folder ID

payload params:

`name` - new folder name

Example:
```
curl -X POST \
  http://localhost:8080/api/folder/i1/new \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{"name":"My new folder"}'
```

#### Rename folder
`POST /api/folder/:id/rename`

`id` - folder ID

payload params:

`name` - new name


#### Rename file
`POST /api/file/:id/rename`

`id` - file ID

payload params:

`name` - new name

#### Delete folder
`DELETE /api/folder/:id`

`id` - folder ID


#### Delete file
`DELETE /api/file/:id`

`id` - file ID
