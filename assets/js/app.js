$(function() {
    $("body").vegas({
    	delay: 7000,
    	transition: [ 'fade', 'zoomOut', 'slideUp' ],
    	overlay: true,
	    slides: [
	    { src: "assets/images/slide/bg1.png" },
	    { src: "assets/images/slide/bg4.jpg" },
		{ src: "assets/images/slide/bg5.jpg" },
		{ src: "assets/images/slide/bg6.jpg" },
        { src: "assets/images/slide/bg7.jpg" },
	    { src: "assets/images/slide/bg8.jpg" }
	    ]
	});
});
