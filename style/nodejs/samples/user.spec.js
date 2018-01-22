import { expect } from 'chai';
import { graphql } from 'graphql';
import Schema from '../../../../graphql';
import { sequelize } from '../../../../models/index';

let user;

describe('#user', () => {
  describe('#queries', () => {
    before(async () => {
      user = await sequelize.models.User.create({ email: 'john@doe.com', password: 'password' });
    });

    it('shows a user', async () => {
      const query = `{
        user(user_id: ${user.id}) {
            id
            email
            Profile {
              user_id
            }
          }
        }
      `;

      const result = await graphql(Schema, query);
      if (result.errors) throw result.errors[0].message;
      expect(result.data.user.id).to.eq(`${user.id}`);
    });
  });

  after((done) => {
    done();
  });
});
