const Item = require('./item.js')
const AgedBrie = require('./agedbrie.js')
const Ordinary = require('./ordinary_items.js')
const Conjured = require('./conjured_items.js')
const Sulfuras = require('./sulfuras.js')
const Passes = require('./passes.js')

const Classes = {
  'Aged Brie': AgedBrie,
  'Conjured': Conjured,
  'Ordinary': Ordinary,
  'Backstage passes to a TAFKAL80ETC concert': Passes,
  'Sulfuras, Hand of Ragnaros': Sulfuras
}

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    this.items.map(item => {
      const ItemClass = Classes[item.name]
      const updatedItem = new ItemClass(item)
      updatedItem.update()
      return this.items
    })
    return this.items
  }
}

module.exports = Shop
