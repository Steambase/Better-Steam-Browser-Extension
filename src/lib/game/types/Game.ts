import type { Tag } from "./Tag.js";
import type { Language } from "./Language.js";
import type { Reviews } from "./Reviews.js";
import type { Stats } from "./Stats.js";
import type { Store } from "./Store.js";
import type { GameSystemRequirements } from "./GameSystemRequirements.ts";
import type { Category } from "@/lib/category/types/Category.js";
import type { Genre } from "@/lib/genre/types/Genre.js";
import type { DeveloperReference } from "@/lib/common/types/DeveloperReference.js";
import type { PublisherReference } from "@/lib/common/types/PublisherReference.js";
import type { FranchiseReference } from "@/lib/common/types/FranchiseReference.js";
import type { BundleReference } from "@/lib/common/types/BundleReference.js";
import type { PackageReference } from "@/lib/common/types/PackageReference.js";
import type { AppReference } from "@/lib/common/types/AppReference.js";
import type { ExternalUrls } from "@/lib/common/types/ExternalUrls.js";
import type { Platform } from "@/lib/common/types/Platform.js";

export type Game = {
  /**
   * @description Id of the game
   */
  id: string;

  /**
   * @description Steam App Id of the game
   */
  steam_app_id: number;

  /**
   * @description Slug of the game
   */
  slug: string;

  /**
   * @description Name of the game
   */
  name: string;

  /**
   * @description Description of the game
   */
  description?: string;

  /**
   * @description Release date of the game
   */
  released_at?: string;

  /**
   * @description Date the game was created
   */
  created_at: string;

  /**
   * @description Date the game was last updated
   */
  updated_at: string;

  /**
   * @description Latest PICS change number
   */
  latest_change_number?: number;

  /**
   * Primary icon for the game
   */
  icon_url?: string;

  /**
   * Header image for the game
   */
  header_image_url?: string;

  /**
   * @description Primary video or trailer for the game
   */
  primary_video_url?: string;

  /**
   * External URLs for the game
   */
  external_urls: ExternalUrls;

  /**
   * @description Content descriptor identifiers.
   */
  content_descriptor_ids: number[];

  /**
   * @description Images for the game
   */
  screenshot_urls: string[];

  /**
   * @description Steam deck compatibility for the game
   */
  steam_deck_compatibility?: number;

  /**
   * @description Platforms for the game (both supported and unsupported)
   */
  platforms: Platform[];

  /**
   * @description Categories for the game
   */
  categories: Category[];

  /**
   * @description Genres for the game
   */
  genres: Genre[];

  /**
   * @description Developers for the game
   */
  developers: DeveloperReference[];

  /**
   * @description Publishers for the game
   */
  publishers: PublisherReference[];

  /**
   * @description Tags for the game
   */
  tags: Tag[];

  /**
   * @description Franchises for the game
   */
  franchises: FranchiseReference[];

  /**
   * @description Bundles which reference the game
   */
  bundles: BundleReference[];

  /**
   * @description Packages which reference the game
   */
  packages: PackageReference[];

  /**
   * @description Related apps which reference the game
   */
  related_apps: AppReference[];

  /**
   * @description Supported languages for the game
   */
  languages: Language[];

  /**
   * @description Reviews for the game
   */
  reviews: Reviews;

  /**
   * @description Stats for the game
   */
  stats: Stats;

  /**
   * @description Store information for the game
   */
  store: Store;

  /**
   * @description System requirements for PC, Mac, and Linux.
   */
  system_requirements?: GameSystemRequirements;
};

export type MinimalGame = {
  /**
   * @description Id of the game
   */
  id: string;

  /**
   * @description Steam Id of the game
   */
  steam_app_id: number;

  /**
   * @description Slug of the game
   */
  slug: string;

  /**
   * @description Name of the game
   */
  name: string;

  /**
   * @description Description of the game
   */
  description?: string;

  /**
   * @description Release date of the game
   */
  released_at?: string;

  /**
   * @description Date the game was last updated
   */
  updated_at: string;

  /**
   * @description Latest PICS change number
   */
  latest_change_number?: number;

  /**
   * Primary icon for the game
   */
  icon_image_url?: string;

  /**
   * Header image for the game
   */
  header_image_url?: string;

  /**
   * @description Primary video or trailer for the game
   */
  primary_video_url?: string;

  /**
   * @description Number of current players in the game
   */
  current_players?: number;

  /**
   * @description Historical peak number of players in the game
   */
  peak_players?: number;

  /**
   * @description Number of community hub members following the game.
   */
  community_hub_members?: number;

  /**
   * @description Calculated review score for the game
   */
  steam_calculated_review_score?: number;

  /**
   * @description Price of the game on the Steam store
   */
  price?: number;
};
