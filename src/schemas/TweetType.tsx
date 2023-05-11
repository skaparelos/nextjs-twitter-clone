type TweetType = {
  id: number
  text: string
  favourite_count: number
  retweet_count: number
  tweet_id: string
  tweet_created_at: string
  source: string
  createdAt: string
  updatedAt: string
  timeless: boolean
  entities?: {}
  extendedEntities?: {} 
  author: {
    id: number
    name: string
    username: string
    profile_image_url: string
    profile_created_at: string
    createdAt: string
    updatedAt: string
    enabled: boolean
    bio: string
    type: string
    profileID: string
  }
}

export default TweetType
