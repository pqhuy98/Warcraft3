udg_Human = {}
udg_Orc = {}
udg_Undead = {}
udg_Army_Intro = nil
udg_Human_Target = {}
udg_Orc_Target = {}
udg_Undead_Target = {}
udg_Spawn_Orc_Bool = __jarray(false)
udg_Spawn_Human_Bool = __jarray(false)
udg_Spawn_Undead_Bool = __jarray(false)
udg_lk = nil
udg_tran = 0.0
udg_BolvarTarget = nil
udg_BolvarRespawn = nil
udg_InCinematic = false
udg_Mount = false
udg_FrostWyrm = nil
udg_Cster_Mount = nil
udg_Cast_Point = nil
udg_InFPC = false
udg_CameraAttach_Unit = nil
udg_Left = false
udg_Right = false
udg_Forward = false
udg_Index_FPC = __jarray(0.0)
udg_attackbase3 = false
udg_Charge_Unit = nil
udg_Charge_Eff = nil
udg_ChargeTarget = nil
udg_LaG_Mana = 0.0
udg_LaG_Target = nil
udg_Charge_UG = nil
udg_MH_Int = 0
udg_MH_StartPos = nil
udg_MH_Facing = 0.0
udg_MH_Chain = {}
udg_MH_Caster = nil
udg_MH_AbiLevel = 0
udg_MH_SnaggedUnit = nil
udg_MH_Forward = false
udg_MH_Length = 0
udg_MH_Head = nil
udg_BS_Caster = nil
udg_BS_Point = nil
udg_WotL_Int1 = 0
udg_WotL_Int2 = 0
gg_rct_Lich_King_Stand = nil
gg_rct_Fordragons_Hold = nil
gg_rct_Human_2_Orc_2_base = nil
gg_rct_Wrathgate_Guard = nil
gg_rct_Lichg_King_Respawn = nil
gg_rct_Bolvar_Respawn = nil
gg_rct_Citadel_Entrance = nil
gg_rct_Revive_2 = nil
gg_rct_Revive_1 = nil
gg_rct_TFT_Base_1 = nil
gg_rct_TFT_Base_2 = nil
gg_rct_TFT_Base_3 = nil
gg_rct_Wrathgate = nil
gg_rct_Main_Base = nil
gg_rct_Front_of_TFT = nil
gg_rct_TFT = nil
gg_rct_Bolvar_Force_1 = nil
gg_rct_Bolvar_Force_2 = nil
gg_rct_Bolvar_Force_3 = nil
gg_rct_Center_of_TFT = nil
gg_rct_Saufang_Hold = nil
gg_rct_three_corner = nil
gg_rct_Tree = nil
gg_rct_Corpses = nil
gg_rct_Region_030 = nil
gg_rct_Region_031 = nil
gg_rct_Cloud = nil
gg_rct_Waygate = nil
gg_cam_Army_Move_1 = nil
gg_cam_Army_Move_2 = nil
gg_cam_Army_Move_3 = nil
gg_cam_Intro_TFT_1 = nil
gg_cam_Intro_TFT_2 = nil
gg_cam_Intro_TFT_3 = nil
gg_cam_Lich_King_Intro_1 = nil
gg_cam_Lich_King_Intro_2 = nil
gg_cam_Lich_King_Intro_3 = nil
gg_cam_Lich_King_Intro_4 = nil
gg_cam_Dragon_Flight_up_1 = nil
gg_cam_Dragon_Flight_up_2 = nil
gg_cam_Camera_015 = nil
gg_cam_Camera_014 = nil
gg_snd_PursuitTheme = ""
gg_snd_LichKingTheme = ""
gg_snd_Human3 = nil
gg_trg_Initialization = nil
gg_trg_Tree_cut = nil
gg_trg_Human_Spawn = nil
gg_trg_Bolvar_Army_Spawn = nil
gg_trg_Orc_Spawn = nil
gg_trg_Undead_Spawn = nil
gg_trg_Anti_leak_H1 = nil
gg_trg_Anti_leak_H2 = nil
gg_trg_Anti_leak_H3 = nil
gg_trg_Anti_leak_O1 = nil
gg_trg_Anti_leak_O2 = nil
gg_trg_Anti_leak_U1 = nil
gg_trg_Anti_leak_U2 = nil
gg_trg_Choose_Active_Deactive = nil
gg_trg_Choose_Target = nil
gg_trg_Active_Deactive = nil
gg_trg_Loops = nil
gg_trg_Left_On = nil
gg_trg_Left_Off = nil
gg_trg_Right_On = nil
gg_trg_Right_Off = nil
gg_trg_Forward_On = nil
gg_trg_Forward_Off = nil
gg_trg_Move = nil
gg_trg_Change_Facing = nil
gg_trg_Corpse = nil
gg_trg_Corpse_Harvester = nil
gg_trg_MH_Init = nil
gg_trg_MH_Loop = nil
gg_trg_Heal_sefl_AI = nil
gg_trg_respawn = nil
gg_trg_animation = nil
gg_trg_Army_of_the_Death = nil
gg_trg_Wrath_of_the_Lich_King = nil
gg_trg_Dragon_Mount = nil
gg_trg_Dragon_Mount_Die = nil
gg_trg_Dragon_Mount_Loops = nil
gg_trg_Dragon_Mount_Animation = nil
gg_trg_Holy_Rays = nil
gg_trg_Holy_Rays_Loops = nil
gg_trg_Blood_Strike = nil
gg_trg_Charge_Start_End = nil
gg_trg_Charge_Loops = nil
gg_trg_Call_of_Loyalty = nil
gg_trg_Mana_of_the_Destruction = nil
gg_trg_Lost_and_Gain = nil
gg_trg_Flame = nil
gg_trg_Burrowstrike = nil
gg_trg_Burrowstrike_Loop = nil
gg_trg_Bolvar_Respawn = nil
gg_trg_Bolvar_Attack = nil
gg_trg_Bolvar_Reach_Fordragon_Hold = nil
gg_trg_Bolvar_Reach_Wrathgate_Guard = nil
gg_trg_Bolvar_Reach_Human_2_Orc_2 = nil
gg_trg_Army_Attack_Undead_2 = nil
gg_trg_Army_Attack_Undead_3 = nil
gg_trg_Army_Attack_Fordragon_Hold = nil
gg_trg_Army_Attack_Wrathgate = nil
gg_trg_Army_Attack_Wrathgate_Guard = nil
gg_trg_Army_Atack_Human_2_Orc_2 = nil
gg_trg_Army_Attack_Three_Corner = nil
gg_trg_Army_Attack_Citadel_Entrance = nil
gg_trg_Army_AttackTFT_Base_1 = nil
gg_trg_Army_Attack_TFT_Base_2_or_3 = nil
gg_trg_Army_Attack_TFT_Base_3_enable = nil
gg_trg_Army_AttackTFT_Base_3 = nil
gg_trg_Army_Attack_TFT_Main_Base = nil
gg_trg_Army_Attack_Front_of_TFT = nil
gg_trg_Army_Attack_Lich_King = nil
gg_trg_Summon = nil
gg_trg_Undead_Attack_SaufangFordragon_Hold = nil
gg_trg_Undead_Attack_TFT_Base_3 = nil
gg_trg_Undead_Attack_TFT_Base_2 = nil
gg_trg_Undead_Attack_TFT_Base_1 = nil
gg_trg_Undead_Attack_TFT_Citadel_Entrance = nil
gg_trg_Undead_Attack_3corner = nil
gg_trg_Undead_Attack_TFT_Human_2_Orc_2 = nil
gg_trg_Enter_TFT = nil
gg_trg_No_leave = nil
gg_trg_Fight_Cinematic = nil
gg_trg_Camera = nil
gg_trg_killLich_King = nil
gg_trg_Fast_and_Furious_enter = nil
gg_trg_Fast_and_Furious = nil
gg_trg_No_spawn_Undead = nil
gg_trg_No_spawn_Alliance = nil
gg_trg_Cinematic = nil
gg_trg_Refresh = nil
gg_unit_O002_0204 = nil
gg_unit_H001_0142 = nil
gg_unit_H006_0055 = nil
gg_unit_ncp3_0523 = nil
gg_unit_h00D_0064 = nil
gg_dest_B000_6628 = nil
gg_trg_Corpses_Respawn = nil
function InitGlobals()
local i = 0

udg_Army_Intro = CreateGroup()
i = 0
while (true) do
if ((i > 2)) then break end
udg_Spawn_Orc_Bool[i] = true
i = i + 1
end
i = 0
while (true) do
if ((i > 3)) then break end
udg_Spawn_Human_Bool[i] = true
i = i + 1
end
i = 0
while (true) do
if ((i > 2)) then break end
udg_Spawn_Undead_Bool[i] = true
i = i + 1
end
udg_tran = 0.0
udg_InCinematic = false
udg_Mount = false
udg_InFPC = false
udg_Left = false
udg_Right = false
udg_Forward = false
i = 0
while (true) do
if ((i > 2)) then break end
udg_Index_FPC[i] = 0.0
i = i + 1
end
udg_attackbase3 = false
udg_LaG_Mana = 0.0
udg_Charge_UG = CreateGroup()
udg_MH_Int = 0
udg_MH_Facing = 0.0
udg_MH_AbiLevel = 0
udg_MH_SnaggedUnit = CreateGroup()
udg_MH_Forward = false
udg_MH_Length = 30
udg_WotL_Int1 = 0
udg_WotL_Int2 = 0
end

function Unit000594_DropItems()
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
RandomDistAddItem(FourCC("blba"), 34)
RandomDistAddItem(FourCC("desc"), 33)
RandomDistAddItem(FourCC("crdt"), 33)
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
gg_snd_PursuitTheme = "Sound\\Music\\mp3Music\\PursuitTheme.mp3"
gg_snd_LichKingTheme = "Sound\\Music\\mp3Music\\LichKingTheme.mp3"
gg_snd_Human3 = CreateSound("Sound\\Music\\mp3Music\\Human3.mp3", false, false, false, 10, 10, "DefaultEAXON")
SetSoundDuration(gg_snd_Human3, 287988)
SetSoundChannel(gg_snd_Human3, 0)
SetSoundVolume(gg_snd_Human3, 127)
SetSoundPitch(gg_snd_Human3, 1.0)
end

function CreateAllDestructables()
local d
local t
local life

gg_dest_B000_6628 = BlzCreateDestructableZWithSkin(FourCC("B000"), 5952.0, -704.0, 412.0, 90.000, 5.000, 0, FourCC("B000"))
life = GetDestructableLife(gg_dest_B000_6628)
SetDestructableLife(gg_dest_B000_6628, 0.01 * life)
end

function CreateBuildingsForPlayer0()
local p = Player(0)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("o000"), -2624.0, -3264.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -1856.0, -4288.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -1280.0, -5120.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -1664.0, -5376.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("osld"), -1856.0, -3648.0, 270.000, FourCC("osld"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), -1088.0, -3392.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("obea"), -2304.0, -2304.0, 270.000, FourCC("obea"))
u = BlzCreateUnitWithSkin(p, FourCC("otto"), -448.0, -2496.0, 270.000, FourCC("otto"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -832.0, -3968.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -128.0, -3328.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -2880.0, -2176.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o001"), 352.0, -2144.0, 270.000, FourCC("o001"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 512.0, -2496.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 0.0, -2176.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 640.0, -2176.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 256.0, -1920.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -1216.0, -2112.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("oalt"), -672.0, -1952.0, 270.000, FourCC("oalt"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), -64.0, -1920.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 512.0, -3136.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 768.0, -2432.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -2176.0, -5888.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -2560.0, -6272.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), -3072.0, -6784.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2272.0, -1760.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("otrb"), -2080.0, -1888.0, 270.000, FourCC("otrb"))
u = BlzCreateUnitWithSkin(p, FourCC("ovln"), -1664.0, -2368.0, 270.000, FourCC("ovln"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), -1024.0, -2624.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("otto"), -576.0, -3072.0, 270.000, FourCC("otto"))
u = BlzCreateUnitWithSkin(p, FourCC("osld"), -2240.0, -3008.0, 270.000, FourCC("osld"))
u = BlzCreateUnitWithSkin(p, FourCC("obea"), -1600.0, -3008.0, 270.000, FourCC("obea"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), 960.0, -2560.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), -2208.0, -4000.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), -2016.0, -4128.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), -2208.0, -4128.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), -2208.0, -4256.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), -2336.0, -4192.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), -2336.0, -4064.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 96.0, -1632.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 32.0, -1760.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), -96.0, -1760.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 1056.0, -2080.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), 1408.0, -1984.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), 640.0, -1600.0, 270.000, FourCC("owtw"))
end

function CreateBuildingsForPlayer1()
local p = Player(1)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -9536.0, 6208.0, 270.000, FourCC("hgtw"))
end

function CreateUnitsForPlayer1()
local p = Player(1)
local u
local unitID
local t
local life

gg_unit_H006_0055 = BlzCreateUnitWithSkin(p, FourCC("H006"), -7330.2, 8503.5, 313.860, FourCC("H006"))
SetHeroLevel(gg_unit_H006_0055, 60, false)
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00C"))
IssueImmediateOrder(gg_unit_H006_0055, "")
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00E"))
IssueImmediateOrder(gg_unit_H006_0055, "")
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00D"))
IssueImmediateOrder(gg_unit_H006_0055, "")
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
SelectHeroSkill(gg_unit_H006_0055, FourCC("A00F"))
IssueImmediateOrder(gg_unit_H006_0055, "")
UnitAddItemToSlotById(gg_unit_H006_0055, FourCC("ofir"), 0)
u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 5904.2, 4240.6, 91.222, FourCC("hkni"))
u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 6076.1, 4280.2, 229.424, FourCC("hkni"))
u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 6093.5, 4105.1, 324.722, FourCC("hkni"))
u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 5871.0, 4069.5, 76.555, FourCC("hkni"))
u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 5870.1, 4469.7, 313.153, FourCC("hrif"))
u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 6088.1, 4519.8, 135.553, FourCC("hrif"))
u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 5979.8, 4416.5, 82.861, FourCC("hrif"))
u = BlzCreateUnitWithSkin(p, FourCC("hmtm"), 5912.4, 4609.9, 53.505, FourCC("hmtm"))
u = BlzCreateUnitWithSkin(p, FourCC("hmtm"), 6015.4, 4693.9, 23.720, FourCC("hmtm"))
u = BlzCreateUnitWithSkin(p, FourCC("hmtm"), 6177.2, 4748.1, 272.436, FourCC("hmtm"))
u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 5826.2, 3920.0, 73.094, FourCC("hfoo"))
u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 5956.0, 3884.8, 267.251, FourCC("hfoo"))
u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 6080.1, 3914.2, 256.670, FourCC("hfoo"))
u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 6181.5, 3936.6, 42.266, FourCC("hfoo"))
u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 6130.8, 4590.7, 344.487, FourCC("hgry"))
u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 5942.7, 4082.0, 210.779, FourCC("hgry"))
end

function CreateBuildingsForPlayer2()
local p = Player(2)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("h000"), -10688.0, 10688.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), -11328.0, 10240.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), -12224.0, 8000.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), -11840.0, 6912.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), -5312.0, 7872.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), -6336.0, 6976.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("hcas"), -8640.0, 8512.0, 270.000, FourCC("hcas"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), -10816.0, 8448.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), -10432.0, 7872.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), -9792.0, 7872.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hlum"), -9632.0, 9632.0, 270.000, FourCC("hlum"))
u = BlzCreateUnitWithSkin(p, FourCC("hbla"), -11264.0, 9216.0, 270.000, FourCC("hbla"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -10944.0, 7616.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -9472.0, 8384.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("ngol"), -9024.0, 9024.0, 270.000, FourCC("ngol"))
SetResourceAmount(u, 12500)
u = BlzCreateUnitWithSkin(p, FourCC("harm"), -10496.0, 6976.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), -9728.0, 6912.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), -8320.0, 7872.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), -8960.0, 7424.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("hvlt"), -8448.0, 6592.0, 270.000, FourCC("hvlt"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), -10048.0, 9088.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -7360.0, 10304.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -6720.0, 10432.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), -7936.0, 8960.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), -7488.0, 7552.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -6400.0, 9536.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -6400.0, 9280.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -6464.0, 9408.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -6592.0, 9536.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -6656.0, 9344.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -6528.0, 9152.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -6272.0, 9024.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("halt"), -7200.0, 8928.0, 270.000, FourCC("halt"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), -6784.0, 8192.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -8224.0, 7456.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -8416.0, 7264.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -8032.0, 7264.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -8288.0, 7072.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -8096.0, 6816.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -7840.0, 7072.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -9184.0, 6688.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -8928.0, 6816.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -8928.0, 6496.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -11616.0, 8736.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -11872.0, 8544.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -11040.0, 6496.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -11104.0, 6816.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), -10720.0, 6496.0, 270.000, FourCC("ntn2"))
end

function CreateUnitsForPlayer2()
local p = Player(2)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hpea"), -8878.3, 8895.4, 284.049, FourCC("hpea"))
u = BlzCreateUnitWithSkin(p, FourCC("hpea"), -8973.0, 8836.5, 162.361, FourCC("hpea"))
u = BlzCreateUnitWithSkin(p, FourCC("hpea"), -8911.6, 8753.8, 90.805, FourCC("hpea"))
u = BlzCreateUnitWithSkin(p, FourCC("hpea"), -8843.8, 8794.3, 167.129, FourCC("hpea"))
u = BlzCreateUnitWithSkin(p, FourCC("hpea"), -8883.4, 8658.4, 65.195, FourCC("hpea"))
end

function CreateBuildingsForPlayer3()
local p = Player(3)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("ngni"), 3296.0, 1696.0, 270.000, FourCC("ngni"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), 2496.0, 64.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -4320.0, 3616.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -4064.0, 3296.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), -4576.0, 2272.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 672.0, 9824.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("nwgt"), -8576.0, 2944.0, 270.000, FourCC("nwgt"))
WaygateSetDestination(u, GetRectCenterX(gg_rct_Waygate), GetRectCenterY(gg_rct_Waygate))
WaygateActivate(u, true)
SetUnitColor(u, ConvertPlayerColor(6))
u = BlzCreateUnitWithSkin(p, FourCC("nwgt"), -6976.0, -4288.0, 270.000, FourCC("nwgt"))
SetUnitColor(u, ConvertPlayerColor(6))
u = BlzCreateUnitWithSkin(p, FourCC("u004"), 2240.0, 10816.0, 270.000, FourCC("u004"))
u = BlzCreateUnitWithSkin(p, FourCC("u00C"), 12224.0, 3648.0, 270.000, FourCC("u00C"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), -13760.0, -6656.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), -12608.0, -6656.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 12448.0, -3680.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 13216.0, -3616.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 13408.0, -6112.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), 10240.0, 12096.0, 270.000, FourCC("ugrv"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), 10496.0, 11392.0, 270.000, FourCC("ugrv"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), 10432.0, 10368.0, 270.000, FourCC("ugrv"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), 10432.0, 9664.0, 270.000, FourCC("ugrv"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 11328.0, 9216.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 12096.0, 11264.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 10976.0, 11872.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("unp2"), 11904.0, 10240.0, 270.000, FourCC("unp2"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 11136.0, 9984.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 11584.0, 11328.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 11264.0, 10752.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 9824.0, 12320.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 9888.0, 11680.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 10016.0, 10592.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 10080.0, 9760.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 10272.0, 9120.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 10848.0, 10528.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 10912.0, 9312.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 11808.0, 9120.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 11936.0, 9696.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 12256.0, 10720.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 11680.0, 11744.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 1792.0, 11584.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 1600.0, 11008.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), 2048.0, 10432.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), 2624.0, 10560.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("usap"), 3136.0, 10368.0, 270.000, FourCC("usap"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), 3392.0, 10880.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), 3008.0, 11008.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 3744.0, 11296.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 3488.0, 10400.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 928.0, 10336.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 1504.0, 9696.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 480.0, 10336.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 1760.0, 9312.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 2720.0, 9952.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 1312.0, 9376.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), 960.0, 10752.0, 270.000, FourCC("ugrv"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), 1984.0, 9856.0, 270.000, FourCC("ugrv"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -4064.0, 11488.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), -4384.0, 10912.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), -3968.0, 2560.0, 270.000, FourCC("ugrv"))
end

