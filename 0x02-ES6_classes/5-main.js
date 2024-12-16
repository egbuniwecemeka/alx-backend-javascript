import Building from "./5-building";

const b = new Building(100);
console.log(b.evacuationWarningMessage);

class TestBuilding extends Building {};

try {
  const b = TestBuilding(200);
} catch (err) {
  console.log(err);
}
