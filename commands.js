#!/usr/bin/env node

// import commander package that helps one interact with the CLI
const program = require("commander");

// import inquirer that helps in generating and defining CLI input questions
const { prompt } = require("inquirer");

const {
  listCountries,
  postCSVCurrencyDetails,
  getCurrency,
} = require(".");

// ISO 4217 code question
const currencyquestion = [
  {
    type: "input",
    name: "ISO 4217 code",
    message: "Type a country's ISO 4217 code Name",
  },
];

// Define your CLI version
program.version("1.0.0").description("Currency management system");

// save or update countries with their given currency code from the csv
program
  .command("save_currency")
  .alias("s")
  .description(
    "Save or update countries with their given currency codes from the csv"
  )
  .action(() => postCSVCurrencyDetails());

// list all countries and their courency codes
program
  .command("list_countries")
  .alias("l")
  .description("List all countries and their courency codes")
  .action(() => listCountries());

// Get specific currency
program
  .command("code")
  .alias("c")
  .description("Display details of a given ISO 4217 code")
  .action((code) => {
    prompt(currencyquestion).then((answer) => getCurrency(answer));
  });

program.parse(process.argv);