function CreateUnitsForPlayer3()
local p = Player(3)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("u009"), 3067.8, 463.2, 26.356, FourCC("u009"))
SetUnitColor(u, ConvertPlayerColor(8))
IssueImmediateOrder(u, "raisedeadoff")
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4172.2, 10955.7, 302.185, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -4179.2, 10736.9, 315.476, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -3860.3, 11314.7, 273.656, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -3924.9, 10915.0, 282.814, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("ucry"), -4286.2, 11081.8, 304.119, FourCC("ucry"))
u = BlzCreateUnitWithSkin(p, FourCC("ucry"), -4132.5, 11254.4, 290.497, FourCC("ucry"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), -3822.1, 11562.8, 271.082, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), -4441.0, 11261.1, 333.513, FourCC("unec"))
gg_unit_h00D_0064 = BlzCreateUnitWithSkin(p, FourCC("h00D"), 13117.9, 9532.2, 249.550, FourCC("h00D"))
u = BlzCreateUnitWithSkin(p, FourCC("u008"), 4068.4, 477.8, 358.429, FourCC("u008"))
SetUnitColor(u, ConvertPlayerColor(12))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 2729.2, 809.5, 301.651, FourCC("ugho"))
life = GetUnitState(u, UNIT_STATE_LIFE)
SetUnitState(u, UNIT_STATE_LIFE, 0.95 * life)
u = BlzCreateUnitWithSkin(p, FourCC("u008"), 4097.0, 826.2, 358.429, FourCC("u008"))
SetUnitColor(u, ConvertPlayerColor(12))
u = BlzCreateUnitWithSkin(p, FourCC("uaco"), 3626.5, 643.7, 30.683, FourCC("uaco"))
u = BlzCreateUnitWithSkin(p, FourCC("e000"), -12872.4, -1249.7, 339.833, FourCC("e000"))
SetUnitState(u, UNIT_STATE_MANA, 4000)
IssueImmediateOrder(u, "")
u = BlzCreateUnitWithSkin(p, FourCC("U00I"), -7806.5, -4311.3, 163.890, FourCC("U00I"))
SetHeroLevel(u, 90, false)
SetUnitState(u, UNIT_STATE_MANA, 2340)
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 2632.4, 700.3, 95.000, FourCC("ugho"))
life = GetUnitState(u, UNIT_STATE_LIFE)
SetUnitState(u, UNIT_STATE_LIFE, 0.95 * life)
u = BlzCreateUnitWithSkin(p, FourCC("uaco"), 3607.6, 918.8, 274.078, FourCC("uaco"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -4790.9, 3260.4, 0.044, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("h00C"), 11791.5, 3389.8, 258.166, FourCC("h00C"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -4268.1, 2494.0, 13.821, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("h00C"), 12751.5, 3575.7, 34.771, FourCC("h00C"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -4529.3, 3388.0, 137.190, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -4153.7, 2781.6, 67.282, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -4647.4, 2839.9, 81.906, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -4517.4, 2706.1, 104.604, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -4593.8, 3289.2, 333.874, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -4795.2, 3049.3, 67.326, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -4536.3, 2926.4, 209.087, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -4340.8, 3041.6, 52.967, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -4282.4, 2820.4, 295.091, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -4465.6, 2652.7, 349.497, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("h00C"), 12391.7, 2873.0, 335.674, FourCC("h00C"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -4720.5, 2735.6, 87.663, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 11986.5, 3026.0, 30.000, FourCC("ugho"))
gg_unit_H001_0142 = BlzCreateUnitWithSkin(p, FourCC("H001"), -13212.4, -13557.7, 9.470, FourCC("H001"))
SetHeroLevel(gg_unit_H001_0142, 90, false)
SetUnitState(gg_unit_H001_0142, UNIT_STATE_MANA, 2950)
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A005"))
IssueImmediateOrder(gg_unit_H001_0142, "")
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A002"))
IssueImmediateOrder(gg_unit_H001_0142, "")
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A001"))
IssueImmediateOrder(gg_unit_H001_0142, "")
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A004"))
IssueImmediateOrder(gg_unit_H001_0142, "")
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
SelectHeroSkill(gg_unit_H001_0142, FourCC("A000"))
IssueImmediateOrder(gg_unit_H001_0142, "")
IssueImmediateOrder(gg_unit_H001_0142, "")
IssueImmediateOrder(gg_unit_H001_0142, "raisedeadon")
UnitAddItemToSlotById(gg_unit_H001_0142, FourCC("desc"), 0)
UnitAddItemToSlotById(gg_unit_H001_0142, FourCC("I000"), 1)
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12424.6, 2774.0, 104.390, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 11682.9, 3307.5, 28.039, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12856.0, 3545.4, 160.217, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12146.1, 2587.3, 88.453, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12244.9, 2595.3, 104.806, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12145.6, 2472.7, 88.771, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("N000"), 7821.1, -5816.5, 126.310, FourCC("N000"))
SetHeroLevel(u, 90, false)
SetUnitState(u, UNIT_STATE_MANA, 2970)
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
SelectHeroSkill(u, FourCC("A00O"))
IssueImmediateOrder(u, "")
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
SelectHeroSkill(u, FourCC("A00S"))
IssueImmediateOrder(u, "")
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
SelectHeroSkill(u, FourCC("A00Q"))
IssueImmediateOrder(u, "")
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
SelectHeroSkill(u, FourCC("A00P"))
IssueImmediateOrder(u, "")
UnitAddItemToSlotById(u, FourCC("desc"), 0)
u = BlzCreateUnitWithSkin(p, FourCC("U005"), 3380.0, 589.2, 253.689, FourCC("U005"))
SetHeroLevel(u, 90, false)
SetUnitState(u, UNIT_STATE_MANA, 6705)
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
SelectHeroSkill(u, FourCC("A00X"))
IssueImmediateOrder(u, "")
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
SelectHeroSkill(u, FourCC("A00U"))
IssueImmediateOrder(u, "manashieldoff")
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
SelectHeroSkill(u, FourCC("A00Y"))
IssueImmediateOrder(u, "healoff")
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
SelectHeroSkill(u, FourCC("A00V"))
IssueImmediateOrder(u, "")
UnitAddItemToSlotById(u, FourCC("desc"), 0)
t = CreateTrigger()
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_DEATH)
TriggerRegisterUnitEvent(t, u, EVENT_UNIT_CHANGE_OWNER)
TriggerAddAction(t, Unit000594_DropItems)
gg_unit_O002_0204 = BlzCreateUnitWithSkin(p, FourCC("O002"), -7437.4, -4173.4, 308.446, FourCC("O002"))
SetHeroLevel(gg_unit_O002_0204, 90, false)
SetUnitState(gg_unit_O002_0204, UNIT_STATE_MANA, 1935)
SelectHeroSkill(gg_unit_O002_0204, FourCC("A012"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A012"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A012"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A012"))
IssueImmediateOrder(gg_unit_O002_0204, "")
SelectHeroSkill(gg_unit_O002_0204, FourCC("A013"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A013"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A013"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A013"))
IssueImmediateOrder(gg_unit_O002_0204, "")
SelectHeroSkill(gg_unit_O002_0204, FourCC("A014"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A014"))
SelectHeroSkill(gg_unit_O002_0204, FourCC("A014"))
IssueImmediateOrder(gg_unit_O002_0204, "")
UnitAddItemToSlotById(gg_unit_O002_0204, FourCC("stel"), 0)
UnitAddItemToSlotById(gg_unit_O002_0204, FourCC("desc"), 1)
u = BlzCreateUnitWithSkin(p, FourCC("u008"), 4143.4, 1137.0, 358.429, FourCC("u008"))
SetUnitColor(u, ConvertPlayerColor(12))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 2779.9, 942.3, 282.360, FourCC("uabo"))
life = GetUnitState(u, UNIT_STATE_LIFE)
SetUnitState(u, UNIT_STATE_LIFE, 0.95 * life)
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 2960.7, 835.5, 185.916, FourCC("uabo"))
life = GetUnitState(u, UNIT_STATE_LIFE)
SetUnitState(u, UNIT_STATE_LIFE, 0.95 * life)
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12252.4, 2471.6, 101.843, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12647.4, 2686.1, 114.583, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12732.2, 2710.4, 122.908, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12672.3, 2568.9, 112.446, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("nhhr"), 12749.2, 2612.7, 119.710, FourCC("nhhr"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 12027.1, 2928.1, 30.000, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 12080.8, 2815.4, 30.000, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 11929.0, 2919.8, 30.000, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 11957.3, 2817.9, 30.000, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 12759.7, 3234.9, 120.000, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 12800.3, 3137.0, 120.000, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 12854.0, 3024.4, 120.000, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 12702.2, 3128.7, 120.000, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 12730.5, 3026.9, 120.000, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uaco"), 2903.2, 88.0, 349.337, FourCC("uaco"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 1255.0, 10260.4, 248.704, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 1457.6, 10007.0, 229.971, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 1716.9, 10594.3, 236.827, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 1849.9, 10963.3, 239.578, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 2011.6, 10709.8, 230.870, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 2387.9, 10633.2, 220.958, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 2706.1, 11176.1, 225.436, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 2218.5, 11567.9, 239.320, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 1886.6, 11264.3, 242.774, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 901.2, 10116.9, 269.558, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 1089.9, 9897.8, 250.838, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 1276.5, 9652.2, 219.539, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 1326.7, 11178.5, 256.810, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 1443.8, 11519.8, 255.889, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 1952.3, 11988.7, 248.262, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 2220.5, 10547.6, 222.398, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 2672.9, 10843.6, 220.272, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 2508.7, 11494.3, 233.200, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 2510.0, 10333.2, 211.660, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 2240.2, 10404.6, 218.429, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 2359.9, 10263.6, 212.304, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 2141.7, 10250.5, 216.223, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 1369.5, 10946.0, 253.571, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 1257.6, 11078.0, 258.239, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 1344.8, 11378.9, 257.580, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 1179.4, 11351.9, 261.971, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 1475.5, 11259.2, 253.197, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 2603.6, 10991.2, 224.069, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 2563.5, 11291.0, 229.502, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 2829.8, 11399.2, 226.823, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 2832.8, 10681.2, 222.743, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("ucry"), 1398.1, 10717.9, 249.985, FourCC("ucry"))
u = BlzCreateUnitWithSkin(p, FourCC("ucry"), 1755.2, 10283.6, 227.731, FourCC("ucry"))
u = BlzCreateUnitWithSkin(p, FourCC("ucry"), 1974.1, 10131.9, 216.366, FourCC("ucry"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 2060.5, 10309.9, 219.846, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 1658.1, 10757.6, 241.757, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 1836.7, 11415.0, 245.620, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 2279.7, 11420.7, 236.393, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 2396.5, 10697.8, 222.179, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 1453.0, 9897.5, 225.117, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 1058.0, 10223.5, 259.589, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ugar"), 2224.0, 11043.8, 232.090, FourCC("ugar"))
u = BlzCreateUnitWithSkin(p, FourCC("ugar"), 1872.5, 11046.7, 240.241, FourCC("ugar"))
u = BlzCreateUnitWithSkin(p, FourCC("ugar"), 1503.0, 11185.6, 251.796, FourCC("ugar"))
u = BlzCreateUnitWithSkin(p, FourCC("ugar"), 1577.6, 10321.6, 235.262, FourCC("ugar"))
u = BlzCreateUnitWithSkin(p, FourCC("ugar"), 1956.6, 10638.9, 230.802, FourCC("ugar"))
u = BlzCreateUnitWithSkin(p, FourCC("ugar"), 2384.8, 10068.5, 206.142, FourCC("ugar"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4900.9, 2855.0, 93.101, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4608.7, 3200.7, 312.746, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4534.2, 3015.0, 206.406, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4795.1, 2685.9, 59.240, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4959.6, 3060.6, 144.211, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4471.1, 2866.9, 168.568, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4391.9, 3044.6, 68.128, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), -4764.1, 2450.4, 12.723, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), -4486.6, 2472.2, 191.563, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), -4343.0, 2653.6, 284.873, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4640.0, 2600.9, 36.739, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4299.0, 2904.0, 149.375, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4434.0, 3235.1, 236.675, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), -4727.5, 3012.9, 164.196, FourCC("ugho"))
end

function CreateBuildingsForPlayer5()
local p = Player(5)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("ubon"), 7488.0, -7040.0, 270.000, FourCC("ubon"))
u = BlzCreateUnitWithSkin(p, FourCC("unp2"), 8896.0, -6336.0, 270.000, FourCC("unp2"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 8448.0, -5632.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), 7616.0, -6400.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), 8000.0, -6912.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), 8320.0, -6400.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), 7872.0, -7360.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), 8512.0, -6976.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("utom"), 7168.0, -7488.0, 270.000, FourCC("utom"))
u = BlzCreateUnitWithSkin(p, FourCC("ugrv"), 7808.0, -8000.0, 270.000, FourCC("ugrv"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 8928.0, -5792.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 7136.0, -5984.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 7904.0, -5088.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 7968.0, -5984.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 9312.0, -8672.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 7200.0, -7840.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("ngni"), 10208.0, -4000.0, 270.000, FourCC("ngni"))
u = BlzCreateUnitWithSkin(p, FourCC("ushp"), 9856.0, -6336.0, 270.000, FourCC("ushp"))
u = BlzCreateUnitWithSkin(p, FourCC("ushp"), 9280.0, -8384.0, 270.000, FourCC("ushp"))
u = BlzCreateUnitWithSkin(p, FourCC("ushp"), 9280.0, -9920.0, 270.000, FourCC("ushp"))
u = BlzCreateUnitWithSkin(p, FourCC("ngni"), 10656.0, -4768.0, 270.000, FourCC("ngni"))
u = BlzCreateUnitWithSkin(p, FourCC("uzig"), 10656.0, -4256.0, 270.000, FourCC("uzig"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 9824.0, -6624.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 8736.0, -9504.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), 9248.0, -10208.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 8288.0, -7392.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 9248.0, -9632.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 8480.0, -7904.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 9376.0, -8096.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 9120.0, -6752.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 9952.0, -6048.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), 8960.0, -7104.0, 270.000, FourCC("utod"))
end

function CreateUnitsForPlayer5()
local p = Player(5)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 5754.0, 3135.8, 16.052, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 6197.4, 2760.0, 159.076, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("unec"), 5780.6, 2437.9, 224.106, FourCC("unec"))
u = BlzCreateUnitWithSkin(p, FourCC("uban"), 5940.4, 2385.4, 156.417, FourCC("uban"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 5985.5, 3188.6, 82.477, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ucry"), 5566.1, 2813.0, 14.327, FourCC("ucry"))
u = BlzCreateUnitWithSkin(p, FourCC("ucry"), 5544.6, 3215.2, 274.820, FourCC("ucry"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 5604.0, 2709.2, 41.332, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 5713.1, 2314.8, 354.770, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 6383.0, 3010.9, 113.086, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 6046.1, 2843.5, 55.658, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 6301.4, 3463.1, 134.609, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 5510.4, 2496.8, 355.122, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 6138.9, 3086.4, 322.327, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 5614.5, 3129.6, 278.259, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 5674.8, 2979.5, 320.822, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 6074.5, 3406.5, 95.848, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 5882.8, 3489.5, 68.458, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("ugho"), 6260.8, 3013.5, 227.490, FourCC("ugho"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 6309.7, 2332.0, 197.079, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 5506.7, 2242.4, 272.480, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 10091.9, -4223.8, 26.291, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 10250.0, -4195.5, 183.060, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 10012.5, -4097.7, 308.989, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 10190.6, -4323.2, 14.107, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 9932.9, -4282.8, 8.218, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("uswb"), 10375.1, -4369.4, 156.055, FourCC("uswb"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 10231.4, -4488.4, 36.168, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 10037.7, -4460.1, 80.829, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 9876.3, -4524.2, 44.946, FourCC("nzom"))
u = BlzCreateUnitWithSkin(p, FourCC("nzom"), 10121.0, -4640.8, 83.938, FourCC("nzom"))
end

function CreateBuildingsForPlayer6()
local p = Player(6)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("usep"), -11776.0, -5248.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), -11008.0, -5056.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("ubon"), -11136.0, -6016.0, 270.000, FourCC("ubon"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), -11776.0, -6080.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10592.0, -5536.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10144.0, -6048.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -12192.0, -5088.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -12192.0, -6240.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), -10592.0, -6048.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("unp2"), -7808.0, -8448.0, 270.000, FourCC("unp2"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), -8768.0, -9024.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), -8256.0, -8768.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), -7872.0, -9472.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), -8320.0, -9664.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("ubon"), -7808.0, -7872.0, 270.000, FourCC("ubon"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -7264.0, -8288.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -7200.0, -9696.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -8800.0, -9504.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -8416.0, -9248.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -8864.0, -8544.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -8352.0, -7904.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -7456.0, -8800.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -7904.0, -9056.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -7456.0, -9248.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uaod"), -11424.0, -7328.0, 270.000, FourCC("uaod"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), -7744.0, -6784.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), -8448.0, -7040.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), -8768.0, -8000.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -8864.0, -7264.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), -11392.0, -8576.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -7648.0, -9888.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -8096.0, -7328.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), -10944.0, -7872.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("ubon"), -12032.0, -9280.0, 270.000, FourCC("ubon"))
u = BlzCreateUnitWithSkin(p, FourCC("ubon"), -12928.0, -9216.0, 270.000, FourCC("ubon"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10592.0, -7392.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("u004"), -11904.0, -8320.0, 270.000, FourCC("u004"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10592.0, -8544.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10912.0, -8800.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), -13120.0, -7360.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), -12608.0, -7872.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), -13056.0, -8384.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("usep"), -13504.0, -9088.0, 270.000, FourCC("usep"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), -12416.0, -8768.0, 270.000, FourCC("uslh"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10976.0, -7136.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), -13696.0, -8512.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("utod"), -13632.0, -7872.0, 270.000, FourCC("utod"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -12576.0, -7328.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -13600.0, -7328.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("utom"), -11392.0, -9216.0, 270.000, FourCC("utom"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -12128.0, -7456.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10464.0, -7776.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10464.0, -8096.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10144.0, -7648.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -10144.0, -8224.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -5344.0, -12640.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("ubon"), -7360.0, -7360.0, 270.000, FourCC("ubon"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -5344.0, -12832.0, 270.000, FourCC("uzg1"))
end

function CreateBuildingsForPlayer8()
local p = Player(8)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("h005"), 7936.0, 6912.0, 270.000, FourCC("h005"))
u = BlzCreateUnitWithSkin(p, FourCC("h005"), 7424.0, 6144.0, 270.000, FourCC("h005"))
u = BlzCreateUnitWithSkin(p, FourCC("h005"), 7872.0, 5696.0, 270.000, FourCC("h005"))
u = BlzCreateUnitWithSkin(p, FourCC("h005"), 7552.0, 4736.0, 270.000, FourCC("h005"))
u = BlzCreateUnitWithSkin(p, FourCC("h005"), 8128.0, 3840.0, 270.000, FourCC("h005"))
u = BlzCreateUnitWithSkin(p, FourCC("h005"), 8768.0, 4672.0, 270.000, FourCC("h005"))
u = BlzCreateUnitWithSkin(p, FourCC("h005"), 9152.0, 4032.0, 270.000, FourCC("h005"))
u = BlzCreateUnitWithSkin(p, FourCC("hgra"), 8192.0, 6464.0, 270.000, FourCC("hgra"))
u = BlzCreateUnitWithSkin(p, FourCC("hgra"), 9472.0, 4800.0, 270.000, FourCC("hgra"))
u = BlzCreateUnitWithSkin(p, FourCC("hcas"), 9344.0, 6272.0, 270.000, FourCC("hcas"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 8576.0, 6784.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 10304.0, 5824.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 9600.0, 5056.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), 8576.0, 6080.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), 10048.0, 4480.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), 8256.0, 4608.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("halt"), 10528.0, 6560.0, 270.000, FourCC("halt"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 10016.0, 5600.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 10272.0, 5600.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 9952.0, 5280.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 8992.0, 7072.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 8864.0, 6688.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 8672.0, 7072.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 8928.0, 5600.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 8736.0, 5472.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 8928.0, 5344.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 10336.0, 5024.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 10528.0, 4832.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("ntn2"), 10272.0, 4768.0, 270.000, FourCC("ntn2"))
u = BlzCreateUnitWithSkin(p, FourCC("hctw"), 9920.0, 6080.0, 270.000, FourCC("hctw"))
end

function CreateUnitsForPlayer8()
local p = Player(8)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hhdl"), 9384.8, 7111.2, 56.263, FourCC("hhdl"))
u = BlzCreateUnitWithSkin(p, FourCC("hhdl"), 9527.6, 7123.1, 115.030, FourCC("hhdl"))
u = BlzCreateUnitWithSkin(p, FourCC("hhdl"), 9676.1, 7150.5, 269.602, FourCC("hhdl"))
u = BlzCreateUnitWithSkin(p, FourCC("hhdl"), 9845.0, 7083.9, 182.093, FourCC("hhdl"))
u = BlzCreateUnitWithSkin(p, FourCC("hhdl"), 9942.0, 7228.1, 177.094, FourCC("hhdl"))
u = BlzCreateUnitWithSkin(p, FourCC("hhdl"), 9743.0, 7225.8, 44.188, FourCC("hhdl"))
end

function CreateBuildingsForPlayer9()
local p = Player(9)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("h000"), -256.0, -6080.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 1216.0, -6464.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 640.0, -4096.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), -64.0, -5440.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("halt"), 2336.0, -4704.0, 270.000, FourCC("halt"))
u = BlzCreateUnitWithSkin(p, FourCC("hvlt"), 1536.0, -3264.0, 270.000, FourCC("hvlt"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1984.0, -2240.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2112.0, -2368.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1984.0, -2368.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2048.0, -2496.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -2560.0, -7296.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -2048.0, -6784.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -1664.0, -6400.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -1152.0, -5888.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), -896.0, -5504.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), 1408.0, -4992.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), 1984.0, -4992.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), 1408.0, -5632.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), -128.0, -4864.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 2304.0, -3136.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 3072.0, -3520.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 2240.0, -3776.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 2688.0, -3968.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 2816.0, -3072.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1856.0, -2304.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 1920.0, -2496.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2496.0, -5248.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2368.0, -5312.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2368.0, -5184.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2496.0, -5120.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2240.0, -5248.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2240.0, -5120.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 2368.0, -5056.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("h004"), 2624.0, -3456.0, 270.000, FourCC("h004"))
u = BlzCreateUnitWithSkin(p, FourCC("hgra"), 1920.0, -2816.0, 270.000, FourCC("hgra"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), 9408.0, 5504.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("h000"), 768.0, -3264.0, 270.000, FourCC("h000"))
u = BlzCreateUnitWithSkin(p, FourCC("hbar"), 1152.0, -4416.0, 270.000, FourCC("hbar"))
u = BlzCreateUnitWithSkin(p, FourCC("hars"), 640.0, -4992.0, 270.000, FourCC("hars"))
u = BlzCreateUnitWithSkin(p, FourCC("harm"), 768.0, -5568.0, 270.000, FourCC("harm"))
u = BlzCreateUnitWithSkin(p, FourCC("hlum"), 2720.0, -4832.0, 270.000, FourCC("hlum"))
u = BlzCreateUnitWithSkin(p, FourCC("hbla"), 2880.0, -4352.0, 270.000, FourCC("hbla"))
u = BlzCreateUnitWithSkin(p, FourCC("hgra"), 1664.0, -3904.0, 270.000, FourCC("hgra"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 64.0, -5440.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hctw"), 960.0, -3712.0, 270.000, FourCC("hctw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 0.0, -5568.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 1792.0, -6016.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 384.0, -6016.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 384.0, -5888.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 512.0, -5952.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hhou"), 512.0, -6080.0, 270.000, FourCC("hhou"))
u = BlzCreateUnitWithSkin(p, FourCC("hatw"), 1920.0, -4480.0, 270.000, FourCC("hatw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 1024.0, -3200.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hctw"), 2624.0, -4352.0, 270.000, FourCC("hctw"))
u = BlzCreateUnitWithSkin(p, FourCC("hctw"), 2176.0, -5568.0, 270.000, FourCC("hctw"))
u = BlzCreateUnitWithSkin(p, FourCC("hctw"), 960.0, -6016.0, 270.000, FourCC("hctw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 1152.0, -2688.0, 270.000, FourCC("hgtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hgtw"), 1536.0, -2112.0, 270.000, FourCC("hgtw"))
end

function CreateBuildingsForPlayer10()
local p = Player(10)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 224.0, 3424.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg2"), 544.0, 2656.0, 270.000, FourCC("uzg2"))
u = BlzCreateUnitWithSkin(p, FourCC("uslh"), 832.0, 3328.0, 270.000, FourCC("uslh"))
end

function CreateUnitsForPlayer10()
local p = Player(10)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -262.1, 3257.3, 251.810, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 69.1, 2694.2, 215.624, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 55.3, 3711.2, 124.677, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 484.1, 3648.8, 60.031, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 423.5, 3131.0, 107.570, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -3.0, 3219.5, 259.329, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 153.6, 2864.4, 195.189, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 2.1, 2744.6, 77.500, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 324.2, 2726.0, 194.332, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 200.7, 3434.2, 152.857, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 287.3, 3204.7, 262.307, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 362.6, 2928.4, 45.957, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 291.1, 2689.2, 288.191, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 96.5, 2933.7, 131.774, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 22.0, 3217.4, 157.065, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 7.1, 3580.2, 247.793, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 372.9, 2413.4, 53.550, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -137.0, 2931.1, 26.599, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 392.3, 3952.1, 111.910, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 583.9, 3626.0, 159.889, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 562.6, 3128.0, 171.798, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 965.5, 2960.5, 296.519, FourCC("umtw"))
end

function CreateBuildingsForPlayer11()
local p = Player(11)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("oalt"), 3168.0, 5856.0, 270.000, FourCC("oalt"))
u = BlzCreateUnitWithSkin(p, FourCC("obea"), 3968.0, 7040.0, 270.000, FourCC("obea"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 4864.0, 6784.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 4224.0, 7616.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 3392.0, 4928.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 2752.0, 6208.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("otto"), 4224.0, 5504.0, 270.000, FourCC("otto"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), 3840.0, 6336.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("o000"), 4544.0, 4928.0, 270.000, FourCC("o000"))
u = BlzCreateUnitWithSkin(p, FourCC("ofrt"), 3648.0, 5376.0, 270.000, FourCC("ofrt"))
u = BlzCreateUnitWithSkin(p, FourCC("obar"), 3392.0, 6784.0, 270.000, FourCC("obar"))
u = BlzCreateUnitWithSkin(p, FourCC("osld"), 4672.0, 5760.0, 270.000, FourCC("osld"))
u = BlzCreateUnitWithSkin(p, FourCC("otto"), 4352.0, 6208.0, 270.000, FourCC("otto"))
u = BlzCreateUnitWithSkin(p, FourCC("owtw"), 3776.0, 4672.0, 270.000, FourCC("owtw"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 2912.0, 6688.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 3040.0, 6624.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 3040.0, 6496.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 2912.0, 6432.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 2784.0, 6432.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 2784.0, 6624.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("ovln"), 4288.0, 4800.0, 270.000, FourCC("ovln"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 3808.0, 4512.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 3936.0, 4576.0, 270.000, FourCC("npgf"))
u = BlzCreateUnitWithSkin(p, FourCC("npgf"), 3936.0, 4704.0, 270.000, FourCC("npgf"))
end

function CreateUnitsForPlayer11()
local p = Player(11)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("ocat"), 5646.9, 3847.1, 61.525, FourCC("ocat"))
end

function CreateNeutralPassiveBuildings()
local p = Player(PLAYER_NEUTRAL_PASSIVE)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("ncp2"), -13088.0, -5664.0, 270.000, FourCC("ncp2"))
u = BlzCreateUnitWithSkin(p, FourCC("ncp3"), -2368.0, -12608.0, 270.000, FourCC("ncp3"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), -9600.0, -8000.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("ncp3"), -10176.0, -7936.0, 270.000, FourCC("ncp3"))
u = BlzCreateUnitWithSkin(p, FourCC("uzg1"), -9952.0, -7904.0, 270.000, FourCC("uzg1"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), 4800.0, -64.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), 5312.0, -512.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), 7104.0, -64.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), 6592.0, -576.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), 4864.0, 1792.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), 7040.0, 1792.0, 270.000, FourCC("nico"))
gg_unit_ncp3_0523 = BlzCreateUnitWithSkin(p, FourCC("ncp3"), -10944.0, -11200.0, 270.000, FourCC("ncp3"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), -11392.0, -10752.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("nico"), -10496.0, -11648.0, 270.000, FourCC("nico"))
u = BlzCreateUnitWithSkin(p, FourCC("ntav"), 4544.0, 9344.0, 270.000, FourCC("ntav"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("nfoh"), 2944.0, -11776.0, 270.000, FourCC("nfoh"))
u = BlzCreateUnitWithSkin(p, FourCC("nmoo"), 3584.0, -11776.0, 270.000, FourCC("nmoo"))
end

function CreateNeutralPassive()
local p = Player(PLAYER_NEUTRAL_PASSIVE)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4489.0, 9674.1, 1.263, FourCC("necr"))
u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4732.9, 9563.1, 36.827, FourCC("necr"))
u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4618.7, 9811.1, 41.969, FourCC("necr"))
u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4782.6, 9443.1, 299.233, FourCC("necr"))
u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4863.8, 9351.9, 275.897, FourCC("necr"))
u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4893.6, 9243.3, 255.132, FourCC("necr"))
u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4733.8, 9135.9, 115.393, FourCC("necr"))
u = BlzCreateUnitWithSkin(p, FourCC("necr"), 4289.7, 9767.8, 34.817, FourCC("necr"))
end

