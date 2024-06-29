// получим внутреннюю ширину окна в пикселях
let widthWin = window.innerWidth;
// получим внутреннюю высоту окна в пикселях
let heightWin = window.innerHeight;
let argWin = [widthWin, heightWin];
// window.onresize = calcWin;
// window.addEventListener('resize', calcWin);

export function calcWin() {
  widthWin = window.innerWidth;
  heightWin = window.innerHeight;
  return argWin = [widthWin, heightWin];
}

export { argWin };

// Скрол - кол-во прокрученых пикселей

export function topScroll() {
  return window.scrollY + 'px';
}