export default function Msg({ content }) {
  return (
    <div className="w-full flex justify-end">
      <div className="w-60 mt-3 mx-3 h-fit break-words min-h-10 text-xl text-green-600 px-2 bg-gray-700 border-2 border-green-600 rounded-lg">
        {content}
      </div>
    </div>
  );
}
