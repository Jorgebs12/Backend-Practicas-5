import { ColeccionModel, ColeccionModelType } from "../db/Coleccion.ts";
import { ComicModelType, ComicModel } from "../db/Comic.ts";

export const Coleccion = {
    comics: async (parent: ColeccionModelType): Promise<ComicModelType[]> => {
        const c = await ComicModel.find({ _id: { $in: parent.comics } }).exec();
        return c;
    },
  };
  