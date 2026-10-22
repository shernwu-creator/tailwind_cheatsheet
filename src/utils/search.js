/**
 * 輕量模糊搜尋：
 * 1. 支援 Class 名稱、CSS、中文說明、標籤與分類。
 * 2. 多個關鍵字以空白分隔，所有關鍵字都必須命中。
 * 3. 允許忽略連字號的模糊比對，例如 textsm 也能找到 text-sm。
 */
function normalize(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .toLowerCase()
}

function compact(value) {
  return normalize(value).replace(/[\s\-_/.:()[\]{}]+/g, '')
}

function isSubsequence(needle, haystack) {
  if (!needle || !haystack) return false
  let needleIndex = 0
  for (let index = 0; index < haystack.length && needleIndex < needle.length; index += 1) {
    if (haystack[index] === needle[needleIndex]) needleIndex += 1
  }
  return needleIndex === needle.length
}

function buildIndex(item, category) {
  const tagText = (item.tags || []).join(' ')
  return {
    className: normalize(item.className),
    classNameCompact: compact(item.className),
    css: normalize(item.css),
    cssCompact: compact(item.css),
    description: normalize(item.description),
    tags: normalize(tagText),
    category: normalize(
      `${category?.name || ''} ${category?.en || ''} ${category?.description || ''}`,
    ),
  }
}

function scoreToken(token, index) {
  const compactToken = compact(token)
  let score = 0

  const classPosition = index.className.indexOf(token)
  if (classPosition !== -1) {
    score = Math.max(score, 120 - classPosition + (classPosition === 0 ? 30 : 0))
  }

  if (compactToken && index.classNameCompact.includes(compactToken)) {
    const compactPosition = index.classNameCompact.indexOf(compactToken)
    score = Math.max(score, 100 - compactPosition + (compactPosition === 0 ? 20 : 0))
  }

  if (index.css.includes(token)) score = Math.max(score, 72)
  if (index.tags.includes(token)) score = Math.max(score, 58)
  if (index.description.includes(token)) score = Math.max(score, 38)
  if (index.category.includes(token)) score = Math.max(score, 26)

  if (score === 0 && compactToken.length >= 2) {
    if (isSubsequence(compactToken, index.classNameCompact)) {
      score = 18
    }
  }

  return score
}

export function searchClasses(items, rawQuery, categories = []) {
  const query = normalize(rawQuery).trim()
  if (!query) return items

  const categoryMap = new Map(categories.map((category) => [category.id, category]))
  const tokens = query.split(/\s+/).filter(Boolean)

  return items
    .map((item, order) => {
      const index = buildIndex(item, categoryMap.get(item.category))
      let score = 0

      for (const token of tokens) {
        const tokenScore = scoreToken(token, index)
        if (tokenScore === 0) return null
        score += tokenScore
      }

      return { item, score, order }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .map((entry) => entry.item)
}

export { normalize, compact }
