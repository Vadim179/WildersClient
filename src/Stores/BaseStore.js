import validate from 'aproba'

export class BaseStore {
  constructor() {
    this.data = {}
  }

  /**
   * @param {String} ID
   * @return {*}
   */
  _getItem(ID) {
    validate('S', arguments)
    return this._hasItem(ID) ? this.data[ID] : null
  }

  /**
   * @param {String} ID
   * @param {*} value
   * @return {BaseStore}
   */
  _setItem(ID, value) {
    validate('S*', arguments)
    this.data[ID] = value
    return this
  }

  /**
   * @param {String} ID
   * @return {BaseStore}
   */
  _doRemoveItem(ID) {
    validate('S', arguments)
    delete this.data[ID]
    return this
  }

  /**
   * @param {String} ID
   * @return {Boolean}
   */
  _hasItem(ID) {
    validate('S', arguments)
    return !!this.data[ID]
  }
}
