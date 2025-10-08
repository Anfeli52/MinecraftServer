// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
    event.remove({ id: 'enigmaticlegacy:the_cube' })
    event.remove({ id: 'enigmaticlegacy:eldritch_pan' })
    event.remove({ id: 'enigmaticlegacy:desolation_ring' })
    event.remove({ id: 'enigmaticaddons:chaos_elytra' })
    event.remove({ id: 'enigmaticaddons:violence_scroll' })
});

ServerEvents.recipes(event => {
    event.shaped('enigmaticlegacy:the_cube', [
      'abc',
      'ABC',
      'xyz'
    ], {
      a: 'enigmaticlegacy:golem_heart',
      b: 'enigmaticlegacy:cosmic_heart',
      c: 'enigmaticlegacy:blazing_core',
      A: 'enigmaticlegacy:angel_blessing',
      B: 'terramity:malediction_bracelets',
      C: 'enigmaticlegacy:eye_of_nebula',
      x: 'enigmaticlegacy:ocean_stone',
      y: 'enigmaticlegacy:cosmic_heart',
      z: 'minecraft:dragon_egg',
    });
});

ServerEvents.recipes(event => {
    event.shaped('enigmaticlegacy:eldritch_pan', [
      'zyz',
      'eAe',
      'xaE'
    ], {
      a: 'enigmaticlegacy:ender_rod',
      E: 'macabre:gargamaw_heart',
      e: 'enigmaticlegacy:evil_ingot',
      A: 'enigmaticlegacy:abyssal_heart',
      z: 'enigmaticlegacy:evil_essence',
      y: 'enigmaticlegacy:void_stone',
      x: 'lethality:nightmare_sword'
    });
});

ServerEvents.recipes(event => {
    event.shaped('enigmaticlegacy:desolation_ring', [
      'zyz',
      'eAe',
      'EaE'
    ], {
      a: 'goety:void_crown',
      E: 'enigmaticlegacy:evil_essence',
      e: 'minecraft:netherite_ingot',
      A: 'enigmaticlegacy:golden_ring',
      z: 'enigmaticlegacy:cosmic_heart',
      y: 'enigmaticlegacy:abyssal_heart'
    });
});

ServerEvents.recipes(event => {
    event.shaped('enigmaticaddons:chaos_elytra', [
      'zyz',
      'eAe',
      'EaE'
    ], {
      a: 'goety:void_crown',
      E: 'enigmaticlegacy:evil_essence',
      e: 'enigmaticlegacy:evil_ingot',
      A: 'minecraft:elytra',
      z: 'enigmaticlegacy:cosmic_heart',
      y: 'enigmaticlegacy:abyssal_heart'
    });
});

ServerEvents.recipes(event => {
  event.shaped('enigmaticaddons:violence_scroll', [
    'aba',
    'ded',
    'ghg'
  ], {
    a: 'enigmaticlegacy:cosmic_heart',
    b: 'enigmaticlegacy:abyssal_heart',
    d: 'enigmaticlegacy:evil_essence',
    e: 'goety_revelation:blessing_scroll',
    g: 'enigmaticlegacy:twisted_heart',
    h: 'enigmaticlegacy:curse_transposer'
  });
});