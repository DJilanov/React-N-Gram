import ngrams from './ngrams'

const ngrams = {
  "He": 1,
  "el": 1,
  "ll": 1,
  "lo": 1
}

describe('inbox reducer', () => {
  it('should handle initial state', () => {
    expect(
      ngrams(undefined, {})
    ).toEqual({})
  })

  it('should handle FETCH_NGRAMS', () => {
    expect(
      ngrams({}, {
        type: 'FETCH_NGRAMS'
      })
    ).toEqual({})
  })

  it('should handle SET_NGRAMS', () => {
    expect(
      ngrams({}, {
        type: 'SET_NGRAMS',
        ngrams: ngrams
      })
    ).toEqual(ngrams)
  })
})
