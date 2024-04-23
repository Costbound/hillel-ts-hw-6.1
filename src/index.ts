interface IType1 {
  [key: string]: number | string
}

interface IType2 {
  [key: string]: (...args: number[]) => number
}

interface IType3 {
  [key: number]: string
}

interface IType4 {
  [key: string]: string | number | ((param?: string | number) => string | number | void)
  name: string
  surname: string
  age: number
}

interface IType5 {
  [key: string]: string | number
}
interface IType55 extends IType5 {
  fullname: string
  age: number
}

interface IType6 {
  [key:string]: number
}
function checkKeys(obj: IType6): boolean {
  const values: number[] = Object.values(obj)
  return values.length > 0 ? values.every((value: number): boolean => typeof value === 'number') : false
}