import Swal from "sweetalert2";

interface CustomAlertOptions {
  title: string;
  text: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
}

export const CustomAlert = ({ text, title, icon }: CustomAlertOptions) => {
  return Swal.fire({
    text,
    title,
    icon: icon || "error",
  });
};
