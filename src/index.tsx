import { useState } from 'react';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
}

const Telegram: React.FC = () => {
  const [chats] = useState<Chat[]>([
    { id: '1', name: 'Dev Team', lastMessage: 'Great work on the release!', time: '12:45', unread: 3, avatar: '👥' },
    { id: '2', name: 'Alice', lastMessage: 'See you tomorrow!', time: '11:30', unread: 0, avatar: '👩' },
    { id: '3', name: 'Bob', lastMessage: 'Thanks for the help', time: '10:15', unread: 1, avatar: '👨' },
    { id: '4', name: 'Tech News', lastMessage: 'New AI breakthrough...', time: 'Yesterday', unread: 42, avatar: '📰' },
  ]);
  const [selectedChat, setSelectedChat] = useState('1');
  const [message, setMessage] = useState('');

  return (
    <div className="h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-3 border-b">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm"
          />
        </div>
        <div className="flex-1 overflow-auto">
          {chats.map(chat => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                selectedChat === chat.id ? 'bg-[#419fd9] text-white' : 'hover:bg-gray-50'
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#419fd9] to-[#6c9bd2] rounded-full flex items-center justify-center text-xl">
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="font-medium">{chat.name}</span>
                  <span className={`text-xs ${selectedChat === chat.id ? '' : 'text-gray-400'}`}>
                    {chat.time}
                  </span>
                </div>
                <div className={`text-sm truncate ${selectedChat === chat.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {chat.lastMessage}
                </div>
              </div>
              {chat.unread > 0 && (
                <div className="w-6 h-6 bg-[#419fd9] rounded-full flex items-center justify-center text-white text-xs">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col bg-[#e5ddd5]" style={{ backgroundImage: 'url("data:image/svg+xml,...")' }}>
        <div className="h-14 bg-[#f0f0f0] border-b flex items-center px-4">
          <span className="font-semibold">{chats.find(c => c.id === selectedChat)?.name}</span>
        </div>
        
        <div className="flex-1 p-4 overflow-auto">
          <div className="flex justify-end mb-2">
            <div className="bg-[#dcf8c6] rounded-lg px-3 py-2 max-w-md">
              <p className="text-sm">Hey! How's it going? 👋</p>
              <span className="text-xs text-gray-500 float-right ml-2">12:30 ✓✓</span>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="bg-white rounded-lg px-3 py-2 max-w-md shadow-sm">
              <p className="text-sm">Great! Just finished the new feature.</p>
              <span className="text-xs text-gray-500 float-right ml-2">12:32</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#f0f0f0]">
          <div className="flex gap-2">
            <button className="text-gray-500">📎</button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="flex-1 px-4 py-2 rounded-full"
            />
            <button className="text-gray-500">😊</button>
            <button className="w-10 h-10 bg-[#419fd9] rounded-full text-white">🎤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telegram;
