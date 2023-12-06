import PageContent from "./PageContent";
import FlagContextProvider from "../components/FlagContext";
import { ToastContainer } from "react-toastify";
export default async function Page() {
  return (
    <div>
      <PageContent />
      <ToastContainer autoClose={2000} />
    </div>
  );
}
