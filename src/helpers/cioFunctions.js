export function trackClickEvent(title="clickEvent",data={}) {
  if (window._cio) {
  window._cio.track(title,data)
  }
  if (window.analytics) {
    window.analytics.track(title,data)
      // .then(function clicked(e){ // optionally, do something after event was sent
      //   console.log("Click logged",e)
      // })
  }
}