function CreatePlayerBuildings()
CreateBuildingsForPlayer0()
CreateBuildingsForPlayer1()
CreateBuildingsForPlayer2()
CreateBuildingsForPlayer3()
CreateBuildingsForPlayer5()
CreateBuildingsForPlayer6()
CreateBuildingsForPlayer8()
CreateBuildingsForPlayer9()
CreateBuildingsForPlayer10()
CreateBuildingsForPlayer11()
end

function CreatePlayerUnits()
CreateUnitsForPlayer1()
CreateUnitsForPlayer2()
CreateUnitsForPlayer3()
CreateUnitsForPlayer5()
CreateUnitsForPlayer8()
CreateUnitsForPlayer10()
CreateUnitsForPlayer11()
end

function CreateAllUnits()
CreateNeutralPassiveBuildings()
CreatePlayerBuildings()
CreateNeutralPassive()
CreatePlayerUnits()
end

function CreateRegions()
local we

gg_rct_Lich_King_Stand = Rect(-12032.0, -12320.0, -11424.0, -11680.0)
gg_rct_Fordragons_Hold = Rect(8192.0, 5024.0, 10016.0, 6752.0)
gg_rct_Human_2_Orc_2_base = Rect(-2592.0, -6688.0, 3392.0, -960.0)
gg_rct_Wrathgate_Guard = Rect(7584.0, -7680.0, 9184.0, -5984.0)
gg_rct_Lichg_King_Respawn = Rect(-13344.0, -13696.0, -13152.0, -13472.0)
gg_rct_Bolvar_Respawn = Rect(-7392.0, 8640.0, -7264.0, 8800.0)
gg_rct_Citadel_Entrance = Rect(-7008.0, -9728.0, -5440.0, -8320.0)
gg_rct_Revive_2 = Rect(1312.0, -5376.0, 1472.0, -5216.0)
gg_rct_Revive_1 = Rect(10336.0, 6272.0, 10496.0, 6528.0)
gg_rct_TFT_Base_1 = Rect(-9024.0, -11264.0, -6976.0, -6528.0)
gg_rct_TFT_Base_2 = Rect(-9312.0, -13920.0, -6880.0, -11360.0)
gg_rct_TFT_Base_3 = Rect(-12352.0, -6432.0, -9536.0, -4864.0)
gg_rct_Wrathgate = Rect(5376.0, 2080.0, 6528.0, 3520.0)
gg_rct_Main_Base = Rect(-13984.0, -9728.0, -9408.0, -6432.0)
gg_rct_Front_of_TFT = Rect(-10336.0, -10592.0, -9888.0, -10112.0)
gg_rct_TFT = Rect(-14240.0, -14240.0, -10304.0, -10560.0)
gg_rct_Bolvar_Force_1 = Rect(-544.0, 640.0, 512.0, 2144.0)
gg_rct_Bolvar_Force_2 = Rect(-4608.0, 11104.0, -2688.0, 11776.0)
gg_rct_Bolvar_Force_3 = Rect(192.0, 10048.0, 4000.0, 12192.0)
gg_rct_Center_of_TFT = Rect(-14240.0, -14336.0, -11712.0, -12064.0)
gg_rct_Saufang_Hold = Rect(3104.0, 4992.0, 4704.0, 7360.0)
gg_rct_three_corner = Rect(-4320.0, -8672.0, -3392.0, -7776.0)
gg_rct_Tree = Rect(5024.0, -8864.0, 6912.0, -7648.0)
gg_rct_Corpses = Rect(2592.0, 608.0, 2912.0, 960.0)
gg_rct_Region_030 = Rect(5216.0, 2880.0, 5792.0, 4384.0)
gg_rct_Region_031 = Rect(6208.0, 2752.0, 6944.0, 4672.0)
gg_rct_Cloud = Rect(1600.0, -4224.0, 7552.0, 5344.0)
gg_rct_Waygate = Rect(-7200.0, -4544.0, -6752.0, -4032.0)
end

function CreateCameras()
gg_cam_Army_Move_1 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_ROTATION, 31.7, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_ANGLE_OF_ATTACK, 325.5, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_TARGET_DISTANCE, 3158.5, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_1, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Army_Move_1, -11443.0, 864.1, 0.0)
gg_cam_Army_Move_2 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_ROTATION, 45.2, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_ANGLE_OF_ATTACK, 308.2, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_TARGET_DISTANCE, 3158.5, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_2, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Army_Move_2, -10511.4, 346.1, 0.0)
gg_cam_Army_Move_3 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_ROTATION, 124.3, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_ANGLE_OF_ATTACK, 314.6, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_TARGET_DISTANCE, 3158.5, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Army_Move_3, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Army_Move_3, -10144.0, -79.6, 0.0)
gg_cam_Intro_TFT_1 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_ROTATION, 226.5, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_ANGLE_OF_ATTACK, 358.1, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_TARGET_DISTANCE, 1782.9, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_1, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Intro_TFT_1, -11817.2, -12138.2, 0.0)
gg_cam_Intro_TFT_2 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_ROTATION, 225.8, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_ANGLE_OF_ATTACK, 3.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_TARGET_DISTANCE, 1782.9, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_2, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Intro_TFT_2, -12692.7, -12959.5, 0.0)
gg_cam_Intro_TFT_3 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_ROTATION, 222.8, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_ANGLE_OF_ATTACK, 337.6, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_TARGET_DISTANCE, 1217.7, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Intro_TFT_3, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Intro_TFT_3, -13717.1, -13967.3, 0.0)
gg_cam_Lich_King_Intro_1 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_ROTATION, 111.8, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_ANGLE_OF_ATTACK, 357.4, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_TARGET_DISTANCE, 3158.5, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_1, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Lich_King_Intro_1, -8858.3, -2296.3, 0.0)
gg_cam_Lich_King_Intro_2 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_ROTATION, 53.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_ANGLE_OF_ATTACK, 350.9, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_TARGET_DISTANCE, 2157.3, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_2, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Lich_King_Intro_2, -8698.4, -2447.1, 0.0)
gg_cam_Lich_King_Intro_3 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_ROTATION, 315.8, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_ANGLE_OF_ATTACK, 357.6, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_TARGET_DISTANCE, 2157.3, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_3, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Lich_King_Intro_3, -7737.8, -3989.9, 0.0)
gg_cam_Lich_King_Intro_4 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_ROTATION, 315.7, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_ANGLE_OF_ATTACK, 333.2, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_TARGET_DISTANCE, 2157.3, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Lich_King_Intro_4, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Lich_King_Intro_4, -8940.5, -2889.9, 0.0)
gg_cam_Dragon_Flight_up_1 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_ROTATION, 301.1, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_ANGLE_OF_ATTACK, 10.1, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_TARGET_DISTANCE, 2157.3, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_1, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Dragon_Flight_up_1, -8993.7, -2747.5, 0.0)
gg_cam_Dragon_Flight_up_2 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_ROTATION, 328.1, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_ANGLE_OF_ATTACK, 322.5, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_TARGET_DISTANCE, 3474.3, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Dragon_Flight_up_2, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Dragon_Flight_up_2, -9596.7, -1462.7, 0.0)
gg_cam_Camera_015 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_ROTATION, 48.8, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_ANGLE_OF_ATTACK, 355.9, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_TARGET_DISTANCE, 3158.5, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_015, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Camera_015, -9512.5, -9568.9, 0.0)
gg_cam_Camera_014 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_ROTATION, 43.6, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_ANGLE_OF_ATTACK, 351.9, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_TARGET_DISTANCE, 2157.3, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_FARZ, 5000.0, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_NEARZ, 100.0, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_014, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Camera_014, -9219.4, -9491.6, 0.0)
end

function Trig_Corpses_Respawn_Func002001001002001()
return (IsUnitDeadBJ(GetFilterUnit()) == true)
end

function Trig_Corpses_Respawn_Func002001001002002()
return (GetUnitTypeId(GetFilterUnit()) == FourCC("hfoo"))
end

function Trig_Corpses_Respawn_Func002001001002()
return GetBooleanAnd(Trig_Corpses_Respawn_Func002001001002001(), Trig_Corpses_Respawn_Func002001001002002())
end

function Trig_Corpses_Respawn_Conditions()
if (not (CountUnitsInGroup(GetUnitsInRectMatching(gg_rct_Corpses, Condition(Trig_Corpses_Respawn_Func002001001002))) < 20)) then
return false
end
return true
end

function Trig_Corpses_Respawn_Actions()
CreatePermanentCorpseLocBJ(bj_CORPSETYPE_BONE, FourCC("hfoo"), Player(0), GetRandomLocInRect(gg_rct_Corpses), GetRandomDirectionDeg())
end

function InitTrig_Corpses_Respawn()
gg_trg_Corpses_Respawn = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Corpses_Respawn, 1.00)
TriggerAddCondition(gg_trg_Corpses_Respawn, Condition(Trig_Corpses_Respawn_Conditions))
TriggerAddAction(gg_trg_Corpses_Respawn, Trig_Corpses_Respawn_Actions)
end

function Trig_Initialization_Func023A()
SetPlayerFlagBJ(PLAYER_STATE_GIVES_BOUNTY, true, GetEnumPlayer())
end

function Trig_Initialization_Func030C()
if (not (GetPlayerController(GetOwningPlayer(gg_unit_H001_0142)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Initialization_Func059001002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func059001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Human[1])
end

function Trig_Initialization_Func059001002()
return GetBooleanAnd(Trig_Initialization_Func059001002001(), Trig_Initialization_Func059001002002())
end

function Trig_Initialization_Func059002()
TriggerRegisterUnitInRangeSimple(gg_trg_Anti_leak_H1, 500.00, GetEnumUnit())
end

function Trig_Initialization_Func060001002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func060001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Human[2])
end

function Trig_Initialization_Func060001002()
return GetBooleanAnd(Trig_Initialization_Func060001002001(), Trig_Initialization_Func060001002002())
end

function Trig_Initialization_Func060002()
TriggerRegisterUnitInRangeSimple(gg_trg_Anti_leak_H2, 500.00, GetEnumUnit())
end

function Trig_Initialization_Func061001002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func061001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Human[3])
end

function Trig_Initialization_Func061001002()
return GetBooleanAnd(Trig_Initialization_Func061001002001(), Trig_Initialization_Func061001002002())
end

function Trig_Initialization_Func061002()
TriggerRegisterUnitInRangeSimple(gg_trg_Anti_leak_H3, 500.00, GetEnumUnit())
end

function Trig_Initialization_Func062001002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func062001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Orc[1])
end

function Trig_Initialization_Func062001002()
return GetBooleanAnd(Trig_Initialization_Func062001002001(), Trig_Initialization_Func062001002002())
end

function Trig_Initialization_Func062002()
TriggerRegisterUnitInRangeSimple(gg_trg_Anti_leak_O1, 500.00, GetEnumUnit())
end

function Trig_Initialization_Func063001002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func063001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Orc[2])
end

function Trig_Initialization_Func063001002()
return GetBooleanAnd(Trig_Initialization_Func063001002001(), Trig_Initialization_Func063001002002())
end

function Trig_Initialization_Func063002()
TriggerRegisterUnitInRangeSimple(gg_trg_Anti_leak_O2, 500.00, GetEnumUnit())
end

function Trig_Initialization_Func064001002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func064001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Undead[1])
end

function Trig_Initialization_Func064001002()
return GetBooleanAnd(Trig_Initialization_Func064001002001(), Trig_Initialization_Func064001002002())
end

function Trig_Initialization_Func064002()
TriggerRegisterUnitInRangeSimple(gg_trg_Anti_leak_U1, 500.00, GetEnumUnit())
end

function Trig_Initialization_Func065001002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func065001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Undead[2])
end

function Trig_Initialization_Func065001002()
return GetBooleanAnd(Trig_Initialization_Func065001002001(), Trig_Initialization_Func065001002002())
end

function Trig_Initialization_Func065002()
TriggerRegisterUnitInRangeSimple(gg_trg_Anti_leak_U2, 500.00, GetEnumUnit())
end

function Trig_Initialization_Func066A()
end

function Trig_Initialization_Func067Func001C()
if (not (GetRandomInt(1, 2) == 1)) then
return false
end
return true
end

function Trig_Initialization_Func067A()
if (Trig_Initialization_Func067Func001C()) then
IssuePointOrderLocBJ(GetEnumUnit(), "attack", GetRandomLocInRect(gg_rct_Fordragons_Hold))
else
IssuePointOrderLocBJ(GetEnumUnit(), "attack", GetRandomLocInRect(gg_rct_Saufang_Hold))
end
end

function Trig_Initialization_Func069001002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Initialization_Func069A()
SetUnitAnimationWithRarity(GetEnumUnit(), "stand work", RARITY_FREQUENT)
end

function Trig_Initialization_Actions()
SetSkyModel("Environment\\Sky\\BlizzardSky\\BlizzardSky.mdl")
CameraSetSmoothingFactorBJ(1)
MeleeStartingVisibility()
MeleeStartingHeroLimit()
MeleeGrantHeroItems()
MeleeStartingResources()
MeleeInitVictoryDefeat()
udg_Human[1] = Player(8)
udg_Human[2] = Player(9)
udg_Human[3] = Player(2)
udg_Orc[1] = Player(11)
udg_Orc[2] = Player(0)
udg_Undead[1] = Player(5)
udg_Undead[2] = Player(6)
SetPlayerColorBJ(udg_Human[1], PLAYER_COLOR_LIGHT_BLUE, true)
SetPlayerColorBJ(udg_Human[3], PLAYER_COLOR_LIGHT_BLUE, true)
SetPlayerColorBJ(udg_Orc[1], PLAYER_COLOR_RED, true)
SetPlayerColorBJ(udg_Undead[1], PLAYER_COLOR_PURPLE, true)
SetPlayerColorBJ(udg_Undead[2], PLAYER_COLOR_PURPLE, true)
ForForce(GetPlayersAll(), Trig_Initialization_Func023A)
SetPlayerAllianceStateBJ(udg_Human[2], udg_Undead[1], bj_ALLIANCE_NEUTRAL)
SetPlayerAllianceStateBJ(udg_Undead[1], udg_Human[2], bj_ALLIANCE_NEUTRAL)
SetPlayerAllianceStateBJ(udg_Orc[2], udg_Undead[1], bj_ALLIANCE_NEUTRAL)
SetPlayerAllianceStateBJ(udg_Undead[1], udg_Orc[2], bj_ALLIANCE_NEUTRAL)
SetPlayerHandicapXPBJ(Player(1), 500.00)
SetPlayerHandicapXPBJ(Player(10), 500.00)
if (Trig_Initialization_Func030C()) then
EnableTrigger(gg_trg_No_leave)
EnableTrigger(gg_trg_Heal_sefl_AI)
else
end
udg_Human_Target[1] = gg_rct_Wrathgate
udg_Orc_Target[1] = gg_rct_Wrathgate
udg_Undead_Target[1] = gg_rct_Wrathgate
udg_Human_Target[2] = gg_rct_Citadel_Entrance
udg_Orc_Target[2] = gg_rct_Citadel_Entrance
udg_Undead_Target[2] = gg_rct_Citadel_Entrance
udg_Human_Target[3] = gg_rct_Fordragons_Hold
udg_BolvarTarget = gg_rct_Fordragons_Hold
udg_Spawn_Human_Bool[1] = true
udg_Spawn_Human_Bool[2] = true
udg_Spawn_Human_Bool[3] = true
udg_Spawn_Orc_Bool[1] = true
udg_Spawn_Orc_Bool[2] = true
udg_Spawn_Undead_Bool[1] = true
udg_Spawn_Undead_Bool[2] = true
ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_B000_6628)
SetDestructableInvulnerableBJ(gg_dest_B000_6628, true)
ConditionalTriggerExecute(gg_trg_Bolvar_Army_Spawn)
ConditionalTriggerExecute(gg_trg_Human_Spawn)
ConditionalTriggerExecute(gg_trg_Orc_Spawn)
ConditionalTriggerExecute(gg_trg_Undead_Spawn)
IssuePointOrderLocBJ(GetEnumUnit(), "attack", GetRandomLocInRect(gg_rct_Human_2_Orc_2_base))
udg_BolvarRespawn = gg_rct_Bolvar_Respawn
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func059001002)), Trig_Initialization_Func059002)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func060001002)), Trig_Initialization_Func060002)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func061001002)), Trig_Initialization_Func061002)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func062001002)), Trig_Initialization_Func062002)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func063001002)), Trig_Initialization_Func063002)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func064001002)), Trig_Initialization_Func064002)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func065001002)), Trig_Initialization_Func065002)
ForGroupBJ(GetUnitsInRectAll(gg_rct_Citadel_Entrance), Trig_Initialization_Func066A)
ForGroupBJ(GetUnitsInRectAll(gg_rct_Wrathgate), Trig_Initialization_Func067A)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Initialization_Func069001002)), Trig_Initialization_Func069A)
CreateFogModifierRectBJ(true, GetOwningPlayer(gg_unit_H001_0142), FOG_OF_WAR_VISIBLE, gg_rct_TFT)
UnitAddAbilityBJ(FourCC("A01A"), gg_unit_h00D_0064)
end

function InitTrig_Initialization()
gg_trg_Initialization = CreateTrigger()
TriggerRegisterTimerEventSingle(gg_trg_Initialization, 0.10)
TriggerAddAction(gg_trg_Initialization, Trig_Initialization_Actions)
end

function Trig_Tree_cut_Func003C()
if (GetOwningPlayer(GetTriggerUnit()) == Player(1)) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Tree_cut_Conditions()
if (not Trig_Tree_cut_Func003C()) then
return false
end
return true
end

function Trig_Tree_cut_Func001002()
KillDestructable(GetEnumDestructable())
end

function Trig_Tree_cut_Actions()
EnumDestructablesInRectAll(gg_rct_Tree, Trig_Tree_cut_Func001002)
DisableTrigger(GetTriggeringTrigger())
end

function InitTrig_Tree_cut()
gg_trg_Tree_cut = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Tree_cut, gg_rct_Wrathgate_Guard)
TriggerAddCondition(gg_trg_Tree_cut, Condition(Trig_Tree_cut_Conditions))
TriggerAddAction(gg_trg_Tree_cut, Trig_Tree_cut_Actions)
end

function Trig_Human_Spawn_Func002Func001Func002001002001001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Human_Spawn_Func002Func001Func002001002001002()
return (IsUnitAliveBJ(GetFilterUnit()) == true)
end

function Trig_Human_Spawn_Func002Func001Func002001002001()
return GetBooleanAnd(Trig_Human_Spawn_Func002Func001Func002001002001001(), Trig_Human_Spawn_Func002Func001Func002001002001002())
end

function Trig_Human_Spawn_Func002Func001Func002001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Human[GetForLoopIndexA()])
end

function Trig_Human_Spawn_Func002Func001Func002001002()
return GetBooleanAnd(Trig_Human_Spawn_Func002Func001Func002001002001(), Trig_Human_Spawn_Func002Func001Func002001002002())
end

function Trig_Human_Spawn_Func002Func001Func002Func002Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hfoo"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func002Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hrif"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func002Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hkni"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func002C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("hbar"))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func004Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hmpr"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func004Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hsor"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func004Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hspt"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func004C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("hbar"))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func006Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hmtm"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func006C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("harm"))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func008Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hgry"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002Func008C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("hgra"))) then
return false
end
return true
end

