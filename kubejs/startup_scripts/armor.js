// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ItemEvents.modification(event => {
  event.modify('golden_pickaxe', item => {
    item.tier = tier => {
        tier.speed = 12
        tier.repairIngredient = '#forge:storage_blocks/gold'
        tier.level = 2
    }
  })
});

ItemEvents.modification(event => {
  event.modify('macabre:baal_armor_helmet', item => {
    item.armorProtection = 13;
    item.armorToughness = 9;
  });
  event.modify('macabre:baal_armor_chestplate', item => {
    item.armorProtection = 18;
    item.armorToughness = 10;
  });
  event.modify('macabre:baal_armor_leggings', item => {
    item.armorProtection = 16;
    item.armorToughness = 10;
  });
  event.modify('macabre:baal_armor_boots', item => {
    item.armorProtection = 8;
    item.armorToughness = 9;
  });
  event.modify('macabre:gomoria_armor_helmet', item => {
    item.armorProtection = 12;
    item.armorToughness = 9;
  });
  event.modify('macabre:gomoria_armor_chestplate', item => {
    item.armorProtection = 16;
    item.armorToughness = 8;
  });
  event.modify('macabre:gomoria_armor_leggings', item => {
    item.armorProtection = 15;
    item.armorToughness = 9;
  });
  event.modify('macabre:gomoria_armor_boots', item => {
    item.armorProtection = 10;
    item.armorToughness = 9;
  });
  event.modify('macabre:valamon_armor_helmet', item => {
    item.armorProtection = 10;
    item.armorToughness = 7;
  });
  event.modify('macabre:valamon_armor_chestplate', item => {
    item.armorProtection = 15;
    item.armorToughness = 8;
  });
  event.modify('macabre:valamon_armor_leggings', item => {
    item.armorProtection = 13;
    item.armorToughness = 8;
  });
  event.modify('macabre:valamon_armor_boots', item => {
    item.armorProtection = 9;
    item.armorToughness = 8;
  });
  event.modify('macabre:gargamaw_armor_helmet', item => {
    item.armorProtection = 14;
    item.armorToughness = 10;
  });
  event.modify('macabre:gargamaw_armor_chestplate', item => {
    item.armorProtection = 18;
    item.armorToughness = 12;
  });
  event.modify('macabre:gargamaw_armor_leggings', item => {
    item.armorProtection = 18;
    item.armorToughness = 10;
  });
  event.modify('macabre:gargamaw_armor_boots', item => {
    item.armorProtection = 12;
    item.armorToughness = 10;
  });
  event.modify('macabre:morphegor_armor_helmet', item => {
    item.armorProtection = 7;
    item.armorToughness = 7;
  });
  event.modify('macabre:morphegor_armor_chestplate', item => {
    item.armorProtection = 15;
    item.armorToughness = 7;
  });
  event.modify('macabre:morphegor_armor_leggings', item => {
    item.armorProtection = 14;
    item.armorToughness = 7;
  });
  event.modify('macabre:morphegor_armor_boots', item => {
    item.armorProtection = 8;
    item.armorToughness = 7;
  });
  event.modify('macabre:abhorrent_armor_helmet', item => {
    item.armorProtection = 8;
    item.armorToughness = 6;
  });
  event.modify('macabre:abhorrent_armor_chestplate', item => {
    item.armorProtection = 14;
    item.armorToughness = 6;
  });
  event.modify('macabre:abhorrent_armor_leggings', item => {
    item.armorProtection = 13;
    item.armorToughness = 6;
  });
  event.modify('macabre:abhorrent_armor_boots', item => {
    item.armorProtection = 6;
    item.armorToughness = 5;
  });
  event.modify('macabre:blood_clot_armor_helmet', item => {
    item.armorProtection = 6;
    item.armorToughness = 4;
  });
  event.modify('macabre:blood_clot_armor_chestplate', item => {
    item.armorProtection = 13;
    item.armorToughness = 4;
  });
  event.modify('macabre:blood_clot_armor_leggings', item => {
    item.armorProtection = 10;
    item.armorToughness = 4;
  });
  event.modify('macabre:blood_clot_armor_boots', item => {
    item.armorProtection = 5;
    item.armorToughness = 4;
  });
    event.modify('macabre:plasma_armor_helmet', item => {
    item.armorProtection = 5;
    item.armorToughness = 4;
  });
  event.modify('macabre:plasma_armor_chestplate', item => {
    item.armorProtection = 10;
    item.armorToughness = 4;
  });
  event.modify('macabre:plasma_armor_leggings', item => {
    item.armorProtection = 8;
    item.armorToughness = 4;
  });
  event.modify('macabre:plasma_armor_boots', item => {
    item.armorProtection = 4;
    item.armorToughness = 4;
  });
});

ItemEvents.modification(event => {
  event.modify('minecraft:nether_star', item => {
    item.fireResistant = true
  });
});