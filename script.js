let state = 0; 
// state=0:裏面表示, state=1:表面(次へボタン), state=2:詳細ページ表示

const card = document.getElementById('card');
const nextButton = document.getElementById('nextButton');
const detailPage = document.getElementById('detailPage');
const container = document.getElementById('container');

card.addEventListener('click', function(){
  if (state === 0) {
    // 1回目クリック：カードをひっくり返して表面を表示＆次へボタン表示
    card.classList.add('flipped');
    nextButton.classList.remove('hidden');
    state = 1;
  } else if (state === 1) {
    // 表面が表示された状態でカードをクリックしても特に変化させない
    // ここでは"次へ"ボタンがあるため、カードクリックは無視してもいい
  }
});

// 次へボタンクリックで詳細ページへ移行
nextButton.addEventListener('click', function(e){
  e.stopPropagation(); // ボタンクリック時にカードクリックイベントが反応しないように
  if (state === 1) {
    // 次へを押したらdetail-pageを表示し、カードやcontainerは非表示に
    container.classList.add('hidden');
    detailPage.classList.remove('hidden');
    state = 2;
  }
});
