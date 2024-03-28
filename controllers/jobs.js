const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const mongoose = require("mongoose");
const moment = require("moment");

const getAllJobs = async (req, res) => {};

const getJob = async (req, res) => {};

const createJob = async (req, res) => {};

const updateJob = async (req, res) => {};

const deleteJob = async (req, res) => {};

const showStats = async (req, res) => {};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
};
