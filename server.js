var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var article = {
    articleone: {
        title: 'article one',
        heading: 'a1',
        date: '12 october 2006',
        content: `
                        <p>
                            content1
                        </p>
                        <p>
                            content2
                        </p>'
                        <p>
                            content3
                        </p> `
        
    },
    articletwo: {
         title: 'article two',
        heading: 'a2',
        date: '12 october 2006',
        content: `
                        <p>
                            content1
                        </p>
                        <p>
                            content2
                        </p>'
                        <p>
                            content3
                        </p>`
    },
    articlethree : {
         title: 'article three',
        heading: 'a3',
        date: '12 october 2006',
        content: `
                        <p>
                            content1
                        </p>
                        <p>
                            content2
                        </p>'
                        <p>
                            content3
                        </p>`
    }
};
function createtemplate (data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.contentl;
    var htmltemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="cont">
                <div>
                     <a href="/">home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`
    ;
    return htmltemplate;
}
app.get('/articlename',function(req,res) {
    var articlename =req.param.articlename;
   res.send(createtemplate(article[articlename]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});