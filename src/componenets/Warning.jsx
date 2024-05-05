export default function Warning({ refd }) {
  return (
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={refd}
    >
      <h2 className="text-xl font-bold text-stone-700 my-4">Opps!</h2>
      <p className="text-stone-600 mb-4">
        Looks like you forget to enter a value
      </p>
      <form className="mt-4 text-right" method="dialog">
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          Close
        </button>
      </form>
    </dialog>
  );
}
