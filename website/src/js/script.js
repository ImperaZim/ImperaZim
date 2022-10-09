

/* VARIABLES */

var lenght = 'none';
let storage = window.localStorage;
var author = document.getElementById('author');
var source = document.getElementById('player');
var client = document.getElementById('client');
var footer = document.getElementById('footer');
var bar = document.getElementsByClassName('bar');
var navegation = document.getElementById('navbar'); 
var music = document.getElementsByClassName('music'); 
var main_english = document.getElementById('lang-en');
var chika_dance = document.getElementById('chika-popup'); 
var main_portuguese = document.getElementById('lang-pt');
var main_works_button = document.getElementById('arrows');
var nav_id = document.getElementsByClassName('nav-option');
var main_select_lang = document.getElementById('lang_alert');
var header_content = document.getElementById('header_content');
var text_title = document.getElementsByClassName('title_text'); 
var main_works = document.getElementsByClassName('header_name'); 
var work_header = document.getElementsByClassName('art_header');
var work_content = document.getElementsByClassName('art_content'); 
var game_section = document.getElementsByClassName('game_section'); 
var client_src = document.getElementsByClassName('client_content');
var main_content = document.getElementsByClassName('house-window');
var main_clients = document.getElementsByClassName('header_title');
var navegation_btn = document.getElementsByClassName('nav_button'); 
var header_background = document.getElementById('header_background');



/* CONSTANTS */

const section = [footer, client, navegation, main_works[0],  client_src[0], work_header[0], work_content[0], navegation_btn[0], main_works_button, text_title[0], game_section[0], game_section[1]]; 
default_number = 0; 



/* CLASS LANGUAGE */
 
class Language {
 set(option){
  switch (option) {
   case 'none':
    while(default_number < (section.length)){
     section[default_number].style.opacity = 0;
     default_number = default_number + 1;
    }
    default_number = 0;
    main_content[0].style.opacity = 0; 
    main_content[1].style.opacity = 0; 
    break;
   case 'pt-br':
    navegation_btn[0].innerHTML = "OFF";
    main_select_lang.style.opacity = "0";
    main_portuguese.style.opacity = "100";
    main_works[0].innerHTML = "TRABALHOS";
    main_clients[0].innerHTML = "CLIENTES";
    navegation_btn[1].innerHTML = "Inicio";
    navegation_btn[5].innerHTML = "Social"; 
    navegation_btn[0].style.opacity = "100";
    navegation_btn[4].innerHTML = "Clientes";
    navegation_btn[2].innerHTML = "Postagens";
    navegation_btn[3].innerHTML = "Trabalhos";
    main_content[1].style.position = "absolute";
    main_select_lang.style.position = "absolute";
    while(default_number < (section.length)){
     section[default_number].style.opacity = 100;
     default_number = default_number + 1;
    }
    break;
   case 'en-us':
    console.log(option); 
    main_works[0].innerHTML = "WORKS";
    main_english.style.opacity = "100";
    navegation_btn[0].innerHTML = "OFF";
    navegation_btn[1].innerHTML = "Home";
    main_select_lang.style.opacity = "0";
    main_clients[0].innerHTML = "CLIENTS";
    navegation_btn[2].innerHTML = "Posts";
    navegation_btn[3].innerHTML = "Works"; 
    navegation_btn[5].innerHTML = "Social"; 
    navegation_btn[4].innerHTML = "Clients";
    navegation_btn[0].style.opacity = "100";
    main_content[0].style.position = "absolute"; 
    main_select_lang.style.position = "absolute";
    while(default_number < (section.length )){
     section[default_number].style.opacity = 100;
     default_number = default_number + 1;
    }
    break;
  }
  return this;
 }
 speak(bool){
  if(localStorage.getItem("permission") == "master") {
   bool = "adm";
  }
  switch(bool){
   case 'enable':
    document.getElementById('speak').style.zIndex = "7";
    document.getElementById('speak').style.opacity = "100";
    document.getElementById('box-dialog').style.bottom = "0px";
    break;
   case 'disable':
    document.getElementById('speak').style.zIndex = "-1";
    document.getElementById('speak').style.opacity = "0";
    document.getElementById('box-dialog').style.bottom = "-570px";
    break;
  }
 }
 popup(text){
  setTimeout(function() {
   document.getElementById('popup').innerHTML = text;
   document.getElementById('popup').style.opacity = "100";
  }, 0);
  setTimeout(function() {
   document.getElementById('popup').innerHTML = "";
   document.getElementById('popup').style.opacity = "0";
   document.getElementById('popup').style.transition = ".5s linear";
  }, 3000);
 }
}



