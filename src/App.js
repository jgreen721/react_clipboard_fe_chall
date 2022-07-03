import "./App.css";
import {
  Header,
  TopSection,
  MiddleSection,
  WorkflowRow,
  IconRow,
  BottomSection,
  Footer,
} from "./components";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, ease: "easeIn" } }}
      className="App"
    >
      <Header />
      <TopSection />
      <MiddleSection />
      <WorkflowRow />
      <IconRow />
      <BottomSection />
      <Footer />
    </motion.div>
  );
}

export default App;
