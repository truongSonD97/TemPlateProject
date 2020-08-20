export const loadState = ()=> {
  try {
    const serializedState = localStorage.getItem('persistState');
    if (serializedState === null) {
      return {}
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}
const whiteList = ['token', 'sidebar'];
export const saveState = (state)=> {
  try {
    const dupState = {}
    whiteList.map((key)=> dupState[key]=state[key])
    const serializedState = JSON.stringify(dupState);
    localStorage.setItem('persistState', serializedState);
  } catch(err) {
    console.log('saveState error', err);
  }  
}