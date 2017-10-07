var url = "mongodb://localhost:27017/test"; 
var db = connect(url);
db.objects.remove( { 
	"comContents":"b-day!" }
	);