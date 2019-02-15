$(document).ready(function() {
    // run function on initial page load
    studentHeight();
    menuSlide();
    clickableDiv();
    animateDiv();
    // printLink();
    limit();
    // run function on resize of the window
    $(window).resize(function() {
      studentHeight();
    });
    // run function on scroll
    $(window).scroll();
});

var textHeight = $('.student h2').outerHeight();

function studentHeight() {
  var headHeight = $('header').outerHeight();
  var pageHeight = $(window).height();
  var height = ((pageHeight - headHeight) / 4);
  var topPadding = ((height - textHeight) / 2);
  $('.student').css("height", height);
  $('.menu-list').css("height", (height * 4));
  $('.student h2').css("padding-top", topPadding);
}

function menuSlide() {
  $('.menu-icon').click(function() {
    $('body').toggleClass('lock-y');
    $('.hamburger').toggleClass('is-active');
    $('.menu-list').toggleClass('menu-animate', 500);
  });
}

function clickableDiv() {
  $('.student').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}

// function printLink() {
//   var url = $(location).attr('href');
//   console.log(date);
//   $('#page-url').text(url);
// }

var h = $(window).height() - 50;
var w = $(window).width() - 50;

function makeNewPositionA(){
    var nha = Math.floor(Math.random() * h);
    var nwa = Math.floor(Math.random() * w);
    return [nha,nwa];
    $('.bouncey-a').css("top", nha);
    $('.bouncey-a').css("left", nwa);
}
function makeNewPositionB(){
    var nhb = Math.floor(Math.random() * h);
    var nwb = Math.floor(Math.random() * w);
    return [nhb,nwb];
    $('.bouncey-b').css("top", nhb);
    $('.bouncey-b').css("left", nwb);
}
function makeNewPositionC(){
    var nhc = Math.floor(Math.random() * h);
    var nwc = Math.floor(Math.random() * w);
    return [nhc,nwc];
    $('.bouncey-c').css("top", nhc);
    $('.bouncey-c').css("left", nwc);
}
function makeNewPositionD(){
    var nhd = Math.floor(Math.random() * h);
    var nwd = Math.floor(Math.random() * w);
    return [nhd,nwd];
    $('.bouncey-d').css("top", nhd);
    $('.bouncey-d').css("left", nwd);
}

function animateDiv(){
  var newqa = makeNewPositionA();
  var newqb = makeNewPositionB();
  var newqc = makeNewPositionC();
  var newqd = makeNewPositionD();
  $('.bouncey-a').animate({ top: newqa[0], left: newqa[1] }, 500, function(){
    animateDiv();
  });
  $('.bouncey-b').animate({ top: newqb[0], left: newqb[1] }, 1000, function(){
    animateDiv();
  });
  $('.bouncey-c').animate({ top: newqc[0], left: newqc[1] }, 2000, function(){
    animateDiv();
  });
  $('.bouncey-d').animate({ top: newqd[0], left: newqd[1] }, 3000, function(){
    animateDiv();
  });
  $(window).click(function(){
    $('.bouncey-a').stop();
    $('.bouncey-b').stop();
    $('.bouncey-c').stop();
    $('.bouncey-d').stop();
  })
}

function limit(){
  var limits = ["only black and white","no type","no pictures","no black and white","5 demands from neighbor","10 transitions - 1:30","black, white, 1 color","3 typefaces - 1:30","3d","flat design","make it ugly","only stock images","5 self made sfx","all hand done/drawn","stop motion","make it swiss","use 5 ae fx","old book illustration .com","cubism.","no straight lines","must have a photograph of a banana","only outlines or strokes, no fills - 4:30","pixel art - 4:30","the final video is played backwards"];
  var rand = Math.floor(Math.random() * limits.length);
  var limit = limits[rand];
  console.log(rand);
  console.log(limit);
  $('.limit').text(limit);
}
