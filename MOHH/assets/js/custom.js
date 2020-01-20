
// Equal Height Function
function equalHeights(classname) {
	var findClass = document.querySelectorAll(classname);
	var maxHeight = 0;

	for(var i=0; i<findClass.length; i++) {
		var element = findClass[i];
		var elementHeight = element.offsetHeight;
		maxHeight = (elementHeight > maxHeight ? elementHeight : maxHeight);
	}
	
	for(var i=0; i<findClass.length; i++) {
		findClass[i].style.height = maxHeight + "px";
	}
}

// Scholarship Carousel Function 
function scholarshipCarousel() {
	$('#scholarshipCarousel').owlCarousel({
	    margin:60,
	    nav:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true,
	        },
	        576:{
	            items:2,
	            loop:true,
	            margin:20,
	        },
	        992:{
	            items:3,
	            loop:false,
	        }
	    }
	})
}

// Healtcare Carousel Function
function healthcareCarousel() {
	$('#healthcare-carousel').owlCarousel({
	    margin:0,
	    nav:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true,
	        }
	    }
	})
}

// happening Carousel Function
function happeningCarousel() {
	$('#happeningCarousel').owlCarousel({
	    margin:50,
	    nav:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true,
	        },
	        576:{
	            items:2,
	            loop:true,
	            margin:20,
	        },
	        992:{
	            items:3,
	            loop:false,
	        }
	    }
	})
}

// Socil Media Carousel Function
function social_feedCarousel() {
	$('#social_feedCarousel').owlCarousel({
	    margin:0,
	    nav:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true,
	        },
	        576:{
	            items:2,
	            loop:true,
	        },
	        992:{
	            items:3,
	            loop:false,
	        }
	    }
	})
}

function ScrollTop() {
	// Scroll Top
	var topId = document.querySelector('#scrollTop');
	var clicktopId = document.querySelector('.stickey-info__list--scrollTop a');
	var checktopId = document.querySelectorAll('.stickey-info__list--scrollTop a');
	if(checktopId.length == 1) {
		clicktopId.addEventListener('click', function(event) {
			event.preventDefault();
			topId.scrollIntoView({behavior: "smooth"});
		});
	}

	// Scroll Bottom
	var bottomId = document.querySelector('#scrollBottom');
	var clickbottomId = document.querySelector('.stickey-info__list--scrollbottom a');
	var checkbottomId = document.querySelectorAll('.stickey-info__list--scrollbottom a');
	if(checkbottomId.length == 1) {
		clickbottomId.addEventListener('click', function(event) {
			event.preventDefault();
			bottomId.scrollIntoView({behavior: "smooth"});
		});
	}
	
}


// function campareScholarship() {
// 	var findClass = document.querySelectorAll('.compare_btn');
// 	for(var i=0; i<findClass.length; i++) {
// 		findClass[i].addEventListener('click', function() {
// 			var findHeading = document.querySelectorAll('.scholarshipCarousel-heading');
// 			for(var j=0; j<findHeading.length; j++) {
// 				console.log(findHeading[j].innerHTML);
// 			}
// 		});
// 	}
// }

// Inner Page Carousel Function
function InnerpageCarousel(CarouselId) {
	$(CarouselId).owlCarousel({
	    margin:0,
	    nav:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true,
	        }
	    }
	})
}

function tabs() {
	$('.tab-section__tabs li').click(function() {
		var tabId = $(this).attr('data-tab');

		$('.tab-section__tabs--link').removeClass('active');
		$('.tab-section__tab-content--text').removeClass('active');

		$(this).addClass('active');
		$("#" + tabId).addClass('active');
	});
}

// function tabsJ() {
// 	var findtabLink = document.querySelectorAll('.tab-section__tabs li');
// 	for(var i=0; i < findtabLink.length; i++) {
// 		var tabLink = findtabLink[i];
// 		tabLink.addEventListener('click', function() {

// 			var findtabLinkInner = document.querySelectorAll('.tab-section__tabs li');
// 			for(var j=0; j < findtabLinkInner.length; j++) {
// 				var tabLinkInner = findtabLinkInner[j];
// 				tabLinkInner.classList.add('active');
// 				console.log("active");
// 			}
			
// 			//tabLink.className += ' active' // For IE9
// 		});
// 	}
	
// }

// Select Picker function
function selectPicker() {
	$('.selectpicker').selectpicker();
}

document.addEventListener('DOMContentLoaded', function() {
	equalHeights('.healthcareBriefArticle');
	scholarshipCarousel();
	equalHeights('.scholarshipCarousel__item .scholarshipCarousel-heading');
	equalHeights('#scholarshipCarousel .scholarshipCarousel__item');
	healthcareCarousel();
	happeningCarousel();
	equalHeights('.happeningCarousel__item');
	social_feedCarousel();
	//campareScholarship();
	ScrollTop();
	InnerpageCarousel('#secondary-InnerBanner');
	InnerpageCarousel('#testimonial_slider');
	tabs();
	selectPicker();
	//tabsJ();
});

// Call function on RESIZE
window.onresize = function() {
	var findClass = document.querySelectorAll('.healthcareBriefArticle');
	for(var i=0; i<findClass.length; i++) {
		findClass[i].style.height = "auto";
	}
	equalHeights();
}


