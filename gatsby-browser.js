/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const loadExternalStyles = url => {
  const styles = document.createElement("link")
  styles.rel = "stylesheet"
  styles.href = url
  styles.type = "text/css"
  document.head.appendChild(styles)
}

export const onClientEntry = () => {
  window.onload = () => {
    loadExternalStyles(
      // Load cm-webfonts
      "https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts.css"
    )
  }
}
