import { Message } from "@/assets/icons";

const Chat = () => {
  return (
    <button className="clamp-[size,10,12] bg-new-black rounded-full border border-white/20 grid place-items-center fixed z-100 clamp-[right,4,20] bottom-[30%] hover:scale-105 transition-transform duration-200">
      <span className="sr-only">Chat</span>

      <Message className="clamp-[size,4.5,6] text-white" />
    </button>
  );
};
export default Chat;
