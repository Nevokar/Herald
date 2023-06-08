import "../fonts.css";

export default function Button({ string = "прочети повече", variant }) {

  switch (variant) {
    case 'lightFull':
        return (
            <button className="min-w-[240px] mr-[30px] text-xl px-8 py-3 bg-beige text-black font-nexa font-bold">
              {string} &#187;
            </button>
          );
      break;
      case 'lightEmpty':
        return (
            <button className="min-w-[240px] mr-[30px] text-xl px-8 py-3 outline outline-2 -outline-offset-2 outline-beige text-beige font-nexa font-bold">
              {string} &#187;
            </button>
          );
      break;
      case 'darkEmpty':
        return (
            <button className="min-w-[240px] mr-[30px] text-xl px-8 py-3 outline outline-2 -outline-offset-2 outline-black text-black font-nexa font-bold">
              {string} &#187;
            </button>
          );
      break;
    default:
      return (
        <button className="min-w-[240px] mr-[30px] text-xl px-8 py-3 bg-black text-beige font-nexa font-bold">
          {string} &#187;
        </button>
      );
      break;
  }
}
