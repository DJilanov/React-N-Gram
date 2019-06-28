import * as actions from './index'

const ngrams = {
  "He": 1,
  "el": 1,
  "ll": 1,
  "lo": 1
}

describe('ngrams actions', () => {
  it('addNgrams should create FETCH_NGRAMS action', () => {
    expect(actions.getNgrams(text)).toEqual({
      method: 'GET',
      type: 'FETCH_NGRAMS'
    })
  })
  it('setNgrams should create SET_NGRAMS action', () => {
    expect(actions.setNgrams(ngrams)).toEqual({
      type: 'SET_NGRAMS',
      ngrams: ngrams
    })
  })
})
