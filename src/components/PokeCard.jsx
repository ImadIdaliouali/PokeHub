import { getArtwork, getType } from "../utils";
import { TYPE_COLORS } from "../constants";

const PokeCard = ({ pokemon }) => {
  const { id, name } = pokemon;

  const formattedId = id.toString().padStart(3, "0");
  const type = getType(pokemon);
  const typeColor = TYPE_COLORS[type] || "bg-gray-500";

  return (
    <div className="relative max-w-xs p-6 m-4 overflow-hidden transition duration-300 ease-in-out transform shadow-lg cursor-pointer group bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
      <div className="absolute top-0 right-0 px-3 py-1 font-bold text-yellow-900 bg-yellow-400 rounded-bl-lg shadow-md">
        #{formattedId}
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`w-40 h-40 p-3 mb-4 rounded-full shadow-inner ${typeColor}`}
        >
          <img
            src={getArtwork(pokemon)}
            alt={`${name} sprite`}
            className="object-contain w-full h-full transition-transform duration-300 transform group-hover:scale-110"
          />
        </div>
        <h2 className="mb-2 text-xl font-extrabold text-gray-900 capitalize">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default PokeCard;
