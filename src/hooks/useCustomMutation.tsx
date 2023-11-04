import { MutationFunction, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const useCustomMutation = (
  invalidateKeys: any[],
  mutationFunction: MutationFunction<any, any>,
  callBack?: Function
) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFunction, {
    onSuccess: (data) => {
      console.log(data);
      console.log(data.message);
      toast.success(data.message);
      console.log(data.data);
      callBack && callBack(data.data);
    },
    onSettled: () => {
      console.log(invalidateKeys);
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries(key);
      });
    },
  });
};

export default useCustomMutation;
