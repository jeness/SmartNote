var url = "mongodb://localhost:27017/test"; 
var db = connect(url);
db.objects.insert({
    "pid": 100,
    "comid": 1,
    "uid": 1010,
    "comContents": "video!"
});
db.objects.insert({
	"pid": 101,
	"comid": 2,
	"uid": 928,
	"comContents": "b-day!"
});