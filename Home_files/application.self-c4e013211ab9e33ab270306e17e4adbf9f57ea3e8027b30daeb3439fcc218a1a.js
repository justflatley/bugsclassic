// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//




$(document).on("ready turbolinks:load", function() {

// Exit notification
  $(document).on('click', '.notification', function() {
    $(this).remove()
  });

// Hamburger logic
  $('#burger').on('click', function() {
    $("#burger").toggleClass('is-active')
    $("#navbarTournament").toggleClass('is-active')
  })

// Teammmate name logic in registratioj form
var $teammates = $('#teammates')

$teammates.on('input', function() {
    $("#teammates-btn").attr('disabled', !this.value)
})

  // var teammatesList = []
  $('#teammates-btn').on('click', function() {
    var teammate = $teammates.val()
    var first_letter = teammate[0]
    $teammates.val('')
    $('#teammates-list').append('<p class="teammate-name chip"><span class="letter">' + first_letter + '</span><span class="name">' + teammate + '</span><a class="delete"></a></p>')
    // teammatesList.push(teammate)
  })

  $('#teammates-list').on('click', '.delete', function() {
		$(this).parent().remove()
	})

  $("form").submit(function(){
    if ($(".name").length  > 0) {
      var teammatesList = $(".name").map(function() {
        return this.innerHTML;
      }).toArray()
    } else {
      var teammatesList = []
    }
    $("#teammates-hidden").val(JSON.stringify(teammatesList))
  });

// Payment method radio button logic

  var $paymentContinueBtn = $("#payment-continue-btn")
  $('.payment-method-select').on('change', function() {
		$(this).parent().addClass('active')
			.siblings().removeClass('active')

    if ($(this).attr('id') == 'paypal-method') {
      $paymentContinueBtn.attr('disabled', true)
    } else {
      $paymentContinueBtn.attr('disabled', false)
    }

	var content = $(this).siblings('.content-wrap')
	$('.content-wrap').not(content).removeClass('active')
		content.addClass('active')
	})

// Error box logic

$('.field_with_errors').on('input', function() {
    $(this).removeClass('field_with_errors')
})

// Numeric input only logic

$('.numbersOnly').keypress(function(e) {
      var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
      if (verified) {e.preventDefault();}
    });

})
