export class DataService<D,T>{
    private static readonly endpoint:string = "https://musicbase-backend.azurewebsites.net";
    private readonly _url:string;
    private readonly _uri:string;
    private readonly _Model:new (I:D) => T;

    constructor(uri:string, Model:new (I:D) => T){
        this._uri = uri;
        this._url = DataService.endpoint + uri;
        this._Model = Model;
    }

    async getAll():Promise<T[]>{
        const response:Response = await fetch(this._url);
        if(!response.ok){
            throw await response.json();
        }
        const data = await response.json();
        return data.map((object:D) => new this._Model(object));
    }

    async getById(id:string):Promise<T>{
        const response:Response = await fetch(this._url + "/" + id);
        if(!response.ok){
            throw await response.json();
        }
        const data = await response.json();
        return new this._Model(data);
    }

    async addOne(object:D):Promise<void>{
        const response:Response = await fetch(this._url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(object)
        });
        if(!response.ok){
            throw await response.json();
        }
    }

    async updateOne(id:string, object:D):Promise<void>{
        const response:Response = await fetch(this._url + "/" + id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(object)
        });
        if(!response.ok){
            throw await response.json();
        }
    }
    async deleteById(id:string):Promise<void>{
        const response:Response = await fetch(this._url + "/" + id, {
            method: "DELETE"
        });
        if(!response.ok){
            throw await response.json();
        }
    }

    async search(query:string):Promise<T[]>{
        const response:Response = await fetch(DataService.endpoint + "/search" + this._uri + "?q=" + query);
        if(!response.ok){
            throw await response.json();
        }
        const data = await response.json();
        return data.map((object:D) => new this._Model(object));
    }
}