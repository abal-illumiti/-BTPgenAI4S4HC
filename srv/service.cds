using { abal_01_d04 as my } from '../db/schema.cds';

@path: '/service/abal_01_d04'
@requires: 'authenticated-user'
service abal_01_d04Srv {
  @odata.draft.enabled
  entity CustomerMessages as projection on my.CustomerMessages;
}