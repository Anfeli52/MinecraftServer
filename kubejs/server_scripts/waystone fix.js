// Made by Blueversal
BlockEvents.broken("waystones:waystone", event => { 
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&            
      item.id != "lost_aether_content:phoenix_pickaxe" &&
      item.id != "ancient_aether:divine_pickaxe" &&
      item.id != "ancient_aether:valkyrum_pickaxe" &&
      item.id != "terramity:devastation" &&
      item.id != "deep_aether:stratus_pickaxe" &&
      item.id != "enigmaticlegacy:etherium_pickaxe" &&
      item.id != "iceandfire:dragonbone_pickaxe" &&
      item.id != "iceandfire:dragonsteel_fire_pickaxe" &&
      item.id != "iceandfire:dragonsteel_ice_pickaxe" &&
      item.id != "iceandfire:dragonsteel_lightning_pickaxe" &&
      item.id != "majruszdifficulty:enderium_pickaxe" &&
      item.id != "stalwart_dungeons:chorundum_pickaxe" &&
      item.id != "terramity:dimlite_pickaxe" &&
      item.id != "terramity:virentium_pickaxe" &&
      item.id != "terramity:cosmilite_pickaxe" &&
      item.id != "terramity:iridium_pickaxe" &&
      item.id != "terramity:void_pickaxe" &&
      item.id != "terramity:conductite_pickaxe" &&
      item.id != "terramity:hellspec_pickaxe" &&
      item.id != "terramity:nyxium_pickaxe" &&
      item.id != "terramity:exodium_pickaxe" &&
      item.id != "terramity:reverium_pickaxe" &&
      item.id != "dungeons_and_combat:titanium_pickaxe" &&
      item.id != "dungeons_and_combat:blessed_gold_pickaxe" &&
      item.id != "dungeons_and_combat:molten_dark_steel_pickaxe" &&
      item.id != "dungeons_and_combat:crimson_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})

BlockEvents.broken("waystones:mossy_waystone", event => {
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&            
      item.id != "lost_aether_content:phoenix_pickaxe" &&
      item.id != "ancient_aether:divine_pickaxe" &&
      item.id != "ancient_aether:valkyrum_pickaxe" &&
      item.id != "terramity:devastation" &&
      item.id != "deep_aether:stratus_pickaxe" &&
      item.id != "enigmaticlegacy:etherium_pickaxe" &&
      item.id != "iceandfire:dragonbone_pickaxe" &&
      item.id != "iceandfire:dragonsteel_fire_pickaxe" &&
      item.id != "iceandfire:dragonsteel_ice_pickaxe" &&
      item.id != "iceandfire:dragonsteel_lightning_pickaxe" &&
      item.id != "majruszdifficulty:enderium_pickaxe" &&
      item.id != "stalwart_dungeons:chorundum_pickaxe" &&
      item.id != "terramity:dimlite_pickaxe" &&
      item.id != "terramity:virentium_pickaxe" &&
      item.id != "terramity:cosmilite_pickaxe" &&
      item.id != "terramity:iridium_pickaxe" &&
      item.id != "terramity:void_pickaxe" &&
      item.id != "terramity:conductite_pickaxe" &&
      item.id != "terramity:hellspec_pickaxe" &&
      item.id != "terramity:nyxium_pickaxe" &&
      item.id != "terramity:exodium_pickaxe" &&
      item.id != "terramity:reverium_pickaxe" &&
      item.id != "dungeons_and_combat:titanium_pickaxe" &&
      item.id != "dungeons_and_combat:blessed_gold_pickaxe" &&
      item.id != "dungeons_and_combat:molten_dark_steel_pickaxe" &&
      item.id != "dungeons_and_combat:crimson_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})

BlockEvents.broken("waystones:sandy_waystone", event => {
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&            
      item.id != "lost_aether_content:phoenix_pickaxe" &&
      item.id != "ancient_aether:divine_pickaxe" &&
      item.id != "ancient_aether:valkyrum_pickaxe" &&
      item.id != "terramity:devastation" &&
      item.id != "deep_aether:stratus_pickaxe" &&
      item.id != "enigmaticlegacy:etherium_pickaxe" &&
      item.id != "iceandfire:dragonbone_pickaxe" &&
      item.id != "iceandfire:dragonsteel_fire_pickaxe" &&
      item.id != "iceandfire:dragonsteel_ice_pickaxe" &&
      item.id != "iceandfire:dragonsteel_lightning_pickaxe" &&
      item.id != "majruszdifficulty:enderium_pickaxe" &&
      item.id != "stalwart_dungeons:chorundum_pickaxe" &&
      item.id != "terramity:dimlite_pickaxe" &&
      item.id != "terramity:virentium_pickaxe" &&
      item.id != "terramity:cosmilite_pickaxe" &&
      item.id != "terramity:iridium_pickaxe" &&
      item.id != "terramity:void_pickaxe" &&
      item.id != "terramity:conductite_pickaxe" &&
      item.id != "terramity:hellspec_pickaxe" &&
      item.id != "terramity:nyxium_pickaxe" &&
      item.id != "terramity:exodium_pickaxe" &&
      item.id != "terramity:reverium_pickaxe" &&
      item.id != "dungeons_and_combat:titanium_pickaxe" &&
      item.id != "dungeons_and_combat:blessed_gold_pickaxe" &&
      item.id != "dungeons_and_combat:molten_dark_steel_pickaxe" &&
      item.id != "dungeons_and_combat:crimson_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})

BlockEvents.broken("waystones:blackstone_waystone", event => { 
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&            
      item.id != "lost_aether_content:phoenix_pickaxe" &&
      item.id != "ancient_aether:divine_pickaxe" &&
      item.id != "ancient_aether:valkyrum_pickaxe" &&
      item.id != "terramity:devastation" &&
      item.id != "deep_aether:stratus_pickaxe" &&
      item.id != "enigmaticlegacy:etherium_pickaxe" &&
      item.id != "iceandfire:dragonbone_pickaxe" &&
      item.id != "iceandfire:dragonsteel_fire_pickaxe" &&
      item.id != "iceandfire:dragonsteel_ice_pickaxe" &&
      item.id != "iceandfire:dragonsteel_lightning_pickaxe" &&
      item.id != "majruszdifficulty:enderium_pickaxe" &&
      item.id != "stalwart_dungeons:chorundum_pickaxe" &&
      item.id != "terramity:dimlite_pickaxe" &&
      item.id != "terramity:virentium_pickaxe" &&
      item.id != "terramity:cosmilite_pickaxe" &&
      item.id != "terramity:iridium_pickaxe" &&
      item.id != "terramity:void_pickaxe" &&
      item.id != "terramity:conductite_pickaxe" &&
      item.id != "terramity:hellspec_pickaxe" &&
      item.id != "terramity:nyxium_pickaxe" &&
      item.id != "terramity:exodium_pickaxe" &&
      item.id != "terramity:reverium_pickaxe" &&
      item.id != "dungeons_and_combat:titanium_pickaxe" &&
      item.id != "dungeons_and_combat:blessed_gold_pickaxe" &&
      item.id != "dungeons_and_combat:molten_dark_steel_pickaxe" &&
      item.id != "dungeons_and_combat:crimson_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})

BlockEvents.broken("waystones:deepslate_waystone", event => { 
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&            
      item.id != "lost_aether_content:phoenix_pickaxe" &&
      item.id != "ancient_aether:divine_pickaxe" &&
      item.id != "ancient_aether:valkyrum_pickaxe" &&
      item.id != "terramity:devastation" &&
      item.id != "deep_aether:stratus_pickaxe" &&
      item.id != "enigmaticlegacy:etherium_pickaxe" &&
      item.id != "iceandfire:dragonbone_pickaxe" &&
      item.id != "iceandfire:dragonsteel_fire_pickaxe" &&
      item.id != "iceandfire:dragonsteel_ice_pickaxe" &&
      item.id != "iceandfire:dragonsteel_lightning_pickaxe" &&
      item.id != "majruszdifficulty:enderium_pickaxe" &&
      item.id != "stalwart_dungeons:chorundum_pickaxe" &&
      item.id != "terramity:dimlite_pickaxe" &&
      item.id != "terramity:virentium_pickaxe" &&
      item.id != "terramity:cosmilite_pickaxe" &&
      item.id != "terramity:iridium_pickaxe" &&
      item.id != "terramity:void_pickaxe" &&
      item.id != "terramity:conductite_pickaxe" &&
      item.id != "terramity:hellspec_pickaxe" &&
      item.id != "terramity:nyxium_pickaxe" &&
      item.id != "terramity:exodium_pickaxe" &&
      item.id != "terramity:reverium_pickaxe" &&
      item.id != "dungeons_and_combat:titanium_pickaxe" &&
      item.id != "dungeons_and_combat:blessed_gold_pickaxe" &&
      item.id != "dungeons_and_combat:molten_dark_steel_pickaxe" &&
      item.id != "dungeons_and_combat:crimson_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})

BlockEvents.broken("waystones:end_stone_waystone", event => { 
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&            
      item.id != "lost_aether_content:phoenix_pickaxe" &&
      item.id != "ancient_aether:divine_pickaxe" &&
      item.id != "ancient_aether:valkyrum_pickaxe" &&
      item.id != "terramity:devastation" &&
      item.id != "deep_aether:stratus_pickaxe" &&
      item.id != "enigmaticlegacy:etherium_pickaxe" &&
      item.id != "iceandfire:dragonbone_pickaxe" &&
      item.id != "iceandfire:dragonsteel_fire_pickaxe" &&
      item.id != "iceandfire:dragonsteel_ice_pickaxe" &&
      item.id != "iceandfire:dragonsteel_lightning_pickaxe" &&
      item.id != "majruszdifficulty:enderium_pickaxe" &&
      item.id != "stalwart_dungeons:chorundum_pickaxe" &&
      item.id != "terramity:dimlite_pickaxe" &&
      item.id != "terramity:virentium_pickaxe" &&
      item.id != "terramity:cosmilite_pickaxe" &&
      item.id != "terramity:iridium_pickaxe" &&
      item.id != "terramity:void_pickaxe" &&
      item.id != "terramity:conductite_pickaxe" &&
      item.id != "terramity:hellspec_pickaxe" &&
      item.id != "terramity:nyxium_pickaxe" &&
      item.id != "terramity:exodium_pickaxe" &&
      item.id != "terramity:reverium_pickaxe" &&
      item.id != "dungeons_and_combat:titanium_pickaxe" &&
      item.id != "dungeons_and_combat:blessed_gold_pickaxe" &&
      item.id != "dungeons_and_combat:molten_dark_steel_pickaxe" &&
      item.id != "dungeons_and_combat:crimson_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})