// import country code model
const Code = require("./models").Code;

// import request package that helps in consuming the API that contains the csv file
const request = require("request");

// import csvjson package that helps to convert csv details to json format
const csv = require("csvtojson");

/* 
 1. Get all currencies from the csv and convert the data to json with the help of csvtojson package
 2. Before saving the data to the database, first check if the given data already exists in your table
 3. If the data doesn't exists, add the given record to the table
*/
const postCSVCurrencyDetails = () => {

    csv()
        .fromStream(
            request.get(
                "https://focusmobile-interview-materials.s3.eu-west-3.amazonaws.com/Cheap.Stocks.Internationalization.Currencies.csv"
            )
        )
        .then((jsonArrayObject) => {
            jsonArrayObject.map((country) => {
                let dataToSave = {
                    country: country.Country,
                    currency: country.Currency,
                    code: country["ISO 4217 Code"],
                };

                Code.findAll({
                    where: {
                        country: country.Country,
                        currency: country.Currency,
                        code: country["ISO 4217 Code"],
                    },
                }).then((response) => {
                    if (response.length === 0) {
                        Code.create(dataToSave).then((res) => {
                            console.info("Data saved successfully");
                        });
                    } else {
                        console.info("Data already exists");
                    }
                });
            });
        });
}

/* 
1. Get and display currency of the given ISO 4217 code
2. If the given ISO 4217 code does not exist, return an error message
*/
const getCurrency = (code) => {
    Code.findOne({
        where: {
            code: code['ISO 4217 code']
        },
        attributes: ["country", "currency", "code"],
        raw: true
    }).then(response => {
        if (response) {
            console.info(response);
        } else {
            console.info('The provided country code currency does not exist')
        }
    })
}


// list all Countries with their currencies and codes
const listCountries = () => {
    Code.findAll({
        attributes: ["id", "country", "currency", "code"],
        raw: true
    }).then((codes) => {
        console.info(codes);
        console.info(`${codes.length} countries`);
    });
};



module.exports = {
    listCountries,
    postCSVCurrencyDetails,
    getCurrency
};