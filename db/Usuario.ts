import mongoose from "npm:mongoose@7.6.3";
import { Usuario } from "../types.ts";

const Schema = mongoose.Schema;

const UsuarioSchema = new mongoose.Schema({

    name: { type: String, requiered: true },
    email: { type: String, requiered: true },
    colecciones: [{ type: Schema.Types.ObjectId, ref: 'Coleccion' }]
});


UsuarioSchema.path("name").validate(async (name: string) => {

    if (!name) {
        return false;
    }
  });
  

export type UsuarioModelType = Document & Omit<Usuario, "id">;
export const UsuarioModel = mongoose.model<UsuarioModelType>("usuario", UsuarioSchema);