import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Order = require('APP/db/models/order');

describe('Order model', function() {

  it('has the expected schema definition', () => {
    expect(Order.attributes.status).to.be.an('object');
    expect(Order.attributes.totalPrice).to.be.an('object');
  });

  describe('validations', () => {
    it('sets the default order status to Created', () => {
      const order = Order.build({
        totalPrice: 100
      });
      expect(order.status).to.equal('Created');
    });
  });

  describe('associations', () => {
    it('belongs to a user', () => {

      let creatingUser = User.create({
        firstName: 'Ben',
        lastName: 'Gu',
        email: 'TheBenjimoto@gmail.com',
        isAdmin: false
      })
      let creatingOrders = Order.create({
        status: 'Processing',
        totalPrice: 200,
      })

      return Promise.all([creatingUser, creatingOrders])
        .spread((createdUser, createdOrder) => {
          return createdOrder.setUser(createdUser)
        })
        .then(() => {
          Order.findOne({
            where: {
              order: 'Processing',
              include: {model: User}
            }
          })
        })
        .then(foundOrder => {
          expect(foundOrder.user).to.exist();
        })
    })
  })
});
