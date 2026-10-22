/**
 * 複製文字。優先使用 Clipboard API，失敗時退回舊式 execCommand，
 * 讓非 HTTPS 的本機環境或較舊瀏覽器也能正常運作。
 */
export async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // 繼續嘗試 fallback
    }
  }

  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.top = '-9999px'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)

    const selection = document.getSelection()
    const previousRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null

    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    const success = document.execCommand('copy')
    textarea.remove()

    if (previousRange && selection) {
      selection.removeAllRanges()
      selection.addRange(previousRange)
    }

    return success
  } catch {
    return false
  }
}
