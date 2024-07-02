import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHanlder() {
    setModalIsVisible(true);
  }
  
  function hideModalHanlder() {
    setModalIsVisible(false);
  }


  return (
    <>
      <MainHeader onCreatePost={showModalHanlder} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHanlder} />
      </main>
    </>
  )
}

export default App;
