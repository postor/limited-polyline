import DLSTree, { INode } from "double-linked-sorted-tree";

export class LimitedPolyline<T extends {}> {
  private tree = new DLSTree<any>()

  constructor(
    private distanceFn: (p1: T, pMidF: T, p3: T) => number,
    private limit: number = 1000,
    points: T[] = [],
  ) {
    if (limit < 1) throw 'bad usage'
    for (let p of points) this.add(p)
  }

  add(point: T) {
    const { tree } = this
    if (tree.size() >= this.limit) {
      this.removeNearest()
    }

    tree.add(Infinity, point)
    let tail = tree.getTail() as INode<T>
    if (tree.size() > 2) {
      this.updateNode(tail.prev, this.distanceFn)
    }
  }

  * iterator() {
    for (let { source } of this.tree.iterate()) {
      yield source as T
    }
  }

  removeNearest() {
    let { tree } = this
    let h = tree.getHead(), t = tree.getTail()
    let n = tree.popMin() as INode<T>
    if (n !== h) this.updateNode(n.prev, this.distanceFn)
    if (n !== t) this.updateNode(n.next, this.distanceFn)
  }

  private updateNode(n: INode<T>, distanceFn: (p1: T, pMidF: T, p3: T) => number) {
    this.tree.updateNodeValue(n, n.prev.source && n.next.source
      ? distanceFn(n.prev.source, n.source, n.next.source)
      : Infinity
    )
  }
}

export default LimitedPolyline