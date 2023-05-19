export default function ColorInd(dikt) {
  let res = '';
  if (dikt.health > 50) {
    res = 'healthy';
  } else if (dikt.health > 14) {
    res = 'wounded';
  } else if (dikt.health < 15) {
    res = 'critical';
  }
  return res;
}
