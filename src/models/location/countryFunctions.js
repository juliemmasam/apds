const {Countries} = require('./location');

module.exports = {
  countryExists: function({country_id}){
    return new Promise(async (resolve, reject) => {
      resolve({exists: await Countries.find({'_id': country_id}).count() > 0});
    });
  },

  /** Country specific functions*/
  addCountry : function(country){
    return new Promise((resolve, reject) => {
      const newCountry = new Countries(country);
      newCountry.save().then((data) => {
        console.log("New country added");
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  getCountry : function({country_id}){
    return new Promise((resolve, reject) => {
      Countries.findById({'_id': country_id}, (err, data)=>{
        if(err){
          reject(err);
        }
        resolve(data);
      });
    });
  },

  getAllCountries : function(){
    return new Promise((resolve, reject) => {
      Countries.find({}, (err, countries)=>{
        if(err){
          reject(err);
        }
        resolve(countries);
      });
    });
  },

  deleteCountry: function({country_id}){
    return new Promise((resolve, reject) => {
      Countries.deleteOne({'_id': country_id}, (err, country) => {
        if(err){
          reject(err);
        }
        resolve({deletedCountry: country});
      });
    });
  },

  updateCountry: function({country_id, country_name, country_code}){
    return new Promise((resolve, reject) => {
      Countries.findOneAndUpdate(
      {'_id': country_id},
      {country_name: country_name, country_code: country_code},
      {new: true},
      (err, country) => {
        if(err){
          reject(err);
        }
        resolve({updatedCountry: country});
      }
    );
    });
  }
};
