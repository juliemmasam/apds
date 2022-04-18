const {Location} = require('./location');

module.exports = {
  /** Country specific functions*/
  addCountry : function(country){
    return new Promise((resolve, reject) => {
      const location = new Location(country);
      location.save().then((data) => {
        console.log("New country added");
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  getCountry : function({country_id}){
    return new Promise((resolve, reject) => {
      Location.findById({'_id': country_id}, (err, data)=>{
        if(err){
          reject(err);
        }
        resolve(data);
      });
    });
  },

  getAllCountries : function(){
    return new Promise((resolve, reject) => {
      Location.find({}, (err, countries)=>{
        if(err){
          reject(err);
        }
        resolve(countries);
      });
    });
  },

  deleteCountry: function({country_id}){
    return new Promise((resolve, reject) => {
      Location.deleteOne({'_id': country_id}, (err, country) => {
        if(err){
          reject(err);
        }
        resolve({deletedCountry: country});
      });
    });
  },

  updateCountry: function({country_id, country_name}){
    return new Promise((resolve, reject) => {
      Location.findOneAndUpdate(
      {'_id': country_id},
      {country_name: country_name},
      {new: true},
      (err, country) => {
        if(err){
          reject(err);
        }
        resolve({updatedCountry: country});
      }
    );
    });
  },

  /** End of Country specific functions*/

  /** Region specific functions*/
  // addRegion: function({country_id, region_name}){
  //
  // }
  //
  // getRegion: function({country_id, region_id}){
  //
  // }
  //
  // getAllRegions: function({country_id}){
  //
  // }
  //
  // deleteRegion: function({country_id, region_id}){
  //
  // }
  //
  // updateRegion: function({country_id, region_id}){
  //
  // }

  /** End of Region specific functions*/


  /** District specific functions*/
  // addDistrict: function({country_id, region_id, district_name}){
  //
  // }
  //
  // getDistrict: function({country_id, region_id, district_id}){
  //
  // }
  //
  // getAllDistricts: function({country_id, region_id}){
  //
  // }
  //
  // deleteDistrict: function({country_id, region_id, district_id}){
  //
  // }
  //
  // updateDistrict: function({country_id, region_id, district_id}){
  //
  // }

  /** End of District specific functions*/
};
