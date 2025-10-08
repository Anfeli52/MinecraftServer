// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:nightmare_sword' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:nightmare_sword', [
    'abc',
    'def',
    'ghi'
  ], {
    a: 'lethality:defiled_greatsword',
    b: 'lethality:grievance',
    c: 'lethality:gamblers_blade',
    d: 'lethality:vehemence',
    e: 'lethality:nightfall',
    f: 'lethality:sacrifice',
    g: 'lethality:violence',
    h: 'lethality:gaels_greatsword',
    i: 'lethality:devils_devastation'
  });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:grievance', [
    'abc',
    'feb',
    'gfa'
  ], {
    a: 'lethality:annihilation_alloy',
    b: 'terramity:profanum',
    c: 'terramity:spiteful_soul',
    e: 'fantasy_weapons:weapon_volcano_flame',
    f: 'enigmaticlegacy:evil_essence',
    g: 'terramity:murasama',
    i: 'lethality:annihilation_alloy'
  }).id('lethality:grievance');
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:vehemence' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:vehemence', [
    ' bc',
    'def',
    'ghi'
  ], {
    b: 'terramity:antiprism',
    c: 'enigmaticlegacy:evil_essence',
    d: 'terramity:antiprism',
    e: 'enigmaticlegacy:evil_ingot',
    f: 'enigmaticlegacy:evil_essence',
    g: 'terramity:axe_of_unholy_divinity',
    h: 'terramity:spiteful_soul',
    i: 'terramity:spectral_soul'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:sacrifice' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:sacrifice', [
    ' ab',
    'aca',
    'da '
  ], {
    a: 'lethality:annihilation_alloy',
    b: 'enigmaticlegacy:evil_ingot',
    c: 'enigmaticlegacy:twisted_heart',
    d: 'goety:dark_sword'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:violence' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:violence', [
    'abc',
    'deb',
    'bda'
  ], {
    a: 'enigmaticlegacy:evil_ingot',
    b: 'terramity:unholy_lance',
    c: 'terramity:sword_of_the_imprisoned',
    d: 'terramity:spiteful_soul',
    e: 'macabre:gargamaw_heart'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:gamblers_blade' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:gamblers_blade', [
    'abc',
    'deb',
    'gha'
  ], {
    a: 'terramity:topaz_block',
    b: 'terramity:prismatic_jewel',
    c: 'goety_revelation:gold_feather',
    d: 'terramity:lucky_dice',
    e: 'lethality:annihilation_alloy',
    g: 'lethality:midas_touch',
    h: 'terramity:ultra_sniffer_fur'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:midas_touch' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:midas_touch', [
    '  a',
    'ba ',
    'cb '
  ], {
    a: 'terramity:profanum',
    b: 'terramity:topaz_block',
    c: 'terramity:excalibur'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:tainted_blade' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:tainted_blade', [
    ' aa',
    'abc',
    'dc '
  ], {
    a: 'terramity:ruby',
    b: 'minecraft:fermented_spider_eye',
    c: 'terramity:spiteful_soul',
    d: 'terramity:dimlite_sword'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:caustic_edge' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:caustic_edge', [
    ' aa',
    'bca',
    'db '
  ], {
    a: 'terramity:ruby_block',
    b: 'terramity:spiteful_soul',
    c: 'terramity:warden_soul',
    d: 'lethality:tainted_blade'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:blighted_cleaver' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:blighted_cleaver', [
    ' ab',
    'aca',
    'da '
  ], {
    a: 'minecraft:bedrock',
    b: 'minecraft:wither_skeleton_skull',
    c: 'terramity:crescent_moonblade',
    d: 'lethality:caustic_edge'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:defiled_greatsword' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:defiled_greatsword', [
    'abc',
    'deb',
    'fda'
  ], {
    a: 'terramity:antiprism',
    b: 'terramity:warden_soul',
    c: 'lethality:annihilation_alloy',
    d: 'terramity:exodium_superalloy',
    e: 'terramity:sword_of_the_imprisoned',
    f: 'lethality:blighted_cleaver'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:hf_meowrasama' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:hf_meowrasama', [
    'dab',
    'aba',
    'cad'
  ], {
    a: 'lethality:pixie_alloy',
    b: 'terramity:hellspec_alloy',
    c: 'terramity:murasama',
    d: 'lethality:soft_cloth',
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:bladecrest_oathsword' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:bladecrest_oathsword', [
    'abc',
    'bdb',
    'eba'
  ], {
    a: 'terramity:spiteful_soul',
    b: 'minecraft:netherite_scrap',
    c: 'terramity:pot_of_hot_coals',
    d: 'terramity:hellspec_alloy',
    e: 'terramity:cosmilite_sword'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:forbidden_oathblade' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:forbidden_oathblade', [
    'abc',
    'deb',
    'fda'
  ], {
    a: 'terramity:cosmilite_ingot',
    b: 'terramity:profanum',
    c: 'terramity:daemonium_block',
    d: 'minecraft:netherite_ingot',
    e: 'terramity:eternal_shadowflame',
    f: 'lethality:bladecrest_oathsword'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:exalted_oathblade' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:exalted_oathblade', [
    'abb',
    'cdb',
    'eca'
  ], {
    a: 'terramity:black_matter',
    b: 'terramity:antiprism',
    c: 'terramity:profanum',
    d: 'terramity:flameburst_belt',
    e: 'lethality:forbidden_oathblade'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:devils_devastation' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:devils_devastation', [
    'abc',
    'deb',
    'fda'
  ], {
    a: 'minecraft:bedrock',
    b: 'terramity:burning_spirit_ring',
    c: 'lethality:annihilation_alloy',
    d: 'terramity:nyxium',
    e: 'terramity:sword_of_the_imprisoned',
    f: 'lethality:exalted_oathblade'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:real_knife' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:real_knife', [
    'aab',
    'aca',
    'daa'
  ], {
    a: 'terramity:spiteful_soul',
    b: 'terramity:murasama',
    c: 'lethality:pixie_alloy',
    d: 'terramity:exodium_sword'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:gaels_greatsword' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:gaels_greatsword', [
    'abe',
    'fgb',
    'hfa'
  ], {
    a: 'minecraft:bedrock',
    b: 'terramity:exodium_superalloy',
    e: 'macabre:morphegor_heart',
    f: 'lethality:annihilation_alloy',
    g: 'enigmaticlegacy:ender_slayer',
    h: 'terramity:sword_of_the_imprisoned'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:nightfall' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:nightfall', [
    'abe',
    'fhb',
    'gfa'
  ], {
    a: 'terramity:opaline_moonstone',
    b: 'terramity:warden_soul',
    e: 'terramity:dimlite_block',
    f: 'soulsweapons:soul_ingot',
    g: 'terramity:hellrok_gigaton_hammer',
    h: 'minecraft:bedrock'
  });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'lethality:starlight' });
});

ServerEvents.recipes(event => {
  event.shaped('lethality:starlight', [
    ' be',
    'fab',
    'gf '
  ], {
    b: 'terramity:reverium',
    f: 'lethality:pixie_alloy',
    e: 'enigmaticlegacy:angel_blessing',
    a: 'enigmaticaddons:pure_heart',
    g: 'terramity:hero_sword'
  });
});