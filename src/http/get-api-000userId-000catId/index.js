// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<body style="font-size: 16px;">
  <h1>Heya</h1>
  <pre style="width: 60rem;">${JSON.stringify(req, null, 2)}</pre>
</body>
</html>
`
  }
}
