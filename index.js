// JavaScript Document




function sacaFoto(){
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
});
}


function onSuccess(ruta) {
    var image = document.getElementById('myImage');
    image.src = ruta;
	
	var parrafo = document.getElementById('texto');
	parrafo.innerHTML = ruta;
	
	
	function win(r) {
	alert("Foto subida OK!");
	}
	
	function fail(error) {
	alert("No se pudo subir");
	}


	var uri = encodeURI("http://200.26.189.133/~ucymxbzr/fotos/upload.php");

	var options = new FileUploadOptions();
	options.fileKey="foto";
	options.fileName="DYLAN_" + ruta.substr(ruta.lastIndexOf('/')+1);

	
	var ft = new FileTransfer();
	ft.onprogress = function(progressEvent) {
		if (progressEvent.lengthComputable) {
			var percent = progressEvent.loaded / progressEvent.total;
			
			$("#porcentaje").html( "Subido:" + percent + " %");
			
		}
	};
	ft.upload(ruta, uri, win, fail, options);
	
	
	
	
}

function onFail(message) {
    alert('Failed because: ' + message);
}




	
	
