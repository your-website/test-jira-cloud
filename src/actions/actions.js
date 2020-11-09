import { SET_RANGES_GRAPH } from './types'

const setRangesGraph = (newRanges) => {
  return {
    type: SET_RANGES_GRAPH,
    payload: newRanges
  }
}

export { setRangesGraph }