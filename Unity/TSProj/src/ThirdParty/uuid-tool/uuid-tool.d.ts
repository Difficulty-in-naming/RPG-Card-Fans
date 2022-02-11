export declare class UuidTool {
    /**
     * Converts an UUID string to an UUID byte array.
     * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
     * @return UUID byte array. (length: 16)
     */
    static toBytes(uuid: string): number[];
    /**
     * Converts an UUID byte array to an UUID string.
     * @param bytes UUID Byte array (length 16 bytes of bytes)
     * @return UUID string. (length 36)
     */
    static toString(bytes: number[]): string;
    /**
     * Generates a new (pseudo) UUID RFC 4122 Version 4.
     * @return UUID e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
     */
    static newUuid(): string;
    /**
     * Validated an UUID string.
     * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
     * @return True if valid, otherwise false.
     */
    static isUuid(uuid: string): boolean;
    /**
     * Compares two UUIDs.
     * @param uuid1 UUID string.
     * @param uuid2 UUID string.
     * @return True if equal, otherwise false.
     */
    static compare(uuid1: string, uuid2: string): boolean;
}