function Trig_Human_Spawn_Func002Func001Func002A()
if (Trig_Human_Spawn_Func002Func001Func002Func002C()) then
if (Trig_Human_Spawn_Func002Func001Func002Func002Func002C()) then
CreateNUnitsAtLoc(1, FourCC("hfoo"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
if (Trig_Human_Spawn_Func002Func001Func002Func002Func004C()) then
CreateNUnitsAtLoc(1, FourCC("hrif"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
if (Trig_Human_Spawn_Func002Func001Func002Func002Func006C()) then
CreateNUnitsAtLoc(1, FourCC("hkni"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Human_Spawn_Func002Func001Func002Func004C()) then
if (Trig_Human_Spawn_Func002Func001Func002Func004Func002C()) then
CreateNUnitsAtLoc(1, FourCC("hmpr"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
if (Trig_Human_Spawn_Func002Func001Func002Func004Func004C()) then
CreateNUnitsAtLoc(1, FourCC("hsor"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
if (Trig_Human_Spawn_Func002Func001Func002Func004Func006C()) then
CreateNUnitsAtLoc(1, FourCC("hspt"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Human_Spawn_Func002Func001Func002Func006C()) then
if (Trig_Human_Spawn_Func002Func001Func002Func006Func002C()) then
CreateNUnitsAtLoc(1, FourCC("hmtm"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Human_Spawn_Func002Func001Func002Func008C()) then
if (Trig_Human_Spawn_Func002Func001Func002Func008Func002C()) then
CreateNUnitsAtLoc(1, FourCC("hgry"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
else
end
end

function Trig_Human_Spawn_Func002Func001C()
if (not (udg_Spawn_Human_Bool[GetForLoopIndexA()] == true)) then
return false
end
return true
end

function Trig_Human_Spawn_Actions()
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 2
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
if (Trig_Human_Spawn_Func002Func001C()) then
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Human_Spawn_Func002Func001Func002001002)), Trig_Human_Spawn_Func002Func001Func002A)
else
end
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
end

function InitTrig_Human_Spawn()
gg_trg_Human_Spawn = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Human_Spawn, 30.00)
TriggerAddAction(gg_trg_Human_Spawn, Trig_Human_Spawn_Actions)
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002001002001001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == true)
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002001002001002()
return (IsUnitAliveBJ(GetFilterUnit()) == true)
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002001002001()
return GetBooleanAnd(Trig_Bolvar_Army_Spawn_Func002Func001Func002001002001001(), Trig_Bolvar_Army_Spawn_Func002Func001Func002001002001002())
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Human[GetForLoopIndexA()])
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002001002()
return GetBooleanAnd(Trig_Bolvar_Army_Spawn_Func002Func001Func002001002001(), Trig_Bolvar_Army_Spawn_Func002Func001Func002001002002())
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hfoo"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 3))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hrif"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hkni"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("hbar"))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func004Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hmpr"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func004Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hsor"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func004C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("hbar"))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func006Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("hmtm"), udg_Human[GetForLoopIndexA()]) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002Func006C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("harm"))) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Func002Func001Func002A()
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002C()) then
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002Func002C()) then
CreateNUnitsAtLoc(1, FourCC("hfoo"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002Func004C()) then
CreateNUnitsAtLoc(1, FourCC("hrif"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func002Func006C()) then
CreateNUnitsAtLoc(1, FourCC("hkni"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func004C()) then
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func004Func002C()) then
CreateNUnitsAtLoc(1, FourCC("hmpr"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func004Func004C()) then
CreateNUnitsAtLoc(1, FourCC("hsor"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func006C()) then
if (Trig_Bolvar_Army_Spawn_Func002Func001Func002Func006Func002C()) then
CreateNUnitsAtLoc(1, FourCC("hmtm"), udg_Human[GetForLoopIndexA()], GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Human_Target[GetForLoopIndexA()]))
else
end
else
end
end

function Trig_Bolvar_Army_Spawn_Func002Func001C()
if (not (udg_Spawn_Human_Bool[GetForLoopIndexA()] == true)) then
return false
end
return true
end

function Trig_Bolvar_Army_Spawn_Actions()
bj_forLoopAIndex = 3
bj_forLoopAIndexEnd = 3
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
if (Trig_Bolvar_Army_Spawn_Func002Func001C()) then
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Bolvar_Army_Spawn_Func002Func001Func002001002)), Trig_Bolvar_Army_Spawn_Func002Func001Func002A)
else
end
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
end

function InitTrig_Bolvar_Army_Spawn()
gg_trg_Bolvar_Army_Spawn = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Bolvar_Army_Spawn, 30.00)
TriggerAddAction(gg_trg_Bolvar_Army_Spawn, Trig_Bolvar_Army_Spawn_Actions)
end

function Trig_Orc_Spawn_Func002Func001Func001001002001()
return (IsUnitDeadBJ(GetFilterUnit()) == false)
end

function Trig_Orc_Spawn_Func002Func001Func001001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Orc[GetForLoopIndexA()])
end

function Trig_Orc_Spawn_Func002Func001Func001001002()
return GetBooleanAnd(Trig_Orc_Spawn_Func002Func001Func001001002001(), Trig_Orc_Spawn_Func002Func001Func001001002002())
end

function Trig_Orc_Spawn_Func002Func001Func001Func002Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ogru"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func002Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ohun"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func002Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ocat"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func002C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("obar"))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func004Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("orai"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func004Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("okod"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func004Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("owyv"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func004Func008C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("otbr"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func004C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("obea"))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func006Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("oshm"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func006Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("odoc"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func006Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ospw"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func006C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("osld"))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func008Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("otau"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 1))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001Func008C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("otto"))) then
return false
end
return true
end

function Trig_Orc_Spawn_Func002Func001Func001A()
if (Trig_Orc_Spawn_Func002Func001Func001Func002C()) then
if (Trig_Orc_Spawn_Func002Func001Func001Func002Func002C()) then
CreateNUnitsAtLoc(1, FourCC("ogru"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func002Func004C()) then
CreateNUnitsAtLoc(1, FourCC("ohun"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func002Func006C()) then
CreateNUnitsAtLoc(1, FourCC("ocat"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func004C()) then
if (Trig_Orc_Spawn_Func002Func001Func001Func004Func002C()) then
CreateNUnitsAtLoc(1, FourCC("orai"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func004Func004C()) then
CreateNUnitsAtLoc(1, FourCC("okod"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func004Func006C()) then
CreateNUnitsAtLoc(1, FourCC("owyv"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func004Func008C()) then
CreateNUnitsAtLoc(1, FourCC("otbr"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func006C()) then
if (Trig_Orc_Spawn_Func002Func001Func001Func006Func002C()) then
CreateNUnitsAtLoc(1, FourCC("oshm"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func006Func004C()) then
CreateNUnitsAtLoc(1, FourCC("odoc"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func006Func006C()) then
CreateNUnitsAtLoc(1, FourCC("ospw"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Orc_Spawn_Func002Func001Func001Func008C()) then
if (Trig_Orc_Spawn_Func002Func001Func001Func008Func002C()) then
CreateNUnitsAtLoc(1, FourCC("otau"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[GetForLoopIndexA()]))
else
end
else
end
end

function Trig_Orc_Spawn_Func002Func001C()
if (not (udg_Spawn_Orc_Bool[GetForLoopIndexA()] == true)) then
return false
end
return true
end

function Trig_Orc_Spawn_Actions()
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 2
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
if (Trig_Orc_Spawn_Func002Func001C()) then
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Orc_Spawn_Func002Func001Func001001002)), Trig_Orc_Spawn_Func002Func001Func001A)
else
end
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
end

function InitTrig_Orc_Spawn()
gg_trg_Orc_Spawn = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Orc_Spawn, 35.00)
TriggerAddAction(gg_trg_Orc_Spawn, Trig_Orc_Spawn_Actions)
end

function Trig_Undead_Spawn_Func002Func001Func001001002001()
return (IsUnitDeadBJ(GetFilterUnit()) == false)
end

function Trig_Undead_Spawn_Func002Func001Func001001002002()
return (GetOwningPlayer(GetFilterUnit()) == udg_Undead[GetForLoopIndexA()])
end

function Trig_Undead_Spawn_Func002Func001Func001001002()
return GetBooleanAnd(Trig_Undead_Spawn_Func002Func001Func001001002001(), Trig_Undead_Spawn_Func002Func001Func001001002002())
end

function Trig_Undead_Spawn_Func002Func001Func001Func002Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ugho"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 16))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func002Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ucry"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 4))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func002Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ugar"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 3))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func002C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("usep"))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func004Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("unec"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 3))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func004Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("uban"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 3))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func004Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("uobs"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 2))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func004C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("utod"))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func006Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("u006"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 3))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func006Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("uabo"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 5))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func006Func006C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("umtw"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 3))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func006C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("uslh"))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func008Func002C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ufro"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 3))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func008Func004C()
if (not (CountLivingPlayerUnitsOfTypeId(FourCC("ubsp"), GetOwningPlayer(GetEnumUnit())) < (GetForLoopIndexA() * 4))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001Func008C()
if (not (GetUnitTypeId(GetEnumUnit()) == FourCC("ubon"))) then
return false
end
return true
end

function Trig_Undead_Spawn_Func002Func001Func001A()
if (Trig_Undead_Spawn_Func002Func001Func001Func002C()) then
if (Trig_Undead_Spawn_Func002Func001Func001Func002Func002C()) then
CreateNUnitsAtLoc(1, FourCC("ugho"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func002Func004C()) then
CreateNUnitsAtLoc(1, FourCC("ucry"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func002Func006C()) then
CreateNUnitsAtLoc(1, FourCC("ugar"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRectCenter(udg_Undead_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func004C()) then
if (Trig_Undead_Spawn_Func002Func001Func001Func004Func002C()) then
CreateNUnitsAtLoc(1, FourCC("unec"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func004Func004C()) then
CreateNUnitsAtLoc(1, FourCC("uban"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func004Func006C()) then
CreateNUnitsAtLoc(1, FourCC("uobs"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
SetUnitManaPercentBJ(GetLastCreatedUnit(), 100)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func006C()) then
if (Trig_Undead_Spawn_Func002Func001Func001Func006Func002C()) then
CreateNUnitsAtLoc(1, FourCC("u006"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func006Func004C()) then
CreateNUnitsAtLoc(1, FourCC("uabo"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func006Func006C()) then
CreateNUnitsAtLoc(1, FourCC("umtw"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[GetForLoopIndexA()]))
else
end
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func008C()) then
if (Trig_Undead_Spawn_Func002Func001Func001Func008Func002C()) then
CreateNUnitsAtLoc(1, FourCC("ufro"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRectCenter(udg_Undead_Target[GetForLoopIndexA()]))
else
end
if (Trig_Undead_Spawn_Func002Func001Func001Func008Func004C()) then
CreateNUnitsAtLoc(1, FourCC("ubsp"), GetOwningPlayer(GetEnumUnit()), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
IssuePointOrderLocBJ(GetLastCreatedUnit(), "attack", GetRectCenter(udg_Undead_Target[GetForLoopIndexA()]))
else
end
else
end
end

function Trig_Undead_Spawn_Func002Func001C()
if (not (udg_Spawn_Undead_Bool[GetForLoopIndexA()] == true)) then
return false
end
return true
end

function Trig_Undead_Spawn_Actions()
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 2
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
if (Trig_Undead_Spawn_Func002Func001C()) then
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Undead_Spawn_Func002Func001Func001001002)), Trig_Undead_Spawn_Func002Func001Func001A)
else
end
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
end

function InitTrig_Undead_Spawn()
gg_trg_Undead_Spawn = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Undead_Spawn, 20.00)
TriggerAddAction(gg_trg_Undead_Spawn, Trig_Undead_Spawn_Actions)
end

function Trig_Anti_leak_H1_Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1])) then
return false
end
return true
end

function Trig_Anti_leak_H1_Actions()
if (Trig_Anti_leak_H1_Func001C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(udg_Human_Target[1]))
else
end
end

function InitTrig_Anti_leak_H1()
gg_trg_Anti_leak_H1 = CreateTrigger()
TriggerAddAction(gg_trg_Anti_leak_H1, Trig_Anti_leak_H1_Actions)
end

function Trig_Anti_leak_H2_Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2])) then
return false
end
return true
end

function Trig_Anti_leak_H2_Actions()
if (Trig_Anti_leak_H2_Func001C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(udg_Human_Target[2]))
else
end
end

function InitTrig_Anti_leak_H2()
gg_trg_Anti_leak_H2 = CreateTrigger()
TriggerAddAction(gg_trg_Anti_leak_H2, Trig_Anti_leak_H2_Actions)
end

function Trig_Anti_leak_H3_Conditions()
if (not (GetUnitTypeId(GetTriggerUnit()) ~= FourCC("hpea"))) then
return false
end
return true
end

function Trig_Anti_leak_H3_Func002C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3])) then
return false
end
return true
end

function Trig_Anti_leak_H3_Actions()
if (Trig_Anti_leak_H3_Func002C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(udg_Human_Target[3]))
else
end
end

function InitTrig_Anti_leak_H3()
gg_trg_Anti_leak_H3 = CreateTrigger()
TriggerAddCondition(gg_trg_Anti_leak_H3, Condition(Trig_Anti_leak_H3_Conditions))
TriggerAddAction(gg_trg_Anti_leak_H3, Trig_Anti_leak_H3_Actions)
end

function Trig_Anti_leak_O1_Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1])) then
return false
end
return true
end

function Trig_Anti_leak_O1_Actions()
if (Trig_Anti_leak_O1_Func001C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[1]))
else
end
end

function InitTrig_Anti_leak_O1()
gg_trg_Anti_leak_O1 = CreateTrigger()
TriggerAddAction(gg_trg_Anti_leak_O1, Trig_Anti_leak_O1_Actions)
end

function Trig_Anti_leak_O2_Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2])) then
return false
end
return true
end

function Trig_Anti_leak_O2_Actions()
if (Trig_Anti_leak_O2_Func001C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(udg_Orc_Target[2]))
else
end
end

function InitTrig_Anti_leak_O2()
gg_trg_Anti_leak_O2 = CreateTrigger()
TriggerAddAction(gg_trg_Anti_leak_O2, Trig_Anti_leak_O2_Actions)
end

function Trig_Anti_leak_U1_Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[1])) then
return false
end
return true
end

function Trig_Anti_leak_U1_Actions()
if (Trig_Anti_leak_U1_Func001C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[1]))
else
end
end

function InitTrig_Anti_leak_U1()
gg_trg_Anti_leak_U1 = CreateTrigger()
TriggerAddAction(gg_trg_Anti_leak_U1, Trig_Anti_leak_U1_Actions)
end

function Trig_Anti_leak_U2_Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])) then
return false
end
return true
end

function Trig_Anti_leak_U2_Actions()
if (Trig_Anti_leak_U2_Func001C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[2]))
else
end
end

function InitTrig_Anti_leak_U2()
gg_trg_Anti_leak_U2 = CreateTrigger()
TriggerAddAction(gg_trg_Anti_leak_U2, Trig_Anti_leak_U2_Actions)
end

function Trig_Choose_Active_Deactive_Func001C()
if (not (IsTriggerEnabled(gg_trg_Choose_Target) == true)) then
return false
end
return true
end

function Trig_Choose_Active_Deactive_Actions()
if (Trig_Choose_Active_Deactive_Func001C()) then
DisableTrigger(gg_trg_Choose_Target)
else
EnableTrigger(gg_trg_Choose_Target)
end
end

function InitTrig_Choose_Active_Deactive()
gg_trg_Choose_Active_Deactive = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_Choose_Active_Deactive, Player(10), "-choose", true)
TriggerAddAction(gg_trg_Choose_Active_Deactive, Trig_Choose_Active_Deactive_Actions)
end

function Trig_Choose_Target_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == Player(10))) then
return false
end
return true
end

function Trig_Choose_Target_Actions()
udg_CameraAttach_Unit = GetTriggerUnit()
end

function InitTrig_Choose_Target()
gg_trg_Choose_Target = CreateTrigger()
DisableTrigger(gg_trg_Choose_Target)
TriggerRegisterPlayerSelectionEventBJ(gg_trg_Choose_Target, Player(10), true)
TriggerAddCondition(gg_trg_Choose_Target, Condition(Trig_Choose_Target_Conditions))
TriggerAddAction(gg_trg_Choose_Target, Trig_Choose_Target_Actions)
end

function Trig_Active_Deactive_Func001C()
if (not (udg_InFPC == true)) then
return false
end
return true
end

function Trig_Active_Deactive_Actions()
if (Trig_Active_Deactive_Func001C()) then
udg_InFPC = false
ResetToGameCameraForPlayer(Player(10), 1.00)
else
udg_InFPC = true
SetCameraTargetControllerNoZForPlayer(Player(10), udg_CameraAttach_Unit, 0, 0, true)
end
end

function InitTrig_Active_Deactive()
gg_trg_Active_Deactive = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_Active_Deactive, Player(10), "-fpc", true)
TriggerAddAction(gg_trg_Active_Deactive, Trig_Active_Deactive_Actions)
end

function Trig_Left_On_Conditions()
if (not (udg_InFPC == true)) then
return false
end
return true
end

function Trig_Left_On_Actions()
udg_Index_FPC[2] = 1.00
end

function InitTrig_Left_On()
gg_trg_Left_On = CreateTrigger()
TriggerRegisterPlayerKeyEventBJ(gg_trg_Left_On, Player(10), bj_KEYEVENTTYPE_DEPRESS, bj_KEYEVENTKEY_LEFT)
TriggerAddCondition(gg_trg_Left_On, Condition(Trig_Left_On_Conditions))
TriggerAddAction(gg_trg_Left_On, Trig_Left_On_Actions)
end

function Trig_Left_Off_Conditions()
if (not (udg_InFPC == true)) then
return false
end
return true
end

function Trig_Left_Off_Func002C()
if (not (udg_Index_FPC[2] == 1.00)) then
return false
end
return true
end

function Trig_Left_Off_Actions()
if (Trig_Left_Off_Func002C()) then
udg_Index_FPC[2] = 0.00
else
end
end

function InitTrig_Left_Off()
gg_trg_Left_Off = CreateTrigger()
TriggerRegisterPlayerKeyEventBJ(gg_trg_Left_Off, Player(10), bj_KEYEVENTTYPE_RELEASE, bj_KEYEVENTKEY_LEFT)
TriggerAddCondition(gg_trg_Left_Off, Condition(Trig_Left_Off_Conditions))
TriggerAddAction(gg_trg_Left_Off, Trig_Left_Off_Actions)
end

function Trig_Right_On_Conditions()
if (not (udg_InFPC == true)) then
return false
end
return true
end

function Trig_Right_On_Actions()
udg_Index_FPC[2] = -1.00
end

function InitTrig_Right_On()
gg_trg_Right_On = CreateTrigger()
TriggerRegisterPlayerKeyEventBJ(gg_trg_Right_On, Player(10), bj_KEYEVENTTYPE_DEPRESS, bj_KEYEVENTKEY_RIGHT)
TriggerAddCondition(gg_trg_Right_On, Condition(Trig_Right_On_Conditions))
TriggerAddAction(gg_trg_Right_On, Trig_Right_On_Actions)
end

function Trig_Right_Off_Conditions()
if (not (udg_InFPC == true)) then
return false
end
return true
end

function Trig_Right_Off_Func002C()
if (not (udg_Index_FPC[2] == -1.00)) then
return false
end
return true
end

function Trig_Right_Off_Actions()
if (Trig_Right_Off_Func002C()) then
udg_Index_FPC[2] = 0.00
else
end
end

function InitTrig_Right_Off()
gg_trg_Right_Off = CreateTrigger()
TriggerRegisterPlayerKeyEventBJ(gg_trg_Right_Off, Player(10), bj_KEYEVENTTYPE_RELEASE, bj_KEYEVENTKEY_RIGHT)
TriggerAddCondition(gg_trg_Right_Off, Condition(Trig_Right_Off_Conditions))
TriggerAddAction(gg_trg_Right_Off, Trig_Right_Off_Actions)
end

function Trig_Forward_On_Conditions()
if (not (udg_InFPC == true)) then
return false
end
return true
end

function Trig_Forward_On_Actions()
udg_Index_FPC[1] = 1.00
IssuePointOrderLocBJ(udg_CameraAttach_Unit, "move", PolarProjectionBJ(GetUnitLoc(udg_CameraAttach_Unit), 300.00, (GetUnitFacing(udg_CameraAttach_Unit) + (udg_Index_FPC[2] * 30.00))))
end

function InitTrig_Forward_On()
gg_trg_Forward_On = CreateTrigger()
TriggerRegisterPlayerKeyEventBJ(gg_trg_Forward_On, Player(10), bj_KEYEVENTTYPE_DEPRESS, bj_KEYEVENTKEY_UP)
TriggerAddCondition(gg_trg_Forward_On, Condition(Trig_Forward_On_Conditions))
TriggerAddAction(gg_trg_Forward_On, Trig_Forward_On_Actions)
end

function Trig_Forward_Off_Conditions()
if (not (udg_InFPC == true)) then
return false
end
return true
end

function Trig_Forward_Off_Actions()
IssueImmediateOrderBJ(udg_CameraAttach_Unit, "stop")
udg_Index_FPC[1] = 0.00
end

function InitTrig_Forward_Off()
gg_trg_Forward_Off = CreateTrigger()
TriggerRegisterPlayerKeyEventBJ(gg_trg_Forward_Off, Player(10), bj_KEYEVENTTYPE_RELEASE, bj_KEYEVENTKEY_UP)
TriggerAddCondition(gg_trg_Forward_Off, Condition(Trig_Forward_Off_Conditions))
TriggerAddAction(gg_trg_Forward_Off, Trig_Forward_Off_Actions)
end

function Trig_Corpse_Harvester_Func001001003001()
return (IsUnitDeadBJ(GetFilterUnit()) == true)
end

function Trig_Corpse_Harvester_Func001001003002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == false)
end

function Trig_Corpse_Harvester_Func001001003002002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO) == false)
end

function Trig_Corpse_Harvester_Func001001003002()
return GetBooleanAnd(Trig_Corpse_Harvester_Func001001003002001(), Trig_Corpse_Harvester_Func001001003002002())
end

function Trig_Corpse_Harvester_Func001001003()
return GetBooleanAnd(Trig_Corpse_Harvester_Func001001003001(), Trig_Corpse_Harvester_Func001001003002())
end

function Trig_Corpse_Harvester_Func001A()
AddSpecialEffectLocBJ(GetUnitLoc(GetEnumUnit()), "Objects\\Spawnmodels\\Human\\HumanLargeDeathExplode\\HumanLargeDeathExplode.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
SetUnitLifeBJ(gg_unit_O002_0204, (GetUnitStateSwap(UNIT_STATE_LIFE, gg_unit_O002_0204) + (GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetEnumUnit()) * 0.20)))
RemoveUnit(GetEnumUnit())
end

function Trig_Corpse_Harvester_Actions()
ForGroupBJ(GetUnitsInRangeOfLocMatching(512, GetUnitLoc(gg_unit_O002_0204), Condition(Trig_Corpse_Harvester_Func001001003)), Trig_Corpse_Harvester_Func001A)
end

function InitTrig_Corpse_Harvester()
gg_trg_Corpse_Harvester = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Corpse_Harvester, 2)
TriggerAddAction(gg_trg_Corpse_Harvester, Trig_Corpse_Harvester_Actions)
end

function Trig_MH_Init_Conditions()
if (not (GetSpellAbilityId() == FourCC("A012"))) then
return false
end
return true
end

function Trig_MH_Init_Actions()
udg_MH_Caster = GetTriggerUnit()
udg_MH_StartPos = GetUnitLoc(udg_MH_Caster)
udg_MH_AbiLevel = GetUnitAbilityLevelSwapped(FourCC("A012"), udg_MH_Caster)
udg_MH_Facing = AngleBetweenPoints(udg_MH_StartPos, GetSpellTargetLoc())
udg_MH_Int = 0
udg_MH_Forward = true
CreateNUnitsAtLoc(1, FourCC("h009"), GetOwningPlayer(udg_MH_Caster), GetUnitLoc(udg_MH_Caster), (udg_MH_Facing - 13.00))
udg_MH_Head = GetLastCreatedUnit()
PauseUnitBJ(true, udg_MH_Head)
EnableTrigger(gg_trg_MH_Loop)
end

