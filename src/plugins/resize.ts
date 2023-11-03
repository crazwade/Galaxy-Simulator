// src/plugins/resize.ts
export default function setFontSize() {
  // 獲取視窗的寬度和高度
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // 計算基礎字體大小。這裡我們假設基礎字體大小為視窗寬度的 1% 和視窗高度的 2% 的平均值
  const baseFontSize = (width * 0.01 + height * 0.02) / 2;

  // 將基礎字體大小設定為 HTML 元素的字體大小
  document.documentElement.style.fontSize = baseFontSize + "px";
}
