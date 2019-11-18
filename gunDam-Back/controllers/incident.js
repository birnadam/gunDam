const Incident = require("../models/incident");

// pulls one incident
exports.pullIncident = (req, res) => {
  Incident.findOne()
    .populate("State")
    .exec((err, incident) => {
      if (err) {
        throw err;
      }
      console.log(incident);
    });
};

// pull by state
exports.pullIncidentByState = (state, req, res) => {
  Incident.findOne({ state: state })
    .populate()
    .exec((err, incident) => {
      if (err) {
        throw err;
      }
      console.log(incident);
    });
};

// // find all incidents per state SORTED by most recent
exports.pullAllIncidentsByState = (state, req, res) => {
  Incident.find({ state })
    .populate()
    .sort({ date: -1 })
    .exec((err, incidents) => {
      if (err) {
        throw err;
      }
      console.log(incidents);
    });
};

// // find all incidents per state sorted by n_killed
exports.pullAllIncidentsByStateNumKilled = (state, req, res) => {
  Incident.find({ state })
    .populate()
    .sort({ n_killed: -1 })
    .exec((err, incidents) => {
      if (err) {
        throw err;
      }
      console.log(incidents);
    });
};

// count number of incidents per state provided
exports.countIncidentsPerState = (state, req, res) => {
  Incident.find({ state })
    .count()
    .exec((err, incidents) => {
      if (err) {
        throw err;
      }
      console.log(state, incidents);
    });
};

// counts incidents per state would be nice :O