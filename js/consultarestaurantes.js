$('#consultarestaurantes').on('click', function(){

	$.ajax({
		type: "POST",
		url:'consulta.php?caso=consultarestaurantes',
		success: function(data) {
			console.log('HOLA');
		$("#tabla_consultarestaurantes").html(data);

		}
	});
})