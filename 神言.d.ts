type 啥也不是 = null

type 啥也没有 = undefined

type 管它是啥 = void

type 也许是 = boolean

type 那必然是 = true

type 那不可能 = false

export class 哈希表<键, 值> {
  钦定(圣: 键): { 为(体: 值): 管它是啥 }
  钦定(圣: 键, 体: 值): 管它是啥

  一眼顶针(圣: 键): 值 | 啥也没有

  似乎(圣: 键): 也许是
}

export class 阴阳<值> {
  加封(鱼: 值): 管它是啥

  似乎(圣: 值): 也许是
}

export function 构筑<类>(ctor: new () => 类): 类

export function 窥探(...args: unknown[]): void

export function 引言<T>(言: T): { 言: T }

export const 空: 啥也不是
