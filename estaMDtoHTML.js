var htmlHead = "<html lang='pt-br'> <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> <head>  <title> . </title>  <style> .header { width: 80%; height: 18px; margin: 0 auto; background:#fff; text-justify: auto;text-align: left;}.content {width: 80%;height: 80px;margin: 0 auto;background: #fff;text-justify: auto;text-align: left;}.foot {width: 80%;height: 2px;margin: 0 auto;text-align: center;} </style>";
var htmlIMG = "</head> <body> <center> <img src='data:image/gif;base64,R0lGODlhlwBcAMYAAP///zMzM3asZD6GPSIiImmhXnm4X6enp3evZGWdW3qyZHKoZBgYGHq0YTg4OMvLy1eXVQ8PDy0tLU+UTQAAAPP3812aWnW6XGKYWH+tfdrm2r29vajGp3O7V2GcX1KRTWJiYm6+Tu/v78zfyJCQkHGlb+Li4tXV1cLWwufv50lJSYu0ilpaWp/Annh4eLjQuCt+Km1tbZubm2CfUoWFhYGxd22pV53Ri2a9P5/CmM3mxLXUrt7u2YrKc2CnTI64g7PXplSiP1KrOkGaLgp1Bv///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH+B05vZGUuanMALAAAAACXAFwAAAf+gACCg4SFhoeIiYqLjI2JJgwyjpOUlZaXmJmIDwwEBAeaoaKjpKScAQEEDhulra6vr6eoEgQsD7C4ubqMsqgBtDEmu8PEuL2+vxHCxczNmcfIn87T1I3QvtLV2tuD16jZ3OHT3qmg4ufM5ODo7Lnq5u3xsQzI0fDy+KPv+fyi+/0AL/0LSNDRwIIIEx1MyJDQwoYNH4YTsQyiNXr1vt0TJyMCBRYVce1A8EPDLhE0WLASJNGRDAarSG2gNYsCDVw6GthAIGBCjgq4OhKQEEHFCQAnMGZcN2kmAVRFj2Y64UCpLwkUNobS0OBCAwU8FySYwcHVBk/IsLqgISGjxkr+JlREqKdWhCURMSK0dZsqwEpNFW50MNDgK08BBQrMKDBilAkWVtPudctUkQgXFCbTpSDJUQUZaPkiY8BC6iUgIQYTNixAgNjEM2qYxISSgWbRlLUiAv0Ud6qYizY46O37KgEadinp6BDiwgUDq8G2XlAgQeLEPy3JoFlcdGVDG1QQLy6BAQjThU6wGN8dWwDdh3j0wJHaOfTC0l2/vl5gwYtJD4jXHm7fDXICCLYNaBxyhJjgwlAKusWACrckksIN9KXWgX3RHbaAWNYl9mFsjSlyYIIR5oYIShCmiI0D5pzF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' width='150' />";
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
