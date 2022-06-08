gg_trg_Initialization = nil
gg_trg_test = nil
gg_unit_Hblm_0003 = nil
gg_unit_Hpal_0002 = nil
gg_unit_h000_0006 = nil
function InitGlobals()
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    gg_unit_Hblm_0003 = BlzCreateUnitWithSkin(p, FourCC("Hblm"), -162.7, -1195.9, 3.210, FourCC("Hblm"))
    SetHeroLevel(gg_unit_Hblm_0003, 10, false)
    SetHeroStr(gg_unit_Hblm_0003, 999, true)
    SetHeroAgi(gg_unit_Hblm_0003, 23, true)
    SetHeroInt(gg_unit_Hblm_0003, 46, true)
    SetUnitState(gg_unit_Hblm_0003, UNIT_STATE_MANA, 690)
    SelectHeroSkill(gg_unit_Hblm_0003, FourCC("A000"))
    SelectHeroSkill(gg_unit_Hblm_0003, FourCC("A000"))
    SelectHeroSkill(gg_unit_Hblm_0003, FourCC("A000"))
    IssueImmediateOrder(gg_unit_Hblm_0003, "")
    gg_unit_h000_0006 = BlzCreateUnitWithSkin(p, FourCC("h000"), 365.9, -280.6, 338.170, FourCC("h000"))
    u = BlzCreateUnitWithSkin(p, FourCC("Hblm"), -561.4, 111.8, 3.210, FourCC("Hblm"))
    SetHeroLevel(u, 10, false)
    SetHeroStr(u, 999, true)
    SetHeroAgi(u, 23, true)
    SetHeroInt(u, 46, true)
    SetUnitState(u, UNIT_STATE_MANA, 690)
    SelectHeroSkill(u, FourCC("A000"))
    SelectHeroSkill(u, FourCC("A000"))
    SelectHeroSkill(u, FourCC("A000"))
    IssueImmediateOrder(u, "")
    u = BlzCreateUnitWithSkin(p, FourCC("Hblm"), -345.4, -1435.9, 3.210, FourCC("Hblm"))
    SetHeroLevel(u, 10, false)
    SetHeroStr(u, 999, true)
    SetHeroAgi(u, 23, true)
    SetHeroInt(u, 46, true)
    SetUnitState(u, UNIT_STATE_MANA, 690)
    SelectHeroSkill(u, FourCC("A000"))
    SelectHeroSkill(u, FourCC("A000"))
    SelectHeroSkill(u, FourCC("A000"))
    IssueImmediateOrder(u, "")
    UnitAddItemToSlotById(u, FourCC("desc"), 0)
    u = BlzCreateUnitWithSkin(p, FourCC("Obla"), -686.7, -1873.9, 359.270, FourCC("Obla"))
    SetHeroLevel(u, 10, false)
    SetHeroStr(u, 999, true)
    SetHeroAgi(u, 38, true)
    SetHeroInt(u, 36, true)
    SetUnitState(u, UNIT_STATE_MANA, 540)
    SelectHeroSkill(u, FourCC("A000"))
    SelectHeroSkill(u, FourCC("A000"))
    SelectHeroSkill(u, FourCC("A000"))
    IssueImmediateOrder(u, "")
end

function CreateUnitsForPlayer1()
    local p = Player(1)
    local u
    local unitID
    local t
    local life
    gg_unit_Hpal_0002 = BlzCreateUnitWithSkin(p, FourCC("Hpal"), 237.9, -832.4, 269.898, FourCC("Hpal"))
end

function CreateUnitsForPlayer5()
    local p = Player(5)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("Hamg"), -972.6, -450.6, 293.330, FourCC("Hamg"))
    SetHeroStr(u, 999, true)
    SetHeroAgi(u, 17, true)
    SetHeroInt(u, 1, true)
    SetUnitState(u, UNIT_STATE_MANA, 15)
    SetUnitAcquireRange(u, 200.0)
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1256.1, -733.6, 276.589, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1168.1, -777.4, 260.186, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1204.5, -924.1, 167.030, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1320.8, -929.2, 245.541, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1257.4, -1080.2, 324.568, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1146.9, -1044.7, 165.877, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1188.4, -1239.4, 47.693, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1271.1, -1216.2, 68.557, FourCC("hfoo"))
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
    CreateUnitsForPlayer1()
    CreateUnitsForPlayer5()
