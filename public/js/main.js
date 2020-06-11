$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        autoScrolling:true,
		licenseKey: '12A17E0E-01C34A10-AA62E6F2-562D6154',
		'navigation': true,
		'navigationPosition': 'right',
		
		onLeave: function(index, nextIndex, direction){
			//after leaving section 2
			if(index.index == 0 && direction =='down'){
				$('.card').removeClass("moveUp").addClass("moveDown");
			}
	
			else if(index.index == 1 && direction == 'up'){
				$('.card').removeClass("moveDown").addClass("moveUp");
			}
		},
	});
});

document.querySelector('#moveAboutMe').addEventListener('click', function(e){
	e.preventDefault();
	fullpage_api.moveTo(2);
});
