$(document).ready(function(){
	$(".button-collapse").sideNav();
	
});

var timeline = new TimelineMax({repeat: -1, repeatDelay: 3});

//if waiting --> invisible
timeline.set(".HTML-Green-Lines", {visibility: "hidden"})

timeline.set(".HTML-Purple-Lines", {visibility: "hidden"})

timeline.set(".HTML-Yellow-Lines", {visibility: "hidden"})

timeline.set(".CSS-Green-Lines", {visibility: "hidden"})

timeline.set(".CSS-Purple-Lines", {visibility: "hidden"})

timeline.set(".CSS-Yellow-Lines", {visibility: "hidden"})

timeline.set(".JS-Green-Lines", {visibility: "hidden"})

timeline.set(".JS-Purple-Lines", {visibility: "hidden"})

timeline.set(".JS-Yellow-Lines", {visibility: "hidden"})

timeline.set(".Canvas-Background", {fill: "#ffffff"})

timeline.set(".Canvas-Left", {visibility: "hidden"})

timeline.set(".Canvas-Right", {visibility: "hidden"})

timeline.set(".Canvas-Middle", {visibility: "hidden"})

timeline.set(".Cat", {visibility: "hidden"})

//Start Animation

//HTML Editor
timeline.set(".HTML-Green-Lines", {visibility: "visible"})

timeline.fromTo('.HTML-Green-Lines', 1, {scaleX: 0.0, transformOrigin: "left"}, {scale: 1, transformOrigin: "left"})

timeline.set(".HTML-Purple-Lines", {visibility: "visible"})

timeline.fromTo('.HTML-Purple-Lines', 1, {scaleX: 0.0, transformOrigin: "right"}, {scale: 1, transformOrigin: "right"})

timeline.set(".HTML-Yellow-Lines", {visibility: "visible"})

timeline.fromTo('.HTML-Yellow-Lines', 1, {scaleX: 0.0, transformOrigin: "left"}, {scale: 1, transformOrigin: "left"})

//CSS Editor
timeline.set(".CSS-Yellow-Lines", {visibility: "visible"})

timeline.fromTo('.CSS-Yellow-Lines', 1, {scaleX: 0.0, transformOrigin: "left"}, {scale: 1, transformOrigin: "left"})

timeline.set(".Canvas-Background", {fill: "#00ABFF"})

timeline.set(".CSS-Purple-Lines", {visibility: "visible"})

timeline.fromTo('.CSS-Purple-Lines', 1, {scaleX: 0.0, transformOrigin: "right"}, {scale: 1, transformOrigin: "right"})

timeline.set(".CSS-Green-Lines", {visibility: "visible"})

timeline.set(".Canvas-Left", {visibility: "visible"})

timeline.set(".Canvas-Right", {visibility: "visible"})

timeline.fromTo('.CSS-Green-Lines', 1, {scaleX: 0.0, transformOrigin: "left"}, {scale: 1, transformOrigin: "left"}, "+=0.5")

timeline.set(".Canvas-Middle", {visibility: "visible"})

//JS Editor
timeline.set(".JS-Green-Lines", {visibility: "visible"})

timeline.fromTo('.JS-Green-Lines', 1, {scaleX: 0.0, transformOrigin: "left"}, {scale: 1, transformOrigin: "left"})

//Canvas Animations Begin
timeline.fromTo('.Paint-Stripe', 1, {scaleY: 0.20, transformOrigin: "top"}, {scaleY: 1, transformOrigin: "top"})

timeline.fromTo('.Paint-Roller-Left', 1, {y: -55, transformOrigin: "bottom"}, {y: 0, transformOrigin: "bottom"}, "-=1")

//JS animation
timeline.set(".JS-Purple-Lines", {visibility: "visible"})

timeline.fromTo('.JS-Purple-Lines', 1, {scaleX: 0.0, transformOrigin: "right"}, {scale: 1, transformOrigin: "right"})

//canvas animation
timeline.fromTo('.Paint-Stripe2', 1, {scaleY: 0.20, transformOrigin: "top"}, {scaleY: 1, transformOrigin: "top"})

timeline.fromTo('.Paint-Roller-Right', 1, {y: -55, transformOrigin: "bottom"}, {y: 0, transformOrigin: "bottom"}, "-=1")

//JS Animation

timeline.set(".JS-Yellow-Lines", {visibility: "visible"})

timeline.fromTo('.JS-Yellow-Lines', 1, {scaleX: 0.0, transformOrigin: "left"}, {scale: 1, transformOrigin: "left"})

timeline.set(".Cat", {visibility: "visible"})

timeline.fromTo('.Cat', 1, {opacity: 0.0, transformOrigin: "center"}, {opacity: 1, transformOrigin: "center"})


