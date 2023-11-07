import Swal from "sweetalert2";

export const warningAlert = (title: string, message: string) => {
  return Swal.fire({
    title: `<strong>${title}</strong>`,
    icon: "info",
    html: `${message}` + "" + "",
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `<i class="fa fa-thumbs-up"></i> yes`,
    cancelButtonText: `no`,
  }).then((v) => {
    return v.isConfirmed;
  });
};
