let state = 0; 
const card = document.getElementById('card');
const nextButton = document.getElementById('nextButton');
const detailPage = document.getElementById('detailPage');
const container = document.getElementById('container');

card.addEventListener('click', function(){
  if (state === 0) {
    card.classList.add('flipped');
    nextButton.classList.remove('hidden'); 
    state = 1;
  } else if (state === 1) {
    // state=1ではカードクリックしても変化なし
  }
});

nextButton.addEventListener('click', function(e){
  e.stopPropagation(); 
  if (state === 1) {
    container.classList.add('hidden');
    detailPage.classList.remove('hidden');
    detailPage.classList.add('show');
    state = 2;
  }
});
