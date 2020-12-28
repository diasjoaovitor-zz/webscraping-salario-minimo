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
    const periods = this.string.map(string => string.slice(0, 7).replace('.', '-'))

    return periods.reverse()
  }

  getSalaries() {
    const salaries = this.string.map(string => string.slice(-(string.length - 7)))

    return salaries.reverse()
  }
  
  response(yearMonth) {
    const data = []

    this.periods.forEach((period, index) => {
      data.push({ period, salary: this.salaries[index] })
    })
    
    return yearMonth ? data.find(({ period }) => period === yearMonth) : data
  }
}

export default Format