import Model,{attr, hasMany} from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('boolean') userStatus;
  @hasMany('document') textEditor;
}
