exports = module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  // //lightwallet
  // app.get('/lightwallet', function (req, res, next) {
  //   res.render('index.html');
  // });

  //display
  app.get('/display', function(req, res, next){
    res.render('display.html');
  });
  //ownersdisplay
  app.get('/owners', function(req,res,next){
    res.render('owners.html')
  });
  //user ui
  app.get('/', function (req, res, next) {
    res.render('user.html');
  });
};
