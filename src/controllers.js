import scrape from 'scrape-it'
import Format from './format.js'

class Controller {
  async read(_, res) {
    try {
      const { data } = await scrape('http://www.ipeadata.gov.br/exibeserie.aspx?stub=1&serid1739471028=1739471028', {
        table: 'table'
      })

      const format = new Format(data)

      return res.status(200).json(format.response())
      
    } catch (error) {
      return res.status(400).json({
        msg: 'Request error',
        error: error
      })
    }
  }
}

export default Controller