function InitTrig_MH_Init()
gg_trg_MH_Init = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_MH_Init, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_MH_Init, Condition(Trig_MH_Init_Conditions))
TriggerAddAction(gg_trg_MH_Init, Trig_MH_Init_Actions)
end

function Trig_MH_Loop_Func001Func001001003001001001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == false)
end

function Trig_MH_Loop_Func001Func001001003001001002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_FLYING) == false)
end

function Trig_MH_Loop_Func001Func001001003001001()
return GetBooleanAnd(Trig_MH_Loop_Func001Func001001003001001001(), Trig_MH_Loop_Func001Func001001003001001002())
end

function Trig_MH_Loop_Func001Func001001003001002()
return (GetFilterUnit() ~= udg_MH_Caster)
end

function Trig_MH_Loop_Func001Func001001003001()
return GetBooleanAnd(Trig_MH_Loop_Func001Func001001003001001(), Trig_MH_Loop_Func001Func001001003001002())
end

function Trig_MH_Loop_Func001Func001001003002()
return (IsUnitInGroup(GetFilterUnit(), udg_MH_SnaggedUnit) == false)
end

function Trig_MH_Loop_Func001Func001001003()
return GetBooleanAnd(Trig_MH_Loop_Func001Func001001003001(), Trig_MH_Loop_Func001Func001001003002())
end

function Trig_MH_Loop_Func001Func001A()
AddSpecialEffectTargetUnitBJ("overhead", GetEnumUnit(), "Abilities\\Spells\\Other\\Stampede\\MissileDeath.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
GroupAddUnitSimple(GetEnumUnit(), udg_MH_SnaggedUnit)
UnitDamageTargetBJ(udg_MH_Caster, GetEnumUnit(), (200.00 * I2R(udg_MH_AbiLevel)), ATTACK_TYPE_NORMAL, DAMAGE_TYPE_UNIVERSAL)
SetUnitPathing(GetEnumUnit(), false)
PauseUnitBJ(true, GetEnumUnit())
end

function Trig_MH_Loop_Func001Func005A()
SetUnitPositionLoc(GetEnumUnit(), PolarProjectionBJ(GetUnitLoc(udg_MH_Head), 160.00, udg_MH_Facing))
AddSpecialEffectTargetUnitBJ("overhead", GetEnumUnit(), "Abilities\\Spells\\Other\\Stampede\\MissileDeath.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
end

function Trig_MH_Loop_Func001Func006Func001A()
SetUnitPathing(GetEnumUnit(), true)
PauseUnitBJ(false, GetEnumUnit())
end

function Trig_MH_Loop_Func001Func006C()
if (not (udg_MH_Int == 1)) then
return false
end
return true
end

function Trig_MH_Loop_Func001Func012001()
return (udg_MH_Int == udg_MH_Length)
end

function Trig_MH_Loop_Func001C()
if (not (udg_MH_Forward == true)) then
return false
end
return true
end

function Trig_MH_Loop_Actions()
if (Trig_MH_Loop_Func001C()) then
udg_MH_Int = (udg_MH_Int + 1)
CreateNUnitsAtLoc(1, FourCC("h008"), GetOwningPlayer(udg_MH_Caster), PolarProjectionBJ(udg_MH_StartPos, (I2R(udg_MH_Int) * 50.00), udg_MH_Facing), udg_MH_Facing)
PauseUnitBJ(true, GetLastCreatedUnit())
udg_MH_Chain[udg_MH_Int] = GetLastCreatedUnit()
SetUnitPositionLoc(udg_MH_Head, GetUnitLoc(GetLastCreatedUnit()))
if (Trig_MH_Loop_Func001Func012001()) then
udg_MH_Forward = false
else
DoNothing()
end
else
ForGroupBJ(GetUnitsInRangeOfLocMatching(300.00, GetUnitLoc(udg_MH_Chain[udg_MH_Int]), Condition(Trig_MH_Loop_Func001Func001001003)), Trig_MH_Loop_Func001Func001A)
RemoveUnit(udg_MH_Chain[udg_MH_Int])
udg_MH_Int = (udg_MH_Int - 1)
SetUnitPositionLoc(udg_MH_Head, GetUnitLoc(udg_MH_Chain[udg_MH_Int]))
ForGroupBJ(udg_MH_SnaggedUnit, Trig_MH_Loop_Func001Func005A)
if (Trig_MH_Loop_Func001Func006C()) then
ForGroupBJ(udg_MH_SnaggedUnit, Trig_MH_Loop_Func001Func006Func001A)
RemoveUnit(udg_MH_Chain[1])
RemoveUnit(udg_MH_Chain[2])
RemoveUnit(udg_MH_Head)
GroupClear(udg_MH_SnaggedUnit)
DisableTrigger(GetTriggeringTrigger())
else
end
end
end

function InitTrig_MH_Loop()
gg_trg_MH_Loop = CreateTrigger()
DisableTrigger(gg_trg_MH_Loop)
TriggerRegisterTimerEventPeriodic(gg_trg_MH_Loop, 0.04)
TriggerAddAction(gg_trg_MH_Loop, Trig_MH_Loop_Actions)
end

function Trig_Heal_sefl_AI_Actions()
UnitResetCooldown(gg_unit_H001_0142)
UnitAddAbilityBJ(FourCC("A002"), gg_unit_H001_0142)
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 100
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
TriggerSleepAction(2.00)
IssueTargetOrderBJ(gg_unit_H001_0142, "deathcoil", gg_unit_H001_0142)
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
end

function InitTrig_Heal_sefl_AI()
gg_trg_Heal_sefl_AI = CreateTrigger()
DisableTrigger(gg_trg_Heal_sefl_AI)
TriggerRegisterUnitLifeEvent(gg_trg_Heal_sefl_AI, gg_unit_H001_0142, LESS_THAN, (GetUnitStateSwap(UNIT_STATE_LIFE, gg_unit_H001_0142) * 0.30))
TriggerAddAction(gg_trg_Heal_sefl_AI, Trig_Heal_sefl_AI_Actions)
end

function Trig_respawn_Func008Func001C()
if (not (ModuloInteger(GetForLoopIndexA(), 2) == 0)) then
return false
end
return true
end

function Trig_respawn_Actions()
ShowUnitHide(gg_unit_H001_0142)
CreateNUnitsAtLoc(1, FourCC("h003"), Player(10), GetUnitLoc(gg_unit_H001_0142), GetUnitFacing(gg_unit_H001_0142))
udg_lk = GetLastCreatedUnit()
PauseUnitBJ(true, udg_lk)
SetUnitAnimation(udg_lk, "death")
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 30
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
AddSpecialEffectLocBJ(PolarProjectionBJ(PolarProjectionBJ(GetUnitLoc(udg_lk), 100.00, (GetUnitFacing(udg_lk) - 30.00)), GetRandomReal(0.00, 150.00), GetRandomDirectionDeg()), "Objects\\Spawnmodels\\Undead\\UndeadDissipate\\UndeadDissipate.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
AddSpecialEffectLocBJ(PolarProjectionBJ(PolarProjectionBJ(GetUnitLoc(udg_lk), 100.00, (GetUnitFacing(udg_lk) - 30.00)), GetRandomReal(0.00, 150.00), GetRandomDirectionDeg()), "Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
TriggerSleepAction(0.10)
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 50
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
if (Trig_respawn_Func008Func001C()) then
AddSpecialEffectLocBJ(PolarProjectionBJ(PolarProjectionBJ(GetUnitLoc(udg_lk), 170.00, (GetUnitFacing(udg_lk) - 70.00)), GetRandomReal(0.00, 150.00), GetRandomDirectionDeg()), "Objects\\Spawnmodels\\Undead\\UndeadDissipate\\UndeadDissipate.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
AddSpecialEffectLocBJ(PolarProjectionBJ(PolarProjectionBJ(GetUnitLoc(udg_lk), 170.00, (GetUnitFacing(udg_lk) - 70.00)), GetRandomReal(0.00, 150.00), GetRandomDirectionDeg()), "Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
else
end
udg_tran = ((0.00 + I2R(GetForLoopIndexA())) * 1.70)
SetUnitVertexColorBJ(udg_lk, 100.00, 100.00, 100.00, udg_tran)
TriggerSleepAction(0.01)
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
TriggerSleepAction(3.00)
RemoveUnit(udg_lk)
ShowUnitShow(gg_unit_H001_0142)
ReviveHeroLoc(gg_unit_H001_0142, GetRectCenter(gg_rct_Lichg_King_Respawn), true)
SetUnitManaPercentBJ(gg_unit_H001_0142, 100)
end

function InitTrig_respawn()
gg_trg_respawn = CreateTrigger()
TriggerRegisterUnitEvent(gg_trg_respawn, gg_unit_H001_0142, EVENT_UNIT_DEATH)
TriggerAddAction(gg_trg_respawn, Trig_respawn_Actions)
end

function Trig_animation_Conditions()
if (not (udg_InCinematic == false)) then
return false
end
return true
end

function Trig_animation_Actions()
QueueUnitAnimationBJ(gg_unit_H001_0142, "stand 2")
end

function InitTrig_animation()
gg_trg_animation = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_animation, 4.00)
TriggerAddCondition(gg_trg_animation, Condition(Trig_animation_Conditions))
TriggerAddAction(gg_trg_animation, Trig_animation_Actions)
end

function Trig_Army_of_the_Death_Conditions()
if (not (GetSpellAbilityId() == FourCC("A003"))) then
return false
end
return true
end

function Trig_Army_of_the_Death_Func001001003001001()
return (IsUnitDeadBJ(GetFilterUnit()) == true)
end

function Trig_Army_of_the_Death_Func001001003001002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO) == false)
end

function Trig_Army_of_the_Death_Func001001003001()
return GetBooleanAnd(Trig_Army_of_the_Death_Func001001003001001(), Trig_Army_of_the_Death_Func001001003001002())
end

function Trig_Army_of_the_Death_Func001001003002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_MECHANICAL) == false)
end

function Trig_Army_of_the_Death_Func001001003()
return GetBooleanAnd(Trig_Army_of_the_Death_Func001001003001(), Trig_Army_of_the_Death_Func001001003002())
end

function Trig_Army_of_the_Death_Func001Func001Func001Func002C()
if (not (GetRandomInt(1, 2) == 1)) then
return false
end
return true
end

function Trig_Army_of_the_Death_Func001Func001Func001C()
if (not (GetRandomInt(1, 2) == 1)) then
return false
end
return true
end

function Trig_Army_of_the_Death_Func001Func001C()
if (not (GetRandomInt(1, 2) == 1)) then
return false
end
return true
end

function Trig_Army_of_the_Death_Func001A()
if (Trig_Army_of_the_Death_Func001Func001C()) then
CreateNUnitsAtLoc(1, FourCC("ugho"), Player(3), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
else
if (Trig_Army_of_the_Death_Func001Func001Func001C()) then
CreateNUnitsAtLoc(1, FourCC("ucry"), Player(3), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
else
if (Trig_Army_of_the_Death_Func001Func001Func001Func002C()) then
CreateNUnitsAtLoc(1, FourCC("uabo"), Player(3), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
else
CreateNUnitsAtLoc(1, FourCC("nskg"), Player(3), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
end
end
end
SetUnitAnimation(GetLastCreatedUnit(), "birth")
AddSpecialEffectLocBJ(GetUnitLoc(GetEnumUnit()), "Abilities\\Spells\\Undead\\RaiseSkeletonWarrior\\RaiseSkeleton.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
RemoveUnit(GetEnumUnit())
end

function Trig_Army_of_the_Death_Actions()
ForGroupBJ(GetUnitsInRangeOfLocMatching(500.00, GetUnitLoc(GetTriggerUnit()), Condition(Trig_Army_of_the_Death_Func001001003)), Trig_Army_of_the_Death_Func001A)
end

function InitTrig_Army_of_the_Death()
gg_trg_Army_of_the_Death = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Army_of_the_Death, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Army_of_the_Death, Condition(Trig_Army_of_the_Death_Conditions))
TriggerAddAction(gg_trg_Army_of_the_Death, Trig_Army_of_the_Death_Actions)
end

function Trig_Wrath_of_the_Lich_King_Conditions()
if (not (GetSpellAbilityId() == FourCC("A005"))) then
return false
end
return true
end

function Trig_Wrath_of_the_Lich_King_Actions()
udg_Cast_Point = GetUnitLoc(GetTriggerUnit())
TriggerSleepAction(2.00)
CreateNUnitsAtLoc(1, FourCC("h002"), Player(3), udg_Cast_Point, bj_UNIT_FACING)
UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
UnitAddAbilityBJ(FourCC("A00J"), GetLastCreatedUnit())
SetUnitAbilityLevelSwapped(FourCC("A00J"), GetLastCreatedUnit(), GetUnitAbilityLevelSwapped(FourCC("A005"), GetTriggerUnit()))
IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
udg_WotL_Int1 = 1
while (true) do
if (udg_WotL_Int1 > 10) then break end
TriggerSleepAction(0.03)
udg_WotL_Int2 = 1
while (true) do
if (udg_WotL_Int2 > 10) then break end
AddSpecialEffectLocBJ(PolarProjectionBJ(udg_Cast_Point, (100.00 * I2R(udg_WotL_Int1)), ((I2R(udg_WotL_Int1) * 10.00) + (I2R(udg_WotL_Int2) * 36.00))), "Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
AddSpecialEffectLocBJ(PolarProjectionBJ(udg_Cast_Point, (100.00 * I2R(udg_WotL_Int1)), ((I2R(udg_WotL_Int1) * 10.00) + (I2R(udg_WotL_Int2) * 36.00))), "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
udg_WotL_Int2 = udg_WotL_Int2 + 1
end
udg_WotL_Int1 = udg_WotL_Int1 + 1
end
end

function InitTrig_Wrath_of_the_Lich_King()
gg_trg_Wrath_of_the_Lich_King = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Wrath_of_the_Lich_King, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Wrath_of_the_Lich_King, Condition(Trig_Wrath_of_the_Lich_King_Conditions))
TriggerAddAction(gg_trg_Wrath_of_the_Lich_King, Trig_Wrath_of_the_Lich_King_Actions)
end

function Trig_Dragon_Mount_Conditions()
if (not (GetItemTypeId(GetManipulatedItem()) == FourCC("I000"))) then
return false
end
return true
end

function Trig_Dragon_Mount_Func002C()
if (not (udg_Mount == true)) then
return false
end
return true
end

function Trig_Dragon_Mount_Actions()
if (Trig_Dragon_Mount_Func002C()) then
udg_Cster_Mount = nil
udg_Mount = false
DisableTrigger(gg_trg_Dragon_Mount_Loops)
ShowUnitHide(udg_FrostWyrm)
KillUnit(udg_FrostWyrm)
udg_FrostWyrm = nil
else
udg_Cster_Mount = GetTriggerUnit()
udg_Mount = true
CreateNUnitsAtLoc(1, FourCC("ubdd"), GetOwningPlayer(GetTriggerUnit()), GetUnitLoc(GetTriggerUnit()), GetUnitFacing(GetTriggerUnit()))
SetUnitPathing(GetLastCreatedUnit(), false)
udg_FrostWyrm = GetLastCreatedUnit()
EnableTrigger(gg_trg_Dragon_Mount_Loops)
end
end

function InitTrig_Dragon_Mount()
gg_trg_Dragon_Mount = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Dragon_Mount, EVENT_PLAYER_UNIT_USE_ITEM)
TriggerAddCondition(gg_trg_Dragon_Mount, Condition(Trig_Dragon_Mount_Conditions))
TriggerAddAction(gg_trg_Dragon_Mount, Trig_Dragon_Mount_Actions)
end

function Trig_Dragon_Mount_Die_Conditions()
if (not (GetTriggerUnit() == udg_Cster_Mount)) then
return false
end
return true
end

function Trig_Dragon_Mount_Die_Actions()
udg_Cster_Mount = nil
udg_Mount = false
DisableTrigger(gg_trg_Dragon_Mount_Loops)
ShowUnitHide(udg_FrostWyrm)
KillUnit(udg_FrostWyrm)
udg_FrostWyrm = nil
end

function InitTrig_Dragon_Mount_Die()
gg_trg_Dragon_Mount_Die = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Dragon_Mount_Die, EVENT_PLAYER_UNIT_DEATH)
TriggerAddCondition(gg_trg_Dragon_Mount_Die, Condition(Trig_Dragon_Mount_Die_Conditions))
TriggerAddAction(gg_trg_Dragon_Mount_Die, Trig_Dragon_Mount_Die_Actions)
end

function Trig_Dragon_Mount_Loops_Actions()
SetUnitPositionLoc(udg_FrostWyrm, GetUnitLoc(udg_Cster_Mount))
BlzSetUnitFacingEx(udg_FrostWyrm, GetUnitFacing(udg_Cster_Mount))
end

function InitTrig_Dragon_Mount_Loops()
gg_trg_Dragon_Mount_Loops = CreateTrigger()
DisableTrigger(gg_trg_Dragon_Mount_Loops)
TriggerRegisterTimerEventPeriodic(gg_trg_Dragon_Mount_Loops, 0.01)
TriggerAddAction(gg_trg_Dragon_Mount_Loops, Trig_Dragon_Mount_Loops_Actions)
end

function Trig_Dragon_Mount_Animation_Func006Func002C()
if (not (GetSpellAbilityUnit() == udg_Cster_Mount)) then
return false
end
if (not (GetSpellAbilityId() ~= FourCC("A002"))) then
return false
end
if (not (GetSpellAbilityId() ~= FourCC("A005"))) then
return false
end
return true
end

function Trig_Dragon_Mount_Animation_Func006C()
if (GetAttacker() == udg_Cster_Mount) then
return true
end
if (Trig_Dragon_Mount_Animation_Func006Func002C()) then
return true
end
return false
end

function Trig_Dragon_Mount_Animation_Conditions()
if (not Trig_Dragon_Mount_Animation_Func006C()) then
return false
end
return true
end

function Trig_Dragon_Mount_Animation_Func001C()
if (not (GetAttacker() == udg_Cster_Mount)) then
return false
end
return true
end

function Trig_Dragon_Mount_Animation_Actions()
if (Trig_Dragon_Mount_Animation_Func001C()) then
SetUnitTimeScalePercent(udg_FrostWyrm, 150.00)
else
end
SetUnitAnimation(udg_FrostWyrm, "attack alternate")
TriggerSleepAction(0.90)
ResetUnitAnimation(udg_FrostWyrm)
SetUnitTimeScalePercent(udg_FrostWyrm, 100.00)
end

function InitTrig_Dragon_Mount_Animation()
gg_trg_Dragon_Mount_Animation = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Dragon_Mount_Animation, EVENT_PLAYER_UNIT_SPELL_CAST)
TriggerRegisterAnyUnitEventBJ(gg_trg_Dragon_Mount_Animation, EVENT_PLAYER_UNIT_ATTACKED)
TriggerAddCondition(gg_trg_Dragon_Mount_Animation, Condition(Trig_Dragon_Mount_Animation_Conditions))
TriggerAddAction(gg_trg_Dragon_Mount_Animation, Trig_Dragon_Mount_Animation_Actions)
end

function Trig_Holy_Rays_Conditions()
if (not (GetSpellAbilityId() == FourCC("A00F"))) then
return false
end
return true
end

function Trig_Holy_Rays_Actions()
AddSpecialEffectTargetUnitBJ("origin", GetTriggerUnit(), "Abilities\\Spells\\Human\\Resurrect\\ResurrectCaster.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
EnableTrigger(gg_trg_Holy_Rays_Loops)
TriggerSleepAction(I2R(GetUnitAbilityLevelSwapped(FourCC("A00F"), GetTriggerUnit())))
DisableTrigger(gg_trg_Holy_Rays_Loops)
end

function InitTrig_Holy_Rays()
gg_trg_Holy_Rays = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Holy_Rays, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Holy_Rays, Condition(Trig_Holy_Rays_Conditions))
TriggerAddAction(gg_trg_Holy_Rays, Trig_Holy_Rays_Actions)
end

function Trig_Holy_Rays_Loops_Func001001003001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == false)
end

function Trig_Holy_Rays_Loops_Func001001003002001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_MECHANICAL) == false)
end

function Trig_Holy_Rays_Loops_Func001001003002002()
return (IsUnitAliveBJ(GetFilterUnit()) == true)
end

function Trig_Holy_Rays_Loops_Func001001003002()
return GetBooleanAnd(Trig_Holy_Rays_Loops_Func001001003002001(), Trig_Holy_Rays_Loops_Func001001003002002())
end

function Trig_Holy_Rays_Loops_Func001001003()
return GetBooleanAnd(Trig_Holy_Rays_Loops_Func001001003001(), Trig_Holy_Rays_Loops_Func001001003002())
end

function Trig_Holy_Rays_Loops_Func001A()
CreateNUnitsAtLoc(1, FourCC("h002"), GetOwningPlayer(gg_unit_H006_0055), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
UnitAddAbilityBJ(FourCC("A00C"), GetLastCreatedUnit())
SetUnitAbilityLevelSwapped(FourCC("A00C"), GetLastCreatedUnit(), GetUnitAbilityLevelSwapped(FourCC("A00C"), gg_unit_H006_0055))
IssueTargetOrderBJ(GetLastCreatedUnit(), "holybolt", GetEnumUnit())
end

function Trig_Holy_Rays_Loops_Actions()
ForGroupBJ(GetUnitsInRangeOfLocMatching(500.00, GetUnitLoc(gg_unit_H006_0055), Condition(Trig_Holy_Rays_Loops_Func001001003)), Trig_Holy_Rays_Loops_Func001A)
end

function InitTrig_Holy_Rays_Loops()
gg_trg_Holy_Rays_Loops = CreateTrigger()
DisableTrigger(gg_trg_Holy_Rays_Loops)
TriggerRegisterTimerEventPeriodic(gg_trg_Holy_Rays_Loops, 0.75)
TriggerAddAction(gg_trg_Holy_Rays_Loops, Trig_Holy_Rays_Loops_Actions)
end

function Trig_Blood_Strike_Conditions()
if (not (GetSpellAbilityId() == FourCC("A00O"))) then
return false
end
return true
end

function Trig_Blood_Strike_Actions()
UnitAddAbilityBJ(FourCC("A00N"), GetTriggerUnit())
SetUnitAbilityLevelSwapped(FourCC("A00N"), GetTriggerUnit(), GetUnitAbilityLevelSwapped(FourCC("A00O"), GetTriggerUnit()))
UnitAddAbilityBJ(FourCC("A00M"), GetTriggerUnit())
SetUnitAbilityLevelSwapped(FourCC("A00M"), GetTriggerUnit(), GetUnitAbilityLevelSwapped(FourCC("A00O"), GetTriggerUnit()))
TriggerSleepAction(1.00)
UnitRemoveAbilityBJ(FourCC("A00N"), GetTriggerUnit())
UnitRemoveAbilityBJ(FourCC("A00M"), GetTriggerUnit())
end

function InitTrig_Blood_Strike()
gg_trg_Blood_Strike = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Blood_Strike, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Blood_Strike, Condition(Trig_Blood_Strike_Conditions))
TriggerAddAction(gg_trg_Blood_Strike, Trig_Blood_Strike_Actions)
end

function Trig_Charge_Start_End_Conditions()
if (not (GetSpellAbilityId() == FourCC("A00Q"))) then
return false
end
return true
end

