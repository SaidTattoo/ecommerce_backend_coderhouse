#E-COMERCE CODERHOUSE V1.1 
## Productos API


TODO | DESCRIPTIONS | METHOD | ENDPOINT | BODY
--- | --- |  --- | --- | ---
:heavy_check_mark:| Trae todos los productos |*GET* | `http://localhost:8080/api/productos` | void
:heavy_check_mark: | Trae un producto por id |*GET* | `http://localhost:8080/api/productos/:id` | void
:heavy_check_mark: | Edita un producto |*PUT* | `http://localhost:8080/api/productos/editar/:id` |  producto 
:heavy_check_mark: | Guarda on producto |*POST* | `http://localhost:8080/api/productos/guardar` |  producto 
:heavy_check_mark: | Elimina el producto segun el id |*DELETE* | `http://localhost:8080/api/productos/eliminar/:id` | void
:heavy_check_mark: | Busca un producto por el nombre |*GET* | `http://localhost:8080/api/productos/buscar?nombre=params` | void

## Carro de compras API

TODO | DESCRIPTIONS | METHOD | ENDPOINT | BODY
--- | --- |  --- | --- | ---
:heavy_check_mark:| Lista los productos del carro de compras |*GET* | `http://localhost:8080/api/carro/listar` | void
:heavy_check_mark: | Agrega un producto al carro de compras |*PUT* | `http://localhost:8080/api/carro/agregar/:id` |  producto 
:heavy_check_mark: | Elimina un producto del carro de compras  |*DELETE* | `http://localhost:8080/api/carro/eliminar/:id` |  idProd 



#### Objeto producto

```json 


 {
    "nombre": "Araña",
    "precio": 1200,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Poison_Spider-256.png",
    "descripcion": "",
    "codigo": "CH-002",
    "stock": 1,
}
```

#### Objeto idProducto

```json 
{
    "idProd": "6137b5c5be89683a902031f6"
}
```
