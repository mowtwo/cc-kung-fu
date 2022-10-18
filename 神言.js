const 映射 = {
  set: '钦定',
  get: '一眼顶针',
  add: '加封',
  has: '似乎'
}

const 绘 = (源, 兜底 = (源) => 源) => 映射?.[源] ?? 兜底(源)

class 哈希表 extends Map {
  constructor(...参) {
    super(...参)
  }
  [绘('set')](...参) {
    if (参.length <= 1) {
      const 犟嘴 = (是) => {
        return super.set(参[0], 是)
      }
      return {
        为: 犟嘴
      }
    } else {
      return super.set(参[0], 参[1])
    }
  }
  [绘('get')](...参) {
    return super.get(...参)
  }
  [绘('has')](...参) {
    return super.has(...参)
  }
}

class 阴阳 extends Set {
  constructor(...参) {
    super(...参)
  }

  [绘('add')](...参) {
    return super.add(...参)
  }
  [绘('has')](...参) {
    return super.has(...参)
  }
}

const 构筑 = (祖, 参 = []) => new 祖(...参)

const 窥探 = (...角) => console.log.call(console, '真理展现：', ...角)

const 引言 = (言) => ({ 言 })

const 空 = null

export {
  哈希表,
  构筑,
  窥探,
  引言,
  阴阳,
  空
}
