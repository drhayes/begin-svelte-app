@app
begin-app

@static

@http
get /api/:userId/:catId

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
