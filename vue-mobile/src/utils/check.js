﻿const dateToFormat = date => {
  date
    .toLocaleString('en-US', {
      hour12: false
    })
    .replace(/\b\d\b/g, '0$&')
    .replace(new RegExp('/', 'gm'), '-')
}
const forMatToDate = date => {
  const dateArr = date.split(':')
  return new Date(2017, 10, 19, dateArr[0], dateArr[1], dateArr[2])
}
const obtainNowDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minu = date.getMinutes()
  const second = date.getSeconds()
  const arr = [month, day, hours, minu, second]
  arr.forEach(item => {
    item < 10 ? '0' + item : item
  })
  return (
    year +
    '-' +
    arr[0] +
    '-' +
    arr[1] +
    ' ' +
    arr[2] +
    ':' +
    arr[3] +
    ':' +
    arr[4]
  )
}
const returnTimestamp = strTime => {
  const middleDate = new Date(Number(strTime))
  return middleDate
    .toLocaleString('zh-CN', {
      hour12: false
    })
    .replace(/\b\d\b/g, '0$&')
    .replace(new RegExp('/', 'gm'), '-')
}
const compareOneLessTwo = (dateOne, dateTwo) => {
  return (
    Number(dateOne.replace(/\-/g, '')) < Number(dateTwo.replace(/\-/g, ''))
  )
}
const judgeArr = arr => {
  if (Array.isArray(arr)) {
    return true
  }
}
const removeRepeatArr = arr => {
  return Array.from(new Set(arr))
}
const orderAscendArr = arr => {
  arr.sort((a, b) => {
    return a - b
  })
}
const allArrSatisfact = (arr, compare, value) => {
  return arr.every(arr => {
    return arr + compare + value
  })
}
const judgeNum = num => {
  if (typeof num1 === 'number') {
    return true
  } else {
    return false
  }
}
const judgeNumOrLetter = data => {
  const reg = /^[0-9a-zA-Z]*$/g
  if (reg.test(data)) {
    return true
  }
}
const trimLeftOrRight = str => {
  return str.replace(/(^s)|(s$)/g, '')
}
const isObjectEqual = (oneData, twoData) => {
  const twoFlag = JSON.stringify(oneData) === JSON.stringify(twoData)
  if (twoFlag) {
    return true
  } else {
    return false
  }
}
const checkAgent = () => {
  var u = navigator.userAgent
  var Agent = ''

  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或者uc浏览器
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    Agent = 'Android'
  } else if (isiOS) {
    Agent = 'IOS'
  }
  return Agent
}
export {
  dateToFormat,
  forMatToDate,
  obtainNowDate,
  returnTimestamp,
  compareOneLessTwo,
  judgeArr,
  removeRepeatArr,
  orderAscendArr,
  allArrSatisfact,
  judgeNum,
  judgeNumOrLetter,
  trimLeftOrRight,
  isObjectEqual,
  checkAgent
}
