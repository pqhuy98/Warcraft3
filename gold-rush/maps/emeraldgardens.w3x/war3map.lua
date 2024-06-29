gg_rct_Region_000 = nil
gg_snd_WotLK_main_title = ""
gg_snd_11__Invincible = ""
gg_snd_raise_death = nil
gg_snd_lichking_death1 = nil
gg_snd_lichking_death2 = nil
gg_snd_lichking_death3 = nil
gg_snd_lich_king_stab_out = nil
gg_snd_lichking_frostmourne_hungers = nil
gg_trg_Melee_Initialization = nil
gg_unit_nfoh_0003 = nil
gg_unit_H002_0191 = nil
gg_unit_nfoh_0321 = nil
gg_unit_Othr_0324 = nil
gg_unit_Osam_0326 = nil
gg_unit_Hjai_0327 = nil
gg_unit_H001_0320 = nil
gg_unit_U000_0322 = nil
function InitGlobals()
end

function Unit000012_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000038_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000041_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000044_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000046_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000047_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000049_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000051_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000055_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000056_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000057_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000060_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000063_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000064_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000065_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000067_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000069_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000072_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000073_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000076_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000077_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000080_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000081_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000084_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000086_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000098_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000141_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000150_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000153_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000160_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000161_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000163_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000166_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000167_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000170_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000172_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000177_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000184_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000186_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000187_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000192_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000197_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000198_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000203_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000204_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000218_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000224_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000228_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 1), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000233_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000253_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000311_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000312_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000316_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000317_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000366_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000367_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000371_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000372_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000376_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000377_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000381_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000382_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000386_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000387_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000391_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000392_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000395_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000396_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000400_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000401_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000405_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_POWERUP, 2), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function Unit000406_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 5), 100)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function InitSounds()
gg_snd_WotLK_main_title = "war3mapImported/WotLK_main_title.mp3"
gg_snd_11__Invincible = "war3mapImported/11. Invincible.mp3"
gg_snd_raise_death = CreateSound("war3mapImported/raise-death.mp3", false, true, false, 1, 1, "DefaultEAXON")
SetSoundDuration(gg_snd_raise_death, 19435)
SetSoundChannel(gg_snd_raise_death, 0)
SetSoundVolume(gg_snd_raise_death, 127)
SetSoundPitch(gg_snd_raise_death, 1.0)
SetSoundDistances(gg_snd_raise_death, 0.0, 10000.0)
SetSoundDistanceCutoff(gg_snd_raise_death, 3000.0)
SetSoundConeAngles(gg_snd_raise_death, 0.0, 0.0, 127)
SetSoundConeOrientation(gg_snd_raise_death, 0.0, 0.0, 0.0)
gg_snd_lichking_death1 = CreateSound("war3mapImported/lichking_death1.mp3", false, false, false, 1, 1, "DefaultEAXON")
SetSoundDuration(gg_snd_lichking_death1, 4702)
SetSoundChannel(gg_snd_lichking_death1, 0)
SetSoundVolume(gg_snd_lichking_death1, 127)
SetSoundPitch(gg_snd_lichking_death1, 1.0)
gg_snd_lichking_death2 = CreateSound("war3mapImported/lichking_death2.mp3", false, false, false, 1, 1, "DefaultEAXON")
SetSoundDuration(gg_snd_lichking_death2, 4806)
SetSoundChannel(gg_snd_lichking_death2, 0)
SetSoundVolume(gg_snd_lichking_death2, 127)
SetSoundPitch(gg_snd_lichking_death2, 1.0)
gg_snd_lichking_death3 = CreateSound("war3mapImported/lichking_death3.mp3", false, false, false, 1, 1, "DefaultEAXON")
SetSoundDuration(gg_snd_lichking_death3, 7706)
SetSoundChannel(gg_snd_lichking_death3, 0)
SetSoundVolume(gg_snd_lichking_death3, 127)
SetSoundPitch(gg_snd_lichking_death3, 1.0)
gg_snd_lich_king_stab_out = CreateSound("war3mapImported/lich-king-stab_out.mp3", false, false, false, 1, 1, "DefaultEAXON")
SetSoundDuration(gg_snd_lich_king_stab_out, 44721)
SetSoundChannel(gg_snd_lich_king_stab_out, 0)
SetSoundVolume(gg_snd_lich_king_stab_out, 127)
SetSoundPitch(gg_snd_lich_king_stab_out, 1.0)
gg_snd_lichking_frostmourne_hungers = CreateSound("war3mapImported/lichking_frostmourne_hungers.mp3", false, false, false, 1, 1, "DefaultEAXON")
SetSoundDuration(gg_snd_lichking_frostmourne_hungers, 5276)
SetSoundChannel(gg_snd_lichking_frostmourne_hungers, 0)
SetSoundVolume(gg_snd_lichking_frostmourne_hungers, 127)
SetSoundPitch(gg_snd_lichking_frostmourne_hungers, 1.0)
end

function CreateBuildingsForPlayer1()
local p = Player(1)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1920.0, 576.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2176.0, 640.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1856.0, 704.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2048.0, 576.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 256.0, 1856.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -64.0, 1792.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 192.0, 1728.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 64.0, 1728.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hctw"), 256.0, 640.0, 270.000, FourCC("hctw"))
u = BlzCreateUnitWithSkin(p, FourCC("hatw"), 448.0, 1280.0, 270.000, FourCC("hatw"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), 1472.0, 896.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("h003"), 96.0, 1888.0, 270.000, FourCC("h003"))
u = BlzCreateUnitWithSkin(p, FourCC("h003"), 2016.0, 736.0, 270.000, FourCC("h003"))
u = BlzCreateUnitWithSkin(p, FourCC("halt"), 160.0, -96.0, 270.000, FourCC("halt"))
u = BlzCreateUnitWithSkin(p, FourCC("hlum"), 1632.0, 1376.0, 270.000, FourCC("hlum"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 2688.0, 640.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -128.0, 2816.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), 128.0, 960.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), 1472.0, 384.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("hgra"), 768.0, 1344.0, 270.000, FourCC("hgra"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 960.0, 128.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hbla"), 448.0, 1600.0, 270.000, FourCC("hbla"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1792.0, 576.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1728.0, 960.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 192.0, 512.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 320.0, 512.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1088.0, 192.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1088.0, 64.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 768.0, -2432.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 768.0, -2304.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hvlt"), 576.0, 256.0, 270.000, FourCC("hvlt"))
end

