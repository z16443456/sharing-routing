var arr = [
  {
    v: 99,
    name: 'a'
  },
  {
    v: 28,
    name: 'b'
  },
  {
    v: 1,
    name: 'c'
  },
  {
    v: 100,
    name: 'd'
  }
]
arr.sort(function (a, b) {
  if (a.v > b.v) {
    return 1
  } else if (a.v < b.v) {
    return -1
  } else {
    return 0
  }
})
console.log(arr)