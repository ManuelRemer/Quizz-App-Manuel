export function pushFieldset(fieldsetObjekt) {
  let fieldsets
  const storageFieldsets = JSON.parse(localStorage.getItem('fieldsets'))
  if (storageFieldsets === null) {
    fieldsets = []
  } else {
    fieldsets = storageFieldsets
  }
  fieldsets.push(fieldsetObjekt)
  localStorage.setItem('fieldsets', JSON.stringify(fieldsets))
}

export function getFieldset() {
  let fieldsets
  const storageFieldsets = JSON.parse(localStorage.getItem('fieldsets'))
  if (storageFieldsets === null) {
    fieldsets = []
  } else {
    fieldsets = storageFieldsets
  }
  return fieldsets
}

export function itemsStringToArray(itemsString) {
  const itemsArray = itemsString.split(',')
  return itemsArray
}
