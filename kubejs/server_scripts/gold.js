ServerEvents.tags('block', event => {
  event.remove('minecraft:needs_stone_tool', [
    'minecraft:iron_ore',
    'minecraft:deepslate_iron_ore' 
  ])
  event.add('minecraft:needs_iron_tool', [
    'minecraft:iron_ore',
    'minecraft:deepslate_iron_ore'
  ])
})
ServerEvents.tags('block', event => {
  event.remove('minecraft:needs_iron_tool', [
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore' 
  ])
  event.add('minecraft:needs_stone_tool', [
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore'
  ])
})                                                                                                                                                                                                //made by blueversal