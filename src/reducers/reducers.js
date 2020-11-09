const initialState = {
  data: [
    {
      title: 'Current Month',
      ranges: [10, 20, 40],
      forecast: 10,
      minValue: '1.6k',
      maxValue: '2.4k',
      newRanges: []
    },
    {
      title: 'Current Quarter',
      ranges: [20, 10, 40],
      forecast: 30,
      minValue: '1.6k',
      maxValue: '2.4k',
      newRanges: []
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANGES_GRAPH': {
      return {
        data: action.payload
      }
    }

    default:
      return state
  }
};

export default reducer;
