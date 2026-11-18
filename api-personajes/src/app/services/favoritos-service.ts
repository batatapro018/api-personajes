import { Injectable } from '@angular/core';
import { Favorito } from '../models/favorito';
import { Personaje } from '../models/personaje';
@Injectable({
providedIn: 'root',
})
export class FavoritosService {
private favoritos: Favorito[] = [];
// CREATE
agregar(p: Personaje) {
if (this.esFavorito(p.id)) {
return;
}
const nuevo: Favorito = { id: p.id, name: p.name, image: p.image, puntaje: 1 };
this.favoritos.push(nuevo);
}
// READ
obtenerFavoritos(): Favorito[] {
return this.favoritos;
}
esFavorito(id: number): boolean {
return this.favoritos.find((f) => f.id === id) !== undefined;
}
// UPDATE
subirPuntaje(id: number) {
const fav = this.favoritos.find((f) => f.id === id);
if (fav && fav.puntaje < 5) {
fav.puntaje++;
}
}
bajarPuntaje(id: number) {
const fav = this.favoritos.find((f) => f.id === id);
if (fav && fav.puntaje > 1) {
fav.puntaje--;
}
}
// DELETE
quitar(id: number) {
this.favoritos = this.favoritos.filter((f) => f.id !== id);
}}