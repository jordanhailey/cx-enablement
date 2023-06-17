export function trackClickEvent(title="clickEvent",data={}) {
  if (window._cio?.track) {
  window._cio.track(title,data)
  }
  if (window.analytics?.track) {
    window.analytics.track(title,data)
      // .then(function clicked(e){ // optionally, do something after event was sent
      //   console.log("Click logged",e)
      // })
  }
}