export default function Navbar() {
  return(
    <div className="">
      <div className="bg-yellow-900 px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            <i className="fas fa-user-circle text-3xl"></i>
          </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">AgroBa</h2>
            </div>
            <div className="space-x-2">
              <i className="fas fa-calendar-days text-3xl"></i>
            </div>
          </div>
      </div>
    </div>
  );
}