function CreateBuildingsForPlayer2()
local p = Player(2)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2112.0, -256.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1984.0, -256.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hctw"), 128.0, -1280.0, 270.000, FourCC("hctw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgra"), 1280.0, -1088.0, 270.000, FourCC("hgra"))
u = BlzCreateUnitWithSkin(p, FourCC("h003"), 2016.0, -416.0, 270.000, FourCC("h003"))
u = BlzCreateUnitWithSkin(p, FourCC("h003"), 224.0, -2848.0, 270.000, FourCC("h003"))
u = BlzCreateUnitWithSkin(p, FourCC("halt"), 160.0, -800.0, 270.000, FourCC("halt"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1856.0, -448.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1856.0, -320.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 64.0, -2944.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 256.0, -2624.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 64.0, -2816.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 128.0, -2688.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hlum"), 1696.0, -1184.0, 270.000, FourCC("hlum"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 0.0, -3584.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 2688.0, -128.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), 64.0, -1792.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hatw"), 128.0, -2304.0, 270.000, FourCC("hatw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 1024.0, -704.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), 576.0, -2048.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("hbla"), 1152.0, -2048.0, 270.000, FourCC("hbla"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), 1408.0, -512.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("hvlt"), 640.0, -704.0, 270.000, FourCC("hvlt"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1792.0, -832.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1856.0, -704.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1728.0, -704.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1024.0, -2304.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 896.0, -2240.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 896.0, -2368.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 512.0, -2496.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 64.0, -1408.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 192.0, -1408.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 576.0, -2368.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 448.0, -2368.0, 270.000, FourCC("hhou"))
end

function CreateBuildingsForPlayer3()
local p = Player(3)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("otto"), -1088.0, -2240.0, 270.000, FourCC("otto"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -2304.0, -1920.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -640.0, -2048.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -2592.0, -1056.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -928.0, -2784.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("oalt"), -544.0, -800.0, 270.000, FourCC("oalt"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2720.0, -864.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2400.0, -1056.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2528.0, -864.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -992.0, -2528.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -736.0, -2784.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -800.0, -2592.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("ofor"), -2208.0, -1440.0, 270.000, FourCC("ofor"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -3328.0, -640.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -640.0, -3584.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), -1984.0, -1024.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -1856.0, -640.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("osld"), -1536.0, -2176.0, 270.000, FourCC("osld"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), -1408.0, -896.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("obea"), -704.0, -1280.0, 270.000, FourCC("obea"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -480.0, -2144.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -1952.0, -1568.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -1888.0, -2336.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -672.0, -2208.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2016.0, -608.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("ovln"), -960.0, -832.0, 270.000, FourCC("ovln"))
end

function CreateBuildingsForPlayer4()
local p = Player(4)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("obea"), -2176.0, 256.0, 270.000, FourCC("obea"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), -768.0, 1344.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -1984.0, 832.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -448.0, 832.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -2656.0, 160.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -1184.0, 1888.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("oalt"), -544.0, -96.0, 270.000, FourCC("oalt"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2464.0, 224.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2464.0, 32.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2656.0, -32.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -1056.0, 1696.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -1248.0, 1696.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -992.0, 1888.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("ofor"), -2272.0, 672.0, 270.000, FourCC("ofor"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -3328.0, 0.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -896.0, 2816.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), -1280.0, 1280.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("otto"), -1664.0, 192.0, 270.000, FourCC("otto"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -1344.0, -128.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("osld"), -832.0, 832.0, 270.000, FourCC("osld"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -1504.0, -160.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -1824.0, 736.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -1440.0, 1632.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -480.0, 992.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("ovln"), -1088.0, -64.0, 270.000, FourCC("ovln"))
end

function CreateBuildingsForPlayer5()
local p = Player(5)
local u
local unitID
local t
local life

gg_unit_nfoh_0003 = BlzCreateUnitWithSkin(p, FourCC("nfoh"), -192.0, -448.0, 270.000, FourCC("nfnp"))
end

function CreateUnitsForPlayer5()
local p = Player(5)
local u
local unitID
local t
local life

gg_unit_H002_0191 = BlzCreateUnitWithSkin(p, FourCC("H002"), 238.9, -1095.5, 270.720, FourCC("H002"))
SetHeroLevel(gg_unit_H002_0191, 6, false)
SetUnitState(gg_unit_H002_0191, UNIT_STATE_MANA, 375)
UnitAddItemToSlotById(gg_unit_H002_0191, FourCC("stel"), 5)
gg_unit_Othr_0324 = BlzCreateUnitWithSkin(p, FourCC("Othr"), -1524.9, 1076.7, 256.220, FourCC("Othr"))
SetHeroLevel(gg_unit_Othr_0324, 3, false)
SetUnitState(gg_unit_Othr_0324, UNIT_STATE_MANA, 285)
UnitAddItemToSlotById(gg_unit_Othr_0324, FourCC("crdt"), 0)
UnitAddItemToSlotById(gg_unit_Othr_0324, FourCC("btst"), 1)
UnitAddItemToSlotById(gg_unit_Othr_0324, FourCC("shcw"), 2)
UnitAddItemToSlotById(gg_unit_Othr_0324, FourCC("fwss"), 3)
UnitAddItemToSlotById(gg_unit_Othr_0324, FourCC("spsh"), 4)
UnitAddItemToSlotById(gg_unit_Othr_0324, FourCC("stel"), 5)
gg_unit_Osam_0326 = BlzCreateUnitWithSkin(p, FourCC("Osam"), -1700.8, -1500.5, 344.260, FourCC("Osam"))
SetHeroLevel(gg_unit_Osam_0326, 7, false)
SetUnitState(gg_unit_Osam_0326, UNIT_STATE_MANA, 240)
UnitAddItemToSlotById(gg_unit_Osam_0326, FourCC("fwss"), 0)
UnitAddItemToSlotById(gg_unit_Osam_0326, FourCC("klmm"), 1)
UnitAddItemToSlotById(gg_unit_Osam_0326, FourCC("bfhr"), 2)
UnitAddItemToSlotById(gg_unit_Osam_0326, FourCC("arsh"), 3)
UnitAddItemToSlotById(gg_unit_Osam_0326, FourCC("shdt"), 4)
UnitAddItemToSlotById(gg_unit_Osam_0326, FourCC("stel"), 5)
gg_unit_Hjai_0327 = BlzCreateUnitWithSkin(p, FourCC("Hjai"), 1189.7, 1139.5, 247.280, FourCC("Hjai"))
SetHeroLevel(gg_unit_Hjai_0327, 3, false)
UnitAddItemToSlotById(gg_unit_Hjai_0327, FourCC("schl"), 0)
UnitAddItemToSlotById(gg_unit_Hjai_0327, FourCC("gvsm"), 1)
UnitAddItemToSlotById(gg_unit_Hjai_0327, FourCC("ssil"), 2)
UnitAddItemToSlotById(gg_unit_Hjai_0327, FourCC("shhn"), 3)
UnitAddItemToSlotById(gg_unit_Hjai_0327, FourCC("frgd"), 4)
end

function CreateBuildingsForPlayer6()
local p = Player(6)
local u
local unitID
local t
local life

gg_unit_nfoh_0321 = BlzCreateUnitWithSkin(p, FourCC("nfoh"), -6272.0, 5312.0, 270.000, FourCC("nbfl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), 2688.0, -5952.0, 270.000, FourCC("nbfl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), -768.0, -6400.0, 270.000, FourCC("nbfl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), -2944.0, 5760.0, 270.000, FourCC("nbfl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), -6272.0, -2048.0, 270.000, FourCC("nbfl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), 5824.0, -2624.0, 270.000, FourCC("nbfl"))
end

function CreateUnitsForPlayer6()
local p = Player(6)
local u
local unitID
local t
local life

gg_unit_H001_0320 = BlzCreateUnitWithSkin(p, FourCC("H001"), -6571.9, 5315.2, 339.040, FourCC("H001"))
SetHeroLevel(gg_unit_H001_0320, 6, false)
SetUnitState(gg_unit_H001_0320, UNIT_STATE_MANA, 510)
SelectHeroSkill(gg_unit_H001_0320, FourCC("AUfn"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("AUfn"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("AUfn"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("AUdc"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("AUdc"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("AUdc"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("ANht"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("ANht"))
SelectHeroSkill(gg_unit_H001_0320, FourCC("ANht"))
IssueImmediateOrder(gg_unit_H001_0320, "")
IssueImmediateOrder(gg_unit_H001_0320, "")
UnitAddItemToSlotById(gg_unit_H001_0320, FourCC("I000"), 0)
UnitAddItemToSlotById(gg_unit_H001_0320, FourCC("lgdh"), 1)
UnitAddItemToSlotById(gg_unit_H001_0320, FourCC("stel"), 5)
gg_unit_U000_0322 = BlzCreateUnitWithSkin(p, FourCC("U000"), -5957.0, 5336.7, 204.198, FourCC("U000"))
SetHeroLevel(gg_unit_U000_0322, 3, false)
SetUnitState(gg_unit_U000_0322, UNIT_STATE_MANA, 210)
end

function CreateNeutralHostile()
local p = Player(PLAYER_NEUTRAL_AGGRESSIVE)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -1515.0, -6327.9, 32.888, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -1668.5, -6146.5, 13.655, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 7421.0, 8667.5, 253.340, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 7054.4, 8886.0, 234.850, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000038_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 7020.9, 8679.4, 288.962, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 7213.2, 8601.6, 228.202, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 1682.9, 9435.8, 253.340, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 1267.8, 9592.6, 234.850, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000046_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 1140.2, 9409.2, 288.962, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 1707.7, 9238.5, 228.202, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -4043.9, 9501.5, 268.424, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -4485.6, 9544.8, 249.934, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000084_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -4561.0, 9334.6, 304.046, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -3968.7, 9317.4, 243.286, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 1492.2, -9882.4, 77.250, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 1917.0, -10010.5, 58.760, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000064_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 2031.8, -9818.9, 112.872, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 1454.0, -9687.2, 52.112, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -3433.3, -9863.4, 60.835, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -3061.9, -10106.4, 42.345, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000049_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -2897.7, -9955.0, 96.457, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -3414.7, -9665.4, 35.697, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -8992.1, -8543.1, 40.336, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -8729.3, -8900.7, 21.846, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000056_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -8522.5, -8816.4, 75.958, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -8905.4, -8364.2, 15.198, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 7389.1, -9361.2, 140.826, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 7692.9, -9037.8, 122.336, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000067_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 7572.4, -8849.7, 176.448, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 7197.4, -9308.6, 115.688, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 9426.6, -4187.3, 150.854, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 9669.4, -3815.9, 132.364, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000072_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 9518.0, -3651.7, 186.476, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -1541.0, -5963.1, 1.003, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000366_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 9512.2, 2276.1, 175.747, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 9576.1, 2715.3, 157.257, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000233_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 9369.6, 2800.4, 211.368, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 9324.8, 2209.5, 150.608, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -9508.2, 2176.9, 345.550, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -9648.9, 1756.0, 327.060, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000080_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -9460.7, 1635.6, 21.172, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -9312.0, 2209.2, 320.412, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -9702.0, -2732.1, 345.451, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -9843.4, -3152.8, 326.961, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000060_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -9655.5, -3273.5, 21.073, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -9505.8, -2700.1, 320.313, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -9411.7, 7958.4, 323.974, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -9697.3, 7618.7, 305.484, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000076_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -9566.6, 7437.6, 359.595, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -9217.4, 7916.3, 298.835, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), 9674.6, 5566.4, 183.057, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000167_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 9541.2, 5397.8, 145.936, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), 10235.0, -649.7, 164.690, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000197_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 9648.7, 5729.1, 170.433, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 9646.7, 5429.7, 170.433, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 10111.4, -811.3, 145.936, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 10218.9, -480.1, 170.433, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 10216.9, -779.5, 170.433, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), 9646.8, -7151.0, 180.115, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000218_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 9524.4, -7313.5, 145.936, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 9631.9, -6982.2, 170.433, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 9629.8, -7281.6, 170.433, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), 4595.5, -10128.8, 105.433, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000160_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 4408.2, -9980.4, 78.918, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 4751.7, -10038.2, 112.000, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 4455.2, -10080.0, 84.810, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), -645.4, -10214.5, 93.549, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000161_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -806.9, -10071.8, 53.462, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -480.6, -10193.5, 77.959, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -779.6, -10178.6, 77.959, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), -6430.9, -10237.7, 59.372, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000166_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -6507.7, -10023.9, 22.623, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -6289.9, -10295.7, 47.120, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -6538.9, -10129.5, 47.120, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), -10024.1, -5857.9, 7.199, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000044_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -9954.1, -5668.3, 318.923, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -10062.9, -5992.6, 343.420, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -10062.6, -5687.1, 343.420, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), -10062.0, -589.6, 14.381, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000086_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -9909.1, -407.3, 318.923, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -10056.2, -723.0, 343.420, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -10017.6, -426.1, 343.420, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), -10275.4, 4888.4, 314.398, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000204_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -10125.7, 5066.1, 318.923, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -10272.8, 4750.5, 343.420, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -10234.2, 5047.4, 343.420, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), -6984.7, 9523.2, 296.305, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000203_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -6761.6, 9449.8, 263.982, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -7104.6, 9388.9, 288.479, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -6839.4, 9527.9, 288.479, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), -1384.8, 9619.9, 270.703, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000141_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -1208.6, 9516.3, 239.437, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -1545.8, 9603.3, 263.933, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -1246.9, 9619.6, 263.933, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmsn"), 4458.6, 9678.3, 260.101, FourCC("nmsn"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000198_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 4600.6, 9543.5, 231.393, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 4278.9, 9676.9, 255.889, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 4299.7, 9557.5, 231.393, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -1343.2, -6054.2, 12.145, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000367_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 7285.7, 8888.4, 257.950, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000041_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 1465.5, 9501.5, 257.950, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000047_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -4270.9, 9508.4, 273.034, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000081_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -9545.8, 7775.1, 328.584, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000073_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -9565.5, 1957.1, 350.160, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000077_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -9759.7, -2951.8, 350.061, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000057_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -8845.6, -8716.7, 44.946, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000055_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -3235.3, -9974.7, 65.445, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000051_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 1713.5, -9933.1, 81.860, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000063_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 7533.1, -9185.6, 145.436, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000065_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 9537.8, -3989.3, 155.464, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000069_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 9529.6, 2502.6, 180.357, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000098_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 4577.2, 9651.2, 255.889, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 9531.4, 5698.9, 145.936, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 10101.6, -510.3, 145.936, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 9514.5, -7012.4, 145.936, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 4704.6, -9926.5, 111.797, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -505.8, -10075.0, 53.462, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -6250.7, -10181.0, 22.623, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -9942.7, -5977.0, 318.923, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -9936.0, -707.3, 318.923, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -10175.2, 4885.8, 318.923, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -7022.7, 9299.6, 263.982, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -1508.5, 9488.1, 239.437, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -1347.3, -6364.3, 57.182, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 2155.1, -5865.5, 32.888, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("Hpal"), -8608.1, 6606.3, 259.250, FourCC("Hpal"))
SetHeroLevel(u, 20, false)
life = GetUnitState(u, UNIT_STATE_LIFE)
SetUnitState(u, UNIT_STATE_LIFE, 0.01 * life)
SelectHeroSkill(u, FourCC("AHad"))
SelectHeroSkill(u, FourCC("AHad"))
SelectHeroSkill(u, FourCC("AHad"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -96.4, 5668.8, 288.962, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 31.1, 5852.1, 234.850, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000311_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -6659.6, 7459.3, 338.230, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000224_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 228.9, 5761.1, 257.950, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000312_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 471.0, 5498.0, 228.202, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 446.3, 5695.4, 253.340, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -2209.2, 8390.2, 341.850, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000150_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 3340.3, 8177.5, 341.850, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000170_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 7394.8, 5530.1, 341.850, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000186_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 8558.0, -241.8, 231.042, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000012_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -2100.1, 8382.2, 357.182, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -2088.5, 8236.9, 19.376, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 8193.9, -5655.1, 215.522, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000172_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -6605.0, 7353.5, 345.255, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -6551.2, 7477.5, 21.242, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -6481.3, 7349.6, 43.435, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -8980.4, 3680.8, 86.670, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000228_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -9128.4, 3769.2, 58.731, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -9073.8, 3851.9, 59.687, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -8960.4, 3823.3, 89.644, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -8372.7, -948.9, 103.893, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000163_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -8469.9, -857.7, 58.731, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -8415.2, -775.1, 59.687, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -8301.8, -803.7, 89.644, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -8244.4, -6105.7, 111.558, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000153_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -8379.4, -5999.1, 51.168, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -8324.8, -5916.5, 49.555, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -8211.4, -5945.1, 70.266, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -5174.3, -9537.2, 138.333, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000192_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -5318.3, -9434.9, 147.008, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -5263.7, -9352.3, 166.600, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -5150.3, -9380.8, 166.393, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), -71.4, -8731.9, 163.824, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000187_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), -241.1, -8745.7, 188.670, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -255.2, -8647.7, 208.262, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), -151.5, -8593.6, 208.055, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmtw"), 4746.0, -8444.0, 192.095, FourCC("nmtw"))
SetUnitAcquireRange(u, 200.0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000177_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 4581.3, -8479.0, 193.409, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 4559.2, -8382.4, 213.002, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 4658.1, -8320.0, 212.795, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 8081.0, -5545.6, 231.043, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 8026.9, -5666.1, 220.078, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 8117.5, -5764.3, 184.051, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 8394.6, -222.5, 267.961, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 8435.7, -348.1, 260.682, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 8568.7, -359.7, 240.864, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 7502.5, 5556.1, 239.711, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 7458.1, 5407.6, 251.621, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 7321.6, 5427.9, 252.614, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmbg"), 3348.4, 8052.2, 321.195, FourCC("nmbg"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 3448.1, 8143.5, 357.182, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nmcf"), 3459.8, 7998.2, 19.376, FourCC("nmcf"))
SetUnitAcquireRange(u, 200.0)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 2001.6, -5684.0, 13.655, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 2129.1, -5500.7, 1.003, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000371_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 2326.9, -5591.7, 12.145, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000372_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 2322.8, -5901.9, 57.182, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -6172.3, -3121.7, 32.888, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -6325.8, -2940.3, 13.655, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -5542.1, -5670.4, 13.655, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -5414.6, -5487.0, 1.003, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000316_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -5216.8, -5578.1, 12.145, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000317_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -5220.9, -5888.2, 57.182, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -5388.6, -5851.8, 32.888, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 4165.2, 4863.8, 228.396, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -6198.3, -2756.9, 1.003, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000376_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -6000.5, -2848.0, 12.145, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000377_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -6004.6, -3158.2, 57.182, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -5870.8, 667.3, 32.888, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -6024.3, 848.7, 13.655, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -5896.8, 1032.1, 1.003, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000381_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -5699.0, 941.0, 12.145, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000382_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -5703.1, 630.8, 57.182, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -6548.1, 4349.3, 32.888, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -6701.6, 4530.7, 13.655, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -6574.1, 4714.0, 1.003, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000386_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -6376.3, 4623.0, 12.145, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000387_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -6380.4, 4312.8, 57.182, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), -3481.6, 5219.5, 32.888, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -3635.1, 5400.9, 13.655, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), -3507.6, 5584.2, 1.003, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000391_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), -3309.8, 5493.2, 12.145, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000392_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), -3313.9, 5183.0, 57.182, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 4011.7, 5045.2, 248.734, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 4139.3, 5228.6, 245.383, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000395_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 4337.0, 5137.5, 231.711, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000396_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 4333.0, 4827.3, 216.071, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 5389.7, 2018.9, 191.985, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 5236.2, 2200.3, 212.856, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 5363.7, 2383.6, 218.954, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000400_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 5561.5, 2292.6, 206.657, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000401_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 5557.4, 1982.4, 187.057, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 5527.3, -2078.5, 167.552, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 5373.8, -1897.1, 176.110, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 5501.3, -1713.7, 186.144, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000405_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 5699.1, -1804.8, 181.182, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000406_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 5695.0, -2115.0, 167.575, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlsn"), 4963.1, -5390.7, 120.225, FourCC("nlsn"))
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 4809.6, -5209.3, 117.622, FourCC("nltc"))
u = BlzCreateUnitWithSkin(p, FourCC("nlds"), 4937.1, -5026.0, 131.423, FourCC("nlds"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000253_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nlkl"), 5134.9, -5117.0, 136.313, FourCC("nlkl"))
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000184_DropItems)
u = BlzCreateUnitWithSkin(p, FourCC("nltc"), 5130.8, -5427.2, 125.968, FourCC("nltc"))
end

function CreateNeutralPassiveBuildings()
local p = Player(PLAYER_NEUTRAL_PASSIVE)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 1600.0, 10112.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 7424.0, 9472.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 10048.0, 2496.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -4096.0, 10048.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -3456.0, 6016.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 4416.0, 5504.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -3328.0, -10624.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -1088.0, -5824.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -1984.0, -1920.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 448.0, 6016.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -10112.0, 7936.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -6976.0, 4800.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 1600.0, -10496.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 1984.0, -6208.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -10112.0, 2112.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -10304.0, -2816.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -6656.0, -2880.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -6400.0, 832.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -9216.0, -9216.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -5632.0, -6144.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 5376.0, -5632.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 7872.0, -9728.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 5952.0, -1984.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 5824.0, 2112.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 10112.0, -4032.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("nmrc"), 9984.0, 5568.0, 270.000, FourCC("nmrc"))
SetUnitColor(u, ConvertPlayerColor(1))
u = BlzCreateUnitWithSkin(p, FourCC("ngad"), 4608.0, 9984.0, 270.000, FourCC("ngad"))
u = BlzCreateUnitWithSkin(p, FourCC("nmrc"), -1408.0, 9920.0, 270.000, FourCC("nmrc"))
SetUnitColor(u, ConvertPlayerColor(1))
u = BlzCreateUnitWithSkin(p, FourCC("ngad"), -7168.0, 9856.0, 270.000, FourCC("ngad"))
u = BlzCreateUnitWithSkin(p, FourCC("nmrc"), -10496.0, 4992.0, 270.000, FourCC("nmrc"))
SetUnitColor(u, ConvertPlayerColor(1))
u = BlzCreateUnitWithSkin(p, FourCC("ngad"), -10368.0, -576.0, 270.000, FourCC("ngad"))
u = BlzCreateUnitWithSkin(p, FourCC("nmrc"), -10304.0, -5888.0, 270.000, FourCC("nmrc"))
SetUnitColor(u, ConvertPlayerColor(1))
u = BlzCreateUnitWithSkin(p, FourCC("ngad"), -6592.0, -10432.0, 270.000, FourCC("ngad"))
u = BlzCreateUnitWithSkin(p, FourCC("nmrc"), -640.0, -10496.0, 270.000, FourCC("nmrc"))
SetUnitColor(u, ConvertPlayerColor(1))
u = BlzCreateUnitWithSkin(p, FourCC("ngad"), 4672.0, -10432.0, 270.000, FourCC("ngad"))
u = BlzCreateUnitWithSkin(p, FourCC("nmrc"), 9920.0, -7168.0, 270.000, FourCC("nmrc"))
SetUnitColor(u, ConvertPlayerColor(1))
u = BlzCreateUnitWithSkin(p, FourCC("ngad"), 10496.0, -640.0, 270.000, FourCC("ngad"))
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -1920.0, 1152.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 1216.0, 1472.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 1472.0, -1664.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 1000000000)
u = BlzCreateUnitWithSkin(p, FourCC("ntav"), -192.0, -4800.0, 270.000, FourCC("ntav"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("ntav"), 2880.0, 2752.0, 270.000, FourCC("ntav"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("ntav"), -7104.0, 2432.0, 270.000, FourCC("ntav"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("ngme"), -1856.0, 2240.0, 270.000, FourCC("ngme"))
u = BlzCreateUnitWithSkin(p, FourCC("nmrk"), 640.0, 2368.0, 270.000, FourCC("nmrk"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("ntav"), -2944.0, -2944.0, 270.000, FourCC("ntav"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("ntav"), -1280.0, 5184.0, 270.000, FourCC("ntav"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("ntav"), 3456.0, -4416.0, 270.000, FourCC("ntav"))
SetUnitColor(u, ConvertPlayerColor(0))
end

function CreatePlayerBuildings()
CreateBuildingsForPlayer1()
CreateBuildingsForPlayer2()
CreateBuildingsForPlayer3()
CreateBuildingsForPlayer4()
CreateBuildingsForPlayer5()
CreateBuildingsForPlayer6()
end

function CreatePlayerUnits()
CreateUnitsForPlayer5()
CreateUnitsForPlayer6()
end

function CreateAllUnits()
CreateNeutralPassiveBuildings()
CreatePlayerBuildings()
CreateNeutralHostile()
CreatePlayerUnits()
end

function CreateRegions()
local we

gg_rct_Region_000 = Rect(-3456.0, -3968.0, 2880.0, 2752.0)
end

function Trig_Melee_Initialization_Actions()
PlayMusicBJ(gg_snd_WotLK_main_title)
SetMusicVolumeBJ(100)
SetUnitColor(gg_unit_nfoh_0003, PLAYER_COLOR_BLUE)
SetUnitColor(gg_unit_nfoh_0321, PLAYER_COLOR_GREEN)
SetUnitColor(gg_unit_H001_0320, PLAYER_COLOR_AQUA)
SetUnitColor(gg_unit_U000_0322, PLAYER_COLOR_BROWN)
SetUnitColor(gg_unit_H002_0191, PLAYER_COLOR_AQUA)
SetUnitColor(gg_unit_Othr_0324, PLAYER_COLOR_RED)
SetUnitColor(gg_unit_Osam_0326, PLAYER_COLOR_ORANGE)
SetUnitColor(gg_unit_Hjai_0327, PLAYER_COLOR_BLUE)
MeleeStartingVisibility()
MeleeStartingHeroLimit()
MeleeGrantHeroItems()
MeleeStartingResources()
MeleeClearExcessUnits()
MeleeStartingUnits()
MeleeInitVictoryDefeat()
end

function InitTrig_Melee_Initialization()
gg_trg_Melee_Initialization = CreateTrigger()
TriggerAddAction(gg_trg_Melee_Initialization, Trig_Melee_Initialization_Actions)
end

function InitCustomTriggers()
InitTrig_Melee_Initialization()
end

function RunInitializationTriggers()
ConditionalTriggerExecute(gg_trg_Melee_Initialization)
end

function InitUpgrades_Player0()
SetPlayerTechResearched(Player(0), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(0), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(0), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(0), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(0), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(0), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(0), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(0), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(0), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(0), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(0), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(0), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(0), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(0), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(0), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(0), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(0), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(0), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rnam"), 3)
end

function InitUpgrades_Player1()
SetPlayerTechResearched(Player(1), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(1), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(1), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(1), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(1), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(1), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(1), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(1), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(1), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(1), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(1), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(1), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(1), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(1), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(1), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(1), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(1), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(1), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(1), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(1), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(1), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(1), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(1), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(1), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(1), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(1), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rnam"), 3)
end

function InitUpgrades_Player2()
SetPlayerTechResearched(Player(2), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(2), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(2), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(2), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(2), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(2), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(2), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(2), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(2), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(2), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(2), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(2), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(2), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(2), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(2), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(2), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(2), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(2), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(2), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rnam"), 3)
end

function InitUpgrades_Player3()
SetPlayerTechResearched(Player(3), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(3), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(3), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(3), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(3), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(3), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(3), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(3), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(3), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(3), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(3), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(3), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(3), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(3), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(3), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(3), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(3), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(3), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(3), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(3), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(3), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(3), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(3), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(3), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(3), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rnam"), 3)
end

function InitUpgrades_Player4()
SetPlayerTechResearched(Player(4), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(4), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(4), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(4), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(4), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(4), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(4), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(4), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(4), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(4), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(4), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(4), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(4), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(4), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(4), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(4), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(4), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(4), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(4), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(4), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(4), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(4), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(4), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(4), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(4), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(4), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rnam"), 3)
end

function InitUpgrades_Player5()
SetPlayerTechResearched(Player(5), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(5), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(5), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(5), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(5), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(5), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(5), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(5), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(5), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(5), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(5), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(5), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(5), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(5), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(5), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(5), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(5), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(5), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rnam"), 3)
end

function InitUpgrades_Player6()
SetPlayerTechResearched(Player(6), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(6), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(6), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(6), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(6), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(6), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(6), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(6), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(6), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(6), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(6), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(6), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(6), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(6), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(6), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(6), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(6), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(6), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rnam"), 3)
end

function InitUpgrades_Player7()
SetPlayerTechResearched(Player(7), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(7), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(7), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(7), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(7), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(7), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(7), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(7), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(7), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(7), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(7), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(7), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(7), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(7), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(7), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(7), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(7), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(7), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(7), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(7), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(7), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(7), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(7), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(7), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(7), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(7), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rnam"), 3)
end

function InitUpgrades_Player8()
SetPlayerTechResearched(Player(8), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(8), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(8), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(8), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(8), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(8), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(8), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(8), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(8), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(8), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(8), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(8), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(8), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(8), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(8), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(8), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(8), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(8), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rnam"), 3)
end

function InitUpgrades_Player9()
SetPlayerTechResearched(Player(9), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(9), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(9), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(9), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(9), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(9), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(9), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(9), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(9), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(9), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(9), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(9), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(9), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(9), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(9), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(9), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(9), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(9), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rnam"), 3)
end

function InitUpgrades_Player10()
SetPlayerTechResearched(Player(10), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(10), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(10), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(10), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhcd"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhsb"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(10), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(10), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(10), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(10), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(10), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(10), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(10), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(10), FourCC("Robf"), 1)
SetPlayerTechMaxAllowed(Player(10), FourCC("Ropm"), 0)
SetPlayerTechMaxAllowed(Player(10), FourCC("Rhpm"), 0)
SetPlayerTechResearched(Player(10), FourCC("Rgfo"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rguv"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(10), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(10), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(10), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(10), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(10), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(10), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(10), FourCC("Rupm"), 0)
SetPlayerTechMaxAllowed(Player(10), FourCC("Roch"), 0)
SetPlayerTechResearched(Player(10), FourCC("Rnat"), 3)
SetPlayerTechResearched(Player(10), FourCC("Rnsb"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rnsw"), 2)
SetPlayerTechResearched(Player(10), FourCC("Rnsi"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rnen"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rnam"), 3)
end

function InitUpgrades()
InitUpgrades_Player0()
InitUpgrades_Player1()
InitUpgrades_Player2()
InitUpgrades_Player3()
InitUpgrades_Player4()
InitUpgrades_Player5()
InitUpgrades_Player6()
InitUpgrades_Player7()
InitUpgrades_Player8()
InitUpgrades_Player9()
InitUpgrades_Player10()
end

function InitCustomPlayerSlots()
SetPlayerStartLocation(Player(0), 0)
ForcePlayerStartLocation(Player(0), 0)
SetPlayerColor(Player(0), ConvertPlayerColor(0))
SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(0), false)
SetPlayerController(Player(0), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(1), 1)
ForcePlayerStartLocation(Player(1), 1)
SetPlayerColor(Player(1), ConvertPlayerColor(1))
SetPlayerRacePreference(Player(1), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(1), false)
SetPlayerController(Player(1), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(2), 2)
ForcePlayerStartLocation(Player(2), 2)
SetPlayerColor(Player(2), ConvertPlayerColor(2))
SetPlayerRacePreference(Player(2), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(2), false)
SetPlayerController(Player(2), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(3), 3)
ForcePlayerStartLocation(Player(3), 3)
SetPlayerColor(Player(3), ConvertPlayerColor(3))
SetPlayerRacePreference(Player(3), RACE_PREF_ORC)
SetPlayerRaceSelectable(Player(3), false)
SetPlayerController(Player(3), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(4), 4)
ForcePlayerStartLocation(Player(4), 4)
SetPlayerColor(Player(4), ConvertPlayerColor(4))
SetPlayerRacePreference(Player(4), RACE_PREF_ORC)
SetPlayerRaceSelectable(Player(4), false)
SetPlayerController(Player(4), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(5), 5)
ForcePlayerStartLocation(Player(5), 5)
SetPlayerColor(Player(5), ConvertPlayerColor(5))
SetPlayerRacePreference(Player(5), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(5), false)
SetPlayerController(Player(5), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(6), 6)
ForcePlayerStartLocation(Player(6), 6)
SetPlayerColor(Player(6), ConvertPlayerColor(6))
SetPlayerRacePreference(Player(6), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(6), false)
SetPlayerController(Player(6), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(7), 7)
ForcePlayerStartLocation(Player(7), 7)
SetPlayerColor(Player(7), ConvertPlayerColor(7))
SetPlayerRacePreference(Player(7), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(7), false)
SetPlayerController(Player(7), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(8), 8)
ForcePlayerStartLocation(Player(8), 8)
SetPlayerColor(Player(8), ConvertPlayerColor(8))
SetPlayerRacePreference(Player(8), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(8), false)
SetPlayerController(Player(8), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(9), 9)
ForcePlayerStartLocation(Player(9), 9)
SetPlayerColor(Player(9), ConvertPlayerColor(9))
SetPlayerRacePreference(Player(9), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(9), false)
SetPlayerController(Player(9), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(10), 10)
ForcePlayerStartLocation(Player(10), 10)
SetPlayerColor(Player(10), ConvertPlayerColor(10))
SetPlayerRacePreference(Player(10), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(10), false)
SetPlayerController(Player(10), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(11), 11)
ForcePlayerStartLocation(Player(11), 11)
SetPlayerColor(Player(11), ConvertPlayerColor(11))
SetPlayerRacePreference(Player(11), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(11), false)
SetPlayerController(Player(11), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(12), 12)
ForcePlayerStartLocation(Player(12), 12)
SetPlayerColor(Player(12), ConvertPlayerColor(12))
SetPlayerRacePreference(Player(12), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(12), false)
SetPlayerController(Player(12), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
SetPlayerTeam(Player(1), 0)
SetPlayerState(Player(1), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(2), 0)
SetPlayerState(Player(2), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(3), 0)
SetPlayerState(Player(3), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(4), 0)
SetPlayerState(Player(4), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(5), 0)
SetPlayerState(Player(5), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(4), true)
SetPlayerTeam(Player(6), 1)
SetPlayerState(Player(6), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(7), 1)
SetPlayerState(Player(7), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(8), 1)
SetPlayerState(Player(8), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(9), 1)
SetPlayerState(Player(9), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(10), 1)
SetPlayerState(Player(10), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(11), 1)
SetPlayerState(Player(11), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(12), 1)
SetPlayerState(Player(12), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(6), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(12), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(12), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(12), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(12), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(12), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(12), true)
SetPlayerAllianceStateAllyBJ(Player(12), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(12), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(12), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(12), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(12), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(12), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(12), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(12), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(12), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(12), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(12), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(12), true)
SetPlayerAllianceStateVisionBJ(Player(12), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(12), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(12), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(12), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(12), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(12), Player(11), true)
SetPlayerTeam(Player(0), 2)
end

function InitAllyPriorities()
SetStartLocPrioCount(1, 4)
SetStartLocPrio(1, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(1, 1, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(1, 2, 4, MAP_LOC_PRIO_LOW)
SetStartLocPrio(1, 3, 11, MAP_LOC_PRIO_HIGH)
SetEnemyStartLocPrioCount(1, 2)
SetEnemyStartLocPrio(1, 0, 11, MAP_LOC_PRIO_LOW)
SetEnemyStartLocPrio(1, 1, 12, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(2, 3)
SetStartLocPrio(2, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(2, 1, 11, MAP_LOC_PRIO_LOW)
SetStartLocPrio(2, 2, 12, MAP_LOC_PRIO_LOW)
SetEnemyStartLocPrioCount(2, 2)
SetEnemyStartLocPrio(2, 0, 11, MAP_LOC_PRIO_LOW)
SetEnemyStartLocPrio(2, 1, 12, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(3, 3)
SetStartLocPrio(3, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(3, 1, 2, MAP_LOC_PRIO_LOW)
SetStartLocPrio(3, 2, 4, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(4, 3)
SetStartLocPrio(4, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(4, 1, 1, MAP_LOC_PRIO_LOW)
SetStartLocPrio(4, 2, 3, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(6, 2)
SetStartLocPrio(6, 0, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(6, 1, 7, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(7, 5)
SetStartLocPrio(7, 0, 0, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 1, 2, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 2, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(7, 3, 6, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(7, 4, 8, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(8, 2)
SetStartLocPrio(8, 0, 7, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(8, 1, 9, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(9, 3)
SetStartLocPrio(9, 0, 8, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 1, 10, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 2, 12, MAP_LOC_PRIO_LOW)
SetEnemyStartLocPrioCount(9, 1)
SetEnemyStartLocPrio(9, 0, 12, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(10, 2)
SetStartLocPrio(10, 0, 9, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(10, 1, 12, MAP_LOC_PRIO_HIGH)
end

function main()
SetCameraBounds(-11008.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -11264.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 11008.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 10752.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -11008.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 10752.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 11008.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -11264.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
SetTerrainFogEx(0, 500.0, 5000.0, 100.000, 0.000, 1.000, 1.000)
NewSoundEnvironment("Default")
SetAmbientDaySound("SunkenRuinsDay")
SetAmbientNightSound("SunkenRuinsNight")
SetMapMusic("Music", true, 0)
InitSounds()
CreateRegions()
InitUpgrades()
CreateAllUnits()
InitBlizzard()
InitGlobals()
InitCustomTriggers()
RunInitializationTriggers()
end

function config()
SetMapName("TRIGSTR_014")
SetMapDescription("TRIGSTR_016")
SetPlayers(13)
SetTeams(13)
SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
DefineStartLocation(0, 12160.0, 11328.0)
DefineStartLocation(1, 896.0, 768.0)
DefineStartLocation(2, 704.0, -1344.0)
DefineStartLocation(3, -1280.0, -1536.0)
DefineStartLocation(4, -1344.0, 640.0)
DefineStartLocation(5, 12224.0, 11712.0)
DefineStartLocation(6, 12160.0, 11584.0)
DefineStartLocation(7, -6336.0, 4480.0)
DefineStartLocation(8, -3392.0, 5312.0)
DefineStartLocation(9, 2176.0, -5568.0)
DefineStartLocation(10, -1600.0, -6208.0)
DefineStartLocation(11, 5248.0, -1984.0)
DefineStartLocation(12, -5888.0, -2688.0)
InitCustomPlayerSlots()
InitCustomTeams()
InitAllyPriorities()
end

