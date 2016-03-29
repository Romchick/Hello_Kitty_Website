$(document).ready(function() {

	$('#textOfHeader').mouseover(function(){
		$('p.headerText').html("<br>");
		});
	$('#textOfHeader').mouseout(function(){
		$('p.headerText').text(" JavaScript Test");
		});

	var counter1 =0;
	var counter =0;
	$('[type="radio"]').hide();
    $('#buton').click(function() {
		$('[type="radio"]').show();
		counter1 = counter1 +1;
	
        switch (counter1){
			case 1:
			$('#buton').prop('value', 'Next');
			$('p.questionHeader').text('Question #1');
			$('p.questionText').text('1+1=');
			$('#one').text('3');
			$('#two').text('5');
			$('#three').text('2');
			$('#four').text('0');
			$('[type="radio"]').removeAttr('checked');
			break;
			
			case 2 :
			if ($("#radioC").prop("checked")){
			counter = counter +1;
			}
			$('p.questionHeader').text('Question #2');
			$('p.questionText').text('2*2=');
			$('#one').text('6');
			$('#two').text('4');
			$('#three').text('8');
			$('#four').text('58');
			$('[type="radio"]').removeAttr('checked');
			break;
			
			case 3 : 
			if ($("#radioB").prop("checked")){
			counter = counter +1;
			}
			$('p.questionHeader').text('Question #3');
			$('p.questionText').text('7*2=');
			$('#one').text('22');
			$('#two').text('8');
			$('#three').text('14');
			$('#four').text('12');
			$('[type="radio"]').removeAttr('checked');
			break;
			
			case 4 : 
			$('p.questionHeader').text('The End!');
			$('[type="radio"]').hide();
			$('#one').text('');
			$('#two').text('');
			$('#three').text('');
			$('#four').text('');
			if ($("#radioC").prop("checked")){
			counter = counter +1;
			}
			$('p.questionText').text("Your result: " + counter);
			$('[type="radio"]').removeAttr('checked');
			$('#buton').prop('value', 'Try again');
			counter1 =0;
			counter =0;
			break;
			
		}
    });
	
	
	
});
