// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
    event.remove({ id: 'soulsweapons:chungus_monolith' })
    event.remove({ id: 'soulsweapons:galeforce' })
    event.remove({ id: 'soulsweapons:kraken_slayer_crossbow' })

});

ServerEvents.recipes(event => {
    event.shaped('soulsweapons:chungus_monolith', [
      'EEE',
      'EeE',
      'EEE'
    ], {
      e: 'minecraft:golden_carrot',
      E: 'soulsweapons:chungus_emerald_block'
    });
});

ServerEvents.recipes(event => {
    event.shaped('soulsweapons:galeforce', [
      'EAa',
      'Aea',
      'EAa'
    ], {
      e: '#soulsweapons:lord_soul',
      E: 'soulsweapons:chungus_emerald_block',
      a: 'minecraft:string',
      A: 'soulsweapons:moonstone'
    });
});

ServerEvents.recipes(event => {
    event.shaped('soulsweapons:kraken_slayer_crossbow', [
      'eAE',
      'AaA',
      'EAe'
    ], {
      e: '#soulsweapons:lord_soul',
      E: 'soulsweapons:chungus_emerald_block',
      A: 'minecraft:gold_block',
      a: 'minecraft:crossbow'
    });
});