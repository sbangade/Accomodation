import { getUserPlace,
    addUserPlace,
    updatePlace,
    getAllPlaces,
    getPlacesWithPrice,
    getPlacesWithDate,
    deletePlace,
    showFavorite
} from '../controller/accController';

const routes = (app) => {

    // app.route('/add/Faq')
    // .post(getEmail);


    // app.route('/add')
    // .post(addnewEmail);
    //
    app.route('/place')
    .get((req,res, next) => {
        // middleware
        next();
    }, getUserPlace)
    
    // Post endpoint
    .post(addUserPlace)
    .put(updatePlace);
    app.route('/all')
    .get(getAllPlaces);
    
    app.route('/price')
    .get(getPlacesWithPrice);
    
    app.route('/delete')
    .post(deletePlace);
    
    app.route('/date')
    .get(getPlacesWithDate);
    
    app.route('/favorite')
    .get(showFavorite);
    

    
    
    

    // app.route('/user')
    // .get(getFaqs);

    // app.route('/like')
    // .put(addLikes);

    // app.route('/dislike')
    // .put(addDisLikes);

    // app.route('/comment')
    // .put(addComment);
 }
export default routes;