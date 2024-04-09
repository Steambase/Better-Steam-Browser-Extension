export type GameInfoRow = {
    title: string;
    value?: string;
    href?: string;

    /**
     * @description Map of text to urls. When provided,
     * there are multiple values to display in the row.
     */
    map?: Map<string, string>;
}