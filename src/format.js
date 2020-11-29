class Format {
  constructor(data) {
    this.data = data
    
    this.string = this.init()
    this.periods = this.getPeriods()
    this.salaries = this.getSalaries()
  }

  init() {
    const { table } = this.data

    const data = table.match(/[\d]{4}.+\,00/g)

    return data
  }

  getPeriods() {
    const periods = this.string.map(string => string.slice(0, 7))

    return periods.reverse()
  }

  getSalaries() {
    const salaries = this.string.map(string => string.slice(-(string.length - 7)))

    return salaries.reverse()
  }
  
  response() {
    const data = []

    this.periods.forEach((period, index) => {
      data.push({ period, salary: this.salaries[index] })
    })
    
    return data
  }
}

export default Format