$(function() {
    $("body").vegas({
    	delay: 7000,
    	transition: [ 'fade', 'zoomOut', 'slideUp' ],
    	overlay: true,
	    slides: [
	    { src: "assets/images/slide/bg8.jpg" },
		{ src: "assets/images/slide/bg9.jpg" },
	    { src: "assets/images/slide/bg2.jpg" },
		{ src: "assets/images/slide/bg3.jpg" },
		{ src: "assets/images/slide/bg4.jpg" },
        { src: "assets/images/slide/bg5.jpg" },
		{ src: "assets/images/slide/bg6.jpg" }
    // { src: "assets/images/slide/bg7.png" },
	// { src: "assets/images/slide/bg1.jpg" }
	    ]
	});
});
