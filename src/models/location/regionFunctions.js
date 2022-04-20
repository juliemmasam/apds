const {Regions} = require('./location');
const {countryExists} = require('./countryFunctions');

module.exports = {
  /** Region specific functions*/
  addRegion : function(region){
    return new Promise(async(resolve, reject) => {
      var {country_id} = region;
      countryExists({country_id: country_id})
      .then(exists => {
        if(!exists.exists){
          reject({errors: "The country doesn't exist"});
          return;
        }

        const newRegion = new Regions(region);
        newRegion.save().then((data) => {
          console.log("New region added");
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
        return;
      })
      .catch(err => reject(err));
    });
  },

  getRegion : function({region_id}){
    return new Promise((resolve, reject) => {
      Regions.findById({'_id': region_id}, (err, data)=>{
        if(err){
          reject(err);
        }
        resolve(data);
      });
    });
  },

  getAllRegions : function(){
    return new Promise((resolve, reject) => {
      Regions.find({}, (err, regions)=>{
        if(err){
          reject(err);
        }
        resolve(regions);
      });
    });
  },

  deleteRegion: function({region_id}){
    return new Promise((resolve, reject) => {
      Regions.deleteOne({'_id': region_id}, (err, region) => {
        if(err){
          reject(err);
        }
        resolve({deletedRegion: region});
      });
    });
  },

  updateRegion: function({region_id, region_name}){
    return new Promise((resolve, reject) => {
      Regions.findOneAndUpdate(
        {'_id': region_id},
        {region_name: country_name},
        {new: true},
        (err, region) => {
        if(err){
          reject(err);
        }
        resolve({updatedRegion: region});
      }
      );
    });
  }
};
