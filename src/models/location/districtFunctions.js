const {Districts} = require('./location');
const {countryExists} = require('./countryFunctions');
const {regionExists} = require('./regionFunctions');

module.exports = {
  // regionExists: function({region_id}){
  //   return new Promise(async (resolve, reject) => {
  //     resolve({exists: await Regions.find({'_id': region_id}).count() > 0});
  //   });
  // },

  /** Region specific functions*/
  addDistrict : function(district){
    return new Promise(async(resolve, reject) => {
      var {region_id, country_id} = district;
      regionExists({region_id: region_id})
      .then(exists => {
        if(!exists.exists){
          reject({errors: "The region doesn't exist"});
          return;
        }

        const newDistrict = new Distrits(district);
        newDistrict.save().then((data) => {
          console.log("New district added");
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
        return;
      })
      .catch(err => reject(err));
    });
  },

  getDistrict : function({district_id}){
    return new Promise((resolve, reject) => {
      Districts.findById({'_id': district_id}, (err, data)=>{
        if(err){
          reject(err);
        }
        resolve(data);
      });
    });
  },

  getAllDistricts : function(){
    return new Promise((resolve, reject) => {
      Districts.find({}, (err, districts)=>{
        if(err){
          reject(err);
        }
        resolve(districts);
      });
    });
  },

  deleteDistrict: function({district_id}){
    return new Promise((resolve, reject) => {
      Districts.deleteOne({'_id': district_id}, (err, district) => {
        if(err){
          reject(err);
        }
        resolve({deletedDistrict: district});
      });
    });
  },

  updateDistrict: function({district_id, district_name}){
    return new Promise((resolve, reject) => {
      Districts.findOneAndUpdate(
        {'_id': district_id},
        {district_name: district_name},
        {new: true},
        (err, district) => {
        if(err){
          reject(err);
        }
        resolve({updatedDistrict: district});
      }
      );
    });
  }
};
