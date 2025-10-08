ServerEvents.tags('item', event => {
    // Remove specific materials from the #minecraft:trim_materials tag                                                                                                                                                                                                                 made by blueversal                                                                                                                                                                              beyond depth
    event.remove('minecraft:trim_materials', 'cataclysm:witherite_ingot')
    event.remove('minecraft:trim_materials', 'cataclysm:ancient_metal_ingot')
    event.remove('minecraft:trim_materials', 'cataclysm:cursium_ingot')
    event.remove('minecraft:trim_materials', 'cataclysm:ignitium_ingot')
    event.remove('minecraft:trim_materials', 'palegardenbackport:resin_clump')
    event.remove('minecraft:trim_materials', 'undergarden:froststeel_ingot')
    event.remove('minecraft:trim_materials', 'undergarden:forgotten_ingot')
    event.remove('minecraft:trim_materials', 'undergarden:cloggrum_ingot')
    event.remove('minecraft:trim_materials', 'rubinated_nether:ruby')
    event.remove('minecraft:trim_materials', 'undergarden:utherium_crystal')
    event.remove('minecraft:trim_materials', 'undergarden:regalium_crystal')
    event.remove('minecraft:trim_materials', 'upgrade_aquatic:thrasher_tooth')    
    event.remove('minecraft:trimmable_armor', 'additionaladditions:gilded_netherite_helmet')
    event.remove('minecraft:trimmable_armor', 'additionaladditions:gilded_netherite_chestplate')
    event.remove('minecraft:trimmable_armor', 'additionaladditions:gilded_netherite_leggings')
    event.remove('minecraft:trimmable_armor', 'additionaladditions:gilded_netherite_boots')
    event.remove('minecraft:trimmable_armor', 'biomemakeover:cladded_helmet')
    event.remove('minecraft:trimmable_armor', 'biomemakeover:cladded_chestplate')
    event.remove('minecraft:trimmable_armor', 'biomemakeover:cladded_leggings')
    event.remove('minecraft:trimmable_armor', 'biomemakeover:cladded_boots')
    event.remove('minecraft:trim_materials', 'goety:dark_ingot')
    event.remove('minecraft:trim_materials', 'goety:jade')
    event.remove('minecraft:trim_materials', 'goety:cursed_ingot')
    event.remove('minecraft:trim_materials', 'goety:ectoplasm')
    event.remove('minecraft:trim_materials', 'aether:zanite_gemstone')
    event.remove('minecraft:trim_materials', 'aether:golden_amber')
    event.remove('minecraft:trim_materials', 'deep_aether:skyjade')
    event.remove('minecraft:trim_materials', 'deep_aether:stratus_ingot')
    event.remove('minecraft:trim_materials', 'ancient_aether:valkyrum')
    event.remove('minecraft:trim_materials', 'ancient_aether:atmosine_crystal')
    event.remove('minecraft:trim_materials', 'call_of_yucutan:ancient_gold_ingot')
    event.remove('minecraft:trim_materials', 'call_of_yucutan:hematite')
    event.remove('minecraft:trim_materials', 'call_of_yucutan:jade')
    event.remove('minecraft:trim_materials', 'regions_unexplored:prismarite_cluster')
    event.remove('minecraft:trim_materials', 'aether_redux:gravitite_ingot')
  });

EntityEvents.spawned('macabre:valamon_eye', event => {
  event.cancel()
});


EntityEvents.spawned('macabre:valamon_eye_2', event => {
  event.cancel()
});
