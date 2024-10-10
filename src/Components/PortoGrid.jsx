function PortoGrid() {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900">

        {/* Portfolio title */}
        {/* <div className="flex items-center justify-center h-1/5">
          <h1 className="text-white text-4xl font-bold">PORTFOLIO</h1>
        </div> */}

        {/* Responsive grid */}
        <div className="grid w-full h-3/5 md:h-2/5 lg:h-3/5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-2 sm:p-4 md:p-8 lg:p-12">
          {/* FIRST GRID ROW */}
          <div className="col-span-1 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:brightness-125 transition duration-300 ease-in-out h-20 sm:h-24 md:h-32 lg:h-40">
          </div>
          <div className="col-span-1 rounded-xl bg-gradient-to-r from-blue-800 to-blue-400 hover:brightness-125 transition duration-300 ease-in-out h-20 sm:h-24 md:h-32 lg:h-40">
          </div>
          <div className="col-span-1 md:col-span-2 rounded-xl bg-gradient-to-r from-blue-300 to-blue-900 hover:brightness-125 transition duration-300 ease-in-out h-20 sm:h-24 md:h-32 lg:h-40">
          </div>

          {/* SECOND GRID ROW */}
          <div className="col-span-1 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:brightness-125 transition duration-300 ease-in-out h-20 sm:h-24 md:h-32 lg:h-40">
          </div>
          <div className="col-span-1 md:col-span-2 rounded-xl bg-gradient-to-r from-blue-300 to-blue-900 hover:brightness-125 transition duration-300 ease-in-out h-20 sm:h-24 md:h-32 lg:h-40">
          </div>
          <div className="col-span-1 rounded-xl bg-gradient-to-r from-blue-800 to-blue-400 hover:brightness-125 transition duration-300 ease-in-out h-20 sm:h-24 md:h-32 lg:h-40">
          </div>
        </div>
      )}
    </>
  );
}

export default PortoGrid;