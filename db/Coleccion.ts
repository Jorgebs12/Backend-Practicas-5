import mongoose from "npm:mongoose@7.6.3";
import { Coleccion } from "../types.ts";

const Schema = mongoose.Schema;

const ColeccionSchema = new mongoose.Schema({

    nombre: { type: String, requiered: true },
    comics: [{ type: Schema.Types.ObjectId, ref: 'Comic' }]
});


export type ColeccionModelType = Document & Omit<Coleccion, "id">;
export const ColeccionModel = mongoose.model<ColeccionModelType>("coleccion", ColeccionSchema);