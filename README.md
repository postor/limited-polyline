# limited-polyline
limit polyline points and keep the shape as possible | 在尽量保持形状的情况下限制 polyline 点的数量

use case: draw track for moving thing on map, avoid costing too much memory

场景：在地图上绘制运动物体的实时轨迹，避免占用内存过多内存

## usage | 使用

```
let line = new LimitedPolyline([...points],5000)
line.push([x,y]) // add to end, if total points larger than limit drop one | 追加到末尾，如果总点数超出限制则丢掉一个不起眼的点
line.shift() // shift first | 取出队头

```
