export interface DetectedCapacityClaim {
  capacityValue: number | null;
  capacityUnit: 'MW' | 'GW' | 'unknown';
  capacityGw: number | null;
  capacityType: string;
  region: string | null;
  country: string | null;
  announcementYear: number | null;
  targetYear: number | null;
  deliveryStage: string;
  sourceConfidence: string;
  flags: string[];
  evidence: string;
}

export interface UrlAnalysisResponse {
  url: string;
  title: string;
  detectedClaims: DetectedCapacityClaim[];
  scenarioLikelihood: { low: number; mid: number; high: number };
  explanation: string[];
  flags: string[];
  suggestedInput: {
    region: string | null;
    yearX: number | null;
    yearY: number | null;
    capacityGw: number | null;
    capacityType: string;
    confidence: string;
  };
}
