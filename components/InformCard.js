export default function InformCard() {
  return(
    <>
      <div className="bg-gray-700 mx-3 my-2 py-4 rounded-2xl shadow-xl">
        <div className="flex flex-wrap justify-center">
          <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
            <i className="fa-solid fa-temperature-high text-3xl pt-6" />
            <div className="pt-4 text-2xl font-bold">12<>*</></div>
            <div className="font-semibold py-2">Suhu</div>
          </div>
          <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
            <i className="fa-solid fa-droplet text-3xl pt-6" />
            <div className="pt-4 text-2xl font-bold">12<>*</></div>
            <div className="font-semibold py-2">Humidity</div>
          </div>
          <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
            <i className="fa-solid fa-vial text-3xl pt-6" />
            <div className="pt-4 text-2xl font-bold">12<>*</></div>
            <div className="font-semibold py-2">PH</div>
          </div>
        </div>
      </div>
    </>
  );
}