function Trig_Charge_Start_End_Actions()
GroupClear(udg_Charge_UG)
udg_Charge_Unit = GetSpellAbilityUnit()
udg_ChargeTarget = GetSpellTargetLoc()
PauseUnitBJ(true, udg_Charge_Unit)
SetUnitPathing(udg_Charge_Unit, false)
AddSpecialEffectTargetUnitBJ("origin", udg_Charge_Unit, "Abilities\\Weapons\\PhoenixMissile\\Phoenix_Missile.mdl")
udg_Charge_Eff = GetLastCreatedEffectBJ()
EnableTrigger(gg_trg_Charge_Loops)
end

function InitTrig_Charge_Start_End()
gg_trg_Charge_Start_End = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Charge_Start_End, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Charge_Start_End, Condition(Trig_Charge_Start_End_Conditions))
TriggerAddAction(gg_trg_Charge_Start_End, Trig_Charge_Start_End_Actions)
end

function Trig_Charge_Loops_Func002001003001001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == false)
end

function Trig_Charge_Loops_Func002001003001002()
return (IsUnitInGroup(GetFilterUnit(), udg_Charge_UG) == false)
end

function Trig_Charge_Loops_Func002001003001()
return GetBooleanAnd(Trig_Charge_Loops_Func002001003001001(), Trig_Charge_Loops_Func002001003001002())
end

function Trig_Charge_Loops_Func002001003002001()
return (IsUnitAliveBJ(GetFilterUnit()) == true)
end

function Trig_Charge_Loops_Func002001003002002()
return (IsUnitEnemy(GetFilterUnit(), GetOwningPlayer(udg_Charge_Unit)) == true)
end

function Trig_Charge_Loops_Func002001003002()
return GetBooleanAnd(Trig_Charge_Loops_Func002001003002001(), Trig_Charge_Loops_Func002001003002002())
end

function Trig_Charge_Loops_Func002001003()
return GetBooleanAnd(Trig_Charge_Loops_Func002001003001(), Trig_Charge_Loops_Func002001003002())
end

function Trig_Charge_Loops_Func002A()
GroupAddUnitSimple(GetEnumUnit(), udg_Charge_UG)
CreateNUnitsAtLoc(1, FourCC("h002"), GetOwningPlayer(udg_Charge_Unit), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
UnitAddAbilityBJ(FourCC("A00R"), GetLastCreatedUnit())
SetUnitAbilityLevelSwapped(FourCC("A00R"), GetLastCreatedUnit(), GetUnitAbilityLevelSwapped(FourCC("A00Q"), udg_Charge_Unit))
IssueTargetOrderBJ(GetLastCreatedUnit(), "thunderbolt", GetEnumUnit())
end

function Trig_Charge_Loops_Func004Func004001003001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == false)
end

function Trig_Charge_Loops_Func004Func004001003002001()
return (IsUnitAliveBJ(GetFilterUnit()) == true)
end

function Trig_Charge_Loops_Func004Func004001003002002()
return (IsUnitEnemy(GetFilterUnit(), GetOwningPlayer(udg_Charge_Unit)) == true)
end

function Trig_Charge_Loops_Func004Func004001003002()
return GetBooleanAnd(Trig_Charge_Loops_Func004Func004001003002001(), Trig_Charge_Loops_Func004Func004001003002002())
end

function Trig_Charge_Loops_Func004Func004001003()
return GetBooleanAnd(Trig_Charge_Loops_Func004Func004001003001(), Trig_Charge_Loops_Func004Func004001003002())
end

function Trig_Charge_Loops_Func004Func004A()
CreateNUnitsAtLoc(1, FourCC("h002"), GetOwningPlayer(udg_Charge_Unit), GetUnitLoc(GetEnumUnit()), bj_UNIT_FACING)
UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
UnitAddAbilityBJ(FourCC("A00R"), GetLastCreatedUnit())
SetUnitAbilityLevelSwapped(FourCC("A00R"), GetLastCreatedUnit(), GetUnitAbilityLevelSwapped(FourCC("A00Q"), udg_Charge_Unit))
IssueTargetOrderBJ(GetLastCreatedUnit(), "thunderbolt", GetEnumUnit())
end

function Trig_Charge_Loops_Func004C()
if (not (DistanceBetweenPoints(GetUnitLoc(udg_Charge_Unit), udg_ChargeTarget) <= 25.00)) then
return false
end
return true
end

function Trig_Charge_Loops_Actions()
SetUnitPositionLocFacingLocBJ(udg_Charge_Unit, PolarProjectionBJ(GetUnitLoc(udg_Charge_Unit), 20.00, AngleBetweenPoints(GetUnitLoc(udg_Charge_Unit), udg_ChargeTarget)), udg_ChargeTarget)
ForGroupBJ(GetUnitsInRangeOfLocMatching(250.00, GetUnitLoc(udg_Charge_Unit), Condition(Trig_Charge_Loops_Func002001003)), Trig_Charge_Loops_Func002A)
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 5
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
AddSpecialEffectLocBJ(PolarProjectionBJ(GetUnitLoc(udg_Charge_Unit), 15.00, (72.00 * I2R(GetForLoopIndexA()))), "Abilities\\Weapons\\AncientProtectorMissile\\AncientProtectorMissile.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
if (Trig_Charge_Loops_Func004C()) then
PauseUnitBJ(false, udg_Charge_Unit)
DisableTrigger(GetTriggeringTrigger())
ForGroupBJ(GetUnitsInRangeOfLocMatching(400.00, udg_ChargeTarget, Condition(Trig_Charge_Loops_Func004Func004001003)), Trig_Charge_Loops_Func004Func004A)
DestroyEffectBJ(udg_Charge_Eff)
SetUnitPathing(udg_Charge_Unit, true)
else
end
end

function InitTrig_Charge_Loops()
gg_trg_Charge_Loops = CreateTrigger()
DisableTrigger(gg_trg_Charge_Loops)
TriggerRegisterTimerEventPeriodic(gg_trg_Charge_Loops, 0.01)
TriggerAddAction(gg_trg_Charge_Loops, Trig_Charge_Loops_Actions)
end

function Trig_Call_of_Loyalty_Conditions()
if (not (GetSpellAbilityId() == FourCC("A00S"))) then
return false
end
return true
end

function Trig_Call_of_Loyalty_Func001001003001()
return (GetOwningPlayer(GetFilterUnit()) == udg_Orc[1])
end

function Trig_Call_of_Loyalty_Func001001003002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) ~= true)
end

function Trig_Call_of_Loyalty_Func001001003()
return GetBooleanAnd(Trig_Call_of_Loyalty_Func001001003001(), Trig_Call_of_Loyalty_Func001001003002())
end

function Trig_Call_of_Loyalty_Func001002()
SetUnitOwner(GetEnumUnit(), GetOwningPlayer(GetTriggerUnit()), false)
end

function Trig_Call_of_Loyalty_Func002001003001()
return (GetOwningPlayer(GetFilterUnit()) == udg_Orc[2])
end

function Trig_Call_of_Loyalty_Func002001003002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) ~= true)
end

function Trig_Call_of_Loyalty_Func002001003()
return GetBooleanAnd(Trig_Call_of_Loyalty_Func002001003001(), Trig_Call_of_Loyalty_Func002001003002())
end

function Trig_Call_of_Loyalty_Func002002()
SetUnitOwner(GetEnumUnit(), GetOwningPlayer(GetTriggerUnit()), false)
end

function Trig_Call_of_Loyalty_Actions()
ForGroupBJ(GetUnitsInRangeOfLocMatching(1000.00, GetUnitLoc(GetTriggerUnit()), Condition(Trig_Call_of_Loyalty_Func001001003)), Trig_Call_of_Loyalty_Func001002)
ForGroupBJ(GetUnitsInRangeOfLocMatching(1000.00, GetUnitLoc(GetTriggerUnit()), Condition(Trig_Call_of_Loyalty_Func002001003)), Trig_Call_of_Loyalty_Func002002)
end

function InitTrig_Call_of_Loyalty()
gg_trg_Call_of_Loyalty = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Call_of_Loyalty, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Call_of_Loyalty, Condition(Trig_Call_of_Loyalty_Conditions))
TriggerAddAction(gg_trg_Call_of_Loyalty, Trig_Call_of_Loyalty_Actions)
end

function Trig_Mana_of_the_Destruction_Conditions()
if (not (GetSpellAbilityId() == FourCC("A00V"))) then
return false
end
return true
end

function Trig_Mana_of_the_Destruction_Func001001003001()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_STRUCTURE) == false)
end

function Trig_Mana_of_the_Destruction_Func001001003002()
return (IsUnitEnemy(GetFilterUnit(), GetOwningPlayer(GetTriggerUnit())) == true)
end

function Trig_Mana_of_the_Destruction_Func001001003()
return GetBooleanAnd(Trig_Mana_of_the_Destruction_Func001001003001(), Trig_Mana_of_the_Destruction_Func001001003002())
end

function Trig_Mana_of_the_Destruction_Func001A()
UnitDamageTargetBJ(GetTriggerUnit(), GetEnumUnit(), (GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) - GetUnitStateSwap(UNIT_STATE_MANA, GetTriggerUnit())), ATTACK_TYPE_NORMAL, DAMAGE_TYPE_NORMAL)
CreateNUnitsAtLoc(1, FourCC("h002"), GetOwningPlayer(GetTriggerUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
UnitApplyTimedLifeBJ(3.00, FourCC("BTLF"), GetLastCreatedUnit())
UnitAddAbilityBJ(FourCC("A00W"), GetLastCreatedUnit())
IssueTargetOrderBJ(GetLastCreatedUnit(), "fingerofdeath", GetEnumUnit())
end

function Trig_Mana_of_the_Destruction_Actions()
ForGroupBJ(GetUnitsInRangeOfLocMatching(1000.00, GetUnitLoc(GetTriggerUnit()), Condition(Trig_Mana_of_the_Destruction_Func001001003)), Trig_Mana_of_the_Destruction_Func001A)
end

function InitTrig_Mana_of_the_Destruction()
gg_trg_Mana_of_the_Destruction = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Mana_of_the_Destruction, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Mana_of_the_Destruction, Condition(Trig_Mana_of_the_Destruction_Conditions))
TriggerAddAction(gg_trg_Mana_of_the_Destruction, Trig_Mana_of_the_Destruction_Actions)
end

function Trig_Lost_and_Gain_Conditions()
if (not (GetSpellAbilityId() == FourCC("A00Y"))) then
return false
end
return true
end

function Trig_Lost_and_Gain_Actions()
udg_LaG_Target = GetSpellTargetUnit()
udg_LaG_Mana = (GetUnitStateSwap(UNIT_STATE_MANA, udg_LaG_Target) / 2.00)
SetUnitManaBJ(udg_LaG_Target, udg_LaG_Mana)
TriggerSleepAction(5.00)
SetUnitManaBJ(udg_LaG_Target, (GetUnitStateSwap(UNIT_STATE_MANA, udg_LaG_Target) + (udg_LaG_Mana * 1.50)))
end

function InitTrig_Lost_and_Gain()
gg_trg_Lost_and_Gain = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Lost_and_Gain, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Lost_and_Gain, Condition(Trig_Lost_and_Gain_Conditions))
TriggerAddAction(gg_trg_Lost_and_Gain, Trig_Lost_and_Gain_Actions)
end

function Trig_Flame_Conditions()
if (not (GetUnitTypeId(GetTriggerUnit()) == FourCC("u00F"))) then
return false
end
return true
end

function Trig_Flame_Actions()
SetUnitOwner(gg_unit_h00D_0064, GetOwningPlayer(GetTriggerUnit()), true)
IssuePointOrderLocBJ(gg_unit_h00D_0064, "flamestrike", GetUnitLoc(GetTriggerUnit()))
end

function InitTrig_Flame()
gg_trg_Flame = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Flame, gg_rct_Cloud)
TriggerAddCondition(gg_trg_Flame, Condition(Trig_Flame_Conditions))
TriggerAddAction(gg_trg_Flame, Trig_Flame_Actions)
end

function Trig_Burrowstrike_Conditions()
if (not (GetSpellAbilityId() == FourCC("A01E"))) then
return false
end
return true
end

function Trig_Burrowstrike_Actions()
udg_BS_Caster = GetTriggerUnit()
udg_BS_Point = GetSpellTargetLoc()
SetUnitInvulnerable(udg_BS_Caster, true)
PauseUnitBJ(true, udg_BS_Caster)
SetUnitVertexColorBJ(udg_BS_Caster, 100, 100, 100, 100.00)
SetUnitPathing(udg_BS_Caster, false)
EnableTrigger(gg_trg_Burrowstrike_Loop)
end

function InitTrig_Burrowstrike()
gg_trg_Burrowstrike = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Burrowstrike, EVENT_PLAYER_UNIT_SPELL_EFFECT)
TriggerAddCondition(gg_trg_Burrowstrike, Condition(Trig_Burrowstrike_Conditions))
TriggerAddAction(gg_trg_Burrowstrike, Trig_Burrowstrike_Actions)
end

function Trig_Burrowstrike_Loop_Func002C()
if (not (GetRandomReal(0, 1) < 0.20)) then
return false
end
return true
end

function Trig_Burrowstrike_Loop_Func003C()
if (not (GetRandomReal(0, 1) < 0.33)) then
return false
end
return true
end

function Trig_Burrowstrike_Loop_Func004C()
if (not (GetRandomReal(0, 1) < 0.33)) then
return false
end
return true
end

function Trig_Burrowstrike_Loop_Func005C()
if (not (DistanceBetweenPoints(GetUnitLoc(udg_BS_Caster), udg_BS_Point) < 51.00)) then
return false
end
return true
end

function Trig_Burrowstrike_Loop_Actions()
SetUnitPositionLoc(udg_BS_Caster, PolarProjectionBJ(GetUnitLoc(udg_BS_Caster), 50.00, AngleBetweenPoints(GetUnitLoc(udg_BS_Caster), udg_BS_Point)))
if (Trig_Burrowstrike_Loop_Func002C()) then
CreateNUnitsAtLoc(1, FourCC("h002"), GetOwningPlayer(udg_BS_Caster), GetUnitLoc(udg_BS_Caster), bj_UNIT_FACING)
UnitApplyTimedLifeBJ(0.50, FourCC("BTLF"), GetLastCreatedUnit())
UnitAddAbilityBJ(FourCC("A01D"), GetLastCreatedUnit())
SetUnitAbilityLevelSwapped(FourCC("A01D"), GetLastCreatedUnit(), GetUnitAbilityLevelSwapped(FourCC("A01E"), udg_BS_Caster))
IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
AddSpecialEffectLocBJ(GetUnitLoc(udg_BS_Caster), "Abilities\\Weapons\\AncientProtectorMissile\\AncientProtectorMissile.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
else
end
if (Trig_Burrowstrike_Loop_Func003C()) then
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 6
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
bj_forLoopBIndex = 1
bj_forLoopBIndexEnd = 3
while (true) do
if (bj_forLoopBIndex > bj_forLoopBIndexEnd) then break end
AddSpecialEffectLocBJ(PolarProjectionBJ(GetUnitLoc(udg_BS_Caster), (100.00 * I2R(GetForLoopIndexB())), (60.00 * I2R(GetForLoopIndexA()))), "Abilities\\Weapons\\AncientProtectorMissile\\AncientProtectorMissile.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
bj_forLoopBIndex = bj_forLoopBIndex + 1
end
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
else
end
if (Trig_Burrowstrike_Loop_Func004C()) then
bj_forLoopAIndex = 1
bj_forLoopAIndexEnd = 6
while (true) do
if (bj_forLoopAIndex > bj_forLoopAIndexEnd) then break end
bj_forLoopBIndex = 1
bj_forLoopBIndexEnd = 2
while (true) do
if (bj_forLoopBIndex > bj_forLoopBIndexEnd) then break end
AddSpecialEffectLocBJ(PolarProjectionBJ(GetUnitLoc(udg_BS_Caster), (125.00 * I2R(GetForLoopIndexB())), (60.00 * I2R(GetForLoopIndexA()))), "Objects\\Spawnmodels\\Undead\\ImpaleTargetDust\\ImpaleTargetDust.mdl")
DestroyEffectBJ(GetLastCreatedEffectBJ())
bj_forLoopBIndex = bj_forLoopBIndex + 1
end
bj_forLoopAIndex = bj_forLoopAIndex + 1
end
else
end
if (Trig_Burrowstrike_Loop_Func005C()) then
SetUnitInvulnerable(udg_BS_Caster, false)
SetUnitPathing(udg_BS_Caster, true)
SetUnitVertexColorBJ(udg_BS_Caster, 100, 100, 100, 0)
PauseUnitBJ(false, udg_BS_Caster)
udg_BS_Caster = nil
DisableTrigger(GetTriggeringTrigger())
else
end
end

function InitTrig_Burrowstrike_Loop()
gg_trg_Burrowstrike_Loop = CreateTrigger()
DisableTrigger(gg_trg_Burrowstrike_Loop)
TriggerRegisterTimerEventPeriodic(gg_trg_Burrowstrike_Loop, 0.03)
TriggerAddAction(gg_trg_Burrowstrike_Loop, Trig_Burrowstrike_Loop_Actions)
end

function Trig_Bolvar_Respawn_Func004C()
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Bolvar_Respawn_Actions()
TriggerSleepAction(5.00)
ReviveHeroLoc(gg_unit_H006_0055, GetRectCenter(udg_BolvarRespawn), true)
SetUnitManaPercentBJ(gg_unit_H006_0055, 100)
if (Trig_Bolvar_Respawn_Func004C()) then
IssuePointOrderLocBJ(gg_unit_H006_0055, "attack", GetRectCenter(udg_BolvarTarget))
else
end
end

function InitTrig_Bolvar_Respawn()
gg_trg_Bolvar_Respawn = CreateTrigger()
TriggerRegisterUnitEvent(gg_trg_Bolvar_Respawn, gg_unit_H006_0055, EVENT_UNIT_DEATH)
TriggerAddAction(gg_trg_Bolvar_Respawn, Trig_Bolvar_Respawn_Actions)
end

function Trig_Bolvar_Attack_Func002C()
if (not (udg_InCinematic == false)) then
return false
end
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Bolvar_Attack_Conditions()
if (not Trig_Bolvar_Attack_Func002C()) then
return false
end
return true
end

function Trig_Bolvar_Attack_Func001Func002001001003001()
return (IsUnitAlly(GetFilterUnit(), Player(1)) == true)
end

function Trig_Bolvar_Attack_Func001Func002001001003002()
return (IsUnitAliveBJ(GetFilterUnit()) == true)
end

function Trig_Bolvar_Attack_Func001Func002001001003()
return GetBooleanAnd(Trig_Bolvar_Attack_Func001Func002001001003001(), Trig_Bolvar_Attack_Func001Func002001001003002())
end

function Trig_Bolvar_Attack_Func001C()
if (not (CountUnitsInGroup(GetUnitsInRangeOfLocMatching(750.00, GetUnitLoc(gg_unit_H006_0055), Condition(Trig_Bolvar_Attack_Func001Func002001001003))) >= 2)) then
return false
end
return true
end

function Trig_Bolvar_Attack_Actions()
if (Trig_Bolvar_Attack_Func001C()) then
IssuePointOrderLocBJ(gg_unit_H006_0055, "attack", GetRectCenter(udg_BolvarTarget))
else
IssuePointOrderLocBJ(gg_unit_H006_0055, "move", GetRectCenter(udg_BolvarRespawn))
end
end

function InitTrig_Bolvar_Attack()
gg_trg_Bolvar_Attack = CreateTrigger()
TriggerRegisterTimerEventPeriodic(gg_trg_Bolvar_Attack, 2.00)
TriggerAddCondition(gg_trg_Bolvar_Attack, Condition(Trig_Bolvar_Attack_Conditions))
TriggerAddAction(gg_trg_Bolvar_Attack, Trig_Bolvar_Attack_Actions)
end

function Trig_Bolvar_Reach_Fordragon_Hold_Conditions()
if (not (GetTriggerUnit() == gg_unit_H006_0055)) then
return false
end
return true
end

function Trig_Bolvar_Reach_Fordragon_Hold_Actions()
udg_BolvarRespawn = gg_rct_Revive_1
udg_BolvarTarget = gg_rct_Wrathgate_Guard
end

function InitTrig_Bolvar_Reach_Fordragon_Hold()
gg_trg_Bolvar_Reach_Fordragon_Hold = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Bolvar_Reach_Fordragon_Hold, gg_rct_Fordragons_Hold)
TriggerAddCondition(gg_trg_Bolvar_Reach_Fordragon_Hold, Condition(Trig_Bolvar_Reach_Fordragon_Hold_Conditions))
TriggerAddAction(gg_trg_Bolvar_Reach_Fordragon_Hold, Trig_Bolvar_Reach_Fordragon_Hold_Actions)
end

function Trig_Bolvar_Reach_Wrathgate_Guard_Conditions()
if (not (GetTriggerUnit() == gg_unit_H006_0055)) then
return false
end
return true
end

function Trig_Bolvar_Reach_Wrathgate_Guard_Actions()
udg_BolvarTarget = gg_rct_Human_2_Orc_2_base
end

function InitTrig_Bolvar_Reach_Wrathgate_Guard()
gg_trg_Bolvar_Reach_Wrathgate_Guard = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Bolvar_Reach_Wrathgate_Guard, gg_rct_Wrathgate_Guard)
TriggerAddCondition(gg_trg_Bolvar_Reach_Wrathgate_Guard, Condition(Trig_Bolvar_Reach_Wrathgate_Guard_Conditions))
TriggerAddAction(gg_trg_Bolvar_Reach_Wrathgate_Guard, Trig_Bolvar_Reach_Wrathgate_Guard_Actions)
end

function Trig_Bolvar_Reach_Human_2_Orc_2_Conditions()
if (not (GetTriggerUnit() == gg_unit_H006_0055)) then
return false
end
return true
end

function Trig_Bolvar_Reach_Human_2_Orc_2_Actions()
udg_BolvarRespawn = gg_rct_Revive_2
udg_BolvarTarget = gg_rct_Lich_King_Stand
end

function InitTrig_Bolvar_Reach_Human_2_Orc_2()
gg_trg_Bolvar_Reach_Human_2_Orc_2 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Bolvar_Reach_Human_2_Orc_2, gg_rct_Human_2_Orc_2_base)
TriggerAddCondition(gg_trg_Bolvar_Reach_Human_2_Orc_2, Condition(Trig_Bolvar_Reach_Human_2_Orc_2_Conditions))
TriggerAddAction(gg_trg_Bolvar_Reach_Human_2_Orc_2, Trig_Bolvar_Reach_Human_2_Orc_2_Actions)
end

function Trig_Army_Attack_Undead_2_Func002C()
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Undead_2_Conditions()
if (not Trig_Army_Attack_Undead_2_Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Undead_2_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Bolvar_Force_2))
end

function InitTrig_Army_Attack_Undead_2()
gg_trg_Army_Attack_Undead_2 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Undead_2, gg_rct_Bolvar_Force_1)
TriggerAddCondition(gg_trg_Army_Attack_Undead_2, Condition(Trig_Army_Attack_Undead_2_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Undead_2, Trig_Army_Attack_Undead_2_Actions)
end

function Trig_Army_Attack_Undead_3_Func002C()
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Undead_3_Conditions()
if (not Trig_Army_Attack_Undead_3_Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Undead_3_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Bolvar_Force_3))
end

