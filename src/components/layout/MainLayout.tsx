import Home from "../../pages/Home";

const MainLayout = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto bg-violet-100">
       <h2 className="text-3xl text-white text-center bg-violet-600 p-3">
        QTEC TODO Application
      </h2>
      <Home />
    </div>
  );
};

export default MainLayout;
