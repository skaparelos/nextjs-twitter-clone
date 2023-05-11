const TweetTextBox = () => {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="What's happening?"
        className="w-full text-[1.25rem] focus:outline-none placeholder-gray-500"
      />
    </div>
  )
}

export default TweetTextBox
