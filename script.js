let state = 0; 
// state=0:裏面表示中
// state=1:表面+次へボタン
// state=2:詳細ページ表示

const card = document.getElementById('card');
const nextButton = document.getElementById('nextButton');
const detailPage = document.getElementById('detailPage');
const container = document.getElementById('container');

card.addEventListener('click', function(){
  if (state === 0) {
    // カードをひっくり返す（裏→表）
    card.classList.add('flipped');
    // 次へボタン表示
    nextButton.classList.remove('hidden'); 
    state = 1;
  } else if (state === 1) {
    // state=1でカードを再クリックしても特に変化なし
    // "次へ"ボタンを押すまで待つ
  }
});

nextButton.addEventListener('click', function(e){
  e.stopPropagation(); 
  if (state === 1) {
    // 次へボタン押下で詳細ページへ
    container.classList.add('hidden');
    detailPage.classList.remove('hidden');
    detailPage.classList.add('show'); // 拡大アニメーション発動
    state = 2;
  }
});
