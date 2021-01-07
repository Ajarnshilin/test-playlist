export function storePlaylists(state = [], action) {
    switch (action.type) {
      case 'ADDPLAYLIST':
        return [...state, { name: action.name, song : action.song }]
      case 'EDITSONG':
        let newState = Object.assign([], state)
        let stateUpdate = newState.find(element => element.name === action.name)
        stateUpdate.song = action.song
        const index = newState.indexOf(element => element.name === action.name)
        newState[index] = stateUpdate
        return [...newState]
      default:
        return state
    }
  }