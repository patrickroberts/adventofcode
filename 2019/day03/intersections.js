export default (wires) => wires.map(path).reduce(intersect);

function path(wire) {
  const locations = new Map();
  let x = 0;
  let y = 0;
  let d = 0;

  for (const [, direction, distance] of wire.matchAll(/([DLRU])(\d+)/g)) {
    for (let i = 1; i <= distance; ++i) {
      switch (direction) {
        case 'D': --y; break;
        case 'L': --x; break;
        case 'R': ++x; break;
        case 'U': ++y; break;
      }

      const key = [x, y].join(',');
      const value = ++d;

      if (!(x === 0 && y === 0) && !locations.has(key)) {
        locations.set(key, value);
      }
    }
  }

  return locations;
}

function intersect(intersections, locations) {
  const combined = new Map();

  for (const [location, distance] of intersections) {
    if (locations.has(location)) {
      combined.set(location, distance + locations.get(location));
    }
  }

  return combined;
}
