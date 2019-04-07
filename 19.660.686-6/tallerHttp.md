
## 1) Glosario

### A) Request:
Es un mensaje que permite enviar peticiones HTTP y procesar estas mismas. [1]
### B) Response:
Es una respuesta HTTP enviada despues de procesar el Request. [2]
### C) Status Code:
Son Codigos de 3 digitos que indican el estado del request. [3]
### D) Methods: [4]
#### a) GET:
Solicita informacion del servidor.
#### b) POST:
Envia datos al servidor.
#### c) HEAD:
Pide informacion como GET, pero solo pide el header y el status.
#### d) OPTIONS:
Describe las opciones de comunicacion del recurso.
#### e) PUT:
Reemplaza todas las representaciones actuales del recurso.
#### f) DELETE:
Borra el recurso especificado.
### E) Header: [5]
Permiten al cliente y al servidor enviar informacion adicional con el Request o el Response.
#### a) Accept, Accept-Charset, Accept-Encoding: 
Informan de los tipos de contenido aceptados.
#### b) Cache-Control:
Especifica directiva para los mecanismos de cache en Request y Response
#### c) Connection:
Controla si la conección se queda abierta o despues de que termine la transacción actual.
#### d) Cookie, Set-Cookie:
Maneja las Cookies enviadas del server al usuario.
#### e) Host:
Especifica el nombre del dominio y el puerto en el que el server esta escuchando.
#### f) Origin:
Indica de donde origina una busqueda.
#### h) Referer:
Es la direccion de la pagina web de donde se llego a la pagina web actual.
#### i) User-Agent:
Contiene un string caracteristico que le permite identificar el tipo de aplicación, el sistema operativo, etc.
#### j) Content-Encoding, Content-Length, Content-Type:
Indican las caracteristicas del recurso.
#### k) Location:
Indica un URL al cual redireccionar la pagina.
#### l) Upgrade:
Pide al servidor que actualize el servidor HTTP.

## Source:
```
[1] https://www.toolsqa.com/client-server/http-request/
[2] https://www.toolsqa.com/client-server/http-response/
[3] https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
[4] https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
[5] https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
```

| REQ/RES | Metodo HTTP | URL | Headers | Status |
| - | - | - | - | - |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/doku.php | Upgrade-Insecure-Requests, User-Agent, Accept | |
| RES | | | Date, Server, X-Powered-By, Expires, Cache-Control, Pragma, X-UA-Compatible, Vary, Content-Encoding, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/bootstrap/default/bootstrap.min.css|User-Agent, Accept | |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/exe/css.php?t=bootstrap3&tseed=44b1422730da0b8e0624124cac9afe4b | User-Agent, Accept | |
| RES | | | Date, Server, X-Powered-By, Cache-Control, Pragma, ETag, Last-Modified, Vary, Content-Encoding, Content-Length, Content-Type | 200 | 
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/font-awesome/css/font-awesome.min.css | User-Agent, Accept | |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/exe/indexer.php?id=start&1554674687 | User-Agent, Accept | |
| RES | | | Date, Server, X-Powered-By, Expires, Cache-Control, Pragma, Connection, Content-Length, Content-Type | 200 |
| REQ | GET | https://crouton.net/ | Upgrade-Insecure-Requests, User-Agent, Accept | |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | https://crouton.net/crouton.png | User-Agent, Accept | |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | https://crouton.net/favicon.ico | User-Agent, Accept | |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | https://nave13.ucv.cl/ | Upgrade-Insecure-Requests, User-Agent, Accept | |
| RES | | | Server, Date, Content-Type, Transfer-Encoding, Connection, X-Powered-By, Expires, Last-Modified, Cache-Control | 200 |
| REQ | GET | https://nave13.ucv.cl/css/nave.css | User-Agent, Accept | |
| RES | | | Server, Date, Content-Type, Content-Length, Last-Modified, ETag, Accept-Ranges | 200 |