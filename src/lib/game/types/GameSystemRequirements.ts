export type GameSystemRequirements = {
  pc?: GamePlatformRequirements;
  mac?: GamePlatformRequirements;
  linux?: GamePlatformRequirements;
};

export type GamePlatformRequirements = {
  minimum?: SystemRequirements;
  recommended?: SystemRequirements;
};

export type SystemRequirements = {
  operating_system?: string;
  processor?: string;
  memory?: string;
  graphics?: string;
  storage?: string;
};
