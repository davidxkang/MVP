const ScheduleItems = require('../../db/models/scheduleModels');

module.exports = {

  getSchedule: (req, res) => {
    ScheduleItems.findAll()
      .then(schedule => {
        res.status(202).send(schedule);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  createScheduleItem: (req, res) => {
    ScheduleItems.create({
      HomeTeam: req.body.HomeTeam,
      AwayTeam: req.body.AwayTeam,
      Day: req.body.Day,
      Stadium: req.body.Stadium,
    })
      .then(item => {
        res.status(202).send(item);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }

}