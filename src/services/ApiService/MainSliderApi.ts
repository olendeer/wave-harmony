import { Api, IMainSliderApi , ClientType } from "@/models/api";
import { IMainSlide } from "@/models/mainSlide";


class MainSliderApi<C extends ClientType> extends Api<IMainSliderApi, C> implements IMainSliderApi{

    fetchMainSlider = async () => await this.client.get<IMainSlide[]>('/main_slider').then(res => res.data)

}

export { MainSliderApi }