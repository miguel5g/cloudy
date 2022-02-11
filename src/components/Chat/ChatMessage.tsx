interface ChatMessageProps {
  isSender?: boolean;
  isFirstFromAuthor?: boolean;
}

export const ChatMessage = ({ isFirstFromAuthor = true, isSender = true }: ChatMessageProps) => {
  return (
    <div className={`flex gap-2 px-8 ${isSender ? 'flex-row-reverse' : ''}`}>
      {isFirstFromAuthor ? (
        <img
          className="w-10 h-10 rounded-lg"
          src="https://dummyimage.com/64x64"
          alt="Message's author"
        />
      ) : (
        <div className="ml-10" />
      )}

      <div className={`w-4/5 py-4 px-8 rounded-2xl bg-${isSender ? 'sky-500/10' : 'slate-300/20'}`}>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laudantium aliquam?
          Modi ea aperiam optio, accusantium recusandae deleniti eius consectetur pariatur a quaerat
          necessitatibus distinctio officiis delectus cumque temporibus aut.
        </p>
      </div>
    </div>
  );
};
