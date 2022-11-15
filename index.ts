import * as _ from "lodash"

async function hello() {
  return "world"
}

const url = new URL("...")

let lucky: number

// lucky = '23'
lucky = 23

type Style = "bold" | "italic" | 23

let font: Style
font = 23

interface Person {
  first: string
  last: string
  [key: string]: any
}

const person: Person = {
  first: "Jeff",
  last: "Delaney"
}

const person2: Person = {
  first: "Usain",
  last: "Bolt",
  fast: true
}

function pow(x: number, y: number): void {
  Math.pow(x, y).toString()
}

pow(5, 10)

// Arrays

//Tuple
type MyList = [number?, string?, boolean?]

const arr: MyList = []

arr.push(1)
arr.push("23")
arr.push(false)

//Generics

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>
let y: Observable<Person>
let z = new Observable(23)
