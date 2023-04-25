const golfScore = require('./golf-code')
const assert = require('assert')

describe('Tests', function () {
  it('golfScore(4, 1) should return "Hole-in-one!"', function () {
    assert(golfScore(4, 1) === 'Hole-in-one!')
  })
  it('golfScore(4, 2) should return "Eagle"', function () {
    assert(golfScore(4, 2) === 'Eagle')
  })
  it('golfScore(5, 2) should return "Eagle"', function () {
    assert(golfScore(5, 2) === 'Eagle')
  })
  it('golfScore(4, 3) should return "Birdie"', function () {
    assert(golfScore(4, 3) === 'Birdie')
  })
  it('golfScore(4, 4) should return "Par"', function () {
    assert(golfScore(4, 4) === 'Par')
  })
  it('golfScore(1, 1) should return "Hole-in-one!"', function () {
    assert(golfScore(1, 1) === 'Hole-in-one!')
  })
  it('golfScore(5, 5) should return "Par"', function () {
    assert(golfScore(5, 5) === 'Par')
  })
  it('golfScore(4, 5) should return "Bogey"', function () {
    assert(golfScore(4, 5) === 'Bogey')
  })
  it('golfScore(4, 6) should return "Double Bogey"', function () {
    assert(golfScore(4, 6) === 'Double Bogey')
  })
  it('golfScore(4, 7) should return "Go Home!"', function () {
    assert(golfScore(4, 7) === 'Go Home!')
  })
  it('golfScore(5, 9) should return "Go Home!"', function () {
    assert(golfScore(5, 9) === 'Go Home!')
  })
})
