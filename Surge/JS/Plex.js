/*
解锁plex

***************************


**************************/
var body=response.body
    .replace(/\ active=\"0\"/, "\ active=\"1\"")
    .replace(/subscribedAt=\"\"/, "subscribedAt=\"1654922700\"")
    .replace(/status=\"Inactive\"/,"status=\"active\"");
console.log("替换plex返回:\n %s", body)
$done({ body });