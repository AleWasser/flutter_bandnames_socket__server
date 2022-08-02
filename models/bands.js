const Band = require("./band");

class Bands {
  constructor() {
    this.bands = [];
  }

  addBand(band = new Band()) {
    this.bands.push(band);
  }

  getBands() {
    return this.bands;
  }

  deleteBand(id = "") {
    this.bands = this.bands.filter((band) => band.id !== id);
    return this.bands;
  }

  voteBand(id = "") {
    const bandIndex = this.bands.findIndex((band) => band.id === id);
    this.bands[bandIndex].votes++;
  }
}

module.exports = Bands;
