import LimitedPolyline from "..";
import { squaredDistance2D } from "../distance-functions/2d";

test('basic', () => {

  let line = new LimitedPolyline<{ x: number, y: number }>((a, b, c) => {
    return squaredDistance2D([a.x, a.y], [b.x, b.y], [c.x, c.y])
  }, 10)

  for (let i = 0; i < 5; i++) {
    line.add({ x: i, y: i })
  }
  let target = []
  for (let i = 5; i < 20; i++) {
    let p = { x: i, y: i % 2 ? i : -i }
    line.add(p)
    target.push(p)
  }
  target = target.slice(target.length - 9)
  target.unshift({ x: 0, y: 0 })
  let result = [...line.iterator()]
  // console.log(target,result)
  expect(result).toStrictEqual(target)

  // expect(1).toBe(1)
})

