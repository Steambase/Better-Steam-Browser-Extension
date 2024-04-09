export type BundleReference = {
    id: string,
    steam_bundle_id: number,
    slug: string,
    name?: string,
    header_image_url?: string,
    final_price: number,
    app_ids: string[],
    package_ids: string[]
}
