$('#consultadistancia').on('click', function(){

	$.ajax({
		type: "POST",
		url:'con_dist.php?caso=consultadistancia',
		success: function(data) {
			console.log('HOLA');
		$("#tabla_consultadistancia").html(data);

		}
	});
})