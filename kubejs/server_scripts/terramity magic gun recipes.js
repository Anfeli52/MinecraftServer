// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
    event.remove({ id: 'terramity:anti_material_rifle_recipe' })
    event.remove({ id: 'terramity:vulcan_recipe' })
    event.remove({ id: 'terramity:celestial_sixty_recipe' })
    event.remove({ id: 'terramity:five_thousand_magnum_recipe' })
    event.remove({ id: 'terramity:gaias_tempest_recipe' })
    event.remove({ id: 'terramity:onyx_storm_recipe' })
    event.remove({ id: 'terramity:plaguebringer_recipe' })
    event.remove({ id: 'terramity:hellfire_flurry_recipe' })
    event.remove({ id: 'terramity:meteor_cannon_recipe' })
    event.remove({ id: 'terramity:anti_material_rifle_recipe' })
    event.remove({ id: 'terramity:divine_intervention_recipe' })
    event.remove({ id: 'terramity:requiem_recipe' })
});

ServerEvents.recipes(event => {
    event.shaped('terramity:anti_material_rifle', [
      'eEe',
      'aaa',
      'eEe'
    ], {
      e: 'terramity:daemonium',
      E: 'terramity:advanced_gun_parts',
      a: 'terramity:dimlite_ingot',
    });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:vulcan', [
    'aaa',
    'eEe',
    'eEe'
  ], {
    e: 'terramity:nyxium',
    E: 'terramity:advanced_gun_parts',
    a: 'terramity:decayed_bedrock_dust',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:celestial_sixty', [
    '   ',
    'eEe',
    'aAa'
  ], {
    e: 'terramity:daemonium_chunk',
    E: 'terramity:onyx',
    a: 'terramity:cosmilite_ingot',
    A: 'terramity:advanced_gun_parts',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:five_thousand_magnum', [
    ' aE',
    'eee',
    'Ea '
  ], {
    e: 'terramity:exodium_superalloy',
    E: 'terramity:advanced_gun_parts',
    a: 'terramity:cracked_microcosm',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:gaias_tempest', [
    'eae',
    'EEE',
    'eee'
  ], {
    e: 'minecraft:wheat_seeds',
    E: 'terramity:virentium_alloy_ingot',
    a: 'minecraft:spore_blossom',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:onyx_storm', [
    'eEe',
    'EeE',
    'eEe'
  ], {
    e: 'minecraft:netherite_scrap',
    E: 'terramity:onyx',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:plaguebringer', [
    'aea',
    'EEE',
    'AeA'
  ], {
    e: 'terramity:gaianite_cluster',
    E: 'terramity:virentium_alloy_ingot',
    a: 'minecraft:spider_eye',
    A: 'terramity:topaz',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:hellfire_flurry', [
    'aea',
    'EEE',
    ' e '
  ], {
    e: 'terramity:spiteful_soul',
    E: 'terramity:hellspec_alloy',
    a: 'minecraft:dragon_breath',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:meteor_cannon', [
    'eee',
    'EEE',
    'aaa'
  ], {
    e: 'terramity:onyx',
    E: 'terramity:cosmilite_ingot',
    a: 'terramity:daemonium',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:divine_intervention', [
    ' e ',
    'EEE',
    'aaa'
  ], {
    e: 'terramity:advanced_gun_parts',
    E: 'terramity:reverium',
    a: 'terramity:angel_feather',
  });
});

ServerEvents.recipes(event => {
  event.shaped('terramity:requiem', [
    'AEA',
    'aea',
    'AEA'
  ], {
    e: 'terramity:advanced_gun_parts',
    E: 'terramity:iridium',
    a: 'terramity:chthonic_crystal',
    A: 'terramity:daemonium'
  });
});


ServerEvents.recipes(event => {
  event.shaped('terramity:occult_fabric', [
    ' e ',
    'eEe',
    ' e '
  ], {
    e: 'terramity:fairy_dust',
    E: 'terramity:prismatic_jewel',
  }).result('3x terramity:occult_fabric')
});