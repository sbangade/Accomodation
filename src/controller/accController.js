import mongoose from 'mongoose';
import { message } from 'statuses';
import { ObjectId } from 'mongodb';
import { accmSchema } from '../models/accModel';
import { customersSchema } from '../models/customerModel';



const Accmd = mongoose.model('place', accmSchema);
const User = mongoose.model('customer', customersSchema);

export const getUserPlace =  async (req, res) => {
  const postID = req.query.poster;
  //var o_id = new ObjectId(postID);
  //console.log('ID - ', o_id);
  const userpost =  await Accmd.findOne({_id: postID})
  res.status(200).json(userpost) ;
}

export const addUserPlace = async (req, res) => {
  const Token = req.body.token;
  //console.log('Token', Token);
  const newPlace = new Accmd(req.body);
  //console.log(newPlace);
  const tkn = await User.findOne({token: Token});
  //console.log('Entry - ', tkn._id);
  const user = await User.findById(tkn._id);
  console.log('addeduser',user);
  newPlace.poster = user;
  await newPlace.save();
  user.placelist.push(newPlace);
  await user.save();
  res.status(201).json(newPlace);
}

export const updatePlace = async (req, res) => {
  Accmd.findOneAndUpdate({_id: req.body.postID}, req.body, { new: true, useFindAndModify: false }, (err, product) => {
    if (err) {
        res.send(err);
    }
    res.json(product);
 });
  } 

export const deletePlace = async (req, res) => {
  Accmd.findOneAndUpdate({_id: req.body.postID}, { $set:
    {
      deleted: true
    }}, null, function(err,doc) {
 if (err) { throw err; }
 else { res.send('Deleted!'); }
}); 
}
export const getAllPlaces =  async (req, res) => {
  //const postID = req.query.poster;
  //var o_id = new ObjectId(postID);
  //console.log('ID - ', o_id);
  const userpost =  await Accmd.find({deleted : false})
  res.status(200).json(userpost) ;
}

// Filter post from price low to high
export const getPlacesWithPrice =  async (req, res) => {
  //const postID = req.query.poster;
  //var o_id = new ObjectId(postID);
  //console.log('ID - ', o_id);
  const userpost =  await Accmd.find({deleted : false}).sort({
    price: 1
});
  res.status(200).json(userpost) ;
}

// Filter post from date new to old
export const getPlacesWithDate =  async (req, res) => {
  //const postID = req.query.poster;
  //var o_id = new ObjectId(postID);
  //console.log('ID - ', o_id);
  const userpost =  await Accmd.find({deleted : false}).sort({
    date: 1
});
  res.status(200).json(userpost) ;
}

// export const showFavorite =  async (req, res) => {
//   const Token = req.body.token;
//   console.log('Token', Token);
//   const poster = req.body.poster;
//   const tkn = await User.findOne({token: Token});
//   console.log('userid - ',tkn);
//   //console.log('Entry - ', tkn._id);
//   const user = await User.findById(tkn._id);
//   console.log('addeduser',user);
//  // const user = await User.findById(userpost._id);
//   //console.log('user ',userpost);
//   //const postid = userpost;
  
//   //user.plist.push(newPlace);
//   user.fav_places.push(poster);
//   res.status(200).json({
//     message: "Added as favorite"
//   });

// }

export const showFavorite = async (req, res, next) => {
  const tkn = await User.findOne({ token: req.query.token })
  console.log('drid',tkn._id)
  var jsonToSend = [];

  User
   .findOne({_id: tkn._id })
   .populate('fav_places') // key to populate
   .then(user => {
     const user_history = user.fav_places;
     console.log('history',user_history);
     var myname;
     //console.log('history',user_history)
     if(user_history == ''){
       res.send('No History - 0 Posts')
     }
     else{

      fun_for_loop(user_history)


  async function fun_for_loop(user_history) {

      var index = 0
      for (var element of user_history){
        index++

        let temp = element.poster;
        
        var value = await Register
        .findOne(temp)
        .select('first_name last_name image mobile')
        
        var jsonObject = JSON.parse("{}")
        jsonObject.title = element.title
        jsonObject.price = element.price
        jsonObject.address = element.address
        jsonObject.post_id = element._id
        jsonObject.first_name_passenger = value.first_name
        jsonObject.last_name_passenger = value.last_name
        jsonObject.image_passenger = value.image
        jsonObject.mobile_passenger = value.mobile

      

      jsonToSend.push(jsonObject) 

           if (index == user_history.length) {  
  
    res.status(200).json(
      jsonToSend);
           }
      }
   }
}
    });
    }