end

function CreateAllUnits()
    CreatePlayerBuildings()
    CreatePlayerUnits()
end

--
function Trig_Initialization_Actions()
    SelectUnitForPlayerSingle(gg_unit_Hblm_0003, Player(0))
    SelectUnitForPlayerSingle(gg_unit_h000_0006, Player(2))
    SelectUnitForPlayerSingle(gg_unit_Hpal_0002, Player(1))
end

function InitTrig_Initialization()
    gg_trg_Initialization = CreateTrigger()
    TriggerAddAction(gg_trg_Initialization, Trig_Initialization_Actions)
end

function Trig_test_Conditions()
    if (not (GetSpellAbilityId() == FourCC("AUan"))) then
        return false
    end
    return true
end

function Trig_test_Actions()
    CreateNUnitsAtLocFacingLocBJ(1, FourCC("hfoo"), Player(0), GetRectCenter(GetPlayableMapRect()), GetUnitLoc(GetTriggerUnit()))
end

function InitTrig_test()
    gg_trg_test = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(gg_trg_test, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    TriggerAddCondition(gg_trg_test, Condition(Trig_test_Conditions))
    TriggerAddAction(gg_trg_test, Trig_test_Actions)
end

function InitCustomTriggers()
    InitTrig_Initialization()
    InitTrig_test()
end

function RunInitializationTriggers()
    ConditionalTriggerExecute(gg_trg_Initialization)
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
    SetPlayerRacePreference(Player(1), RACE_PREF_ORC)
    SetPlayerRaceSelectable(Player(1), false)
    SetPlayerController(Player(1), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(2), 2)
    ForcePlayerStartLocation(Player(2), 2)
    SetPlayerColor(Player(2), ConvertPlayerColor(2))
    SetPlayerRacePreference(Player(2), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(2), false)
    SetPlayerController(Player(2), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(3), 3)
    ForcePlayerStartLocation(Player(3), 3)
    SetPlayerColor(Player(3), ConvertPlayerColor(3))
    SetPlayerRacePreference(Player(3), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(3), false)
    SetPlayerController(Player(3), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(11), 4)
    ForcePlayerStartLocation(Player(11), 4)
    SetPlayerColor(Player(11), ConvertPlayerColor(11))
    SetPlayerRacePreference(Player(11), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(11), false)
    SetPlayerController(Player(11), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
    SetPlayerTeam(Player(1), 0)
    SetPlayerTeam(Player(2), 0)
    SetPlayerTeam(Player(3), 0)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(2), true)
    SetPlayerTeam(Player(11), 1)
end

function InitAllyPriorities()
    SetStartLocPrioCount(0, 3)
    SetStartLocPrio(0, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(0, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(0, 2, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(1, 2)
    SetStartLocPrio(1, 0, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(1, 1, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(2, 2)
    SetStartLocPrio(2, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(2, 1, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(3, 2)
    SetStartLocPrio(3, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(3, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(4, 3)
    SetStartLocPrio(4, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 1, 2, MAP_LOC_PRIO_HIGH)
end

function main()
    SetCameraBounds(-3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateAllUnits()
    InitBlizzard()
    InitGlobals()
    InitCustomTriggers()
    RunInitializationTriggers()
end

function config()
    SetMapName("TRIGSTR_001")
    SetMapDescription("TRIGSTR_003")
    SetPlayers(5)
    SetTeams(5)
    SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)
    DefineStartLocation(0, 64.0, -832.0)
    DefineStartLocation(1, 128.0, -896.0)
    DefineStartLocation(2, 128.0, -896.0)
    DefineStartLocation(3, 128.0, -896.0)
    DefineStartLocation(4, 128.0, -896.0)
    InitCustomPlayerSlots()
    InitCustomTeams()
    InitAllyPriorities()
end

