export const search = makeAction('SEARCH')
export const detail = makeAction('DETAIL')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
