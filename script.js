const messages = [
  "あなたには無限の可能性があります。",
  "小さな一歩が大きな成果へと繋がります。",
  "あなたの笑顔が周りの人を幸せにします。",
  "困難は成長へのチャンスです。",
  "自分を信じて前に進みましょう。",
  "今日は素晴らしいアイデアが浮かぶかもしれない！",
  "心の声に耳を傾けてみてください。"
];

const card = document.getElementById('card');
const messageElement = document.getElementById('message');

card.addEventListener('click', function(){
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
  card.classList.toggle('flipped');
});
