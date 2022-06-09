udg_samuro = nil
gg_rct_Yellow_Top = nil
gg_rct_Red_Right = nil
gg_rct_Yellow_Bottom = nil
gg_rct_Red_Left = nil
gg_trg_Initialization = nil
gg_unit_Osam_0245 = nil
gg_unit_oalt_0054 = nil
function InitGlobals()
end

function Unit000045_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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

function Unit000048_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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

function Unit000066_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 4), 100)
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

function Unit000071_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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

function Unit000079_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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

function Unit000083_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 4), 100)
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

function Unit000088_DropItems()
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

function Unit000089_DropItems()
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

function Unit000091_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 4), 100)
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

function Unit000097_DropItems()
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

function Unit000101_DropItems()
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

function Unit000104_DropItems()
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

function Unit000108_DropItems()
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

function Unit000109_DropItems()
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

function Unit000113_DropItems()
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

function Unit000118_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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

function Unit000120_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000133_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000134_DropItems()
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

function Unit000140_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 4), 100)
        itemID = RandomDistChoose()
        if (trigUnit ~= nil) then
            UnitDropItem(trigUnit, itemID)
        else
            WidgetDropItem(trigWidget, itemID)
        end
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

function Unit000142_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 4), 100)
        itemID = RandomDistChoose()
        if (trigUnit ~= nil) then
            UnitDropItem(trigUnit, itemID)
        else
            WidgetDropItem(trigWidget, itemID)
        end
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

function Unit000157_DropItems()
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

function Unit000158_DropItems()
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

function Unit000165_DropItems()
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

function Unit000176_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000178_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000206_DropItems()
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

function Unit000221_DropItems()
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

function Unit000232_DropItems()
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

function Unit000235_DropItems()
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

function Unit000242_DropItems()
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

function Unit000245_DropItems()
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

function Unit000254_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 4), 100)
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

function Unit000258_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 5), 100)
        itemID = RandomDistChoose()
        if (trigUnit ~= nil) then
            UnitDropItem(trigUnit, itemID)
        else
            WidgetDropItem(trigWidget, itemID)
        end
        RandomDistReset()
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 2), 100)
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

function Unit000264_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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

function Unit000280_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 4), 100)
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

function Unit000283_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 3), 100)
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

function Unit000288_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000292_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000295_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000297_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000300_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000304_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_PERMANENT, 5), 100)
        itemID = RandomDistChoose()
        if (trigUnit ~= nil) then
            UnitDropItem(trigUnit, itemID)
        else
            WidgetDropItem(trigWidget, itemID)
        end
        RandomDistReset()
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 2), 100)
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

function Unit000305_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000308_DropItems()
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
    end
    bj_lastDyingWidget = nil
    DestroyTrigger(GetTriggeringTrigger())
end

function Unit000313_DropItems()
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
        RandomDistAddItem(ChooseRandomItemEx(ITEM_TYPE_CHARGED, 1), 100)
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
        RandomDistAddItem(FourCC("shhn"), 25)
        RandomDistAddItem(FourCC("klmm"), 25)
        RandomDistAddItem(FourCC("srbd"), 25)
        RandomDistAddItem(FourCC("srtl"), 25)
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

function CreateBuildingsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    gg_unit_oalt_0054 = BlzCreateUnitWithSkin(p, FourCC("oalt"), 8224.0, 6560.0, 270.000, FourCC("oalt"))
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    gg_unit_Osam_0245 = BlzCreateUnitWithSkin(p, FourCC("Osam"), 4365.9, 10814.2, 350.660, FourCC("Osam"))
    SetHeroLevel(gg_unit_Osam_0245, 16, false)
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A001"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A001"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A001"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A001"))
    IssueImmediateOrder(gg_unit_Osam_0245, "")
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A002"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A002"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A002"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A002"))
    IssueImmediateOrder(gg_unit_Osam_0245, "")
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A000"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A000"))
    SelectHeroSkill(gg_unit_Osam_0245, FourCC("A000"))
    IssueImmediateOrder(gg_unit_Osam_0245, "")
    UnitAddItemToSlotById(gg_unit_Osam_0245, FourCC("I000"), 0)
    UnitAddItemToSlotById(gg_unit_Osam_0245, FourCC("desc"), 1)
    UnitAddItemToSlotById(gg_unit_Osam_0245, FourCC("modt"), 2)
    u = BlzCreateUnitWithSkin(p, FourCC("Hmkg"), 7612.4, 6836.3, 335.970, FourCC("Hmkg"))
    SetHeroLevel(u, 25, false)
    SetUnitState(u, UNIT_STATE_MANA, 765)
    u = BlzCreateUnitWithSkin(p, FourCC("Hpal"), 7695.2, 6737.3, 102.154, FourCC("Hpal"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Hblm"), 7829.0, 6828.0, 51.418, FourCC("Hblm"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Hamg"), 7521.6, 6644.4, 38.508, FourCC("Hamg"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Ofar"), 7876.0, 6730.7, 246.563, FourCC("Ofar"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Otch"), 7972.2, 6729.0, 40.574, FourCC("Otch"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Oshd"), 7893.7, 6857.2, 273.392, FourCC("Oshd"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Udea"), 7693.8, 6878.5, 281.940, FourCC("Udea"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Ulic"), 7759.6, 6934.9, 179.577, FourCC("Ulic"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Udre"), 7943.3, 6940.5, 42.233, FourCC("Udre"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Ucrl"), 8051.7, 6880.2, 57.548, FourCC("Ucrl"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Ekee"), 7607.2, 6980.5, 222.095, FourCC("Ekee"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Emoo"), 7754.4, 7055.0, 344.102, FourCC("Emoo"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Edem"), 7852.3, 7057.7, 148.990, FourCC("Edem"))
    SetHeroLevel(u, 25, false)
    u = BlzCreateUnitWithSkin(p, FourCC("Ewar"), 8000.4, 7040.1, 55.131, FourCC("Ewar"))
    SetHeroLevel(u, 25, false)
