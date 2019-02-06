'use strict';

module.exports = function(Customer) {
  Customer.observe('after save', function(ctx, next) {
    Customer.findById(ctx.instance.id, function(err, customer) {
      if (err) {
        console.log(err);
        next();
      }
      console.log('[new] customer ' + customer.id + ' is created.');
      customer.collection.create({}, function(err, collection) {
        if (err) {
          console.log(err);
        } else {
          console.log('collection created');
          console.log(collection);
        }
        next();
      });
    });
    return;
  });
};
