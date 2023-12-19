import { UsuarioModelType } from "../db/Usuario.ts";
import { ColeccionModel, ColeccionModelType } from "../db/Coleccion.ts";

export const Usuario = {
    colecciones: async (parent: UsuarioModelType): Promise<ColeccionModelType[]> => {
        const c = await ColeccionModel.find({ _id: { $in: parent.colecciones } }).exec();
        return c;
    }
};