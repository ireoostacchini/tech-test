class FileDto {
  private _id: string;
  private _name: string;
  private _type: string;
  private _duration?: number;
  private _size?: number;
  private _userId: string;

  constructor(
    id: string,
    name: string,
    type: string,
    userId: string,
    duration?: number,
    size?: number
  ) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._duration = duration;
    this._userId = userId;
    this._size = size;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get duration(): number {
    return this._duration;
  }

  get size(): number {
    return this._size;
  }

  get userId(): string {
    return this._userId;
  }
}

export default FileDto;
