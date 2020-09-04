import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and save to the State
class ImageService {
  async getImage() {
    let res = await api.get("images")
    console.log(res.data.url);
    ProxyState.image = res.data.url
  }
}



const imageService = new ImageService();





export default imageService;