function InitTrig_Army_Attack_Undead_3()
gg_trg_Army_Attack_Undead_3 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Undead_3, gg_rct_Bolvar_Force_2)
TriggerAddCondition(gg_trg_Army_Attack_Undead_3, Condition(Trig_Army_Attack_Undead_3_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Undead_3, Trig_Army_Attack_Undead_3_Actions)
end

function Trig_Army_Attack_Fordragon_Hold_Func002C()
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Fordragon_Hold_Conditions()
if (not Trig_Army_Attack_Fordragon_Hold_Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Fordragon_Hold_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Fordragons_Hold))
end

function InitTrig_Army_Attack_Fordragon_Hold()
gg_trg_Army_Attack_Fordragon_Hold = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Fordragon_Hold, gg_rct_Bolvar_Force_3)
TriggerAddCondition(gg_trg_Army_Attack_Fordragon_Hold, Condition(Trig_Army_Attack_Fordragon_Hold_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Fordragon_Hold, Trig_Army_Attack_Fordragon_Hold_Actions)
end

function Trig_Army_Attack_Wrathgate_Func003C()
if (GetOwningPlayer(GetTriggerUnit()) == Player(1)) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Wrathgate_Conditions()
if (not Trig_Army_Attack_Wrathgate_Func003C()) then
return false
end
return true
end

function Trig_Army_Attack_Wrathgate_Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3])) then
return false
end
return true
end

function Trig_Army_Attack_Wrathgate_Func002Func002C()
if (GetOwningPlayer(GetTriggerUnit()) ~= Player(1)) then
return true
end
if (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER) then
return true
end
return false
end

function Trig_Army_Attack_Wrathgate_Func002C()
if (not Trig_Army_Attack_Wrathgate_Func002Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Wrathgate_Actions()
if (Trig_Army_Attack_Wrathgate_Func001C()) then
else
udg_Human_Target[3] = gg_rct_Wrathgate
end
if (Trig_Army_Attack_Wrathgate_Func002C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Wrathgate))
else
end
SetUnitLifePercentBJ(GetTriggerUnit(), 100)
SetUnitManaPercentBJ(GetTriggerUnit(), 100)
end

function InitTrig_Army_Attack_Wrathgate()
gg_trg_Army_Attack_Wrathgate = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Wrathgate, gg_rct_Fordragons_Hold)
TriggerAddCondition(gg_trg_Army_Attack_Wrathgate, Condition(Trig_Army_Attack_Wrathgate_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Wrathgate, Trig_Army_Attack_Wrathgate_Actions)
end

function Trig_Army_Attack_Wrathgate_Guard_Func001Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == Player(1))) then
return false
end
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Army_Attack_Wrathgate_Guard_Func001C()
if (Trig_Army_Attack_Wrathgate_Guard_Func001Func001C()) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Wrathgate_Guard_Conditions()
if (not Trig_Army_Attack_Wrathgate_Guard_Func001C()) then
return false
end
return true
end

function Trig_Army_Attack_Wrathgate_Guard_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Wrathgate_Guard))
end

function InitTrig_Army_Attack_Wrathgate_Guard()
gg_trg_Army_Attack_Wrathgate_Guard = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Wrathgate_Guard, gg_rct_Wrathgate)
TriggerAddCondition(gg_trg_Army_Attack_Wrathgate_Guard, Condition(Trig_Army_Attack_Wrathgate_Guard_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Wrathgate_Guard, Trig_Army_Attack_Wrathgate_Guard_Actions)
end

function Trig_Army_Atack_Human_2_Orc_2_Func002C()
if (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Atack_Human_2_Orc_2_Conditions()
if (not Trig_Army_Atack_Human_2_Orc_2_Func002C()) then
return false
end
return true
end

function Trig_Army_Atack_Human_2_Orc_2_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Human_2_Orc_2_base))
end

function InitTrig_Army_Atack_Human_2_Orc_2()
gg_trg_Army_Atack_Human_2_Orc_2 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Atack_Human_2_Orc_2, gg_rct_Wrathgate_Guard)
TriggerAddCondition(gg_trg_Army_Atack_Human_2_Orc_2, Condition(Trig_Army_Atack_Human_2_Orc_2_Conditions))
TriggerAddAction(gg_trg_Army_Atack_Human_2_Orc_2, Trig_Army_Atack_Human_2_Orc_2_Actions)
end

function Trig_Army_Attack_Three_Corner_Func001C()
if (GetOwningPlayer(GetTriggerUnit()) == Player(1)) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Three_Corner_Conditions()
if (not Trig_Army_Attack_Three_Corner_Func001C()) then
return false
end
return true
end

function Trig_Army_Attack_Three_Corner_Func002Func002C()
if (GetOwningPlayer(GetTriggerUnit()) ~= Player(1)) then
return true
end
if (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER) then
return true
end
return false
end

function Trig_Army_Attack_Three_Corner_Func002C()
if (not Trig_Army_Attack_Three_Corner_Func002Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Three_Corner_Actions()
if (Trig_Army_Attack_Three_Corner_Func002C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_three_corner))
else
end
SetUnitLifePercentBJ(GetTriggerUnit(), 100)
SetUnitManaPercentBJ(GetTriggerUnit(), 100)
end

function InitTrig_Army_Attack_Three_Corner()
gg_trg_Army_Attack_Three_Corner = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Three_Corner, gg_rct_Human_2_Orc_2_base)
TriggerAddCondition(gg_trg_Army_Attack_Three_Corner, Condition(Trig_Army_Attack_Three_Corner_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Three_Corner, Trig_Army_Attack_Three_Corner_Actions)
end

function Trig_Army_Attack_Citadel_Entrance_Func001C()
if (GetOwningPlayer(GetTriggerUnit()) == Player(1)) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Citadel_Entrance_Conditions()
if (not Trig_Army_Attack_Citadel_Entrance_Func001C()) then
return false
end
return true
end

function Trig_Army_Attack_Citadel_Entrance_Func002Func002C()
if (GetOwningPlayer(GetTriggerUnit()) ~= Player(1)) then
return true
end
if (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER) then
return true
end
return false
end

function Trig_Army_Attack_Citadel_Entrance_Func002C()
if (not Trig_Army_Attack_Citadel_Entrance_Func002Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Citadel_Entrance_Actions()
if (Trig_Army_Attack_Citadel_Entrance_Func002C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Citadel_Entrance))
else
end
end

function InitTrig_Army_Attack_Citadel_Entrance()
gg_trg_Army_Attack_Citadel_Entrance = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Citadel_Entrance, gg_rct_three_corner)
TriggerAddCondition(gg_trg_Army_Attack_Citadel_Entrance, Condition(Trig_Army_Attack_Citadel_Entrance_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Citadel_Entrance, Trig_Army_Attack_Citadel_Entrance_Actions)
end

function Trig_Army_AttackTFT_Base_1_Func001Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == Player(1))) then
return false
end
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Army_AttackTFT_Base_1_Func001C()
if (Trig_Army_AttackTFT_Base_1_Func001Func001C()) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_AttackTFT_Base_1_Conditions()
if (not Trig_Army_AttackTFT_Base_1_Func001C()) then
return false
end
return true
end

function Trig_Army_AttackTFT_Base_1_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_TFT_Base_1))
end

function InitTrig_Army_AttackTFT_Base_1()
gg_trg_Army_AttackTFT_Base_1 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_AttackTFT_Base_1, gg_rct_Citadel_Entrance)
TriggerAddCondition(gg_trg_Army_AttackTFT_Base_1, Condition(Trig_Army_AttackTFT_Base_1_Conditions))
TriggerAddAction(gg_trg_Army_AttackTFT_Base_1, Trig_Army_AttackTFT_Base_1_Actions)
end

function Trig_Army_Attack_TFT_Base_2_or_3_Func003Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == Player(1))) then
return false
end
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Army_Attack_TFT_Base_2_or_3_Func003C()
if (Trig_Army_Attack_TFT_Base_2_or_3_Func003Func001C()) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_TFT_Base_2_or_3_Conditions()
if (not Trig_Army_Attack_TFT_Base_2_or_3_Func003C()) then
return false
end
return true
end

function Trig_Army_Attack_TFT_Base_2_or_3_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_TFT_Base_3))
end

function InitTrig_Army_Attack_TFT_Base_2_or_3()
gg_trg_Army_Attack_TFT_Base_2_or_3 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_TFT_Base_2_or_3, gg_rct_TFT_Base_1)
TriggerAddCondition(gg_trg_Army_Attack_TFT_Base_2_or_3, Condition(Trig_Army_Attack_TFT_Base_2_or_3_Conditions))
TriggerAddAction(gg_trg_Army_Attack_TFT_Base_2_or_3, Trig_Army_Attack_TFT_Base_2_or_3_Actions)
end

function Trig_Army_Attack_TFT_Main_Base_Func001Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == Player(1))) then
return false
end
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Army_Attack_TFT_Main_Base_Func001C()
if (Trig_Army_Attack_TFT_Main_Base_Func001Func001C()) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_TFT_Main_Base_Conditions()
if (not Trig_Army_Attack_TFT_Main_Base_Func001C()) then
return false
end
return true
end

function Trig_Army_Attack_TFT_Main_Base_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Main_Base))
end

function InitTrig_Army_Attack_TFT_Main_Base()
gg_trg_Army_Attack_TFT_Main_Base = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_TFT_Main_Base, gg_rct_TFT_Base_3)
TriggerAddCondition(gg_trg_Army_Attack_TFT_Main_Base, Condition(Trig_Army_Attack_TFT_Main_Base_Conditions))
TriggerAddAction(gg_trg_Army_Attack_TFT_Main_Base, Trig_Army_Attack_TFT_Main_Base_Actions)
end

function Trig_Army_Attack_Front_of_TFT_Func001Func002Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == Player(1))) then
return false
end
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Army_Attack_Front_of_TFT_Func001Func002C()
if (Trig_Army_Attack_Front_of_TFT_Func001Func002Func001C()) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Front_of_TFT_Func001C()
if (not (udg_InCinematic == false)) then
return false
end
if (not Trig_Army_Attack_Front_of_TFT_Func001Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Front_of_TFT_Conditions()
if (not Trig_Army_Attack_Front_of_TFT_Func001C()) then
return false
end
return true
end

function Trig_Army_Attack_Front_of_TFT_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Front_of_TFT))
end

function InitTrig_Army_Attack_Front_of_TFT()
gg_trg_Army_Attack_Front_of_TFT = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Front_of_TFT, gg_rct_Main_Base)
TriggerAddCondition(gg_trg_Army_Attack_Front_of_TFT, Condition(Trig_Army_Attack_Front_of_TFT_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Front_of_TFT, Trig_Army_Attack_Front_of_TFT_Actions)
end

function Trig_Army_Attack_Lich_King_Func001Func002Func001C()
if (not (GetOwningPlayer(GetTriggerUnit()) == Player(1))) then
return false
end
if (not (GetPlayerController(Player(1)) ~= MAP_CONTROL_USER)) then
return false
end
return true
end

function Trig_Army_Attack_Lich_King_Func001Func002C()
if (Trig_Army_Attack_Lich_King_Func001Func002Func001C()) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Army_Attack_Lich_King_Func001C()
if (not (udg_InCinematic == false)) then
return false
end
if (not Trig_Army_Attack_Lich_King_Func001Func002C()) then
return false
end
return true
end

function Trig_Army_Attack_Lich_King_Conditions()
if (not Trig_Army_Attack_Lich_King_Func001C()) then
return false
end
return true
end

function Trig_Army_Attack_Lich_King_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Lich_King_Stand))
end

function InitTrig_Army_Attack_Lich_King()
gg_trg_Army_Attack_Lich_King = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Army_Attack_Lich_King, gg_rct_Front_of_TFT)
TriggerAddCondition(gg_trg_Army_Attack_Lich_King, Condition(Trig_Army_Attack_Lich_King_Conditions))
TriggerAddAction(gg_trg_Army_Attack_Lich_King, Trig_Army_Attack_Lich_King_Actions)
end

function Trig_Summon_Func004C()
if (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2]) then
return true
end
return false
end

function Trig_Summon_Conditions()
if (not Trig_Summon_Func004C()) then
return false
end
return true
end

function Trig_Summon_Func001001()
return (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[1])
end

function Trig_Summon_Func002001()
return (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])
end

function Trig_Summon_Actions()
if (Trig_Summon_Func001001()) then
IssuePointOrderLocBJ(GetSummonedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[1]))
else
DoNothing()
end
if (Trig_Summon_Func002001()) then
IssuePointOrderLocBJ(GetSummonedUnit(), "attack", GetRandomLocInRect(udg_Undead_Target[2]))
else
DoNothing()
end
SetUnitAcquireRangeBJ(GetSummonedUnit(), 3000.00)
end

function InitTrig_Summon()
gg_trg_Summon = CreateTrigger()
TriggerRegisterAnyUnitEventBJ(gg_trg_Summon, EVENT_PLAYER_UNIT_SUMMON)
TriggerAddCondition(gg_trg_Summon, Condition(Trig_Summon_Conditions))
TriggerAddAction(gg_trg_Summon, Trig_Summon_Actions)
end

function Trig_Undead_Attack_SaufangFordragon_Hold_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[1])) then
return false
end
return true
end

function Trig_Undead_Attack_SaufangFordragon_Hold_Func001C()
if (not (GetRandomInt(1, 2) == 1)) then
return false
end
return true
end

function Trig_Undead_Attack_SaufangFordragon_Hold_Actions()
if (Trig_Undead_Attack_SaufangFordragon_Hold_Func001C()) then
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Fordragons_Hold))
else
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Saufang_Hold))
end
end

function InitTrig_Undead_Attack_SaufangFordragon_Hold()
gg_trg_Undead_Attack_SaufangFordragon_Hold = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Undead_Attack_SaufangFordragon_Hold, gg_rct_Wrathgate)
TriggerAddCondition(gg_trg_Undead_Attack_SaufangFordragon_Hold, Condition(Trig_Undead_Attack_SaufangFordragon_Hold_Conditions))
TriggerAddAction(gg_trg_Undead_Attack_SaufangFordragon_Hold, Trig_Undead_Attack_SaufangFordragon_Hold_Actions)
end

function Trig_Undead_Attack_TFT_Base_3_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])) then
return false
end
return true
end

function Trig_Undead_Attack_TFT_Base_3_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_TFT_Base_3))
end

function InitTrig_Undead_Attack_TFT_Base_3()
gg_trg_Undead_Attack_TFT_Base_3 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Undead_Attack_TFT_Base_3, gg_rct_Main_Base)
TriggerAddCondition(gg_trg_Undead_Attack_TFT_Base_3, Condition(Trig_Undead_Attack_TFT_Base_3_Conditions))
TriggerAddAction(gg_trg_Undead_Attack_TFT_Base_3, Trig_Undead_Attack_TFT_Base_3_Actions)
end

function Trig_Undead_Attack_TFT_Base_2_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])) then
return false
end
return true
end

function Trig_Undead_Attack_TFT_Base_2_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_TFT_Base_1))
end

function InitTrig_Undead_Attack_TFT_Base_2()
gg_trg_Undead_Attack_TFT_Base_2 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Undead_Attack_TFT_Base_2, gg_rct_TFT_Base_3)
TriggerAddCondition(gg_trg_Undead_Attack_TFT_Base_2, Condition(Trig_Undead_Attack_TFT_Base_2_Conditions))
TriggerAddAction(gg_trg_Undead_Attack_TFT_Base_2, Trig_Undead_Attack_TFT_Base_2_Actions)
end

function Trig_Undead_Attack_TFT_Base_1_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])) then
return false
end
return true
end

function Trig_Undead_Attack_TFT_Base_1_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_TFT_Base_1))
end

function InitTrig_Undead_Attack_TFT_Base_1()
gg_trg_Undead_Attack_TFT_Base_1 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Undead_Attack_TFT_Base_1, gg_rct_TFT_Base_2)
TriggerAddCondition(gg_trg_Undead_Attack_TFT_Base_1, Condition(Trig_Undead_Attack_TFT_Base_1_Conditions))
TriggerAddAction(gg_trg_Undead_Attack_TFT_Base_1, Trig_Undead_Attack_TFT_Base_1_Actions)
end

function Trig_Undead_Attack_TFT_Citadel_Entrance_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])) then
return false
end
return true
end

function Trig_Undead_Attack_TFT_Citadel_Entrance_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Human_2_Orc_2_base))
end

function InitTrig_Undead_Attack_TFT_Citadel_Entrance()
gg_trg_Undead_Attack_TFT_Citadel_Entrance = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Undead_Attack_TFT_Citadel_Entrance, gg_rct_TFT_Base_1)
TriggerAddCondition(gg_trg_Undead_Attack_TFT_Citadel_Entrance, Condition(Trig_Undead_Attack_TFT_Citadel_Entrance_Conditions))
TriggerAddAction(gg_trg_Undead_Attack_TFT_Citadel_Entrance, Trig_Undead_Attack_TFT_Citadel_Entrance_Actions)
end

function Trig_Undead_Attack_3corner_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])) then
return false
end
return true
end

function Trig_Undead_Attack_3corner_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_three_corner))
end

function InitTrig_Undead_Attack_3corner()
gg_trg_Undead_Attack_3corner = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Undead_Attack_3corner, gg_rct_Citadel_Entrance)
TriggerAddCondition(gg_trg_Undead_Attack_3corner, Condition(Trig_Undead_Attack_3corner_Conditions))
TriggerAddAction(gg_trg_Undead_Attack_3corner, Trig_Undead_Attack_3corner_Actions)
end

function Trig_Undead_Attack_TFT_Human_2_Orc_2_Conditions()
if (not (GetOwningPlayer(GetTriggerUnit()) == udg_Undead[2])) then
return false
end
return true
end

function Trig_Undead_Attack_TFT_Human_2_Orc_2_Actions()
IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRandomLocInRect(gg_rct_Human_2_Orc_2_base))
end

function InitTrig_Undead_Attack_TFT_Human_2_Orc_2()
gg_trg_Undead_Attack_TFT_Human_2_Orc_2 = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Undead_Attack_TFT_Human_2_Orc_2, gg_rct_three_corner)
TriggerAddCondition(gg_trg_Undead_Attack_TFT_Human_2_Orc_2, Condition(Trig_Undead_Attack_TFT_Human_2_Orc_2_Conditions))
TriggerAddAction(gg_trg_Undead_Attack_TFT_Human_2_Orc_2, Trig_Undead_Attack_TFT_Human_2_Orc_2_Actions)
end

function Trig_Enter_TFT_Func003C()
if (GetOwningPlayer(GetTriggerUnit()) == Player(1)) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[2]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Human[3]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[1]) then
return true
end
if (GetOwningPlayer(GetTriggerUnit()) == udg_Orc[2]) then
return true
end
return false
end

function Trig_Enter_TFT_Conditions()
if (not Trig_Enter_TFT_Func003C()) then
return false
end
return true
end

function Trig_Enter_TFT_Actions()
DisableTrigger(GetTriggeringTrigger())
ConditionalTriggerExecute(gg_trg_Fight_Cinematic)
end

function InitTrig_Enter_TFT()
gg_trg_Enter_TFT = CreateTrigger()
TriggerRegisterEnterRectSimple(gg_trg_Enter_TFT, gg_rct_Front_of_TFT)
TriggerAddCondition(gg_trg_Enter_TFT, Condition(Trig_Enter_TFT_Conditions))
TriggerAddAction(gg_trg_Enter_TFT, Trig_Enter_TFT_Actions)
end

function Trig_No_leave_Conditions()
if (not (GetTriggerUnit() == gg_unit_H001_0142)) then
return false
end
return true
end

function Trig_No_leave_Func003001()
return (DistanceBetweenPoints(GetUnitLoc(gg_unit_H001_0142), GetRectCenter(gg_rct_Lich_King_Stand)) <= 100.00)
end

function Trig_No_leave_Actions()
IssuePointOrderLocBJ(gg_unit_H001_0142, "move", GetRectCenter(gg_rct_Lich_King_Stand))
SetUnitPathing(gg_unit_H001_0142, false)
while (true) do
if ((Trig_No_leave_Func003001())) then break end
TriggerSleepAction(RMaxBJ(bj_WAIT_FOR_COND_MIN_INTERVAL, 1))
end
SetUnitPathing(gg_unit_H001_0142, true)
SetUnitFacingToFaceLocTimed(gg_unit_H001_0142, GetRectCenter(gg_rct_Front_of_TFT), 1.00)
end

function InitTrig_No_leave()
gg_trg_No_leave = CreateTrigger()
DisableTrigger(gg_trg_No_leave)
TriggerRegisterLeaveRectSimple(gg_trg_No_leave, gg_rct_TFT)
TriggerAddCondition(gg_trg_No_leave, Condition(Trig_No_leave_Conditions))
TriggerAddAction(gg_trg_No_leave, Trig_No_leave_Actions)
end

function Trig_Fight_Cinematic_Func017A()
CameraSetupApplyForPlayer(true, gg_cam_Camera_014, GetEnumPlayer(), 0)
end

function Trig_Fight_Cinematic_Func018A()
CameraSetupApplyForPlayer(true, gg_cam_Camera_015, GetEnumPlayer(), 3.00)
end

function Trig_Fight_Cinematic_Func019A()
SetUnitInvulnerable(GetEnumUnit(), true)
PauseUnitBJ(true, GetEnumUnit())
end

function Trig_Fight_Cinematic_Func027001()
return (DistanceBetweenPoints(GetUnitLoc(gg_unit_H006_0055), GetUnitLoc(gg_unit_ncp3_0523)) < 50.00)
end

function Trig_Fight_Cinematic_Func030A()
CameraSetupApplyForPlayer(true, gg_cam_Intro_TFT_3, GetEnumPlayer(), 0)
end

function Trig_Fight_Cinematic_Func033A()
CameraSetupApplyForPlayer(true, gg_cam_Intro_TFT_2, GetEnumPlayer(), 6.00)
end

function Trig_Fight_Cinematic_Func034A()
CameraSetupApplyForPlayer(true, gg_cam_Intro_TFT_1, GetEnumPlayer(), 6.00)
end

function Trig_Fight_Cinematic_Func036001()
return (DistanceBetweenPoints(GetUnitLoc(gg_unit_H001_0142), GetRectCenter(gg_rct_Lich_King_Stand)) < 100.00)
end

function Trig_Fight_Cinematic_Func039A()
ResetToGameCameraForPlayer(GetEnumPlayer(), 1.00)
end

function Trig_Fight_Cinematic_Func041A()
SetUnitInvulnerable(GetEnumUnit(), false)
PauseUnitBJ(false, GetEnumUnit())
end

