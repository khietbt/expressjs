import { type Configuration, Modules } from '@src/modules';
import { type MicroframeworkSettings } from 'microframework';

export function getConfiguration(settings?: MicroframeworkSettings): Configuration {
  return settings?.getData(Modules.CONFIGURATION);
}
