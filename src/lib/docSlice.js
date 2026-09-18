// Finds the index of the node whose text matches (heading or otherwise).
export function findIndex(nodes, text) {
  return nodes.findIndex((n) => n.text === text);
}

// Returns nodes[startIdx, endIdx) — if endText is omitted, goes to the end.
export function slice(nodes, startText, endText) {
  const start = startText ? findIndex(nodes, startText) : 0;
  const end = endText ? findIndex(nodes, endText) : nodes.length;
  if (start === -1) return [];
  return nodes.slice(start, end === -1 ? nodes.length : end);
}
