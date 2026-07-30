import toast from "react-hot-toast";

export default function ErrorMessage() {
  return toast.error("No movies found for your request.");
}
