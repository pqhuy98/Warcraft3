gg_rct_Unit_experiments = nil
gg_trg_Melee_Initialization = nil
gg_trg_Camera_constant = nil
function InitGlobals()
end

function CreateUnitsForPlayer0()
local p = Player(0)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("H001"), -115.0, 1453.0, 260.643, FourCC("H001"))
SetHeroLevel(u, 100, false)
SetUnitState(u, UNIT_STATE_MANA, 3615)
UnitAddItemToSlotById(u, FourCC("I000"), 0)
end

function CreateNeutralHostile()
local p = Player(PLAYER_NEUTRAL_AGGRESSIVE)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -1082.6, -466.2, 299.178, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -1249.7, -830.5, 227.962, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -1325.0, -1316.9, 48.429, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -1344.4, -1588.3, 340.795, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -1254.8, -1939.4, 59.855, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -1105.3, -2073.5, 135.510, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -620.7, -2188.3, 119.854, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), 143.7, -2170.5, 246.145, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), 482.9, -1995.9, 192.981, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), 552.9, -1781.2, 178.006, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), 602.0, -1312.0, 92.640, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), 622.0, -997.9, 27.588, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), 612.5, -708.6, 176.797, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), 523.7, -753.7, 127.412, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -70.9, -1052.6, 336.763, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -660.6, -1515.4, 233.587, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -772.5, -1704.8, 187.125, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -787.1, -1997.8, 64.459, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -716.5, -2116.1, 314.328, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nanb"), -455.2, -2297.9, 145.222, FourCC("nanb"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -166.3, -610.0, 122.391, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -646.2, -950.6, 116.744, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -942.5, -1366.0, 81.137, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -971.9, -1683.2, 156.560, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -876.7, -1915.7, 97.869, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -633.3, -2062.3, 100.264, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -165.0, -2127.0, 66.590, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), 356.6, -2067.9, 273.414, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), 658.4, -1835.0, 344.080, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), 797.3, -1515.4, 171.205, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), 727.0, -1187.7, 139.256, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), 275.3, -853.7, 253.792, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -347.1, -678.1, 348.530, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -928.9, -972.9, 252.814, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -1394.5, -1475.9, 69.392, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -1494.1, -1728.4, 181.873, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nitr"), -911.4, -2136.2, 261.911, FourCC("nitr"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 94.2, -705.5, 303.199, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -952.7, -771.6, 234.620, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -1518.7, -986.8, 58.867, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -1804.7, -1228.9, 262.274, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -1735.3, -1522.3, 126.467, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -348.4, -2204.3, 61.119, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -140.1, -2013.1, 215.317, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 121.4, -1873.7, 275.403, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 898.7, -1756.0, 312.120, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 930.5, -1597.2, 14.206, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 643.7, -1135.5, 250.529, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 513.3, -942.1, 268.250, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 931.1, -947.8, 2.944, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 1187.3, -1095.7, 280.797, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 1156.5, -1387.9, 313.878, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 1003.3, -1713.4, 252.430, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 875.5, -1907.8, 236.829, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 712.8, -2128.9, 69.611, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), 475.4, -2209.6, 12.173, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nnwq"), -65.6, -2251.6, 291.114, FourCC("nnwq"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -119.6, -894.0, 144.683, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -467.2, -856.6, 128.203, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -787.7, -1044.4, 263.131, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -988.7, -1264.4, 239.916, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -945.6, -1464.1, 30.257, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -659.0, -1943.4, 193.739, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -1567.7, -1816.5, 227.534, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -1217.8, -2267.1, 97.364, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), -180.6, -2391.3, 104.340, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), 150.4, -2325.6, 131.368, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), 360.3, -1963.5, 202.605, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), 363.4, -1465.1, 258.527, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), 163.7, -1367.1, 354.660, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), 1130.0, -1681.4, 278.523, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), 1063.2, -1793.5, 182.532, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nplg"), 464.5, -1457.7, 196.672, FourCC("nplg"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 1329.4, -509.6, 37.794, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 1156.2, -739.3, 272.206, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 1095.5, -1107.8, 241.959, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 1048.8, -1445.2, 254.111, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 636.8, -1909.3, 359.791, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 328.1, -1801.0, 154.363, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -34.8, -1529.2, 343.026, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -294.0, -1202.6, 163.273, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -568.4, -827.6, 177.094, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -802.3, -728.1, 72.127, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1110.9, -756.0, 33.213, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1275.1, -971.1, 11.481, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1250.3, -1142.2, 32.312, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1344.8, -1185.8, 111.185, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1786.7, -937.2, 201.276, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -2054.0, -674.2, 258.329, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1626.5, -1159.2, 39.409, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1481.7, -1407.7, 273.326, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1280.4, -1535.6, 347.596, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1166.0, -1469.1, 60.723, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1111.3, -1226.4, 74.808, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -1559.8, -386.5, 147.254, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -911.0, -1635.3, 311.714, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), -465.2, -1789.5, 7.888, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 184.8, -1802.9, 359.198, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 809.2, -1776.0, 39.958, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 981.5, -1852.0, 266.009, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 1047.6, -1945.6, 71.018, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("nfpl"), 1194.0, -1814.3, 9.613, FourCC("nfpl"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 837.8, -931.9, 238.960, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 280.7, -1202.6, 73.303, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -215.9, -1451.7, 18.326, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -559.8, -1577.6, 77.830, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -952.8, -1560.9, 243.157, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -894.2, -1774.1, 56.219, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -526.3, -1846.4, 277.150, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 60.5, -1818.1, 117.832, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 473.4, -1677.7, 41.266, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 652.3, -1456.1, 50.220, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 573.4, -1185.8, 216.756, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 225.9, -973.6, 69.029, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -218.0, -1037.7, 292.839, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -269.1, -1490.8, 32.729, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), -14.4, -1681.7, 166.778, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 999.4, -494.5, 25.236, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 988.0, -789.3, 337.983, FourCC("ntkw"))
u = BlzCreateUnitWithSkin(p, FourCC("ntkw"), 894.2, -1085.4, 86.970, FourCC("ntkw"))
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
CreateUnitsForPlayer0()
end

