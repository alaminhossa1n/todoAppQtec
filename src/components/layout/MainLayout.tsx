import Home from "../../pages/Home";

const MainLayout = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto bg-violet-100 relative">
      <h2 className="text-3xl text-white text-center bg-violet-600 p-3">
        QTEC TODO Application
      </h2>
      <Home />
      <footer className="bg-violet-200 py-4 text-center absolute bottom-0 m-0 w-full">
        <p>&copy; 2024 Al-Aamin Hossain. All rights reserved.</p>
        <p>
          Find me on GitHub:{" "}
          <a href="https://github.com/alaminhossa1n" className="underline">
            alaminhossa1n
          </a>
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
