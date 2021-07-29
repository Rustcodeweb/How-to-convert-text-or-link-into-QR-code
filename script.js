
	function chartCall(value) { 
		return $('<div/>').text(value).html(); 
	} 

	$('#close-qr-error').on("click", function(){
		$('#qr-error-msg').hide();
	});

	$(function () { 
		$('#qr-error-msg').hide();
		$('#qr-call-btn').click(function () {
			if($('#qr-input-content').val() != 0){
				$('#qr-error-msg').hide();
			$("#qr-download-section").empty();
			let finalURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' + chartCall($('#qr-input-content').val()) + '&chs=200x200&chld=L|0'; 
			var qrImg = "<img src='' class='qr-code' />";
			$("#qr-download-section").append(qrImg);
			$('.qr-code').attr('src', finalURL); 
			var qrSpace = "<p><br></p>";
			var qrDwnldBtn= "<a  href="+finalURL+"> <button id='qr-download-btn' type='button' style='font-size: 12px;'>Download</button> </a> ";
			$("#qr-download-section").append(qrSpace,qrDwnldBtn);
			}
			else{
                $("#qr-download-section").empty();
				$('#qr-error-msg').show();
			}
		}); 
	}); 
