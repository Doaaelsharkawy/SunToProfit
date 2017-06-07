var url = require ('url');
// file system this module used to render files in response.write() instead of writing the tags.
var fs = require('fs');

function renderHTML (path , response){
	//response.write('Hello world');

	// this function used to render html file on the server 
	//	fs.readFile('path',options,call back function());

		fs.readFile(path,null,function(error,data){
		if(error){
			response.writeHead(404);
			response.write('File not found!');
		}else {
			response.write(data);
		}
			response.end();
	});	
}

module.exports={
	handleRequest: function (request , response){
	response.writeHead(200 ,{'Content-Type':'text/html'});
	
	var path = url.parse(request.url).pathname;
		switch(path){
			case '/':
			case '/index':
				renderHTML('../html/index.html',response);
				break;
				
			    case '/home':
				renderHTML('../html/home.html',response);
				break;
				
				case'/clientForm':
				renderHTML('../html/clientForm.html',response);
				break;
				
				case'/clInterface':
				renderHTML('../html/clInterface.html',response);
				break;
				
				case'/login':
				renderHTML('../html/login.html',response);
				break;
				
				case'/publicForm':
				renderHTML('../html/publicForm.html',response);
				break;
				
				case'/supInterface':
				renderHTML('../html/supInterfeace.html',response);
				break;
				
				case'/supplierForm':
				renderHTML('../html/supplierForm.html',response);
				break;
				
			default:
				response.writeHead(404);
				response.write('Route not defined');
				response.end();
		}
	
	}
};

