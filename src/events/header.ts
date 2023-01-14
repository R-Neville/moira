export function dispatchToggleMenuActive(active: boolean) {
  const event = new CustomEvent("toggle-menu-active", {
    bubbles: true,
    detail: {
      active,
    }
  });
  document.dispatchEvent(event);
}