# IBM Watson Speech to text y Natural Language Understanding

IBM Watson Speech to text es una herramienta de inteliencia artificial que facilita la construccion de aplicaciones cognitivas donde se require la implementacion de un modelo de transcripción de audio, donde además tenemos la opción de seleccionar el idioma que se necesite entre múltiples opciones y además obtener respuesta en un tiempo muy corto. en esta demo se utiliza en español para la transcripcion de audios y además se implementa el servicio de Natural Language Understanding de IBM, para identificar en estos audios sentimientos de ususarios tras recibir los servicios de una empresa.


## Arquitectura 🚀
![WhatsApp Image 2020-07-21 at 11 08 05 AM](https://user-images.githubusercontent.com/46906169/88103650-e6f2dc80-cb66-11ea-9963-32ef5e304002.jpeg)

### Pre-requisitos 📋

Para comenzar con esta demo es necesario:
- Tener una cuenta de IBM cloud, si aun no está creada en el siguiente enlace la puede crear [AQUI](https://cloud.ibm.com/).
- Crear un servicio de **Speech to text**.
- Crear un servicio de **Natural Language Understanding**.
- Crear un servicio de **Knowlegde Studio**.

### Instalación 🔧

Es necesario cambiar las credenciales en el proyecto de los servicios nuevos que se creron en la cuenta personal de IBM cloud.
1. Credenciales de Natural Language Understanding
En el archivo ***params.json*** se encuentran las credenciales de los servicios cloud.

```   
    "nl_version": "Versión de su modelo",
    "nl_api_key": "ApiKey del servicio de NLU que creó",
    "nl_url": "URL del servicio de NLU",
    "nl_model_id": "ID del modelo desplegado"   
```
El ***model_id*** que se genera a partir del siguiente comando cURL.
```
curl --user "apikey:{apikey}" "{url}/v1/models?version=2019-07-12"
```


![credenciales 2](https://user-images.githubusercontent.com/46906169/88112977-7d7aca00-cb76-11ea-8eb8-8766ba15d04f.png)

Por otro lado, la autenticación necesaria para el servicio se Speech to text se encuentra en el mismo archivo donde se hace el request ***stt.js*** esepecificamente en los headers del metodo POST que se implementó para hacer la conexión con el servicio, allí vemos que se necesitan las siguientes credenciales:

```
    "URL": "URL de nuestro servicio se Speech to Text"
    "Content-Type": "Formato de audio que manejaremos Ej. mp3, FLAC, etc..."
    "Authorization": "Apikey de nuestro servicio e Speech To Text"
```
![credenciales](https://github.com/Felipe1012/speech-to-text-NLU/blob/master/sttimage.png)



## Ejecutando las pruebas ⚙️
Se puede hacer busquedas por marca o modelo.
<img width="960" alt="inicio" src="https://user-images.githubusercontent.com/46906169/88119307-ace50300-cb85-11ea-9e9b-5ac0a5041fc3.PNG">

<img width="947" alt="secd" src="https://user-images.githubusercontent.com/46906169/88119819-1e718100-cb87-11ea-96ca-ce1298d64697.PNG">


## Construido con 🛠️

* [IBM Watson Discovery](https://cloud.ibm.com/docs/discovery?topic=discovery-sources#connectwebcrawl) 
* [IBM Natural Language Understanding](https://www.ibm.com/co-es/cloud/watson-natural-language-understanding) 

## Wiki 📖
* [Uso de Api Watson Discovery](https://cloud.ibm.com/apidocs/discovery)
* [Uso de Api NLU](https://cloud.ibm.com/apidocs/natural-language-understanding)
## Autores ✒️

Equipo tecnico Data & AI IBM Colombia

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