function CreateAllUnits()
CreatePlayerBuildings()
CreateNeutralHostile()
CreatePlayerUnits()
end

function CreateRegions()
local we

gg_rct_Unit_experiments = Rect(-4096.0, -4096.0, -3936.0, -3936.0)
end

function Trig_Melee_Initialization_Actions()
BlzShowTerrain(false)
SetSkyModel("Environment\\Sky\\BlizzardSky\\BlizzardSky.mdl")
BlzShowSkyBox(true)
FogEnableOff()
CreateFogModifierRectBJ(true, Player(0), FOG_OF_WAR_VISIBLE, GetPlayableMapRect())
end

function InitTrig_Melee_Initialization()
gg_trg_Melee_Initialization = CreateTrigger()
TriggerAddAction(gg_trg_Melee_Initialization, Trig_Melee_Initialization_Actions)
end

function Trig_Camera_constant_Actions()
SetCameraFieldForPlayer(Player(0), CAMERA_FIELD_FARZ, 100000000.00, 0)
end

function InitTrig_Camera_constant()
gg_trg_Camera_constant = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Camera_constant, 0.01)
TriggerAddAction(gg_trg_Camera_constant, Trig_Camera_constant_Actions)
end

function InitCustomTriggers()
InitTrig_Melee_Initialization()
InitTrig_Camera_constant()
end

function RunInitializationTriggers()
ConditionalTriggerExecute(gg_trg_Melee_Initialization)
end

function InitCustomPlayerSlots()
SetPlayerStartLocation(Player(0), 0)
SetPlayerColor(Player(0), ConvertPlayerColor(0))
SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(0), true)
SetPlayerController(Player(0), MAP_CONTROL_USER)
end

function InitCustomTeams()
SetPlayerTeam(Player(0), 0)
end

function main()
SetCameraBounds(-4096.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -4096.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 4096.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 4096.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -4096.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 4096.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 4096.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -4096.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
SetTerrainFogEx(0, 100000.0, 100000.0, 0.000, 0.000, 0.000, 0.000)
NewSoundEnvironment("Default")
SetAmbientDaySound("IceCrownDay")
SetAmbientNightSound("IceCrownNight")
SetMapMusic("Music", true, 0)
CreateRegions()
CreateAllUnits()
InitBlizzard()
InitGlobals()
InitCustomTriggers()
RunInitializationTriggers()
end

function config()
SetMapName("TRIGSTR_005")
SetMapDescription("TRIGSTR_007")
SetPlayers(1)
SetTeams(1)
SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
DefineStartLocation(0, -128.0, 960.0)
InitCustomPlayerSlots()
SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
InitGenericPlayerSlots()
end

