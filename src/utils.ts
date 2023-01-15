export function applyStyles(el: HTMLElement, styles: CSSStyleDeclaration) {
  for (let s in styles) {
    el.style[s] = styles[s];
  }
}