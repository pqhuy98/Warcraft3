export function getSpellType() {
  const noTarget = (GetSpellTargetX() === 0 && GetSpellTargetY() === 0);
  return {
    onUnit: GetSpellTargetUnit() !== null && !noTarget,
    onPoint: GetSpellTargetUnit() === null && !noTarget,
    noTarget,
  };
}
