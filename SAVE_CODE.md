```
// base64 토큰 만들기
const jsonData = JSON.stringify({ name: '이태규', department: '온라인개발3팀' })
const base64 = encodeUnicode(jsonData)
function encodeUnicode(str: string) {
    return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1)
    })
    )
}
```

```
http://localhost:3000/?token=eyJuYW1lIjogIuydtO2DnOq3nCIsICJkZXBhcnRtZW50IjogIuyYqOudvOyduOqwnOuwnO2MgCJ9
```
