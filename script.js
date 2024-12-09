let state = 0; 
// state=0:裏面表示中
// state=1:表面(次へボタン表示)
// state=2:詳細ページ表示

const card = document.getElementById('card');
const nextButton = document.getElementById('nextButton');
const detailPage = document.getElementById('detailPage');
const container = document.getElementById('container');

// デバッグ用ログ
console.log('初期state=', state);

card.addEventListener('click', function(){
  if (state === 0) {
    console.log('カードを裏→表へ');
    card.classList.add('flipped');
    nextButton.classList.remove('hidden');
    state = 1;
    console.log('state=', state);
  } else if (state === 1) {
    // state=1ではカードクリックしても変化なし。
    console.log('表面でカードクリック。状態=1なので変化なし');
  }
});

nextButton.addEventListener('click', function(e){
  e.stopPropagation();
  if (state === 1) {
    console.log('"次へ"ボタンクリック、詳細ページへ移行');
    container.classList.add('hidden');
    detailPage.classList.remove('hidden');
    detailPage.classList.add('show');
    state = 2;
    console.log('state=', state);
  }
});
