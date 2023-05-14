import Query from './resolvers/Query';
import Tweet from './resolvers/Tweet';
import User from './resolvers/User';
import Mutation from './resolvers/Mutation';
import Db, { DbTweet, DbUser } from "./db"
import { Resolvers } from "./resolvers-types.generated"
import Trend from "./resolvers/Trend"

export interface TwitterResolverContext {
    db: Db,
    dbTweetCache: Record<string, DbTweet>,
    dbUserCache: Record<string, DbUser>,
    dbTweetToFavoriteCountMap: Record<string, number>
  }

const resolvers: Resolvers<TwitterResolverContext> = {
    Query,
    Tweet,
    User,
    Mutation,
    Trend
  }

export default resolvers;