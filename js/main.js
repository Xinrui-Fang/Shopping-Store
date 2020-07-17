/*
* @Author: Xinrui-Fang
* @Date:   2020-07-16 19:09:50
* @Last Modified by:   Xinrui-Fang
* @Last Modified time: 2020-07-17 10:57:38
*/

/*First Slider*/
$('.slider-one')
.not(".slick-intialized")
.slick({
	autoplay:true,
	autoplaySpeed:3000,
	dots:true,
	prevArrow:".site-slider .slider-btn .prev",
	nextArrow:".site-slider .slider-btn .next"
});

/*Second Slider*/
$('.slider-two')
.not(".slick-intialized")
.slick({
	prevArrow:".site-slider-two .prev",
	nextArrow:".site-slider-two .next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed:3000
});
