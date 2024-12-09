let state = 0; // 0:裏面, 1:表面(次へボタン), 2:詳細ページ
const card = document.getElementById('card');
const nextButton = document.getElementById('nextButton');
const detailPage = document.getElementById('detailPage');
const container = document.getElementById('container');

card.addEventListener('click', function(){
  if (state === 0) {
    card.classList.add('flipped');
    nextButton.classList.remove('hidden'); 
    state = 1;
  }
});

// "次へ"ボタンクリック
nextButton.addEventListener('click', function(e){
  e.stopPropagation();
  if (state === 1) {
    container.classList.add('hidden');
    detailPage.classList.remove('hidden');
    detailPage.classList.add('show'); // アニメーション発動のためのクラス追加
    state = 2;
  }
});
