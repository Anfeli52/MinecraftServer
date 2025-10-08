// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
    event.remove({ id: 'macabre:valamon_cursed_armor_rec' })
    event.remove({ id: 'macabre:gomoria_cursed_armor_rec' })
    event.remove({ id: 'macabre:baal_cursed_armor_rec' })
    event.remove({ id: 'macabre:gargamaw_cursed_armor_rec' })
});

ServerEvents.recipes(event => {
    event.shaped('macabre:valamon_pack', [
      ' a ',
      'dEb',
      ' c '
    ], {
      E: 'macabre:valamon_heart',
      a: 'macabre:morphegor_armor_helmet',
      b: 'macabre:morphegor_armor_leggings',
      c: 'macabre:morphegor_armor_boots',
      d: 'macabre:morphegor_armor_chestplate',
    });
});

ServerEvents.recipes(event => {
    event.shaped('macabre:gomoria_pack', [
      ' a ',
      'dEb',
      ' c '
    ], {
      E: 'macabre:gomoria_heart',
      a: 'macabre:valamon_armor_helmet',
      b: 'macabre:valamon_armor_leggings',
      c: 'macabre:valamon_armor_boots',
      d: 'macabre:valamon_armor_chestplate',
    });
});

ServerEvents.recipes(event => {
    event.shaped('macabre:baal_pack', [
      ' a ',
      'dEb',
      ' c '
    ], {
      E: 'macabre:baal_heart',
      a: 'macabre:gomoria_armor_helmet',
      b: 'macabre:gomoria_armor_leggings',
      c: 'macabre:gomoria_armor_boots',
      d: 'macabre:gomoria_armor_chestplate',
    });
});

ServerEvents.recipes(event => {
    event.shaped('macabre:gargamaw_pack', [
      ' a ',
      'dEb',
      ' c '
    ], {
      E: 'macabre:gargamaw_heart',
      a: 'macabre:baal_armor_helmet',
      b: 'macabre:baal_armor_leggings',
      c: 'macabre:baal_armor_boots',
      d: 'macabre:baal_armor_chestplate',
    });
});

