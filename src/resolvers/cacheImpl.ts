type Level = "request" | "session"; // | '???' | 'no-cache'

export type CacheOptions = {
  level?: Level;
  key?: string;
  expiration?: number;
};

export class MapCache<Value> {
  private _map: Map<string, Value>;

  constructor() {
    this._map = new Map();
  }

  public set(key: string, value: Value) {
    this._map.set(key, value);
  }

  public get(key: string) {
    if (this._map.has(key)) {
      return this._map.get(key);
    }
  }

  public has(key: string) {
    return this._map.has(key);
  }

  public delete(key: string) {
    return this._map.delete(key);
  }

  public clear() {
    return this._map.clear();
  }
}
