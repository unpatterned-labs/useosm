/* eslint-disable @typescript-eslint/no-explicit-any */
type FeatureClick = any; // the type returned from MapLibre click
interface ParsedFeatureInfo {
  name: string;
  resources: Record<string, any>;
  resolvedKeys: { name: string; url: string }[]; // keys of resolved for each resource
  properties: Record<string, any>;
}

const generateCommunityMapInfo = (
  features: FeatureClick[],
): ParsedFeatureInfo | null => {
  if (!features || features.length === 0) return null;

  const feature = features[0];
  const properties = feature.properties || {};
  const name = properties.nameEn || properties.name || "---";

  let resources: Record<string, any> = {};
  let resolvedKeys: { name: string; url: string }[] = [];

  if (properties.resources) {
    try {
      resources = JSON.parse(properties.resources);

      resolvedKeys = Object.values(resources).map((resource: any) => ({
        name: resource.resolved.name,
        url: resource.resolved.url,
      }));
    } catch (err) {
      console.error("Failed to parse resources JSON:", err);
    }
  }

  return { name, resources, resolvedKeys, properties };
};

export default generateCommunityMapInfo;
