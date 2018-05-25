var htmlHead = "<html lang='pt-br'> <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> <head>  <title> . </title>  <style> .header { width: 80%; height: 18px; margin: 0 auto; background:#fff; text-justify: auto;text-align: left;}.content {width: 80%;height: 80px;margin: 0 auto;background: #fff;text-justify: auto;text-align: left;}.foot {width: 80%;height: 2px;margin: 0 auto;text-align: center;} </style>";
var htmlIMG = "</head> <body> <center> <img src='data:image/gif;base64,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' width='150' />";
var htmldiv1 = "<br><br><br><div class='header'>";
var htmldiv2 = "</div> <div class='content'>";
var htmldiv3 = "  <div class='foot'> <p>  <a href='#'><code>#</code></a> </p> </div> </div> </center> </body> </html>";


var fs = require('fs');
var showdown = require('showdown');
var converter = new showdown.Converter();

if (process.argv.length != 3 ){
    console.log("informe a localização do arquivo para "+process.argv[1]);    
}else{

    fs.readFile(process.argv[2], 'utf-8', function(err, data) {
        if (err) throw err;

        var s = converter.makeHtml(data);  
        var assunto = s.split(']');  
        var titulo = s.split('date')[0].split(':');  
        var subtitulo = s.split('"');  

        var HTML = htmlHead + htmlIMG + htmldiv1 + subtitulo[1] + htmldiv2 + assunto[1] + htmldiv3;


        //console.log("ASSUNTO :. ");
        //console.log(assunto[1]);
        //console.log("TITULO :. ");
        //console.log(titulo[1]);
        //console.log("SUBTITULO :. ");
        //console.log(subtitulo[1]);

        console.log(HTML);
        
      });    

}
