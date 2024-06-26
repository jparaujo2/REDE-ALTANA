$(document).ready(function() {
    // Adiciona animaÃ§Ã£o ao tÃ­tulo apÃ³s 500ms
    setTimeout(function() {
      $('.animated-title').addClass('animated');
    }, 500);
    // Adiciona animaÃ§Ã£o ao conteÃºdo apÃ³s 1000ms
    setTimeout(function() {
      $('.animated-content').addClass('animated');
    }, 1000);
  })