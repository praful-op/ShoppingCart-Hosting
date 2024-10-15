
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex flex-row align-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline w-full">

        <div className="flex justify-center items-center w-full ">
          <img src={item.image} className="w-3/5 h-4/5" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold  w-48 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div>
            <p className="text-green-600 font-semibold">{item.price}</p>
            
            <button class="btn btn-delete btn flex items-center border border-gray-400/60 h-12 px-6 py-0 rounded-full cursor-pointer focus:outline-none" onClick={removeFromCart}>
              <span class="mdi mdi-delete mdi-24px"></span>
              <span class="mdi mdi-delete-empty mdi-24px"></span>
              <span>Delete</span>
            </button>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
