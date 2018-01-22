import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import models from '../../../models/index';
import User from '../../types/user';

export default {
  type: User,
  description: 'Returning a single user for given ID',
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'User\'s id',
    },
  },
  resolve: async (root, args) => {
    const user = await models.User.find({ where: { id: args.user_id } });
    return user;
  },
};
