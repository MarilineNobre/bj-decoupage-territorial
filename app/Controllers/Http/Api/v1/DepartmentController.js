'use strict'
const Department = use('App/Models/Department')

class DepartmentController {

  async index({ response }) {
    let departments = await Department.all()
    return response.status(200).json({
      'departments': departments
    })
  }

  async findTowns({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )
      const towns = await department.towns().fetch()
      return response.status(200).json({
        'department': department.name,
        'towns': towns
      })
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }

  async findDistricts({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )
      const districts = await department.districts().fetch()
      return response.status(200).json({
        'department': department.name,
        'districts': districts
      })
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }

  async findNeighborhoods({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )
      return response.status(200).json({'message': 'Mec, je te laisse faire ceci 😐'})
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }
}

module.exports = DepartmentController
