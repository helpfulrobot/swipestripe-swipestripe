(function($) { 

	//TODO need to namespace this properly
	window.populateRegion = function() {

		var regions = $.parseJSON('$regions'),
				$countryField;

		$countryField = $('#CheckoutForm_OrderForm_Shipping-CountryCode');		
		var $regionField = $('.region select');
		var defaultValue = '$defaultValue';

		if ($countryField.length > 0 && $regionField.length > 0) {
			
			//Listen to changes on country field and reflect changes in region
			$countryField.live('change', function() {

				var countryCode = $(this).val();
				var newRegions = regions[countryCode];
				$('option', $regionField).remove();

				if (newRegions) {
					
					if($regionField.prop) var options = $regionField.prop('options');
					else var options = $regionField.attr('options');
					
					$.each(newRegions, function(key, value) { 
						options[options.length] = new Option(value, key);
					});
					
					if (defaultValue) {
						$regionField.val(defaultValue);
					}
					else {
						$regionField.val($("option:first", $regionField).val());
					}
				}
				$('#CheckoutForm_OrderForm_Shipping-RegionCode').change();
			});
			$countryField.change();
		}
	}
	
  $(document).ready(function() { 
  	populateRegion();
  	$('#CheckoutForm_OrderForm_Shipping-RegionCode').live('change', updateOrderFormCartAJAX);
  })
})(jQuery);