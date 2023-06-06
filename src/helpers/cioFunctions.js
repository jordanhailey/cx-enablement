export function trackClickEvent(title="clickEvent",data={}) {
  window._cio.track(title,data)
}