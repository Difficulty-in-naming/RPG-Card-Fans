export interface UuidLike {
    id: string;
}
export declare class Uuid {
    static stringExportFormat: string;
    /**
     * Converts the JSON representation of this class to this class.
     * Example JSON: `{ "id": "...THE UUID..." }`.
     * Use: `JSON.stringify(thisClassInstance)` to convert this class to JSON string.
     * @param json Json object or string.
     */
    static fromJson(json: string | UuidLike): Uuid;
    private id;
    /**
     * UUID
     * @param uuid Optional UUID as string or byte array. Otherwise generates a new UUID.
     */
    constructor(uuid?: string | number[]);
    /**
     * Re-generates a new UUID for this instance.
     */
    generate(): this;
    /**
     * Converts an UUID byte array to an UUID string. (length: 36)
     * @param bytes UUID Byte array (length 16 bytes of bytes)
     */
    fromBytes(bytes: number[]): this;
    /**
     * Converts this UUID to an UUID byte array. (length: 16)
     * @return UUID byte array. (length: 16)
     */
    toBytes(): number[];
    /**
     * Sets this UUID from a string.
     * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
     */
    fromString(uuid: string): this;
    /**
     * To UUID string.
     * @return UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
     */
    toString(): string;
    /**
     * Validates this UUID.
     * @return True if valid, otherwise false.
     */
    isValid(): boolean;
    /**
     * Compares this UUID with another UUID.
     * @param uuid Another UUID or UUID-string.
     * @return True if equal, otherwise false.
     */
    equals(uuid: Uuid | string): boolean;
}
