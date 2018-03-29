const Sequelize = require('sequelize');
const db = require('../db');

const ScheduleItem = db.define('scheduleitem', {
  HomeTeam: {
    type: Sequelize.STRING
  },
  AwayTeam: {
    type: Sequelize.STRING
  },
  Day: {
    type: Sequelize.STRING
  },
  Stadium: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
})

ScheduleItem.sync();

module.exports = ScheduleItem;