/* CLASS MUSIC */

class Music {
 play(){
  source.volume = 0.2; 
  chika_dance.style.opacity = "100";
  storage.setItem("music", "enable");    
  navegation_btn[0].innerHTML = "ON";
  if(lenght == 'en-us'){ music[0].innerHTML = "Music (on)"; }
  if(lenght == 'pt-br'){ music[0].innerHTML = "Musica (on)"; }
  return this;
 }
 pause(){
  source.volume = 0; 
  chika_dance.style.opacity = "0";
  storage.setItem("music", "disable");
  navegation_btn[0].innerHTML = "OFF";
  if(lenght == 'en-us'){ music[0].innerHTML = "Music (off)"; }
  if(lenght == 'pt-br'){ music[0].innerHTML = "Musica (off)"; }
  return this;
 }
}



/* LISTENER CLASS */

class EventListener {
 addClass(element, className){ element.className += className }
 removeClass(element, className) {
  var oldClasses  = element.className,
  oldClassesArray = oldClasses.split(" "),
  newClassesArray = [],
  newClasses;
  var currentClassChecked, i;     
  for ( i = 0; i < oldClassesArray.length; i++ ) { 
   currentClassChecked = oldClassesArray[i];
   if( currentClassChecked !== className ) { 
    newClassesArray.push(currentClassChecked);
   }
  }
  newClasses = newClassesArray.join(" ");
  element.className = newClasses;
  return element;
 } 
}



/* IMPORT CLASS */

var sound = new Music();
var lang = new Language();
var listener = new EventListener();



/* MAIN FUNCTION */

select('none');
sidebar('house');
propriety("sections") ;
storage.setItem("music", "enable"); sound.pause(); 

function select(id){ lang.set(id); }
function speak(id){ lang.speak(id); }
function player(){ 
 if(localStorage.getItem("music") == "disable") { sound.play();
 }else{ sound.pause(); }
} 
function sidebar(id){
 if(id == "social_ic" || id == "contact"){ alert("soon"); }else{
  if(id != "other"){
   for (i = 0; i < nav_id.length; i++){listener.removeClass(nav_id[i], "nav-active");}
   listener.addClass(document.getElementById(id), " nav-active"); 
  } 
 }
 if(id == "other") player();
 if(id == "house") location.replace('#top');
 if(id == "post") location.replace('#');
 if(id == "store") location.replace('#arts');
 if(id == "clients") location.replace('#client');
}  

function manager(type){
 if(localStorage.getItem("permission") == "master"){
  if(type == 'on'){
   document.getElementById('navbar').style.zIndex = "0";
   document.getElementById('author').style.opacity = "0";
   document.getElementById('console').style.zIndex = "10";
   document.getElementById('console').style.opacity = "100";
   document.getElementById('console').style.position = "fixed";
  }else{
   document.getElementById('navbar').style.zIndex = "7";
   document.getElementById('console').style.zIndex = "0";
   document.getElementById('console').style.opacity = "0";
   document.getElementById('console').style.opacity = "0";
   document.getElementById('author').style.opacity = "100";
   document.getElementById('console').style.position = "absolute";
  }
  if(type == 'on'){

  }else{
  }
 }
  
}

function administrator() {
 var question = document.getElementById('question');
 if(question.value === "Caos" || question.value === "caos"){
  lang.speak('disable');
  storage.setItem("permission", "master"); 
  alert("permissão de administrator adquirida!!!!");
 }else{
  lang.popup("Me parece que você não sabe a resposta para o (Caos)")
 }
}

function propriety(id) {
 bar = document.getElementById(id).classList;
  if(bar[0] == "bar"){
   if(bar[1] != "active"){
    listener.addClass(document.getElementById(id), " active");
   }else{
    listener.removeClass(document.getElementById(id), "active") 
   }
  }
}