end

function CreateNeutralHostile()
    local p = Player(PLAYER_NEUTRAL_AGGRESSIVE)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), 4963.0, -9606.6, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000045_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 4987.2, -9418.1, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 4736.4, -9570.7, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 5158.7, -9598.0, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8795.0, -9657.5, 144.148, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8544.3, -9810.1, 117.557, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), 8771.1, -9853.2, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000048_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8966.8, -9844.5, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8762.5, -6307.5, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8511.8, -6460.1, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), 8776.1, -6548.4, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000118_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8971.8, -6539.7, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8811.8, 4770.5, 159.355, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8561.0, 4617.9, 117.925, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), 8772.2, 4568.8, 109.641, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000283_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8967.9, 4577.4, 120.711, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8825.3, 8733.8, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8574.6, 8581.2, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), 8793.0, 8511.1, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000057_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), 8988.6, 8519.7, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -5268.4, 8694.5, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -5519.1, 8541.9, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), -5293.9, 8415.0, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000264_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -5098.2, 8423.6, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -8501.8, 9029.7, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -8752.5, 8877.1, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), -8482.5, 8788.8, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000064_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -8286.9, 8797.4, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -9053.2, -6230.8, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -9304.0, -6383.4, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), -9047.7, -6509.0, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000071_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -8852.1, -6500.4, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -9117.8, -9594.2, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -9368.5, -9746.8, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), -9118.2, -9843.3, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000077_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -8922.6, -9834.7, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -5439.8, -9674.1, 78.006, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -5690.5, -9826.7, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nrvi"), -5459.7, -9900.4, 19.740, FourCC("nrvi"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000079_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("ngh1"), -5264.0, -9891.7, 64.346, FourCC("ngh1"))
    u = BlzCreateUnitWithSkin(p, FourCC("nwna"), -200.2, 9353.2, 273.748, FourCC("nwna"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000258_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nwen"), -215.9, 9146.1, 220.880, FourCC("nwen"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwna"), 598.0, -10452.5, 110.800, FourCC("nwna"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000304_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nwen"), 308.8, -10555.9, 81.197, FourCC("nwen"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwen"), 925.9, -10542.6, 87.036, FourCC("nwen"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwen"), 539.8, -10207.6, 105.417, FourCC("nwen"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwns"), -2403.0, -194.4, 170.100, FourCC("nwns"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000153_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitr"), 1604.6, -1499.2, 322.514, FourCC("nitr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 6398.8, 291.2, 141.476, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 6250.5, -220.0, 163.090, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 6180.0, -16.9, 147.127, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 6702.0, -1974.1, 195.885, FourCC("nnwq"))
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000088_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwr"), 6341.3, -1646.4, 202.886, FourCC("nnwr"))
    IssueImmediateOrder(u, "autodispeloff")
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000089_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -4847.2, -79.0, 18.708, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -4823.0, 248.1, 352.233, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -4737.6, 46.0, 19.381, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -7936.1, 10694.2, 283.008, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000308_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -6001.7, 10840.0, 314.655, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000288_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 6231.6, 10574.0, 323.790, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000206_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10274.1, 7644.0, 170.615, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000133_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10847.2, 6049.1, 257.967, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000305_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -11334.6, -6205.7, 58.723, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000295_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -8133.3, -11549.2, 116.279, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000297_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -5393.6, -11519.7, 33.329, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000176_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 6530.7, -11531.2, 112.348, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000300_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10693.0, -8988.1, 188.849, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000120_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 11160.6, -6667.7, 101.212, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000178_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 7689.3, 1177.7, 261.120, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000157_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -7204.3, 786.2, 126.897, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -7138.6, -1091.4, 206.825, FourCC("nnwq"))
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000109_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwr"), -7313.8, -761.4, 244.622, FourCC("nnwr"))
    IssueImmediateOrder(u, "autodispeloff")
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000108_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -7258.2, -1315.1, 237.079, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -7329.9, -1020.4, 239.153, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -7015.4, -1335.3, 104.414, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 3630.6, 5081.5, 31.779, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000134_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 3606.5, 5269.7, 105.582, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 3793.4, 5013.0, 118.129, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), 3757.6, 5174.5, 51.330, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -3027.8, 6820.4, 156.764, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000158_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -3174.6, 6877.2, 136.064, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -3024.2, 7045.8, 167.288, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), -3178.1, 7099.3, 174.211, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 7841.0, 1198.6, 118.129, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwnr"), 4051.6, 1786.9, 208.533, FourCC("nwnr"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000083_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 4052.6, 1975.2, 249.985, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 2398.0, -8430.9, 9.626, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000224_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 2414.4, -8239.9, 105.582, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 2601.4, -8496.7, 118.129, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), 2637.4, -8289.0, 51.330, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 4213.8, 1694.2, 208.551, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 4134.1, 2124.0, 247.752, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 4365.6, 1681.7, 199.101, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwnr"), 2740.7, -4446.7, 149.350, FourCC("nwnr"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000254_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 2829.6, -4311.4, 171.742, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 2742.9, -4659.8, 129.181, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 3016.9, -4297.8, 175.535, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -6026.3, 2639.5, 88.348, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000113_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -5999.3, 2770.4, 79.910, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -5846.1, 2681.7, 102.194, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), -5906.0, 2842.4, 113.151, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -4920.7, -3057.7, 194.165, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000165_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -5100.5, -3162.9, 200.624, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -5102.5, -2985.9, 222.907, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), -5210.1, -3119.4, 233.864, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 7901.2, -2407.8, 261.120, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000166_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 7898.4, -2227.1, 265.564, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 8085.3, -2483.9, 212.326, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), 8121.4, -2276.2, 233.706, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), 2881.0, -4773.5, 132.046, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwnr"), -4529.9, -5823.8, 31.964, FourCC("nwnr"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000280_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -4735.9, -5727.9, 43.298, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -3406.6, -7714.4, 224.713, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000142_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -3577.6, -7761.6, 200.624, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), -3579.5, -7584.6, 222.907, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), -3687.1, -7718.1, 233.864, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwen"), 127.7, 9263.1, 234.868, FourCC("nwen"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrr"), 7688.8, 1353.2, 105.582, FourCC("nmrr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -4492.9, -6052.9, 80.917, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrl"), 7911.9, 1304.1, 51.330, FourCC("nmrl"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -4939.5, -5738.0, 177.665, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nfrp"), -6615.5, -7226.7, 53.414, FourCC("nfrp"))
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -4643.0, -6251.4, 153.835, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nfrp"), -6640.9, -7039.3, 46.562, FourCC("nfrp"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 6401.0, 28.2, 132.781, FourCC("nnwq"))
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000221_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwr"), 6666.9, 179.7, 148.097, FourCC("nnwr"))
    IssueImmediateOrder(u, "autodispeloff")
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000218_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 6242.1, -1795.0, 253.009, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 6489.1, -2033.1, 236.243, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 6306.5, -1948.4, 200.506, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nfrp"), -6432.8, -7251.7, 61.444, FourCC("nfrp"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000313_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 3853.9, -2308.7, 203.431, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 4056.5, -2474.6, 185.826, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), 3876.8, -2481.5, 186.938, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nwnr"), -3698.7, 2973.6, 306.787, FourCC("nwnr"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000091_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -1023.2, 2923.8, 80.908, FourCC("nnwq"))
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000104_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwr"), -1306.1, 2972.5, 76.888, FourCC("nnwr"))
    IssueImmediateOrder(u, "autodispeloff")
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000101_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwr"), -7031.2, 1306.9, 138.784, FourCC("nnwr"))
    IssueImmediateOrder(u, "autodispeloff")
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000097_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -1419.9, 3218.5, 91.421, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -7337.7, 1093.2, 114.172, FourCC("nnwq"))
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000098_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -7404.2, 867.4, 121.833, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -7357.8, 1349.8, 140.433, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -1077.9, 3165.6, 65.836, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwl"), -1540.1, 3049.3, 69.781, FourCC("nnwl"))
    u = BlzCreateUnitWithSkin(p, FourCC("nnwr"), -5001.9, 371.3, 354.445, FourCC("nnwr"))
    IssueImmediateOrder(u, "autodispeloff")
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000245_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -5013.0, 84.4, 358.464, FourCC("nnwq"))
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000242_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nfrp"), -6448.1, -7048.9, 55.056, FourCC("nfrp"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000066_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("Nplh"), 3339.6, 10193.5, 227.140, FourCC("Nplh"))
    SetHeroLevel(u, 25, false)
    SetUnitState(u, UNIT_STATE_MANA, 750)
    SetUnitAcquireRange(u, 200.0)
    SelectHeroSkill(u, FourCC("ANrf"))
    SelectHeroSkill(u, FourCC("ANrf"))
    SelectHeroSkill(u, FourCC("ANrf"))
    SelectHeroSkill(u, FourCC("ANht"))
    SelectHeroSkill(u, FourCC("ANht"))
    SelectHeroSkill(u, FourCC("ANht"))
    SelectHeroSkill(u, FourCC("ANca"))
    SelectHeroSkill(u, FourCC("ANca"))
    SelectHeroSkill(u, FourCC("ANca"))
    SelectHeroSkill(u, FourCC("ANdo"))
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000316_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nwns"), 1490.9, -1655.8, 329.518, FourCC("nwns"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000140_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 4037.6, -2135.0, 209.220, FourCC("nnwq"))
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000235_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nnwr"), 4270.6, -2471.2, 184.759, FourCC("nnwr"))
    IssueImmediateOrder(u, "autodispeloff")
    IssueImmediateOrder(u, "raisedeadoff")
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000232_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("esen"), 2789.8, 9873.7, 51.670, FourCC("esen"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("earc"), 2788.4, 9792.9, 93.870, FourCC("earc"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("efdr"), 4013.3, 10762.2, 236.510, FourCC("efdr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("ogru"), 2112.9, 9898.6, 4.274, FourCC("ogru"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("otau"), 2248.8, 9750.8, 208.889, FourCC("otau"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -3754.3, 3229.4, 331.878, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -4135.8, 2919.4, 8.071, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -3873.0, 3395.4, 323.473, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nmrm"), -3984.1, 2906.9, 11.184, FourCC("nmrm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nits"), -2377.7, -455.4, 142.684, FourCC("nits"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nits"), 1431.0, -1344.9, 0.000, FourCC("nits"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nits"), 1361.1, -1828.2, 0.802, FourCC("nits"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nits"), -2279.8, 25.6, 195.489, FourCC("nits"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -2452.3, -29.9, 194.356, FourCC("nitr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10403.2, 7611.8, 220.277, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("orai"), 2097.9, 9770.2, 291.795, FourCC("orai"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10823.2, -8994.8, 192.818, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("ohun"), 2224.0, 9874.7, 152.506, FourCC("ohun"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10780.1, -8833.9, 216.926, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nwen"), -514.4, 9269.3, 277.980, FourCC("nwen"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("ocat"), 2402.9, 9864.8, 195.376, FourCC("ocat"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10360.2, 7772.7, 249.736, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 6347.6, 10525.4, 251.662, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("okod"), 2389.6, 9670.2, 90.069, FourCC("okod"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 6304.5, 10686.4, 267.652, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -5865.6, 10783.5, 283.384, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("efdr"), 4115.7, 10716.1, 236.510, FourCC("efdr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -5908.6, 10944.5, 283.974, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -7801.1, 10631.6, 260.940, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -7844.1, 10792.6, 270.173, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -10943.3, 6446.6, 301.393, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -11076.1, 6476.7, 323.790, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    t = CreateTrigger()
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
    TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
    TriggerAddAction(t, Unit000292_DropItems)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -10986.3, 6607.5, 292.536, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -11189.4, -6240.4, 71.359, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("odoc"), 1954.8, 9613.5, 59.756, FourCC("odoc"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -11232.5, -6079.5, 355.207, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -7990.8, -11587.8, 129.473, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("oshm"), 2068.0, 9533.4, 32.795, FourCC("oshm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -8033.9, -11426.9, 148.821, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -5248.7, -11563.3, 23.121, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("ospw"), 2356.9, 9460.2, 272.821, FourCC("ospw"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), -5291.8, -11402.4, 345.438, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 6697.9, -11563.5, 129.473, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 2537.2, 9744.5, 246.826, FourCC("hfoo"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 6654.8, -11402.6, 148.821, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 11323.1, -6686.6, 129.473, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 2513.1, 9600.1, 258.890, FourCC("hkni"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 11280.1, -6525.7, 148.821, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 2591.0, 9866.8, 298.936, FourCC("hrif"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hmtm"), 2714.6, 9718.8, 351.738, FourCC("hmtm"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hpea"), 2550.8, 10046.8, 237.213, FourCC("hpea"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 2701.9, 9825.2, 291.586, FourCC("hmpr"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hsor"), 2323.7, 10088.4, 259.384, FourCC("hsor"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hmtt"), 2162.9, 10051.3, 167.777, FourCC("hmtt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hspt"), 1963.2, 9904.7, 91.717, FourCC("hspt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("uaco"), 2580.4, 9943.0, 154.132, FourCC("uaco"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 2686.5, 9912.9, 121.622, FourCC("ugho"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 2456.9, 10070.9, 267.778, FourCC("uabo"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 2689.6, 9998.6, 351.694, FourCC("umtw"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("ucry"), 2647.0, 9769.8, 259.780, FourCC("ucry"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("uban"), 2034.1, 9990.6, 112.394, FourCC("uban"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("unec"), 2145.6, 9818.8, 19.545, FourCC("unec"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("uobs"), 2294.0, 9950.7, 250.551, FourCC("uobs"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10941.7, 6177.4, 227.872, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("nitt"), 10984.8, 6016.4, 212.160, FourCC("nitt"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("ebal"), 2722.7, 9593.1, 174.150, FourCC("ebal"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("edry"), 2573.3, 10126.7, 36.827, FourCC("edry"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("edot"), 2330.1, 9525.3, 134.147, FourCC("edot"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("edoc"), 2196.9, 9437.5, 105.022, FourCC("edoc"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("emtg"), 2058.2, 9401.8, 273.172, FourCC("emtg"))
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("efdr"), 2081.3, 9539.6, 236.510, FourCC("efdr"))
    SetUnitAcquireRange(u, 200.0)
end

function CreateNeutralPassiveBuildings()
    local p = Player(PLAYER_NEUTRAL_PASSIVE)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 5312.0, 8448.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 9280.0, 9216.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 9088.0, 4096.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 9216.0, -10112.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 8960.0, -5760.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 4736.0, -10048.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -9600.0, -10176.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -4928.0, -9728.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -9344.0, -5632.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -9216.0, 9280.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -4736.0, 8832.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -8960.0, 6592.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -5312.0, 128.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 6528.0, -256.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 1088.0, 640.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("nwgt"), -192.0, 5376.0, 270.000, FourCC("nwgt"))
    WaygateSetDestination(u, GetRectCenterX(gg_rct_Yellow_Bottom), GetRectCenterY(gg_rct_Yellow_Bottom))
    WaygateActivate(u, true)
    SetUnitColor(u, ConvertPlayerColor(4))
    u = BlzCreateUnitWithSkin(p, FourCC("nwgt"), -832.0, -7424.0, 270.000, FourCC("nwgt"))
    WaygateSetDestination(u, GetRectCenterX(gg_rct_Yellow_Top), GetRectCenterY(gg_rct_Yellow_Top))
    WaygateActivate(u, true)
    SetUnitColor(u, ConvertPlayerColor(4))
    u = BlzCreateUnitWithSkin(p, FourCC("nwgt"), 8576.0, -512.0, 270.000, FourCC("nwgt"))
    WaygateSetDestination(u, GetRectCenterX(gg_rct_Red_Left), GetRectCenterY(gg_rct_Red_Left))
    WaygateActivate(u, true)
    SetUnitColor(u, ConvertPlayerColor(0))
    u = BlzCreateUnitWithSkin(p, FourCC("nwgt"), -9152.0, -512.0, 270.000, FourCC("nwgt"))
    WaygateSetDestination(u, GetRectCenterX(gg_rct_Red_Right), GetRectCenterY(gg_rct_Red_Right))
    WaygateActivate(u, true)
    SetUnitColor(u, ConvertPlayerColor(0))
    u = BlzCreateUnitWithSkin(p, FourCC("nmr7"), 576.0, -10752.0, 270.000, FourCC("nmr7"))
    SetUnitColor(u, ConvertPlayerColor(3))
    u = BlzCreateUnitWithSkin(p, FourCC("nmr7"), -192.0, 9792.0, 270.000, FourCC("nmr7"))
    SetUnitColor(u, ConvertPlayerColor(3))
    u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), 4288.0, 1920.0, 270.000, FourCC("nfoh"))
    u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), 2944.0, -4544.0, 270.000, FourCC("nfoh"))
    u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), -4800.0, -6016.0, 270.000, FourCC("nfoh"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -1856.0, -2688.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -1280.0, 2688.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -7040.0, 1024.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -7040.0, -768.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 6656.0, -1600.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -768.0, -5952.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 4352.0, -2176.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 5696.0, 5952.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -5504.0, 6720.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -6784.0, -7680.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 6720.0, -4608.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("ngol"), 4224.0, -7104.0, 270.000, FourCC("ngol"))
    SetResourceAmount(u, 1000000)
    u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), -3968.0, 3136.0, 270.000, FourCC("nfoh"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngme"), 1280.0, -1536.0, 270.000, FourCC("ngme"))
    u = BlzCreateUnitWithSkin(p, FourCC("ngme"), -2176.0, -256.0, 270.000, FourCC("ngme"))
end

function CreateNeutralPassive()
    local p = Player(PLAYER_NEUTRAL_PASSIVE)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -2468.9, -8089.2, 191.959, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -2787.0, -5489.1, 264.383, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 1459.9, -4120.0, 8.559, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 3101.7, -6056.8, 87.058, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 6254.5, -5454.5, 18.315, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 7859.6, -4891.9, 84.213, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 8762.7, -2147.2, 332.665, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 7727.9, 1303.5, 281.456, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 3069.2, -1557.8, 102.429, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 2776.3, 940.9, 39.365, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 732.5, 3980.6, 187.652, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -1931.9, 3610.8, 240.410, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 316.8, 6879.4, 318.921, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 3617.8, 7206.9, 242.871, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 6234.9, 4807.6, 145.474, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 6446.5, -5058.0, 307.385, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 3211.9, -9321.4, 128.950, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 1237.6, -10128.2, 181.643, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -2593.5, -2159.0, 114.239, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -4821.6, -8115.2, 302.408, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -7064.4, -4973.4, 61.262, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -9244.0, -2700.1, 86.828, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -7794.0, 1790.7, 308.737, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -4237.4, 7985.7, 341.279, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -1708.4, 4683.8, 70.249, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 9268.2, 756.2, 158.043, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 6479.4, 3062.9, 349.717, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 1598.7, 9584.9, 345.937, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), -1663.9, 9175.3, 278.193, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 5923.3, 5422.2, 270.209, FourCC("nsea"))
    u = BlzCreateUnitWithSkin(p, FourCC("nsea"), 6405.2, -5654.5, 354.254, FourCC("nsea"))
end

function CreatePlayerBuildings()
    CreateBuildingsForPlayer0()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
end

function CreateAllUnits()
    CreateNeutralPassiveBuildings()
    CreatePlayerBuildings()
    CreateNeutralHostile()
    CreateNeutralPassive()
    CreatePlayerUnits()
end

function CreateRegions()
    local we
    gg_rct_Yellow_Top = Rect(-512.0, 4992.0, 256.0, 5760.0)
    gg_rct_Red_Right = Rect(8192.0, -896.0, 8960.0, -128.0)
    gg_rct_Yellow_Bottom = Rect(-1184.0, -7808.0, -416.0, -7040.0)
    gg_rct_Red_Left = Rect(-9536.0, -896.0, -8768.0, -128.0)
end

function Trig_Initialization_Func012A()
        ConvertAIDifficulty(2)
end

function Trig_Initialization_Actions()
    MeleeStartingVisibility()
    MeleeStartingHeroLimit()
    MeleeGrantHeroItems()
    MeleeStartingResources()
    MeleeClearExcessUnits()
    MeleeStartingUnits()
    MeleeStartingAI()
    MeleeInitVictoryDefeat()
    udg_samuro = gg_unit_Osam_0245
    SetUnitInvulnerable(gg_unit_oalt_0054, true)
    ForForce(GetPlayersAll(), Trig_Initialization_Func012A)
end

function InitTrig_Initialization()
    gg_trg_Initialization = CreateTrigger()
    TriggerAddAction(gg_trg_Initialization, Trig_Initialization_Actions)
end

function InitCustomTriggers()
    InitTrig_Initialization()
end

function RunInitializationTriggers()
    ConditionalTriggerExecute(gg_trg_Initialization)
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(0), false)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(1), 1)
    SetPlayerColor(Player(1), ConvertPlayerColor(1))
    SetPlayerRacePreference(Player(1), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(1), false)
    SetPlayerController(Player(1), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(2), 2)
    SetPlayerColor(Player(2), ConvertPlayerColor(2))
    SetPlayerRacePreference(Player(2), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(2), false)
    SetPlayerController(Player(2), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(3), 3)
    SetPlayerColor(Player(3), ConvertPlayerColor(3))
    SetPlayerRacePreference(Player(3), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(3), false)
    SetPlayerController(Player(3), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(4), 4)
    SetPlayerColor(Player(4), ConvertPlayerColor(4))
    SetPlayerRacePreference(Player(4), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(4), false)
    SetPlayerController(Player(4), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(5), 5)
    SetPlayerColor(Player(5), ConvertPlayerColor(5))
    SetPlayerRacePreference(Player(5), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(5), false)
    SetPlayerController(Player(5), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(6), 6)
    SetPlayerColor(Player(6), ConvertPlayerColor(6))
    SetPlayerRacePreference(Player(6), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(6), false)
    SetPlayerController(Player(6), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(7), 7)
    SetPlayerColor(Player(7), ConvertPlayerColor(7))
    SetPlayerRacePreference(Player(7), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(7), false)
    SetPlayerController(Player(7), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(8), 8)
    SetPlayerColor(Player(8), ConvertPlayerColor(8))
    SetPlayerRacePreference(Player(8), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(8), false)
    SetPlayerController(Player(8), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(9), 9)
    SetPlayerColor(Player(9), ConvertPlayerColor(9))
    SetPlayerRacePreference(Player(9), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(9), false)
    SetPlayerController(Player(9), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(10), 10)
    SetPlayerColor(Player(10), ConvertPlayerColor(10))
    SetPlayerRacePreference(Player(10), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(10), false)
    SetPlayerController(Player(10), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(11), 11)
    SetPlayerColor(Player(11), ConvertPlayerColor(11))
    SetPlayerRacePreference(Player(11), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(11), false)
    SetPlayerController(Player(11), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(12), 12)
    SetPlayerColor(Player(12), ConvertPlayerColor(12))
    SetPlayerRacePreference(Player(12), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(12), false)
    SetPlayerController(Player(12), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(13), 13)
    SetPlayerColor(Player(13), ConvertPlayerColor(13))
    SetPlayerRacePreference(Player(13), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(13), false)
    SetPlayerController(Player(13), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(14), 14)
    SetPlayerColor(Player(14), ConvertPlayerColor(14))
    SetPlayerRacePreference(Player(14), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(14), false)
    SetPlayerController(Player(14), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(15), 15)
    SetPlayerColor(Player(15), ConvertPlayerColor(15))
    SetPlayerRacePreference(Player(15), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(15), false)
    SetPlayerController(Player(15), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(16), 16)
    SetPlayerColor(Player(16), ConvertPlayerColor(16))
    SetPlayerRacePreference(Player(16), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(16), false)
    SetPlayerController(Player(16), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(17), 17)
    SetPlayerColor(Player(17), ConvertPlayerColor(17))
    SetPlayerRacePreference(Player(17), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(17), false)
    SetPlayerController(Player(17), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(18), 18)
    SetPlayerColor(Player(18), ConvertPlayerColor(18))
    SetPlayerRacePreference(Player(18), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(18), false)
    SetPlayerController(Player(18), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(19), 19)
    SetPlayerColor(Player(19), ConvertPlayerColor(19))
    SetPlayerRacePreference(Player(19), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(19), false)
    SetPlayerController(Player(19), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(20), 20)
    SetPlayerColor(Player(20), ConvertPlayerColor(20))
    SetPlayerRacePreference(Player(20), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(20), false)
    SetPlayerController(Player(20), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(21), 21)
    SetPlayerColor(Player(21), ConvertPlayerColor(21))
    SetPlayerRacePreference(Player(21), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(21), false)
    SetPlayerController(Player(21), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(22), 22)
    SetPlayerColor(Player(22), ConvertPlayerColor(22))
    SetPlayerRacePreference(Player(22), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(22), false)
    SetPlayerController(Player(22), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(23), 23)
    SetPlayerColor(Player(23), ConvertPlayerColor(23))
    SetPlayerRacePreference(Player(23), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(23), false)
    SetPlayerController(Player(23), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
    SetPlayerState(Player(0), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(1), 0)
    SetPlayerState(Player(1), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(2), 0)
    SetPlayerState(Player(2), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(3), 0)
    SetPlayerState(Player(3), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(4), 0)
    SetPlayerState(Player(4), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(6), 0)
    SetPlayerState(Player(6), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(7), 0)
    SetPlayerState(Player(7), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(8), 0)
    SetPlayerState(Player(8), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(11), 0)
    SetPlayerState(Player(11), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(4), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(6), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(8), true)
    SetPlayerAllianceStateVisionBJ(Player(7), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(8), Player(11), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(4), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(6), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(7), true)
    SetPlayerAllianceStateVisionBJ(Player(11), Player(8), true)
    SetPlayerTeam(Player(5), 1)
    SetPlayerState(Player(5), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(9), 1)
    SetPlayerState(Player(9), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(10), 1)
    SetPlayerState(Player(10), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(12), 1)
    SetPlayerState(Player(12), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(13), 1)
    SetPlayerState(Player(13), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(14), 1)
    SetPlayerState(Player(14), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(15), 1)
    SetPlayerState(Player(15), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(16), 1)
    SetPlayerState(Player(16), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(17), 1)
    SetPlayerState(Player(17), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(18), 1)
    SetPlayerState(Player(18), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(19), 1)
    SetPlayerState(Player(19), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(20), 1)
    SetPlayerState(Player(20), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(21), 1)
    SetPlayerState(Player(21), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(22), 1)
    SetPlayerState(Player(22), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(23), 1)
    SetPlayerState(Player(23), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(16), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(17), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(18), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(19), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(20), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(22), true)
    SetPlayerAllianceStateAllyBJ(Player(21), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(22), Player(23), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(16), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(17), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(18), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(19), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(20), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(21), true)
    SetPlayerAllianceStateAllyBJ(Player(23), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(5), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(9), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(10), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(16), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(17), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(18), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(19), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(20), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(22), true)
    SetPlayerAllianceStateVisionBJ(Player(21), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(22), Player(23), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(5), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(9), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(10), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(16), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(17), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(18), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(19), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(20), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(21), true)
    SetPlayerAllianceStateVisionBJ(Player(23), Player(22), true)
end

function InitAllyPriorities()
    SetStartLocPrioCount(0, 3)
    SetStartLocPrio(0, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(0, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(0, 2, 11, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(1, 8)
    SetStartLocPrio(1, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(1, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(1, 2, 12, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(1, 3, 13, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(1, 4, 14, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(1, 5, 15, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(1, 6, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(1, 7, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(2, 3)
    SetStartLocPrio(2, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(2, 1, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(2, 2, 3, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(3, 9)
    SetStartLocPrio(3, 0, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 1, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(3, 2, 5, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(3, 3, 17, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 4, 18, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 5, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 6, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 7, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 8, 22, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrioCount(3, 5)
    SetEnemyStartLocPrio(3, 0, 17, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(3, 1, 19, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(3, 2, 20, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(3, 3, 21, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(3, 4, 22, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(4, 7)
    SetStartLocPrio(4, 0, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 1, 5, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 2, 17, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(4, 3, 18, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 4, 19, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 5, 20, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 6, 21, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrioCount(4, 6)
    SetEnemyStartLocPrio(4, 0, 17, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(4, 1, 18, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(4, 2, 19, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(4, 3, 20, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(4, 4, 21, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(4, 5, 22, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(5, 8)
    SetStartLocPrio(5, 0, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(5, 1, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(5, 2, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 3, 17, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 4, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 5, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 6, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 7, 22, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(6, 7)
    SetStartLocPrio(6, 0, 5, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(6, 1, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(6, 2, 8, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(6, 3, 18, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(6, 4, 21, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(6, 5, 22, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(6, 6, 23, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrioCount(6, 5)
    SetEnemyStartLocPrio(6, 0, 15, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(6, 1, 17, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(6, 2, 18, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(6, 3, 19, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(6, 4, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(7, 6)
    SetStartLocPrio(7, 0, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(7, 1, 8, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(7, 2, 17, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 3, 18, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 4, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 5, 20, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(7, 6)
    SetEnemyStartLocPrio(7, 0, 14, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(7, 1, 15, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(7, 2, 19, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(7, 3, 21, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(7, 4, 22, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(7, 5, 23, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(8, 7)
    SetStartLocPrio(8, 0, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(8, 1, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(8, 2, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(8, 3, 15, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(8, 4, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(8, 5, 22, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(8, 6, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(8, 3)
    SetEnemyStartLocPrio(8, 0, 21, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(8, 1, 22, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(8, 2, 23, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(9, 10)
    SetStartLocPrio(9, 0, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(9, 1, 10, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 2, 11, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 3, 15, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(9, 4, 16, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(9, 5, 18, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(9, 6, 19, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 7, 20, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 8, 22, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 9, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(9, 9)
    SetEnemyStartLocPrio(9, 0, 14, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(9, 1, 16, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(9, 2, 17, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(9, 3, 18, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(9, 4, 19, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(9, 5, 20, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(9, 6, 21, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(9, 7, 22, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(9, 8, 23, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(10, 10)
    SetStartLocPrio(10, 0, 9, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(10, 1, 11, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(10, 2, 15, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(10, 3, 17, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(10, 4, 18, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(10, 5, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(10, 6, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(10, 7, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(10, 8, 22, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(10, 9, 23, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrioCount(10, 5)
    SetEnemyStartLocPrio(10, 0, 19, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(10, 1, 20, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(10, 2, 21, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(10, 3, 22, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(10, 4, 23, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(11, 8)
    SetStartLocPrio(11, 0, 0, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 1, 9, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(11, 2, 10, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(11, 3, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 4, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 5, 21, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(11, 6, 22, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 7, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(11, 7)
    SetEnemyStartLocPrio(11, 0, 14, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(11, 1, 16, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(11, 2, 17, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(11, 3, 18, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(11, 4, 20, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(11, 5, 22, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(11, 6, 23, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(12, 6)
    SetStartLocPrio(12, 0, 17, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(12, 1, 18, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(12, 2, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(12, 3, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(12, 4, 22, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(12, 5, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(12, 6)
    SetEnemyStartLocPrio(12, 0, 15, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(12, 1, 19, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(12, 2, 20, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(12, 3, 21, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(12, 4, 22, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(12, 5, 23, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(13, 5)
    SetStartLocPrio(13, 0, 16, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(13, 1, 18, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(13, 2, 19, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(13, 3, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(13, 4, 22, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(13, 6)
    SetEnemyStartLocPrio(13, 0, 4, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(13, 1, 5, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(13, 2, 7, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(13, 3, 8, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(13, 4, 9, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(13, 5, 10, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(14, 12)
    SetStartLocPrio(14, 0, 4, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 1, 7, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 2, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 3, 9, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(14, 4, 13, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 5, 16, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 6, 17, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 7, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 8, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 9, 22, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(14, 10, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(14, 18)
    SetEnemyStartLocPrio(14, 0, 1, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(14, 1, 3, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 2, 4, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 3, 5, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(14, 4, 6, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(14, 5, 7, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 6, 8, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(14, 7, 9, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 8, 11, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(14, 9, 12, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 10, 15, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 11, 16, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(14, 12, 17, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 13, 18, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 14, 20, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 15, 21, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(14, 16, 23, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(15, 18)
    SetStartLocPrio(15, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(15, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(15, 2, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(15, 3, 5, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 4, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(15, 5, 7, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 6, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 7, 9, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(15, 8, 11, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 9, 12, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 10, 14, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(15, 11, 16, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 12, 18, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 13, 20, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(15, 14, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 15, 22, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(15, 16, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(15, 19)
    SetEnemyStartLocPrio(15, 0, 0, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 1, 1, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 2, 2, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 3, 3, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 4, 4, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(15, 5, 5, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(15, 6, 6, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 7, 7, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 8, 8, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(15, 9, 9, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 10, 10, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 11, 11, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 12, 12, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 13, 13, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 14, 14, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 15, 16, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(15, 16, 19, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(15, 17, 23, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(16, 14)
    SetStartLocPrio(16, 0, 0, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(16, 1, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(16, 2, 5, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(16, 3, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(16, 4, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(16, 5, 10, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(16, 6, 13, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(16, 7, 14, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(16, 8, 18, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(16, 9, 19, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(16, 10, 20, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(16, 11, 21, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(16, 12, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(16, 21)
    SetEnemyStartLocPrio(16, 0, 0, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(16, 1, 1, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 2, 2, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 3, 3, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 4, 4, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 5, 5, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 6, 6, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 7, 7, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 8, 8, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(16, 9, 9, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 10, 10, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 11, 11, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 12, 12, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 13, 13, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 14, 14, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(16, 15, 17, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 16, 18, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 17, 19, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(16, 18, 20, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(16, 19, 21, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(16, 20, 23, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(17, 20)
    SetStartLocPrio(17, 0, 0, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 1, 1, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 2, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(17, 3, 3, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 4, 4, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 5, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 6, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(17, 7, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 8, 10, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 9, 11, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(17, 10, 12, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 11, 13, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(17, 12, 14, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(17, 13, 15, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 14, 16, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 15, 18, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 16, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(17, 17, 21, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(17, 18, 22, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(17, 19)
    SetEnemyStartLocPrio(17, 0, 0, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 1, 1, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 2, 2, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 3, 3, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 4, 4, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(17, 5, 6, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 6, 7, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 7, 8, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 8, 9, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(17, 9, 10, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(17, 10, 12, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 11, 13, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 12, 14, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 13, 15, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(17, 14, 16, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 15, 18, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(17, 16, 21, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(17, 17, 22, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(17, 18, 23, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(18, 15)
    SetStartLocPrio(18, 0, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 1, 3, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 2, 4, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 3, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 4, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(18, 5, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 6, 15, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 7, 16, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(18, 8, 17, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 9, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 10, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(18, 11, 21, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(18, 12, 22, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(18, 13, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(18, 13)
    SetEnemyStartLocPrio(18, 0, 1, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 1, 3, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 2, 6, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 3, 7, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 4, 9, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 5, 10, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 6, 12, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 7, 13, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 8, 15, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 9, 21, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 10, 22, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(18, 11, 23, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(19, 18)
    SetStartLocPrio(19, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(19, 1, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(19, 2, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 3, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(19, 4, 5, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 5, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 6, 7, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 7, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 8, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 9, 10, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(19, 10, 11, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 11, 13, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 12, 15, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 13, 16, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(19, 14, 20, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 15, 21, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(19, 16, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(19, 10)
    SetEnemyStartLocPrio(19, 0, 6, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 1, 7, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 2, 9, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 3, 12, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 4, 13, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 5, 14, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 6, 15, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 7, 20, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(19, 8, 23, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(20, 15)
    SetStartLocPrio(20, 0, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 1, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 2, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 3, 5, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 4, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 5, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 6, 8, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 7, 13, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 8, 14, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 9, 16, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 10, 18, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 11, 21, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 12, 22, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(20, 13, 23, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrioCount(20, 14)
    SetEnemyStartLocPrio(20, 0, 2, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(20, 1, 4, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(20, 2, 5, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(20, 3, 7, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(20, 4, 8, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(20, 5, 11, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(20, 6, 12, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(20, 7, 14, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(20, 8, 16, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(20, 9, 17, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(20, 10, 21, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(20, 11, 22, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(20, 12, 23, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(21, 7)
    SetStartLocPrio(21, 0, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(21, 1, 10, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(21, 2, 12, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(21, 3, 15, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(21, 4, 16, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(21, 5, 19, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(21, 6, 23, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrioCount(21, 15)
    SetEnemyStartLocPrio(21, 0, 0, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 1, 1, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 2, 2, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(21, 3, 4, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 4, 5, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 5, 6, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 6, 9, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 7, 11, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 8, 12, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 9, 15, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(21, 10, 16, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 11, 19, MAP_LOC_PRIO_LOW)
    SetEnemyStartLocPrio(21, 12, 20, MAP_LOC_PRIO_HIGH)
    SetEnemyStartLocPrio(21, 13, 23, MAP_LOC_PRIO_HIGH)
end

function main()
    SetCameraBounds(-11520.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -11776.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 11520.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 11264.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -11520.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 11264.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 11520.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -11776.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("NorthrendDay")
    SetAmbientNightSound("NorthrendNight")
    SetMapMusic("Music", true, 0)
    CreateRegions()
    CreateAllUnits()
    InitBlizzard()
    InitGlobals()
    InitCustomTriggers()
    RunInitializationTriggers()
end

function config()
    SetMapName("TRIGSTR_000")
    SetMapDescription("TRIGSTR_002")
    SetPlayers(24)
    SetTeams(24)
    SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
    DefineStartLocation(0, 3840.0, -2496.0)
    DefineStartLocation(1, 8768.0, 8640.0)
    DefineStartLocation(2, 8768.0, 4800.0)
    DefineStartLocation(3, -6784.0, -6912.0)
    DefineStartLocation(4, 6144.0, 8064.0)
    DefineStartLocation(5, -2176.0, -3008.0)
    DefineStartLocation(6, -5696.0, -9792.0)
    DefineStartLocation(7, -9088.0, -9600.0)
    DefineStartLocation(8, -9088.0, -6400.0)
    DefineStartLocation(9, -448.0, -5312.0)
    DefineStartLocation(10, 6144.0, -1536.0)
    DefineStartLocation(11, 6208.0, 5632.0)
    DefineStartLocation(12, 8768.0, -6464.0)
    DefineStartLocation(13, 8832.0, -9728.0)
    DefineStartLocation(14, 5056.0, -9472.0)
    DefineStartLocation(15, 4736.0, -6848.0)
    DefineStartLocation(16, 6720.0, -5184.0)
    DefineStartLocation(17, -8448.0, 6528.0)
    DefineStartLocation(18, -8512.0, 8832.0)
    DefineStartLocation(19, -5248.0, 8512.0)
    DefineStartLocation(20, -7424.0, 1024.0)
    DefineStartLocation(21, -5760.0, 6144.0)
    DefineStartLocation(22, -1152.0, 3328.0)
    DefineStartLocation(23, 896.0, 1088.0)
    InitCustomPlayerSlots()
    InitCustomTeams()
    InitAllyPriorities()
end

