# limited-polyline
limit polyline points and keep the shape as possible | 在尽量保持形状的情况下限制 polyline 点的数量

use case: draw track for moving thing on map, avoid costing too much memory

场景：在地图上绘制运动物体的实时轨迹，避免占用内存过多内存
[![https://youtube.com/shorts/unsaPHuP1Dk](https://img.youtube.com/vi/unsaPHuP1Dk/hqdefault.jpg)](https://youtube.com/shorts/unsaPHuP1Dk)

example: 

- limited: https://codesandbox.io/s/leaflet-limited-track-kkoud9
- full: https://codesandbox.io/s/leaflet-full-track-v5dtbp

## usage | 使用

API:
```
class LimitedPolyline<T extends {}> {
  constructor(distanceFn: (p1: T, pMidF: T, p3: T) => number, limit?: number, points?: T[]);
  add(point: T): void;
  iterator(): Generator<T, void, unknown>;
  removeNearest(): void;
}
```

example
```
import LimitedPolyline from 'limited-polyline'
let lp = new LimitedPolyline(distance, 10000);
line.add([x,y]) // add to end, if total points larger than limit drop one | 追加到末尾，如果总点数超出限制则丢掉一个不起眼的点

```

## example | 示例

完整轨迹，没有使用 limited-polyline 直接绘制 polyline
https://codesandbox.io/s/leaflet-full-track-v5dtbp?file=/src/index.js
