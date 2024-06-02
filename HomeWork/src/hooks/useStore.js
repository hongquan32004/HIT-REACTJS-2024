import { useContext } from "react";
import Context from "../storeContext/Context";

const useStore = () => {
    const [state, dispath] = useContext(Context);
    return [state, dispath];
}
export default useStore;