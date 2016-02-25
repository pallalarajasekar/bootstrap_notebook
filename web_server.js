/**
 * Created by harinaths on 30/1/16.
 */
var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}

var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.get('/', function(req, res){
    res.render("index")
})

app.get('/test', function(req, res){
    res.render("test")
})
app.get('/tabjs', function(req, res){
    res.render("tabjs")
})

app.get('/carousel', function(req, res){
    res.render("carousel")
})

app.get('/carouseldemo', function(req, res){
    res.render("carouseldemo")
})

app.get('/bootstrapcarousel', function(req, res){
    res.render("bootstrapcarousel")
})

app.get('/cover', function(req, res){
    res.render("cover")
})

app.get('/coverdemo', function(req, res){
    res.render("coverdemo")
})
