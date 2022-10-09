
/* LOAD BODY CONTENT */
var content = `
<div id="console">
   <p class="console_title" onclick="manager('off')"> Console </p>
   <div class="config_propriety">
    
    <span class="config_name"> Sections </span>
    <div  class="console_input">
     <div id="sections" class="bar" onclick="propriety(this.id)"></div>
    </div> 
    
    <span class="config_name"> Accounts </span>
    <div  class="console_input">
     <div id="accounts" class="bar" onclick="propriety(this.id)"></div>
    </div>
    
    <span class="config_name"> Monetary </span>
    <div  class="console_input">
     <div id="monetary" class="bar" onclick="propriety(this.id)"></div>
    </div>
   </div>
  </div>
  
  <div id="popup"> </div>
  
  <div id="speak">
   <div id="box-dialog">
    <div id="box-exit" onclick="speak('disable')"> + </div>
    <img id="npc_icon" src="src/img/social/deviantart.png">
    <div id="npc_nametag"> NPCNAMETAG.TXT </div>
    <div id="buttom" onclick="administrator()"> LOG SISTEM </div>
    <div id="box-text"> 
     <input id="question" type="text" placeholder="O'que à na caixa de pandora?">
    </div>
   </div>
   <div id="backdrop"> </div>
  </div>
  
  <div id="top"> </div>
  
  <div class="page" id="page_house">
   <div id="house_home">
     
    <div id="author" onclick="manager('on')">
     <span id="name" onclick="manager('on')"> IMPERAZIM </span>
    </div>
    
    <span id="chika-popup">
     <img class="gif" src="src/img/chika_dance.gif" loop>
     <span class="gif_title"> 
      <span class="gif_name"> CHIKA_DANCE </span>
     </span>
    </span> 
    
    <section id="header">
     
     <span id="navbar">
      <h2 id="other" class="nav-option" onclick="sidebar(this.id)"><strong class="nav_button"></strong></h2>
      <h2 id="house" class="nav-option" onclick="sidebar(this.id)"><strong class="nav_button"></strong></h2>
      <h2 id="post" class="nav-option" onclick="sidebar(this.id)"><strong class="nav_button"></strong></h2>
      <h2 id="store" class="nav-option" onclick="sidebar(this.id)"><strong class="nav_button"></strong></h2>
      <h2 id="clients" class="nav-option" onclick="sidebar(this.id)"><strong class="nav_button"></strong></h2>
      <h2 id="social_ic" class="nav-option" onclick="sidebar(this.id)"><strong class="nav_button"></strong></h2>
     </span>
     
     <span onclick="player()" class="music started"> </span>
     
     <div id="header_background_loader">
      <span class="header_shadow"> </span>
      <img id="header_background" src="https://raw.githubusercontent.com/ImperaZim/ImperaZim/main/website/src/img/backgrounds/background_01.png">
      <img id="header_content" src="https://raw.githubusercontent.com/ImperaZim/ImperaZim/main/website/src/img/backgrounds/background_01.png">
      <span class="header_details"> </span>
     </div>
     <div id="header_background_00"> </div>
    </section>
    
    <section id="home">
     <!-- INFORMATION SECTION -->
     <div class="section-title">
      <!-- 
      <i class="fas fa-bell section-icon"></i> 
      -->
      <span class="section-font">
       <strong></strong>
      </span> 

      <audio id="player" controls loop>
       <source id="toggle" src="src/audio/chika_dance.mp3" type="audio/mpeg" autoplay loop>
      </audio> 

      <span id="lang_alert">
       <span class="title"> Select Your Language!</span> <br> <br>
       <span onclick="select('pt-br')" class="btn pt-br"> PT-BR </span>
       <span onclick="select('en-us')" class="btn en-us"> EN-US </span>
      </span>
       
      <span id="lang-pt" class="house-window" style="margin-top: 1em;">
      
       <span class="section-box">
        <span class="icone fas fa-sliders-h"></span>
        <span class="section-title"> AREA DE POSTAGEM </span> <br><br>
        
        <p class="section-content">
         <strong purple> ImperaZim: </strong> 
         Prazer me chamo <strong>ImperaZim</strong>, começei como designer no final de 2016 por hobby fazendo artes para amigos como forma de clarear a mente, mas só entrei de cabeça na area do freelancer por meados do final de 2019... Creio eu que seja um bom designer mas isso quem decide são meus clientes ne.
        </p>
        
        <p class="section-content">
         <strong purple> ImperaZim: </strong> 
         Nesse site/blog você podera encontrar meus trabalhos, projetos, meios de contato, entre muitas outras coisas;
         No momento talvez nem todas as coisas do site estejam em total funcionamento mas logo em breve eu irei adicionar tudo que não esta presente! 
        </p>
        
        <p class="section-content">
         <strong purple> ImperaZim: </strong> 
         Aviso bem rapido sobre a função de musica que no momento so e possivel ativar e desativar mas em breve sera possivel alterar a musica e volume de acordo com sua preferência! 
        </p>
        
       </span> 
      </span>
       
      <span id="lang-en" class="house-window" style="margin-top: 1em;">
      
       <span class="section-box">
        <span class="icone fas fa-sliders-h"></span>
        <span class="section-title"> POST'S SECTION </span> <br><br>
        
        <p class="section-content">
         <strong purple> ImperaZim: </strong> 
         Pleasure my name is <strong>ImperaZim</strong>, I started as a designer at the end of 2016 as a hobby making arts for friends as a way to clear my mind, but I only got into the freelancer area in the middle of the end of 2019... I believe I'm a good designer but that's up to my clients.
        </p>
        
        <p class="section-content">
         <strong purple> ImperaZim: </strong> 
         On this site/blog you will be able to find my works, projects, means of contact, among many other things;
         At the moment maybe not all things on the site are fully working but soon I'll add everything that isn't there!
        </p>
        
        <p class="section-content">
         <strong purple> ImperaZim: </strong> 
         Very quick warning about the music function that at the moment is only possible to activate and deactivate but soon it will be possible to change the music and volume according to your preference!
        </p>
        
       </span> 
      </span>
      
      <span id="arrows">
       <i class="fas fa-angle-left left"></i>
       <i class="fas fa-angle-right right"></i>
      </span>
      <span id="arts">
       <span class="art_header">
        <span class="header_name"> </span>
       </span> 
       <span class="art_content">
        <img class="art-option" src="https://raw.githubusercontent.com/ImperaZim/ImperaZim/main/website/src/img/works/header_background_01.png">
        <img class="art-option" src="https://raw.githubusercontent.com/ImperaZim/ImperaZim/main/website/src/img/works/header_background_02.png">
        <img class="art-option" src="https://raw.githubusercontent.com/ImperaZim/ImperaZim/main/website/src/img/works/header_background_03.png">
        <img class="art-option" src="https://raw.githubusercontent.com/ImperaZim/ImperaZim/main/website/src/img/works/header_background_04.png">
        <img class="art-option" src="https://raw.githubusercontent.com/ImperaZim/ImperaZim/main/website/src/img/works/header_background_05.png">
       </span>
      </span>
      <span id="game">
       <p class="game_title">
        <span class="title_text"> GAMES </span>
       </p>
       <span class="game_content">
        
        <div class="game_section">
         <span class="nickname">ImperaZim</span>
         <span class="avatar_level"> Advanced Rank Nv.55 (America Server) </span>
         <div class="button" onclick="speak('enable')"> </div>
         <img class="sticker" src="src/img/games/genshin_impact_sticker.png">
         <div class="char_content"> 
         </div>
         <img class="back" 
         src="src/img/games/genshin_impact_background.png"> 
        </div>
        
        <div class="game_section">
         <span class="nickname"> ImperaZim </span>
         <div class="avatar_level"> Capitain Rank Nv.70 (America Server) </div>
         <div class="char_content"> 
         </div>
         <img class="back" 
         src="src/img/games/honkai_impact_background.png"> 
        </div>
        
       </span>
      </span>
      
      <span id="client">
       <p class="client_header">
        <span class="header_title"> </span>
       </p>
       <span class="client_content">
        <img style="margin-left: 90px;" class="content-option" src="src/img/client/client_01.png">
        <img class="content-option" src="src/img/client/client_02.png">
        <img class="content-option" src="src/img/client/client_03.png">
        <img class="content-option" src="src/img/no_user_icon.png">
        <img class="content-option" src="src/img/no_user_icon.png">
        <img class="content-option" src="src/img/no_user_icon.png">
        <img class="content-option" src="src/img/client/client_01.png">
        <img class="content-option" src="src/img/client/client_02.png">
        <img class="content-option" src="src/img/client/client_03.png">
       </span>
      </span>
      
      <span id="footer"> </span>
     </div>
    </section>
   </div>
  </div>`;
document.getElementById('body').innerHTML += content;

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