function Trig_Fight_Cinematic_Actions()
SetHeroLevelBJ(gg_unit_H006_0055, 90, false)
SetUnitAbilityLevelSwapped(FourCC("A00E"), gg_unit_H006_0055, 18)
SetUnitAbilityLevelSwapped(FourCC("A00D"), gg_unit_H006_0055, 18)
SetUnitAbilityLevelSwapped(FourCC("A00F"), gg_unit_H006_0055, 18)
SetUnitAbilityLevelSwapped(FourCC("A00C"), gg_unit_H006_0055, 18)
SetUnitLifePercentBJ(gg_unit_H006_0055, 100)
SetUnitManaPercentBJ(gg_unit_H006_0055, 100)
udg_BolvarRespawn = gg_rct_Revive_2
udg_InCinematic = true
PlayMusicExBJ(gg_snd_LichKingTheme, 0.01, 1.00)
SetMusicVolumeBJ(100)
SetCineModeVolumeGroupsBJ()
CinematicFadeBJ(bj_CINEFADETYPE_FADEOUTIN, 6.00, "ReplaceableTextures\\CameraMasks\\Black_mask.blp", 0, 0, 0, 0)
TriggerSleepAction(1.00)
CinematicModeExBJ(true, GetPlayersAll(), 1.00)
TriggerSleepAction(1.00)
ForForce(GetPlayersAll(), Trig_Fight_Cinematic_Func017A)
ForForce(GetPlayersAll(), Trig_Fight_Cinematic_Func018A)
ForGroupBJ(GetUnitsInRectAll(GetPlayableMapRect()), Trig_Fight_Cinematic_Func019A)
PauseUnitBJ(false, gg_unit_H001_0142)
PauseUnitBJ(false, gg_unit_H006_0055)
SetUnitPositionLocFacingLocBJ(gg_unit_H006_0055, GetRectCenter(gg_rct_Front_of_TFT), GetRectCenter(gg_rct_Lich_King_Stand))
SetUnitPositionLocFacingLocBJ(gg_unit_H001_0142, GetRectCenter(gg_rct_Lichg_King_Respawn), GetUnitLoc(gg_unit_H006_0055))
ResetUnitAnimation(gg_unit_H001_0142)
CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 2, "ReplaceableTextures\\CameraMasks\\White_mask.blp", 0, 0, 0, 0)
IssuePointOrderLocBJ(gg_unit_H006_0055, "move", GetUnitLoc(gg_unit_ncp3_0523))
while (true) do
if ((Trig_Fight_Cinematic_Func027001())) then break end
TriggerSleepAction(RMaxBJ(bj_WAIT_FOR_COND_MIN_INTERVAL, 1))
end
SetUnitAnimationWithRarity(gg_unit_H006_0055, "stand ready", RARITY_FREQUENT)
TransmissionFromUnitWithNameBJ(GetPlayersAll(), gg_unit_H006_0055, GetUnitName(gg_unit_H006_0055), nil, "TRIGSTR_355", bj_TIMETYPE_ADD, 5.00, true)
ForForce(GetPlayersAll(), Trig_Fight_Cinematic_Func030A)
TransmissionFromUnitWithNameBJ(GetPlayersAll(), gg_unit_H001_0142, GetUnitName(gg_unit_H001_0142), nil, "TRIGSTR_356", bj_TIMETYPE_ADD, 6.00, false)
TriggerSleepAction(2)
ForForce(GetPlayersAll(), Trig_Fight_Cinematic_Func033A)
ForForce(GetPlayersAll(), Trig_Fight_Cinematic_Func034A)
IssuePointOrderLocBJ(gg_unit_H001_0142, "move", GetRectCenter(gg_rct_Lich_King_Stand))
while (true) do
if ((Trig_Fight_Cinematic_Func036001())) then break end
TriggerSleepAction(RMaxBJ(bj_WAIT_FOR_COND_MIN_INTERVAL, 1))
end
SetUnitAnimationWithRarity(gg_unit_H001_0142, "stand ready", RARITY_FREQUENT)
TransmissionFromUnitWithNameBJ(GetPlayersAll(), gg_unit_H001_0142, GetUnitName(gg_unit_H001_0142), nil, "TRIGSTR_357", bj_TIMETYPE_ADD, 3.00, true)
ForForce(GetPlayersAll(), Trig_Fight_Cinematic_Func039A)
CinematicModeExBJ(false, GetPlayersAll(), 1.00)
ForGroupBJ(GetUnitsInRectAll(GetPlayableMapRect()), Trig_Fight_Cinematic_Func041A)
IssuePointOrderLocBJ(gg_unit_H006_0055, "attack", GetRectCenter(gg_rct_Lich_King_Stand))
udg_InCinematic = false
VolumeGroupResetBJ()
end

function InitTrig_Fight_Cinematic()
gg_trg_Fight_Cinematic = CreateTrigger()
TriggerAddAction(gg_trg_Fight_Cinematic, Trig_Fight_Cinematic_Actions)
end

function Trig_Camera_Actions()
CameraSetSmoothingFactorBJ(S2R(GetEventPlayerChatString()))
end

function InitTrig_Camera()
gg_trg_Camera = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_Camera, Player(1), "1", true)
TriggerRegisterPlayerChatEvent(gg_trg_Camera, Player(1), "8", true)
TriggerRegisterPlayerChatEvent(gg_trg_Camera, Player(10), "1", true)
TriggerRegisterPlayerChatEvent(gg_trg_Camera, Player(1), "8", true)
TriggerAddAction(gg_trg_Camera, Trig_Camera_Actions)
end

function Trig_killLich_King_Actions()
KillUnit(gg_unit_H001_0142)
end

function InitTrig_killLich_King()
gg_trg_killLich_King = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_killLich_King, Player(10), "kill", true)
TriggerAddAction(gg_trg_killLich_King, Trig_killLich_King_Actions)
end

function Trig_Fast_and_Furious_enter_Actions()
EnableTrigger(gg_trg_Fast_and_Furious)
end

function InitTrig_Fast_and_Furious_enter()
gg_trg_Fast_and_Furious_enter = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_Fast_and_Furious_enter, Player(1), "fastandfurious", true)
TriggerRegisterPlayerChatEvent(gg_trg_Fast_and_Furious_enter, Player(10), "fastandfurious", true)
TriggerAddAction(gg_trg_Fast_and_Furious_enter, Trig_Fast_and_Furious_enter_Actions)
end

function Trig_Fast_and_Furious_Func001001002()
return (GetUnitMoveSpeed(GetFilterUnit()) < 522.00)
end

function Trig_Fast_and_Furious_Func001A()
SetUnitMoveSpeed(GetEnumUnit(), 522.00)
end

function Trig_Fast_and_Furious_Func002001002()
return (GetUnitAbilityLevelSwapped(FourCC("A00A"), GetTriggerUnit()) <= 0)
end

function Trig_Fast_and_Furious_Func002A()
UnitAddAbilityBJ(FourCC("A00A"), GetEnumUnit())
end

function Trig_Fast_and_Furious_Actions()
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Fast_and_Furious_Func001001002)), Trig_Fast_and_Furious_Func001A)
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Fast_and_Furious_Func002001002)), Trig_Fast_and_Furious_Func002A)
end

function InitTrig_Fast_and_Furious()
gg_trg_Fast_and_Furious = CreateTrigger()
DisableTrigger(gg_trg_Fast_and_Furious)
TriggerRegisterTimerEventPeriodic(gg_trg_Fast_and_Furious, 5.00)
TriggerAddAction(gg_trg_Fast_and_Furious, Trig_Fast_and_Furious_Actions)
end

function Trig_No_spawn_Undead_Func002002()
KillUnit(GetEnumUnit())
end

function Trig_No_spawn_Undead_Func003002()
KillUnit(GetEnumUnit())
end

function Trig_No_spawn_Undead_Actions()
DisableTrigger(gg_trg_Undead_Spawn)
ForGroupBJ(GetUnitsInRectOfPlayer(GetPlayableMapRect(), udg_Undead[1]), Trig_No_spawn_Undead_Func002002)
ForGroupBJ(GetUnitsInRectOfPlayer(GetPlayableMapRect(), udg_Undead[2]), Trig_No_spawn_Undead_Func003002)
end

function InitTrig_No_spawn_Undead()
gg_trg_No_spawn_Undead = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_No_spawn_Undead, Player(1), "nospawnundead", true)
TriggerRegisterPlayerChatEvent(gg_trg_No_spawn_Undead, Player(10), "nospawnundead", true)
TriggerAddAction(gg_trg_No_spawn_Undead, Trig_No_spawn_Undead_Actions)
end

function Trig_No_spawn_Alliance_Actions()
DisableTrigger(gg_trg_Human_Spawn)
DisableTrigger(gg_trg_Orc_Spawn)
end

function InitTrig_No_spawn_Alliance()
gg_trg_No_spawn_Alliance = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_No_spawn_Alliance, Player(1), "nospawnalliance", true)
TriggerRegisterPlayerChatEvent(gg_trg_No_spawn_Alliance, Player(10), "nospawnalliance", true)
TriggerAddAction(gg_trg_No_spawn_Alliance, Trig_No_spawn_Alliance_Actions)
end

function Trig_Cinematic_Actions()
DisableTrigger(gg_trg_Enter_TFT)
ConditionalTriggerExecute(gg_trg_Fight_Cinematic)
end

function InitTrig_Cinematic()
gg_trg_Cinematic = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_Cinematic, Player(1), "fightcinematic", true)
TriggerRegisterPlayerChatEvent(gg_trg_Cinematic, Player(10), "fightcinematic", true)
TriggerAddAction(gg_trg_Cinematic, Trig_Cinematic_Actions)
end

function Trig_Refresh_Func001001002()
return (IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO) == true)
end

function Trig_Refresh_Func001002()
UnitResetCooldown(GetEnumUnit())
end

function Trig_Refresh_Actions()
ForGroupBJ(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(Trig_Refresh_Func001001002)), Trig_Refresh_Func001002)
end

function InitTrig_Refresh()
gg_trg_Refresh = CreateTrigger()
TriggerRegisterPlayerChatEvent(gg_trg_Refresh, Player(3), "-refresh", true)
TriggerRegisterPlayerChatEvent(gg_trg_Refresh, Player(1), "-refresh", true)
TriggerAddAction(gg_trg_Refresh, Trig_Refresh_Actions)
end

function InitCustomTriggers()
InitTrig_Corpses_Respawn()
InitTrig_Initialization()
InitTrig_Tree_cut()
InitTrig_Human_Spawn()
InitTrig_Bolvar_Army_Spawn()
InitTrig_Orc_Spawn()
InitTrig_Undead_Spawn()
InitTrig_Anti_leak_H1()
InitTrig_Anti_leak_H2()
InitTrig_Anti_leak_H3()
InitTrig_Anti_leak_O1()
InitTrig_Anti_leak_O2()
InitTrig_Anti_leak_U1()
InitTrig_Anti_leak_U2()
InitTrig_Choose_Active_Deactive()
InitTrig_Choose_Target()
InitTrig_Active_Deactive()
InitTrig_Left_On()
InitTrig_Left_Off()
InitTrig_Right_On()
InitTrig_Right_Off()
InitTrig_Forward_On()
InitTrig_Forward_Off()
InitTrig_Corpse_Harvester()
InitTrig_MH_Init()
InitTrig_MH_Loop()
InitTrig_Heal_sefl_AI()
InitTrig_respawn()
InitTrig_animation()
InitTrig_Army_of_the_Death()
InitTrig_Wrath_of_the_Lich_King()
InitTrig_Dragon_Mount()
InitTrig_Dragon_Mount_Die()
InitTrig_Dragon_Mount_Loops()
InitTrig_Dragon_Mount_Animation()
InitTrig_Holy_Rays()
InitTrig_Holy_Rays_Loops()
InitTrig_Blood_Strike()
InitTrig_Charge_Start_End()
InitTrig_Charge_Loops()
InitTrig_Call_of_Loyalty()
InitTrig_Mana_of_the_Destruction()
InitTrig_Lost_and_Gain()
InitTrig_Flame()
InitTrig_Burrowstrike()
InitTrig_Burrowstrike_Loop()
InitTrig_Bolvar_Respawn()
InitTrig_Bolvar_Attack()
InitTrig_Bolvar_Reach_Fordragon_Hold()
InitTrig_Bolvar_Reach_Wrathgate_Guard()
InitTrig_Bolvar_Reach_Human_2_Orc_2()
InitTrig_Army_Attack_Undead_2()
InitTrig_Army_Attack_Undead_3()
InitTrig_Army_Attack_Fordragon_Hold()
InitTrig_Army_Attack_Wrathgate()
InitTrig_Army_Attack_Wrathgate_Guard()
InitTrig_Army_Atack_Human_2_Orc_2()
InitTrig_Army_Attack_Three_Corner()
InitTrig_Army_Attack_Citadel_Entrance()
InitTrig_Army_AttackTFT_Base_1()
InitTrig_Army_Attack_TFT_Base_2_or_3()
InitTrig_Army_Attack_TFT_Main_Base()
InitTrig_Army_Attack_Front_of_TFT()
InitTrig_Army_Attack_Lich_King()
InitTrig_Summon()
InitTrig_Undead_Attack_SaufangFordragon_Hold()
InitTrig_Undead_Attack_TFT_Base_3()
InitTrig_Undead_Attack_TFT_Base_2()
InitTrig_Undead_Attack_TFT_Base_1()
InitTrig_Undead_Attack_TFT_Citadel_Entrance()
InitTrig_Undead_Attack_3corner()
InitTrig_Undead_Attack_TFT_Human_2_Orc_2()
InitTrig_Enter_TFT()
InitTrig_No_leave()
InitTrig_Fight_Cinematic()
InitTrig_Camera()
InitTrig_killLich_King()
InitTrig_Fast_and_Furious_enter()
InitTrig_Fast_and_Furious()
InitTrig_No_spawn_Undead()
InitTrig_No_spawn_Alliance()
InitTrig_Cinematic()
InitTrig_Refresh()
end

function InitUpgrades_Player0()
SetPlayerTechResearched(Player(0), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(0), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(0), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(0), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(0), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(0), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(0), FourCC("Robf"), 1)
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
SetPlayerTechResearched(Player(0), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(0), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhfc"), 1)
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
SetPlayerTechResearched(Player(0), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(0), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(0), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(0), FourCC("Rupm"), 0)
SetPlayerTechResearched(Player(0), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhcd"), 1)
SetPlayerTechMaxAllowed(Player(0), FourCC("Rhpm"), 0)
SetPlayerTechMaxAllowed(Player(0), FourCC("Ropm"), 0)
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
SetPlayerTechResearched(Player(2), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(2), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhcd"), 1)
SetPlayerTechMaxAllowed(Player(2), FourCC("Rhpm"), 0)
end

function InitUpgrades_Player3()
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
SetPlayerTechResearched(Player(3), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(3), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(3), FourCC("Ruex"), 1)
end

function InitUpgrades_Player5()
SetPlayerTechResearched(Player(5), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(5), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(5), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(5), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(5), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(5), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(5), FourCC("Robf"), 1)
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
SetPlayerTechResearched(Player(5), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(5), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhfc"), 1)
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
SetPlayerTechResearched(Player(5), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(5), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(5), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(5), FourCC("Rupm"), 0)
SetPlayerTechResearched(Player(5), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhcd"), 1)
SetPlayerTechMaxAllowed(Player(5), FourCC("Rhpm"), 0)
SetPlayerTechMaxAllowed(Player(5), FourCC("Ropm"), 0)
end

function InitUpgrades_Player6()
SetPlayerTechResearched(Player(6), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(6), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(6), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(6), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(6), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(6), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(6), FourCC("Robf"), 1)
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
SetPlayerTechResearched(Player(6), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(6), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhfc"), 1)
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
SetPlayerTechResearched(Player(6), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(6), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(6), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(6), FourCC("Rupm"), 0)
SetPlayerTechResearched(Player(6), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhcd"), 1)
SetPlayerTechMaxAllowed(Player(6), FourCC("Rhpm"), 0)
SetPlayerTechMaxAllowed(Player(6), FourCC("Ropm"), 0)
end

function InitUpgrades_Player8()
SetPlayerTechResearched(Player(8), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(8), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(8), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(8), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(8), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(8), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(8), FourCC("Robf"), 1)
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
SetPlayerTechResearched(Player(8), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(8), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhfc"), 1)
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
SetPlayerTechResearched(Player(8), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(8), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(8), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(8), FourCC("Rupm"), 0)
SetPlayerTechResearched(Player(8), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhcd"), 1)
SetPlayerTechMaxAllowed(Player(8), FourCC("Rhpm"), 0)
SetPlayerTechMaxAllowed(Player(8), FourCC("Ropm"), 0)
end

function InitUpgrades_Player9()
SetPlayerTechResearched(Player(9), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(9), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(9), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(9), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(9), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(9), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(9), FourCC("Robf"), 1)
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
SetPlayerTechResearched(Player(9), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(9), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhfc"), 1)
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
SetPlayerTechResearched(Player(9), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(9), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(9), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(9), FourCC("Rupm"), 0)
SetPlayerTechResearched(Player(9), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhcd"), 1)
SetPlayerTechMaxAllowed(Player(9), FourCC("Rhpm"), 0)
SetPlayerTechMaxAllowed(Player(9), FourCC("Ropm"), 0)
end

function InitUpgrades_Player11()
SetPlayerTechResearched(Player(11), FourCC("Rome"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rora"), 3)
SetPlayerTechResearched(Player(11), FourCC("Roar"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rwdm"), 1)
SetPlayerTechResearched(Player(11), FourCC("Ropg"), 1)
SetPlayerTechResearched(Player(11), FourCC("Robs"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(11), FourCC("Roen"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rovs"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rowd"), 2)
SetPlayerTechResearched(Player(11), FourCC("Rost"), 2)
SetPlayerTechResearched(Player(11), FourCC("Rosp"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rotr"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rolf"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rowt"), 2)
SetPlayerTechResearched(Player(11), FourCC("Rorb"), 1)
SetPlayerTechResearched(Player(11), FourCC("Robk"), 1)
SetPlayerTechResearched(Player(11), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhme"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rhra"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rhhb"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhar"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rhgb"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhac"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rhde"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhan"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhpt"), 2)
SetPlayerTechResearched(Player(11), FourCC("Rhst"), 2)
SetPlayerTechResearched(Player(11), FourCC("Rhla"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rhlh"), 2)
SetPlayerTechResearched(Player(11), FourCC("Rhri"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhse"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhfl"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhss"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhrt"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhfc"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rume"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rura"), 3)
SetPlayerTechResearched(Player(11), FourCC("Ruar"), 3)
SetPlayerTechResearched(Player(11), FourCC("Ruac"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rugf"), 1)
SetPlayerTechResearched(Player(11), FourCC("Ruwb"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rusf"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rune"), 2)
SetPlayerTechResearched(Player(11), FourCC("Ruba"), 2)
SetPlayerTechResearched(Player(11), FourCC("Rufb"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rusl"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rucr"), 3)
SetPlayerTechResearched(Player(11), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rusm"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rubu"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rusp"), 1)
SetPlayerTechResearched(Player(11), FourCC("Ruex"), 1)
SetPlayerTechMaxAllowed(Player(11), FourCC("Rupm"), 0)
SetPlayerTechResearched(Player(11), FourCC("Rhfs"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhcd"), 1)
SetPlayerTechMaxAllowed(Player(11), FourCC("Rhpm"), 0)
SetPlayerTechMaxAllowed(Player(11), FourCC("Ropm"), 0)
end

function InitUpgrades()
InitUpgrades_Player0()
InitUpgrades_Player2()
InitUpgrades_Player3()
InitUpgrades_Player5()
InitUpgrades_Player6()
InitUpgrades_Player8()
InitUpgrades_Player9()
InitUpgrades_Player11()
end

function InitCustomPlayerSlots()
SetPlayerStartLocation(Player(0), 0)
ForcePlayerStartLocation(Player(0), 0)
SetPlayerColor(Player(0), ConvertPlayerColor(0))
SetPlayerRacePreference(Player(0), RACE_PREF_ORC)
SetPlayerRaceSelectable(Player(0), false)
SetPlayerController(Player(0), MAP_CONTROL_COMPUTER)
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
SetPlayerColor(Player(3), ConvertPlayerColor(3))
SetPlayerRacePreference(Player(3), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(3), false)
SetPlayerController(Player(3), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(5), 4)
ForcePlayerStartLocation(Player(5), 4)
SetPlayerColor(Player(5), ConvertPlayerColor(5))
SetPlayerRacePreference(Player(5), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(5), false)
SetPlayerController(Player(5), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(6), 5)
ForcePlayerStartLocation(Player(6), 5)
SetPlayerColor(Player(6), ConvertPlayerColor(6))
SetPlayerRacePreference(Player(6), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(6), false)
SetPlayerController(Player(6), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(8), 6)
ForcePlayerStartLocation(Player(8), 6)
SetPlayerColor(Player(8), ConvertPlayerColor(8))
SetPlayerRacePreference(Player(8), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(8), false)
SetPlayerController(Player(8), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(9), 7)
ForcePlayerStartLocation(Player(9), 7)
SetPlayerColor(Player(9), ConvertPlayerColor(9))
SetPlayerRacePreference(Player(9), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(9), false)
SetPlayerController(Player(9), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(11), 8)
ForcePlayerStartLocation(Player(11), 8)
SetPlayerColor(Player(11), ConvertPlayerColor(11))
SetPlayerRacePreference(Player(11), RACE_PREF_ORC)
SetPlayerRaceSelectable(Player(11), false)
SetPlayerController(Player(11), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
SetPlayerTeam(Player(3), 0)
SetPlayerState(Player(3), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(5), 0)
SetPlayerState(Player(5), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(6), 0)
SetPlayerState(Player(6), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(3), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(5), true)
SetPlayerTeam(Player(0), 1)
SetPlayerState(Player(0), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(1), 1)
SetPlayerState(Player(1), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(2), 1)
SetPlayerState(Player(2), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(8), 1)
SetPlayerState(Player(8), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(9), 1)
SetPlayerState(Player(9), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(11), 1)
SetPlayerState(Player(11), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(9), true)
end

function InitAllyPriorities()
SetStartLocPrioCount(1, 2)
SetStartLocPrio(1, 0, 4, MAP_LOC_PRIO_LOW)
SetStartLocPrio(1, 1, 6, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(4, 2)
SetStartLocPrio(4, 0, 6, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(8, 1)
SetStartLocPrio(8, 0, 7, MAP_LOC_PRIO_HIGH)
end

function main()
local we

SetCameraBounds(-14336.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -14336.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 13568.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 13312.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -14336.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 13312.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 13568.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -14336.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
SetTerrainFogEx(0, 1000.0, 4000.0, 0.700, 1.000, 1.000, 1.000)
SetWaterBaseColor(0, 0, 128, 255)
we = AddWeatherEffect(Rect(-14336.0, -14336.0, 14336.0, 14336.0), FourCC("SNhs"))
EnableWeatherEffect(we, true)
NewSoundEnvironment("Default")
SetAmbientDaySound("IceCrownDay")
SetAmbientNightSound("IceCrownNight")
SetMapMusic("Music", true, 0)
InitSounds()
CreateRegions()
CreateCameras()
InitUpgrades()
CreateAllDestructables()
CreateAllUnits()
InitBlizzard()
InitGlobals()
InitCustomTriggers()
end

function config()
SetMapName("TRIGSTR_003")
SetMapDescription("TRIGSTR_005")
SetPlayers(9)
SetTeams(9)
SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
DefineStartLocation(0, 1856.0, -8384.0)
DefineStartLocation(1, -7360.0, 8512.0)
DefineStartLocation(2, -10496.0, 8896.0)
DefineStartLocation(3, 11712.0, 10816.0)
DefineStartLocation(4, 6016.0, 4096.0)
DefineStartLocation(5, -1408.0, 8448.0)
DefineStartLocation(6, 9344.0, 6272.0)
DefineStartLocation(7, 11776.0, 1536.0)
DefineStartLocation(8, 3776.0, 5760.0)
InitCustomPlayerSlots()
InitCustomTeams()
InitAllyPriorities()
end

