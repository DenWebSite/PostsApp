import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Index as MainIndex } from "./pages/main/Index";
import { Index as PostsIndex } from "./pages/posts/Index";
import { PostShow as PostShow } from "./pages/posts/Show";
import { Create } from "./pages/posts/Create";
import { Edit } from "./pages/posts/Edit";
import { ROUTES } from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        {/* хедер с ссылками */}
        <div className="bg-white py-4 border-b border-bs-gray-950 w-full">
          <div className="w-1/2 mx-auto flex gap-4 justify-center">
            <Link to={ROUTES.MAIN_INDEX}>Main</Link>
            <Link to={ROUTES.POST_INDEX}>Posts</Link>
          </div>
        </div>

        {/* заменяемая часть - SPA */}
        <div className="bg-gray-300 min-h-screen">
          <div className="w-1/2 mx-auto">
            <Routes>
              <Route path={ROUTES.MAIN_INDEX} element={<MainIndex />}></Route>
              <Route path={ROUTES.POST_INDEX} element={<PostsIndex />}></Route>
              <Route path={ROUTES.POST_CREATE} element={<Create />}></Route>

              <Route path={ROUTES.POST_EDIT} element={<Edit />}></Route>
              <Route path={ROUTES.POST_SHOW} element={<PostShow />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
